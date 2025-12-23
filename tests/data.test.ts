import { describe, it, expect } from 'vitest';
import { ALL_EVENTS } from '../data/allEvents';
import { JOURNEYS } from '../data/journeys';
import path from 'path';
import fs from 'fs';

const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public');

describe('Data Integrity', () => {
    describe('Events', () => {
        it('should have unique IDs', () => {
            const ids = new Set<string>();
            ALL_EVENTS.forEach(event => {
                expect(ids.has(event.id)).toBe(false);
                ids.add(event.id);
            });
        });

        it('should have valid properties (phase, category)', () => {
            const VALID_PHASES = [
                'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Phase 6',
                'Phase 7', 'Phase 8', 'Phase 9', 'Phase 10', 'Phase 11', 'Phase 12',
                'Civilization', 'Industrial', 'Modern' // Legacy/Special phases
            ];
            const VALID_CATEGORIES = [
                'Art', 'Civilization', 'Communications', 'Cosmology', 'Economy',
                'Science', 'Technology', 'Transport', 'Life', 'Humanity', 'Philosophy' // From types.ts + actual usage
            ];

            ALL_EVENTS.forEach(event => {
                // Phase check
                if (event.phase) {
                    expect(VALID_PHASES).toContain(event.phase);
                }

                // Category check
                if (event.category) {
                    expect(VALID_CATEGORIES).toContain(event.category);
                }

                // Skip markers
                if (event.type === 'phase_marker') return;

                // Description check
                expect(event.title).toBeTruthy();
                expect(event.description).toBeTruthy();
                expect(event.description.length).toBeGreaterThan(10); // Minimal content check
            });
        });

        it('should have valid numeric years', () => {
            ALL_EVENTS.forEach(event => {
                expect(typeof event.yearNumeric).toBe('number');
                expect(Number.isNaN(event.yearNumeric)).toBe(false);
            });
        });

        it('should have a corresponding image file on disk', () => {
            // Define known missing images to allow tests to pass while we fix them
            // This prevents the CI from breaking on known technical debt
            // Define known missing images to allow tests to pass while we fix them
            // This prevents the CI from breaking on known technical debt
            const KNOWN_MISSING: string[] = [];

            ALL_EVENTS.forEach(event => {
                if (event.imageUrl && !event.imageUrl.startsWith('http')) {
                    // Normalize path
                    let relativePath = event.imageUrl;
                    if (relativePath.startsWith(import.meta.env?.BASE_URL || '/')) {
                        relativePath = relativePath.replace(import.meta.env?.BASE_URL || '/', '');
                    }
                    if (relativePath.startsWith('/')) relativePath = relativePath.substring(1);
                    relativePath = relativePath.split('?')[0];

                    const fullPath = path.join(PUBLIC_IMAGES_DIR, relativePath);

                    if (!KNOWN_MISSING.includes(event.id)) {
                        expect(fs.existsSync(fullPath), `Missing image for ${event.id}: ${relativePath}`).toBe(true);
                    }
                }
            });
        });
    });

    describe('Journeys', () => {
        const eventIds = new Set(ALL_EVENTS.map(e => e.id));

        it('should have causality (connections)', () => {
            const VALID_CONNECTION_TYPES = ['caused', 'preceded', 'related', 'influenced'];

            JOURNEYS.forEach(journey => {
                // 1. Must have connections array
                expect(Array.isArray(journey.connections)).toBe(true);

                // 2. Connections must be valid
                if (journey.connections) {
                    journey.connections.forEach(conn => {
                        expect(eventIds.has(conn.fromEventId), `Journey ${journey.title}: Invalid fromEventId ${conn.fromEventId}`).toBe(true);
                        expect(eventIds.has(conn.toEventId), `Journey ${journey.title}: Invalid toEventId ${conn.toEventId}`).toBe(true);
                        expect(VALID_CONNECTION_TYPES).toContain(conn.type);
                    });
                }
            });
        });

        it('should have at least 30 events', () => {
            JOURNEYS.forEach(journey => {
                expect(journey.eventIds.length, `Journey "${journey.title}" has only ${journey.eventIds.length} events`).toBeGreaterThanOrEqual(30);
            });
        });

        it('should have a valid thumbnail image', () => {
            JOURNEYS.forEach(journey => {
                expect(journey.thumbnailUrl).toBeDefined();
                if (journey.thumbnailUrl) {
                    const fullPath = path.join(PUBLIC_IMAGES_DIR, journey.thumbnailUrl);
                    expect(fs.existsSync(fullPath), `Missing thumbnail for ${journey.title}: ${journey.thumbnailUrl}`).toBe(true);
                }
            });
        });

        it('should have unique images within the journey', () => {
            JOURNEYS.forEach(journey => {
                const imagesSeen = new Set<string>();
                journey.eventIds.forEach(id => {
                    const event = ALL_EVENTS.find(e => e && e.id === id);
                    if (event && event.imageUrl) {
                        // Normalize: remove query params
                        const cleanUrl = event.imageUrl.split('?')[0];

                        expect(imagesSeen.has(cleanUrl), `Journey "${journey.title}" has duplicate image: ${cleanUrl} (Event: ${id})`).toBe(false);
                        imagesSeen.add(cleanUrl);
                    }
                });
            });
        });

        it('should reference existing events', () => {
            JOURNEYS.forEach(journey => {
                journey.eventIds.forEach(id => {
                    expect(eventIds.has(id), `Journey "${journey.title}" references missing event: ${id}`).toBe(true);
                });
            });
        });

        it('should have valid connections', () => {
            JOURNEYS.forEach(journey => {
                if (journey.connections) {
                    journey.connections.forEach(conn => {
                        expect(eventIds.has(conn.fromEventId), `Connection invalid from: ${conn.fromEventId}`).toBe(true);
                        expect(eventIds.has(conn.toEventId), `Connection invalid to: ${conn.toEventId}`).toBe(true);
                    });
                }
            });
        });
    });
});
