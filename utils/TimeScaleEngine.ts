
/**
 * TimeScaleEngine.ts
 * 
 * This utility handles the complex mapping of "Time" to "Space" (Position on screen).
 * 
 * CHALLENGE:
 * We need to show "The Big Bang" (13.8 Billion Years Ago) and "The iPhone" (2007)
 * on the same scrollbar without the Big Bang being miles away or the iPhone being invisible.
 * 
 * SOLUTION: Hybrid Scale
 * 1. Deep Time Zone (> 10,000 years ago): Logarithmic Scale.
 *    - Compresses billions of years into a readable space.
 * 2. Human History Zone (< 10,000 years ago): Linear Scale.
 *    - Preserves the density and relative spacing of civilization.
 */

// Configuration for the Hybrid Scale
const CONFIG = {
    // Where does the "Deep Time" zone end and "Human History" begin?
    TRANSITION_YEAR_AGO: 12000, // 10,000 BC approx

    // How much visual space (0-1) does the Deep Time zone get?
    // 20% for 13 Billion years, leaving 80% for the last 12,000 years.
    DEEP_TIME_SCREEN_SHARE: 0.20,
};

export class TimeScaleEngine {

    /**
     * Parses a year string into a distinct numerical value: "Years Ago"
     * Positive value = Years Ago (e.g., 2000 => 24 years ago from 2024)
     * This is the standardized internal unit.
     */
    static parseYearToAgo(yearStr: string): number {
        const currentYear = new Date().getFullYear();
        const lower = yearStr.toLowerCase().trim().replace(/,/g, '');

        // 1. Handle "Billion/Million/Thousand Years Ago"
        let multiplier = 1;
        if (lower.includes('billion')) multiplier = 1_000_000_000;
        else if (lower.includes('million')) multiplier = 1_000_000;
        else if (lower.includes('thousand')) multiplier = 1_000;

        if (lower.includes('ago') || lower.includes('ya')) {
            const match = lower.match(/[\d.]+/);
            if (match) {
                return parseFloat(match[0]) * multiplier;
            }
        }

        // 2. Handle "BC / BCE"
        if (lower.includes('bc') || lower.includes('b.c.')) {
            const match = lower.match(/[\d.]+/);
            if (match) {
                const year = parseFloat(match[0]);
                // 100 BC is (2024 + 100) years ago
                return currentYear + year;
            }
        }

        // 3. Handle Standard Years (e.g. "1969")
        // If it's just a number, assume AD year.
        const match = lower.match(/^[\d.]+$/);
        if (match) {
            const year = parseFloat(match[0]);
            return currentYear - year;
        }

        // Fallback
        return 0;
    }

    /**
     * Calculates the position (0.0 to 1.0) on the timeline for a given "Years Ago" value.
     * 0.0 = The Big Bang (Max Ago)
     * 1.0 = Present Day (0 Ago)
     */
    static getPosition(yearsAgo: number): number {
        const MAX_AGO = 13_800_000_000; // 13.8 Billion Years
        const TRANSITION = CONFIG.TRANSITION_YEAR_AGO;
        const SPLIT = CONFIG.DEEP_TIME_SCREEN_SHARE;

        // ZONE 1: Human History (Linear)
        // Range: 0 (Present) to TRANSITION (12,000 Ago)
        if (yearsAgo <= TRANSITION) {
            // Linear interpolation within the top 80% of the screen (SPLIT to 1.0)
            // 0 Ago -> Position 1.0
            // TRANSITION Ago -> Position SPLIT (0.2)

            const linearProgress = 1 - (yearsAgo / TRANSITION); // 1 = Present, 0 = 12k Ago

            // Map to the screen space (SPLIT -> 1.0)
            // We want Present (1.0) to be at 1.0
            // We want 12k Ago (0.0 progress) to be at SPLIT
            return SPLIT + (linearProgress * (1 - SPLIT));
        }

        // ZONE 2: Deep Time (Logarithmic)
        // Range: TRANSITION (12,000 Ago) to MAX_AGO (13.8B Ago)
        // We map this to 0.0 -> SPLIT (0.2)
        else {
            // Logarithmic Math:
            // We want a value between 0 and 1 representing where it falls in the log scale.

            const logMax = Math.log(MAX_AGO);
            const logMin = Math.log(TRANSITION);
            const logCurrent = Math.log(yearsAgo);

            // Inverse because "Higher Ago" = "Lower Screen Position" (closer to 0)
            // Normalized: 0 = Transition, 1 = Big Bang
            const normalizedLog = (logCurrent - logMin) / (logMax - logMin);

            // Invert it: 1 = Transition, 0 = Big Bang
            const invertedLog = 1 - normalizedLog;

            // Map to screen space (0.0 -> SPLIT)
            return invertedLog * SPLIT;
        }
    }

    /**
     * Helper to format "Years Ago" back into a readable label
     */
    static formatAgo(yearsAgo: number): string {
        if (yearsAgo >= 1_000_000_000) return (yearsAgo / 1_000_000_000).toFixed(1) + ' BYA';
        if (yearsAgo >= 1_000_000) return (yearsAgo / 1_000_000).toFixed(1) + ' MYA';
        if (yearsAgo >= 10_000) return (yearsAgo / 1_000).toFixed(1) + ' KYA';
        if (yearsAgo > 0) {
            const currentYear = new Date().getFullYear();
            const yearAD = currentYear - yearsAgo;
            if (yearAD < 0) return Math.abs(Math.round(yearAD)) + ' BC';
            return Math.round(yearAD).toString();
        }
        return 'Present';
    }

    /**
     * INVERSE OPERATION: Given a position (0-1), what is the "Years Ago"?
     * Used for the Sticky Header to show the current year while scrolling.
     */
    static getYearFromPosition(position: number): number {
        const MAX_AGO = 13_800_000_000;
        const TRANSITION = CONFIG.TRANSITION_YEAR_AGO;
        const SPLIT = CONFIG.DEEP_TIME_SCREEN_SHARE;

        // Sanity check
        if (position <= 0) return MAX_AGO;
        if (position >= 1) return 0;

        // ZONE 2: Deep Time (Logarithmic)
        // Range: 0.0 -> SPLIT
        // Math: invertedLog = position / SPLIT
        // normalizedLog = 1 - invertedLog
        // logCurrent = (normalizedLog * (logMax - logMin)) + logMin
        // yearsAgo = exp(logCurrent)
        if (position < SPLIT) {
            const logMax = Math.log(MAX_AGO);
            const logMin = Math.log(TRANSITION);

            const invertedLog = position / SPLIT;
            const normalizedLog = 1 - invertedLog;

            const logCurrent = (normalizedLog * (logMax - logMin)) + logMin;
            return Math.exp(logCurrent);
        }

        // ZONE 1: Human History (Linear)
        // Range: SPLIT -> 1.0
        // Math: linearProgress = (position - SPLIT) / (1 - SPLIT)
        // 1 - linearProgress = yearsAgo / TRANSITION
        // yearsAgo = TRANSITION * (1 - linearProgress)
        else {
            const linearProgress = (position - SPLIT) / (1 - SPLIT);
            // Linear Progress: 0 = Transition (12k Ago), 1 = Present (0 Ago)
            // Wait, earlier logic: linearProgress = 1 - (yearsAgo / TRANSITION)
            // So yearsAgo / TRANSITION = 1 - linearProgress
            return TRANSITION * (1 - linearProgress);
        }
    }
}
