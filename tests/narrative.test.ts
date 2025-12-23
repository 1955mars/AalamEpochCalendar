import { describe, it, expect } from 'vitest';
import { ALL_EVENTS } from '../data/allEvents';
import { JOURNEYS } from '../data/journeys';

// Helper to parse year string to numeric for rough comparison if yearNumeric is missing
// (Though all events should have yearNumeric now)
const getYear = (event: any) => event.yearNumeric;

describe('Narrative Quality Checks', () => {

    describe('Data Integrity', () => {
        it('should have all events in journeys present in ALL_EVENTS', () => {
            JOURNEYS.forEach(journey => {
                journey.eventIds.forEach(id => {
                    const event = ALL_EVENTS.find(e => e?.id === id);
                    expect(event, `Event ${id} in journey ${journey.id} not found in ALL_EVENTS`).toBeDefined();
                });
            });
        });
    });

    describe('Cinematic Quality', () => {
        it('should have rich descriptions for the first 3 events of every journey', () => {
            JOURNEYS.forEach(journey => {
                // Get the first 3 events
                const openingEvents = journey.eventIds.slice(0, 3).map(id => ALL_EVENTS.find(e => e?.id === id)).filter(Boolean);

                openingEvents.forEach(event => {
                    if (!event) return;
                    // Cinematic check: Description should be substantial enough to set the scene
                    // Arbitrary threshold: 80 characters
                    expect(event.description.length, `Event "${event.title}" description is too short (${event.description.length} chars)`).toBeGreaterThan(80);
                });
            });
        });
    });

    describe('Temporal Gaps', () => {
        // This test warns about large gaps but doesn't necessarily fail CI unless strict mode
        it('should identify potentially jarring narrative gaps in historical journeys', () => {
            const HISTORICAL_JOURNEYS = ['evolution-of-technology', 'rise-of-civilizations', 'ancestry-of-ai'];

            HISTORICAL_JOURNEYS.forEach(journeyId => {
                const journey = JOURNEYS.find(j => j.id === journeyId);
                if (!journey) return;

                const events = journey.eventIds.map(id => ALL_EVENTS.find(e => e?.id === id)).filter(e => e !== undefined) as any[];

                for (let i = 0; i < events.length - 1; i++) {
                    const current = events[i];
                    const next = events[i + 1];

                    if (current.yearNumeric > -2000 && next.yearNumeric > -2000) {
                        // For 'recent' history (last 4000 years), gaps shouldn't be too huge without explanation
                        const gap = next.yearNumeric - current.yearNumeric;

                        // 1300 years was the specific complaint for Tech journey. 
                        // Let's flag gaps > 1000 years in the common era as "Suspicious"
                        if (gap > 1000) {
                            console.warn(`[NARRATIVE GAP] ${journey.title}: ${gap} year gap between ${current.title} (${current.year}) and ${next.title} (${next.year})`);
                        }
                    }
                }
            });
        });
    });

    describe('Graph Connectivity', () => {
        it('should ensure all events in a journey are connected (no orphans)', () => {
            // Only check journeys that claim to have connections
            const CONNECTED_JOURNEYS = ['evolution-of-technology', 'rise-of-civilizations', 'ancestry-of-ai', 'the-money-illusion'];

            CONNECTED_JOURNEYS.forEach(journeyId => {
                const journey = JOURNEYS.find(j => j.id === journeyId);
                if (!journey) return;

                const connectedEventIds = new Set<string>();
                if (journey.connections) {
                    journey.connections.forEach(c => {
                        connectedEventIds.add(c.fromEventId);
                        connectedEventIds.add(c.toEventId);
                    });
                }

                const orphanEvents = journey.eventIds.filter(id => !connectedEventIds.has(id));

                // Construct a helpful error message listing the orphans
                if (orphanEvents.length > 0) {
                    // Get titles for better error reading
                    const orphanDetails = orphanEvents.map(id => {
                        const evt = ALL_EVENTS.find(e => e?.id === id);
                        return `${id} (${evt?.title})`;
                    });
                    console.error(`[ORPHAN EVENTS] Journey: ${journey.title}\nFound ${orphanEvents.length} unconnected events: \n - ${orphanDetails.join('\n - ')}`);
                }

                expect(orphanEvents.length, `Journey "${journey.title}" has ${orphanEvents.length} orphan events that are not linked in the graph`).toBe(0);
            });
        });
    });
});
