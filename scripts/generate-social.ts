/**
 * Social Media Carousel Generator (Simple 6-Slide Format)
 * 
 * 1. Thumbnail + Journey Title (homepage style)
 * 2-5. Four key events with image + year + title + description
 * 6. CTA with link to documentary mode
 * 
 * Usage: npx tsx scripts/generate-social.ts [journeyId]
 */

import sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { JOURNEYS } from '../data/journeys';
import { ALL_EVENTS } from '../data/allEvents';
import { TimelineEvent } from '../types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'social');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const WIDTH = 1080;
const HEIGHT = 1080;

function getJourneyEvents(journeyId: string): TimelineEvent[] {
    const journey = JOURNEYS.find(j => j.id === journeyId);
    if (!journey) return [];

    return journey.eventIds
        .map(id => {
            const baseEvent = ALL_EVENTS.find(e => e.id === id);
            if (!baseEvent) return null;
            const override = journey.overrides?.[id];
            if (override) {
                return {
                    ...baseEvent,
                    title: override.title || baseEvent.title,
                    description: override.description || baseEvent.description,
                };
            }
            return baseEvent;
        })
        .filter((e): e is TimelineEvent => e !== null && e.type !== 'phase_marker');
}

function resolveImagePath(imageUrl: string): string {
    const match = imageUrl.match(/['"]?(images\/[\w\-\.]+\.(jpg|png|jpeg|webp))['"]?/i);
    if (match) {
        const imagePath = path.join(PUBLIC_DIR, match[1]);
        if (fs.existsSync(imagePath)) return imagePath;
    }
    return '';
}

function escapeXml(text: string): string {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function wrapText(text: string, maxChars: number, maxLines: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let current = '';
    for (const word of words) {
        if ((current + ' ' + word).trim().length <= maxChars) {
            current = (current + ' ' + word).trim();
        } else {
            if (current) lines.push(current);
            current = word;
        }
    }
    if (current) lines.push(current);
    return lines.slice(0, maxLines);
}

/**
 * Slide 1: Thumbnail style (Journey title + description centered)
 */
function createThumbnailOverlay(title: string, description: string): Buffer {
    const titleLines = wrapText(title, 28, 2);
    const descLines = wrapText(description, 48, 2);
    const centerY = HEIGHT / 2;

    const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:rgba(0,0,0,0.4)"/>
                <stop offset="40%" style="stop-color:rgba(0,0,0,0.15)"/>
                <stop offset="60%" style="stop-color:rgba(0,0,0,0.15)"/>
                <stop offset="100%" style="stop-color:rgba(0,0,0,0.6)"/>
            </linearGradient>
            <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(0,0,0,0.8)"/></filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        ${titleLines.map((line, i) => `
            <text x="${WIDTH / 2}" y="${centerY - 30 + (i * 65)}" font-family="Arial, sans-serif" font-size="58" font-weight="900" fill="white" text-anchor="middle" filter="url(#shadow)">${escapeXml(line)}</text>
        `).join('')}
        ${descLines.map((line, i) => `
            <text x="${WIDTH / 2}" y="${centerY + 60 + (titleLines.length * 65) + (i * 34)}" font-family="Georgia, serif" font-size="26" fill="rgba(255,255,255,0.9)" text-anchor="middle">${escapeXml(line)}</text>
        `).join('')}
        <text x="${WIDTH - 50}" y="${HEIGHT - 40}" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="rgba(245,158,11,0.9)" text-anchor="end">aalam.xyz</text>
    </svg>`;
    return Buffer.from(svg);
}

/**
 * Slides 2-5: Event style (Year + Title + Description centered)
 */
function createEventOverlay(year: string, title: string, description: string): Buffer {
    const titleLines = wrapText(title, 26, 2);
    const descLines = wrapText(description, 48, 3);
    const centerY = HEIGHT / 2;

    const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:rgba(0,0,0,0.4)"/>
                <stop offset="40%" style="stop-color:rgba(0,0,0,0.15)"/>
                <stop offset="60%" style="stop-color:rgba(0,0,0,0.15)"/>
                <stop offset="100%" style="stop-color:rgba(0,0,0,0.6)"/>
            </linearGradient>
            <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(0,0,0,0.8)"/></filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="${WIDTH / 2}" y="${centerY - 100}" font-family="monospace" font-size="42" font-weight="bold" fill="white" text-anchor="middle" filter="url(#shadow)">${escapeXml(year)}</text>
        ${titleLines.map((line, i) => `
            <text x="${WIDTH / 2}" y="${centerY - 10 + (i * 65)}" font-family="Arial, sans-serif" font-size="54" font-weight="900" fill="white" text-anchor="middle" filter="url(#shadow)">${escapeXml(line)}</text>
        `).join('')}
        ${descLines.map((line, i) => `
            <text x="${WIDTH / 2}" y="${centerY + 80 + (titleLines.length * 65) + (i * 34)}" font-family="Georgia, serif" font-size="26" fill="rgba(255,255,255,0.9)" text-anchor="middle">${escapeXml(line)}</text>
        `).join('')}
    </svg>`;
    return Buffer.from(svg);
}

/**
 * Slide 6: CTA with link
 */
function createCTAOverlay(journeyTitle: string, journeyId: string): Buffer {
    const url = `aalam.xyz/journey/${journeyId}`;
    const buttonWidth = url.length * 16 + 60;
    const centerY = HEIGHT / 2;

    const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:rgba(0,0,0,0.5)"/>
                <stop offset="50%" style="stop-color:rgba(0,0,0,0.4)"/>
                <stop offset="100%" style="stop-color:rgba(0,0,0,0.7)"/>
            </linearGradient>
            <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(0,0,0,0.8)"/></filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="${WIDTH / 2}" y="${centerY - 60}" font-family="Arial, sans-serif" font-size="52" font-weight="900" fill="white" text-anchor="middle" filter="url(#shadow)">Explore the Full Journey</text>
        <text x="${WIDTH / 2}" y="${centerY}" font-family="Georgia, serif" font-size="28" fill="rgba(255,255,255,0.85)" text-anchor="middle">Watch in documentary mode</text>
        <rect x="${(WIDTH - buttonWidth) / 2}" y="${centerY + 40}" width="${buttonWidth}" height="56" rx="28" fill="#f59e0b"/>
        <text x="${WIDTH / 2}" y="${centerY + 77}" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#1e1e3f" text-anchor="middle">${escapeXml(url)}</text>
    </svg>`;
    return Buffer.from(svg);
}

async function generateSlide(imagePath: string, overlay: Buffer): Promise<Buffer> {
    let baseImage: sharp.Sharp;
    if (imagePath && fs.existsSync(imagePath)) {
        baseImage = sharp(imagePath).resize(WIDTH, HEIGHT, { fit: 'cover', position: 'center' });
    } else {
        baseImage = sharp({ create: { width: WIDTH, height: HEIGHT, channels: 4, background: { r: 30, g: 30, b: 63, alpha: 1 } } });
    }
    return baseImage.composite([{ input: overlay, top: 0, left: 0 }]).png().toBuffer();
}

async function generateCarousel(journeyId: string): Promise<void> {
    const journey = JOURNEYS.find(j => j.id === journeyId);
    if (!journey) { console.error(`Journey not found: ${journeyId}`); return; }

    console.log(`Generating 6-slide carousel for: ${journey.title}`);

    const outputDir = path.join(OUTPUT_DIR, journeyId);
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const events = getJourneyEvents(journeyId);
    if (events.length === 0) { console.error(`No events found`); return; }

    // Select 4 events evenly spaced
    const indices = [0, Math.floor(events.length * 0.33), Math.floor(events.length * 0.66), events.length - 1];
    const keyEvents = [...new Set(indices)].map(i => events[i]).filter(Boolean).slice(0, 4);

    // Slide 1: Thumbnail
    console.log(`  Slide 1: Thumbnail`);
    const thumbPath = journey.thumbnailUrl ? path.join(PUBLIC_DIR, journey.thumbnailUrl) : resolveImagePath(events[0].imageUrl);
    const slide1 = await generateSlide(thumbPath, createThumbnailOverlay(journey.title, journey.description));
    fs.writeFileSync(path.join(outputDir, 'slide-1.png'), slide1);

    // Slides 2-5: Four events
    for (let i = 0; i < keyEvents.length; i++) {
        const e = keyEvents[i];
        console.log(`  Slide ${i + 2}: ${e.title}`);
        const slide = await generateSlide(resolveImagePath(e.imageUrl), createEventOverlay(e.year, e.title, e.description));
        fs.writeFileSync(path.join(outputDir, `slide-${i + 2}.png`), slide);
    }

    // Slide 6: CTA
    console.log(`  Slide 6: CTA`);
    const slide6 = await generateSlide(resolveImagePath(keyEvents[keyEvents.length - 1].imageUrl), createCTAOverlay(journey.title, journeyId));
    fs.writeFileSync(path.join(outputDir, 'slide-6.png'), slide6);

    console.log(`✅ Carousel saved to: ${outputDir}`);
}

async function main() {
    const journeyId = process.argv[2];
    if (!journeyId) {
        console.log('Usage: npx tsx scripts/generate-social.ts <journeyId>');
        console.log('\nAvailable journeys:');
        JOURNEYS.forEach(j => console.log(`  - ${j.id}`));
        return;
    }
    await generateCarousel(journeyId);
}

main().catch(console.error);
