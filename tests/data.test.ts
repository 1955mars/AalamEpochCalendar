import { describe, it, expect } from 'vitest';
import { ALL_EVENTS } from '../data/allEvents';
import { JOURNEYS } from '../data/journeys';
import path from 'path';
import fs from 'fs';

const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public');

describe('Data Integrity', () => {
    describe('Event Schema', () => {
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
                'Phase 7', 'Phase 8', 'Phase 9', 'Phase 10', 'Phase 11', 'Phase 12'
            ];
            const VALID_CATEGORIES = [
                'Art', 'Civilization', 'Communications', 'Cosmology', 'Economy',
                'Science', 'Technology', 'Transport', 'Life', 'Humanity', 'Philosophy'
            ];

            ALL_EVENTS.forEach(event => {
                if (event.phase) expect(VALID_PHASES).toContain(event.phase);
                if (event.category) expect(VALID_CATEGORIES).toContain(event.category);

                if (event.semanticTags) {
                    expect(Array.isArray(event.semanticTags)).toBe(true);
                    event.semanticTags.forEach(tag => {
                        expect(tag).toHaveProperty('type');
                        expect(tag).toHaveProperty('value');
                        expect(['Topic', 'Location', 'Entity', 'Period']).toContain(tag.type);
                        expect(typeof tag.value).toBe('string');
                        expect(tag.value.length).toBeGreaterThan(0);
                    });
                }

                if (event.type === 'phase_marker') return;

                expect(event.title).toBeTruthy();
                expect(event.description).toBeTruthy();
                expect(event.description.length).toBeGreaterThan(10);
            });
        });

        it('should have valid numeric years', () => {
            ALL_EVENTS.forEach(event => {
                expect(typeof event.yearNumeric).toBe('number');
                expect(Number.isNaN(event.yearNumeric)).toBe(false);
            });
        });
    });

    describe('Journey Structure', () => {
        const eventIds = new Set(ALL_EVENTS.map(e => e.id));

        it('should have causality (connections)', () => {
            const VALID_CONNECTION_TYPES = ['caused', 'preceded', 'related', 'influenced'];
            JOURNEYS.forEach(journey => {
                expect(Array.isArray(journey.connections)).toBe(true);
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

        it('should reference existing events', () => {
            JOURNEYS.forEach(journey => {
                journey.eventIds.forEach(id => {
                    expect(eventIds.has(id), `Journey "${journey.title}" references missing event: ${id}`).toBe(true);
                });
            });
        });
    });
});

describe('Asset Verification', () => {
    it('should have a corresponding image file on disk for every event', () => {
        const KNOWN_MISSING: string[] = [];

        ALL_EVENTS.forEach(event => {
            if (event.imageUrl && !event.imageUrl.startsWith('http')) {
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

    it('should have a valid thumbnail image for every journey', () => {
        JOURNEYS.forEach(journey => {
            expect(journey.thumbnailUrl).toBeDefined();
            if (journey.thumbnailUrl) {
                const fullPath = path.join(PUBLIC_IMAGES_DIR, journey.thumbnailUrl);
                expect(fs.existsSync(fullPath), `Missing thumbnail for ${journey.title}: ${journey.thumbnailUrl}`).toBe(true);
            }
        });
    });

    it('should have unique images (by content) within each journey', () => {
        const crypto = require('crypto');

        JOURNEYS.forEach(journey => {
            const hashesSeen = new Map<string, string>();

            journey.eventIds.forEach(id => {
                const event = ALL_EVENTS.find(e => e && e.id === id);
                if (event && event.imageUrl) {
                    let relativePath = event.imageUrl;
                    if (relativePath.startsWith(import.meta.env?.BASE_URL || '/')) {
                        relativePath = relativePath.replace(import.meta.env?.BASE_URL || '/', '');
                    }
                    if (relativePath.startsWith('/')) relativePath = relativePath.substring(1);
                    relativePath = relativePath.split('?')[0];

                    const fullPath = path.join(PUBLIC_IMAGES_DIR, relativePath);

                    if (fs.existsSync(fullPath)) {
                        const stats = fs.statSync(fullPath);
                        // Strictly enforce > 1KB to catch corrupt/placeholder files
                        expect(stats.size).toBeGreaterThan(1000);

                        const fileBuffer = fs.readFileSync(fullPath);
                        const hash = crypto.createHash('md5').update(fileBuffer).digest('hex');

                        if (hashesSeen.has(hash)) {
                            const originalId = hashesSeen.get(hash);
                            throw new Error(`Journey "${journey.title}" has duplicate image content.\n   Event A: ${id}\n   Event B: ${originalId}\n   Image A: ${event.imageUrl}\n   Hash: ${hash}`);
                        }
                        hashesSeen.set(hash, id);
                    }
                }
            });
        });
    });
});
