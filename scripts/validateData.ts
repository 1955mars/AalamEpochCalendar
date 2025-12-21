import { ALL_EVENTS } from '../data/allEvents';
import { JOURNEYS } from '../data/journeys';
import { PHASES } from '../constants';

const errors: string[] = [];
const warnings: string[] = [];

console.log('🔍 Validating Data Integrity...\n');

// 1. Validate Events
const eventIds = new Set<string>();
ALL_EVENTS.forEach((event, index) => {
    if (!event.id) errors.push(`Event at index ${index} missing ID`);
    if (eventIds.has(event.id)) errors.push(`Duplicate Event ID: ${event.id}`);
    eventIds.add(event.id);

    if (typeof event.yearNumeric !== 'number') {
        errors.push(`Event ${event.id} missing valid yearNumeric: ${event.yearNumeric}`);
    }
});

console.log(`✅ Checked ${ALL_EVENTS.length} Events`);

// 2. Validate Journeys
JOURNEYS.forEach(journey => {
    journey.eventIds.forEach(id => {
        if (!eventIds.has(id)) {
            errors.push(`Journey "${journey.title}" references missing event ID: ${id}`);
        }
    });

    if (journey.connections) {
        journey.connections.forEach(conn => {
            if (!eventIds.has(conn.fromEventId)) errors.push(`Connection ${conn.id} invalid 'from': ${conn.fromEventId}`);
            if (!eventIds.has(conn.toEventId)) errors.push(`Connection ${conn.id} invalid 'to': ${conn.toEventId}`);
        });
    }
});

console.log(`✅ Checked ${JOURNEYS.length} Journeys`);

// 3. Report
if (warnings.length > 0) {
    console.log('\n⚠️ Warnings:');
    warnings.forEach(w => console.log(` - ${w}`));
}

if (errors.length > 0) {
    console.error('\n❌ Validation FAILED with errors:');
    errors.forEach(e => console.error(` - ${e}`));
    process.exit(1);
} else {
    console.log('\n🎉 Data Integrity Verified! System is clean.');
    process.exit(0);
}
