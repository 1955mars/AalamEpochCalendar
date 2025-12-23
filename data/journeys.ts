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
    { id: 'tts-32', fromEventId: 'modern-5', toEventId: 'space-goddard', type: 'influenced' } // Wright Bros -> Rockets
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
    }
];
