import { describe, it, expect } from 'vitest';
import { getPhaseId, formatYearShort } from '../utils/timelineUtils';

// Mock Data
const MOCK_PHASES = [
    { id: 'Phase 1', title: 'Primordial', startYear: -13800000000, endYear: -4500000000, bg: 'bg-slate-900', description: 'test' },
    { id: 'Phase 2', title: 'Life', startYear: -4500000000, endYear: -65000000, bg: 'bg-indigo-900', description: 'test' },
];

describe('getPhaseId', () => {
    it('buckets Big Bang into Phase 1', () => {
        const event = {
            id: '1',
            yearNumeric: -13700000000,
            phase: 'Phase 1', // fallback
            title: 'Big Bang',
            description: '',
            year: '',
            category: 'Cosmology' as const,
            imageUrl: ''
        };
        // @ts-ignore
        const phase = getPhaseId(event, MOCK_PHASES);
        expect(phase).toBe('Phase 1');
    });

    it('buckets Dinosaur into Phase 2', () => {
        const event = {
            id: '2',
            yearNumeric: -200000000,
            phase: 'Phase 2',
            title: 'Dino',
            description: '',
            year: '',
            category: 'Life' as const,
            imageUrl: ''
        };
        // @ts-ignore
        const phase = getPhaseId(event, MOCK_PHASES);
        expect(phase).toBe('Phase 2');
    });

    it('respects phase_marker explicit phase', () => {
        const event = {
            id: 'marker',
            type: 'phase_marker' as const,
            phase: 'Phase X',
            yearNumeric: 0,
            title: '',
            description: '',
            year: '',
            category: 'Cosmology' as const,
            imageUrl: ''
        };
        // @ts-ignore
        const phase = getPhaseId(event, MOCK_PHASES);
        expect(phase).toBe('Phase X');
    });
});

describe('formatYearShort', () => {
    it('formats billions', () => {
        expect(formatYearShort('13.8 Billion Years Ago')).toBe('13.8 BYA');
    });

    it('formats millions', () => {
        expect(formatYearShort('65 Million Years Ago')).toBe('65 MYA');
    });

    it('formats thousands', () => {
        expect(formatYearShort('10 Thousand Years Ago')).toBe('10 KYA');
    });

    it('formats simple years ago', () => {
        expect(formatYearShort('50 Years Ago')).toBe('50 YA');
    });
});
