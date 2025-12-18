
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INITIAL_EVENTS } from '../constants';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_IMAGES_DIR = path.join(__dirname, '../public/images');

console.log(`Checking ${INITIAL_EVENTS.length} events for missing images...`);

let missingCount = 0;
let foundCount = 0;

INITIAL_EVENTS.forEach(event => {
    // imageUrl format is usually (import.meta.env?.BASE_URL || '/') + 'images/p12-31.jpg'
    // We expect the stored string in code to look like a runtime expression, 
    // but importing it via tsx might execute that expression if we are careful, 
    // OR we can just parse the filename from the ID since the convention is consistent.
    // The previous migration script set it to: ... + 'images/${id}.jpg'

    const expectedFilename = `${event.id}.jpg`;
    const filePath = path.join(PUBLIC_IMAGES_DIR, expectedFilename);

    if (!fs.existsSync(filePath)) {
        console.error(`[MISSING] ID: ${event.id} -> ${expectedFilename}`);
        missingCount++;
    } else {
        foundCount++;
    }
});

console.log(`\nVerification Complete.`);
console.log(`Found: ${foundCount}`);
console.log(`Missing: ${missingCount}`);

if (missingCount === 0) {
    console.log('SUCCESS: All images are present.');
} else {
    console.log('FAILURE: Some images are missing.');
    process.exit(1);
}
