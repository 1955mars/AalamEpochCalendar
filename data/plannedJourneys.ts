import { Globe, Lightbulb, Music, Utensils, Zap, Cpu, Anchor, BookOpen, Scale, Landmark, Feather, Videotape, Gamepad, Shirt, Medal, Heart, Leaf, Users, Gavel, Ship } from 'lucide-react';

export interface PlannedJourney {
    title: string;
    description: string;
    category: 'Origins' | 'Power' | 'Innovation' | 'Culture' | 'Life';
    icon: any;
}

// ═══════════════════════════════════════════════════════════════════════════
// LAUNCH TARGET: 25 Journeys
// Currently Live: 11 (Cosmic, Life, Civilizations, Art, Tech, AI, Money, Space, Cure, Gods, War)
// Need to Build: 14 (below)
// ═══════════════════════════════════════════════════════════════════════════

export const PLANNED_JOURNEYS: PlannedJourney[] = [
    // ═══════════════════════════════════════════════════════════════════════
    // PHASE 1: Can leverage many existing events (Est. 5-10 new events each)
    // COMPLETED: The Art of War
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: 'Pandemics & Plagues',
        description: 'Black Death to COVID: The invisible enemies that shaped humanity.',
        category: 'Life',
        icon: Zap
    },
    {
        title: 'Women Who Changed History',
        description: 'From Cleopatra to Curie: The hidden half of human achievement.',
        category: 'Power',
        icon: Users
    },
    {
        title: 'Empires of Trade',
        description: 'Silk Road to Amazon: How commerce connected and conquered the world.',
        category: 'Power',
        icon: Ship
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PHASE 2: Moderate new content (Est. 15-20 new events each)
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: 'Power Trip',
        description: 'Fire, Oil, Atom, Fusion: The energy cravings that built (and burn) the world.',
        category: 'Innovation',
        icon: Lightbulb
    },
    {
        title: 'Crime & Punishment',
        description: 'From the dungeon to DNA evidence: The evolution of justice and law.',
        category: 'Power',
        icon: Gavel
    },
    {
        title: 'The Climate Chronicle',
        description: 'Ice ages to global warming: The planet\'s story and humanity\'s impact.',
        category: 'Origins',
        icon: Leaf
    },
    {
        title: 'The Shadow World',
        description: 'Spies, codes, and secrets: From the Enigma machine to Snowden.',
        category: 'Power',
        icon: Feather
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PHASE 3: Heavy new content (Est. 25+ new events each)
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: 'The Rhythm of Life',
        description: 'A history of music: Bone flutes, Bach, The Beatles, and the algorithm.',
        category: 'Culture',
        icon: Music
    },
    {
        title: 'The Silver Screen',
        description: 'From silent shadows to streaming: The evolution of cinema.',
        category: 'Culture',
        icon: Videotape
    },
    {
        title: 'Level Up',
        description: 'How video games grew from Pong to the Metaverse.',
        category: 'Culture',
        icon: Gamepad
    },
    {
        title: 'The Food on Your Plate',
        description: 'Neolithic farming to lab-grown meat: The history of what we eat.',
        category: 'Life',
        icon: Utensils
    },
    {
        title: 'The Written Word',
        description: 'From clay tablets to Kindle: The stories that shaped civilization.',
        category: 'Culture',
        icon: BookOpen
    },
    {
        title: 'Faster, Higher, Stronger',
        description: 'The history of sports: Ancient Olympics to modern esports.',
        category: 'Life',
        icon: Medal
    },
    {
        title: 'The Mating Game',
        description: 'From arranged marriage to Tinder: The evolution of love and family.',
        category: 'Life',
        icon: Heart
    }
];
