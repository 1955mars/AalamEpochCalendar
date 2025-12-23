
import fs from 'fs';
import path from 'path';
import { ALL_EVENTS } from '../data/allEvents';
import { JOURNEYS } from '../data/journeys';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const usedEventIds = new Set(JOURNEYS.flatMap(j => j.eventIds));

console.log('--- INVALID IMAGES JSON ---');
const invalidImages: any[] = [];

ALL_EVENTS.forEach(e => {
    // Only check events that are used in journeys
    if (!usedEventIds.has(e.id)) return;

    // Skip if no image or external URL
    if (!e.imageUrl || e.imageUrl.startsWith('http')) return;

    const relativePath = e.imageUrl.startsWith('/') ? e.imageUrl.slice(1) : e.imageUrl;
    const fullPath = path.join(PUBLIC_DIR, relativePath);

    // Check if missing OR small (placeholder)
    if (!fs.existsSync(fullPath) || fs.statSync(fullPath).size < 5000) {
        invalidImages.push({
            id: e.id,
            path: relativePath,
            title: e.title,
            description: e.description,
            prompt: `${e.description} in style of ${e.category || 'Historical'}, cinematic, photorealistic, high resolution, 8k`,
            status: 'PENDING'
        });
    }
});

const manifestPath = path.join(process.cwd(), 'scripts', 'manifests');
if (!fs.existsSync(manifestPath)) fs.mkdirSync(manifestPath, { recursive: true });

fs.writeFileSync(path.join(manifestPath, 'prioritized_images.json'), JSON.stringify(invalidImages, null, 2));
console.log(`Generated manifest with ${invalidImages.length} items at scripts/manifests/prioritized_images.json`);

