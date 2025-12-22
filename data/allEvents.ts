
import { TimelineEvent } from '../types';

export const ALL_EVENTS: TimelineEvent[] = [

  // --- PHASE 1: Cosmic & Primordial Earth ---
  {
    id: 'phase-1-marker',
    year: '13.8 Billion Years Ago',
    yearNumeric: -13800000000,
    title: 'Cosmic & Primordial Earth',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-1-marker.jpg',
    phase: 'Phase 1',
    type: 'phase_marker'
  },
  {
    id: 'cosmic-1',
    year: '13.8 Billion Years Ago',
    yearNumeric: -13800000000,
    title: 'Planck Epoch',
    description: 'The very first instant of time (0 to 10^-43 seconds) where the known laws of physics break down and gravity is as strong as other forces.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-1.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-2',
    year: '13.8 Billion Years Ago',
    yearNumeric: -13800000000, // Fractional difference
    title: 'Cosmic Inflation',
    description: 'Space expands faster than light (10^-36 seconds), smoothing out the universe and planting the quantum seeds for future galaxies.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-2.jpg',
    phase: 'Phase 1'
  },
  {
    id: '1',
    year: '13.8 Billion Years Ago',
    yearNumeric: -13800000000,
    title: 'The Hot Big Bang',
    description: 'Inflation ends, reheating the universe into a seething plasma of quark-gluon soup. The "Bang" as we traditionally know it.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/1.jpg',
    phase: 'Phase 1'
  },
  {
    id: '2',
    year: '13.78 Billion Years Ago',
    yearNumeric: -13780000000,
    title: 'Formation of First Subatomic Particles',
    description: 'Quarks and leptons condense out of the super-hot early plasma, eventually leading to protons and neutrons.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/2.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-3',
    year: '3 Minutes After Big Bang',
    yearNumeric: -13780000000, // Effectively same for sorting
    title: 'Primordial Nucleosynthesis',
    description: 'The first three minutes. The universe acts as a cosmic fusion reactor, forging the hydrogen and helium that will fuel every star for the next 100 trillion years.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-3.jpg',
    phase: 'Phase 1'
  },
  {
    id: '3',
    year: '380,000 Years After Big Bang',
    yearNumeric: -13770000000, // 380k is negligible vs BYA

    title: 'Recombination (First Light)',
    description: 'The Fog Lifts. Light breaks free from matter, creating the afterglow we see today as the CMB. The universe becomes transparent.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/3.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-5',
    year: '380k - 150 Million Years AB',
    yearNumeric: -13600000000, // Rough estimate

    title: 'The Cosmic Dark Ages',
    description: 'The Long Wait. A billion years of silence. The universe is filled with neutral fog, waiting for gravity to pull the first stars into existence.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-5.jpg',
    phase: 'Phase 1'
  },
  {
    id: '4',
    year: '13.5 Billion Years Ago',
    yearNumeric: -13500000000,
    title: 'First Stars (Population III)',
    description: 'The first stars, massive and pure hydrogen/helium, ignite, ending the Dark Ages.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/4.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-7',
    year: '13.4 Billion Years Ago',
    yearNumeric: -13400000000,
    title: 'Epoch of Reionization',
    description: 'UV light from the first stars burns through the neutral hydrogen fog, making the universe transparent to light again.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-7.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-8',
    year: '13.3 Billion Years Ago',
    yearNumeric: -13300000000,
    title: 'First Supernovas',
    description: 'The massive first stars die in violent explosions, enriching the cosmos with the first heavy elements like Carbon and Oxygen.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-8.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-9',
    year: '13.2 Billion Years Ago',
    yearNumeric: -13200000000,

    title: 'Formation of First Black Holes',
    description: 'Gravity\'s Victory. Stars collapse into points of infinite density, punching holes in spacetime that will anchor the galaxies to come.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-9.jpg',
    phase: 'Phase 1'
  },
  {
    id: '5',
    year: '13.4 Billion Years Ago', // Keeping existing date
    yearNumeric: -13400000000,
    title: 'The First Galaxies',
    description: 'Gravity causes vast clouds of gas and the earliest stars to coalesce, forming the first small, irregular protogalaxies.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/5.jpg',
    phase: 'Phase 1'
  },
  {
    id: '6',
    year: '13.0 Billion Years Ago',
    yearNumeric: -13000000000,
    title: 'Galactic Mergers',
    description: 'Protogalaxies begin to collide and merge, slowly building the massive spiral and elliptical galaxies we see today.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/6.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-12',
    year: '12.0 Billion Years Ago',
    yearNumeric: -12000000000,
    title: 'Birth of the Galactic Halo',
    description: 'The Old Guard. The very first generations of stars form a spherical shell around the galaxy, watching the disk slowly take shape inside.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-12.jpg',
    phase: 'Phase 1'
  },
  {
    id: '7',
    year: '11.0 Billion Years Ago',
    yearNumeric: -11000000000,
    title: 'The Milky Way Forms',
    description: 'The primordial hydrogen/helium cloud collapses and begins spinning, shaping the characteristic disk.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/7.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-14',
    year: '10.0 Billion Years Ago',
    yearNumeric: -10000000000,
    title: 'Peak Star Formation (Cosmic Noon)',
    description: 'The universe reaches its peak rate of star birth. Most stars in the universe form during this vibrant epoch.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-14.jpg',
    phase: 'Phase 1'
  },
  {
    id: '8',
    year: '8.8 Billion Years Ago',
    yearNumeric: -8800000000,
    title: 'Milky Way Disk Complete',
    description: 'The main spiral structure of the Milky Way becomes stabilized.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/8.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-15',
    year: '6.0 Billion Years Ago',
    yearNumeric: -6000000000,
    title: 'Dark Energy Domination',
    description: 'The expansion of the universe begins to accelerate again as Dark Energy overcomes the pull of gravity.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-15.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-16',
    year: '4.7 Billion Years Ago',
    yearNumeric: -4700000000,
    title: 'Pre-Solar Molecular Cloud',
    description: 'A cold, giant cloud of gas and dust floats in the Milky Way, waiting for a trigger to collapse.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-16.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-17',
    year: '4.6 Billion Years Ago',
    yearNumeric: -4600000000,
    title: 'Supernova Trigger',
    description: 'A nearby supernova shockwave hits the cloud, causing it to collapse and concentrate material for our sun.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-17.jpg',
    phase: 'Phase 1'
  },
  {
    id: '9',
    year: '4.6 Billion Years Ago',
    yearNumeric: -4600000000,

    title: 'Formation of the Solar System',
    description: 'Order from Chaos. A spinning disk of dust coagulates into a family of planets, with our proto-sun acting as the fiery anchor.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/9.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-19',
    year: '4.59 Billion Years Ago',
    yearNumeric: -4590000000,
    title: 'T-Tauri Sun',
    description: 'The young Sun enters a violent phase, blasting intense solar winds that strip away lighter gases from the inner system.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-19.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-20',
    year: '4.58 Billion Years Ago',
    yearNumeric: -4580000000,
    title: 'The Grand Tack',
    description: 'Jupiter migrates inward toward the Sun, clearing out material, before Saturn pulls it back out, shaping the solar system.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-20.jpg',
    phase: 'Phase 1'
  },
  {
    id: '10',
    year: '4.57 Billion Years Ago',
    yearNumeric: -4570000000,
    title: 'Planetary Accretion Begins',
    description: 'Dust particles stick together to form planetesimals, the seeds of Earth and other planets.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/10.jpg',
    phase: 'Phase 1'
  },
  {
    id: '11',
    year: '4.54 Billion Years Ago',
    yearNumeric: -4540000000,
    title: "Earth's Core Formation",
    description: 'Differentiation occurs: dense iron and nickel sink to the center of the molten Earth.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/11.jpg',
    phase: 'Phase 1'
  },
  {
    id: '12',
    year: '4.53 Billion Years Ago',
    yearNumeric: -4530000000,
    title: 'The Moon-Forming Impact',
    description: 'Theia collides with Earth, creating the Moon.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/12.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-24',
    year: '4.51 Billion Years Ago',
    yearNumeric: -4510000000,
    title: 'Cooling of the Magma Ocean',
    description: 'Earth radiates heat into space, allowing the molten surface to cool and form the first solid crust.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-24.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-25',
    year: '4.4 Billion Years Ago',
    yearNumeric: -4400000000,
    title: 'Formation of First Oceans',
    description: 'As Earth cools below the boiling point, water vapor in the atmosphere condenses and rains down for centuries.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-25.jpg',
    phase: 'Phase 1'
  },
  {
    id: '15',
    year: '4.1 Billion Years Ago',
    yearNumeric: -4099999999,
    title: 'Late Heavy Bombardment',
    description: 'Asteroids pummel the inner planets.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/15.jpg',
    phase: 'Phase 1'
  },
  {
    id: 'cosmic-27',
    year: '4.0 Billion Years Ago',
    yearNumeric: -4000000000,
    title: 'Delivery of Organics',
    description: 'Comets and meteorites deliver water, amino acids, and other building blocks of life to the early Earth.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cosmic-27.jpg',
    phase: 'Phase 1'
  },
  {
    id: '16',
    year: '4.0 Billion Years Ago',
    yearNumeric: -4000000000,
    title: 'End of the Hadean Eon',
    description: 'Marks the point at which the first continental crust rocks are preserved in the geological record, signaling the beginning of the Archean.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/16.jpg',
    phase: 'Phase 1'
  },
  {
    id: '17',
    year: '3.9 Billion Years Ago',
    yearNumeric: -3900000000,
    title: 'Formation of the First Continents',
    description: 'Lighter, silicic rocks float on the denser mantle, forming small, unstable protocontinents that are highly volcanic.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/17.jpg',
    phase: 'Phase 1'
  },
  {
    id: '18',
    year: '3.8 Billion Years Ago',
    yearNumeric: -3800000000,
    title: 'First Evidence of Life',
    description: 'Indirect chemical evidence (carbon isotopic signatures) in ancient rocks suggests the presence of the earliest, single-celled life forms (prokaryotes).',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/18.jpg',
    phase: 'Phase 1'
  },
  {
    id: '19',
    year: '3.5 Billion Years Ago',
    yearNumeric: -3500000000,
    title: 'Oldest Microfossils (Stromatolites)',
    description: 'Direct fossil evidence appears in the form of stromatolites, layered mounds created by sheets of early cyanobacteria.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/19.jpg',
    phase: 'Phase 1'
  },
  {
    id: '20',
    year: '3.4 Billion Years Ago',
    yearNumeric: -3400000000,
    title: 'Anoxygenic Photosynthesis',
    description: 'Life learns to eat sunlight. This energy revolution allows microbes to thrive without scavenging, though it will be millions of years before they release Oxygen.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/20.jpg',
    phase: 'Phase 1'
  },
  {
    id: '21',
    year: '3.0 Billion Years Ago',
    yearNumeric: -3000000000,
    title: 'Stabilization of Continental Crust',
    description: "The scattered protocontinents begin to coalesce into the first stable cratons, forming the ancient cores of today's continents.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/21.jpg',
    phase: 'Phase 1'
  },
  {
    id: '22',
    year: '2.5 Billion Years Ago',
    yearNumeric: -2500000000,
    title: 'Beginning of the Proterozoic Eon',
    description: 'The second phase of the Precambrian starts, marked by the rapid rise of atmospheric oxygen and the assembly of supercontinents.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/22.jpg',
    phase: 'Phase 1'
  },
  {
    id: '23',
    year: '2.4 Billion Years Ago',
    yearNumeric: -2400000000,
    title: 'The Great Oxidation Event (GOE)',
    description: "Oxygen-producing cyanobacteria proliferate, causing atmospheric oxygen levels to rise sharply, resulting in Earth's first ice age (Huronian Glaciation).",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/23.jpg',
    phase: 'Phase 1'
  },
  {
    id: '24',
    year: '2.3 Billion Years Ago',
    yearNumeric: -2300000000,
    title: 'Huronian Glaciation',
    description: 'The first and longest ice age, possibly triggered by the GOE which removed atmospheric methane (a strong greenhouse gas).',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/24.jpg',
    phase: 'Phase 1'
  },
  {
    id: '25',
    year: '2.0 Billion Years Ago',
    yearNumeric: -2000000000,
    title: 'Banded Iron Formations (BIFs) Peak',
    description: 'Rust-colored sedimentary rock layers form as rising ocean oxygen reacts with dissolved iron, clearing the way for free oxygen accumulation.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/25.jpg',
    phase: 'Phase 1'
  },
  {
    id: '26',
    year: '1.8 Billion Years Ago',
    yearNumeric: -1800000000,
    title: 'Oldest Eukaryote Fossils',
    description: 'The first fossils of complex cells (with a nucleus and organelles) appear, representing a massive leap toward multicellular life.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/26.jpg',
    phase: 'Phase 1'
  },
  {
    id: '27',
    year: '1.2 Billion Years Ago',
    yearNumeric: -1200000000,
    title: 'The Invention of Sexual Reproduction',
    description: 'The Great Remix. Life stops cloning itself and starts shuffling the genetic deck with every generation, turbocharging evolution\'s ability to adapt and innovate.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/27.jpg',
    phase: 'Phase 1'
  },
  {
    id: '28',
    year: '1.0 Billion Years Ago',
    yearNumeric: -1000000000,
    title: 'Supercontinent Rodinia Forms',
    description: "The first well-documented supercontinent assembles, containing most of Earth's landmass, disrupting ocean circulation and climate.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/28.jpg',
    phase: 'Phase 1'
  },
  {
    id: '29',
    year: '850 Million Years Ago',
    yearNumeric: -850000000,
    title: 'Rodinia Begins to Break Up',
    description: 'Rifting begins in Rodinia, triggering massive volcanic activity and initiating cycles of extreme global glaciation.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/29.jpg',
    phase: 'Phase 1'
  },
  {
    id: '30',
    year: '720 Million Years Ago',
    yearNumeric: -720000000,
    title: '"Snowball Earth" Glaciation (Cryogenian)',
    description: 'Massive global ice events (Sturtian and Marinoan) possibly cover the planet from pole to pole, only to be ended by extreme volcanism.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/30.jpg',
    phase: 'Phase 1'
  },
  {
    id: '31',
    year: '635 Million Years Ago',
    yearNumeric: -635000000,
    title: 'The Ediacaran Biota',
    description: 'Following the Snowball Earth periods, the first large, complex, soft-bodied multicellular organisms appear, preceding the Cambrian Explosion.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/31.jpg',
    phase: 'Phase 1'
  },

  // --- PHASE 2: The Age of Ancient Life ---
  {
    id: 'phase-2-marker',
    year: '541 Million Years Ago',
    yearNumeric: -541000000,
    title: 'The Age of Ancient Life',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-2-marker.jpg',
    phase: 'Phase 2',
    type: 'phase_marker'
  },
  {
    id: 'p2-1',
    year: '541 Million Years Ago',
    yearNumeric: -541000000,

    title: 'The Cambrian Explosion',
    description: 'The Biological Big Bang. In a geological blink, life invents eyes, armor, and predators. The template for every modern animal is drawn here.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-1.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-2',
    year: '530 Million Years Ago',
    yearNumeric: -530000000,
    title: 'Earliest Vertebrates',
    description: 'The first ancestors of all backboned animals (fish, amphibians, humans) appear, exemplified by Myllokunmingia.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-2.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-3',
    year: '521 Million Years Ago',
    yearNumeric: -521000000,
    title: 'Rise of the Trilobites',
    description: 'Trilobites develop sophisticated crystal eyes and hard exoskeletons, becoming the dominant life form of the ocean floor.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-3.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-4',
    year: '508 Million Years Ago',
    yearNumeric: -508000000,
    title: 'The Burgess Shale Biota',
    description: 'A burst of bizarre evolutionary experiments, including the five-eyed Opabinia and the apex predator Anomalocaris.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-4.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-5',
    year: '485 Million Years Ago',
    yearNumeric: -485000000,
    title: 'The Great Ordovician Biodiversity',
    description: 'Life expands further; the first coral reefs form, and cephalopods (ancestors of squid/octopus) become top predators.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-5.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-6',
    year: '470 Million Years Ago',
    yearNumeric: -470000000,
    title: 'Plants Colonize Land',
    description: 'Primitive mosses and liverworts leave the water, turning the barren, rocky continents green for the first time.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-6.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-7',
    year: '444 Million Years Ago',
    yearNumeric: -444000000,

    title: 'Ordovician-Silurian Extinction',
    description: 'The First Reset. Ice sheets murder the tropical oceans, wiping out 85% of species and proving that life is fragile in the face of climate change.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-7.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-8',
    year: '430 Million Years Ago',
    yearNumeric: -430000000,
    title: 'Life Recovers (The Silurian)',
    description: 'Seas warm again; the first jawed fish appear, and scorpions (Eurypterids) grow to massive sizes.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-8.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-9',
    year: '420 Million Years Ago',
    yearNumeric: -420000000,
    title: 'First Breath on Land',
    description: 'Life invades the dry world. Pioneering arthropods drag the complexity of the ocean onto barren rock, transforming the continents into living ecosystems.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-9.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-10',
    year: '400 Million Years Ago',
    yearNumeric: -400000000,
    title: 'The Devonian "Age of Fish"',
    description: 'Armored fish (Placoderms) like Dunkleosteus dominate the oceans with bone-crushing jaws.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-10.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-11',
    year: '385 Million Years Ago',
    yearNumeric: -385000000,
    title: 'The First Forests',
    description: 'Plants evolve wood and leaves (Archaeopteris), creating the first tall forests and drastically altering the atmosphere.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-11.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-12',
    year: '375 Million Years Ago',
    yearNumeric: -375000000,
    title: 'Tiktaalik & The Transition',
    description: 'Lobe-finned fish develop wrist-like bones, allowing them to push up in shallow water—the precursor to walking.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-12.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-13',
    year: '365 Million Years Ago',
    yearNumeric: -365000000,
    title: 'First Amphibians',
    description: 'Vertebrates like Acanthostega finally haul themselves onto land, though they must return to water to reproduce.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-13.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-14',
    year: '359 Million Years Ago',
    yearNumeric: -359000000,
    title: 'Late Devonian Extinction',
    description: 'A mysterious extinction event, possibly caused by ocean anoxia from nutrient runoff, resets the evolutionary clock.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-14.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-15',
    year: '320 Million Years Ago',
    yearNumeric: -320000000,
    title: 'Carboniferous Coal Swamps',
    description: 'Oxygen levels peak (35%); giant insects (dragonflies with 2ft wingspans) and massive millipedes rule the humid swamps.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-15.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-16',
    year: '312 Million Years Ago',
    yearNumeric: -312000000,
    title: 'The Amniotic Egg',
    description: 'Reptiles evolve the hard-shelled egg, breaking the bond with water and allowing life to conquer the interior of continents.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-16.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-17',
    year: '299 Million Years Ago',
    yearNumeric: -299000000,
    title: 'Rise of the Synapsids',
    description: 'Before dinosaurs, mammal-like reptiles (like the sail-backed Dimetrodon) become the apex predators on land.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-17.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-18',
    year: '280 Million Years Ago',
    yearNumeric: -280000000,
    title: 'Supercontinent Pangaea',
    description: "Earth's landmasses smash together to form a single supercontinent, creating vast, dry interior deserts.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-18.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-19',
    year: '252 Million Years Ago',
    yearNumeric: -252000000,
    title: 'The Great Dying',
    description: 'The Permian-Triassic Extinction (volcanic eruptions in Siberia) kills 96% of marine life; the closest life comes to total erasure.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-19.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-20',
    year: '240 Million Years Ago',
    yearNumeric: -240000000,
    title: 'The Triassic Recovery',
    description: 'Life slowly rebounds; the first marine reptiles (Ichthyosaurs) take to the seas, resembling dolphins.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-20.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-21',
    year: '233 Million Years Ago',
    yearNumeric: -233000000,
    title: 'Dawn of the Dinosaurs',
    description: 'Small, bipedal dinosaurs like Eoraptor appear, initially overshadowed by larger crocodilian relatives.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-21.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-22',
    year: '201 Million Years Ago',
    yearNumeric: -201000000,
    title: 'Triassic-Jurassic Extinction',
    description: 'Volcanic activity splits Pangaea; the competition is wiped out, clearing the stage for Dinosaur dominance.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-22.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-23',
    year: '155 Million Years Ago',
    yearNumeric: -155000000,
    title: 'Age of Giants (Jurassic)',
    description: 'Dinosaurs reach their peak size; long-necked Sauropods (Brachiosaurus) and plate-backed Stegosaurus roam the earth.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-23.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-24',
    year: '150 Million Years Ago',
    yearNumeric: -150000000,
    title: 'The First Birds',
    description: 'Archaeopteris bridges the gap between reptile and bird, developing feathers for flight while keeping its teeth.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-24.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-25',
    year: '125 Million Years Ago',
    yearNumeric: -125000000,
    title: 'The Flower Revolution',
    description: 'Angiosperms (flowering plants) appear; their partnership with insects transforms the world from green/brown to colorful.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-25.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-26',
    year: '90 Million Years Ago',
    yearNumeric: -90000000,
    title: 'Monsters of the Deep',
    description: 'The Cretaceous Interior Seaway is ruled by massive marine reptiles like Mosasaurus and giant turtles.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-26.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-27',
    year: '68 Million Years Ago',
    yearNumeric: -68000000,
    title: 'The Tyrant King',
    description: 'The evolution of Tyrannosaurus Rex and Triceratops; the most famous dinosaurs walk the earth in its final days.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-27.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-28',
    year: '66 Million Years Ago',
    yearNumeric: -66000000,
    title: 'The Sky Falls (Impact)',
    description: 'A 10km wide asteroid strikes the Yucatán Peninsula (Chicxulub), releasing the energy of billions of atomic bombs.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-28.jpg',
    phase: 'Phase 2'
  },
  {
    id: 'p2-29',
    year: '66 Million Years Ago ',
    yearNumeric: -66000000,
    title: 'The End of an Era',
    description: 'The K-Pg Extinction event. Nuclear winter, firestorms, and the death of 75% of species, including all non-avian dinosaurs.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p2-29.jpg',
    phase: 'Phase 2'
  },

  // --- PHASE 3: Hominid Evolution ---
  {
    id: 'phase-3-marker',
    year: '65 Million Years Ago',
    yearNumeric: -65000000,
    title: 'Hominid Evolution',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-3-marker.jpg',
    phase: 'Phase 3',
    type: 'phase_marker'
  },
  {
    id: '41',
    year: '65 Million Years Ago',
    yearNumeric: -65000000,
    title: 'The Paleogene Recovery',
    description: 'Following the K-Pg extinction, surviving mammals rapidly diversify, filling ecological niches left vacant by the non-avian dinosaurs.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/41.jpg',
    phase: 'Phase 3'
  },
  {
    id: '42',
    year: '60 Million Years Ago',
    yearNumeric: -60000000,
    title: 'Rise of the Primates',
    description: 'Early primates evolve, characterized by traits like grasping hands, forward-facing eyes, and larger brains, setting the stage for human evolution.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/42.jpg',
    phase: 'Phase 3'
  },
  {
    id: '45',
    year: '35 Million Years Ago',
    yearNumeric: -35000000,
    title: 'Oligocene Cooling',
    description: 'Global climate cools, leading to the expansion of grasslands and a reduction in forests, which eventually drives primates to adapt to open environments.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/45.jpg',
    phase: 'Phase 3'
  },
  {
    id: '46',
    year: '25 Million Years Ago',
    yearNumeric: -25000000,
    title: 'Apes and Old World Monkeys Diverge',
    description: 'The evolutionary lineage leading to modern humans separates from the lineage leading to Old World monkeys in Africa.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/46.jpg',
    phase: 'Phase 3'
  },
  {
    id: '47',
    year: '7 Million Years Ago',
    yearNumeric: -7000000,
    title: 'First Hominin Divergence',
    description: 'The lineage of hominins (bipedal apes) separates from the lineage leading to modern chimpanzees; Sahelanthropus tchadensis may represent one of the earliest hominins.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/47.jpg',
    phase: 'Phase 3'
  },
  {
    id: '48',
    year: '6 Million Years Ago',
    yearNumeric: -6000000,
    title: 'Evolution of Consistent Bipedalism',
    description: 'Early hominins like Orrorin tugenensis begin walking habitually on two legs, a defining feature that frees the hands for tool use and carrying.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/48.jpg',
    phase: 'Phase 3'
  },
  {
    id: '49',
    year: '4.4 Million Years Ago',
    yearNumeric: -4400000,
    title: 'Ardipithecus ramidus',
    description: 'This hominin species exhibits a mix of ape-like traits (grasping feet) and hominin traits (bipedal walking), suggesting life in a wooded environment.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/49.jpg',
    phase: 'Phase 3'
  },
  {
    id: '50',
    year: '4.2 Million Years Ago',
    yearNumeric: -4200000,
    title: 'The Australopithecines Emerge',
    description: 'The genus Australopithecus appears, characterized by fully committed bipedalism, though still possessing a relatively small brain.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/50.jpg',
    phase: 'Phase 3'
  },
  {
    id: '51',
    year: '3.7 Million Years Ago',
    yearNumeric: -3700000,
    title: 'Laetoli Footprints',
    description: 'Three early hominins (likely Australopithecus afarensis) leave a trail of volcanic ash footprints in Tanzania, offering clear evidence of ancient bipedal walking.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/51.jpg',
    phase: 'Phase 3'
  },
  {
    id: '52',
    year: '3.2 Million Years Ago',
    yearNumeric: -3200000,
    title: '"Lucy" Discovered',
    description: 'The partial skeleton of Australopithecus afarensis is found in Ethiopia, providing key insight into the size and locomotion of this famous species.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/52.jpg',
    phase: 'Phase 3'
  },
  {
    id: '53',
    year: '2.5 Million Years Ago',
    yearNumeric: -2500000,
    title: 'Oldowan Tool Technology',
    description: 'The earliest widespread stone tool industry begins, characterized by simple stone cores and sharp flakes used for butchering animals and processing plants.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/53.jpg',
    phase: 'Phase 3'
  },
  {
    id: '54',
    year: '2.4 Million Years Ago',
    yearNumeric: -2400000,
    title: 'Genus Homo Appears',
    description: 'The first members of the genus Homo (Homo habilis—"handy man") emerge in East Africa, identified by larger brains and sophisticated tool use.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/54.jpg',
    phase: 'Phase 3'
  },
  {
    id: '55',
    year: '2.0 Million Years Ago',
    yearNumeric: -2000000,
    title: 'The Great African Aridification',
    description: 'A major climate shift causes grasslands to expand further, driving hominins to rely more on meat and highly mobile hunting strategies.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/55.jpg',
    phase: 'Phase 3'
  },
  {
    id: '56',
    year: '1.9 Million Years Ago',
    yearNumeric: -1900000,
    title: 'Homo erectus Evolves',
    description: 'A new hominin emerges, characterized by a large brain, a tall, modern body structure, and the ability to travel vast distances.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/56.jpg',
    phase: 'Phase 3'
  },
  {
    id: '57',
    year: '1.8 Million Years Ago',
    yearNumeric: -1800000,
    title: 'The First Major Out-of-Africa Migration',
    description: 'Homo erectus leaves Africa and rapidly spreads across Asia (Java, China) and Europe, demonstrating unprecedented adaptability and travel capability.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/57.jpg',
    phase: 'Phase 3'
  },
  {
    id: '58',
    year: '1.6 Million Years Ago',
    yearNumeric: -1600000,
    title: 'Acheulean Hand Axes',
    description: 'Homo erectus develops more refined, symmetric, pear-shaped stone tools (hand axes), representing a significant cognitive leap in planning and execution.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/58.jpg',
    phase: 'Phase 3'
  },
  {
    id: '59',
    year: '1.0 Million Years Ago',
    yearNumeric: -1000000,
    title: 'Mastery of Fire Begins',
    description: 'Evidence suggests Homo erectus begins to control fire, providing warmth, protection, and the ability to cook food, which aids in brain development.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/59.jpg',
    phase: 'Phase 3'
  },
  {
    id: '60',
    year: '800,000 Years Ago',
    yearNumeric: -800000,
    title: 'Human Expansion into Europe',
    description: 'Early hominins establish a durable presence in Europe, adapting to colder climates using fire and robust hunting techniques.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/60.jpg',
    phase: 'Phase 3'
  },
  {
    id: '61',
    year: '600,000 Years Ago',
    yearNumeric: -600000,
    title: 'Divergence of Neanderthals and Denisovans',
    description: 'The common ancestor of Homo sapiens splits from the lineage that will eventually become Neanderthals (Europe) and Denisovans (Asia).',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/61.jpg',
    phase: 'Phase 3'
  },
  {
    id: '62',
    year: '400,000 Years Ago',
    yearNumeric: -400000,
    title: 'Use of Wooden Spears',
    description: 'Hominin sites reveal ancient wooden spears (Schöningen spears), demonstrating sophisticated hunting technology that predates modern humans.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/62.jpg',
    phase: 'Phase 3'
  },
  {
    id: '63',
    year: '300,000 Years Ago',
    yearNumeric: -300000,
    title: 'Emergence of Archaic Homo sapiens',
    description: 'The earliest fossils considered anatomically modern Homo sapiens appear in Morocco, showing the gradual transition toward our species.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/63.jpg',
    phase: 'Phase 3'
  },
  {
    id: '64',
    year: '200,000 Years Ago',
    yearNumeric: -200000,
    title: 'The Deepest Female Mitochondrial Ancestor',
    description: 'Mitochondrial Eve, the most recent common ancestor from whom all living humans trace their maternal line, is estimated to have lived around this time in Africa.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/64.jpg',
    phase: 'Phase 3'
  },
  {
    id: '65',
    year: '120,000 Years Ago',
    yearNumeric: -120000,
    title: 'Beginning of the Last Ice Age (Glacial Period)',
    description: 'Massive ice sheets expand across the continents, driving complex human migration patterns and requiring further adaptive evolution.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/65.jpg',
    phase: 'Phase 3'
  },
  {
    id: '66',
    year: '70,000 Years Ago',
    yearNumeric: -70000,
    title: 'The "Great Leap Forward" (Cognitive Revolution)',
    description: 'A potential burst in cognitive abilities leads to complex language, symbolism, ritual burial, and sophisticated art and tools.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/66.jpg',
    phase: 'Phase 3'
  },
  {
    id: '67',
    year: '60,000 Years Ago',
    yearNumeric: -60000,
    title: 'Second Major Out-of-Africa Migration',
    description: 'Anatomically modern Homo sapiens (our species) migrate out of Africa via the Arabian Peninsula, rapidly displacing older hominin populations.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/67.jpg',
    phase: 'Phase 3'
  },
  {
    id: '68',
    year: '50,000 Years Ago',
    yearNumeric: -50000,
    title: 'Settlement of Australia',
    description: 'Humans cross the sea barriers and colonize Sahul (the combined landmass of Australia and New Guinea), representing a major seafaring achievement.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/68.jpg',
    phase: 'Phase 3'
  },
  {
    id: '69',
    year: '40,000 Years Ago',
    yearNumeric: -40000,
    title: 'Upper Paleolithic Art Flourishes',
    description: 'The height of Ice Age cave painting begins in Europe, featuring stunning, detailed depictions of bison, horses, and human hands (e.g., Chauvet Cave).',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/69.jpg',
    phase: 'Phase 3'
  },
  {
    id: '70',
    year: '30,000 Years Ago',
    yearNumeric: -30000,
    title: 'Extinction of Neanderthals',
    description: 'Neanderthal populations decline and vanish from the fossil record, likely due to a combination of climate change and competition with Homo sapiens.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/70.jpg',
    phase: 'Phase 3'
  },
  {
    id: '71',
    year: '16,000 Years Ago',
    yearNumeric: -16000,
    title: 'Initial Settlement of the Americas',
    description: 'Humans cross the Beringia land bridge (connecting Asia and North America) or travel along the coast, becoming the continent\'s first settlers.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/71.jpg',
    phase: 'Phase 3'
  },
  {
    id: '72',
    year: '12,000 Years Ago',
    yearNumeric: -12000,
    title: 'Clovis Culture in North America',
    description: 'A distinctive and widespread North American culture, characterized by unique fluted stone projectile points, appears and dominates the hunting landscape.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/72.jpg',
    phase: 'Phase 3'
  },
  {
    id: '73',
    year: '10,000 BCE',
    yearNumeric: -10000,
    title: 'End of the Last Ice Age (Holocene Begins)',
    description: 'The Earth enters the current, relatively warm and stable interglacial period, setting the stage for the development of agriculture and settled civilization.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/73.jpg',
    phase: 'Phase 3'
  },

  // --- PHASE 4: The Neolithic Revolution ---
  {
    id: 'phase-4-marker',
    year: '10,000 BCE',
    yearNumeric: -10000,
    title: 'The Neolithic Revolution',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-4-marker.jpg',
    phase: 'Phase 4',
    type: 'phase_marker'
  },
  {
    id: 'p4-1', year: '10,000 BCE',
    yearNumeric: -10000, title: 'The Dawn of the Holocene', description: 'The most recent glacial period ends, leading to a stable, warmer, and wetter climate worldwide.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-1.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-2', year: '9,600 BCE',
    yearNumeric: -9600, title: 'First Cereal Cultivation', description: 'Early intentional cultivation of wild einkorn and emmer wheat begins in the Fertile Crescent of Southwest Asia.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-2.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-3', year: '9,500 BCE',
    yearNumeric: -9500, title: 'Permanent Settlement at Jericho', description: 'The site of Jericho is established as one of the world\'s oldest continuously inhabited proto-cities.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-3.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-4', year: '9,000 BCE',
    yearNumeric: -9000, title: 'Göbekli Tepe Complex', description: 'Before agriculture or cities, hunter-gatherers united to build this massive temple, proving that *belief*—not just food—drove the rise of civilization.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-4.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-5', year: '9,000 BCE',
    yearNumeric: -9000, title: 'Domestication of the Dog', description: 'The gray wolf is widely accepted to have been domesticated, providing protection and aid in hunting.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-5.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-6', year: '8,800 BCE',
    yearNumeric: -8800, title: 'Pre-Pottery Neolithic A', description: 'This period sees the construction of round, semi-subterranean houses and communal food storage.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-6.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-7', year: '8,500 BCE',
    yearNumeric: -8500, title: 'Domestication of the Goat', description: 'Wild goats are domesticated in the Zagros Mountains, marking the first major livestock for milk and meat.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-7.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-8', year: '8,000 BCE',
    yearNumeric: -8000, title: 'Wall of Jericho', description: 'A massive stone wall is constructed around Jericho, likely for defense or flood control.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-8.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-9', year: '8,000 BCE',
    yearNumeric: -8000, title: 'Rice Domestication', description: 'The taming of rice in the Yangtze valley creates the caloric foundation for the dense populations of East Asia, shaping millennia of culture.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-9.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-10', year: '7,700 BCE',
    yearNumeric: -7700, title: 'Domesticated Wheat', description: 'Farmers develop wheat strains that do not easily shatter upon ripening, enabling efficient harvest.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-10.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-11', year: '7,500 BCE',
    yearNumeric: -7500, title: 'Domestication of Cattle and Pig', description: 'Wild aurochs and boars are domesticated into cattle and pigs, completing major Neolithic livestock.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-11.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-12', year: '7,200 BCE',
    yearNumeric: -7200, title: 'Plastered Skulls of \'Ain Ghazal', description: 'Human skulls are adorned with plaster and shells, representing a form of ancestor veneration.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-12.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-13', year: '7,000 BCE',
    yearNumeric: -7000, title: 'Pre-Pottery Neolithic B', description: 'Architecture shifts to rectilinear, multi-room structures, indicating complex social organization.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-13.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-14', year: '7,000 BCE',
    yearNumeric: -7000, title: 'Settlement of Çatalhöyük', description: 'Living on the Roof. Humans experiment with density, creating a hive-city without streets where ancestors sleep beneath the floorboards.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-14.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-15', year: '7,000 BCE',
    yearNumeric: -7000, title: 'Early Flax Textiles', description: 'Evidence of processing flax into linen fibers for woven cloth appears in the Levant.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-15.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-16', year: '6,500 BCE',
    yearNumeric: -6500, title: 'Farming Spreads to Europe', description: 'Agricultural practices begin to diffuse from Anatolia into Southeastern Europe.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-16.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-17', year: '6,200 BCE',
    yearNumeric: -6200, title: 'First Known Copper Smelting', description: 'Earliest evidence of extracting copper from ore marks the start of the Chalcolithic.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-17.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-18', year: '6,000 BCE',
    yearNumeric: -6000, title: 'Maize Cultivation in Mesoamerica', description: 'Farmers in Mexico begin cultivating teosinte, the wild ancestor of maize.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-18.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-19', year: '6,000 BCE',
    yearNumeric: -6000, title: 'Earliest Irrigation', description: 'Simple earthen canals and controlled diversion of river water begin in Mesopotamia.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-19.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-20', year: '6,000 BCE',
    yearNumeric: -6000, title: 'Sahara Aridification', description: 'The "Green Sahara" ends, forcing populations to congregate along the Nile River.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-20.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-21', year: '5,500 BCE',
    yearNumeric: -5500, title: 'First Evidence of Cheese Making', description: 'Milk processing and cheese production appear in Poland to preserve nutrients.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-21.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-22', year: '5,400 BCE',
    yearNumeric: -5400, title: 'Halaf Culture Pottery', description: 'Northern Mesopotamia produces elaborate, brightly painted pottery that is widely traded.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-22.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-23', year: '5,000 BCE',
    yearNumeric: -5000, title: 'Invention of the Plow', description: 'The earliest scratch plow drawn by oxen dramatically increases cultivated land area.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-23.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-24', year: '5,000 BCE',
    yearNumeric: -5000, title: 'Megalithic Construction in Europe', description: 'Large stone monuments and tombs begin to be erected in Portugal and France.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-24.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-25', year: '4,500 BCE',
    yearNumeric: -4500, title: 'Ubaid Period in Sumer', description: 'Foundation for first city-states laid in Mesopotamia with large temple complexes.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-25.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-26', year: '4,000 BCE',
    yearNumeric: -4000, title: 'Invention of Potter\'s Wheel', description: 'Mass Production. Humans automate creation, turning distinct crafts into tradable commodities and laying the groundwork for industry.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-26.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-27', year: '4,000 BCE',
    yearNumeric: -4000, title: 'Use of Wool', description: 'Sheep are selectively bred to maximize wool for widespread clothing production.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-27.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-28', year: '3,800 BCE',
    yearNumeric: -3800, title: 'The Sweet Track', description: 'Construction of an ancient timber causeway in England, one of the oldest engineered roads.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-28.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-29', year: '3,500 BCE',
    yearNumeric: -3500, title: 'The Invention of Writing', description: 'In Uruk, accountants need to track grain. Their clay scratchings evolve into cuneiform, allowing humanity to offload memory onto matter for the first time.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-29.jpg', phase: 'Phase 4'
  },
  {
    id: 'p4-30', year: '3,200 BCE',
    yearNumeric: -3200, title: 'The Bronze Age Begins', description: 'By alloying copper with tin, humans create a metal hard enough for empire. New weapons and tools spark the first arms races and state-level warfare.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-30.jpg', phase: 'Phase 4'
  },

  // --- PHASE 5: The Bronze Age ---
  {
    id: 'phase-5-marker',
    year: '3100 BCE',
    yearNumeric: -3100,
    title: 'The Bronze Age',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-5-marker.jpg',
    phase: 'Phase 5',
    type: 'phase_marker'
  },
  {
    id: 'p5-1', year: '3100 BCE',
    yearNumeric: -3100, title: 'Unification of Egypt', description: 'Upper and Lower Egypt are unified, establishing the centralized Pharaonic state.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-1.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-2', year: '3000 BCE',
    yearNumeric: -3000, title: 'First Cities in Sumer', description: 'Urban centers like Uruk become true cities with massive walls and temples.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-2.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-3', year: '2900 BCE',
    yearNumeric: -2900, title: 'Rise of Cuneiform', description: 'Pictographic writing in Mesopotamia develops into formalized cuneiform script.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-3.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-4', year: '2800 BCE',
    yearNumeric: -2800, title: 'Royal Tombs of Ur', description: 'Elaborate burials reveal massive human sacrifices and exquisite craftsmanship.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-4.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-5', year: '2700 BCE',
    yearNumeric: -2700, title: 'Reign of Gilgamesh', description: 'The semi-mythical King of Uruk, later immortalized in the Epic of Gilgamesh.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-5.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-6', year: '2686 BCE',
    yearNumeric: -2686, title: 'Old Kingdom of Egypt', description: 'Marked by political stability and monumental architecture, the "Age of the Pyramids".', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-6.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-7', year: '2630 BCE',
    yearNumeric: -2630, title: 'Djoser\'s Step Pyramid', description: 'Imhotep designs the first true pyramid at Saqqara for Pharaoh Djoser.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-7.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-8', year: '2500 BCE',
    yearNumeric: -2500, title: 'Indus Valley Civilization', description: 'The Grid Masters. While others built monuments to kings, they built sewers and straight streets, prioritizing public health over royal ego.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-8.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-9', year: '2500 BCE',
    yearNumeric: -2500, title: 'Great Pyramid of Giza', description: 'Pharaoh Khufu commissions the largest stone structure ever built.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-9.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-10', year: '2400 BCE',
    yearNumeric: -2400, title: 'Development of Sanskrit', description: 'Early forms of the Indo-Aryan language begin to develop in the Indian subcontinent.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-10.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-11', year: '2334 BCE',
    yearNumeric: -2334, title: 'Sargon of Akkad', description: 'The blueprint of imperialism. Sargon proves that distinct city-states can be ruled by a single will, creating the world\'s first multi-ethnic empire.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-11.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-12', year: '2112 BCE',
    yearNumeric: -2112, title: 'Neo-Sumerian Renaissance', description: 'Ur III dynasty leads to a brief but highly centralized revival of Sumerian culture.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-12.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-13', year: '2000 BCE',
    yearNumeric: -2000, title: 'Collapse of Indus Valley', description: 'Harappan cities decline due to environmental changes and drying rivers.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-13.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-14', year: '1900 BCE',
    yearNumeric: -1900, title: 'Minoan Civilization Rises', description: 'Crete establishes palace centers like Knossos with vibrant frescos and trade.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-14.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-15', year: '1850 BCE',
    yearNumeric: -1850, title: 'Caral Supe Civilization', description: 'Earliest major complex society in the Americas develops in Peru.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-15.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-16', year: '1792 BCE',
    yearNumeric: -1792, title: 'Reign of Hammurabi', description: 'Law Written in Stone. Justice moves from the whim of the king to the public square, where the weak can *technically* appeal against the strong.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-16.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-17', year: '1750 BCE',
    yearNumeric: -1750, title: 'Writing Spreads to China', description: 'Early forms of writing appear in China, precursors to oracle bone script.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-17.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-18', year: '1700 BCE',
    yearNumeric: -1700, title: 'Hyksos Invasion of Egypt', description: 'Foreign rulers use superior bronze weaponry and chariots to control northern Egypt.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-18.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-19', year: '1600 BCE',
    yearNumeric: -1600, title: 'Mycenaean Civilization', description: 'The First Greeks. A warrior society of citadel-builders whose exploits would become the myths of the Iliad and the Odyssey.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-19.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-20', year: '1600 BCE',
    yearNumeric: -1600, title: 'The Hittite Kingdom', description: 'Chariots of Iron. They mastered ironworking and the war chariot, creating a military dominance that challenged Egypt and reshaped warfare.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-20.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-21', year: '1600 BCE',
    yearNumeric: -1600, title: 'Shang Dynasty', description: 'First confirmed Chinese dynasty emerges along the Yellow River.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-21.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-22', year: '1550 BCE',
    yearNumeric: -1550, title: 'New Kingdom of Egypt', description: 'Egypt expels the Hyksos and reaches its peak imperial power.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-22.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-23', year: '1500 BCE',
    yearNumeric: -1500, title: 'Cult of Aten', description: 'Pharaoh Akhenaten initiates a brief shift toward worship of a single sun disk.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-23.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-24', year: '1500 BCE',
    yearNumeric: -1500, title: 'Olmec Culture Emerges', description: 'The Olmec flourish in Mesoamerica, known for colossal stone heads.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-24.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-25', year: '1500 BCE',
    yearNumeric: -1500, title: 'Vedic Period in India', description: 'Indo-Aryan groups bring early Vedic religion and Sanskrit to the subcontinent.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-25.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-26', year: '1450 BCE',
    yearNumeric: -1450, title: 'Eruption of Thera', description: 'Massive volcanic eruption devastates the Minoan civilization.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-26.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-27', year: '1400 BCE',
    yearNumeric: -1400, title: 'Height of Mycenaean Power', description: 'Mycenaean culture dominates the Aegean trade network.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-27.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-28', year: '1350 BCE',
    yearNumeric: -1350, title: 'Amarna Letters', description: 'Diplomatic correspondence reveals the complex political world of the Late Bronze Age.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-28.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-29', year: '1300 BCE',
    yearNumeric: -1300, title: 'Moses and the Exodus', description: 'Traditional dating for the Exodus of the Israelites from Egypt.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-29.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-30', year: '1274 BCE',
    yearNumeric: -1274, title: 'Battle of Kadesh', description: 'Ramesses II fights the Hittites in the earliest battle with a surviving peace treaty.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-30.jpg', phase: 'Phase 5'
  },
  {
    id: 'p5-31', year: '1200 BCE',
    yearNumeric: -1200, title: 'Bronze Age Collapse', description: 'The First Apocalypse. Trade networks snap, cities burn, and literacy vanishes. A brutal reminder that progress is not a straight line.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p5-31.jpg', phase: 'Phase 5'
  },

  // --- PHASE 6: The Iron Age & Classical Age ---
  {
    id: 'phase-6-marker',
    year: '1200 BCE',
    yearNumeric: -1200,
    title: 'The Iron Age & Classical Age',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-6-marker.jpg',
    phase: 'Phase 6',
    type: 'phase_marker'
  },
  {
    id: 'p6-1', year: '1200 BCE',
    yearNumeric: -1200, title: 'Iron Technology Spreads', description: 'Iron production replaces bronze as the primary metal for tools and weapons.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-1.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-2', year: '1150 BCE',
    yearNumeric: -1150, title: 'Greek Dark Ages Begin', description: 'Greece enters a period of decline and depopulation; Linear B writing is lost.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-2.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-3', year: '1046 BCE',
    yearNumeric: -1046, title: 'Zhou Dynasty Established', description: 'The Zhou introduce the concept of the "Mandate of Heaven" in China.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-3.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-4', year: '1000 BCE',
    yearNumeric: -1000, title: 'Phoenician Alphabet', description: 'Phoenicians develop an alphabetic script, the basis of modern Western alphabets.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-4.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-5', year: '957 BCE',
    yearNumeric: -957, title: 'Solomon Builds First Temple', description: 'King Solomon centralizes Yahweh worship in Jerusalem.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-5.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-6', year: '911 BCE',
    yearNumeric: -911, title: 'Rise of Neo-Assyrian Empire', description: 'The War Machine. Assyria turns conquest into a science, creating the world\'s first professional standing army and a terrifying model of empire.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-6.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-7', year: '800 BCE',
    yearNumeric: -800, title: 'Greek Polis Emerges', description: 'Independent city-states like Athens and Sparta develop.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-7.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-8', year: '776 BCE',
    yearNumeric: -776, title: 'First Olympic Games', description: 'Recorded Games in Olympia mark the start of a pan-Hellenic identity.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-8.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-9', year: '753 BCE',
    yearNumeric: -753, title: 'Founding of Rome', description: 'Legendary founding of Rome by Romulus and Remus.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-9.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-10', year: '722 BCE',
    yearNumeric: -722, title: 'Fall of Kingdom of Israel', description: 'Assyria conquers Israel, leading to the "Ten Lost Tribes".', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-10.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-11', year: '700 BCE',
    yearNumeric: -700, title: 'Homer Composes Epics', description: 'The Iliad and Odyssey become the foundation of Greek literature.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-11.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-12', year: '612 BCE',
    yearNumeric: -612, title: 'Fall of Nineveh', description: 'Babylonians and Medes sack the Assyrian capital, ending the empire.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-12.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-13', year: '600 BCE',
    yearNumeric: -600, title: 'Rise of Mahajanapadas', description: 'Sixteen major kingdoms emerge in North India.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-13.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-14', year: '594 BCE',
    yearNumeric: -594, title: 'Solon\'s Reforms', description: 'Athenian statesman Solon lays the groundwork for democracy.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-14.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-15', year: '586 BCE',
    yearNumeric: -586, title: 'Destruction of First Temple', description: 'Nebuchadnezzar II destroys the Temple and exiles the Jewish elite.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-15.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-16', year: '563 BCE',
    yearNumeric: -563, title: 'Birth of Buddha', description: 'Siddhartha Gautama is born, founder of Buddhism.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-16.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-17', year: '551 BCE',
    yearNumeric: -551, title: 'Birth of Confucius', description: 'Chinese philosopher Kong Fuzi is born.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-17.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-18', year: '550 BCE',
    yearNumeric: -550, title: 'Achaemenid Empire Founded', description: 'The First Superpower. Cyrus builds an empire of tolerance, proving that diverse cultures can be ruled by a single king without brute force.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-18.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-19', year: '539 BCE',
    yearNumeric: -539, title: 'Cyrus Frees the Jews', description: 'Cyrus allows Jewish exiles to return to Jerusalem.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-19.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-20', year: '509 BCE',
    yearNumeric: -509, title: 'Founding of Roman Republic', description: 'Rome expels its king and establishes a Senate-led government.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-20.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-21', year: '508 BCE',
    yearNumeric: -508, title: 'Athenian Democracy', description: 'Thinking Power. Cleisthenes flips the pyramid of governance, suggesting that authority derives from the consensus of citizens, not the decree of gods or kings.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-21.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-22', year: '490 BCE',
    yearNumeric: -490, title: 'Battle of Marathon', description: 'Greek forces defeat the first Persian invasion.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-22.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-23', year: '480 BCE',
    yearNumeric: -480, title: 'Battle of Salamis', description: 'Greek naval victory ensures the survival of the Hellenic world.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-23.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-24', year: '475 BCE',
    yearNumeric: -475, title: 'Warring States Period', description: 'Seven major states vie for control of China.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-24.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-25', year: '447 BCE',
    yearNumeric: -447, title: 'Parthenon Construction', description: 'Work starts on the Parthenon in Athens.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-25.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-26', year: '431 BCE',
    yearNumeric: -431, title: 'Peloponnesian War', description: 'Conflict between Athens and Sparta ends Athens\' Golden Age.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-26.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-27', year: '399 BCE',
    yearNumeric: -399, title: 'Death of Socrates', description: 'Socrates is executed in Athens for impiety.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-27.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-28', year: '336 BCE',
    yearNumeric: -336, title: 'Alexander the Great Rises', description: 'Alexander begins his campaign to conquer the Persian Empire.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-28.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-29', year: '221 BCE',
    yearNumeric: -221, title: 'Unification of China', description: 'Qin Shi Huang becomes the First Emperor, beginning the Imperial era.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-29.jpg', phase: 'Phase 6'
  },
  {
    id: 'p6-30', year: '27 BCE',
    yearNumeric: -27, title: 'End of Roman Republic', description: 'Octavian becomes Augustus, establishing the Roman Empire.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-30.jpg', phase: 'Phase 6'
  },

  // --- PHASE 7: The Post-Classical World ---
  {
    id: 'phase-7-marker',
    year: '6 CE',
    yearNumeric: 6,
    title: 'The Post-Classical World',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-7-marker.jpg',
    phase: 'Phase 7',
    type: 'phase_marker'
  },
  {
    id: 'p7-1', year: '6 CE',
    yearNumeric: 6, title: 'Roman Annexation of Judea', description: 'Rome formalizes rule over Judea, fueling tensions.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-1.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-2', year: '29 CE',
    yearNumeric: 29, title: 'Crucifixion of Jesus', description: 'Foundational event of Christianity.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-2.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-3', year: '70 CE',
    yearNumeric: 70, title: 'Destruction of Second Temple', description: 'Roman forces destroy the Temple in Jerusalem.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-3.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-4', year: '100 CE',
    yearNumeric: 100, title: 'Height of Silk Roads', description: 'Trade routes connect Rome, Parthia, India, and China.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-4.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-5', year: '117 CE',
    yearNumeric: 117, title: 'Roman Empire Peak', description: 'Empire reaches maximum extent under Trajan.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-5.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-6', year: '220 CE',
    yearNumeric: 220, title: 'Fall of Han Dynasty', description: 'Ends unified rule in China, beginning fragmentation.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-6.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-7', year: '313 CE',
    yearNumeric: 313, title: 'Edict of Milan', description: 'Constantine legalizes Christianity in the Roman Empire.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-7.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-8', year: '330 CE',
    yearNumeric: 330, title: 'Founding of Constantinople', description: 'Constantine dedicates new capital, shifting power east.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-8.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-9', year: '395 CE',
    yearNumeric: 395, title: 'Division of Roman Empire', description: 'Empire splits into Western and Eastern halves.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-9.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-10', year: '476 CE',
    yearNumeric: 476, title: 'Fall of Western Rome', description: 'The Light Dims. The central nervous system of Europe fails, fracturing the continent into a thousand feudal shards.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-10.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-11', year: '529 CE',
    yearNumeric: 529, title: 'Justinian\'s Code', description: 'Byzantine Emperor codifies Roman Law.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-11.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-12', year: '570 CE',
    yearNumeric: 570, title: 'Birth of Muhammad', description: 'Traditional date for birth of Islam\'s founder.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-12.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-13', year: '618 CE',
    yearNumeric: 618, title: 'Founding of Tang Dynasty', description: 'Golden Age begins in China.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-13.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-14', year: '622 CE',
    yearNumeric: 622, title: 'The Hijra', description: 'Migration to Medina marks start of Islamic calendar.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-14.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-15', year: '661 CE',
    yearNumeric: 661, title: 'Umayyad Caliphate', description: 'First major Islamic empire forms.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-15.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-16', year: '711 CE',
    yearNumeric: 711, title: 'Conquest of Iberia', description: 'Muslim forces conquer most of Spain and Portugal.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-16.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-17', year: '750 CE',
    yearNumeric: 750, title: 'Abbasid Caliphate', description: 'Capital shifts to Baghdad, ushering in Golden Age of scholarship.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-17.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-18', year: '793 CE',
    yearNumeric: 793, title: 'Raid on Lindisfarne', description: 'First recorded Viking attack in England.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-18.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-19', year: '800 CE',
    yearNumeric: 800, title: 'Charlemagne Crowned', description: 'Frankish King becomes "Emperor of the Romans".', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-19.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-20', year: '800 CE',
    yearNumeric: 800, title: 'Invention of Gunpowder', description: 'Alchemists in China create early gunpowder.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-20.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-21', year: '960 CE',
    yearNumeric: 960, title: 'Song Dynasty Founded', description: 'Period of technological and commercial growth in China.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-21.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-22', year: '1054 CE',
    yearNumeric: 1054, title: 'The Great Schism', description: 'Split between Eastern Orthodox and Roman Catholic Churches.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-22.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-23', year: '1066 CE',
    yearNumeric: 1066, title: 'Norman Conquest', description: 'William the Conqueror defeats the English at Hastings.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-23.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-24', year: '1095 CE',
    yearNumeric: 1095, title: 'First Crusade Called', description: 'Pope Urban II calls for reclamation of Holy Land.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-24.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-25', year: '1192 CE',
    yearNumeric: 1192, title: 'Kamakura Shogunate', description: 'Feudal era begins in Japan with military rule.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-25.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-26', year: '1206 CE',
    yearNumeric: 1206, title: 'Genghis Khan Unites Mongols', description: 'The Horse Lords. Khan stitches Asia and Europe together with blood and speed, creating the first true world system.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-26.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-27', year: '1215 CE',
    yearNumeric: 1215, title: 'Magna Carta', description: 'King John signs foundational document for rights.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-27.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-28', year: '1271 CE',
    yearNumeric: 1271, title: 'Marco Polo Travels', description: 'Venetian merchant begins journey to Asia.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-28.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-29', year: '1299 CE',
    yearNumeric: 1299, title: 'Ottoman Empire Founded', description: 'Osman I establishes empire that would replace Byzantium.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-29.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-30', year: '1324 CE',
    yearNumeric: 1324, title: 'Mansa Musa\'s Hajj', description: 'Mali Emperor showcases West African wealth.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-30.jpg', phase: 'Phase 7'
  },
  {
    id: 'p7-31', year: '1347 CE',
    yearNumeric: 1347, title: 'Black Death', description: 'The Great Leveler. The plague kills serf and lord alike, shattering the feudal system by making labor scarce and valuable.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-31.jpg', phase: 'Phase 7'
  },

  // --- PHASE 8: The Age of Exploration ---
  {
    id: 'phase-8-marker',
    year: '1405 CE',
    yearNumeric: 1405,
    title: 'The Age of Exploration',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-8-marker.jpg',
    phase: 'Phase 8',
    type: 'phase_marker'
  },
  {
    id: 'p8-1', year: '1405 CE',
    yearNumeric: 1405, title: 'Treasure Voyages', description: 'Zheng He leads massive Chinese naval expeditions.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-1.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-2', year: '1415 CE',
    yearNumeric: 1415, title: 'Capture of Ceuta', description: 'Portugal begins overseas expansion.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-2.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-3', year: '1440 CE',
    yearNumeric: 1440, title: 'Donation of Constantine Disproved', description: 'Renaissance textual criticism exposes forgery.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-3.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-4', year: '1450 CE',
    yearNumeric: 1450, title: 'The Printing Press', description: 'The Democratization of Memory. Gutenberg\'s movable type crashes the cost of knowledge, breaking the elite\'s monopoly on truth and fueling the Reformation.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-9.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-5', year: '1453 CE',
    yearNumeric: 1453, title: 'Fall of Constantinople', description: 'The Walls Fall. The final vestige of Rome collapses, sending Greek scholars west and sparking the intellectual fires of the Renaissance.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-5.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-6', year: '1478 CE',
    yearNumeric: 1478, title: 'Spanish Inquisition', description: 'Ferdinand and Isabella enforce orthodoxy.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-6.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-7', year: '1488 CE',
    yearNumeric: 1488, title: 'Dias Rounds Cape', description: 'Sea route from Atlantic to Indian Ocean found.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-7.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-8', year: '1492 CE',
    yearNumeric: 1492, title: 'Columbus Reaches Americas', description: 'The Great Collision. Two worlds that had been separate for millennia crash together, exchanging food, disease, and people in a biological revolution.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-8.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-9', year: '1494 CE',
    yearNumeric: 1494, title: 'Treaty of Tordesillas', description: 'Spain and Portugal divide non-European world.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-9.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-10', year: '1498 CE',
    yearNumeric: 1498, title: 'Da Gama Reaches India', description: 'Portugal secures direct spice trade route.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-10.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-11', year: '1503 CE',
    yearNumeric: 1503, title: 'Mona Lisa', description: 'Da Vinci completes High Renaissance masterpiece.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-11.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-12', year: '1509 CE',
    yearNumeric: 1509, title: 'Henry VIII King', description: 'Reign alters England\'s religious landscape.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-12.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-13', year: '1517 CE',
    yearNumeric: 1517, title: '95 Theses', description: 'The Fracture. One man\'s questions shatter the religious unity of Europe, launching centuries of war and the rise of individualism.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-13.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-14', year: '1519 CE',
    yearNumeric: 1519, title: 'Magellan Circumnavigation', description: 'First voyage around the world begins.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-14.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-15', year: '1521 CE',
    yearNumeric: 1521, title: 'Conquest of Aztecs', description: 'Cortés defeats Aztec Empire for Spain.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-15.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-16', year: '1526 CE',
    yearNumeric: 1526, title: 'Mughal Empire', description: 'Babur founds Islamic empire in India.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-16.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-17', year: '1533 CE',
    yearNumeric: 1533, title: 'Conquest of Incas', description: 'Pizarro captures Inca Empire.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-17.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-18', year: '1534 CE',
    yearNumeric: 1534, title: 'Church of England', description: 'Act of Supremacy makes King head of church.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-18.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-19', year: '1540 CE',
    yearNumeric: 1540, title: 'Jesuits Founded', description: 'Ignatius of Loyola starts order for Counter-Reformation.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-19.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-20', year: '1543 CE',
    yearNumeric: 1543, title: 'Copernican Theory', description: 'Dethroning Earth. We realize we are not the center of the stage, but just another rock orbiting a generic star.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-20.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-21', year: '1545 CE',
    yearNumeric: 1545, title: 'Council of Trent', description: 'Catholic Counter-Reformation begins.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-21.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-22', year: '1558 CE',
    yearNumeric: 1558, title: 'Elizabeth I Reign', description: 'Golden Age of England begins.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-22.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-23', year: '1588 CE',
    yearNumeric: 1588, title: 'Spanish Armada Defeated', description: 'English naval victory signals rise of power.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-23.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-24', year: '1600 CE',
    yearNumeric: 1600, title: 'British East India Co.', description: 'Foundation for British rule in India laid.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-24.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-25', year: '1603 CE',
    yearNumeric: 1603, title: 'Tokugawa Shogunate', description: 'Edo period begins in Japan.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-25.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-26', year: '1610 CE',
    yearNumeric: 1610, title: 'Sidereus Nuncius', description: 'Galileo supports Copernican model with telescope.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-26.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-27', year: '1618 CE',
    yearNumeric: 1618, title: 'Thirty Years\' War', description: 'Devastating religious conflict in Europe.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-27.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-28', year: '1644 CE',
    yearNumeric: 1644, title: 'Qing Dynasty', description: 'Manchus establish China\'s last dynasty.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-28.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-29', year: '1648 CE',
    yearNumeric: 1648, title: 'Peace of Westphalia', description: 'Treaties establish state sovereignty.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-29.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-30', year: '1687 CE',
    yearNumeric: 1687, title: 'Principia Mathematica', description: 'Newton establishes laws of motion.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-30.jpg', phase: 'Phase 8'
  },
  {
    id: 'p8-31', year: '1750 CE',
    yearNumeric: 1750, title: 'Enlightenment Peak', description: 'Intellectual movement promoting reason.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p8-31.jpg', phase: 'Phase 8'
  },

  // --- PHASE 9: The Age of Revolutions ---
  {
    id: 'phase-9-marker',
    year: '1765 CE',
    yearNumeric: 1765,
    title: 'The Age of Revolutions',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-9-marker.jpg',
    phase: 'Phase 9',
    type: 'phase_marker'
  },
  {
    id: 'p9-1', year: '1765 CE',
    yearNumeric: 1765, title: 'Improved Steam Engine', description: 'Watt perfects steam engine, driving Industrial Revolution.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-1.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-2', year: '1776 CE',
    yearNumeric: 1776, title: 'Declaration of Independence', description: 'US colonies declare separation from Britain.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-2.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-3', year: '1783 CE',
    yearNumeric: 1783, title: 'Treaty of Paris', description: 'Britain recognizes US independence.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-3.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-4', year: '1789 CE',
    yearNumeric: 1789, title: 'French Revolution Begins', description: 'The People\'s Earthquake. The storming of the Bastille doesn\'t just end a monarchy; it births the modern concept of universal rights and the power of the nation-state.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-4.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-5', year: '1789 CE',
    yearNumeric: 1789, title: 'Rights of Man', description: 'French Assembly establishes universal rights.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-5.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-6', year: '1793 CE',
    yearNumeric: 1793, title: 'Cotton Gin Invented', description: 'Whitney\'s machine expands slavery in US South.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-6.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-7', year: '1796 CE',
    yearNumeric: 1796, title: 'Smallpox Vaccine', description: 'The Shield. Jenner hacks the immune system, proving we can conquer nature\'s deadliest assassins. The start of modern medicine.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-7.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-8', year: '1799 CE',
    yearNumeric: 1799, title: 'Coup of 18 Brumaire', description: 'Napoleon takes power in France.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-8.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-9', year: '1803 CE',
    yearNumeric: 1803, title: 'Louisiana Purchase', description: 'US doubles in size with territory from France.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-9.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-10', year: '1804 CE',
    yearNumeric: 1804, title: 'Haitian Independence', description: 'First free black republic established.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-10.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-11', year: '1804 CE',
    yearNumeric: 1804, title: 'Napoleon Emperor', description: 'Napoleon crowns himself, ending Republic.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-11.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-12', year: '1807 CE',
    yearNumeric: 1807, title: 'Slave Trade Abolished', description: 'Britain outlaws Atlantic slave trade.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-12.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-13', year: '1810 CE',
    yearNumeric: 1810, title: 'Latin American Revolts', description: 'Colonies fight for independence from Spain.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-13.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-14', year: '1815 CE',
    yearNumeric: 1815, title: 'Battle of Waterloo', description: 'Napoleon defeated, ending his rule.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-14.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-15', year: '1815 CE',
    yearNumeric: 1815, title: 'Congress of Vienna', description: 'Europe redraws map to restore balance.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-15.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-16', year: '1825 CE',
    yearNumeric: 1825, title: 'First Steam Railway', description: 'Stockton and Darlington Railway opens.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-16.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-17', year: '1833 CE',
    yearNumeric: 1833, title: 'Slavery Abolished in Empire', description: 'Britain frees enslaved people in empire.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-17.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-18', year: '1837 CE',
    yearNumeric: 1837, title: 'Telegraph Invented', description: 'The Death of Distance. Information detaches from transportation. News travels at the speed of lightning, not the speed of a horse.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-18.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-19', year: '1839 CE',
    yearNumeric: 1839, title: 'First Opium War', description: 'Britain defeats China, starting "Century of Humiliation".', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-19.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-20', year: '1848 CE',
    yearNumeric: 1848, title: 'Spring of Nations', description: 'Revolutions sweep Europe for reform.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-20.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-21', year: '1848 CE',
    yearNumeric: 1848, title: 'Communist Manifesto', description: 'Marx and Engels outline communism.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-21.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-22', year: '1853 CE',
    yearNumeric: 1853, title: 'Perry Opens Japan', description: 'US forces end Japanese isolation.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-22.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-23', year: '1859 CE',
    yearNumeric: 1859, title: 'Origin of Species', description: 'Darwin publishes theory of evolution.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-23.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-24', year: '1861 CE',
    yearNumeric: 1861, title: 'Serfdom Abolished', description: 'Russia frees serfs.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-24.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-25', year: '1861 CE',
    yearNumeric: 1861, title: 'US Civil War', description: 'North fights South over slavery and unity.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-25.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-26', year: '1868 CE',
    yearNumeric: 1868, title: 'Meiji Restoration', description: 'Japan modernizes and industrializes.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-26.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-27', year: '1869 CE',
    yearNumeric: 1869, title: 'Suez Canal Opens', description: 'The Shortcut. Engineering slices continents apart, shrinking the world and supercharging global trade.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-27.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-28', year: '1871 CE',
    yearNumeric: 1871, title: 'Unification of Germany', description: 'German Empire created under Bismarck.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-28.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-29', year: '1884 CE',
    yearNumeric: 1884, title: 'Berlin Conference', description: 'Europe partitions Africa.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-29.jpg', phase: 'Phase 9'
  },
  {
    id: 'p9-30', year: '1914 CE',
    yearNumeric: 1914, title: 'Franz Ferdinand Killed', description: 'Assassination triggers WWI.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p9-30.jpg', phase: 'Phase 9'
  },

  // --- PHASE 10: The Early 20th Century ---
  {
    id: 'phase-10-marker',
    year: '1914 CE',
    yearNumeric: 1914,
    title: 'The Early 20th Century',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-10-marker.jpg',
    phase: 'Phase 10',
    type: 'phase_marker'
  },
  {
    id: 'p10-1', year: '1914',
    yearNumeric: 1914, title: 'World War I Begins', description: 'Declarations of war trigger massive conflict.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-1.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-2', year: '1915',
    yearNumeric: 1915, title: 'Armenian Genocide', description: 'Systematic extermination by Ottoman Empire.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-2.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-3', year: '1916',
    yearNumeric: 1916, title: 'Battle of the Somme', description: 'Bloody trench warfare battle.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-3.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-4', year: '1917',
    yearNumeric: 1917, title: 'US Enters WWI', description: 'US shifts balance of power.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-4.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-5', year: '1917',
    yearNumeric: 1917, title: 'October Revolution', description: 'Bolsheviks seize power in Russia.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-5.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-6', year: '1918',
    yearNumeric: 1918, title: 'WWI Armistice', description: 'Fighting ends, empires collapse.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-6.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-7', year: '1919',
    yearNumeric: 1919, title: 'Treaty of Versailles', description: 'Formal peace treaty imposes reparations.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-7.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-8', year: '1920',
    yearNumeric: 1920, title: 'League of Nations', description: 'International peace organization formed.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-8.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-9', year: '1922',
    yearNumeric: 1922, title: 'March on Rome', description: 'Mussolini seizes power in Italy.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-9.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-10', year: '1927',
    yearNumeric: 1927, title: 'First TV Broadcast', description: 'Farnsworth transmits electronic image.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-10.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-11', year: '1928',
    yearNumeric: 1928, title: 'Penicillin Discovered', description: 'The Magic Bullet. Fungi fight bacteria, and suddenly, a scratch is no longer a death sentence.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-11.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-12', year: '1929',
    yearNumeric: 1929, title: 'Black Tuesday', description: 'Stock market crash triggers Great Depression.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-12.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-13', year: '1931',
    yearNumeric: 1931, title: 'Japan Invades Manchuria', description: 'Start of Japanese aggression in Asia.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-13.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-14', year: '1933',
    yearNumeric: 1933, title: 'Hitler Chancellor', description: 'Nazis take power in Germany.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-14.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-15', year: '1935',
    yearNumeric: 1935, title: 'Italy Invades Ethiopia', description: 'League of Nations fails to stop aggression.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-15.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-16', year: '1936',
    yearNumeric: 1936, title: 'Spanish Civil War', description: 'Republicans vs Nationalists conflict.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-16.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-17', year: '1937',
    yearNumeric: 1937, title: 'Second Sino-Japanese War', description: 'Full-scale invasion of China.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-17.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-18', year: '1938',
    yearNumeric: 1938, title: 'Anschluss', description: 'Germany annexes Austria.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-18.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-19', year: '1938',
    yearNumeric: 1938, title: 'Munich Agreement', description: 'Appeasement allows annexation of Sudetenland.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-19.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-20', year: '1939',
    yearNumeric: 1939, title: 'WWII Begins', description: 'Germany invades Poland.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-20.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-21', year: '1940',
    yearNumeric: 1940, title: 'Battle of Britain', description: 'RAF defends UK from Luftwaffe.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-21.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-22', year: '1941',
    yearNumeric: 1941, title: 'Lend-Lease Act', description: 'US supplies Allies with war material.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-22.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-23', year: '1941',
    yearNumeric: 1941, title: 'Pearl Harbor', description: 'Japan attacks US, US enters war.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-23.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-24', year: '1942',
    yearNumeric: 1942, title: 'The Holocaust', description: 'Nazis systematize genocide of Jews.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-24.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-25', year: '1942',
    yearNumeric: 1942, title: 'Battle of Midway', description: 'US defeats Japanese Navy, turning point.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-25.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-26', year: '1943',
    yearNumeric: 1943, title: 'Stalingrad Ends', description: 'Soviet victory turns Eastern Front.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-26.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-27', year: '1944',
    yearNumeric: 1944, title: 'D-Day', description: 'Allies land in Normandy.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-27.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-28', year: '1945',
    yearNumeric: 1945, title: 'Yalta Conference', description: 'Allies plan post-war Europe.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-28.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-29', year: '1945',
    yearNumeric: 1945, title: 'Mussolini Executed', description: 'Italian dictator killed by partisans.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-29.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-30', year: '1945',
    yearNumeric: 1945, title: 'Hitler Suicide', description: 'Hitler dies in Berlin bunker.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-30.jpg', phase: 'Phase 10'
  },
  {
    id: 'p10-31', year: '1945',
    yearNumeric: 1945, title: 'Atomic Bombings', description: 'The Destroyer of Worlds. Humanity accesses the binding energy of the cosmos to create a weapon that can end history.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p10-31.jpg', phase: 'Phase 10'
  },

  // --- PHASE 11: The Cold War Era ---
  {
    id: 'phase-11-marker',
    year: '1945',
    yearNumeric: 1945,
    title: 'The Cold War Era',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-11-marker.jpg',
    phase: 'Phase 11',
    type: 'phase_marker'
  },
  {
    id: 'p11-1', year: '1945',
    yearNumeric: 1945, title: 'UN Founded', description: 'Never Again. Staring into the abyss of nuclear annihilation, humanity builds a forum to replace the battlefield with the negotiating table.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-1.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-2', year: '1946',
    yearNumeric: 1946, title: 'Nuremberg Trials', description: 'Nazi leaders prosecuted for war crimes.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-2.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-3', year: '1947',
    yearNumeric: 1947, title: 'Truman Doctrine', description: 'US policy to contain communism.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-3.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-4', year: '1947',
    yearNumeric: 1947, title: 'Partition of India', description: 'India and Pakistan created.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-4.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-5', year: '1948',
    yearNumeric: 1948, title: 'Israel Established', description: 'Jewish state proclaimed, conflict begins.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-5.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-6', year: '1948',
    yearNumeric: 1948, title: 'Berlin Blockade', description: 'Soviets block access, Airlift begins.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-6.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-7', year: '1949',
    yearNumeric: 1949, title: 'NATO Formed', description: 'Western military alliance established.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-7.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-8', year: '1949',
    yearNumeric: 1949, title: 'Chinese Revolution', description: 'Mao establishes People\'s Republic.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-8.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-9', year: '1950',
    yearNumeric: 1950, title: 'Korean War', description: 'Conflict between North and South Korea.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-9.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-10', year: '1951',
    yearNumeric: 1951, title: 'Libya Independent', description: 'Early success in African decolonization.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-10.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-11', year: '1953',
    yearNumeric: 1953, title: 'Stalin Dies', description: 'De-Stalinization begins in USSR.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-11.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-12', year: '1955',
    yearNumeric: 1955, title: 'Warsaw Pact', description: 'Soviet counter-alliance to NATO.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-12.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-13', year: '1956',
    yearNumeric: 1956, title: 'Suez Crisis', description: 'Crisis shows decline of European powers.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-13.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-14', year: '1957',
    yearNumeric: 1957, title: 'Sputnik Launch', description: 'The High Ground. We break gravity\'s chains. The sky is no longer the limit; it is just a new territory to be claimed.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-14.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-15', year: '1959',
    yearNumeric: 1959, title: 'Cuban Revolution', description: 'Castro establishes communist state.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-15.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-16', year: '1960',
    yearNumeric: 1960, title: 'Year of Africa', description: 'The Wind of Change. The empires that once mapped the world crumble, as 17 nations across Africa reclaim their sovereignty and voice.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-16.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-17', year: '1961',
    yearNumeric: 1961, title: 'Berlin Wall', description: 'Barrier divides East and West Berlin.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-17.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-18', year: '1962',
    yearNumeric: 1962, title: 'Cuban Missile Crisis', description: 'Nuclear standoff between US and USSR.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-18.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-19', year: '1963',
    yearNumeric: 1963, title: 'JFK Assassinated', description: 'President Kennedy killed in Dallas.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-19.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-20', year: '1964',
    yearNumeric: 1964, title: 'Gulf of Tonkin', description: 'US escalates Vietnam War.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-20.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-21', year: '1966',
    yearNumeric: 1966, title: 'Cultural Revolution', description: 'Mao purges rivals in China.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-21.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-22', year: '1967',
    yearNumeric: 1967, title: 'Six-Day War', description: 'Israel defeats Arab neighbors.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-22.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-23', year: '1968',
    yearNumeric: 1968, title: 'Prague Spring Crushed', description: 'Soviets invade Czechoslovakia.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-23.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-24', year: '1969',
    yearNumeric: 1969, title: 'Apollo 11', description: 'Armstrong walks on Moon.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-24.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-25', year: '1972',
    yearNumeric: 1972, title: 'SALT I Treaty', description: 'Arms limitation marks Détente.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-25.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-26', year: '1979',
    yearNumeric: 1979, title: 'Iranian Revolution', description: 'Islamic Republic established.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-26.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-27', year: '1979',
    yearNumeric: 1979, title: 'Soviet Afghan Invasion', description: 'USSR invades Afghanistan.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-27.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-28', year: '1986',
    yearNumeric: 1986, title: 'Chernobyl', description: 'Nuclear disaster in Ukraine.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-28.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-29', year: '1989',
    yearNumeric: 1989, title: 'Fall of Berlin Wall', description: 'Symbol of Cold War ends.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-29.jpg', phase: 'Phase 11'
  },
  {
    id: 'p11-30', year: '1991',
    yearNumeric: 1991, title: 'USSR Dissolves', description: 'Cold War officially ends.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p11-30.jpg', phase: 'Phase 11'
  },

  // --- PHASE 12: The Modern Digital Age ---
  {
    id: 'phase-12-marker',
    year: '1991',
    yearNumeric: 1991,
    title: 'The Modern Digital Age',
    description: '',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phase-12-marker.jpg',
    phase: 'Phase 12',
    type: 'phase_marker'
  },
  {
    id: 'p12-1', year: '1991',
    yearNumeric: 1991, title: 'Māori Language Act', description: 'Indigenous language revitalization in NZ.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-1.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-2', year: '1992',
    yearNumeric: 1992, title: 'EU Created', description: 'Maastricht Treaty forms European Union.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-2.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-3', year: '1991',
    yearNumeric: 1989, title: 'World Wide Web', description: 'The Hive Mind awakens. Berners-Lee dissolves the physical distance between minds, creating a shared digital space that will rewire the human species.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-3.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-4', year: '1994',
    yearNumeric: 1994, title: 'Apartheid Ends', description: 'Mandela elected in South Africa.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-4.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-5', year: '1995',
    yearNumeric: 1995, title: 'WTO Established', description: 'Global trade body formed.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-5.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-6', year: '1997',
    yearNumeric: 1997, title: 'Kyoto Protocol', description: 'Treaty to limit greenhouse gases.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-6.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-7', year: '1998',
    yearNumeric: 1998, title: 'Google Founded', description: 'Organizing the World. A new era of retrieval begins where all human knowledge is accessible in milliseconds.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-7.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-8', year: '2000',
    yearNumeric: 2000, title: 'ISS Activated', description: 'Permanent human presence in space.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-8.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-9', year: '2001',
    yearNumeric: 2001, title: '9/11 Attacks', description: 'Terror attacks on US, War on Terror.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-9.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-10', year: '2001',
    yearNumeric: 2001, title: 'China Joins WTO', description: 'Accelerates global economic integration.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-10.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-11', year: '2003',
    yearNumeric: 2003, title: 'Human Genome Project', description: 'The Source Code. We read the manual of life itself, opening the door to editing our own biology.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-11.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-12', year: '2004',
    yearNumeric: 2004, title: 'Facebook Founded', description: 'Social networking rises.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-12.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-13', year: '2007',
    yearNumeric: 2007, title: 'iPhone Released', description: 'The Second Brain. The internet moves from the desk to the pocket, becoming a permanent prosthetic for the human mind.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-13.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-14', year: '2008',
    yearNumeric: 2008, title: 'Global Financial Crisis', description: 'Recession triggered by housing collapse.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-14.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-15', year: '2009',
    yearNumeric: 2009, title: 'Bitcoin Launched', description: 'Money Without Masters. The first separation of currency from state control using cryptographic truth.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-15.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-16', year: '2010',
    yearNumeric: 2010, title: 'Arab Spring', description: 'Pro-democracy protests in Middle East.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-16.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-17', year: '2011',
    yearNumeric: 2011, title: '7 Billion People', description: 'Global population milestone.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-17.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-18', year: '2012',
    yearNumeric: 2012, title: 'Higgs Boson Confirmed', description: 'Particle physics breakthrough.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-18.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-19', year: '2013',
    yearNumeric: 2013, title: 'Snowden Leaks', description: 'Surveillance programs revealed.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-19.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-20', year: '2014',
    yearNumeric: 2014, title: 'Annexation of Crimea', description: 'Russia seizes territory from Ukraine.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-20.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-21', year: '2015',
    yearNumeric: 2015, title: 'Paris Agreement', description: 'Global climate change pact.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-21.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-22', year: '2016',
    yearNumeric: 2016, title: 'CRISPR Rising', description: 'Gene editing technology adopts.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-22.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-23', year: '2016',
    yearNumeric: 2016, title: 'Brexit Vote', description: 'UK votes to leave EU.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-23.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-24', year: '2017',
    yearNumeric: 2017, title: '#MeToo Movement', description: 'Global movement against abuse.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-24.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-25', year: '2019',
    yearNumeric: 2019, title: 'Black Hole Image', description: 'First direct visual evidence.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-25.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-26', year: '2020',
    yearNumeric: 2020, title: 'COVID-19 Pandemic', description: 'Global lockdowns and vaccines.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-26.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-27', year: '2022',
    yearNumeric: 2022, title: 'Invasion of Ukraine', description: 'Russia invades, conflict in Europe.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-27.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-28', year: '2022',
    yearNumeric: 2022, title: '8 Billion People', description: 'Population reaches new milestone.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-28.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-29', year: '2022',
    yearNumeric: 2022, title: 'ChatGPT Released', description: 'The Age of Synthesis. AI moves from analyzing data to generating creativity, challenging the very definition of intelligence and what it means to be human.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-29.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-30', year: '2023',
    yearNumeric: 2023, title: 'AI Regulation', description: 'Governments draft AI rules.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-30.jpg', phase: 'Phase 12'
  },
  {
    id: 'p12-31', year: '2025',
    yearNumeric: 2025, title: 'The Present Day', description: 'End of known history.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-31.jpg', phase: 'Phase 12'
  },
  {
    id: 'pilot-1', year: '1876 CE',
    yearNumeric: 1876, title: 'Telephone Invented', description: 'Voice Over Wire. For the first time, a human voice can be heard without the body being present. The beginning of virtual presence.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/pilot-1.jpg', category: 'Communications', phase: 'Phase 9'
  },
  {
    id: 'pilot-2', year: '1901 CE',
    yearNumeric: 1901, title: 'Transatlantic Radio', description: 'Guglielmo Marconi receives the first radio signal across the Atlantic.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/pilot-2.jpg', category: 'Communications', phase: 'Phase 10'
  },
  {
    id: 'pilot-3', year: '1969 CE',
    yearNumeric: 1969, title: 'ARPANET Established', description: 'The first packet-switching network and precursor to the Internet.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/pilot-3.jpg', category: 'Communications', phase: 'Phase 11'
  },
  ,

  {
    id: 'modern-1',
    year: '2024',
    yearNumeric: 2024,
    title: 'The AI Era Begins',
    description: 'Artificial Intelligence reaches a tipping point, transforming how humanity interacts with information and creativity.',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-1.jpg'
  },
  {
    id: 'modern-2',
    year: '2007',
    yearNumeric: 2007,
    title: 'The Smartphone Revolution',
    description: 'The launch of the iPhone ushers in the age of mobile computing and constant connectivity.',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-2.jpg'
  },
  {
    id: 'modern-3',
    year: '1969',
    yearNumeric: 1969,
    title: 'Apollo 11 Moon Landing',
    description: 'Humans set foot on another world for the first time, marking the pinnacle of the Space Race.',
    phase: 'Modern',
    category: 'Cosmology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-3.jpg'
  },
  {
    id: 'modern-4',
    year: '1945',
    yearNumeric: 1945,
    title: 'The Atomic Age',
    description: 'The detonation of the first nuclear weapon alters the geopolitical landscape forever.',
    phase: 'Modern',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-4.jpg'
  },
  {
    id: 'modern-5',
    year: '1903',
    yearNumeric: 1903,
    title: 'First Powered Flight',
    description: 'The Wright brothers achieve the first controlled, sustained flight of a powered, heavier-than-air aircraft.',
    phase: 'Modern',
    category: 'Transport',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-5.jpg'
  },
  {
    id: 'modern-6',
    year: '1880',
    yearNumeric: 1880,
    title: 'The Electric Light Bulb',
    description: 'Widespread adoption of electric lighting extends the day and transforms human productivity.',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-6.jpg'
  },
  {
    id: 'modern-7',
    year: '1760',
    yearNumeric: 1760,
    title: 'The Industrial Revolution',
    description: 'The Energy Singularity. Humanity breaks the caloric ceiling by unlocking millions of years of stored sunlight (coal), trading a rural past for a mechanical future.',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-7.jpg'
  },
  {
    id: 'modern-8',
    year: '1492',
    yearNumeric: 1492,
    title: 'The Columbian Exchange',
    description: 'Global exchange of goods, ideas, and populations follows the contact between the Old and New Worlds.',
    phase: 'Modern',
    category: 'Civilization',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-8.jpg'
  },
  {
    id: 'modern-9',
    year: '1440',
    yearNumeric: 1440,
    title: 'The Printing Press',
    description: 'Gutenberg\'s invention democratizes knowledge, fueling the Renaissance and the Scientific Revolution.',
    phase: 'Modern',
    category: 'Communications',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-9.jpg'
  },
  {
    id: 'modern-10',
    year: '476',
    yearNumeric: 476,
    title: 'Fall of the Western Roman Empire',
    description: 'The collapse of Rome marks the end of ancient history and the beginning of the Middle Ages.',
    phase: 'Modern',
    category: 'Civilization',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-10.jpg'
  },
  {
    id: 'modern-11',
    year: '0',
    yearNumeric: 0,
    title: 'The Common Era Begins',
    description: 'The approximate start of the Common Era (AD), used as the reference point for the modern calendar.',
    phase: 'Modern',
    category: 'Civilization',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-11.jpg'
  },
  {
    id: 'modern-12',
    year: '3200 BCE',
    yearNumeric: -3200,
    title: 'Invention of Writing',
    description: 'Cuneiform script emerges in Sumer, marking the dawn of recorded history.',
    phase: 'Modern',
    category: 'Communications',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-12.jpg'
  },
  {
    id: 'modern-13',
    year: '4500 BCE',
    yearNumeric: -4500,
    title: 'Invention of the Wheel',
    description: 'The potter\'s wheel is adapted for transport, revolutionizing trade and warfare.',
    phase: 'Modern',
    category: 'Transport',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-13.jpg'
  },
  {
    id: 'modern-14',
    year: '2560 BCE',
    yearNumeric: -2560,
    title: 'Great Pyramid of Giza',
    description: 'Construction of the Great Pyramid, the oldest of the Seven Wonders of the Ancient World.',
    phase: 'Modern',
    category: 'Civilization',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-14.jpg'
  },

  // --- PHASE: History of Art ---
  {
    id: 'art-1',
    year: '30,000 BCE',
    yearNumeric: -30000,
    title: 'The First Dream (Cave Paintings)',
    description: 'In the flickering light of Lascaux, humans first projected their internal imagination onto the external world, birthing the "Cognitive Revolution".',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-1.jpg'
  },
  {
    id: 'art-venus',
    year: '28,000 BCE',
    yearNumeric: -28000,
    title: 'Venus of Willendorf',
    description: 'A pocket-sized limestone icon of fertility. By carving the ideal form, humanity began to shape reality to match its desires rather than just observing it.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-venus.jpg'
  },
  {
    id: 'art-gobekli',
    year: '9500 BCE',
    yearNumeric: -9500,
    title: 'Göbekli Tepe',
    description: 'The World\'s First Temple. Massive carved pillars prove that the urge to create sacred art preceded—and perhaps caused—the invention of agriculture.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-gobekli.jpg'
  },
  {
    id: 'art-ur',
    year: '2600 BCE',
    yearNumeric: -2600,
    title: 'Standard of Ur',
    description: 'One of the earliest examples of visual narrative. Using distinct registers (comic-strip style), it formalized how we tell stories through images.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-ur.jpg'
  },
  {
    id: 'art-nefertiti',
    year: '1345 BCE',
    yearNumeric: -1345,
    title: 'Bust of Nefertiti',
    description: 'A masterpiece of realism in an era of stylized symbols. Thutmose captured individual beauty so perfectly it transcends 3,000 years of time.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-nefertiti.jpg'
  },
  {
    id: 'art-terracotta',
    year: '210 BCE',
    yearNumeric: -210,
    title: 'The Terracotta Army',
    description: 'Industrial-scale art. 8,000 unique statues created to guard Emperor Qin, demonstrating that mass production and individual craftsmanship could coexist.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-terracotta.jpg'
  },
  {
    id: 'art-kells',
    year: '800',
    yearNumeric: 800,
    title: 'The Book of Kells',
    description: 'Insular art reaches its zenith. Monks turned text into a labyrinth of infinite complexity, proving that the Word was meant to be seen, not just read.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-kells.jpg'
  },
  {
    id: 'art-fankuan',
    year: '1000',
    yearNumeric: 1000,
    title: 'Daoist Landscapes (Fan Kuan)',
    description: 'While Europe painted religious icons, China perfected the "Shan Shui" landscape—art not as a picture of the world, but as a philosophy of nature\'s immensity.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-fankuan.jpg'
  },
  {
    id: 'art-2',
    year: '1144',
    yearNumeric: 1144,
    title: 'Gothic Light',
    description: 'The Basilica of Saint-Denis used stained glass as "medieval cinema," using light and image to educate the illiterate masses and placing emotional experience above structural weight.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-2.jpg'
  },
  {
    id: 'art-ife',
    year: '1300',
    yearNumeric: 1300,
    title: 'The Bronzes of Ife',
    description: 'West African sculptors achieve a level of naturalistic portraiture using *cire perdue* (lost wax) casting that rivals or surpasses the European Renaissance.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-ife.jpg'
  },
  {
    id: 'art-3',
    year: '1420',
    yearNumeric: 1420,
    title: 'The Perspective Shift',
    description: 'Brunelleschi\'s mathematical perspective aligned art with science, teaching humanity to see the world as a measurable, ordered 3D space.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-3.jpg'
  },
  {
    id: 'art-arnolfini',
    year: '1434',
    yearNumeric: 1434,
    title: 'The Arnolfini Portrait',
    description: 'Jan van Eyck masters oil paint. The mirror in the background reflects the entire room, symbolizing Art\'s new power to capture the totality of physical existence.',
    phase: 'Civilization',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-arnolfini.jpg'
  },
  {
    id: 'art-greatwave',
    year: '1831',
    yearNumeric: 1831,
    title: 'The Great Wave',
    description: 'Hokusai\'s woodblock print becomes the first global icon of "Pop Art," influencing the Impressionists and demonstrating the power of reproducible media.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-greatwave.jpg'
  },
  {
    id: 'art-4',
    year: '1839',
    yearNumeric: 1839,
    title: 'The Crisis of Realism',
    description: 'The invention of the Daguerreotype forced painting to evolve. When a machine could capture reality perfectly, art was liberated to explore *emotion* rather than just *likeness*.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-4.jpg'
  },
  {
    id: 'art-5',
    year: '1874',
    yearNumeric: 1874,
    title: 'The Subjective Eye',
    description: 'Impressionists like Monet argued that reality isn\'t objects, but *light*. This shift paved the way for modern physics and the relativity of perception.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-5.jpg'
  },
  {
    id: 'art-starry',
    year: '1889',
    yearNumeric: 1889,
    title: 'Starry Night',
    description: 'Van Gogh abandons optical reality for emotional reality. The swirling sky isn\'t what he saw, but what he *felt*—the birth of Expressionism.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-starry.jpg'
  },
  {
    id: 'art-6',
    year: '1907',
    yearNumeric: 1907,
    title: 'Shattering Reality',
    description: 'Picasso\'s *Les Demoiselles d\'Avignon* broke the rule of a single viewpoint, attempting to represent 3D space and time on a 2D plane—paralleling Einstein\'s theories.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-6.jpg'
  },
  {
    id: 'art-7',
    year: '1917',
    yearNumeric: 1917,
    title: 'Art is Context',
    description: 'By signing a urinal, Duchamp declared that Art is defined by the artist\'s *choice*, not their craft. This conceptual leap birthed modern art.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-7.jpg'
  },
  {
    id: 'art-bauhaus',
    year: '1919',
    yearNumeric: 1919,
    title: 'The Bauhaus Founded',
    description: 'Walter Gropius unites art and technology. "Form follows function" becomes the mantra of the 20th century, shaping the very cities we live in.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-bauhaus.jpg'
  },
  {
    id: 'art-pollock',
    year: '1950',
    yearNumeric: 1950,
    title: 'Action Painting',
    description: 'Jackson Pollock puts the canvas on the floor. The painting is no longer a picture, but a record of the artist\'s physical movement.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-pollock.jpg'
  },
  {
    id: 'art-warhol',
    year: '1962',
    yearNumeric: 1962,
    title: 'Campbell\'s Soup Cans',
    description: 'Andy Warhol erases the line between high art and commercial product. If we consume images like soup, why treat them differently?',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-warhol.jpg'
  },
  {
    id: 'art-paik',
    year: '1963',
    yearNumeric: 1963,
    title: 'Electronic Superhighway',
    description: 'Nam June Paik uses television sets as sculpture. Video becomes a medium, predicting a world where we are constantly bathed in electronic light.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-paik.jpg'
  },
  {
    id: 'art-basquiat',
    year: '1982',
    yearNumeric: 1982,
    title: 'The Radiant Child',
    description: 'Basquiat brings the raw energy of graffiti into the gallery. A synthesis of street culture, jazz, and history that challenges the white-dominated art world.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-basquiat.jpg'
  },
  {
    id: 'art-pixar',
    year: '1995',
    yearNumeric: 1995,
    title: 'The Digital Canvas (Toy Story)',
    description: 'The first fully computer-animated feature film. The pixel replaces the brushstroke, offering a new dimension of control over light and texture.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-pixar.jpg'
  },
  {
    id: 'art-nft',
    year: '2021',
    yearNumeric: 2021,
    title: 'The First 5000 Days',
    description: 'Beeple\'s $69M sale proves that digital scarcity is possible. Code becomes the certificate of authenticity, upending the economics of art.',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-nft.jpg'
  },
  {
    id: 'art-8',
    year: '2022',
    yearNumeric: 2022,
    title: 'The Synthetic Dream',
    description: 'Generative AI challenges the final frontier of human uniqueness, forcing us to redefine the role of the artist from "maker" to "curator".',
    phase: 'Modern',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-8.jpg'
  },
  // --- The Money Illusion Events (Expansion phase) ---
  {
    id: 'money-cowrie',
    year: '1200 BCE',
    yearNumeric: -1200,
    title: 'Cowrie Shells',
    description: 'Nature\'s Cash. The small, durable shell becomes the first global currency, traded across Africa, Asia, and Oceania for millennia.',
    phase: 'Phase 6',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-cowrie.jpg'
  },
  {
    id: 'money-hammurabi',
    year: '1754 BCE',
    yearNumeric: -1754,
    title: 'Code of Hammurabi',
    description: 'The Debt Slate. One of the earliest legal codes formalizes interest rates and debt forgiveness, proving that debt is older than money itself.',
    phase: 'Phase 5',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-hammurabi.jpg'
  },
  {
    id: 'money-sparta',
    year: '700 BCE',
    yearNumeric: -700,
    title: 'Spartan Iron Spits',
    description: 'Heavy Money. Sparta adopts cumbersome iron rods (pelanors) as currency to discourage effective wealth accumulation and trade.',
    phase: 'Phase 6',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-sparta.jpg'
  },
  {
    id: 'money-debasement',
    year: '250 CE',
    yearNumeric: 250,
    title: 'Roman Debasement',
    description: 'The Silver Fade. Emperors dilute the silver content of the Denarius to pay armies, triggering the first great hyperinflationary crisis.',
    phase: 'Phase 7',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-debasement.jpg'
  },
  {
    id: 'money-templar',
    year: '1150 CE',
    yearNumeric: 1150,
    title: 'The Knights Templar',
    description: 'The First Banks. Pilgrims deposit gold in Paris and withdraw it in Jerusalem, creating the first international letters of credit.',
    phase: 'Phase 7',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-templar.jpg'
  },
  {
    id: 'money-tally',
    year: '1100 CE',
    yearNumeric: 1100,
    title: 'Tally Sticks',
    description: 'The Wood Standard. England uses notched hazelwood sticks to record tax debts, a system of verified public record that lasts for centuries.',
    phase: 'Phase 7',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-tally.jpg'
  },
  {
    id: 'money-potosi',
    year: '1545 CE',
    yearNumeric: 1545,
    title: 'Mountain of Silver',
    description: 'Potosí feeds the world. Spanish silver from the Andes floods the global economy, becoming the first universal currency (Pieces of Eight).',
    phase: 'Phase 8',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-potosi.jpg'
  },
  {
    id: 'money-tulip',
    year: '1637 CE',
    yearNumeric: 1637,
    title: 'Tulip Mania',
    description: 'The Rational Bubble. The price of specialized bulbs skyrockets and crashes, demonstrating that market value is purely psychological.',
    phase: 'Phase 8',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-tulip.jpg'
  },
  {
    id: 'money-boe',
    year: '1694 CE',
    yearNumeric: 1694,
    title: 'Bank of England',
    description: 'The Debt Machine. The bank is formed specifically to lend money to the government for war, inventing the concept of National Debt.',
    phase: 'Phase 8',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-boe.jpg'
  },
  {
    id: 'money-mississippi',
    year: '1720 CE',
    yearNumeric: 1720,
    title: 'Mississippi Bubble',
    description: 'John Law\'s Experiment. France replaces gold with paper shares in a company that doesn\'t exist, proving paper money requires absolute trust.',
    phase: 'Phase 9',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-mississippi.jpg'
  },
  {
    id: 'money-fed',
    year: '1913 CE',
    yearNumeric: 1913,
    title: 'The Federal Reserve',
    description: 'The Lender of Last Resort. The US institutionalizes the money supply, creating a central authority to manage panic.',
    phase: 'Phase 10',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-fed.jpg'
  },
  {
    id: 'money-weimar',
    year: '1923 CE',
    yearNumeric: 1923,
    title: 'Weimar Hyperinflation',
    description: 'Death of a Currency. Printing money to pay war reparations turns cash into wallpaper, searing the fear of inflation into the German psyche.',
    phase: 'Phase 10',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-weimar.jpg'
  },
  {
    id: 'money-bretton',
    year: '1944 CE',
    yearNumeric: 1944,
    title: 'Bretton Woods',
    description: 'The Dollar Standard. The world agrees to peg currencies to the US Dollar, which is pegged to gold, cementing American economic hegemony.',
    phase: 'Phase 10',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-bretton.jpg'
  },
  {
    id: 'money-euro',
    year: '1999 CE',
    yearNumeric: 1999,
    title: 'Launch of the Euro',
    description: 'Money Without a Nation. Europe attempts a grand experiment: a single currency for disparate states, uncoupling monetary policy from national sovereignty.',
    phase: 'Phase 12',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-euro.jpg'
  },
  {
    id: 'money-mpesa',
    year: '2007 CE',
    yearNumeric: 2007,
    title: 'M-Pesa Revolution',
    description: 'Banking the Unbanked. In Kenya, airtime becomes money. A mobile network bypasses traditional banks, showing the future of digital wallets.',
    phase: 'Phase 12',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-mpesa.jpg'
  },
  {
    id: 'money-eth',
    year: '2015 CE',
    yearNumeric: 2015,
    title: 'Ethereum Genesis',
    description: 'Code is Law. Money becomes programmable. Smart contracts allow value to self-execute without human intermediaries.',
    phase: 'Phase 12',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-eth.jpg'
  },

  // --- The Money Illusion Events ---
  {
    id: 'money-shekel',
    year: '3000 BCE',
    yearNumeric: -3000,
    title: 'The First Currency (Shekel)',
    description: 'Grain becomes Money. In Sumer, barley is standardized into weight (shekels), transforming food into an abstract unit of account that can store value.',
    phase: 'Civilization',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-shekel.jpg'
  },
  {
    id: 'money-lydia',
    year: '600 BCE',
    yearNumeric: -600,
    title: 'The Lydian Lion',
    description: 'The invention of the Coin. The State stamps a lion on electrum, guaranteeing weight and purity. Trust shifts from the metal itself to the King who minted it.',
    phase: 'Civilization',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-lydia.jpg'
  },
  {
    id: 'money-paper',
    year: '1024',
    yearNumeric: 1024,
    title: 'Flying Money (Jiaozi)',
    description: 'China invents paper cash. Merchants realize that a slip of paper representing coins is lighter than the coins themselves. Value becomes symbolic.',
    phase: 'Civilization',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-paper.jpg'
  },
  {
    id: 'money-medici',
    year: '1397',
    yearNumeric: 1397,
    title: 'The Ledger (Medici Bank)',
    description: 'The invention of modern banking. Money ceases to be a physical object and becomes an entry in a book (Credit), allowing value to be teleported across Europe.',
    phase: 'Civilization',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-medici.jpg'
  },
  {
    id: 'money-gold',
    year: '1717',
    yearNumeric: 1717,
    title: 'The Isaac Newton Standard',
    description: 'Newton fixes the price of gold. The Gold Standard is born, tethering the abstract world of paper money to the physical reality of a rare metal.',
    phase: 'Modern',
    category: 'Economy',
    imageUrl: 'https://image.pollinations.ai/prompt/Isaac%20Newton%20gold%20standard%20coins%20bars%20mahogany%20table%20cinematic?width=1280&height=720&nolog=true'
  },
  {
    id: 'money-card',
    year: '1950',
    yearNumeric: 1950,
    title: 'The Plastic Card',
    description: 'Diners Club introduces the credit card. Money becomes invisible, a frictionless promise to pay later, fueling the consumer age.',
    phase: 'Modern',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-card.jpg'
  },
  {
    id: 'money-nixon',
    year: '1971',
    yearNumeric: 1971,
    title: 'The Nixon Shock',
    description: 'The end of Gold. Nixon uncouples the dollar from metal. Money becomes pure "Fiat" (Let it be done)—backed by nothing but belief in the State.',
    phase: 'Modern',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-nixon.jpg'
  },
  {
    id: 'money-algo',
    year: '2010',
    yearNumeric: 2010,
    title: 'High-Frequency Trading',
    description: 'The Algorithms take over. Machines trade stocks in microseconds. Value fluctuates faster than human thought, detaching finance from the real economy.',
    phase: 'Modern',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-algo.jpg'
  },

  // --- Ancestry of AI Events ---
  {
    id: 'ai-aristotle',
    year: '350 BCE',
    yearNumeric: -350,
    title: 'The First Code (Aristotle\'s Logic)',
    description: 'Aristotle invents Formal Logic (syllogisms), creating the first set of rules for "correct" reasoning. He planted the seed that thought could be processed like math.',
    phase: 'Civilization',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-aristotle.jpg'
  },
  {
    id: 'ai-alkhwarizmi',
    year: '820 CE',
    yearNumeric: 820,
    title: 'The Algorithm (Al-Khwarizmi)',
    description: 'The invention of Algebra explicitly defines step-by-step procedures to solve problems—the very definition of an algorithm.',
    phase: 'Civilization',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-alkhwarizmi.jpg'
  },
  {
    id: 'ai-llull',
    year: '1305',
    yearNumeric: 1305,
    title: 'The Thinking Machine (Ars Magna)',
    description: 'Ramon Llull builds a paper machine of rotating wheels to combine concepts. It was the first attempt to mechanize the generation of new knowledge.',
    phase: 'Civilization',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-llull.jpg'
  },
  {
    id: 'ai-jacquard',
    year: '1804',
    yearNumeric: 1804,
    title: 'Programmable Hardware (Jacquard Loom)',
    description: 'Joseph Marie Jacquard uses punch cards to control a loom. This separated the "hardware" (the loom) from the "software" (the pattern)—the birth of programming.',
    phase: 'Industrial',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-jacquard.jpg'
  },
  {
    id: 'ai-lovelace',
    year: '1843',
    yearNumeric: 1843,
    title: 'The First Algorithm (Ada Lovelace)',
    description: 'Ada Lovelace realizes Babbage\'s machine can manipulate symbols, not just numbers. She writes the first code, envisioning a computer that could compose music.',
    phase: 'Industrial',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-lovelace.jpg'
  },
  {
    id: 'ai-boole',
    year: '1847',
    yearNumeric: 1847,
    title: 'Binary Logic (George Boole)',
    description: 'Boole proves that logic can be represented as math (0s and 1s). This "Boolean Logic" becomes the physical language of every future computer circuit.',
    phase: 'Industrial',
    category: 'Science',
    imageUrl: 'https://image.pollinations.ai/prompt/george%20boole%20visualizing%20binary%20code%200s%20and%201s%20in%20the%20air%2C%20victorian%20study%2C%20matrix%20rain%20effect%20subtle%2C%20cinematic?width=1280&height=720&nolog=true'
  },
  {
    id: 'ai-principia',
    year: '1910',
    yearNumeric: 1910,
    title: 'Principia Mathematica',
    description: 'Russell and Whitehead attempt to encode all of mathematics into pure logic. Though they failed, they formalized the language that AI would eventually speak.',
    phase: 'Modern',
    category: 'Science',
    imageUrl: 'https://image.pollinations.ai/prompt/principia%20mathematica%20book%20glowing%20with%20logic%20symbols%2C%20bertrand%20russell%20study%2C%20complex%20mathematical%20proofs%20floating%2C%20cinematic?width=1280&height=720&nolog=true'
  },
  {
    id: 'ai-mcculloch',
    year: '1943',
    yearNumeric: 1943,
    title: 'The First Neural Net',
    description: 'McCulloch and Pitts propose the first mathematical model of a biological neuron, suggesting that a network of simple switches could perform complex logic.',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: 'https://image.pollinations.ai/prompt/abstract%20biological%20neuron%20turning%20into%20digital%20circuit%2C%20mcculloch%20pitts%20model%2C%20cyan%20and%20purple%20neon%20lighting%2C%20cinematic%20macro?width=1280&height=720&nolog=true'
  },
  {
    id: 'ai-dartmouth',
    year: '1956',
    yearNumeric: 1956,
    title: 'Artificial Intelligence Born',
    description: 'At the Dartmouth Conference, McCarthy, Minsky, and others coin the term "AI" and set the goal: "Every aspect of learning can be so precisely described that a machine can be made to simulate it."',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: 'https://image.pollinations.ai/prompt/dartmouth%20conference%201956%20scientists%20around%20chalkboard%20drawing%20robot%20brains%2C%20vintage%20kodachrome%20style%2C%20academic%20setting?width=1280&height=720&nolog=true'
  },
  {
    id: 'ai-perceptron',
    year: '1958',
    yearNumeric: 1958,
    title: 'The Perceptron',
    description: 'Frank Rosenblatt builds the Perceptron, a machine that can "learn" to recognize shapes. The NYT predicts it will soon "walk, talk, see, and write."',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: 'https://image.pollinations.ai/prompt/frank%20rosenblatt%20perceptron%20machine%20wires%20and%20camera%2C%201950s%20lab%2C%20retro%20futurism%2C%20cinematic%20lighting?width=1280&height=720&nolog=true'
  },
  {
    id: 'ai-winter',
    year: '1974',
    yearNumeric: 1974,
    title: 'The AI Winter',
    description: 'Overhyped promises fail to materialize. Funding dries up. The field learns a hard lesson: logic is easy, but intuition and ambiguity are hard.',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: 'https://image.pollinations.ai/prompt/frozen%20computer%20server%20room%20covered%20in%20ice%20and%20snow%2C%20ai%20winter%20concept%2C%20desolate%20technological%20landscape%2C%20cinematic%20blue?width=1280&height=720&nolog=true'
  },
  {
    id: 'ai-deepblue',
    year: '1997',
    yearNumeric: 1997,
    title: 'Deep Blue Defeats Kasparov',
    description: 'Brute force wins. IBM\'s Deep Blue beats the World Chess Champion, proving machines can outperform humans in complex, closed systems.',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: 'https://image.pollinations.ai/prompt/deep%20blue%20computer%20playing%20chess%20against%20human%20shadow%2C%20intense%20focus%2C%20digital%20chess%20pieces%20glowing%2C%20cinematic?width=1280&height=720&nolog=true'
  },
  {
    id: 'ai-alexnet',
    year: '2012',
    yearNumeric: 2012,
    title: 'The Deep Learning Explosion',
    description: 'AlexNet destroys the competition in image recognition using deep neural networks on GPUs. The modern AI boom officially begins.',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: 'https://image.pollinations.ai/prompt/alexnet%20neural%20network%20visualization%20recognizing%20cats%20and%20objects%2C%20layers%20of%20neurons%20firing%2C%20digital%20abstract%20art?width=1280&height=720&nolog=true'
  },
  {
    id: 'ai-alphago',
    year: '2016',
    yearNumeric: 2016,
    title: 'AlphaGo',
    description: 'Move 37. AlphaGo defeats Lee Sedol at Go, a game of intuition. The machine makes a move so creative that it initially confused human experts.',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: 'https://image.pollinations.ai/prompt/alphago%20move%2037%20visualization%2C%20go%20board%20with%20glowing%20stones%2C%20ai%20vs%20human%20mind%2C%20abstract%20strategic%20beauty%2C%20cinematic?width=1280&height=720&nolog=true'
  },
  {
    id: 'ai-transformer',
    year: '2017',
    yearNumeric: 2017,
    title: 'Attention Is All You Need',
    description: 'Google researchers invent the Transformer architecture. This mechanism allows models to understand context in vast amounts of data, paving the way for ChatGPT.',
    phase: 'Modern',
    category: 'Technology',
    imageUrl: 'https://image.pollinations.ai/prompt/transformer%20ai%20architecture%20diagram%20becoming%20a%20city%20of%20light%2C%20attention%20mechanism%20visualization%2C%20futuristic%20cyberpunk%20gold%20and%20blue?width=1280&height=720&nolog=true'
  }
];
