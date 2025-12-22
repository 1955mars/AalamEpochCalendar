import { Globe, Lightbulb, Music, Utensils, Zap, Cpu, Anchor, BookOpen, Scale, Landmark, Feather, Videotape, Gamepad, Shirt, Medal } from 'lucide-react';

export interface PlannedJourney {
    title: string;
    description: string;
    category: 'Origins' | 'Power' | 'Innovation' | 'Culture' | 'Life';
    icon: any;
}

export const PLANNED_JOURNEYS: PlannedJourney[] = [
    // Origins (Big History)
    {
        title: 'Sapiens',
        description: 'From the Cognitive Revolution to the Agricultural Revolution: How we conquered the planet.',
        category: 'Origins',
        icon: Globe
    },
    {
        title: 'The Psycho-Path',
        description: 'A history of the human mind: Madness, dreams, psychedelics, and the discovery of the unconscious.',
        category: 'Origins',
        icon: getIcon('Brain')
    },

    // Power & Society
    {
        title: 'The Money Illusion',
        description: 'Why we trust paper, crave gold, and bet on invisible coins: The psychology of value.',
        category: 'Power',
        icon: Scale
    },
    {
        title: 'The Shadow World',
        description: 'Spies, codes, and the hidden history of the world: From the Enigma machine to Snowden.',
        category: 'Power',
        icon: Feather
    },
    {
        title: 'The Art of War',
        description: 'How conflict drove innovation, from the first chariot to the nuclear triad.',
        category: 'Power',
        icon: getIcon('Sword')
    },
    {
        title: 'Crime & Punishment',
        description: 'From the dungeon to DNA evidence: The evolution of justice and law.',
        category: 'Power',
        icon: Landmark
    },

    // Innovation
    {
        title: 'To The Stars',
        description: 'The Space Race, the Moon Landing, and the future of Mars colonization.',
        category: 'Innovation',
        icon: Zap
    },
    {
        title: 'Power Trip',
        description: 'Fire, Oil, Atom, Fusion: The energy cravings that built (and burn) the world.',
        category: 'Innovation',
        icon: Lightbulb
    },
    {
        title: 'The Silicon Brain',
        description: 'The history of computing, bridging the abacus to the quantum era.',
        category: 'Innovation',
        icon: Cpu
    },

    // Culture
    {
        title: 'The Rhythm of Life',
        description: 'A history of music: Bone flutes, Bach, The Beatles, and the algorithm.',
        category: 'Culture',
        icon: Music
    },
    {
        title: 'The Silver Screen',
        description: 'From silent shadows to virtual realities: The evolution of cinema.',
        category: 'Culture',
        icon: Videotape
    },
    {
        title: 'Level Up',
        description: 'How video games grew from a pixelated dot to the Metaverse.',
        category: 'Culture',
        icon: Gamepad
    },
    {
        title: 'Gods & Mortals',
        description: 'The evolution of belief: How myths and religions shaped civilizations.',
        category: 'Culture', // Moved to Culture as it fits "Stories"
        icon: BookOpen
    },

    // Everyday Life
    {
        title: 'The Mating Game',
        description: 'From arranged marriage to Tinder: The evolution of love, sex, and family.',
        category: 'Life',
        icon: getIcon('Heart')
    },
    {
        title: 'The Food on Your Plate',
        description: 'Neolithic farming to Lab-Grown Meat: The history of what we eat.',
        category: 'Life',
        icon: Utensils
    },
    {
        title: 'The Cure',
        description: 'From shamans to mRNA: The eternal war against disease.',
        category: 'Life',
        icon: Anchor
    },
    {
        title: 'Faster, Higher, Stronger',
        description: 'The history of sports, competition, and human limits.',
        category: 'Life',
        icon: Medal
    }
];

function getIcon(name: string) {
    // Basic mapping or fallback
    if (name === 'Brain') return Lightbulb;
    if (name === 'Heart') return Anchor; // Temporary fallback needing simpler icon
    if (name === 'Sword') return Anchor;
    return Globe;
}
