import { ALL_EVENTS } from '../data/allEvents';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const OUT_FILE = path.join(process.cwd(), 'data', 'pending_assets.json');

console.log('--- Scanning for Placeholder Assets to Recover ---');

interface PendingAsset {
    eventId: string;
    title: string;
    description: string;
    imagePath: string;
    status: 'pending' | 'success' | 'failed';
    error?: string;
}

const pending: PendingAsset[] = [];

ALL_EVENTS.forEach(event => {
    if (event.imageUrl) {
        let relativePath = event.imageUrl;
        // Clean URL
        if (relativePath.startsWith(import.meta.env?.BASE_URL || '/')) {
            relativePath = relativePath.replace(import.meta.env?.BASE_URL || '/', '');
        }
        if (relativePath.startsWith('/')) relativePath = relativePath.substring(1);
        relativePath = relativePath.split('?')[0];

        const fullPath = path.join(PUBLIC_DIR, relativePath);

        if (fs.existsSync(fullPath)) {
            try {
                const content = fs.readFileSync(fullPath, 'utf8'); // Read as text first
                // Check if it's an SVG placeholder masquerading as a JPG
                if (content.trim().startsWith('<svg')) {
                    console.log(`Queueing duplicate/placeholder: ${relativePath}`);
                    pending.push({
                        eventId: event.id,
                        title: event.title,
                        description: event.description,
                        imagePath: relativePath,
                        status: 'pending'
                    });
                }
            } catch (e) {
                // accessing binary as utf8 might fail or be weird, 
                // but checking first few chars for <svg is safe enough usually 
                // if it's binary jpg it won't start with <svg
            }
        }
    }
});

fs.writeFileSync(OUT_FILE, JSON.stringify(pending, null, 2));
console.log(`\n✅ Queued ${pending.length} assets for recovery in ${OUT_FILE}`);
