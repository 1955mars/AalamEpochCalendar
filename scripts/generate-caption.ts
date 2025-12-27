/**
 * Generate Social Media Caption
 * Creates ready-to-post caption with hashtags
 * 
 * Usage: npx tsx scripts/generate-caption.ts <journeyId>
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { JOURNEYS } from '../data/journeys';
import { ALL_EVENTS } from '../data/allEvents';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HASHTAG_MAP: Record<string, string[]> = {
    'cosmic-origins': ['#bigbang', '#cosmichistory', '#space', '#universe', '#astronomy'],
    'evolution-of-life': ['#evolution', '#biology', '#life', '#science', '#darwin'],
    'ancestry-of-ai': ['#ai', '#artificialintelligence', '#tech', '#machinelearning', '#history'],
    'history-of-art': ['#art', '#arthistory', '#culture', '#painting', '#artists'],
    'money-illusion': ['#money', '#economics', '#finance', '#history', '#bitcoin'],
    'to-the-stars': ['#space', '#nasa', '#rockets', '#spaceexploration', '#astronauts'],
    // Default hashtags
    'default': ['#history', '#education', '#learning', '#timeline', '#knowledge']
};

function generateCaption(journeyId: string): string {
    const journey = JOURNEYS.find(j => j.id === journeyId);
    if (!journey) {
        throw new Error(`Journey not found: ${journeyId}`);
    }

    // Get events
    const events = journey.eventIds
        .map(id => ALL_EVENTS.find(e => e.id === id))
        .filter((e): e is NonNullable<typeof e> => e !== undefined && e.type !== 'phase_marker');

    // Get hashtags
    const tags = HASHTAG_MAP[journeyId] || HASHTAG_MAP['default'];

    // Build caption
    const caption = `
🔗 ${journey.title}

${journey.description}

📚 ${events.length} events • From ${events[0]?.year} to ${events[events.length - 1]?.year}

🚀 Explore the full journey at aalam.xyz/journey/${journeyId}

${tags.join(' ')} #bighistory #aalam
`.trim();

    return caption;
}

// Main
const journeyId = process.argv[2];

if (!journeyId) {
    console.log('Usage: npx tsx scripts/generate-caption.ts <journeyId>');
    console.log('\nGenerating captions for all journeys...\n');

    const outputDir = path.join(__dirname, '..', 'public', 'social');

    for (const journey of JOURNEYS) {
        const caption = generateCaption(journey.id);
        const captionPath = path.join(outputDir, journey.id, 'caption.txt');

        // Only write if carousel exists
        if (fs.existsSync(path.join(outputDir, journey.id))) {
            fs.writeFileSync(captionPath, caption);
            console.log(`✅ ${journey.id}/caption.txt`);
        }
    }
} else {
    console.log(generateCaption(journeyId));
}
