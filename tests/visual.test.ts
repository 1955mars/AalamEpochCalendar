import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

import { JOURNEYS } from '../data/journeys';

describe('Visual Verification', () => {
    const journeysToVerify = JOURNEYS.map(j => j.id);

    journeysToVerify.forEach(journeyId => {
        it(`should generate a composite atlas for ${journeyId}`, () => {
            const scriptPath = path.join(process.cwd(), 'scripts', 'stitch_atlas.ts');
            const outputPath = path.join(process.cwd(), 'verification_artifacts', `${journeyId}_composite.jpg`);

            // Ensure previous run is cleaned up to verify fresh generation
            if (fs.existsSync(outputPath)) {
                fs.unlinkSync(outputPath);
            }

            console.log(`Running visual generation for: ${journeyId}...`);

            try {
                execSync(`npx tsx ${scriptPath} ${journeyId}`, { stdio: 'inherit' });
            } catch (error) {
                console.error(`Failed to generate atlas for ${journeyId}`);
                throw error;
            }

            expect(fs.existsSync(outputPath)).toBe(true);
            const stats = fs.statSync(outputPath);
            expect(stats.size).toBeGreaterThan(0);

            console.log('\n---------------------------------------------------');
            console.log(`[AGENT_AUDIT_REQUEST]`);
            console.log(`Context: Visual verification artifact generated.`);
            console.log(`Artifact: ${outputPath}`);
            console.log(`Instruction: Review the composite image. Verify that all images align with their event descriptions.`);
            console.log('---------------------------------------------------\n');
        });
    });
});
