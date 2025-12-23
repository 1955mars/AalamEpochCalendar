/**
 * Unified Image Regeneration Script
 * 
 * Usage:
 *   npx tsx scripts/regenerate_images.ts <journey-id>           # Regenerate all images for a journey
 *   npx tsx scripts/regenerate_images.ts <event-id> [event-id]  # Regenerate specific event images
 *   npx tsx scripts/regenerate_images.ts --missing              # Regenerate only missing/small images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_EVENTS } from '../data/allEvents';
import { JOURNEYS } from '../data/journeys';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, '../public/images');
const MIN_IMAGE_SIZE = 5000; // 5KB minimum

// Pollinations.ai configuration
const POLLINATIONS_BASE = 'https://image.pollinations.ai/prompt';
const IMAGE_WIDTH = 768;
const IMAGE_HEIGHT = 512;

interface EventToRegenerate {
    id: string;
    title: string;
    description: string;
    year: string;
    imageFile: string;
}

function getEraContext(yearNumeric: number): string {
    // Add era-specific negative prompts to avoid anachronisms
    if (yearNumeric < -4000000000) {
        return 'primordial Earth, no life, no plants, no animals, volcanic, barren';
    }
    if (yearNumeric < -66000000) {
        return 'prehistoric, ancient Earth, no humans';
    }
    if (yearNumeric < -300000) {
        return 'prehistoric, ancient, no modern technology';
    }
    if (yearNumeric < 1500) {
        return 'ancient or medieval, no modern technology, historical';
    }
    if (yearNumeric < 1900) {
        return 'historical, 18th-19th century aesthetic';
    }
    return 'modern era';
}

function buildPrompt(event: any): string {
    const era = getEraContext(event.yearNumeric);
    const basePrompt = `${event.title}, ${event.description.slice(0, 100)}`;
    return `${basePrompt}, ${era}, cinematic, dramatic lighting, high quality, 4k`;
}

async function downloadImage(prompt: string, outputPath: string): Promise<boolean> {
    const encodedPrompt = encodeURIComponent(prompt);
    const url = `${POLLINATIONS_BASE}/${encodedPrompt}?width=${IMAGE_WIDTH}&height=${IMAGE_HEIGHT}&nologo=true`;

    console.log(`   Downloading: ${path.basename(outputPath)}...`);

    const maxRetries = 3;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                if (response.status === 502 && attempt < maxRetries) {
                    console.log(`   ⚠️  502 error, retrying (${attempt}/${maxRetries})...`);
                    await new Promise(r => setTimeout(r, 2000 * attempt));
                    continue;
                }
                throw new Error(`HTTP ${response.status}`);
            }

            const buffer = Buffer.from(await response.arrayBuffer());

            if (buffer.length < MIN_IMAGE_SIZE) {
                console.log(`   ⚠️  Image too small (${buffer.length} bytes), retrying...`);
                await new Promise(r => setTimeout(r, 1500));
                continue;
            }

            fs.writeFileSync(outputPath, buffer);
            console.log(`   ✓ Saved (${Math.round(buffer.length / 1024)}KB)`);
            return true;
        } catch (err: any) {
            if (attempt === maxRetries) {
                console.error(`   ✗ Failed: ${err.message}`);
                return false;
            }
            await new Promise(r => setTimeout(r, 2000));
        }
    }
    return false;
}

function getEventsToRegenerate(args: string[]): EventToRegenerate[] {
    const events: EventToRegenerate[] = [];

    if (args.includes('--missing')) {
        // Find all events with missing or small images
        ALL_EVENTS.forEach(event => {
            if (!event.imageUrl || event.type === 'phase_marker') return;

            const imageFile = event.imageUrl.split('/').pop()!;
            const imagePath = path.join(IMAGES_DIR, imageFile);

            const needsRegen = !fs.existsSync(imagePath) ||
                fs.statSync(imagePath).size < MIN_IMAGE_SIZE;

            if (needsRegen) {
                events.push({
                    id: event.id,
                    title: event.title,
                    description: event.description,
                    year: event.year,
                    imageFile
                });
            }
        });
    } else if (args.length > 0) {
        // Check if first arg is a journey ID
        const journey = JOURNEYS.find(j => j.id === args[0]);

        if (journey) {
            // Regenerate all events in the journey
            journey.eventIds.forEach(id => {
                const event = ALL_EVENTS.find(e => e.id === id);
                if (event && event.imageUrl) {
                    const imageFile = event.imageUrl.split('/').pop()!;
                    events.push({
                        id: event.id,
                        title: event.title,
                        description: event.description,
                        year: event.year,
                        imageFile
                    });
                }
            });

            // check thumbnail
            if (journey.thumbnailUrl) {
                const thumbFile = journey.thumbnailUrl.split('/').pop()!;
                const thumbPath = path.join(IMAGES_DIR, thumbFile);

                // Add if missing or forcing (we don't have force flag yet, so just missing/small check?)
                // Actually, if we are running for a journey, we usually want to regen all? 
                // But the user asked why we *miss* it. 
                // Let's add it if it's missing OR if we are doing a full regen.
                // The current logic for events is: "Regenerate all events in the journey" (unconditional).
                // So we should add the thumbnail unconditionally too.

                events.push({
                    id: `${journey.id}-thumbnail`,
                    title: journey.title,
                    description: journey.description,
                    year: 'Journey Cover',
                    imageFile: thumbFile
                });
            }
        } else {
            // Treat args as event IDs
            args.forEach(id => {
                const event = ALL_EVENTS.find(e => e.id === id);
                if (event && event.imageUrl) {
                    const imageFile = event.imageUrl.split('/').pop()!;
                    events.push({
                        id: event.id,
                        title: event.title,
                        description: event.description,
                        year: event.year,
                        imageFile
                    });
                } else {
                    console.warn(`⚠️  Event not found: ${id}`);
                }
            });
        }
    }

    return events;
}

async function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log(`
Usage:
  npm run regenerate:images <journey-id>        # Regenerate all images for a journey
  npm run regenerate:images <event-id> [...]    # Regenerate specific events
  npm run regenerate:images --missing           # Regenerate missing/corrupt images only

Examples:
  npm run regenerate:images cosmic-origins
  npm run regenerate:images cosmic-25 p7-14
  npm run regenerate:images --missing
`);
        process.exit(0);
    }

    const events = getEventsToRegenerate(args);

    if (events.length === 0) {
        console.log('No events to regenerate.');
        process.exit(0);
    }

    console.log(`\n🖼️  Regenerating ${events.length} images...\n`);

    let success = 0;
    let failed = 0;

    for (const event of events) {
        console.log(`[${event.year}] ${event.title}`);
        const prompt = buildPrompt(event);
        const outputPath = path.join(IMAGES_DIR, event.imageFile);

        if (await downloadImage(prompt, outputPath)) {
            success++;
        } else {
            failed++;
        }

        // Rate limiting
        await new Promise(r => setTimeout(r, 1000));
    }

    console.log(`\n✅ Complete: ${success} succeeded, ${failed} failed\n`);
}

main().catch(console.error);
