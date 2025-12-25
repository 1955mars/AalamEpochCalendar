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

    // Human Evolution Extension
    { id: 'eol-34', fromEventId: '42', toEventId: '45', type: 'preceded' }, // Primates -> Cooling
    { id: 'eol-35', fromEventId: '45', toEventId: '46', type: 'caused' }, // Cooling -> Ape Divergence
    { id: 'eol-36', fromEventId: '46', toEventId: '47', type: 'preceded' }, // Apes -> Hominins
    { id: 'eol-37', fromEventId: '47', toEventId: '48', type: 'caused' }, // Hominins -> Bipedalism
    { id: 'eol-38', fromEventId: '48', toEventId: '49', type: 'preceded' }, // Bipedalism -> Ardi
    { id: 'eol-39', fromEventId: '49', toEventId: '50', type: 'preceded' }, // Ardi -> Australopithecus
    { id: 'eol-40', fromEventId: '50', toEventId: '51', type: 'related' }, // Australo -> Footprints
    { id: 'eol-41', fromEventId: '51', toEventId: '52', type: 'related' }, // Footprints -> Lucy
    { id: 'eol-42', fromEventId: '52', toEventId: '53', type: 'preceded' }, // Lucy -> Tools
    { id: 'eol-43', fromEventId: '53', toEventId: '54', type: 'caused' }, // Tools -> Homo
    { id: 'eol-44', fromEventId: '54', toEventId: '55', type: 'preceded' }, // Homo -> Aridification
    { id: 'eol-45', fromEventId: '55', toEventId: '56', type: 'caused' }, // Climate -> H. erectus
    { id: 'eol-46', fromEventId: '56', toEventId: '57', type: 'caused' }, // H. erectus -> Out of Africa
    { id: 'eol-47', fromEventId: '57', toEventId: '58', type: 'related' }, // Migration -> Hand Axes
    { id: 'eol-48', fromEventId: '58', toEventId: '59', type: 'preceded' }, // Axes -> Fire
    { id: 'eol-49', fromEventId: '59', toEventId: '60', type: 'caused' }, // Fire -> Europe
    { id: 'eol-50', fromEventId: '60', toEventId: '61', type: 'preceded' }, // Europe -> Neanderthals
    { id: 'eol-51', fromEventId: '61', toEventId: '62', type: 'related' }, // Neanderthals -> Spears
    { id: 'eol-52', fromEventId: '62', toEventId: '63', type: 'preceded' }, // Spears -> H. sapiens
    { id: 'eol-53', fromEventId: '63', toEventId: '64', type: 'related' }, // H. sapiens -> Mito Eve
    { id: 'eol-54', fromEventId: '64', toEventId: '65', type: 'preceded' }, // Eve -> Ice Age
    { id: 'eol-55', fromEventId: '65', toEventId: '66', type: 'caused' }, // Ice Age -> Cognitive Rev
    { id: 'eol-56', fromEventId: '66', toEventId: '67', type: 'caused' }, // Cognitive -> Out of Africa 2
    { id: 'eol-57', fromEventId: '67', toEventId: 'p4-3', type: 'caused' }, // Migration -> Agriculture

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
    { id: 'roc-28', fromEventId: 'p7-10', toEventId: 'p7-12', type: 'preceded' }, // Rome Fall -> Muhammad
    // Phase 7 continued: Medieval Period (622-1347 CE)
    { id: 'roc-28a', fromEventId: 'p7-12', toEventId: 'p7-14', type: 'caused' }, // Muhammad -> Hijra
    { id: 'roc-28b', fromEventId: 'p7-14', toEventId: 'p7-15', type: 'caused' }, // Hijra -> Umayyad
    { id: 'roc-28c', fromEventId: 'p7-15', toEventId: 'p7-17', type: 'caused' }, // Umayyad -> Abbasid (Golden Age)
    { id: 'roc-28d', fromEventId: 'p7-17', toEventId: 'p7-19', type: 'related' }, // Abbasid -> Charlemagne
    { id: 'roc-28e', fromEventId: 'p7-19', toEventId: 'p7-24', type: 'preceded' }, // Charlemagne -> Crusades
    { id: 'roc-28f', fromEventId: 'p7-24', toEventId: 'p7-26', type: 'preceded' }, // Crusades -> Mongols
    { id: 'roc-28g', fromEventId: 'p7-26', toEventId: 'p7-27', type: 'related' }, // Mongols -> Magna Carta
    { id: 'roc-28h', fromEventId: 'p7-27', toEventId: 'p7-31', type: 'preceded' }, // Magna Carta -> Black Death
    // Phase 8: Age of Exploration & Renaissance
    { id: 'roc-29', fromEventId: 'p7-31', toEventId: 'p8-4', type: 'caused' }, // Black Death -> Printing Press
    { id: 'roc-30', fromEventId: 'p8-4', toEventId: 'p8-5', type: 'related' }, // Press -> Constantinople Falls
    { id: 'roc-31', fromEventId: 'p8-5', toEventId: 'p8-8', type: 'caused' }, // Byzantine scholars flee -> Columbus
    { id: 'roc-32', fromEventId: 'p8-8', toEventId: 'p8-13', type: 'related' }, // Columbus -> Reformation
    { id: 'roc-33', fromEventId: 'p8-13', toEventId: 'p8-14', type: 'related' }, // Reformation -> Magellan
    { id: 'roc-34', fromEventId: 'p8-14', toEventId: 'p8-16', type: 'related' }, // Magellan -> Mughals
    { id: 'roc-35', fromEventId: 'p8-16', toEventId: 'p8-20', type: 'preceded' }, // Mughals -> Copernicus
    { id: 'roc-36', fromEventId: 'p8-20', toEventId: 'p8-24', type: 'preceded' }, // Copernicus -> East India Co
    { id: 'roc-37', fromEventId: 'p8-24', toEventId: 'p8-25', type: 'related' }, // EIC -> Tokugawa
    { id: 'roc-38', fromEventId: 'p8-25', toEventId: 'p8-29', type: 'preceded' }, // Japan -> Westphalia
    { id: 'roc-39', fromEventId: 'p8-29', toEventId: 'p8-30', type: 'caused' }, // Westphalia -> Newton
    { id: 'roc-40', fromEventId: 'p8-30', toEventId: 'p8-31', type: 'caused' }, // Newton -> Enlightenment
    // Phase 9: Age of Revolutions
    { id: 'roc-41', fromEventId: 'p8-31', toEventId: 'p9-1', type: 'caused' }, // Enlightenment -> Steam
    { id: 'roc-42', fromEventId: 'p9-1', toEventId: 'p9-2', type: 'related' }, // Industrial -> Independence
    { id: 'roc-43', fromEventId: 'p9-2', toEventId: 'p9-4', type: 'caused' }, // US Rev -> French Rev
    { id: 'roc-44', fromEventId: 'p9-4', toEventId: 'p9-18', type: 'preceded' }, // French Rev -> Telegraph
    { id: 'roc-45', fromEventId: 'p9-18', toEventId: 'p9-21', type: 'related' }, // Comms -> Manifesto
    { id: 'roc-46', fromEventId: 'p9-21', toEventId: 'p9-23', type: 'related' }, // Marx -> Darwin
    { id: 'roc-47', fromEventId: 'p9-23', toEventId: 'p9-26', type: 'preceded' }, // Darwin -> Meiji
    { id: 'roc-48', fromEventId: 'p9-26', toEventId: 'p9-27', type: 'related' }, // Japan -> Suez
    { id: 'roc-49', fromEventId: 'p9-27', toEventId: 'p9-28', type: 'related' }, // Suez -> Germany
    { id: 'roc-50', fromEventId: 'p9-28', toEventId: 'p9-29', type: 'caused' }, // Germany -> Berlin Conf
    { id: 'roc-51', fromEventId: 'p9-29', toEventId: 'p9-30', type: 'caused' }, // Imperialism -> WWI trigger
    // Phase 10: World Wars
    { id: 'roc-52', fromEventId: 'p9-30', toEventId: 'p10-1', type: 'caused' }, // Assassination -> WWI
    { id: 'roc-53', fromEventId: 'p10-1', toEventId: 'p10-5', type: 'caused' }, // WWI -> Russian Rev
    { id: 'roc-54', fromEventId: 'p10-5', toEventId: 'p10-7', type: 'preceded' }, // Revolution -> Versailles
    { id: 'roc-55', fromEventId: 'p10-7', toEventId: 'p10-12', type: 'caused' }, // Versailles -> Depression
    { id: 'roc-56', fromEventId: 'p10-12', toEventId: 'p10-14', type: 'caused' }, // Depression -> Hitler
    { id: 'roc-57', fromEventId: 'p10-14', toEventId: 'p10-20', type: 'caused' }, // Hitler -> WWII
    { id: 'roc-58', fromEventId: 'p10-20', toEventId: 'p10-23', type: 'caused' }, // WWII -> Pearl Harbor
    { id: 'roc-59', fromEventId: 'p10-23', toEventId: 'p10-27', type: 'preceded' }, // Pearl Harbor -> D-Day
    { id: 'roc-60', fromEventId: 'p10-27', toEventId: 'p10-31', type: 'preceded' }, // D-Day -> Atomic
    // Phase 11: Cold War
    { id: 'roc-61', fromEventId: 'p10-31', toEventId: 'p11-1', type: 'caused' }, // Atomic -> UN
    { id: 'roc-62', fromEventId: 'p11-1', toEventId: 'p11-4', type: 'preceded' }, // UN -> India Partition
    { id: 'roc-63', fromEventId: 'p11-4', toEventId: 'p11-8', type: 'related' }, // Decolonization -> China Rev
    { id: 'roc-64', fromEventId: 'p11-8', toEventId: 'p11-14', type: 'preceded' }, // China -> Sputnik
    { id: 'roc-65', fromEventId: 'p11-14', toEventId: 'p11-16', type: 'related' }, // Space -> Africa
    { id: 'roc-66', fromEventId: 'p11-16', toEventId: 'p11-17', type: 'related' }, // Decolonization -> Berlin Wall
    { id: 'roc-67', fromEventId: 'p11-17', toEventId: 'p11-18', type: 'caused' }, // Wall -> Cuba Crisis
    { id: 'roc-68', fromEventId: 'p11-18', toEventId: 'p11-24', type: 'preceded' }, // Tension -> Moon
    { id: 'roc-69', fromEventId: 'p11-24', toEventId: 'p11-29', type: 'preceded' }, // Moon -> Wall Falls
    { id: 'roc-70', fromEventId: 'p11-29', toEventId: 'p11-30', type: 'caused' }, // Wall Falls -> USSR Ends
    // Phase 12: Digital Age
    { id: 'roc-71', fromEventId: 'p11-30', toEventId: 'p12-3', type: 'preceded' }, // USSR -> WWW
    { id: 'roc-72', fromEventId: 'p12-3', toEventId: 'p12-4', type: 'related' }, // WWW -> Apartheid
    { id: 'roc-73', fromEventId: 'p12-4', toEventId: 'p12-7', type: 'preceded' }, // Mandela -> Google
    { id: 'roc-74', fromEventId: 'p12-7', toEventId: 'p12-9', type: 'preceded' }, // Google -> 9/11
    { id: 'roc-75', fromEventId: 'p12-9', toEventId: 'p12-11', type: 'preceded' }, // 9/11 -> Genome
    { id: 'roc-76', fromEventId: 'p12-11', toEventId: 'p12-13', type: 'preceded' }, // Genome -> iPhone
    { id: 'roc-77', fromEventId: 'p12-13', toEventId: 'p12-21', type: 'preceded' }, // iPhone -> Paris
    { id: 'roc-78', fromEventId: 'p12-21', toEventId: 'p12-26', type: 'preceded' }, // Paris -> COVID
    { id: 'roc-79', fromEventId: 'p12-26', toEventId: 'p12-29', type: 'preceded' }, // COVID -> ChatGPT
    { id: 'roc-80', fromEventId: 'p12-29', toEventId: 'p12-31', type: 'preceded' }, // ChatGPT -> Present

    // Evolution of Technology Connections
    { id: 'eot-1', fromEventId: 'modern-13', toEventId: 'p4-30', type: 'related' }, // Wheel -> Bronze (Metallurgy transport)
    { id: 'eot-2', fromEventId: 'p4-30', toEventId: 'modern-12', type: 'related' }, // Bronze -> Writing (Complex society tools)
    { id: 'eot-3', fromEventId: 'modern-12', toEventId: 'p6-1', type: 'preceded' }, // Writing -> Iron Age (Knowledge preservation)
    { id: 'eot-4', fromEventId: 'p6-1', toEventId: 'modern-archimedes', type: 'related' }, // Iron -> Archimedes (Engineering peaks)
    { id: 'eot-new-1', fromEventId: 'modern-archimedes', toEventId: 'modern-paper', type: 'preceded' }, // Archimedes -> Paper
    { id: 'eot-new-2', fromEventId: 'modern-paper', toEventId: 'modern-compass', type: 'related' }, // Paper -> Compass (Four Great Inventions)
    { id: 'eot-new-3', fromEventId: 'modern-compass', toEventId: 'modern-9', type: 'caused' }, // Compass -> Print (Spread of ideas/navigation)
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

    // Fix Orphans
    { id: 'eot-26', fromEventId: 'modern-12', toEventId: 'p6-4', type: 'caused' }, // Writing -> Alphabet
    { id: 'eot-27', fromEventId: 'modern-7', toEventId: 'p9-6', type: 'caused' }, // Ind Rev -> Cotton Gin (Mechanization)
    { id: 'eot-28', fromEventId: 'p8-30', toEventId: 'p9-7', type: 'related' }, // Scientific Focus -> Vaccine
    { id: 'eot-29', fromEventId: 'p9-7', toEventId: 'p10-11', type: 'preceded' }, // Vaccine -> Penicillin (Medical Tech)
    { id: 'eot-30', fromEventId: 'modern-3', toEventId: 'p12-8', type: 'caused' }, // Moon Landing -> ISS (Space Station)
    { id: 'eot-31', fromEventId: 'p12-3', toEventId: 'p12-15', type: 'related' }, // WWW -> Bitcoin (Digital Network)

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
    { id: 'ai-1', fromEventId: 'ai-aristotle', toEventId: 'ai-antikythera', type: 'influenced' }, // Logic -> Machines
    { id: 'ai-new-1', fromEventId: 'ai-antikythera', toEventId: 'ai-alkhwarizmi', type: 'preceded' }, // Mechanism -> Algorithm
    { id: 'ai-2', fromEventId: 'ai-alkhwarizmi', toEventId: 'ai-llull', type: 'influenced' }, // Algebra -> Thinking Machine
    { id: 'ai-3', fromEventId: 'ai-llull', toEventId: 'ai-jacquard', type: 'influenced' }, // Thinking Machine -> Programmable Loom
    { id: 'ai-4', fromEventId: 'ai-jacquard', toEventId: 'ai-lovelace', type: 'caused' }, // Loom -> First Code
    { id: 'ai-5', fromEventId: 'ai-lovelace', toEventId: 'ai-boole', type: 'related' }, // Code -> Binary
    { id: 'ai-6', fromEventId: 'ai-boole', toEventId: 'ai-principia', type: 'caused' }, // Binary -> Formal Math
    { id: 'ai-7', fromEventId: 'ai-principia', toEventId: 'ai-turing-machine', type: 'caused' }, // Formal Math -> Turing (modern-13 is Turing)
    { id: 'ai-8', fromEventId: 'ai-turing-machine', toEventId: 'ai-mcculloch', type: 'influenced' }, // Turing -> Neural Net
    { id: 'ai-9', fromEventId: 'ai-mcculloch', toEventId: 'ai-dartmouth', type: 'caused' }, // Neural Net -> AI Field
    { id: 'ai-10', fromEventId: 'ai-dartmouth', toEventId: 'ai-perceptron', type: 'caused' }, // AI Field -> Perceptron
    { id: 'ai-11', fromEventId: 'ai-perceptron', toEventId: 'ai-winter', type: 'caused' }, // Hype -> Winter
    { id: 'ai-12', fromEventId: 'ai-winter', toEventId: 'ai-deepblue', type: 'preceded' }, // Winter -> Renewal
    { id: 'ai-13', fromEventId: 'ai-deepblue', toEventId: 'ai-alexnet', type: 'preceded' }, // Brute Force -> Deep Learning
    { id: 'ai-14', fromEventId: 'ai-alexnet', toEventId: 'ai-alphago', type: 'caused' }, // DL -> RL
    { id: 'ai-15', fromEventId: 'ai-alphago', toEventId: 'ai-transformer', type: 'influenced' }, // RL -> Attention
    // Orphan Fixes (Ancestry of AI)
    { id: 'ai-22', fromEventId: 'ai-leibniz-binary-system', toEventId: 'ai-boole', type: 'influenced' }, // Binary -> Boolean Logic
    { id: 'ai-23', fromEventId: 'ai-the-difference-engine', toEventId: 'ai-lovelace', type: 'caused' }, // Engine -> First Program
    { id: 'ai-24', fromEventId: 'ai-cybernetics', toEventId: 'ai-dartmouth', type: 'influenced' }, // Cybernetics -> AI Field
    { id: 'ai-25', fromEventId: 'ai-asimovs-three-laws', toEventId: 'ai-dartmouth', type: 'influenced' }, // Sci-Fi/Ethics -> AI Goal
    { id: 'ai-26', fromEventId: 'ai-the-logic-theorist', toEventId: 'ai-dartmouth', type: 'related' }, // Early Program -> Conference
    { id: 'ai-27', fromEventId: 'ai-eliza', toEventId: 'ai-perceptrons-book', type: 'preceded' }, // NLP -> Analysis
    { id: 'ai-28', fromEventId: 'ai-perceptrons-book', toEventId: 'ai-winter', type: 'caused' }, // Critique -> Funding Cut
    { id: 'ai-29', fromEventId: 'ai-expert-systems', toEventId: 'ai-deepblue', type: 'preceded' }, // Limited AI -> Deep Blue
    { id: 'ai-30', fromEventId: 'ai-backpropagation', toEventId: 'ai-alexnet', type: 'caused' }, // Algorithm -> Implementation

    // New AI Connections
    { id: 'ai-16', fromEventId: 'ai-deepblue', toEventId: 'ai-watson-wins-jeopardy', type: 'preceded' }, // Chess -> Jeopardy (Games)
    { id: 'ai-17', fromEventId: 'ai-watson-wins-jeopardy', toEventId: 'ai-imagenet-breakthrough', type: 'related' }, // NLP -> Vision (Renaissance)
    { id: 'ai-18', fromEventId: 'ai-imagenet-breakthrough', toEventId: 'ai-alexnet', type: 'related' }, // Same event context
    { id: 'ai-19', fromEventId: 'ai-alphago', toEventId: 'ai-alphago-zero', type: 'caused' }, // Evolution
    { id: 'ai-20', fromEventId: 'ai-transformer', toEventId: 'ai-gpt-3', type: 'caused' }, // Architecture -> Model
    { id: 'ai-21', fromEventId: 'ai-gpt-3', toEventId: 'ai-generative-reality', type: 'caused' }, // Text -> Multimodal

    // --- The Money Illusion Connections ---
    { id: 'money-1', fromEventId: 'p4-3', toEventId: 'p4-29', type: 'caused' }, // Agriculture -> Accounting (Writing)
    { id: 'money-new-1', fromEventId: 'p4-29', toEventId: 'money-shekel', type: 'caused' }, // Writing -> Grain Money (Standardzation)
    { id: 'money-2', fromEventId: 'money-shekel', toEventId: 'money-lydia', type: 'preceded' }, // Commodity -> Coin
    { id: 'money-3', fromEventId: 'money-lydia', toEventId: 'money-paper', type: 'preceded' }, // Coin -> Paper
    { id: 'money-4', fromEventId: 'money-paper', toEventId: 'money-medici', type: 'related' }, // Paper -> Ledger (Abstraction)
    { id: 'money-5', fromEventId: 'money-medici', toEventId: 'money-gold', type: 'preceded' }, // Ledger -> Gold Standard
    { id: 'money-6', fromEventId: 'money-gold', toEventId: 'modern-7', type: 'influenced' }, // Gold/Capital -> Industrial Rev
    { id: 'money-7', fromEventId: 'modern-7', toEventId: 'money-card', type: 'preceded' }, // Industrial -> Consumer Credit
    { id: 'money-8', fromEventId: 'money-card', toEventId: 'money-nixon', type: 'caused' }, // Credit expansion -> Gold collapse? (Loosely)
    { id: 'money-9', fromEventId: 'money-nixon', toEventId: 'p12-14', type: 'caused' }, // Fiat -> Financial Crisis (Loose money)
    { id: 'money-10', fromEventId: 'p12-14', toEventId: 'money-algo', type: 'related' }, // Crisis -> Algo/Speed
    { id: 'money-11', fromEventId: 'p12-14', toEventId: 'p12-15', type: 'caused' }, // Crisis -> Bitcoin (Reaction)
    { id: 'money-12', fromEventId: 'money-algo', toEventId: 'p12-29', type: 'related' }, // Algo -> AI (Automation of value/thought)
    // New Money Connections
    { id: 'money-13', fromEventId: 'money-euro', toEventId: 'money-mpesa', type: 'related' }, // Currency evolution
    { id: 'money-14', fromEventId: 'p12-15', toEventId: 'money-eth', type: 'caused' }, // Bitcoin -> Ethereum

    // Orphan Fixes (The Money Illusion)
    { id: 'money-15', fromEventId: 'money-shekel', toEventId: 'money-cowrie', type: 'related' }, // Grain -> Shells (Alternative)
    { id: 'money-16', fromEventId: 'money-cowrie', toEventId: 'money-hammurabi', type: 'preceded' }, // Physical -> Legal Debt
    { id: 'money-17', fromEventId: 'money-hammurabi', toEventId: 'money-lydia', type: 'preceded' }, // Debt -> Coin
    { id: 'money-18', fromEventId: 'money-lydia', toEventId: 'money-sparta', type: 'related' }, // Gold -> Iron (Contrast)
    { id: 'money-19', fromEventId: 'money-sparta', toEventId: 'p6-20', type: 'preceded' }, // Police State -> Republic
    { id: 'money-20', fromEventId: 'p6-20', toEventId: 'money-debasement', type: 'caused' }, // Republic -> Empire -> Inflation
    { id: 'money-21', fromEventId: 'money-debasement', toEventId: 'money-paper', type: 'preceded' }, // Coin Fail -> Paper Rise
    { id: 'money-22', fromEventId: 'money-paper', toEventId: 'money-tally', type: 'related' }, // Paper -> Wood (Fiat variants)
    { id: 'money-23', fromEventId: 'money-tally', toEventId: 'money-templar', type: 'preceded' }, // Record Keeping -> Banking
    { id: 'money-24', fromEventId: 'money-templar', toEventId: 'money-medici', type: 'caused' }, // Pilgrimage Banking -> Merchant Banking
    { id: 'money-25', fromEventId: 'money-medici', toEventId: 'p8-14', type: 'related' }, // Banking -> Global Trade
    { id: 'money-26', fromEventId: 'p8-14', toEventId: 'money-potosi', type: 'caused' }, // Exploration -> Silver Flood
    { id: 'money-27', fromEventId: 'money-potosi', toEventId: 'money-tulip', type: 'caused' }, // Excess Capital -> Speculation
    { id: 'money-28', fromEventId: 'money-tulip', toEventId: 'money-boe', type: 'caused' }, // Crash -> Centralization/Debt
    { id: 'money-29', fromEventId: 'money-boe', toEventId: 'money-mississippi', type: 'related' }, // Debt -> Paper Bubble
    { id: 'money-30', fromEventId: 'money-mississippi', toEventId: 'money-gold', type: 'caused' }, // Failure -> Gold Standard (Back to basics)
    { id: 'money-31', fromEventId: 'money-gold', toEventId: 'money-fed', type: 'caused' }, // Gold rigidity -> Need for flex? (Or Fed protects gold?)
    { id: 'money-32', fromEventId: 'money-fed', toEventId: 'money-weimar', type: 'related' }, // Central Bank fail vs success
    { id: 'money-33', fromEventId: 'money-weimar', toEventId: 'money-bretton', type: 'caused' }, // Hyperinflation fear -> Stability Pact
    { id: 'money-34', fromEventId: 'money-bretton', toEventId: 'money-card', type: 'related' }, // Dollar hegemony -> Consumerism

    // --- To The Stars Connections ---
    { id: 'tts-1', fromEventId: 'space-stonehenge', toEventId: 'space-ptolemy', type: 'preceded' },
    { id: 'tts-2', fromEventId: 'space-ptolemy', toEventId: 'p8-20', type: 'preceded' }, // Ptolemy -> Copernicus
    { id: 'tts-3', fromEventId: 'p8-20', toEventId: 'space-kepler', type: 'caused' }, // Copernicus -> Kepler
    { id: 'tts-4', fromEventId: 'space-kepler', toEventId: 'p8-26', type: 'related' }, // Kepler -> Galileo
    { id: 'tts-5', fromEventId: 'p8-26', toEventId: 'p8-30', type: 'caused' }, // Galileo -> Newton
    { id: 'tts-6', fromEventId: 'p8-30', toEventId: 'space-herschel', type: 'caused' }, // Newton -> Herschel
    { id: 'tts-7', fromEventId: 'space-herschel', toEventId: 'space-einstein', type: 'preceded' },
    { id: 'tts-8', fromEventId: 'space-einstein', toEventId: 'space-goddard', type: 'influenced' }, // Relativity -> Rockets
    { id: 'tts-9', fromEventId: 'space-goddard', toEventId: 'space-v2', type: 'caused' },
    { id: 'tts-10', fromEventId: 'space-v2', toEventId: 'p11-14', type: 'caused' }, // V2 -> Sputnik
    { id: 'tts-11', fromEventId: 'p11-14', toEventId: 'space-laika', type: 'caused' }, // Sputnik -> Laika
    { id: 'tts-12', fromEventId: 'space-laika', toEventId: 'space-gagarin', type: 'caused' },
    { id: 'tts-13', fromEventId: 'space-gagarin', toEventId: 'space-kennedy', type: 'caused' },
    { id: 'tts-14', fromEventId: 'space-kennedy', toEventId: 'space-tereshkova', type: 'preceded' },
    { id: 'tts-15', fromEventId: 'space-tereshkova', toEventId: 'space-spacewalk', type: 'preceded' },
    { id: 'tts-16', fromEventId: 'space-spacewalk', toEventId: 'p11-24', type: 'preceded' }, // Spacewalk -> Apollo
    { id: 'tts-17', fromEventId: 'p11-24', toEventId: 'space-voyager', type: 'preceded' }, // Apollo -> Voyager
    { id: 'tts-18', fromEventId: 'space-voyager', toEventId: 'space-shuttle', type: 'preceded' },
    { id: 'tts-19', fromEventId: 'space-shuttle', toEventId: 'space-hubble', type: 'caused' },
    { id: 'tts-20', fromEventId: 'space-hubble', toEventId: 'space-mars-pathfinder', type: 'preceded' },
    { id: 'tts-21', fromEventId: 'space-hubble', toEventId: 'p12-8', type: 'preceded' }, // Hubble -> ISS
    { id: 'tts-22', fromEventId: 'space-mars-pathfinder', toEventId: 'space-spirit', type: 'caused' },
    { id: 'tts-23', fromEventId: 'space-spirit', toEventId: 'space-curiosity', type: 'caused' },
    { id: 'tts-24', fromEventId: 'space-curiosity', toEventId: 'space-perseverance', type: 'caused' },
    { id: 'tts-25', fromEventId: 'p12-8', toEventId: 'space-falcon-landing', type: 'preceded' }, // ISS -> SpaceX
    { id: 'tts-26', fromEventId: 'space-falcon-landing', toEventId: 'space-gravitational-waves', type: 'related' },
    { id: 'tts-27', fromEventId: 'space-gravitational-waves', toEventId: 'p12-25', type: 'related' }, // LIGO -> Black Hole Image
    { id: 'tts-28', fromEventId: 'p12-25', toEventId: 'space-jwst', type: 'preceded' },
    { id: 'tts-29', fromEventId: 'space-jwst', toEventId: 'space-artemis', type: 'related' },
    { id: 'tts-30', fromEventId: 'space-artemis', toEventId: 'space-starship', type: 'related' },
    { id: 'tts-31', fromEventId: 'space-perseverance', toEventId: 'space-starship', type: 'related' }, // Mars exploration -> Mars ship
    { id: 'tts-32', fromEventId: 'modern-5', toEventId: 'space-goddard', type: 'influenced' }, // Wright Bros -> Rockets

    // --- The Cure Connections ---
    { id: 'cure-1', fromEventId: 'cure-trepanning', toEventId: 'cure-imhotep', type: 'preceded' },
    { id: 'cure-2', fromEventId: 'cure-imhotep', toEventId: 'cure-ayurveda', type: 'related' },
    { id: 'cure-3', fromEventId: 'cure-ayurveda', toEventId: 'cure-hippocrates', type: 'influenced' },
    { id: 'cure-4', fromEventId: 'cure-hippocrates', toEventId: 'cure-galen', type: 'influenced' }, // Humors
    { id: 'cure-5', fromEventId: 'cure-galen', toEventId: 'cure-avicenna', type: 'influenced' }, // Canon built on Galen
    { id: 'cure-6', fromEventId: 'cure-avicenna', toEventId: 'p7-31', type: 'preceded' }, // Canon -> Plague (failure)
    { id: 'cure-7', fromEventId: 'p7-31', toEventId: 'cure-vesalius', type: 'caused' }, // Plague -> Need for anatomy? (Loose)
    { id: 'cure-8', fromEventId: 'cure-vesalius', toEventId: 'cure-harvey', type: 'caused' }, // Structure -> Function
    { id: 'cure-9', fromEventId: 'cure-harvey', toEventId: 'cure-leeuwenhoek', type: 'preceded' },
    { id: 'cure-10', fromEventId: 'cure-leeuwenhoek', toEventId: 'cure-lind', type: 'preceded' },
    { id: 'cure-11', fromEventId: 'cure-lind', toEventId: 'p9-7', type: 'influenced' }, // Trial -> Vaccine (Empiricism)
    { id: 'cure-12', fromEventId: 'p9-7', toEventId: 'cure-stethoscope', type: 'preceded' },
    { id: 'cure-13', fromEventId: 'cure-stethoscope', toEventId: 'cure-anesthesia', type: 'preceded' },
    { id: 'cure-14', fromEventId: 'cure-anesthesia', toEventId: 'cure-semmelweis', type: 'preceded' },
    { id: 'cure-15', fromEventId: 'cure-semmelweis', toEventId: 'cure-pasteur', type: 'influenced' }, // Hygiene -> Germs
    { id: 'cure-16', fromEventId: 'cure-pasteur', toEventId: 'cure-lister', type: 'caused' }, // Germ Theory -> Antiseptics
    { id: 'cure-17', fromEventId: 'cure-lister', toEventId: 'cure-koch', type: 'related' }, // Killing germs -> Finding germs
    { id: 'cure-18', fromEventId: 'cure-koch', toEventId: 'cure-xray', type: 'preceded' },
    { id: 'cure-19', fromEventId: 'cure-xray', toEventId: 'cure-flu', type: 'preceded' },
    { id: 'cure-20', fromEventId: 'cure-flu', toEventId: 'cure-insulin', type: 'preceded' },
    { id: 'cure-21', fromEventId: 'cure-insulin', toEventId: 'cure-penicillin', type: 'preceded' },
    { id: 'cure-22', fromEventId: 'cure-penicillin', toEventId: 'cure-dna', type: 'preceded' },
    { id: 'cure-23', fromEventId: 'cure-dna', toEventId: 'cure-polio', type: 'related' }, // Bio discoveries
    { id: 'cure-24', fromEventId: 'cure-polio', toEventId: 'cure-transplant', type: 'preceded' },
    { id: 'cure-25', fromEventId: 'cure-transplant', toEventId: 'cure-smallpox-end', type: 'preceded' },
    { id: 'cure-26', fromEventId: 'cure-smallpox-end', toEventId: 'cure-hiv', type: 'related' }, // Victory -> New Challenge
    { id: 'cure-27', fromEventId: 'cure-hiv', toEventId: 'cure-genome', type: 'influenced' }, // AIDS research -> Genetics
    { id: 'cure-28', fromEventId: 'cure-genome', toEventId: 'cure-crispr', type: 'caused' }, // Map -> Edit
    { id: 'cure-29', fromEventId: 'cure-crispr', toEventId: 'p12-26', type: 'preceded' }, // Tech -> Pandemic
    { id: 'cure-30', fromEventId: 'p12-26', toEventId: 'cure-mrna', type: 'caused' }, // Pandemic -> Solution

    // --- Gods & Mortals: The Evolution of Belief ---
    { id: 'gm-1', fromEventId: 'gm-burial', toEventId: 'gm-cave-art', type: 'preceded' },
    { id: 'gm-2', fromEventId: 'gm-cave-art', toEventId: 'gm-shaman', type: 'preceded' },
    { id: 'gm-3', fromEventId: 'gm-shaman', toEventId: 'gm-goddess', type: 'related' },
    { id: 'gm-4', fromEventId: 'gm-goddess', toEventId: 'gm-animism', type: 'preceded' },
    { id: 'gm-5', fromEventId: 'gm-animism', toEventId: 'p4-6', type: 'caused' }, // Animism -> Gobekli Tepe
    { id: 'gm-6', fromEventId: 'p4-6', toEventId: 'gm-ziggurats', type: 'preceded' },
    { id: 'gm-7', fromEventId: 'gm-ziggurats', toEventId: 'gm-book-dead', type: 'related' },
    { id: 'gm-8', fromEventId: 'gm-book-dead', toEventId: 'p5-23', type: 'related' }, // Book of Dead -> Aten
    { id: 'gm-9', fromEventId: 'p5-23', toEventId: 'p5-25', type: 'related' }, // Aten -> Vedic
    { id: 'gm-10', fromEventId: 'p5-25', toEventId: 'p6-5', type: 'preceded' }, // Vedic -> Solomon
    { id: 'gm-11', fromEventId: 'p6-5', toEventId: 'gm-zoroaster', type: 'preceded' },
    { id: 'gm-12', fromEventId: 'gm-zoroaster', toEventId: 'p6-16', type: 'related' }, // Zoroaster -> Buddha
    { id: 'gm-13', fromEventId: 'p6-16', toEventId: 'p6-17', type: 'related' }, // Buddha -> Confucius
    { id: 'gm-14', fromEventId: 'p6-17', toEventId: 'gm-taoism', type: 'related' }, // Confucius -> Taoism
    { id: 'gm-15', fromEventId: 'gm-taoism', toEventId: 'gm-mystery', type: 'related' },
    { id: 'gm-16', fromEventId: 'gm-mystery', toEventId: 'gm-maccabees', type: 'preceded' },
    { id: 'gm-17', fromEventId: 'gm-maccabees', toEventId: 'p7-2', type: 'preceded' }, // Maccabees -> Jesus
    { id: 'gm-18', fromEventId: 'p7-2', toEventId: 'gm-paul', type: 'caused' },
    { id: 'gm-19', fromEventId: 'gm-paul', toEventId: 'p7-7', type: 'caused' }, // Paul -> Milan
    { id: 'gm-20', fromEventId: 'p7-7', toEventId: 'gm-councils', type: 'caused' },
    { id: 'gm-21', fromEventId: 'gm-councils', toEventId: 'gm-benedict', type: 'related' },
    { id: 'gm-22', fromEventId: 'gm-benedict', toEventId: 'p7-12', type: 'preceded' }, // Benedict -> Muhammad
    { id: 'gm-23', fromEventId: 'p7-12', toEventId: 'gm-hijra', type: 'caused' },
    { id: 'gm-24', fromEventId: 'gm-hijra', toEventId: 'p7-15', type: 'caused' }, // Hijra -> Umayyad
    { id: 'gm-25', fromEventId: 'p7-15', toEventId: 'gm-golden-age', type: 'preceded' },
    { id: 'gm-26', fromEventId: 'gm-golden-age', toEventId: 'p7-22', type: 'preceded' }, // Golden Age -> Schism
    { id: 'gm-27', fromEventId: 'p7-22', toEventId: 'p7-24', type: 'caused' }, // Schism -> Crusades
    { id: 'gm-28', fromEventId: 'p7-24', toEventId: 'gm-inquisition', type: 'related' },
    { id: 'gm-29', fromEventId: 'gm-inquisition', toEventId: 'gm-kabbalah', type: 'related' },
    { id: 'gm-30', fromEventId: 'gm-kabbalah', toEventId: 'gm-sikhism', type: 'preceded' },
    { id: 'gm-31', fromEventId: 'gm-sikhism', toEventId: 'p8-13', type: 'preceded' }, // Sikhism -> Reformation
    { id: 'gm-32', fromEventId: 'p8-13', toEventId: 'p8-18', type: 'caused' }, // Reformation -> Church of England
    { id: 'gm-33', fromEventId: 'p8-18', toEventId: 'gm-scientific', type: 'preceded' },
    { id: 'gm-34', fromEventId: 'gm-scientific', toEventId: 'gm-enlightenment', type: 'caused' },
    { id: 'gm-35', fromEventId: 'gm-enlightenment', toEventId: 'gm-darwin', type: 'influenced' },
    { id: 'gm-36', fromEventId: 'gm-darwin', toEventId: 'gm-secularism', type: 'influenced' },
    { id: 'gm-37', fromEventId: 'gm-secularism', toEventId: 'gm-new-age', type: 'preceded' },
    { id: 'gm-38', fromEventId: 'gm-new-age', toEventId: 'gm-interfaith', type: 'preceded' },

    // --- The Art of War: Military History ---
    { id: 'war-1', fromEventId: 'p4-30', toEventId: 'war-sargon', type: 'caused' }, // Bronze -> First Empire
    { id: 'war-2', fromEventId: 'war-sargon', toEventId: 'p5-18', type: 'preceded' }, // Sargon -> Hyksos
    { id: 'war-3', fromEventId: 'p5-18', toEventId: 'p5-20', type: 'related' }, // Hyksos -> Hittites
    { id: 'war-4', fromEventId: 'p5-20', toEventId: 'p5-30', type: 'caused' }, // Hittites -> Kadesh
    { id: 'war-5', fromEventId: 'p5-30', toEventId: 'p6-1', type: 'preceded' }, // Kadesh -> Iron
    { id: 'war-6', fromEventId: 'p6-1', toEventId: 'p6-6', type: 'caused' }, // Iron -> Assyria
    { id: 'war-7', fromEventId: 'p6-6', toEventId: 'war-phalanx', type: 'preceded' }, // Assyria -> Phalanx
    { id: 'war-8', fromEventId: 'war-phalanx', toEventId: 'p6-22', type: 'caused' }, // Phalanx -> Marathon
    { id: 'war-9', fromEventId: 'p6-22', toEventId: 'p6-23', type: 'caused' }, // Marathon -> Salamis
    { id: 'war-10', fromEventId: 'p6-23', toEventId: 'p6-26', type: 'preceded' }, // Salamis -> Peloponnesian
    { id: 'war-11', fromEventId: 'p6-26', toEventId: 'war-legion', type: 'preceded' }, // Peloponnesian -> Legion
    { id: 'war-12', fromEventId: 'war-legion', toEventId: 'p6-28', type: 'caused' }, // Legion -> Alexander
    { id: 'war-13', fromEventId: 'p6-28', toEventId: 'war-stirrup', type: 'preceded' }, // Alexander -> Stirrup
    { id: 'war-14', fromEventId: 'war-stirrup', toEventId: 'p7-23', type: 'caused' }, // Stirrup -> Norman
    { id: 'war-15', fromEventId: 'p7-23', toEventId: 'p7-24', type: 'preceded' }, // Norman -> Crusade
    { id: 'war-16', fromEventId: 'p7-24', toEventId: 'war-trebuchet', type: 'related' }, // Crusade -> Trebuchet
    { id: 'war-17', fromEventId: 'war-trebuchet', toEventId: 'p7-26', type: 'preceded' }, // Trebuchet -> Mongols
    { id: 'war-18', fromEventId: 'p7-26', toEventId: 'war-longbow', type: 'preceded' }, // Mongols -> Longbow
    { id: 'war-19', fromEventId: 'war-longbow', toEventId: 'war-gunpowder', type: 'preceded' }, // Longbow -> Gunpowder
    { id: 'war-20', fromEventId: 'war-gunpowder', toEventId: 'war-pike', type: 'caused' }, // Gunpowder -> Pike
    { id: 'war-21', fromEventId: 'war-pike', toEventId: 'p8-15', type: 'related' }, // Pike -> Aztecs
    { id: 'war-22', fromEventId: 'p8-15', toEventId: 'war-armada', type: 'preceded' }, // Aztecs -> Armada
    { id: 'war-23', fromEventId: 'war-armada', toEventId: 'p8-27', type: 'preceded' }, // Armada -> 30 Years
    { id: 'war-24', fromEventId: 'p8-27', toEventId: 'war-napoleon', type: 'preceded' }, // 30 Years -> Napoleon
    { id: 'war-25', fromEventId: 'war-napoleon', toEventId: 'p9-14', type: 'caused' }, // Napoleon -> Waterloo
    { id: 'war-26', fromEventId: 'p9-14', toEventId: 'p9-25', type: 'preceded' }, // Waterloo -> Civil War
    { id: 'war-27', fromEventId: 'p9-25', toEventId: 'war-machine-gun', type: 'influenced' }, // Civil War -> Machine Gun
    { id: 'war-28', fromEventId: 'war-machine-gun', toEventId: 'p10-1', type: 'caused' }, // Machine Gun -> WWI
    { id: 'war-29', fromEventId: 'p10-1', toEventId: 'p10-3', type: 'caused' }, // WWI -> Somme
    { id: 'war-30', fromEventId: 'p10-3', toEventId: 'war-tank', type: 'caused' }, // Somme -> Tank
    { id: 'war-31', fromEventId: 'war-tank', toEventId: 'war-blitzkrieg', type: 'influenced' }, // Tank -> Blitzkrieg
    { id: 'war-32', fromEventId: 'war-blitzkrieg', toEventId: 'p10-21', type: 'caused' }, // Blitzkrieg -> Britain
    { id: 'war-33', fromEventId: 'p10-21', toEventId: 'p10-23', type: 'preceded' }, // Britain -> Pearl Harbor
    { id: 'war-34', fromEventId: 'p10-23', toEventId: 'p10-25', type: 'caused' }, // Pearl Harbor -> Midway
    { id: 'war-35', fromEventId: 'p10-25', toEventId: 'p10-27', type: 'preceded' }, // Midway -> D-Day
    { id: 'war-36', fromEventId: 'p10-27', toEventId: 'p10-31', type: 'preceded' }, // D-Day -> Atomic
    { id: 'war-37', fromEventId: 'p10-31', toEventId: 'war-guerrilla', type: 'influenced' }, // Atomic -> Guerrilla
    { id: 'war-38', fromEventId: 'war-guerrilla', toEventId: 'war-precision', type: 'preceded' }, // Guerrilla -> Precision
    { id: 'war-39', fromEventId: 'war-precision', toEventId: 'war-drone', type: 'caused' }, // Precision -> Drone
    { id: 'war-40', fromEventId: 'war-drone', toEventId: 'p12-27', type: 'preceded' }, // Drone -> Ukraine

    // --- Pandemics & Plagues: Disease Through History ---
    { id: 'plague-1', fromEventId: 'plague-athens', toEventId: 'plague-antonine', type: 'preceded' },
    { id: 'plague-2', fromEventId: 'plague-antonine', toEventId: 'plague-justinian', type: 'preceded' },
    { id: 'plague-3', fromEventId: 'plague-justinian', toEventId: 'p7-31', type: 'preceded' }, // Justinian -> Black Death
    { id: 'plague-4', fromEventId: 'p7-31', toEventId: 'plague-aztec', type: 'preceded' }, // Black Death -> Aztec
    { id: 'plague-5', fromEventId: 'plague-aztec', toEventId: 'plague-london', type: 'preceded' },
    { id: 'plague-6', fromEventId: 'plague-london', toEventId: 'p9-7', type: 'preceded' }, // London -> Vaccine
    { id: 'plague-7', fromEventId: 'p9-7', toEventId: 'plague-cholera', type: 'preceded' }, // Vaccine -> Cholera
    { id: 'plague-8', fromEventId: 'plague-cholera', toEventId: 'plague-yellow', type: 'preceded' },
    { id: 'plague-9', fromEventId: 'plague-yellow', toEventId: 'plague-typhoid', type: 'preceded' },
    { id: 'plague-10', fromEventId: 'plague-typhoid', toEventId: 'cure-flu', type: 'preceded' }, // Typhoid -> Spanish Flu
    { id: 'plague-11', fromEventId: 'cure-flu', toEventId: 'cure-penicillin', type: 'caused' }, // Flu -> Antibiotics
    { id: 'plague-12', fromEventId: 'cure-penicillin', toEventId: 'plague-who', type: 'preceded' },
    { id: 'plague-13', fromEventId: 'plague-who', toEventId: 'cure-polio', type: 'caused' }, // WHO -> Polio
    { id: 'plague-14', fromEventId: 'cure-polio', toEventId: 'cure-smallpox-end', type: 'caused' }, // Polio -> Smallpox End
    { id: 'plague-15', fromEventId: 'cure-smallpox-end', toEventId: 'cure-hiv', type: 'preceded' }, // Smallpox End -> HIV
    { id: 'plague-16', fromEventId: 'cure-hiv', toEventId: 'plague-sars', type: 'preceded' }, // HIV -> SARS
    { id: 'plague-17', fromEventId: 'plague-sars', toEventId: 'plague-ebola', type: 'preceded' },
    { id: 'plague-18', fromEventId: 'plague-ebola', toEventId: 'plague-antibiotic', type: 'related' },
    { id: 'plague-19', fromEventId: 'plague-antibiotic', toEventId: 'p12-26', type: 'preceded' }, // Antibiotic Resistance -> COVID
    { id: 'plague-20', fromEventId: 'p12-26', toEventId: 'cure-mrna', type: 'caused' }, // COVID -> mRNA

    // --- Women Who Changed History ---
    { id: 'women-1', fromEventId: 'women-hatshepsut', toEventId: 'women-nefertiti', type: 'preceded' },
    { id: 'women-2', fromEventId: 'women-nefertiti', toEventId: 'women-sappho', type: 'preceded' },
    { id: 'women-3', fromEventId: 'women-sappho', toEventId: 'women-cleopatra', type: 'preceded' },
    { id: 'women-4', fromEventId: 'women-cleopatra', toEventId: 'women-boudica', type: 'preceded' },
    { id: 'women-5', fromEventId: 'women-boudica', toEventId: 'women-hypatia', type: 'preceded' },
    { id: 'women-6', fromEventId: 'women-hypatia', toEventId: 'women-wu', type: 'preceded' },
    { id: 'women-7', fromEventId: 'women-wu', toEventId: 'women-murasaki', type: 'preceded' },
    { id: 'women-8', fromEventId: 'women-murasaki', toEventId: 'women-eleanor', type: 'preceded' },
    { id: 'women-9', fromEventId: 'women-eleanor', toEventId: 'women-hildegard', type: 'preceded' },
    { id: 'women-10', fromEventId: 'women-hildegard', toEventId: 'women-christine', type: 'preceded' },
    { id: 'women-11', fromEventId: 'women-christine', toEventId: 'women-joan', type: 'preceded' },
    { id: 'women-12', fromEventId: 'women-joan', toEventId: 'p8-22', type: 'preceded' }, // -> Elizabeth I
    { id: 'women-13', fromEventId: 'p8-22', toEventId: 'women-catherine', type: 'preceded' }, // Elizabeth -> Catherine
    { id: 'women-14', fromEventId: 'women-catherine', toEventId: 'women-olympe', type: 'preceded' },
    { id: 'women-15', fromEventId: 'women-olympe', toEventId: 'ai-lovelace', type: 'preceded' }, // -> Lovelace
    { id: 'women-16', fromEventId: 'ai-lovelace', toEventId: 'women-tubman', type: 'preceded' },
    { id: 'women-17', fromEventId: 'women-tubman', toEventId: 'women-sojourner', type: 'preceded' },
    { id: 'women-18', fromEventId: 'women-sojourner', toEventId: 'cure-nightingale', type: 'preceded' }, // -> Nightingale
    { id: 'women-19', fromEventId: 'cure-nightingale', toEventId: 'women-suffrage', type: 'preceded' },
    { id: 'women-20', fromEventId: 'women-suffrage', toEventId: 'women-curie', type: 'preceded' },
    { id: 'women-21', fromEventId: 'women-curie', toEventId: 'women-pankhurst', type: 'preceded' },
    { id: 'women-22', fromEventId: 'women-pankhurst', toEventId: 'women-earhart', type: 'preceded' },
    { id: 'women-23', fromEventId: 'women-earhart', toEventId: 'women-beauvoir', type: 'preceded' },
    { id: 'women-24', fromEventId: 'women-beauvoir', toEventId: 'women-parks', type: 'preceded' },
    { id: 'women-25', fromEventId: 'women-parks', toEventId: 'women-valentina', type: 'preceded' },
    { id: 'women-26', fromEventId: 'women-valentina', toEventId: 'women-thatcher', type: 'preceded' },
    { id: 'women-27', fromEventId: 'women-thatcher', toEventId: 'women-bhutto', type: 'preceded' },
    { id: 'women-28', fromEventId: 'women-bhutto', toEventId: 'women-merkel', type: 'preceded' },
    { id: 'women-29', fromEventId: 'women-merkel', toEventId: 'women-malala', type: 'preceded' },

    // --- Empires of Trade ---
    { id: 'trade-1', fromEventId: 'trade-obsidian', toEventId: 'trade-bronze', type: 'preceded' },
    { id: 'trade-2', fromEventId: 'trade-bronze', toEventId: 'trade-phoenicia', type: 'preceded' },
    { id: 'trade-3', fromEventId: 'trade-phoenicia', toEventId: 'money-lydia', type: 'preceded' },
    { id: 'trade-4', fromEventId: 'money-lydia', toEventId: 'p7-4', type: 'preceded' }, // -> Silk Roads
    { id: 'trade-5', fromEventId: 'p7-4', toEventId: 'trade-rome-china', type: 'caused' },
    { id: 'trade-6', fromEventId: 'trade-rome-china', toEventId: 'trade-vikings', type: 'preceded' },
    { id: 'trade-7', fromEventId: 'trade-vikings', toEventId: 'trade-venice', type: 'preceded' },
    { id: 'trade-8', fromEventId: 'trade-venice', toEventId: 'p7-28', type: 'preceded' }, // -> Marco Polo
    { id: 'trade-9', fromEventId: 'p7-28', toEventId: 'trade-hanseatic', type: 'preceded' },
    { id: 'trade-10', fromEventId: 'trade-hanseatic', toEventId: 'money-medici', type: 'preceded' },
    { id: 'trade-11', fromEventId: 'money-medici', toEventId: 'p8-10', type: 'preceded' }, // -> Da Gama
    { id: 'trade-12', fromEventId: 'p8-10', toEventId: 'trade-eic', type: 'caused' },
    { id: 'trade-13', fromEventId: 'trade-eic', toEventId: 'trade-voc', type: 'preceded' },
    { id: 'trade-14', fromEventId: 'trade-voc', toEventId: 'trade-slave', type: 'preceded' },
    { id: 'trade-15', fromEventId: 'trade-slave', toEventId: 'money-tulip', type: 'preceded' },
    { id: 'trade-16', fromEventId: 'money-tulip', toEventId: 'trade-tea', type: 'preceded' },
    { id: 'trade-17', fromEventId: 'trade-tea', toEventId: 'money-boe', type: 'preceded' },
    { id: 'trade-18', fromEventId: 'money-boe', toEventId: 'p9-4', type: 'preceded' }, // -> Industrial Revolution
    { id: 'trade-19', fromEventId: 'p9-4', toEventId: 'trade-suez', type: 'preceded' },
    { id: 'trade-20', fromEventId: 'trade-suez', toEventId: 'trade-standard', type: 'preceded' },
    { id: 'trade-21', fromEventId: 'trade-standard', toEventId: 'trade-panama', type: 'preceded' },
    { id: 'trade-22', fromEventId: 'trade-panama', toEventId: 'trade-gatt', type: 'preceded' },
    { id: 'trade-23', fromEventId: 'trade-gatt', toEventId: 'trade-container', type: 'preceded' },
    { id: 'trade-24', fromEventId: 'trade-container', toEventId: 'trade-amazon', type: 'preceded' },
    { id: 'trade-25', fromEventId: 'trade-amazon', toEventId: 'trade-wto', type: 'preceded' },
    { id: 'trade-26', fromEventId: 'trade-wto', toEventId: 'trade-alibaba', type: 'preceded' },
    { id: 'trade-27', fromEventId: 'trade-alibaba', toEventId: 'trade-crisis', type: 'preceded' },

    // --- Power Trip: Energy History ---
    { id: 'power-1', fromEventId: 'power-fire', toEventId: 'power-hearth', type: 'preceded' },
    { id: 'power-2', fromEventId: 'power-hearth', toEventId: 'power-lamp', type: 'preceded' },
    { id: 'power-3', fromEventId: 'power-lamp', toEventId: 'power-waterwheel', type: 'preceded' },
    { id: 'power-4', fromEventId: 'power-waterwheel', toEventId: 'power-windmill', type: 'preceded' },
    { id: 'power-5', fromEventId: 'power-windmill', toEventId: 'power-coal', type: 'preceded' },
    { id: 'power-6', fromEventId: 'power-coal', toEventId: 'power-newcomen', type: 'caused' },
    { id: 'power-7', fromEventId: 'power-newcomen', toEventId: 'power-watt', type: 'caused' },
    { id: 'power-8', fromEventId: 'power-watt', toEventId: 'power-railway', type: 'caused' },
    { id: 'power-9', fromEventId: 'power-railway', toEventId: 'power-oil', type: 'preceded' },
    { id: 'power-10', fromEventId: 'power-oil', toEventId: 'power-dynamo', type: 'preceded' },
    { id: 'power-11', fromEventId: 'power-dynamo', toEventId: 'power-internal', type: 'preceded' },
    { id: 'power-12', fromEventId: 'power-internal', toEventId: 'power-edison', type: 'preceded' },
    { id: 'power-13', fromEventId: 'power-edison', toEventId: 'power-tesla', type: 'related' },
    { id: 'power-14', fromEventId: 'power-tesla', toEventId: 'power-modelt', type: 'caused' },
    { id: 'power-15', fromEventId: 'power-modelt', toEventId: 'power-hoover', type: 'preceded' },
    { id: 'power-16', fromEventId: 'power-hoover', toEventId: 'power-fermi', type: 'preceded' },
    { id: 'power-17', fromEventId: 'power-fermi', toEventId: 'power-hiroshima', type: 'caused' },
    { id: 'power-18', fromEventId: 'power-hiroshima', toEventId: 'power-solar', type: 'preceded' },
    { id: 'power-19', fromEventId: 'power-solar', toEventId: 'power-obninsk', type: 'related' },
    { id: 'power-20', fromEventId: 'power-obninsk', toEventId: 'power-opec', type: 'preceded' },
    { id: 'power-21', fromEventId: 'power-opec', toEventId: 'power-tmi', type: 'preceded' },
    { id: 'power-22', fromEventId: 'power-tmi', toEventId: 'power-chernobyl', type: 'related' },
    { id: 'power-23', fromEventId: 'power-chernobyl', toEventId: 'power-windfarm', type: 'caused' },
    { id: 'power-24', fromEventId: 'power-windfarm', toEventId: 'power-grid', type: 'preceded' },
    { id: 'power-25', fromEventId: 'power-grid', toEventId: 'power-tesla-ev', type: 'preceded' },
    { id: 'power-26', fromEventId: 'power-tesla-ev', toEventId: 'power-fukushima', type: 'preceded' },
    { id: 'power-27', fromEventId: 'power-fukushima', toEventId: 'power-paris', type: 'caused' },
    { id: 'power-28', fromEventId: 'power-paris', toEventId: 'power-iter', type: 'related' },
    { id: 'power-29', fromEventId: 'power-iter', toEventId: 'power-fusion', type: 'caused' },

    // --- Rights & Revolutions: How Humanity Invented Freedom ---
    { id: 'rights-1', fromEventId: 'rights-hammurabi', toEventId: 'rights-cyrus', type: 'preceded' },
    { id: 'rights-2', fromEventId: 'rights-cyrus', toEventId: 'p6-21', type: 'preceded' },
    { id: 'rights-3', fromEventId: 'p6-21', toEventId: 'rights-roman-law', type: 'related' },
    { id: 'rights-4', fromEventId: 'rights-roman-law', toEventId: 'rights-stoics', type: 'preceded' },
    { id: 'rights-5', fromEventId: 'rights-stoics', toEventId: 'p7-27', type: 'preceded' },
    { id: 'rights-6', fromEventId: 'p7-27', toEventId: 'rights-habeas', type: 'preceded' },
    { id: 'rights-7', fromEventId: 'rights-habeas', toEventId: 'rights-locke', type: 'caused' },
    { id: 'rights-8', fromEventId: 'rights-locke', toEventId: 'rights-bill-1689', type: 'caused' },
    { id: 'rights-9', fromEventId: 'rights-bill-1689', toEventId: 'rights-montesquieu', type: 'influenced' },
    { id: 'rights-10', fromEventId: 'rights-montesquieu', toEventId: 'rights-rousseau', type: 'influenced' },
    { id: 'rights-11', fromEventId: 'rights-rousseau', toEventId: 'p9-2', type: 'influenced' },
    { id: 'rights-12', fromEventId: 'p9-2', toEventId: 'rights-us-const', type: 'caused' },
    { id: 'rights-13', fromEventId: 'rights-us-const', toEventId: 'p9-4', type: 'influenced' },
    { id: 'rights-14', fromEventId: 'p9-4', toEventId: 'p9-5', type: 'caused' },
    { id: 'rights-15', fromEventId: 'p9-5', toEventId: 'rights-us-bill', type: 'related' },
    { id: 'rights-16', fromEventId: 'rights-us-bill', toEventId: 'rights-wollstonecraft', type: 'preceded' },
    { id: 'rights-17', fromEventId: 'rights-wollstonecraft', toEventId: 'p9-10', type: 'preceded' },
    { id: 'rights-18', fromEventId: 'p9-10', toEventId: 'p9-13', type: 'influenced' },
    { id: 'rights-19', fromEventId: 'p9-13', toEventId: 'rights-abolition-uk', type: 'preceded' },
    { id: 'rights-20', fromEventId: 'rights-abolition-uk', toEventId: 'p9-20', type: 'preceded' },
    { id: 'rights-21', fromEventId: 'p9-20', toEventId: 'rights-emancipation', type: 'preceded' },
    { id: 'rights-22', fromEventId: 'rights-emancipation', toEventId: 'rights-13th', type: 'caused' },
    { id: 'rights-23', fromEventId: 'rights-13th', toEventId: 'rights-labor', type: 'preceded' },
    { id: 'rights-24', fromEventId: 'rights-labor', toEventId: 'women-suffrage', type: 'preceded' },
    { id: 'rights-25', fromEventId: 'women-suffrage', toEventId: 'rights-naacp', type: 'preceded' },
    { id: 'rights-26', fromEventId: 'rights-naacp', toEventId: 'rights-gandhi', type: 'preceded' },
    { id: 'rights-27', fromEventId: 'rights-gandhi', toEventId: 'rights-un-decl', type: 'preceded' },
    { id: 'rights-28', fromEventId: 'rights-un-decl', toEventId: 'rights-civil64', type: 'preceded' },
    { id: 'rights-29', fromEventId: 'rights-civil64', toEventId: 'rights-mandela', type: 'preceded' },

    // --- The Climate Chronicle: Ice Ages to Global Warming ---
    { id: 'climate-1', fromEventId: 'climate-hadean', toEventId: 'cosmic-24', type: 'preceded' },
    { id: 'climate-2', fromEventId: 'cosmic-24', toEventId: 'cosmic-25', type: 'caused' },
    { id: 'climate-3', fromEventId: 'cosmic-25', toEventId: 'climate-lhb', type: 'preceded' },
    { id: 'climate-4', fromEventId: 'climate-lhb', toEventId: 'climate-methane', type: 'preceded' },
    { id: 'climate-5', fromEventId: 'climate-methane', toEventId: '23', type: 'preceded' },
    { id: 'climate-6', fromEventId: '23', toEventId: '24', type: 'caused' },
    { id: 'climate-7', fromEventId: '24', toEventId: 'climate-rodinia', type: 'preceded' },
    { id: 'climate-8', fromEventId: 'climate-rodinia', toEventId: 'climate-snowball1', type: 'caused' },
    { id: 'climate-9', fromEventId: 'climate-snowball1', toEventId: 'climate-snowball2', type: 'preceded' },
    { id: 'climate-10', fromEventId: 'climate-snowball2', toEventId: 'climate-cambrian-warm', type: 'caused' },
    { id: 'climate-11', fromEventId: 'climate-cambrian-warm', toEventId: 'p2-9', type: 'preceded' },
    { id: 'climate-12', fromEventId: 'p2-9', toEventId: 'p2-13', type: 'preceded' },
    { id: 'climate-13', fromEventId: 'p2-13', toEventId: 'p2-14', type: 'preceded' },
    { id: 'climate-14', fromEventId: 'p2-14', toEventId: 'climate-pangaea', type: 'preceded' },
    { id: 'climate-15', fromEventId: 'climate-pangaea', toEventId: 'climate-siberian', type: 'preceded' },
    { id: 'climate-16', fromEventId: 'climate-siberian', toEventId: 'p2-19', type: 'caused' },
    { id: 'climate-17', fromEventId: 'p2-19', toEventId: 'p2-24', type: 'preceded' },
    { id: 'climate-18', fromEventId: 'p2-24', toEventId: 'p2-25', type: 'caused' },
    { id: 'climate-19', fromEventId: 'p2-25', toEventId: 'climate-petm', type: 'preceded' },
    { id: 'climate-20', fromEventId: 'climate-petm', toEventId: 'climate-antarctic', type: 'preceded' },
    { id: 'climate-21', fromEventId: 'climate-antarctic', toEventId: '45', type: 'related' },
    { id: 'climate-22', fromEventId: '45', toEventId: 'climate-milankovitch', type: 'preceded' },
    { id: 'climate-23', fromEventId: 'climate-milankovitch', toEventId: '65', type: 'caused' },
    { id: 'climate-24', fromEventId: '65', toEventId: 'climate-younger-dryas', type: 'preceded' },
    { id: 'climate-25', fromEventId: 'climate-younger-dryas', toEventId: '73', type: 'preceded' },
    { id: 'climate-26', fromEventId: '73', toEventId: 'power-coal', type: 'preceded' },
    { id: 'climate-27', fromEventId: 'power-coal', toEventId: 'climate-arrhenius', type: 'preceded' },
    { id: 'climate-28', fromEventId: 'climate-arrhenius', toEventId: 'climate-keeling', type: 'preceded' },
    { id: 'climate-29', fromEventId: 'climate-keeling', toEventId: 'climate-ozone', type: 'preceded' },
    { id: 'climate-30', fromEventId: 'climate-ozone', toEventId: 'climate-ipcc', type: 'preceded' },
    { id: 'climate-31', fromEventId: 'climate-ipcc', toEventId: 'p12-6', type: 'preceded' },
    { id: 'climate-32', fromEventId: 'p12-6', toEventId: 'p12-21', type: 'preceded' },
    { id: 'climate-33', fromEventId: 'p12-21', toEventId: 'climate-cop21', type: 'related' },
    { id: 'climate-34', fromEventId: 'climate-cop21', toEventId: 'climate-1.5c', type: 'preceded' }
];


export const JOURNEYS: Journey[] = [
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
            'p2-28', 'p2-29', '41', '42',
            // Human Evolution Extension
            '45', '46', '47', '48', '49', '50', '51', '52', '53', '54',
            '55', '56', '57', '58', '59', '60', '61', '62', '63', '64',
            '65', '66', '67', 'p4-3'
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('eol-')),
        overrides: {}
    },
    {
        id: 'rise-of-civilizations',
        title: 'The Human Story: Rise of Civilizations',
        description: 'From the first mud bricks of Jericho to the digital age—witness 11,500 years of human society, empires, revolutions, and transformation.',
        thumbnailUrl: 'images/p6-25.jpg',
        eventIds: [
            // Phase 4-7: Ancient Origins (9500 BCE - 570 CE)
            'p4-3', 'p4-9', 'p4-14', 'p4-25', 'p4-29', 'p4-30',
            'p5-1', 'p5-2', 'p5-8', 'p5-9', 'p5-11', 'p5-15',
            'p5-16', 'p5-17', 'p5-21', 'p5-24', 'p5-31',
            'p6-1', 'p6-4', 'p6-9', 'p6-11', 'p6-18', 'p6-20',
            'p6-21', 'p6-22', 'p6-28', 'p6-29', 'p6-30',
            'p7-4', 'p7-6', 'p7-10', 'p7-12',
            // Phase 7 continued: Medieval Period (622-1347 CE)
            'p7-14', 'p7-15', 'p7-17', 'p7-19', 'p7-24', 'p7-26', 'p7-27', 'p7-31',
            // Phase 8: Age of Exploration & Renaissance (1450-1750)
            'p8-4', 'p8-5', 'p8-8', 'p8-13', 'p8-14', 'p8-16',
            'p8-20', 'p8-24', 'p8-25', 'p8-29', 'p8-30', 'p8-31',
            // Phase 9: Age of Revolutions (1765-1914)
            'p9-1', 'p9-2', 'p9-4', 'p9-18', 'p9-21', 'p9-23',
            'p9-26', 'p9-27', 'p9-28', 'p9-29', 'p9-30',
            // Phase 10: World Wars (1914-1945)
            'p10-1', 'p10-5', 'p10-7', 'p10-12', 'p10-14',
            'p10-20', 'p10-23', 'p10-27', 'p10-31',
            // Phase 11: Cold War (1945-1991)
            'p11-1', 'p11-4', 'p11-8', 'p11-14', 'p11-16',
            'p11-17', 'p11-18', 'p11-24', 'p11-29', 'p11-30',
            // Phase 12: Digital Age (1991-2025)
            'p12-3', 'p12-4', 'p12-7', 'p12-9', 'p12-11',
            'p12-13', 'p12-21', 'p12-26', 'p12-29', 'p12-31'
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('roc-')),
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
        id: 'evolution-of-technology',
        title: 'Wires & Waves: Evolution of Technology',
        description: 'From the spark of the first fire to the neural networks of AI, trace the innovations that defined us.',
        thumbnailUrl: 'images/p12-29.jpg',
        eventIds: [
            'modern-13', 'p4-30', 'modern-12', 'p6-4', 'p6-1', 'modern-archimedes', 'modern-paper', 'modern-compass', 'modern-9',
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
        description: 'From the first mud bricks of Jericho to the digital age—witness 11,500 years of human society, empires, revolutions, and transformation.',
        thumbnailUrl: 'images/p6-25.jpg',
        eventIds: [
            // Phase 4-7: Ancient Origins (9500 BCE - 570 CE)
            'p4-3', 'p4-9', 'p4-14', 'p4-25', 'p4-29', 'p4-30',
            'p5-1', 'p5-2', 'p5-8', 'p5-9', 'p5-11', 'p5-15',
            'p5-16', 'p5-17', 'p5-21', 'p5-24', 'p5-31',
            'p6-1', 'p6-4', 'p6-9', 'p6-11', 'p6-18', 'p6-20',
            'p6-21', 'p6-22', 'p6-28', 'p6-29', 'p6-30',
            'p7-4', 'p7-6', 'p7-10', 'p7-12',
            // Phase 7 continued: Medieval Period (622-1347 CE)
            'p7-14', 'p7-15', 'p7-17', 'p7-19', 'p7-24', 'p7-26', 'p7-27', 'p7-31',
            // Phase 8: Age of Exploration & Renaissance (1450-1750)
            'p8-4', 'p8-5', 'p8-8', 'p8-13', 'p8-14', 'p8-16',
            'p8-20', 'p8-24', 'p8-25', 'p8-29', 'p8-30', 'p8-31',
            // Phase 9: Age of Revolutions (1765-1914)
            'p9-1', 'p9-2', 'p9-4', 'p9-18', 'p9-21', 'p9-23',
            'p9-26', 'p9-27', 'p9-28', 'p9-29', 'p9-30',
            // Phase 10: World Wars (1914-1945)
            'p10-1', 'p10-5', 'p10-7', 'p10-12', 'p10-14',
            'p10-20', 'p10-23', 'p10-27', 'p10-31',
            // Phase 11: Cold War (1945-1991)
            'p11-1', 'p11-4', 'p11-8', 'p11-14', 'p11-16',
            'p11-17', 'p11-18', 'p11-24', 'p11-29', 'p11-30',
            // Phase 12: Digital Age (1991-2025)
            'p12-3', 'p12-4', 'p12-7', 'p12-9', 'p12-11',
            'p12-13', 'p12-21', 'p12-26', 'p12-29', 'p12-31'
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('roc-')),
        overrides: {}
    },
    {
        id: 'ancestry-of-ai',
        title: 'The Ancestry of AI: From Logic to Lightning',
        description: 'Trace the genealogy of Artificial Intelligence not from 1950, but from the ancient roots of logic and weaving.',
        thumbnailUrl: 'images/modern-1.jpg',
        eventIds: [
            // Ancient Roots
            'ai-aristotle',     // 350 BCE: Logic
            'ai-antikythera',   // 100 BCE: Analog Computer
            'ai-alkhwarizmi',   // 820 CE: Algorithm
            'ai-llull',         // 1275 CE: Combinatorics

            // The Machine Age
            'ai-leibniz-binary-system', // 1679
            'ai-jacquard',      // 1804: Punch Cards
            'ai-the-difference-engine', // 1822
            'ai-lovelace',      // 1843: First Program
            'ai-boole',         // 1854: Boolean Logic

            // The Dawn of Computing
            'ai-principia',     // 1910
            'ai-turing-machine',        // 1936: Turing Machine
            'ai-mcculloch', // 1943 (Canonical ID)
            'ai-cybernetics',   // 1948
            'ai-asimovs-three-laws', // 1950 (Fiction/Ethics)

            // The AI Era Begins
            'ai-the-logic-theorist', // 1956
            'ai-dartmouth',     // 1956: The Term "AI"
            'ai-perceptron',    // 1958
            'ai-eliza',         // 1966
            'ai-perceptrons-book', // 1969 (Winter begins)
            'ai-winter',        // 1974

            // Renaissance
            'ai-expert-systems', // 1980
            'ai-backpropagation', // 1986
            'ai-deepblue',      // 1997
            'ai-watson-wins-jeopardy', // 2011
            'ai-imagenet-breakthrough', // 2012
            'ai-alexnet',       // 2012 (Specific Model)
            'ai-alphago',       // 2016
            'ai-alphago-zero',  // 2017
            'ai-transformer',   // 2017
            'ai-gpt-3',         // 2020
            'ai-generative-reality' // 2024
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('ai-')),
        overrides: {}
    },
    {
        id: 'the-money-illusion',
        title: 'The Money Illusion: From Grain to Gold to Ghosts',
        description: 'Discover how money evolved from physical weight to pure belief, and how it shapes our reality.',
        thumbnailUrl: 'images/money-gold.jpg',
        eventIds: [
            'p4-3',             // 9500 BCE: Agriculture/Settlement
            'p4-29',            // 3200 BCE: Writing
            'money-shekel',     // 3000 BCE: Grain Money
            'money-hammurabi',  // 1754 BCE
            'money-cowrie',     // 1200 BCE
            'money-sparta',     // 700 BCE
            'money-lydia',      // 600 BCE
            'p6-20',            // 509 BCE: Rome
            'money-debasement', // 250 CE
            'money-paper',      // 1000 CE
            'money-tally',      // 1100 CE
            'money-templar',    // 1150 CE
            'money-medici',     // 1397 CE
            'p8-14',            // 1519 CE
            'money-potosi',     // 1545 CE
            'money-tulip',      // 1637 CE
            'money-boe',        // 1694 CE
            'money-gold',       // 1717 CE
            'money-mississippi',// 1720 CE
            'modern-7',         // 1760 CE
            'money-fed',        // 1913 CE
            'money-weimar',     // 1923 CE
            'money-bretton',    // 1944 CE
            'money-card',       // 1950 CE
            'money-nixon',      // 1971 CE
            'money-euro',       // 1999 CE
            'money-mpesa',      // 2007 CE
            'p12-14',           // 2008 CE
            'p12-15',           // 2009 CE
            'money-algo',       // 2010s
            'money-eth',        // 2015 CE
            'p12-29'            // 2022 CE
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('money-')),
        overrides: {
            'p4-3': { description: 'Agriculture creates surplus. Staying in one place allows humans to accumulate "stuff"—the problem that money was invented to solve.' },
            'p4-29': { description: 'Writing begins as accounting. The first tablets aren\'t poetry; they are debt records. History starts with "Who owes what."' },
            'p6-20': { title: 'Imperial Coinage', description: 'Rome standardizes currency across the known world, proving that money is a function of State Power.' },
            'p12-14': { title: 'The Illusion Breaks (2008)', description: 'The Global Financial Crisis reveals that the modern economy is built on a web of complex promises that can vanish overnight.' }
        }
    },
    {
        id: 'to-the-stars',
        title: 'To The Stars: The Quest for the Cosmos',
        description: 'From ancient stargazers to Mars colonizers—trace humanity\'s 5,000-year journey to escape Earth.',
        thumbnailUrl: 'images/space-jwst.jpg',
        eventIds: [
            // Ancient Astronomy
            'space-stonehenge',     // 3000 BCE
            'space-ptolemy',        // 150 CE
            // Scientific Revolution
            'p8-20',                // 1543: Copernicus
            'space-kepler',         // 1609
            'p8-26',                // 1610: Galileo
            'p8-30',                // 1687: Newton
            'space-herschel',       // 1781
            // Modern Physics & Rockets
            'modern-5',             // 1903: Wright Brothers
            'space-einstein',       // 1915
            'space-goddard',        // 1926
            'space-v2',             // 1944
            // Space Race
            'p11-14',               // 1957: Sputnik
            'space-laika',          // 1957
            'space-gagarin',        // 1961
            'space-kennedy',        // 1962
            'space-tereshkova',     // 1963
            'space-spacewalk',      // 1965
            'p11-24',               // 1969: Apollo 11
            'space-voyager',        // 1977
            'space-shuttle',        // 1981
            // Deep Space Era
            'space-hubble',         // 1990
            'space-mars-pathfinder',// 1997
            'p12-8',                // 2000: ISS
            'space-spirit',         // 2004
            'space-curiosity',      // 2012
            'space-falcon-landing', // 2015
            'space-gravitational-waves', // 2016
            'p12-25',               // 2019: Black Hole Image
            'space-perseverance',   // 2021
            'space-jwst',           // 2022
            'space-artemis',        // 2022
            'space-starship'        // 2024
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('tts-')),
        overrides: {}
    },
    {
        id: 'the-cure',
        title: 'The Cure: Humanity vs. Disease',
        description: 'From shamans to mRNA—the 10,000-year war against invisible killers.',
        thumbnailUrl: 'images/the-cure-thumb.jpg',
        eventIds: [
            // Ancient
            'cure-trepanning', 'cure-imhotep', 'cure-ayurveda', 'cure-hippocrates',
            'cure-galen',
            // Medieval
            'cure-avicenna', 'p7-31', // Black Death
            // Renaissance
            'cure-vesalius', 'cure-harvey', 'cure-leeuwenhoek',
            // Enlightenment
            'cure-lind', 'p9-7', // Smallpox
            // 19th Century
            'cure-stethoscope', 'cure-anesthesia', 'cure-semmelweis',
            'cure-nightingale', 'cure-pasteur', 'cure-lister', 'cure-koch', 'cure-xray',
            // 20th Century
            'cure-flu', 'cure-insulin', 'cure-penicillin',
            'cure-dna', 'cure-polio', 'cure-transplant',
            'cure-smallpox-end', 'cure-hiv',
            // 21st Century
            'cure-genome', 'cure-crispr', 'p12-26', // COVID
            'cure-mrna'
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('cure-')),
        overrides: {}
    },
    {
        id: 'gods-mortals',
        title: 'Gods & Mortals: The Evolution of Belief',
        description: 'From cave paintings to cathedrals—100,000 years of humanity seeking the divine.',
        thumbnailUrl: 'images/gods-mortals-thumb.jpg',
        eventIds: [
            // Prehistoric Origins
            'gm-burial', 'gm-cave-art', 'gm-shaman', 'gm-goddess', 'gm-animism',
            // Ancient Temples & Texts
            'p4-6',  // Göbekli Tepe
            'gm-ziggurats', 'gm-book-dead', 'p5-23', 'p5-25', // Aten, Vedic
            // Axial Age
            'p6-5', 'gm-zoroaster', 'p6-16', 'p6-17', 'gm-taoism', 'gm-mystery', 'gm-maccabees',
            // Christianity & Islam
            'p7-2', 'gm-paul', 'p7-7', 'gm-councils', 'gm-benedict',
            'p7-12', 'gm-hijra', 'p7-15', 'gm-golden-age',
            // Medieval Tensions
            'p7-22', 'p7-24', 'gm-inquisition', 'gm-kabbalah',
            // Reformation & Modernity
            'gm-sikhism', 'p8-13', 'p8-18', 'gm-scientific', 'gm-enlightenment',
            'gm-darwin', 'gm-secularism', 'gm-new-age', 'gm-interfaith'
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('gm-')),
        overrides: {
            'p4-6': {
                title: 'Göbekli Tepe',
                description: 'Before the Farm, the Temple. Hunter-gatherers build massive stone circles 6,000 years before the pyramids—suggesting religion came before agriculture, not after.'
            },
            'p5-23': {
                title: 'Akhenaten\'s Revolution',
                description: 'One God, One Pharaoh. Egypt\'s heretic king erases a thousand gods to worship only the sun disk—the first monotheistic experiment, and a spectacular failure.'
            },
            'p5-25': {
                title: 'The Vedas',
                description: 'Songs of the Aryans. Sanskrit hymns memorized for millennia define the cosmic order—karma, duty, and the gods that will become Hinduism.'
            },
            'p6-5': {
                title: 'Solomon\'s Temple',
                description: 'The House of the Name. A golden shrine rises in Jerusalem, anchoring Jewish identity to a single sacred place—and setting up millennia of conflict.'
            },
            'p6-16': {
                title: 'The Buddha Awakens',
                description: 'The Middle Way. A prince abandons his palace, sits under a tree, and discovers that desire is the root of suffering—launching a philosophy that will reshape Asia.'
            },
            'p6-17': {
                title: 'Confucius and Social Harmony',
                description: 'The Rectification of Names. A wandering teacher insists that civilization depends on proper relationships—parent to child, ruler to subject, friend to friend.'
            },
            'p7-2': {
                title: 'The Crucifixion',
                description: 'Death Becomes Life. A Jewish rabbi is executed by Rome as a criminal. His followers claim he rises again, and a new religion is born from martyrdom.'
            },
            'p7-7': {
                title: 'Constantine\'s Gamble',
                description: 'In Hoc Signo Vinces. An emperor sees a vision before battle and legalizes Christianity, transforming a persecuted cult into the state religion of the world\'s greatest empire.'
            },
            'p7-15': {
                title: 'The Umayyad Empire',
                description: 'From Mecca to Spain. Within a century of Muhammad\'s death, Islam spans from the Atlantic to Central Asia—the fastest religious expansion in history.'
            },
            'p7-22': {
                title: 'The Great Schism',
                description: 'East and West Part Ways. Pope and Patriarch excommunicate each other over theology and power, splitting Christianity into two hostile camps that remain divided today.'
            },
            'p7-24': {
                title: 'The Crusades Begin',
                description: 'Deus Vult! The Pope promises heaven to warriors who reclaim Jerusalem, launching two centuries of religious war that scars relations between faiths to this day.'
            },
            'p8-18': {
                title: 'The King\'s Church',
                description: 'Divorce as Theology. Henry VIII breaks with Rome not over doctrine but a wife, creating a national church and proving that religion and politics are inseparable.'
            }
        }
    },
    {
        id: 'art-of-war',
        title: 'The Art of War: Conflict Through the Ages',
        description: 'How conflict drove innovation, from the first chariot to the nuclear triad.',
        thumbnailUrl: 'images/art-of-war-thumb.jpg',
        eventIds: [
            // Ancient Warfare
            'p4-30',        // Bronze Age
            'war-sargon',   // First Empire
            'p5-18',        // Hyksos (chariots)
            'p5-20',        // Hittites
            'p5-30',        // Battle of Kadesh
            // Iron Age
            'p6-1',         // Iron Technology
            'p6-6',         // Neo-Assyrian Empire
            'war-phalanx',  // The Phalanx
            'p6-22',        // Marathon
            'p6-23',        // Salamis
            'p6-24',        // Warring States
            'p6-26',        // Peloponnesian War
            'war-legion',   // Roman Legion
            'p6-28',        // Alexander
            // Medieval
            'war-stirrup',  // The Stirrup
            'p7-23',        // Norman Conquest
            'p7-24',        // Crusades
            'war-trebuchet',// Trebuchet
            'p7-26',        // Mongol Empire
            'war-longbow',  // Longbow at Crécy
            // Gunpowder Era
            'war-gunpowder',// Constantinople falls
            'war-pike',     // Pike and Shot
            'p8-15',        // Conquest of Aztecs
            'war-armada',   // Spanish Armada
            'p8-27',        // Thirty Years War
            // Industrial Warfare
            'war-napoleon', // Napoleonic Warfare
            'p9-14',        // Waterloo
            'p9-25',        // US Civil War
            'war-machine-gun', // Machine Gun
            // World Wars
            'p10-1',        // WWI Begins
            'p10-3',        // Somme
            'war-tank',     // The Tank
            'war-blitzkrieg', // Blitzkrieg
            'p10-21',       // Battle of Britain  
            'p10-23',       // Pearl Harbor
            'p10-25',       // Midway
            'p10-27',       // D-Day
            'p10-31',       // Atomic Bomb
            // Modern Era
            'war-guerrilla',// Guerrilla Warfare
            'war-precision',// Precision Warfare
            'war-drone',    // The Drone Age
            'p12-27'        // Ukraine
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('war-')),
        overrides: {
            'p4-30': { description: 'Arms Race Begins. By alloying copper with tin, humans create a metal hard enough for killing. New weapons spark the first arms races and state-level warfare.' },
            'p5-18': { title: 'The Chariot Revolution', description: 'Wheels of War. The Hyksos conquer Egypt not with numbers but with technology—horse-drawn chariots that turn infantry into targets.' },
            'p5-30': { title: 'The First World War', description: 'Empires Collide. Ramesses II and the Hittites clash at Kadesh in history\'s first recorded battle—and history\'s first peace treaty.' },
            'p6-22': { title: 'Marathon: Democracy Stands', description: 'The Odds Defied. Athenian hoplites charge a Persian army twice their size—and win. The phalanx proves that discipline beats numbers.' },
            'p6-23': { title: 'Salamis: The Wooden Wall', description: 'Thermopylae\'s Revenge. Athenian triremes trap and destroy the Persian fleet in narrow straits—naval warfare decides the fate of Greece.' },
            'p6-24': { title: 'China at War with Itself', description: 'The Crucible of Strategy. Seven kingdoms fight for supremacy, giving birth to Sun Tzu\'s Art of War and the concept of total war.' },
            'p6-26': { title: 'Athens vs. Sparta', description: 'Democracy vs. Militarism. A 27-year war between Greek superpowers ends the Golden Age and proves that even victors can be destroyed.' },
            'p6-28': { title: 'Alexander\'s Blitzkrieg', description: 'The Hammer of Macedon. In 13 years, Alexander conquers from Greece to India, creating the largest empire the world has seen—military genius at unprecedented scale.' },
            'p7-23': { title: 'The Last Successful Invasion', description: '1066: England Falls. Norman cavalry and archers crush the Saxon shield wall at Hastings—the last time Britain would be conquered.' },
            'p7-24': { title: 'Holy War Begins', description: 'Deus Vult! The Pope promises salvation to warriors who take Jerusalem, launching two centuries of religious warfare between Christianity and Islam.' },
            'p7-26': { title: 'The Mongol Storm', description: 'Terror Without Limits. Genghis Khan\'s horsemen conquer more territory than any army in history, using psychological warfare and ruthless efficiency.' },
            'p8-15': { title: 'Steel Meets Stone', description: 'The End of an Empire. With 500 men, horses, and gunpowder, Cortés topples a civilization of millions—technology as the ultimate weapon.' },
            'p8-27': { title: 'Europe Bleeds', description: 'The War That Killed Millions. Religious hatred and dynastic ambition destroy a third of Germany\'s population—a preview of total war.' },
            'p9-14': { title: 'The End of Napoleon', description: 'The Eagle Falls. At Waterloo, the greatest general of the age meets his final defeat, reshaping Europe for a century.' },
            'p9-25': { title: 'Brother Against Brother', description: 'The First Modern War. Railroads, telegraphs, ironclads, and 620,000 dead—America\'s Civil War previews the industrial slaughter to come.' },
            'p10-1': { title: 'The Guns of August', description: 'The Lights Go Out. Mobilization tables and railway timetables drag Europe\'s great powers into a war that will kill 20 million.' },
            'p10-3': { title: 'The Somme: Industrialized Death', description: '60,000 Casualties in One Day. British soldiers walk into machine gun fire, proving that courage is no match for technology.' },
            'p10-21': { title: 'Their Finest Hour', description: 'The Few. RAF pilots in Spitfires prevent Operation Sea Lion, saving Britain from invasion in history\'s first decisive air battle.' },
            'p10-23': { title: 'Day of Infamy', description: 'A Sleeping Giant Awakens. Japan\'s surprise attack on Pearl Harbor brings America into WWII—and seals Japan\'s fate.' },
            'p10-25': { title: 'The Pacific Turns', description: 'Five Minutes at Midway. American dive bombers sink four Japanese carriers in five minutes, reversing the tide of the Pacific War.' },
            'p10-27': { title: 'The Longest Day', description: 'Fortress Europe Falls. 150,000 Allied troops storm Normandy\'s beaches—the largest amphibious invasion in history begins the liberation of Europe.' },
            'p10-31': { title: 'The Bomb', description: 'The Final Weapon. Hiroshima and Nagasaki end WWII and begin a new era where humanity can destroy itself—war\'s ultimate evolution.' },
            'p12-27': { title: 'War Returns to Europe', description: 'The Post-Cold War Illusion Ends. Russia\'s invasion of Ukraine shatters decades of peace, returning great power war to the European continent.' }
        }
    },
    {
        id: 'pandemics-plagues',
        title: 'Pandemics & Plagues: The Invisible Enemies',
        description: 'Black Death to COVID: How disease shaped human civilization.',
        thumbnailUrl: 'images/pandemics-plagues-thumb.jpg',
        eventIds: [
            // Ancient Medicine & Plagues
            'cure-imhotep',     // First physician
            'cure-hippocrates', // Father of medicine
            'plague-athens',    // Plague of Athens
            'plague-antonine',  // Antonine Plague
            'plague-justinian', // Plague of Justinian
            // Medieval
            'p7-31',            // Black Death
            // Colonial Exchange
            'p8-8',             // Columbus (disease exchange)
            'plague-aztec',     // Smallpox Conquers Mexico
            'plague-london',    // Great Plague of London
            // Enlightenment & Scientific Revolution
            'cure-leeuwenhoek', // Microscope/microbes (1676)
            'p9-7',             // Smallpox Vaccine (1796)
            'cure-semmelweis',  // Handwashing saves lives (1847)
            'plague-cholera',   // Cholera & John Snow (1854)
            'cure-nightingale', // Florence Nightingale (1854)
            'cure-pasteur',     // Germ theory (1861)
            'cure-lister',      // Antiseptic surgery (1867)
            'cure-koch',        // TB bacteria (1882)
            // Industrial Era
            'plague-yellow',    // Yellow Fever & Panama
            'plague-typhoid',   // Typhoid Mary
            'cure-flu',         // Spanish Flu
            'cure-insulin',     // Insulin discovered
            'cure-penicillin',  // Penicillin
            // Modern Era
            'plague-who',       // World Health Organization
            'cure-dna',         // DNA structure
            'cure-polio',       // Polio Vaccine
            'cure-transplant',  // Heart Transplant
            'cure-smallpox-end',// Eradication of Smallpox
            'cure-hiv',         // HIV/AIDS
            'plague-sars',      // SARS
            'cure-genome',      // Human Genome
            'plague-ebola',     // Ebola
            'plague-antibiotic',// Antibiotic Resistance
            'p12-26',           // COVID-19
            'cure-mrna'         // mRNA Vaccines
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('plague-')),
        overrides: {
            'p7-31': { title: 'The Black Death', description: 'A Third of Europe Dies. Bubonic plague kills 75-200 million, shattering feudalism and the Church\'s authority—a restart button for Western civilization.' },
            'p8-8': { title: 'The Columbian Exchange', description: 'Biological Collision. Columbus doesn\'t just bring ships—he brings smallpox, measles, and typhus that will kill 90% of Native Americans.' },
            'p9-7': { title: 'The First Vaccine', description: 'Humanity Fights Back. Jenner proves cowpox protects against smallpox, launching the vaccine era that will save billions of lives.' },
            'cure-flu': { title: 'The Great Pandemic', description: 'More Deadly Than War. Spanish flu kills 50-100 million in 1918-1919—more than WWI—spreading faster than any disease in history.' },
            'cure-penicillin': { title: 'The Mold That Saves', description: 'Accidents Change History. Fleming notices mold killing bacteria, accidentally discovering antibiotics—the most important medical advance of the 20th century.' },
            'cure-hiv': { title: 'The Modern Plague', description: 'A New Kind of Enemy. HIV kills 36 million and transforms medicine, activism, and attitudes toward sexuality and disease forever.' },
            'p12-26': { title: 'COVID-19: The World Stops', description: 'The Invisible Siege. A novel coronavirus circles the globe in weeks, locking billions indoors in the largest disruption to daily life since WWII.' }
        }
    },
    {
        id: 'women-history',
        title: 'Women Who Changed History',
        description: 'From Cleopatra to Curie: The hidden half of human achievement.',
        thumbnailUrl: 'images/women-history-thumb.jpg',
        eventIds: [
            // Ancient Era
            'women-hatshepsut',   // 1479 BCE - Pharaoh
            'women-nefertiti',    // 1350 BCE - Queen
            'women-sappho',       // 610 BCE - Poet
            'women-cleopatra',    // 51 BCE - Last Pharaoh
            'women-boudica',      // 60 CE - Celtic Queen
            'women-hypatia',      // 400 CE - Philosopher
            // Medieval Era
            'women-wu',           // 690 CE - Chinese Emperor
            'women-murasaki',     // 1000 CE - First Novelist
            'women-eleanor',      // 1137 CE - Queen x2
            'women-hildegard',    // 1150 CE - Polymath
            'women-christine',    // 1405 CE - First Feminist Writer
            'women-joan',         // 1429 CE - Maid of Orléans
            // Early Modern
            'p8-22',              // 1558 CE - Elizabeth I
            'women-catherine',    // 1762 CE - Catherine the Great
            'women-olympe',       // 1791 CE - Rights of Woman
            // 19th Century
            'ai-lovelace',        // 1843 CE - Ada Lovelace
            'women-tubman',       // 1850 CE - Underground Railroad
            'women-sojourner',    // 1851 CE - Ain't I a Woman
            'cure-nightingale',   // 1854 CE - Florence Nightingale
            'women-suffrage',     // 1893 CE - NZ First
            'women-curie',        // 1898 CE - Marie Curie
            // 20th Century
            'women-pankhurst',    // 1913 CE - Suffragette
            'women-earhart',      // 1932 CE - Aviator
            'women-beauvoir',     // 1949 CE - Second Sex
            'women-parks',        // 1955 CE - Civil Rights
            'women-valentina',    // 1963 CE - First Woman in Space
            'women-thatcher',     // 1979 CE - Iron Lady
            'women-bhutto',       // 1988 CE - First Muslim PM
            // 21st Century
            'women-merkel',       // 2005 CE - Chancellor
            'women-malala'        // 2012 CE - Youngest Nobel
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('women-')),
        overrides: {
            'p8-22': { title: 'The Virgin Queen', description: 'Gloriana. She refused marriage, defeated the Armada, and ruled for 45 years—making England a global power through sheer force of will.' },
            'cure-nightingale': { title: 'The Lady with the Lamp', description: 'Data Saves Lives. She didn\'t just nurse soldiers—she proved with statistics that sanitation, not medicine, was the cure.' },
            'ai-lovelace': { title: 'The Prophet of Code', description: 'The First Programmer. While men saw a calculator, Ada Lovelace saw a universal machine that could compose music and manipulate symbols—a century ahead of her time.' }
        }
    },
    {
        id: 'trade-empires',
        title: 'Empires of Trade',
        description: 'Silk Road to Amazon: How commerce connected and conquered the world.',
        thumbnailUrl: 'images/trade-empires-thumb.jpg',
        eventIds: [
            // Ancient Trade
            'trade-obsidian',     // 7000 BCE - First long-distance trade
            'trade-bronze',       // 3000 BCE - Bronze age routes
            'trade-phoenicia',    // 1200 BCE - Phoenician merchants
            'money-lydia',        // 630 BCE - First coins
            // Classical Era
            'p7-4',               // 100 CE - Silk Roads
            'trade-rome-china',   // 166 CE - Rome meets China
            // Medieval Networks
            'trade-vikings',      // 800 CE - Viking trade
            'trade-venice',       // 1200 CE - Rise of Venice
            'p7-28',              // 1271 CE - Marco Polo
            'trade-hanseatic',    // 1350 CE - Hanseatic League
            'money-medici',       // 1397 CE - Medici banking
            // Age of Exploration
            'p8-8',               // 1492 CE - Columbian Exchange
            'p8-10',              // 1498 CE - Da Gama reaches India
            'trade-eic',          // 1600 CE - English East India Co
            'trade-voc',          // 1602 CE - Dutch East India Co
            'trade-slave',        // 1619 CE - Atlantic Slave Trade
            'money-tulip',        // 1637 CE - Tulip Mania
            'trade-tea',          // 1662 CE - Tea Trade
            'money-boe',          // 1694 CE - Bank of England
            // Industrial Era
            'p9-4',               // 1760 CE - Industrial Revolution
            'trade-suez',         // 1869 CE - Suez Canal
            'trade-standard',     // 1870 CE - Standard Oil
            'money-gold',         // 1870 CE - Gold Standard
            'trade-panama',       // 1914 CE - Panama Canal
            // Modern Era
            'trade-gatt',         // 1947 CE - GATT
            'trade-container',    // 1956 CE - Shipping container
            'trade-amazon',       // 1994 CE - Amazon
            'trade-wto',          // 1995 CE - WTO
            'trade-alibaba',      // 1999 CE - Alibaba
            'trade-crisis'        // 2021 CE - Supply chain crisis
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('trade-')),
        overrides: {
            'p7-4': { title: 'The Silk Roads', description: 'Trade Routes to Everywhere. From Rome to China, goods and ideas flow along 4,000 miles of desert and mountain—the internet of the ancient world.' },
            'p7-28': { title: 'Marco Polo\'s Journey', description: 'The Merchant Who Opened the East. A Venetian teenager spends 24 years in China, then writes a book that makes Europeans dream of Asia\'s riches.' },
            'p8-10': { title: 'Da Gama Reaches India', description: 'The Spice Route Conquered. Portugal reaches India by sea, making the Silk Road obsolete and beginning the age of European colonialism.' },
            'p9-4': { title: 'Industrial Revolution', description: 'Factory World. Steam, iron, and cotton transform England, then the world—production explodes and trade becomes global.' }
        }
    },
    {
        id: 'power-trip',
        title: 'Power Trip',
        description: 'Fire, Oil, Atom, Fusion: The energy cravings that built (and burn) the world.',
        thumbnailUrl: 'images/power-trip-thumb.jpg',
        eventIds: [
            // Fire & Muscle Era
            'power-fire',         // 400,000 BCE - Control of fire
            'power-hearth',       // 12,000 BCE - Permanent hearth
            'power-lamp',         // 3000 BCE - Oil lamp
            'power-waterwheel',   // 300 BCE - Water wheel
            'power-windmill',     // 900 CE - Persian windmill
            // Coal & Steam
            'power-coal',         // 1600 CE - Coal age begins
            'power-newcomen',     // 1712 CE - First steam engine
            'power-watt',         // 1765 CE - Improved steam engine
            'power-railway',      // 1830 CE - Railway age
            // Oil & Electricity
            'power-oil',          // 1859 CE - First oil well
            'power-dynamo',       // 1866 CE - Dynamo
            'power-internal',     // 1876 CE - Internal combustion
            'power-edison',       // 1882 CE - Pearl Street Station
            'power-tesla',        // 1888 CE - AC motor
            'power-modelt',       // 1908 CE - Model T
            'power-hoover',       // 1936 CE - Hoover Dam
            // Nuclear Age
            'power-fermi',        // 1942 CE - First nuclear reaction
            'power-hiroshima',    // 1945 CE - Atomic bombs
            'power-solar',        // 1954 CE - First solar cell
            'power-obninsk',      // 1954 CE - First nuclear plant
            'power-opec',         // 1973 CE - Oil embargo
            'power-tmi',          // 1979 CE - Three Mile Island
            'power-chernobyl',    // 1986 CE - Chernobyl
            // Renewable Dawn
            'power-windfarm',     // 1991 CE - Offshore wind
            'power-grid',         // 2003 CE - Blackout
            'power-tesla-ev',     // 2008 CE - Tesla Roadster
            'power-fukushima',    // 2011 CE - Fukushima
            'power-paris',        // 2015 CE - Paris Agreement
            'power-iter',         // 2020 CE - ITER construction
            'power-fusion'        // 2022 CE - Fusion ignition
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('power-')),
        overrides: {}
    },
    {
        id: 'rights-revolutions',
        title: 'Rights & Revolutions',
        description: 'Magna Carta to UN Declaration: How humanity invented freedom.',
        thumbnailUrl: 'images/rights-revolutions-thumb.jpg',
        eventIds: [
            // Ancient Seeds
            'rights-hammurabi',   // 1754 BCE - First written law
            'rights-cyrus',       // 539 BCE - Cyrus Cylinder
            'p6-21',              // 508 BCE - Athenian Democracy
            'rights-roman-law',   // 450 BCE - Twelve Tables
            'rights-stoics',      // 300 BCE - Natural Law
            // Medieval Constraints
            'p7-27',              // 1215 CE - Magna Carta
            // Enlightenment Ideas
            'rights-habeas',      // 1679 - Habeas Corpus
            'rights-locke',       // 1689 - Locke's Treatises
            'rights-bill-1689',   // 1689 - English Bill of Rights
            'rights-montesquieu', // 1748 - Spirit of Laws
            'rights-rousseau',    // 1762 - Social Contract
            // Age of Revolutions
            'p9-2',               // 1776 - Declaration of Independence
            'rights-us-const',    // 1787 - US Constitution
            'p9-4',               // 1789 - French Revolution
            'p9-5',               // 1789 - Rights of Man
            'rights-us-bill',     // 1791 - US Bill of Rights
            'rights-wollstonecraft', // 1792 - Rights of Woman
            'p9-10',              // 1804 - Haitian Independence
            'p9-13',              // 1810 - Latin American Revolts
            // Expansion of Rights
            'rights-abolition-uk', // 1833 - British Abolition
            'p9-20',              // 1848 - Spring of Nations
            'rights-emancipation', // 1863 - Emancipation
            'rights-13th',        // 1865 - 13th Amendment
            'rights-labor',       // 1886 - Haymarket
            'women-suffrage',     // 1893 - Women's Suffrage
            'rights-naacp',       // 1909 - NAACP
            'rights-gandhi',      // 1930 - Salt March
            // Universal Rights
            'rights-un-decl',     // 1948 - UN Declaration
            'rights-civil64',     // 1964 - Civil Rights Act
            'rights-mandela'      // 1994 - Mandela elected
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('rights-')),
        overrides: {
            'p6-21': { title: 'Birth of Democracy', description: 'Thinking Power. Cleisthenes flips the pyramid of governance, suggesting that authority derives from the consensus of citizens, not the decree of gods or kings.' },
            'p7-27': { title: 'Magna Carta', description: 'The King Bows to Law. English barons force King John to accept limits on royal power—the first crack in absolute monarchy.' },
            'p9-2': { title: 'Declaration of Independence', description: 'We Hold These Truths. Jefferson\'s pen transforms Enlightenment philosophy into revolutionary action—all men are created equal.' },
            'p9-4': { title: 'The Bastille Falls', description: 'The People\'s Earthquake. Paris erupts, the prison falls, and the divine right of kings dies in the streets.' },
            'p9-5': { title: 'Declaration of the Rights of Man', description: 'Liberty, Equality, Fraternity. The French Assembly proclaims that rights are universal—not privileges granted by kings.' },
            'p9-10': { title: 'Haiti Rises', description: 'Slaves Become Citizens. The only successful slave revolution in history—Toussaint L\'Ouverture\'s army defeats Napoleon and creates the first free Black republic.' },
            'p9-13': { title: 'Latin America Awakens', description: 'Bolívar\'s Dream. From Mexico to Argentina, colonial subjects become citizens as revolution sweeps an entire hemisphere.' },
            'p9-20': { title: 'Spring of Nations', description: 'The Year of Revolution. From Paris to Budapest, ordinary people demand constitutions, parliaments, and freedom—most fail, but the seeds are planted.' }
        }
    },
    {
        id: 'climate-chronicle',
        title: 'The Climate Chronicle',
        description: 'Ice ages to global warming: The planet\'s story and humanity\'s impact.',
        thumbnailUrl: 'images/climate-chronicle-thumb.jpg',
        eventIds: [
            // Hellfire Earth
            'climate-hadean',     // 4.5 BY - Molten Earth
            'cosmic-24',          // 4.4 BY - Magma Ocean Cools
            'cosmic-25',          // 4.4 BY - First Oceans
            'climate-lhb',        // 3.9 BY - Late Heavy Bombardment
            'climate-methane',    // 3.5 BY - Methane Atmosphere
            // Great Oxygenation
            '23',                 // 2.4 BY - Great Oxygenation Event
            '24',                 // 2.3 BY - Huronian Glaciation
            // Snowball Earth
            'climate-rodinia',    // 1.1 BY - Rodinia
            'climate-snowball1',  // 720 MY - Sturtian
            'climate-snowball2',  // 650 MY - Marinoan
            'climate-cambrian-warm', // 540 MY - Cambrian Hothouse
            // Extinctions & Climate
            'p2-9',               // 444 MY - Ordovician Extinction
            'p2-13',              // 375 MY - Devonian Extinction
            'p2-14',              // 359 MY - Coal Swamps
            'climate-pangaea',    // 300 MY - Pangaea
            'climate-siberian',   // 252 MY - Siberian Traps
            'p2-19',              // 252 MY - Great Dying
            'p2-24',              // 66 MY - Chicxulub
            'p2-25',              // 66 MY - K-Pg Extinction
            'climate-petm',       // 56 MY - PETM
            // Ice Age Cycles
            'climate-antarctic',  // 34 MY - Antarctic Ice Sheet
            '45',                 // 35 MY - Global Cooling
            'climate-milankovitch', // 2.6 MY - Ice Age Cycles
            '65',                 // 120,000 - Last Ice Age
            'climate-younger-dryas', // 10,800 BCE - Younger Dryas
            '73',                 // 10,000 BCE - Holocene
            // Anthropocene
            'power-coal',         // 1600 - Coal Age
            'climate-arrhenius',  // 1896 - CO2 Theory
            'climate-keeling',    // 1958 - Keeling Curve
            'climate-ozone',      // 1985 - Ozone Hole
            'climate-ipcc',       // 1988 - IPCC
            'p12-6',              // 1997 - Kyoto
            'p12-21',             // 2015 - Paris Agreement
            'climate-cop21',      // 2016 - Paris Enters Force
            'climate-1.5c'        // 2023 - 1.5°C Breached
        ],
        connections: CONNECTIONS.filter(c => c.id.startsWith('climate-')),
        overrides: {
            'cosmic-24': { title: 'Magma Ocean Cools', description: 'The Crust Forms. After 100 million years of bombardment, Earth\'s surface finally cools enough for a solid crust to form—the first step toward habitability.' },
            'cosmic-25': { title: 'First Oceans', description: 'Water World. As temperatures drop below boiling, vapor condenses into rain that falls for millennia, filling the basins with Earth\'s first oceans.' },
            '23': { title: 'Great Oxygenation Event', description: 'The Oxygen Catastrophe. Cyanobacteria flood the atmosphere with a toxic gas: oxygen. Most life dies. The survivors evolve to breathe the poison.' },
            '24': { title: 'Huronian Glaciation', description: 'First Ice Age. Oxygen destroys atmospheric methane, collapsing the greenhouse effect. Ice sheets spread to the equator for 300 million years.' },
            'p2-9': { title: 'Ordovician Ice Age Extinction', description: 'The First Reset. Gondwana drifts over the South Pole, triggering glaciation. Tropical seas freeze. 85% of species vanish.' },
            'p2-13': { title: 'Devonian Extinction', description: 'Ocean Death. Massive plants may have stripped CO2 from the air, cooling the planet. Ocean oxygen plummets. Most marine life disappears.' },
            'p2-14': { title: 'Carboniferous Coal Swamps', description: 'Buried Sunshine. Giant forests grow and die, but no bacteria can digest wood yet. Dead trees pile up, burying carbon that will become coal—and climate time bombs.' },
            'p2-19': { title: 'The Great Dying', description: 'The Volcanic Apocalypse. Siberian eruptions release enough CO2 to warm Earth 10°C. Oceans acidify. 96% of marine species die. Life nearly ends.' },
            'p2-24': { title: 'Chicxulub Impact', description: 'The Asteroid Arrives. 10km of rock hits Yucatan at 20km/sec. Megatsunamis, wildfires, then nuclear winter. The dinosaurs\' 165-million-year reign ends.' },
            'p2-25': { title: 'K-Pg Extinction', description: 'Impact Winter. Debris blocks the sun. Temperatures plunge. Photosynthesis stops. 75% of species die, including all non-avian dinosaurs.' },
            '45': { title: 'Global Cooling', description: 'The Long Chill. India\'s collision with Asia pushes up the Himalayas, drawing down CO2. Earth enters its current icehouse phase.' },
            '65': { title: 'Last Ice Age Begins', description: 'The Ice Returns. Orbital variations trigger glaciation. Ice sheets 3km thick cover Canada and Europe. Sea levels drop 120m.' },
            '73': { title: 'Holocene Begins', description: 'The Goldilocks Climate. Ice retreats. Stable, warm climate enables agriculture. Human civilization becomes possible—all in a 10,000-year window.' },
            'power-coal': { title: 'The Coal Age Dawns', description: 'Burning Ancient Sunshine. Humans begin mining coal on industrial scales, releasing carbon buried 300 million years ago. The Anthropocene begins.' },
            'p12-6': { title: 'Kyoto Protocol', description: 'First Global Climate Treaty. Industrial nations commit to cut emissions. The US never ratifies. Canada withdraws. But a precedent is set.' },
            'p12-21': { title: 'Paris Agreement', description: 'The World Commits. 196 nations agree to limit warming to 2°C, aiming for 1.5°C. Whether actions match words remains to be seen.' }
        }
    }
];

