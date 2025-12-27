/**
 * Batch Social Media Carousel Generator
 * Generates carousels for ALL journeys
 * 
 * Usage: npx tsx scripts/generate-all-social.ts
 */

import { JOURNEYS } from '../data/journeys';
import { execSync } from 'child_process';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateAll() {
    console.log(`\n🚀 Generating carousels for ${JOURNEYS.length} journeys...\n`);

    for (let i = 0; i < JOURNEYS.length; i++) {
        const journey = JOURNEYS[i];
        console.log(`[${i + 1}/${JOURNEYS.length}] ${journey.title}`);

        try {
            execSync(`npx tsx scripts/generate-social.ts ${journey.id}`, {
                cwd: path.join(__dirname, '..'),
                stdio: 'inherit'
            });
        } catch (error) {
            console.error(`  ❌ Failed: ${journey.id}`);
        }
    }

    console.log('\n✅ All carousels generated!\n');
}

generateAll();
