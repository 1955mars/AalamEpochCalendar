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
    { id: 'roc-28', fromEventId: 'p7-10', toEventId: 'p7-12', type: 'preceded' }, // Rome Fall -> Islam (Power Vacuum/Shift)

    // Evolution of Technology Connections
    { id: 'eot-1', fromEventId: 'modern-13', toEventId: 'p4-30', type: 'related' }, // Wheel -> Bronze (Metallurgy transport)
    { id: 'eot-2', fromEventId: 'p4-30', toEventId: 'modern-12', type: 'related' }, // Bronze -> Writing (Complex society tools)
    { id: 'eot-3', fromEventId: 'modern-12', toEventId: 'p6-1', type: 'preceded' }, // Writing -> Iron Age (Knowledge preservation)
    { id: 'eot-4', fromEventId: 'p6-1', toEventId: 'modern-9', type: 'preceded' }, // Iron -> Printing Press (Long gap, tool refinement)
    { id: 'eot-5', fromEventId: 'modern-9', toEventId: 'p8-20', type: 'caused' }, // Print -> Copernican (Scientific Revolution)
    { id: 'eot-6', fromEventId: 'p8-14', toEventId: 'p8-26', type: 'related' }, // Navigation -> Telescope (Optics & Exploration)
    { id: 'eot-7', fromEventId: 'p8-20', toEventId: 'p8-30', type: 'caused' }, // Copernicus -> Newton (Physics foundation)
    { id: 'eot-8', fromEventId: 'p8-30', toEventId: 'modern-7', type: 'caused' }, // Principia -> Industrial Rev (Mechanics applied)
    { id: 'eot-9', fromEventId: 'modern-7', toEventId: 'p9-1', type: 'caused' }, // Ind Rev -> Steam Engine (Power source)
    { id: 'eot-10', fromEventId: 'p9-1', toEventId: 'p9-16', type: 'caused' }, // Steam -> Railway (Transport revolution)
    { id: 'eot-11', fromEventId: 'p9-18', toEventId: 'pilot-1', type: 'caused' }, // Telegraph -> Telephone (Voice comms)
    { id: 'eot-12', fromEventId: 'p9-23', toEventId: 'p10-11', type: 'related' }, // Darwin -> Penicillin (Biology to Medicine)
    { id: 'eot-13', fromEventId: 'modern-6', toEventId: 'pilot-2', type: 'related' }, // Light Bulb -> Radio (Electricity applications)
    { id: 'eot-14', fromEventId: 'modern-7', toEventId: 'modern-5', type: 'related' }, // Ind Rev -> Flight (Internal Combustion)
    { id: 'eot-15', fromEventId: 'pilot-2', toEventId: 'p10-10', type: 'caused' }, // Radio -> TV (Broadcast evolution)
    { id: 'eot-16', fromEventId: 'modern-4', toEventId: 'p11-14', type: 'related' }, // Atomic -> Sputnik (Rocketry & War tech)
    { id: 'eot-17', fromEventId: 'p11-14', toEventId: 'modern-3', type: 'caused' }, // Sputnik -> Moon Landing (Space Race)
    { id: 'eot-18', fromEventId: 'pilot-3', toEventId: 'p12-3', type: 'caused' }, // ARPANET -> WWW (Internet evolution)
    { id: 'eot-19', fromEventId: 'modern-5', toEventId: 'modern-3', type: 'related' }, // Flight -> Moon Landing (Aerospace)
    { id: 'eot-20', fromEventId: 'p12-3', toEventId: 'p12-7', type: 'caused' }, // WWW -> Google (Info organization)
    { id: 'eot-21', fromEventId: 'p12-3', toEventId: 'p12-13', type: 'caused' }, // WWW -> iPhone (Mobile Web)
    { id: 'eot-22', fromEventId: 'p12-11', toEventId: 'p12-22', type: 'caused' }, // Genome -> CRISPR (Reading to Editing DNA)
    { id: 'eot-23', fromEventId: 'p12-7', toEventId: 'p12-29', type: 'related' }, // Google -> ChatGPT (Data & AI Model)
    { id: 'eot-24', fromEventId: 'p12-13', toEventId: 'modern-1', type: 'related' }, // iPhone -> AI Era (Compute density)
    { id: 'eot-25', fromEventId: 'modern-12', toEventId: 'p12-29', type: 'related' }, // Writing -> ChatGPT (Language evolution)

    // History of Art Connections
    { id: 'hoa-1', fromEventId: 'art-1', toEventId: 'p4-29', type: 'related' }, // Cave Art -> Writing
    { id: 'hoa-venus', fromEventId: 'art-venus', toEventId: 'art-gobekli', type: 'preceded' }, // Sculpture -> Temple
    { id: 'hoa-gobekli', fromEventId: 'art-gobekli', toEventId: 'p4-3', type: 'caused' }, // Temple -> Agriculture?
    { id: 'hoa-ur', fromEventId: 'art-ur', toEventId: 'p4-29', type: 'related' }, // Narrative -> Writing
    { id: 'hoa-nefertiti', fromEventId: 'art-nefertiti', toEventId: 'p6-11', type: 'preceded' }, // Egypt -> Greece
    { id: 'hoa-terra', fromEventId: 'art-terracotta', toEventId: 'p6-30', type: 'related' }, // China -> Rome (Empire Art)
    { id: 'hoa-kells', fromEventId: 'art-kells', toEventId: 'art-2', type: 'preceded' }, // Manuscript -> Gothic
    { id: 'hoa-ife', fromEventId: 'art-ife', toEventId: 'art-3', type: 'related' }, // Ife -> Renaissance (Parallel realism)
    { id: 'hoa-fankuan', fromEventId: 'art-fankuan', toEventId: 'art-3', type: 'related' }, // Landscape vs Perspective
    { id: 'hoa-2', fromEventId: 'p6-11', toEventId: 'art-2', type: 'preceded' }, // Greek -> Gothic
    { id: 'hoa-3', fromEventId: 'art-2', toEventId: 'art-3', type: 'preceded' }, // Gothic -> Renaissance
    { id: 'hoa-4', fromEventId: 'art-3', toEventId: 'modern-9', type: 'related' }, // Perspective -> Print
    { id: 'hoa-arnolfini', fromEventId: 'art-arnolfini', toEventId: 'art-4', type: 'preceded' }, // Realism -> Photo
    { id: 'hoa-5', fromEventId: 'modern-9', toEventId: 'art-4', type: 'preceded' }, // Print -> Photo
    { id: 'hoa-greatwave', fromEventId: 'art-greatwave', toEventId: 'art-5', type: 'caused' }, // Hokusai -> Impressionism
    { id: 'hoa-6', fromEventId: 'art-4', toEventId: 'art-5', type: 'caused' }, // Photo -> Impressionism
    { id: 'hoa-7', fromEventId: 'art-5', toEventId: 'art-starry', type: 'caused' }, // Impressionism -> Expressionism
    { id: 'hoa-starry', fromEventId: 'art-starry', toEventId: 'art-6', type: 'preceded' }, // Expressionism -> Cubism
    { id: 'hoa-8', fromEventId: 'art-6', toEventId: 'art-7', type: 'preceded' }, // Cubism -> Conceptual
    { id: 'hoa-bauhaus', fromEventId: 'art-bauhaus', toEventId: 'p11-14', type: 'related' }, // Modernism -> Space Age
    { id: 'hoa-9', fromEventId: 'art-7', toEventId: 'art-pollock', type: 'related' },
    { id: 'hoa-pollock', fromEventId: 'art-pollock', toEventId: 'art-warhol', type: 'preceded' },
    { id: 'hoa-warhol', fromEventId: 'art-warhol', toEventId: 'art-basquiat', type: 'preceded' },
    { id: 'hoa-paik', fromEventId: 'art-paik', toEventId: 'art-pixar', type: 'preceded' }, // Video -> CGI
    { id: 'hoa-pixar', fromEventId: 'art-pixar', toEventId: 'art-nft', type: 'caused' }, // Digital Art -> Digital Value
    { id: 'hoa-nft', fromEventId: 'art-nft', toEventId: 'art-8', type: 'related' }, // NFT -> AI

    // --- Ancestry of AI Connections ---
    { id: 'ai-1', fromEventId: 'ai-aristotle', toEventId: 'ai-alkhwarizmi', type: 'influenced' }, // Logic -> Algebra
    { id: 'ai-2', fromEventId: 'ai-alkhwarizmi', toEventId: 'ai-llull', type: 'influenced' }, // Algebra -> Thinking Machine
    { id: 'ai-3', fromEventId: 'ai-llull', toEventId: 'ai-jacquard', type: 'influenced' }, // Thinking Machine -> Programmable Loom
    { id: 'ai-4', fromEventId: 'ai-jacquard', toEventId: 'ai-lovelace', type: 'caused' }, // Loom -> First Code
    { id: 'ai-5', fromEventId: 'ai-lovelace', toEventId: 'ai-boole', type: 'related' }, // Code -> Binary
    { id: 'ai-6', fromEventId: 'ai-boole', toEventId: 'ai-principia', type: 'caused' }, // Binary -> Formal Math
    { id: 'ai-7', fromEventId: 'ai-principia', toEventId: 'modern-13', type: 'caused' }, // Formal Math -> Turing (modern-13 is Turing)
    { id: 'ai-8', fromEventId: 'modern-13', toEventId: 'ai-mcculloch', type: 'influenced' }, // Turing -> Neural Net
    { id: 'ai-9', fromEventId: 'ai-mcculloch', toEventId: 'ai-dartmouth', type: 'caused' }, // Neural Net -> AI Field
    { id: 'ai-10', fromEventId: 'ai-dartmouth', toEventId: 'ai-perceptron', type: 'caused' }, // AI Field -> Perceptron
    { id: 'ai-11', fromEventId: 'ai-perceptron', toEventId: 'ai-winter', type: 'caused' }, // Hype -> Winter
    { id: 'ai-12', fromEventId: 'ai-winter', toEventId: 'ai-deepblue', type: 'preceded' }, // Winter -> Renewal
    { id: 'ai-13', fromEventId: 'ai-deepblue', toEventId: 'ai-alexnet', type: 'preceded' }, // Brute Force -> Deep Learning
    { id: 'ai-14', fromEventId: 'ai-alexnet', toEventId: 'ai-alphago', type: 'caused' }, // DL -> RL
    { id: 'ai-15', fromEventId: 'ai-alphago', toEventId: 'ai-transformer', type: 'influenced' } // RL -> Attention
];

export const JOURNEYS: Journey[] = [
    {
        id: 'evolution-of-technology',
        title: 'Wires & Waves: Evolution of Technology',
        description: 'From the spark of the first fire to the neural networks of AI, trace the innovations that defined us.',
        thumbnailUrl: 'images/p12-29.jpg',
        eventIds: [
            'modern-13', 'p4-30', 'modern-12', 'p6-1', 'modern-9',
            'p8-14', 'p8-20', 'p8-26', 'p8-30', 'modern-7',
            'p9-1', 'p9-6', 'p9-7', 'p9-16', 'p9-18',
            'p9-23', 'modern-6', 'pilot-1', 'pilot-2', 'modern-5',
            'p10-10', 'p10-11', 'modern-4', 'p11-14', 'pilot-3',
            'modern-3', 'p12-3', 'p12-7', 'p12-8', 'p12-11',
            'p12-13', 'p12-15', 'p12-22', 'p12-29', 'modern-1'
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('eot-')),
        overrides: {}
    },
    {
        id: 'rise-of-civilizations',
        title: 'The Human Story: Rise of Civilizations',
        description: 'From the first mud bricks of Jericho to the marble columns of Rome, witness the birth of society, law, and empire.',
        thumbnailUrl: 'images/p6-25.jpg',
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
        thumbnailUrl: 'images/cosmic-14.jpg',
        eventIds: [
            'cosmic-1', 'cosmic-2', '1', '2', 'cosmic-3',
            '3', 'cosmic-5', '4', 'cosmic-7', 'cosmic-8',
            'cosmic-9', '5', '6', 'cosmic-12', '7',
            'cosmic-14', '8', 'cosmic-15', 'cosmic-16', 'cosmic-17',
            '9', 'cosmic-19', 'cosmic-20', '10', '11',
            '12', 'cosmic-24', 'cosmic-25', '15', 'cosmic-27',
            '18'
        ],
        connections: CONNECTIONS.filter(c => !c.id.startsWith('eol-') && !c.id.startsWith('roc-') && !c.id.startsWith('eot-')),
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
        thumbnailUrl: 'images/p2-23.jpg',
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
    },
    {
        id: 'history-of-art',
        title: 'The Canvas of Time: History of Art',
        description: 'Trace the evolution of human expression from the cave wall to the digital dream.',
        thumbnailUrl: 'images/art-5.jpg',
        eventIds: [
            'art-1', 'art-venus', 'art-gobekli', 'p4-29', 'art-ur',
            'art-nefertiti', 'p5-9', 'p6-11', 'art-terracotta',
            'art-kells', 'art-fankuan', 'art-2', 'art-ife', 'art-3',
            'art-arnolfini', 'modern-9', 'art-greatwave', 'art-4',
            'art-5', 'art-starry', 'art-6', 'art-7', 'art-bauhaus',
            'art-pollock', 'art-warhol', 'art-paik', 'art-basquiat',
            'art-pixar', 'art-nft', 'art-8'
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('hoa-')),
        overrides: {}
    },
    {
        id: 'ancestry-of-ai',
        title: 'The Ancestry of AI: From Logic to Lightning',
        description: 'Trace the genealogy of Artificial Intelligence not from 1950, but from the ancient roots of logic and weaving.',
        thumbnailUrl: 'images/modern-1.jpg',
        eventIds: [
            'ai-aristotle', 'ai-alkhwarizmi', 'ai-llull', 'ai-jacquard',
            'ai-lovelace', 'ai-boole', 'ai-principia', 'modern-13', // Using existing Turing event
            'ai-mcculloch', 'ai-dartmouth', 'ai-perceptron', 'ai-winter',
            'ai-deepblue', 'ai-alexnet', 'ai-alphago', 'ai-transformer'
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('ai-')),
        overrides: {
            'modern-13': {
                title: 'Turing\'s Universal Machine',
                description: 'Alan Turing proves that a machine can compute anything that is computable, providing the theoretical blueprint for the digital brain.',
            }
        }
    }
];
