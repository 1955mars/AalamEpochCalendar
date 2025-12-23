
import fs from 'fs';
import path from 'path';
import https from 'https';
import { ALL_EVENTS } from '../data/allEvents';
import { JOURNEYS } from '../data/journeys';

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

const DELAY_MS = 6000;
const TIMEOUT_MS = 30000;

const downloadImage = (url: string, dest: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const request = https.get(url, (response) => {
            if (response.statusCode === 429) {
                file.close();
                fs.unlink(dest, () => { });
                reject(new Error('Rate Limit (429)'));
                return;
            }
            if (response.statusCode !== 200) {
                file.close();
                fs.unlink(dest, () => { });
                reject(new Error(`Status: ${response.statusCode}`));
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
    const journey = JOURNEYS.find(j => j.id === 'the-money-illusion');
    if (!journey) {
        console.error('Journey not found!');
        return;
    }

    console.log(`🪙 Fixing images for: ${journey.title}`);
    console.log(`   Events: ${journey.eventIds.length}`);

    const targets: { eventId: string; filename: string; url: string }[] = [];

    for (const eventId of journey.eventIds) {
        const event = ALL_EVENTS.find(e => e.id === eventId);
        if (!event || !event.imageUrl) continue;

        let filename = event.imageUrl;
        if (filename.includes("'")) filename = filename.match(/'([^']+)'$/)?.[1] || filename;
        filename = filename.replace(/^\/?/, '').replace(/^images\//, '');

        const localPath = path.join(IMAGES_DIR, filename);
        let needsRepair = false;

        if (!fs.existsSync(localPath)) {
            needsRepair = true;
        } else {
            const stats = fs.statSync(localPath);
            if (stats.size < 5000) { // 5KB minimum for quality
                needsRepair = true;
            }
        }

        if (needsRepair) {
            const promptBase = `${event.title}, ${event.description.substring(0, 80)}`;
            const prompt = `cinematic historical illustration of ${promptBase}, photorealistic, 8k`.replace(/[^a-zA-Z0-9,\s]/g, '');
            const encodedPrompt = encodeURIComponent(prompt);
            const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1280&height=720&nolog=true`;
            targets.push({ eventId, filename, url });
        }
    }

    console.log(`📋 Found ${targets.length} images to repair.`);

    let completed = 0;
    let errors = 0;

    for (const target of targets) {
        console.log(`\n🔄 Processing [${target.eventId}]...`);
        const dest = path.join(IMAGES_DIR, target.filename);

        let retries = 3;
        let success = false;

        while (retries > 0 && !success) {
            try {
                await downloadImage(target.url, dest);
                const stats = fs.statSync(dest);
                if (stats.size > 5000) {
                    console.log(`   ✅ Fixed: ${target.filename} (${(stats.size / 1024).toFixed(1)} KB)`);
                    success = true;
                    completed++;
                } else {
                    console.log(`   ⚠️ File too small, retrying...`);
                    fs.unlinkSync(dest);
                    retries--;
                    await wait(8000);
                }
            } catch (err: any) {
                console.error(`   ⚠️ Error: ${err.message}`);
                if (err.message.includes('429') || err.message.includes('Timeout')) {
                    console.log(`   ⏳ Cooling down...`);
                    await wait(12000);
                }
                retries--;
            }
        }

        if (!success) {
            console.error(`   ❌ Failed: ${target.eventId}`);
            errors++;
        }

        await wait(DELAY_MS);
    }

    console.log(`\n🎉 Done. Fixed: ${completed}, Failed: ${errors}`);
};

main().catch(console.error);
