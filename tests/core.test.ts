
import { test } from 'node:test';
import assert from 'node:assert';
import { getPhaseId, formatYearShort } from '../utils/timelineUtils.ts';

// Mock Data
const MOCK_PHASES = [
    { id: 'Phase 1', title: 'Primordial', startYear: -13800000000, endYear: -4500000000, bg: 'bg-slate-900', description: '' },
    { id: 'Phase 2', title: 'Life', startYear: -4500000000, endYear: -65000000, bg: 'bg-indigo-900', description: '' },
];

test('getPhaseId', async (t) => {
    await t.test('buckets Big Bang into Phase 1', () => {
        const event = {
            id: '1',
            yearNumeric: -13700000000,
            phase: 'Phase 1', // fallback
            title: 'Big Bang',
            description: '',
            year: '',
            category: 'Cosmology',
            imageUrl: ''
        };
        // @ts-ignore
        const phase = getPhaseId(event, MOCK_PHASES);
        assert.strictEqual(phase, 'Phase 1');
    });

    await t.test('buckets Dinosaur into Phase 2', () => {
        const event = {
            id: '2',
            yearNumeric: -200000000,
            phase: 'Phase 2',
            title: 'Dino',
            description: '',
            year: '',
            category: 'Life',
            imageUrl: ''
        };
        // @ts-ignore
        const phase = getPhaseId(event, MOCK_PHASES);
        assert.strictEqual(phase, 'Phase 2');
    });

    await t.test('respects phase_marker explicit phase', () => {
        const event = {
            id: 'marker',
            type: 'phase_marker',
            phase: 'Phase X',
            yearNumeric: 0,
            title: '',
            description: '',
            year: '',
            category: 'Cosmology',
            imageUrl: ''
        };
        // @ts-ignore
        const phase = getPhaseId(event, MOCK_PHASES);
        assert.strictEqual(phase, 'Phase X');
    });
});

test('formatYearShort', async (t) => {
    await t.test('formats billions', () => {
        assert.strictEqual(formatYearShort('13.8 Billion Years Ago'), '13.8 BYA');
    });

    await t.test('formats millions', () => {
        assert.strictEqual(formatYearShort('65 Million Years Ago'), '65 MYA');
    });

    await t.test('formats thousands', () => {
        assert.strictEqual(formatYearShort('10 Thousand Years Ago'), '10 KYA');
    });

    await t.test('formats simple years ago', () => {
        assert.strictEqual(formatYearShort('50 Years Ago'), '50 YA');
    });
});
