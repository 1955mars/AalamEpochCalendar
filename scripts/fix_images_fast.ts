
import fs from 'fs';
import path from 'path';
import https from 'https';
import { ALL_EVENTS } from '../data/allEvents';

// Define the root directory
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

// Config - VERY CONSERVATIVE
const DELAY_MS = 5000; // 5 seconds between requests
const TIMEOUT_MS = 30000; // 30s timeout

// Function to download an image with timeout
const downloadImage = (url: string, dest: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const request = https.get(url, (response) => {
            if (response.statusCode === 429) {
                file.close();
                fs.unlink(dest, () => { });
                reject(new Error('Hit Rate Limit (429)'));
                return;
            }
            if (response.statusCode !== 200) {
                file.close();
                fs.unlink(dest, () => { });
                reject(new Error(`Status code: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        });

        request.on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });

        request.setTimeout(TIMEOUT_MS, () => {
            request.destroy();
            fs.unlink(dest, () => { });
            reject(new Error('Timeout'));
        });
    });
};

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
    console.log("🐢 Starting Slow & Steady Image Repair...");

    // 1. Identify targets
    const targets: { eventId: string, filename: string, url: string }[] = [];

    for (const event of ALL_EVENTS) {
        if (!event.imageUrl) continue;

        let filename = event.imageUrl;
        if (filename.includes("'")) filename = filename.match(/'([^']+)'$/)?.[1] || filename;
        filename = filename.replace(/^\/?/, '').replace(/^images\//, '');

        const localPath = path.join(IMAGES_DIR, filename);
        let needsRepair = false;

        // Repair if MISSING or SMALL
        if (!fs.existsSync(localPath)) {
            needsRepair = true;
        } else {
            const stats = fs.statSync(localPath);
            if (stats.size < 1000) {
                needsRepair = true;
            }
        }

        if (needsRepair) {
            // "Cinematic shot of [Title], [Description keywords], 8k, detailed"
            // Use only alphanumeric and comma to be safe
            const prompt = `cinematic shot of ${event.title}, ${event.description.substring(0, 100)}, historical, photorealistic, 8k`.replace(/[^a-zA-Z0-9,\s]/g, '');
            const encodedPrompt = encodeURIComponent(prompt);
            const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1280&height=720&nolog=true`;
            targets.push({ eventId: event.id, filename, url });
        }
    }

    console.log(`📋 Found ${targets.length} images to repair.`);

    let completed = 0;
    let errors = 0;

    // Sequential Loop
    for (const target of targets) {
        console.log(`\nProcessing [${target.eventId}]...`);
        const dest = path.join(IMAGES_DIR, target.filename);

        let retries = 3;
        let success = false;

        while (retries > 0 && !success) {
            try {
                await downloadImage(target.url, dest);
                console.log(`   ✅ Fixed: ${target.filename}`);
                success = true;
                completed++;
            } catch (err: any) {
                console.error(`   ⚠️  Error: ${err.message}`);
                if (err.message.includes('429') || err.message.includes('Timeout')) {
                    console.log(`   ⏳ Cooling down for 10s...`);
                    await wait(10000); // Wait longer on error
                } else {
                    retries = 0; // Fatal error
                }
                retries--;
            }
        }

        if (!success) {
            console.error(`   ❌ Failed to repair ${target.eventId} after retries.`);
            errors++;
        }

        // Standard delay
        await wait(DELAY_MS);
    }

    console.log(`\n🎉 Done. Fixed: ${completed}, Failed: ${errors}`);
};

main().catch(console.error);
