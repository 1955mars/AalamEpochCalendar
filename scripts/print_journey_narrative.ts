
import { JOURNEYS } from '../data/journeys';
import { ALL_EVENTS } from '../data/allEvents';

// Filter valid events once
const VALID_EVENTS = ALL_EVENTS.filter(e => e && e.id);

JOURNEYS.forEach(journey => {
    console.log(`\n==================================================`);
    console.log(`JOURNEY: ${journey.title.toUpperCase()}`);
    console.log(`"${journey.description}"`);
    console.log('==================================================\n');

    const events = journey.eventIds
        .map(id => VALID_EVENTS.find(e => e.id === id))
        .filter(e => e !== undefined);

    events.forEach(e => {
        // Check if there's an override in the journey
        const override = journey.overrides?.[e.id];
        const title = override?.title || e.title;
        const desc = override?.description || e.description;

        console.log(`[${e.year}] ${title}`);
        console.log(`${desc}\n`);
    });
    console.log('\n\n');
});
