
import fs from 'fs';
import path from 'path';
import { ALL_EVENTS } from '../data/allEvents';
import { JOURNEYS } from '../data/journeys';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const usedEventIds = new Set(JOURNEYS.flatMap(j => j.eventIds));

// Helper: Generate Pollinations URL
function generatePollinationsUrl(description: string, category: string): string {
    const prompt = encodeURIComponent(`${description} in style of ${category}, cinematic, historical, high resolution`);
    return `https://image.pollinations.ai/prompt/${prompt}?width=1280&height=720&nolog=true`;
}

// Identify Invalid Images
const invalidEvents = ALL_EVENTS.filter(e => {
    if (!usedEventIds.has(e.id)) return false;
    // Skip if already a URL or specifically excluded (like cosmic-25 which we just fixed)
    if (!e.imageUrl || e.imageUrl.startsWith('http') || e.id === 'cosmic-25') return false;

    const relativePath = e.imageUrl.startsWith('/') ? e.imageUrl.slice(1) : e.imageUrl;
    const fullPath = path.join(PUBLIC_DIR, relativePath);

    // Invalid if missing OR small
    if (!fs.existsSync(fullPath)) return true;
    const stats = fs.statSync(fullPath);
    return stats.size < 5000;
});

console.log(`Found ${invalidEvents.length} invalid images to repair.`);

// Generate Replacement Map
const replacements: Record<string, string> = {};
invalidEvents.forEach(e => {
    replacements[e.id] = generatePollinationsUrl(e.title + ' ' + e.description, e.phase || 'History');
});

// Read the Source File
const allEventsPath = path.join(process.cwd(), 'data', 'allEvents.ts');
let content = fs.readFileSync(allEventsPath, 'utf-8');

// Apply Replacements
let replacementCount = 0;
// We need a regex that matches the object definition for a specific ID
// This is tricky with regex. A safer approach for this specific file structure:
// We look for `id: 'ID'` and then look ahead for `imageUrl: ...`
Object.entries(replacements).forEach(([id, url]) => {
    // Regex explanation:
    // id:\s*['"]ID['"]  -> Find the ID field
    // [\s\S]*?          -> Match anything (lazy) non-greedily
    // imageUrl:\s*      -> Find the imageUrl key
    // (import\.meta\.env\?\.BASE_URL\s*\|\|\s*'/')\s*\+\s*'[^']+' -> Match the old value pattern

    // Note: The file uses single quotes and the specific pattern: 
    // imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/filename.jpg'

    // We will construct a specific search string for the ID to locate the block
    const idPattern = `id: '${id}'`;
    const checkIndex = content.indexOf(idPattern);

    if (checkIndex !== -1) {
        // Find the next imageUrl after this ID
        const imgUrlIndex = content.indexOf('imageUrl:', checkIndex);
        if (imgUrlIndex !== -1) {
            // Find the end of the line or comma
            const lineEnd = content.indexOf('\n', imgUrlIndex);
            const currentLine = content.slice(imgUrlIndex, lineEnd);

            // Construct the new line
            // calculated url needs to be a string literal in the code
            const newLine = `imageUrl: '${url}'`;

            // Check if we are really replacing what we think (simple check)
            if (currentLine.includes('import.meta.env')) {
                // Perform replacement only on this specific occurrence
                // We split the string to avoid global replace affecting others
                const before = content.slice(0, imgUrlIndex);
                const after = content.slice(lineEnd);
                // We need to preserve the comma if it exists in the replaced part, 
                // but usually the comma is at the end. content.slice includes the comma if matched?
                // Actually the regex approach might be safer if we strictly match the value.

                // Let's use specific string replacement for the value part
                // The value is usually: (import.meta.env?.BASE_URL || '/') + 'images/...'
                // We'll replace it with: 'URL'

                // Improving robustness: Replace the specific value lines we know exist
                const imageFilename = invalidEvents.find(e => e.id === id)?.imageUrl?.split('/').pop();
                if (imageFilename) {
                    const exactOldValue = `(import.meta.env?.BASE_URL || '/') + 'images/${imageFilename}'`;
                    // We only replace it if it follows the ID closely (heuristic)
                    // But simpler: just global replace of the old value string with the new lines?
                    // Risk: what if two events use the same image? We handled duplicates earlier - none found.
                    // So specific replacement by value key is safe!

                    if (content.includes(exactOldValue)) {
                        content = content.replace(exactOldValue, `'${url}'`);
                        replacementCount++;
                    }
                }
            }
        }
    }
});

fs.writeFileSync(allEventsPath, content);
console.log(`Replaced ${replacementCount} image URLs.`);
