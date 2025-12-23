import { JOURNEYS } from '../data/journeys';
import { GlobalConnection } from '../types';
import fs from 'fs';
import path from 'path';

console.log('--- Migrating Connections to Global Index ---');

const globalConnections: GlobalConnection[] = [];
const seenIds = new Set<string>();

JOURNEYS.forEach(journey => {
    if (journey.connections) {
        journey.connections.forEach(conn => {
            // Ensure ID is unique globally (some might be repeated across journeys if copied)
            // But here we want to capture them.
            // Let's prefix with journey ID if needed, or just trust specific IDs.
            // Ideally connections should be unique edges.

            // Check for duplicates based on from-to pair to avoid noise
            const edgeKey = `${conn.fromEventId}->${conn.toEventId}`;
            if (!seenIds.has(edgeKey)) {
                seenIds.add(edgeKey);

                globalConnections.push({
                    id: conn.id, // Keep original ID or generate new UUID? Keep for now.
                    fromEventId: conn.fromEventId,
                    toEventId: conn.toEventId,
                    type: conn.type,
                    description: conn.description,
                    weight: 1.0 // Default weight for manually curated journey links
                });
            }
        });
    }
});

console.log(`Found ${globalConnections.length} unique connections across ${JOURNEYS.length} journeys.`);

// Generate the file content
const fileContent = `import { GlobalConnection } from '../types';

export const ALL_CONNECTIONS: GlobalConnection[] = ${JSON.stringify(globalConnections, null, 2)};
`;

const outputPath = path.join(process.cwd(), 'data', 'allConnections.ts');
fs.writeFileSync(outputPath, fileContent);

console.log(`✅ Wrote to ${outputPath}`);
