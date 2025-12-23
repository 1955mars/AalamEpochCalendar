import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const PATHS = {
    contentDir: path.join(__dirname, '../content/drafts'),
    allEvents: path.join(__dirname, '../data/allEvents.ts'),
    journeys: path.join(__dirname, '../data/journeys.ts'),
    images: path.join(__dirname, '../public/images'),
    placeholder: path.join(__dirname, '../public/images/phase-1-marker.jpg') // Fallback
};

// Types corresponding to JSON input
interface DraftEvent {
    yearNumeric: number;
    title: string;
    description: string;
    imageKeyword?: string;
    year?: string; // Optional override
}

interface DraftJourney {
    journeyId: string;
    title: string;
    category: string;
    description: string;
    events: DraftEvent[];
}

function slugify(text: string): string {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

async function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error('Usage: npx tsx scripts/scaffold.ts <path_to_json>');
        process.exit(1);
    }

    const jsonPath = args[0].startsWith('/') ? args[0] : path.join(process.cwd(), args[0]);
    if (!fs.existsSync(jsonPath)) {
        console.error(`Error: File not found at ${jsonPath}`);
        process.exit(1);
    }

    console.log(`📖 Reading draft from ${jsonPath}...`);
    const draft: DraftJourney = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    // 1. Prepare Data
    const eventIds: string[] = [];
    const eventCodeBlocks: string[] = [];

    console.log(`⚡ Processing ${draft.events.length} events...`);

    draft.events.forEach(event => {
        const id = `${draft.journeyId}-${slugify(event.title)}`;
        eventIds.push(id);

        // Format year string if not provided
        const yearDisplay = event.year || (event.yearNumeric < 0
            ? `${Math.abs(event.yearNumeric)} BCE`
            : `${event.yearNumeric} CE`);

        // Image handling
        const imageFilename = `${id}.jpg`;
        const targetImagePath = path.join(PATHS.images, imageFilename);

        if (!fs.existsSync(targetImagePath)) {
            // For now, simple copy of a placeholder or try to find a keyword match if we had a library
            // We will just copy the main placeholder
            if (fs.existsSync(PATHS.placeholder)) {
                fs.copyFileSync(PATHS.placeholder, targetImagePath);
                console.log(`   🖼️  Created placeholder for ${id}`);
            } else {
                console.warn(`   ⚠️  Placeholder source missing! Could not create image for ${id}`);
            }
        }

        // Construct Code Block
        // Note: We use import.meta.env... logic similar to existing code
        const codeBlock = `  {
    id: '${id}',
    year: '${yearDisplay}',
    yearNumeric: ${event.yearNumeric},
    title: "${event.title.replace(/"/g, '\\"')}",
    description: "${event.description.replace(/"/g, '\\"')}",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/${imageFilename}',
    category: '${draft.category as any}'
  }`;
        eventCodeBlocks.push(codeBlock);
    });

    // 2. Modify data/allEvents.ts
    console.log('📝 Injecting events into allEvents.ts...');
    let allEventsContent = fs.readFileSync(PATHS.allEvents, 'utf8');

    // Find the end of the array `];`
    // We assume the file ends with or has `];` closing the main export.
    // A robust way works if the file structure is consistent.
    const lastBracketIndex = allEventsContent.lastIndexOf('];');
    if (lastBracketIndex === -1) {
        console.error('❌ Could not find closing bracket in allEvents.ts');
        process.exit(1);
    }

    const newEventsString = `\n  // --- ${draft.title} ---\n` + eventCodeBlocks.join(',\n') + ',\n';

    allEventsContent =
        allEventsContent.slice(0, lastBracketIndex) +
        newEventsString +
        allEventsContent.slice(lastBracketIndex);

    fs.writeFileSync(PATHS.allEvents, allEventsContent);

    // 3. Modify data/journeys.ts
    console.log('📝 Injecting journey into journeys.ts...');
    let journeysContent = fs.readFileSync(PATHS.journeys, 'utf8');
    const journeyLastBracket = journeysContent.lastIndexOf('];');

    const newJourneyCode = `
    {
        id: '${draft.journeyId}',
        title: "${draft.title.replace(/"/g, '\\"')}",
        description: "${draft.description.replace(/"/g, '\\"')}",
        thumbnailUrl: 'images/${eventIds[0]}.jpg', // Use first event as thumb
        eventIds: [
${eventIds.map(id => `            '${id}'`).join(',\n')}
        ],
        connections: []
    },
`;

    journeysContent =
        journeysContent.slice(0, journeyLastBracket) +
        newJourneyCode +
        journeysContent.slice(journeyLastBracket);

    fs.writeFileSync(PATHS.journeys, journeysContent);

    console.log('✅ Scaffolding complete!');
    console.log(`   - Added ${eventIds.length} events.`);
    console.log(`   - Created new Journey: ${draft.title}`);
}

main().catch(err => console.error(err));
