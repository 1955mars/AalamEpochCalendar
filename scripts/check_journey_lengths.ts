import { JOURNEYS } from '../data/journeys';
import { ALL_EVENTS } from '../data/allEvents';

console.log('--- Journey Event Counts ---');
let fail = false;

JOURNEYS.forEach(j => {
    const count = j.eventIds.length;
    const status = count >= 30 ? '✅' : '❌';
    console.log(`${status} ${j.title}: ${count} events`);
    if (count < 30) fail = true;
});

// Also check thumbnail existence
import fs from 'fs';
import path from 'path';

console.log('\n--- Thumbnail Check ---');
const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public');

JOURNEYS.forEach(j => {
    if (j.thumbnailUrl) {
        const fullPath = path.join(PUBLIC_IMAGES_DIR, j.thumbnailUrl);
        if (!fs.existsSync(fullPath)) {
            console.log(`❌ Missing thumbnail for ${j.title}: ${j.thumbnailUrl}`);
        } else {
            // console.log(`✅ Thumbnail OK: ${j.title}`);
        }
    } else {
        console.log(`❌ No thumbnail defined for ${j.title}`);
    }
});
