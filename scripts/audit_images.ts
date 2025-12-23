
import fs from 'fs';
import path from 'path';
import { JOURNEYS } from '../data/journeys';
import { ALL_EVENTS } from '../data/allEvents';

// Define the public directory path
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

// Helper to extract clean path from imageUrl
function getCleanImagePath(imageUrl: string | undefined): string | null {
    if (!imageUrl) return null;

    // Handle "import.meta.env" style
    if (imageUrl.includes("import.meta.env")) {
        // Extract the string part: "images/foo.jpg"
        const match = imageUrl.match(/'([^']+)'$/);
        if (match && match[1]) {
            // Usually comes out as 'images/foo.jpg' or '/images/foo.jpg'
            return match[1].startsWith('/') ? match[1].substring(1) : match[1];
        }
    }

    // Handle normal strings
    if (imageUrl.startsWith('/')) return imageUrl.substring(1);
    if (imageUrl.startsWith('https://')) return 'REMOTE';

    return imageUrl;
}

// Function to check if file exists
function checkFile(relativePath: string): boolean {
    if (relativePath === 'REMOTE') return false; // Treat remote as "missing local"
    const fullPath = path.join(PUBLIC_DIR, relativePath);
    return fs.existsSync(fullPath);
}

console.log("# 🖼️ Missing Images Report\n");

JOURNEYS.forEach(journey => {
    console.log(`## ${journey.title} (${journey.id})`);

    let missingCount = 0;

    // 1. Check Thumbnail
    const thumbPath = journey.thumbnailUrl; // usually a simple string like 'images/foo.jpg'
    // Normalize if needed, but in journeys.ts they are usually strings
    const cleanThumb = thumbPath.startsWith('/') ? thumbPath.substring(1) : thumbPath;

    if (cleanThumb.startsWith('http')) {
        console.log(`- [ ] **Thumbnail**: ⚠️ REMOTE URL (${thumbPath})`);
        missingCount++;
    } else if (!checkFile(cleanThumb)) {
        console.log(`- [ ] **Thumbnail**: ❌ MISSING (${cleanThumb})`);
        missingCount++;
    }

    // 2. Check Events
    journey.eventIds.forEach(id => {
        const event = ALL_EVENTS.find(e => e.id === id);
        if (!event) {
            console.log(`- [ ] **${id}**: ❌ EVENT FOUND IN JOURNEY BUT MISSING IN ALL_EVENTS`);
            missingCount++;
            return;
        }

        const rawUrl = event.imageUrl;
        const cleanUrl = getCleanImagePath(rawUrl);

        if (!cleanUrl) {
            console.log(`- [ ] **${event.title} (${id})**: ❌ NO IMAGE URL DEFINED`);
            missingCount++;
        } else if (cleanUrl === 'REMOTE') {
            console.log(`- [ ] **${event.title} (${id})**: ⚠️ REMOTE URL (${rawUrl.substring(0, 50)}...)`);
            missingCount++;
        } else if (!checkFile(cleanUrl)) {
            console.log(`- [ ] **${event.title} (${id})**: ❌ FILE MISSING (${cleanUrl})`);
            missingCount++;
        } else {
            // Check file size for placeholders
            const fullPath = path.join(PUBLIC_DIR, cleanUrl);
            const stats = fs.statSync(fullPath);
            if (stats.size < 1000) { // < 1KB
                console.log(`- [ ] **${event.title} (${id})**: ⚠️ PLACEHOLDER/CORRUPT (${stats.size} bytes)`);
                missingCount++;
            }
        }
    });

    if (missingCount === 0) {
        console.log("✅ All images present.");
    }
    console.log(""); // spacing
});
