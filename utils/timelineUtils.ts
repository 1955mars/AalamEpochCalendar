import { TimelineEvent, PhaseDefinition } from '../types';

/**
 * Determines the phase ID for a given timeline event.
 * Uses the event's explicit phase if it's a phase marker.
 * Otherwise, buckets the event into a phase based on its yearNumeric and the provided phases configuration.
 */
export const getPhaseId = (
    event: TimelineEvent,
    phases: PhaseDefinition[]
): string | undefined => {
    try {
        if (!event) return undefined;
        if (event.type === 'phase_marker') return event.phase;

        // Use dynamic ranges from configuration
        if (!phases || !Array.isArray(phases)) return event.phase;

        const phase = phases.find(p => {
            if (typeof p.startYear !== 'number' || typeof p.endYear !== 'number') return false;
            return event.yearNumeric >= p.startYear && event.yearNumeric < p.endYear;
        });

        return phase ? phase.id : event.phase;
    } catch (err) {
        console.error('Error in getPhaseId', err, event);
        return undefined;
    }
};

/**
 * Formats a year string into a shorter representation.
 * e.g., "13.8 Billion Years Ago" -> "13.8 BYA"
 */
export const formatYearShort = (yearStr: string): string => {
    if (!yearStr) return '';
    return yearStr
        .replace(/Billion Years Ago/gi, 'BYA')
        .replace(/Million Years Ago/gi, 'MYA')
        .replace(/Thousand Years Ago/gi, 'KYA')
        .replace(/Years Ago/gi, 'YA');
};
