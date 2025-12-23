import { JOURNEYS } from '../data/journeys';
import { ALL_EVENTS } from '../data/allEvents';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const journey = JOURNEYS.find(j => j.id === 'ancestry-of-ai');

if (!journey) {
    console.log('Journey not found');
    process.exit(1);
}

console.log(`--- Auditing Images for: ${journey.title} ---`);

const hashes = new Map<string, string[]>(); // hash -> [eventIds]

journey.eventIds.forEach(id => {
    const event = ALL_EVENTS.find(e => e && e.id === id);
    if (!event) {
        console.log(`❓ Event ID not found: ${id}`);
        return;
    }

    if (!event.imageUrl) {
        console.log(`⚪️ No URL: ${event.title} (${id})`);
        return;
    }

    let relativePath = event.imageUrl;
    // Handle remote URLs
    if (relativePath.startsWith('http')) {
        // Just log it as remote, we assume remote URLs might be unique or not checkable easily by hash
        // unless we fetch them. But duplicates usually happen with local files.
        // We can group by URL text.
        const urlKey = `REMOTE:${relativePath}`;
        if (!hashes.has(urlKey)) hashes.set(urlKey, []);
        hashes.get(urlKey)?.push(id);
        return;
    }

    // Clean local path
    if (relativePath.startsWith(import.meta.env?.BASE_URL || '/')) {
        relativePath = relativePath.replace(import.meta.env?.BASE_URL || '/', '');
    }
    if (relativePath.startsWith('/')) relativePath = relativePath.substring(1);
    relativePath = relativePath.split('?')[0];

    const fullPath = path.join(PUBLIC_DIR, relativePath);

    if (!fs.existsSync(fullPath)) {
        console.log(`❌ Missing File: ${relativePath} (${id})`);
        return;
    }

    try {
        const fileBuffer = fs.readFileSync(fullPath);
        const hash = crypto.createHash('md5').update(fileBuffer).digest('hex');

        if (!hashes.has(hash)) hashes.set(hash, []);
        hashes.get(hash)?.push(id);
    } catch (e) {
        console.log(`⚠️ Error reading: ${relativePath}`);
    }
});

// Report Duplicates
hashes.forEach((ids, hash) => {
    if (ids.length > 1) {
        console.log(`\n🚨 DUPLICATE CONTENT FOUND:`);
        console.log(`   Hash/URL: ${hash.substring(0, 30)}...`);
        console.log(`   Events:`);
        ids.forEach(id => {
            const e = ALL_EVENTS.find(ev => ev.id === id);
            console.log(`     - ${e?.title} (${id}) -> ${e?.imageUrl}`);
        });
    }
});
