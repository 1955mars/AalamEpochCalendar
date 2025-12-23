
import fs from 'fs';
import path from 'path';
import https from 'https';
import { ALL_EVENTS } from '../data/allEvents';

// Define the root directory
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

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
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

const main = async () => {
    console.log("🛠️ Starting Placeholder Repair...");

    let repairedCount = 0;

    for (const event of ALL_EVENTS) {
        if (!event.imageUrl) continue;

        // Extract filename
        let filename = '';
        if (event.imageUrl.includes("'")) {
            const match = event.imageUrl.match(/'([^']+)'$/);
            if (match) filename = match[1];
        } else {
            filename = event.imageUrl;
        }

        // Remove leading / or images/
        filename = filename.replace(/^\/?/, '').replace(/^images\//, '');

        // Check if file exists and is small
        const localPath = path.join(IMAGES_DIR, filename);

        let isCorrupt = false;
        if (fs.existsSync(localPath)) {
            const stats = fs.statSync(localPath);
            if (stats.size < 1000) { // < 1KB
                isCorrupt = true;
            }
        } else {
            // Missing files also need repair if we want to auto-generate
            // But let's focus on corrupt ones first as requested
            // Actually, the user wants to fix issues. Let's fix missing ones too if we can infer them.
            // But for now, let's stick to the explicit "corrupt" list to be safe.
        }

        if (isCorrupt) {
            console.log(`⚠️  Found corrupt image for [${event.id}]: ${filename}`);

            // Construct a new prompt
            // "Cinematic shot of [Title], [Description keywords], 8k, detailed"
            const prompt = `cinematic shot of ${event.title}, ${event.description.substring(0, 100)}, historical, photorealistic, 8k`.replace(/[^a-zA-Z0-9,\s]/g, '');
            const encodedPrompt = encodeURIComponent(prompt);
            const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1280&height=720&nolog=true`;

            console.log(`   🔄 Regenerating from: ${url}`);

            try {
                await downloadImage(url, localPath);
                console.log(`   ✅ Repaired: ${localPath}`);
                repairedCount++;
                // Rate limit protection
                await new Promise(r => setTimeout(r, 1000));
            } catch (err) {
                console.error(`   ❌ Failed to repair ${event.id}:`, err);
            }
        }
    }

    console.log(`\n🎉 Repair Complete. Fixed ${repairedCount} images.`);
};

main().catch(console.error);
