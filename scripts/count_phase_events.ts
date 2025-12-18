
import { INITIAL_EVENTS } from '../constants';

const phaseCounts: Record<string, number> = {};

INITIAL_EVENTS.forEach(event => {
    // Skip phase markers themselves if we want to count "days/events" 
    // strictly, but the user said "events".
    // Let's count actual content events separately from markers if possible,
    // or just count everything. 
    // The markers have type: 'phase_marker'.

    if (event.type === 'phase_marker') return;

    if (!phaseCounts[event.phase]) {
        phaseCounts[event.phase] = 0;
    }
    phaseCounts[event.phase]++;
});

console.log('--- Event Counts per Phase ---');
Object.keys(phaseCounts).sort((a, b) => {
    // Sort by Phase number (Phase 1, Phase 2, ...)
    const numA = parseInt(a.replace('Phase ', ''));
    const numB = parseInt(b.replace('Phase ', ''));
    return numA - numB;
}).forEach(phase => {
    console.log(`${phase}: ${phaseCounts[phase]} events`);
});
