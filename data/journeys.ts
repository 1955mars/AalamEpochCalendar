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
];

export const JOURNEYS: Journey[] = [
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
        connections: CONNECTIONS,
        overrides: {
            '1': { // The Big Bang
                title: 'The Primordial Eruption',
                description: 'Before there was stars, before there was space, there was a single moment of perfect potential that erupted into everything we know.'
            }
        }
    },
];
