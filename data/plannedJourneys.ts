import { Globe, Lightbulb, Music, Utensils, Zap, Cpu, Anchor, BookOpen, Scale, Landmark, Feather, Videotape, Gamepad, Medal, Heart, Leaf, Users, Gavel, Ship } from 'lucide-react';

export interface PlannedJourney {
    title: string;
    description: string;
    category: 'Origins' | 'Power' | 'Innovation' | 'Culture' | 'Life';
    icon: any;
}

// ═══════════════════════════════════════════════════════════════════════════
// LAUNCH TARGET: 25 Journeys ✅ COMPLETE!
// Currently Live: 25 (Cosmic, Life, Civilizations, Art, Tech, AI, Money, Space, Cure, Gods, War, Pandemics, Women, Trade, Power, Rights, Climate, Shadow, Music, Philosophy, Cinema, Gaming, Food, Crime, Mating)
// 🎉 LAUNCH READY! 🎉
// ═══════════════════════════════════════════════════════════════════════════

export const PLANNED_JOURNEYS: PlannedJourney[] = [
    // ═══════════════════════════════════════════════════════════════════════
    // PHASE 1: Can leverage many existing events (Est. 5-10 new events each)
    // COMPLETED: The Art of War, Pandemics & Plagues, Women Who Changed History, Empires of Trade
    // ═══════════════════════════════════════════════════════════════════════


    // ═══════════════════════════════════════════════════════════════════════
    // PHASE 2: Moderate new content (Est. 15-20 new events each)
    // COMPLETED: Power Trip, Rights & Revolutions, The Climate Chronicle, The Shadow World
    // ═══════════════════════════════════════════════════════════════════════

    // ═══════════════════════════════════════════════════════════════════════
    // PHASE 3: Heavy new content (Est. 25+ new events each)
    // COMPLETED: The Rhythm of Life, The Examined Life, The Silver Screen, Level Up, The Food on Your Plate, Crime & Punishment, The Mating Game
    // ═══════════════════════════════════════════════════════════════════════
    // 🎉 ALL 25 JOURNEYS COMPLETE - READY FOR LAUNCH! 🎉
];
