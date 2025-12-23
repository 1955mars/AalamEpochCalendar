import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { ALL_EVENTS } from '../data/allEvents';
import { JOURNEYS } from '../data/journeys';

const journeyId = process.argv[2];

if (!journeyId) {
    console.error('Please provide a journey ID');
    process.exit(1);
}

const journey = JOURNEYS.find(j => j.id === journeyId);
if (!journey) {
    console.error('Journey not found');
    process.exit(1);
}

console.log(`Loaded ${ALL_EVENTS.length} events from ALL_EVENTS`);
// Validate ALL_EVENTS
const validEvents = ALL_EVENTS.filter(e => e && e.id);
if (validEvents.length !== ALL_EVENTS.length) {
    console.warn(`WARNING: Found ${ALL_EVENTS.length - validEvents.length} invalid/undefined events in ALL_EVENTS`);
}

const events = journey.eventIds
    .map(id => validEvents.find(e => e.id === id))
    .filter(e => e !== undefined);

const outputDir = path.join(process.cwd(), 'verification_artifacts');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, `${journeyId}_composite.jpg`);
// Configuration
const TILE_WIDTH = 400;
const TILE_HEIGHT = 225; // 16:9 aspect ratio
const GAP = 20;
const COLUMNS = 4; // Number of images per row

async function stitchAtlas() {
    console.log(`Stitching Atlas for: ${journey.title} (${events.length} events)`);

    const composites = [];
    let processedCount = 0;

    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        if (!event) continue;

        const relativePath = event.imageUrl?.startsWith('/') ? event.imageUrl.slice(1) : event.imageUrl;
        const fullPath = path.join(process.cwd(), 'public', relativePath || '');

        let imageBuffer;

        // Check if image exists
        if (event.imageUrl && fs.existsSync(fullPath)) {
            try {
                // Resize image to standard tile size
                imageBuffer = await sharp(fullPath)
                    .resize(TILE_WIDTH, TILE_HEIGHT, { fit: 'cover' })
                    .toBuffer();
            } catch (err) {
                console.error(`Error processing image for ${event.id}:`, err);
                imageBuffer = await createPlaceholder(event.title, 'ERROR');
            }
        } else {
            // Create placeholder for missing image
            imageBuffer = await createPlaceholder(event.title, 'MISSING');
        }

        // Create Text Overlay (Footer)
        const svgText = `
        <svg width="${TILE_WIDTH}" height="60">
            <rect x="0" y="0" width="${TILE_WIDTH}" height="60" fill="#000000" />
            <text x="10" y="20" font-family="Arial" font-size="14" fill="#ffffff" font-weight="bold">${escapeXml(event.title.substring(0, 35))}</text>
            <text x="10" y="40" font-family="Arial" font-size="12" fill="#aaaaaa">${event.year} | ${event.id}</text>
        </svg>
        `;

        const footerBuffer = Buffer.from(svgText);

        // Combine Image and Footer
        const tileBuffer = await sharp(imageBuffer)
            .extend({ bottom: 60, background: { r: 0, g: 0, b: 0 } }) // Make room for footer
            .composite([{ input: footerBuffer, top: TILE_HEIGHT, left: 0 }])
            .toBuffer();

        // Calculate Position
        const col = i % COLUMNS;
        const row = Math.floor(i / COLUMNS);
        const x = col * (TILE_WIDTH + GAP);
        const y = row * (TILE_HEIGHT + 60 + GAP); // +60 for footer

        composites.push({ input: tileBuffer, top: y, left: x });
        processedCount++;
        process.stdout.write('.');
    }

    console.log('\nCompositing final atlas...');

    const totalRows = Math.ceil(events.length / COLUMNS);
    const canvasWidth = (COLUMNS * TILE_WIDTH) + ((COLUMNS - 1) * GAP);
    const canvasHeight = (totalRows * (TILE_HEIGHT + 60)) + ((totalRows - 1) * GAP);

    const outputPath = path.join(outputDir, `${journey.id}_composite.jpg`);

    await sharp({
        create: {
            width: canvasWidth,
            height: canvasHeight,
            channels: 4,
            background: { r: 17, g: 17, b: 17, alpha: 1 } // Dark background #111
        }
    })
        .composite(composites)
        .toFile(outputPath);

    console.log(`\nAtlas saved to: ${outputPath}`);
}

function createPlaceholder(title: string, status: string) {
    const svg = `
    <svg width="${TILE_WIDTH}" height="${TILE_HEIGHT}">
        <rect x="0" y="0" width="${TILE_WIDTH}" height="${TILE_HEIGHT}" fill="#333333" />
        <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#ff5555" text-anchor="middle" dy=".3em">${status}</text>
    </svg>
    `;
    return sharp(Buffer.from(svg)).toBuffer();
}

function escapeXml(unsafe: string) {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
            default: return c;
        }
    });
}

stitchAtlas().catch(console.error);
