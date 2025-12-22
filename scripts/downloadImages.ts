
import fs from 'fs';
import path from 'path';
import https from 'https';
import { ALL_EVENTS } from '../data/allEvents';

// Define the root directory (assuming script is run from project root)
const PUBLIC_IMAGES_DIR = path.resolve(process.cwd(), 'public/images');
const ALL_EVENTS_PATH = path.resolve(process.cwd(), 'data/allEvents.ts');

// Function to download an image
const downloadImage = (url: string, dest: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to consume URL: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { }); // Delete the file async. (But we don't check the result)
            reject(err);
        });
    });
};

const main = async () => {
    console.log('🔍 Scanning events for dynamic images...');

    if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
        fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
    }

    const eventsToProcess = ALL_EVENTS.filter(e => e.imageUrl && e.imageUrl.startsWith('https://image.pollinations.ai'));

    console.log(`Found ${eventsToProcess.length} events using dynamic images.`);

    let fileContent = fs.readFileSync(ALL_EVENTS_PATH, 'utf-8');
    let updatedCount = 0;

    for (const event of eventsToProcess) {
        const imageUrl = event.imageUrl!;
        const filename = `${event.id}.jpg`;
        const localPath = path.join(PUBLIC_IMAGES_DIR, filename);

        console.log(`⬇️ Downloading image for event ${event.id}: ${imageUrl}`);

        try {
            if (fs.existsSync(localPath)) {
                console.log(`  - File already exists: ${filename}, skipping download.`);
            } else {
                await downloadImage(imageUrl, localPath);
                // Add a small delay to avoid hammering the server too hard
                await new Promise(r => setTimeout(r, 500));
                console.log(`  - Saved to ${localPath}`);
            }

            // Prepare replacement in file content
            // We look for the specific line. This is a bit brittle but simple regex works for this strictly formatted file.
            // We want to replace the full string literal.

            // Escape special regex chars in the URL
            const escapedUrl = imageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`['"]${escapedUrl}['"]`, 'g');

            const newPath = `(import.meta.env?.BASE_URL || '/') + 'images/${filename}'`;

            if (fileContent.match(regex)) {
                fileContent = fileContent.replace(regex, newPath);
                updatedCount++;
            } else {
                console.warn(`  ⚠️ Could not find specific string for replacement in file for event ${event.id}`);
            }

        } catch (err) {
            console.error(`  ❌ Failed to download ${event.id}:`, err);
        }
    }

    console.log(`\n💾 Writing updates to allEvents.ts... (${updatedCount} replacements made)`);
    fs.writeFileSync(ALL_EVENTS_PATH, fileContent);
    console.log('✅ Done!');
};

main().catch(console.error);
