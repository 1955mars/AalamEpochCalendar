/**
 * Image Validation Script
 * 
 * Usage:
 *   npx tsx scripts/validate_images.ts                    # Validate all event images
 *   npx tsx scripts/validate_images.ts <journey-id>       # Validate images for specific journey
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { ALL_EVENTS } from '../data/allEvents';
import { JOURNEYS } from '../data/journeys';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, '../public/images');
const MIN_IMAGE_SIZE = 5000; // 5KB minimum

interface ValidationResult {
    valid: number;
    missing: number;
    tooSmall: number;
    duplicates: number;
    details: {
        missing: string[];
        tooSmall: { id: string; size: number }[];
        duplicates: { id1: string; id2: string; hash: string }[];
    };
}

function validateImages(eventIds?: string[]): ValidationResult {
    const result: ValidationResult = {
        valid: 0,
        missing: 0,
        tooSmall: 0,
        duplicates: 0,
        details: {
            missing: [],
            tooSmall: [],
            duplicates: []
        }
    };

    const hashMap = new Map<string, string>(); // hash -> event ID
    const eventsToCheck = eventIds
        ? ALL_EVENTS.filter(e => eventIds.includes(e.id))
        : ALL_EVENTS.filter(e => e.type !== 'phase_marker');

    eventsToCheck.forEach(event => {
        if (!event.imageUrl) return;

        const imageFile = event.imageUrl.split('/').pop()!;
        const imagePath = path.join(IMAGES_DIR, imageFile);

        // Check existence
        if (!fs.existsSync(imagePath)) {
            result.missing++;
            result.details.missing.push(event.id);
            return;
        }

        // Check size
        const stats = fs.statSync(imagePath);
        if (stats.size < MIN_IMAGE_SIZE) {
            result.tooSmall++;
            result.details.tooSmall.push({ id: event.id, size: stats.size });
            return;
        }

        // Check for duplicates via hash
        const fileBuffer = fs.readFileSync(imagePath);
        const hash = crypto.createHash('md5').update(fileBuffer).digest('hex');

        if (hashMap.has(hash)) {
            result.duplicates++;
            result.details.duplicates.push({
                id1: event.id,
                id2: hashMap.get(hash)!,
                hash
            });
        } else {
            hashMap.set(hash, event.id);
        }

        result.valid++;
    });

    return result;
}

function printResults(result: ValidationResult, journeyName?: string) {
    const total = result.valid + result.missing + result.tooSmall;
    const label = journeyName ? `Journey: ${journeyName}` : 'All Events';

    console.log(`\n📊 Image Validation Report: ${label}`);
    console.log('═'.repeat(50));
    console.log(`   ✅ Valid:      ${result.valid}/${total}`);
    console.log(`   ❌ Missing:    ${result.missing}`);
    console.log(`   ⚠️  Too Small:  ${result.tooSmall}`);
    console.log(`   🔄 Duplicates: ${result.duplicates}`);

    if (result.details.missing.length > 0) {
        console.log('\n❌ Missing Images:');
        result.details.missing.slice(0, 10).forEach(id => console.log(`   - ${id}`));
        if (result.details.missing.length > 10) {
            console.log(`   ... and ${result.details.missing.length - 10} more`);
        }
    }

    if (result.details.tooSmall.length > 0) {
        console.log('\n⚠️  Too Small (< 5KB):');
        result.details.tooSmall.slice(0, 10).forEach(({ id, size }) =>
            console.log(`   - ${id} (${size} bytes)`)
        );
    }

    if (result.details.duplicates.length > 0) {
        console.log('\n🔄 Duplicate Images:');
        result.details.duplicates.slice(0, 5).forEach(({ id1, id2 }) =>
            console.log(`   - ${id1} = ${id2}`)
        );
    }

    console.log('');

    // Exit code for CI
    if (result.missing > 0 || result.tooSmall > 0) {
        console.log('💡 Run: npm run regenerate:images --missing');
        process.exit(1);
    }
}

async function main() {
    const args = process.argv.slice(2);

    if (args.length > 0 && args[0] !== '--all') {
        // Validate specific journey
        const journey = JOURNEYS.find(j => j.id === args[0]);
        if (!journey) {
            console.error(`Journey not found: ${args[0]}`);
            process.exit(1);
        }
        const result = validateImages(journey.eventIds);
        printResults(result, journey.title);
    } else {
        // Validate all
        const result = validateImages();
        printResults(result);
    }
}

main().catch(console.error);
