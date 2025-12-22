import { Journey, Connection } from '../types';

export const CONNECTIONS: Connection[] = [
    // Cosmic Origins Connections (Deep Dive)
    {
        id: 'c1',
        fromEventId: 'cosmic-1', // Planck
        toEventId: 'cosmic-2',   // Inflation
        type: 'caused'
    },
    {
        id: 'c2',
        fromEventId: 'cosmic-2',
        toEventId: '1',          // Big Bang
        type: 'caused'
    },
    {
        id: 'c3',
        fromEventId: '1',
        toEventId: '2',          // Particles
        type: 'caused'
    },
    {
        id: 'c4',
        fromEventId: '2',
        toEventId: 'cosmic-3',   // Nucleosynthesis
        type: 'caused'
    },
    {
        id: 'c5',
        fromEventId: 'cosmic-3',
        toEventId: '3',          // Recombination
        type: 'preceded'
    },
    {
        id: 'c6',
        fromEventId: '3',
        toEventId: 'cosmic-5',   // Dark Ages
        type: 'preceded'
    },
    {
        id: 'c7',
        fromEventId: 'cosmic-5',
        toEventId: '4',          // First Stars
        type: 'preceded'
    },
    {
        id: 'c8',
        fromEventId: '4',
        toEventId: 'cosmic-7',   // Reionization
        type: 'caused'
    },
    {
        id: 'c9',
        fromEventId: '4',
        toEventId: 'cosmic-8',   // Supernovas
        type: 'caused'
    },
    {
        id: 'c10',
        fromEventId: 'cosmic-8',
        toEventId: 'cosmic-9',   // Black Holes
        type: 'caused'
    },
    {
        id: 'c11',
        fromEventId: 'cosmic-9',
        toEventId: '5',          // First Galaxies
        type: 'related'
    },
    {
        id: 'c12',
        fromEventId: '5',
        toEventId: '6',          // Galactic Mergers
        type: 'caused'
    },
    {
        id: 'c13',
        fromEventId: '6',
        toEventId: 'cosmic-12',  // Halo
        type: 'related'
    },
    {
        id: 'c14',
        fromEventId: 'cosmic-12',
        toEventId: '7',          // Milky Way Forms
        type: 'preceded'
    },
    {
        id: 'c15',
        fromEventId: '7',
        toEventId: 'cosmic-14',  // Peak Star Formation
        type: 'preceded'
    },
    {
        id: 'c16',
        fromEventId: 'cosmic-14',
        toEventId: '8',          // Milky Way Disk
        type: 'preceded'
    },
    {
        id: 'c17',
        fromEventId: '8',
        toEventId: 'cosmic-15',  // Dark Energy
        type: 'preceded'
    },
    {
        id: 'c18',
        fromEventId: 'cosmic-15',
        toEventId: 'cosmic-16',  // Pre-Solar Cloud
        type: 'preceded'
    },
    {
        id: 'c19',
        fromEventId: 'cosmic-16',
        toEventId: 'cosmic-17',  // Supernova Trigger
        type: 'preceded'
    },
    {
        id: 'c20',
        fromEventId: 'cosmic-17',
        toEventId: '9',          // Solar System
        type: 'caused'
    },
    {
        id: 'c21',
        fromEventId: '9',
        toEventId: 'cosmic-19',  // T-Tauri
        type: 'caused'
    },
    {
        id: 'c22',
        fromEventId: 'cosmic-19',
        toEventId: 'cosmic-20',  // Grand Tack
        type: 'preceded'
    },
    {
        id: 'c23',
        fromEventId: 'cosmic-20',
        toEventId: '10',         // Accretion
        type: 'caused'
    },
    {
        id: 'c24',
        fromEventId: '10',
        toEventId: '11',         // Earth Core
        type: 'caused'
    },
    {
        id: 'c25',
        fromEventId: '11',
        toEventId: '12',         // Moon Impact
        type: 'preceded'
    },
    {
        id: 'c26',
        fromEventId: '12',
        toEventId: 'cosmic-24',  // Cooling
        type: 'caused'
    },
    {
        id: 'c27',
        fromEventId: 'cosmic-24',
        toEventId: 'cosmic-25',  // Oceans
        type: 'caused'
    },
    {
        id: 'c28',
        fromEventId: 'cosmic-25',
        toEventId: '15',         // LHB
        type: 'preceded'
    },
    {
        id: 'c29',
        fromEventId: '15',
        toEventId: 'cosmic-27',  // Organics
        type: 'caused'
    },
    {
        id: 'c30',
        fromEventId: 'cosmic-27',
        toEventId: '18',         // First Life
        type: 'caused'
    },
    // Evolution of Life Connections
    { id: 'eol-1', fromEventId: '18', toEventId: '19', type: 'caused' },
    { id: 'eol-2', fromEventId: '19', toEventId: '20', type: 'caused' }, // Stromatolites -> Photosynthesis
    { id: 'eol-3', fromEventId: '20', toEventId: '23', type: 'caused' }, // Photosynthesis -> Oxygen
    { id: 'eol-4', fromEventId: '23', toEventId: '24', type: 'caused' }, // Oxygen -> Ice Age
    { id: 'eol-5', fromEventId: '24', toEventId: '26', type: 'preceded' }, // Ice Age -> Eukaryotes
    { id: 'eol-6', fromEventId: '26', toEventId: '27', type: 'caused' }, // Eukaryotes -> Sex
    { id: 'eol-7', fromEventId: '27', toEventId: '31', type: 'preceded' }, // Sex -> Complex Life
    { id: 'eol-8', fromEventId: '31', toEventId: 'p2-1', type: 'preceded' }, // Ediacaran -> Cambrian
    { id: 'eol-9', fromEventId: 'p2-1', toEventId: 'p2-2', type: 'caused' }, // Explosion -> Vertebrates
    { id: 'eol-10', fromEventId: 'p2-1', toEventId: 'p2-3', type: 'related' }, // Explosion -> Trilobites
    { id: 'eol-11', fromEventId: 'p2-2', toEventId: 'p2-5', type: 'related' }, // Vertebrates -> Biodiversity
    { id: 'eol-12', fromEventId: 'p2-5', toEventId: 'p2-6', type: 'preceded' }, // Biodiversity -> Land Plants
    { id: 'eol-13', fromEventId: 'p2-6', toEventId: 'p2-7', type: 'preceded' }, // Plants -> Extinction 1
    { id: 'eol-14', fromEventId: 'p2-7', toEventId: 'p2-9', type: 'preceded' }, // Extinction -> Land Arthropods
    { id: 'eol-15', fromEventId: 'p2-9', toEventId: 'p2-10', type: 'related' }, // Land -> Fish Age
    { id: 'eol-16', fromEventId: 'p2-10', toEventId: 'p2-11', type: 'related' }, // Fish -> Forests
    { id: 'eol-17', fromEventId: 'p2-11', toEventId: 'p2-12', type: 'related' }, // Forests -> Tiktaalik
    { id: 'eol-18', fromEventId: 'p2-12', toEventId: 'p2-13', type: 'caused' }, // Tiktaalik -> Amphibians
    { id: 'eol-19', fromEventId: 'p2-13', toEventId: 'p2-14', type: 'preceded' }, // Amphibians -> Devonian Extinction
    { id: 'eol-20', fromEventId: 'p2-14', toEventId: 'p2-15', type: 'preceded' }, // Extinction -> Coal Swamps
    { id: 'eol-21', fromEventId: 'p2-15', toEventId: 'p2-16', type: 'related' }, // Swamps -> Egg
    { id: 'eol-22', fromEventId: 'p2-16', toEventId: 'p2-17', type: 'caused' }, // Egg -> Synapsids
    { id: 'eol-23', fromEventId: 'p2-17', toEventId: 'p2-19', type: 'preceded' }, // Synapsids -> Great Dying
    { id: 'eol-24', fromEventId: 'p2-19', toEventId: 'p2-21', type: 'caused' }, // Dying -> Dinosaurs
    { id: 'eol-25', fromEventId: 'p2-21', toEventId: 'p2-22', type: 'preceded' }, // Dinos -> Triassic Extinction
    { id: 'eol-26', fromEventId: 'p2-22', toEventId: 'p2-23', type: 'caused' }, // Extinction -> Jurassic Giants
    { id: 'eol-27', fromEventId: 'p2-23', toEventId: 'p2-24', type: 'related' }, // Giants -> Birds
    { id: 'eol-28', fromEventId: 'p2-24', toEventId: 'p2-25', type: 'preceded' },
    { id: 'eol-29', fromEventId: 'p2-25', toEventId: 'p2-27', type: 'preceded' }, // Flowers -> T-Rex
    { id: 'eol-30', fromEventId: 'p2-27', toEventId: 'p2-28', type: 'preceded' }, // T-Rex -> Impact
    { id: 'eol-31', fromEventId: 'p2-28', toEventId: 'p2-29', type: 'caused' }, // Impact -> Extinction
    { id: 'eol-32', fromEventId: 'p2-29', toEventId: '41', type: 'caused' }, // Extinction -> Mammals
    { id: 'eol-33', fromEventId: '41', toEventId: '42', type: 'preceded' },

    // Rise of Civilizations Connections
    { id: 'roc-1', fromEventId: 'p4-3', toEventId: 'p4-9', type: 'related' }, // Jericho -> Rice (Agriculture Spread)
    { id: 'roc-2', fromEventId: 'p4-9', toEventId: 'p4-14', type: 'related' }, // Rice -> Catalhoyuk (Urbanization)
    { id: 'roc-3', fromEventId: 'p4-14', toEventId: 'p4-25', type: 'preceded' }, // Catalhoyuk -> Sumer (First Cities)
    { id: 'roc-4', fromEventId: 'p4-25', toEventId: 'p4-29', type: 'caused' }, // Sumer -> Writing (Admin needs)
    { id: 'roc-5', fromEventId: 'p4-29', toEventId: 'p5-2', type: 'preceded' }, // Writing -> City States
    { id: 'roc-6', fromEventId: 'p4-30', toEventId: 'p5-1', type: 'related' }, // Bronze -> Egypt Unification (Tech & Power)
    { id: 'roc-7', fromEventId: 'p5-2', toEventId: 'p5-8', type: 'related' }, // Sumer -> Indus (Trade/Parallel)
    { id: 'roc-8', fromEventId: 'p5-1', toEventId: 'p5-9', type: 'caused' }, // Egypt -> Pyramids (State Power)
    { id: 'roc-9', fromEventId: 'p5-2', toEventId: 'p5-11', type: 'caused' }, // Cities -> Empire (Sargon)
    { id: 'roc-10', fromEventId: 'p5-15', toEventId: 'p5-24', type: 'related' }, // Caral -> Olmec (Americas)
    { id: 'roc-11', fromEventId: 'p5-11', toEventId: 'p5-16', type: 'preceded' }, // Akkad -> Hammurabi (Law)
    { id: 'roc-12', fromEventId: 'p5-17', toEventId: 'p5-21', type: 'caused' }, // China Writing -> Shang Dyn
    { id: 'roc-13', fromEventId: 'p5-21', toEventId: 'p6-3', type: 'preceded' }, // Shang -> Zhou (Implied link)
    { id: 'roc-14', fromEventId: 'p5-31', toEventId: 'p6-1', type: 'caused' }, // Collapse -> Iron Age (Necessity)
    { id: 'roc-15', fromEventId: 'p5-29', toEventId: 'p6-4', type: 'related' }, // Exodus/Levant -> Phoenicians
    { id: 'roc-16', fromEventId: 'p6-4', toEventId: 'p6-11', type: 'caused' }, // Alphabet -> Homer (Literature)
    { id: 'roc-17', fromEventId: 'p6-1', toEventId: 'p6-9', type: 'related' }, // Iron Age -> Rome Founding
    { id: 'roc-18', fromEventId: 'p6-11', toEventId: 'p6-21', type: 'preceded' }, // Greek Culture -> Democracy
    { id: 'roc-19', fromEventId: 'p6-9', toEventId: 'p6-20', type: 'caused' }, // Rome Kings -> Republic
    { id: 'roc-20', fromEventId: 'p6-18', toEventId: 'p6-22', type: 'caused' }, // Persia -> Marathon (Conflict)
    { id: 'roc-21', fromEventId: 'p6-21', toEventId: 'p6-22', type: 'related' }, // Democracy -> Defense of Greece
    { id: 'roc-22', fromEventId: 'p6-22', toEventId: 'p6-28', type: 'preceded' }, // Greek Victory -> Alexander
    { id: 'roc-23', fromEventId: 'p6-28', toEventId: 'p6-29', type: 'related' }, // Alexander -> Qin (Empire concept spread?)
    { id: 'roc-24', fromEventId: 'p6-20', toEventId: 'p6-30', type: 'caused' }, // Republic -> Empire (Augustus)
    { id: 'roc-25', fromEventId: 'p6-29', toEventId: 'p7-6', type: 'preceded' }, // Qin/Han -> Han Fall
    { id: 'roc-26', fromEventId: 'p6-30', toEventId: 'p7-4', type: 'related' }, // Rome -> Silk Road
    { id: 'roc-27', fromEventId: 'p7-4', toEventId: 'p7-10', type: 'related' }, // Trade/Contact -> Rome Fall (Disease/Migration)
    { id: 'roc-28', fromEventId: 'p7-10', toEventId: 'p7-12', type: 'preceded' } // Rome Fall -> Islam (Power Vacuum/Shift)
];

export const JOURNEYS: Journey[] = [
    {
        id: 'rise-of-civilizations',
        title: 'The Human Story: Rise of Civilizations',
        description: 'From the first mud bricks of Jericho to the marble columns of Rome, witness the birth of society, law, and empire.',
        eventIds: [
            'p4-3', 'p4-9', 'p4-14', 'p4-25', 'p4-29', 'p4-30',
            'p5-1', 'p5-2', 'p5-8', 'p5-9', 'p5-11', 'p5-15',
            'p5-16', 'p5-17', 'p5-21', 'p5-24', 'p5-31',
            'p6-1', 'p6-4', 'p6-9', 'p6-11', 'p6-18', 'p6-20',
            'p6-21', 'p6-22', 'p6-28', 'p6-29', 'p6-30',
            'p7-4', 'p7-6', 'p7-10', 'p7-12'
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('roc-')),
        overrides: {}
    },
    {
        id: 'cosmic-origins',
        title: 'Cosmic Origins: The Beginning of Everything',
        description: 'Trace the history of the universe from the Big Bang to the formation of our home planet.',
        eventIds: [
            'cosmic-1', 'cosmic-2', '1', '2', 'cosmic-3',
            '3', 'cosmic-5', '4', 'cosmic-7', 'cosmic-8',
            'cosmic-9', '5', '6', 'cosmic-12', '7',
            'cosmic-14', '8', 'cosmic-15', 'cosmic-16', 'cosmic-17',
            '9', 'cosmic-19', 'cosmic-20', '10', '11',
            '12', 'cosmic-24', 'cosmic-25', '15', 'cosmic-27',
            '18'
        ],
        connections: CONNECTIONS.filter(c => !c.id.startsWith('eol-') && !c.id.startsWith('roc-')),
        overrides: {
            '1': { // The Big Bang
                title: 'The Primordial Eruption',
                description: 'Before there was stars, before there was space, there was a single moment of perfect potential that erupted into everything we know.'
            }
        }
    },
    {
        id: 'evolution-of-life',
        title: 'The Vital Spark: Evolution of Life',
        description: 'Witness the miraculous climb from single cells to complex consciousness, surviving five mass extinctions along the way.',
        eventIds: [
            '18', '19', '20', '23', '24', '26', '27', '31',
            'p2-1', 'p2-2', 'p2-3', 'p2-5', 'p2-6', 'p2-7',
            'p2-9', 'p2-10', 'p2-11', 'p2-12', 'p2-13', 'p2-14',
            'p2-15', 'p2-16', 'p2-17', 'p2-19', 'p2-21',
            'p2-22', 'p2-23', 'p2-24', 'p2-25', 'p2-27',
            'p2-28', 'p2-29', '41', '42'
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('eol-')),
        overrides: {}
    }
];
