
import { describe, it, expect } from 'vitest';
import { GraphEngine } from '../utils/GraphEngine';

describe('GraphEngine', () => {
    const graph = new GraphEngine();

    it('should find a path between connected events', () => {
        // Based on allConnections.ts:
        // hoa-5: modern-9 -> art-4
        // hoa-6: art-4 -> art-5
        // Path should be [modern-9, art-4, art-5]

        const startId = 'modern-9';
        const endId = 'art-5';
        const path = graph.findPath(startId, endId);

        expect(path).toBeDefined();
        expect(path).not.toBeNull();
        expect(path?.length).toBe(3);
        expect(path![0].id).toBe('modern-9');
        expect(path![1].id).toBe('art-4');
        expect(path![2].id).toBe('art-5');
    });

    it('should return null for disconnected events', () => {
        // Assuming no path from 'cosmic-1' (Big Bang) to 'art-5' (Great Wave) is FALSE, 
        // everything is likely connected in a timeline.
        // Let's try reverse direction? Directed graph.
        // effects trace downstream.
        // art-5 does NOT cause modern-9.

        const path = graph.findPath('art-5', 'modern-9');
        expect(path).toBeNull();
    });
});
