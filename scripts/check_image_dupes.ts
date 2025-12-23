import { JOURNEYS } from '../data/journeys';
import { ALL_EVENTS } from '../data/allEvents';

const eventMap = new Map();
ALL_EVENTS.forEach(e => {
    if (e && e.id) eventMap.set(e.id, e);
});

console.log('--- Checking for Duplicate Images in Journeys ---');

JOURNEYS.forEach(journey => {
    const imagesSeen = new Map<string, string[]>(); // imageUrl -> [eventIds]

    journey.eventIds.forEach(eventId => {
        const event = eventMap.get(eventId);
        if (event && event.imageUrl) {
            // Normalize URL to detect true duplicates (ignoring query params)
            const cleanUrl = event.imageUrl.split('?')[0];

            if (!imagesSeen.has(cleanUrl)) {
                imagesSeen.set(cleanUrl, []);
            }
            imagesSeen.get(cleanUrl)?.push(eventId);
        }
    });

    let hasDupes = false;
    imagesSeen.forEach((ids, url) => {
        if (ids.length > 1) {
            if (!hasDupes) {
                console.log(`\n🚨 Journey: ${journey.title}`);
                hasDupes = true;
            }
            console.log(`   Duplicate Image: ${url}`);
            console.log(`   Used by: ${ids.join(', ')}`);
        }
    });
});
