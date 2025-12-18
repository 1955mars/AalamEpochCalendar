
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { INITIAL_EVENTS } from '../constants.source';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '../public/images');

// Ensure directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function downloadImage(url: string, dest: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => { }); // Delete the file async. (But we don't check result)
            reject(err.message);
        });
    });
}

async function downloadWithRetry(url: string, dest: string, retries = 5): Promise<boolean> {
    for (let i = 0; i < retries; i++) {
        try {
            await downloadImage(url, dest);
            return true;
        } catch (err: any) {
            const isLast = i === retries - 1;
            console.log(`[${isLast ? 'FAIL' : 'RETRY'}] ${path.basename(dest, '.jpg')} (${i + 1}/${retries}): ${err}`);
            if (isLast) return false;
            // Exponential backoff: 2s, 4s, 8s...
            await sleep(2000 * Math.pow(2, i));
        }
    }
    return false;
}

async function processEvent(event: any) {
    const outputPath = path.join(PUBLIC_DIR, `${event.id}.jpg`);

    if (fs.existsSync(outputPath)) {
        // console.log(`[SKIP] Exists: ${event.id}`);
        return;
    }

    const url = event.imageUrl;
    // Handle local paths by skipping them (they are already migrated or placeholders)
    if (!url || !url.startsWith('http')) {
        // console.log(`[SKIP] Not a remote URL: ${event.id}`);
        return;
    }

    console.log(`[DOWNLOADING] ${event.id} ...`);

    const success = await downloadWithRetry(url, outputPath);
    if (success) {
        console.log(`[OK] Saved: ${event.id}`);
        // Increased base delay to be nicer to the server
        await sleep(200);
    }
}

async function main() {
    console.log(`Found ${INITIAL_EVENTS.length} events to process.`);
    const CONCURRENCY = 10;
    for (let i = 0; i < INITIAL_EVENTS.length; i += CONCURRENCY) {
        const chunk = INITIAL_EVENTS.slice(i, i + CONCURRENCY);
        await Promise.all(chunk.map(processEvent));
        console.log(`Processed batch ${i} - ${i + chunk.length}`);
    }
}

main();
