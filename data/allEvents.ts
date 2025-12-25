
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
    description: 'The Moment of Creation. Before stars, before space, asking "what happened before" was meaningless. In this fractional instant, the clock of the universe began to tick.',
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
    phase: 'Phase 1',
    semanticTags: [
      { type: 'Location', value: 'Solar System' },
      { type: 'Entity', value: 'Sun' },
      { type: 'Topic', value: 'Astronomy' }
    ]
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
    description: 'The Spark. On a volcanic, hostile Earth, something impossible happened: dead matter came alive. A microscopic struggle for survival began that would eventually lead to you.',
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
    yearNumeric: -9500, title: 'The First Hearth (Jericho)', description: 'The First Hearth. For 200,000 years, we wandered. At Jericho, we stopped. By building permanent walls, we traded the freedom of the hunt for the security of the home.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p4-3.jpg', phase: 'Phase 4'
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
    yearNumeric: -1200, title: 'Iron Technology Spreads', description: 'Scarcity breeds Innovation. When the bronze trade collapsed, humanity was forced to master the difficult art of smelting iron—a metal that was everywhere, democratizing warfare and farming.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p6-1.jpg', phase: 'Phase 6'
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
    yearNumeric: 570, title: 'Birth of Muhammad', description: 'The Power Vacuum. With Rome fractured and Persia exhausted by war, the desert was silent—waiting for a voice that would unite the tribes and reshape the world map.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p7-12.jpg', phase: 'Phase 7'
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
    yearNumeric: 2020, title: 'COVID-19 Pandemic', description: 'The Invisible Siege. A novel coronavirus circles the globe in weeks, locking billions indoors and triggering the fastest vaccine development in history.', imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/p12-26.jpg', phase: 'Phase 12'
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


  {
    id: 'modern-1',
    year: '2024',
    yearNumeric: 2024,
    title: 'The AI Era Begins',
    description: 'Artificial Intelligence reaches a tipping point, transforming how humanity interacts with information and creativity.',
    phase: 'Phase 12',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-1.jpg'
  },
  {
    id: 'modern-2',
    year: '2007',
    yearNumeric: 2007,
    title: 'The Smartphone Revolution',
    description: 'The launch of the iPhone ushers in the age of mobile computing and constant connectivity.',
    phase: 'Phase 12',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-2.jpg'
  },
  {
    id: 'modern-3',
    year: '1969',
    yearNumeric: 1969,
    title: 'Apollo 11 Moon Landing',
    description: 'Humans set foot on another world for the first time, marking the pinnacle of the Space Race.',
    phase: 'Phase 11',
    category: 'Cosmology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-3.jpg'
  },
  {
    id: 'modern-4',
    year: '1945',
    yearNumeric: 1945,
    title: 'The Atomic Age',
    description: 'The detonation of the first nuclear weapon alters the geopolitical landscape forever.',
    phase: 'Phase 11',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-4.jpg'
  },
  {
    id: 'modern-5',
    year: '1903',
    yearNumeric: 1903,
    title: 'First Powered Flight',
    description: 'The Wright brothers achieve the first controlled, sustained flight of a powered, heavier-than-air aircraft.',
    phase: 'Phase 10',
    category: 'Transport',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-5.jpg'
  },
  {
    id: 'modern-6',
    year: '1880',
    yearNumeric: 1880,
    title: 'The Electric Light Bulb',
    description: 'Widespread adoption of electric lighting extends the day and transforms human productivity.',
    phase: 'Phase 9',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-6.jpg'
  },
  {
    id: 'modern-7',
    year: '1760',
    yearNumeric: 1760,
    title: 'The Industrial Revolution',
    description: 'The Energy Singularity. Humanity breaks the caloric ceiling by unlocking millions of years of stored sunlight (coal), trading a rural past for a mechanical future.',
    phase: 'Phase 9',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-7.jpg'
  },
  {
    id: 'modern-8',
    year: '1492',
    yearNumeric: 1492,
    title: 'The Columbian Exchange',
    description: 'Global exchange of goods, ideas, and populations follows the contact between the Old and New Worlds.',
    phase: 'Phase 8',
    category: 'Civilization',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-8.jpg'
  },
  {
    id: 'modern-9',
    year: '1440',
    yearNumeric: 1440,
    title: 'The Printing Press',
    description: 'Gutenberg\'s invention democratizes knowledge, fueling the Renaissance and the Scientific Revolution.',
    phase: 'Phase 7',
    category: 'Communications',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-9.jpg'
  },
  {
    id: 'modern-10',
    year: '476',
    yearNumeric: 476,
    title: 'Fall of the Western Roman Empire',
    description: 'The collapse of Rome marks the end of ancient history and the beginning of the Middle Ages.',
    phase: 'Phase 7',
    category: 'Civilization',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-10.jpg'
  },
  {
    id: 'modern-11',
    year: '0',
    yearNumeric: 0,
    title: 'The Common Era Begins',
    description: 'The approximate start of the Common Era (AD), used as the reference point for the modern calendar.',
    phase: 'Phase 6',
    category: 'Civilization',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-11.jpg'
  },
  {
    id: 'modern-12',
    year: '3200 BCE',
    yearNumeric: -3200,
    title: 'Invention of Writing',
    description: 'The first external hard drive. In Sumer, accountants press reeds into wet clay, inventing a system to freeze thought in time. Writing allows humanity to converse across millennia, birthing history itself.',
    phase: 'Phase 5',
    category: 'Communications',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-12.jpg'
  },
  {
    id: 'modern-13',
    year: '4500 BCE',
    yearNumeric: -4500,
    title: 'Invention of the Wheel',
    description: 'Motion Unbound. Humanity breaks the friction of the earth. With the wheel, we could carry more than we could lift and travel faster than we could walk.',
    phase: 'Phase 4',
    category: 'Transport',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-13.jpg'
  },
  {
    id: 'modern-14',
    year: '2560 BCE',
    yearNumeric: -2560,
    title: 'Great Pyramid of Giza',
    description: 'Construction of the Great Pyramid, the oldest of the Seven Wonders of the Ancient World.',
    phase: 'Phase 5',
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
    phase: 'Phase 4',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-1.jpg'
  },
  {
    id: 'art-venus',
    year: '28,000 BCE',
    yearNumeric: -28000,
    title: 'Venus of Willendorf',
    description: 'A pocket-sized limestone icon of fertility. By carving the ideal form, humanity began to shape reality to match its desires rather than just observing it.',
    phase: 'Phase 4',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-venus.jpg'
  },
  {
    id: 'art-gobekli',
    year: '9500 BCE',
    yearNumeric: -9500,
    title: 'Göbekli Tepe',
    description: 'The World\'s First Temple. Massive carved pillars prove that the urge to create sacred art preceded—and perhaps caused—the invention of agriculture.',
    phase: 'Phase 4',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-gobekli.jpg'
  },
  {
    id: 'art-ur',
    year: '2600 BCE',
    yearNumeric: -2600,
    title: 'Standard of Ur',
    description: 'One of the earliest examples of visual narrative. Using distinct registers (comic-strip style), it formalized how we tell stories through images.',
    phase: 'Phase 5',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-ur.jpg'
  },
  {
    id: 'art-nefertiti',
    year: '1345 BCE',
    yearNumeric: -1345,
    title: 'Bust of Nefertiti',
    description: 'A masterpiece of realism in an era of stylized symbols. Thutmose captured individual beauty so perfectly it transcends 3,000 years of time.',
    phase: 'Phase 5',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-nefertiti.jpg'
  },
  {
    id: 'art-terracotta',
    year: '210 BCE',
    yearNumeric: -210,
    title: 'The Terracotta Army',
    description: 'Industrial-scale art. 8,000 unique statues created to guard Emperor Qin, demonstrating that mass production and individual craftsmanship could coexist.',
    phase: 'Phase 5',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-terracotta.jpg'
  },
  {
    id: 'art-kells',
    year: '800',
    yearNumeric: 800,
    title: 'The Book of Kells',
    description: 'Insular art reaches its zenith. Monks turned text into a labyrinth of infinite complexity, proving that the Word was meant to be seen, not just read.',
    phase: 'Phase 6',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-kells.jpg'
  },
  {
    id: 'art-fankuan',
    year: '1000',
    yearNumeric: 1000,
    title: 'Daoist Landscapes (Fan Kuan)',
    description: 'While Europe painted religious icons, China perfected the "Shan Shui" landscape—art not as a picture of the world, but as a philosophy of nature\'s immensity.',
    phase: 'Phase 6',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-fankuan.jpg'
  },
  {
    id: 'art-2',
    year: '1144',
    yearNumeric: 1144,
    title: 'Gothic Light',
    description: 'The Basilica of Saint-Denis used stained glass as "medieval cinema," using light and image to educate the illiterate masses and placing emotional experience above structural weight.',
    phase: 'Phase 6',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-2.jpg'
  },
  {
    id: 'art-ife',
    year: '1300',
    yearNumeric: 1300,
    title: 'The Bronzes of Ife',
    description: 'West African sculptors achieve a level of naturalistic portraiture using *cire perdue* (lost wax) casting that rivals or surpasses the European Renaissance.',
    phase: 'Phase 6',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-ife.jpg'
  },
  {
    id: 'art-3',
    year: '1420',
    yearNumeric: 1420,
    title: 'The Perspective Shift',
    description: 'Brunelleschi\'s mathematical perspective aligned art with science, teaching humanity to see the world as a measurable, ordered 3D space.',
    phase: 'Phase 7',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-3.jpg'
  },
  {
    id: 'art-arnolfini',
    year: '1434',
    yearNumeric: 1434,
    title: 'The Arnolfini Portrait',
    description: 'Jan van Eyck masters oil paint. The mirror in the background reflects the entire room, symbolizing Art\'s new power to capture the totality of physical existence.',
    phase: 'Phase 7',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-arnolfini.jpg'
  },
  {
    id: 'art-greatwave',
    year: '1831',
    yearNumeric: 1831,
    title: 'The Great Wave',
    description: 'Hokusai\'s woodblock print becomes the first global icon of "Pop Art," influencing the Impressionists and demonstrating the power of reproducible media.',
    phase: 'Phase 9',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-greatwave.jpg'
  },
  {
    id: 'art-4',
    year: '1839',
    yearNumeric: 1839,
    title: 'The Crisis of Realism',
    description: 'The invention of the Daguerreotype forced painting to evolve. When a machine could capture reality perfectly, art was liberated to explore *emotion* rather than just *likeness*.',
    phase: 'Phase 9',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-4.jpg'
  },
  {
    id: 'art-5',
    year: '1874',
    yearNumeric: 1874,
    title: 'The Subjective Eye',
    description: 'Impressionists like Monet argued that reality isn\'t objects, but *light*. This shift paved the way for modern physics and the relativity of perception.',
    phase: 'Phase 9',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-5.jpg'
  },
  {
    id: 'art-starry',
    year: '1889',
    yearNumeric: 1889,
    title: 'Starry Night',
    description: 'Van Gogh abandons optical reality for emotional reality. The swirling sky isn\'t what he saw, but what he *felt*—the birth of Expressionism.',
    phase: 'Phase 9',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-starry.jpg'
  },
  {
    id: 'art-6',
    year: '1907',
    yearNumeric: 1907,
    title: 'Shattering Reality',
    description: 'Picasso\'s *Les Demoiselles d\'Avignon* broke the rule of a single viewpoint, attempting to represent 3D space and time on a 2D plane—paralleling Einstein\'s theories.',
    phase: 'Phase 10',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-6.jpg'
  },
  {
    id: 'art-7',
    year: '1917',
    yearNumeric: 1917,
    title: 'Art is Context',
    description: 'By signing a urinal, Duchamp declared that Art is defined by the artist\'s *choice*, not their craft. This conceptual leap birthed modern art.',
    phase: 'Phase 10',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-7.jpg'
  },
  {
    id: 'art-bauhaus',
    year: '1919',
    yearNumeric: 1919,
    title: 'The Bauhaus Founded',
    description: 'Walter Gropius unites art and technology. "Form follows function" becomes the mantra of the 20th century, shaping the very cities we live in.',
    phase: 'Phase 10',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-bauhaus.jpg'
  },
  {
    id: 'art-pollock',
    year: '1950',
    yearNumeric: 1950,
    title: 'Action Painting',
    description: 'Jackson Pollock puts the canvas on the floor. The painting is no longer a picture, but a record of the artist\'s physical movement.',
    phase: 'Phase 11',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-pollock.jpg'
  },
  {
    id: 'art-warhol',
    year: '1962',
    yearNumeric: 1962,
    title: 'Campbell\'s Soup Cans',
    description: 'Andy Warhol erases the line between high art and commercial product. If we consume images like soup, why treat them differently?',
    phase: 'Phase 11',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-warhol.jpg'
  },
  {
    id: 'art-paik',
    year: '1963',
    yearNumeric: 1963,
    title: 'Electronic Superhighway',
    description: 'Nam June Paik uses television sets as sculpture. Video becomes a medium, predicting a world where we are constantly bathed in electronic light.',
    phase: 'Phase 11',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-paik.jpg'
  },
  {
    id: 'art-basquiat',
    year: '1982',
    yearNumeric: 1982,
    title: 'The Radiant Child',
    description: 'Basquiat brings the raw energy of graffiti into the gallery. A synthesis of street culture, jazz, and history that challenges the white-dominated art world.',
    phase: 'Phase 11',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-basquiat.jpg'
  },
  {
    id: 'art-pixar',
    year: '1995',
    yearNumeric: 1995,
    title: 'The Digital Canvas (Toy Story)',
    description: 'The first fully computer-animated feature film. The pixel replaces the brushstroke, offering a new dimension of control over light and texture.',
    phase: 'Phase 12',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-pixar.jpg'
  },
  {
    id: 'art-nft',
    year: '2021',
    yearNumeric: 2021,
    title: 'The First 5000 Days',
    description: 'Beeple\'s $69M sale proves that digital scarcity is possible. Code becomes the certificate of authenticity, upending the economics of art.',
    phase: 'Phase 12',
    category: 'Art',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/art-nft.jpg'
  },
  {
    id: 'art-8',
    year: '2022',
    yearNumeric: 2022,
    title: 'The Synthetic Dream',
    description: 'Generative AI challenges the final frontier of human uniqueness, forcing us to redefine the role of the artist from "maker" to "curator".',
    phase: 'Phase 12',
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
    phase: 'Phase 5',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-shekel.jpg'
  },
  {
    id: 'money-lydia',
    year: '600 BCE',
    yearNumeric: -600,
    title: 'The Lydian Lion',
    description: 'The invention of the Coin. The State stamps a lion on electrum, guaranteeing weight and purity. Trust shifts from the metal itself to the King who minted it.',
    phase: 'Phase 5',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-lydia.jpg'
  },
  {
    id: 'money-paper',
    year: '1024',
    yearNumeric: 1024,
    title: 'Flying Money (Jiaozi)',
    description: 'China invents paper cash. Merchants realize that a slip of paper representing coins is lighter than the coins themselves. Value becomes symbolic.',
    phase: 'Phase 6',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-paper.jpg'
  },
  {
    id: 'modern-paper',
    year: '105 CE',
    yearNumeric: 105,
    title: 'Invention of Paper',
    description: 'The Canvas of Thought. Cai Lun standardizes papermaking in China. Knowledge leaves the heavy clay tablet and the expensive scroll, becoming light, cheap, and infinite.',
    phase: 'Phase 6',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-paper.jpg'
  },
  {
    id: 'modern-archimedes',
    year: '250 BCE',
    yearNumeric: -250,
    title: "Archimedes' Engines",
    description: "Give me a lever long enough. In Syracuse, Archimedes lays the foundations of mechanics and hydrostatics. His screw pumps water, his claw lifts ships, demonstrating that the physical world obeys mathematical laws.",
    phase: 'Phase 6',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-archimedes.jpg'
  },
  {
    id: 'modern-compass',
    year: '1044 CE',
    yearNumeric: 1044,
    title: 'The Magnetic Compass',
    description: "The south-pointing fish. Chinese scholars discover that a lodestone needle floats to align with the Earth's invisible field. This subtle force would eventually guide ships across open oceans, mapping the entire globe.",
    phase: 'Phase 7',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/modern-compass.jpg'
  },
  {
    id: 'ai-antikythera',
    year: '100 BCE',
    yearNumeric: -100,
    title: 'The Antikythera Mechanism',
    description: 'An ancient bronze computer lost to the sea. This clockwork cosmos predicted celestial movements with gear ratios of astonishing precision, a level of analog computing that would not be seen again for a thousand years.',
    phase: 'Phase 6',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-antikythera.jpg'
  },
  {
    id: 'money-medici',
    year: '1397',
    yearNumeric: 1397,
    title: 'The Ledger (Medici Bank)',
    description: 'The invention of modern banking. Money ceases to be a physical object and becomes an entry in a book (Credit), allowing value to be teleported across Europe.',
    phase: 'Phase 6',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-medici.jpg'
  },
  {
    id: 'money-gold',
    year: '1717',
    yearNumeric: 1717,
    title: 'The Isaac Newton Standard',
    description: 'Newton fixes the price of gold. The Gold Standard is born, tethering the abstract world of paper money to the physical reality of a rare metal.',
    phase: 'Phase 9',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-gold.jpg'
  },
  {
    id: 'money-card',
    year: '1950',
    yearNumeric: 1950,
    title: 'The Plastic Card',
    description: 'Diners Club introduces the credit card. Money becomes invisible, a frictionless promise to pay later, fueling the consumer age.',
    phase: 'Phase 11',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-card.jpg'
  },
  {
    id: 'money-nixon',
    year: '1971',
    yearNumeric: 1971,
    title: 'The Nixon Shock',
    description: 'The end of Gold. Nixon uncouples the dollar from metal. Money becomes pure "Fiat" (Let it be done)—backed by nothing but belief in the State.',
    phase: 'Phase 11',
    category: 'Economy',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/money-nixon.jpg'
  },
  {
    id: 'money-algo',
    year: '2010',
    yearNumeric: 2010,
    title: 'High-Frequency Trading',
    description: 'The Algorithms take over. Machines trade stocks in microseconds. Value fluctuates faster than human thought, detaching finance from the real economy.',
    phase: 'Phase 12',
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
    phase: 'Phase 5',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-aristotle.jpg'
  },
  {
    id: 'ai-alkhwarizmi',
    year: '820 CE',
    yearNumeric: 820,
    title: 'The Algorithm (Al-Khwarizmi)',
    description: 'The Algorithm. 1,000 years after Greek logic slept, the Golden Age of Islam awakened it. Al-Khwarizmi defined step-by-step procedures (Algebra), translating "reasoning" into "calculation".',
    phase: 'Phase 6',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-alkhwarizmi.jpg'
  },
  {
    id: 'ai-llull',
    year: '1305',
    yearNumeric: 1305,
    title: 'The Thinking Machine (Ars Magna)',
    description: 'Ramon Llull builds a paper machine of rotating wheels to combine concepts. It was the first attempt to mechanize the generation of new knowledge.',
    phase: 'Phase 6',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-llull.jpg'
  },
  {
    id: 'ai-jacquard',
    year: '1804',
    yearNumeric: 1804,
    title: 'Programmable Hardware (Jacquard Loom)',
    description: 'Joseph Marie Jacquard uses punch cards to control a loom. This separated the "hardware" (the loom) from the "software" (the pattern)—the birth of programming.',
    phase: 'Phase 9',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-jacquard.jpg'
  },
  {
    id: 'ai-lovelace',
    year: '1843',
    yearNumeric: 1843,
    title: 'The First Algorithm (Ada Lovelace)',
    description: 'Ada Lovelace realizes Babbage\'s machine can manipulate symbols, not just numbers. She writes the first code, envisioning a computer that could compose music.',
    phase: 'Phase 9',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-lovelace.jpg'
  },
  {
    id: 'ai-boole',
    year: '1847',
    yearNumeric: 1847,
    title: 'Binary Logic (George Boole)',
    description: 'Boole proves that logic can be represented as math (0s and 1s). This "Boolean Logic" becomes the physical language of every future computer circuit.',
    phase: 'Phase 9',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-boole.jpg'
  },
  {
    id: 'ai-principia',
    year: '1910',
    yearNumeric: 1910,
    title: 'Principia Mathematica',
    description: 'Russell and Whitehead attempt to encode all of mathematics into pure logic. Though they failed, they formalized the language that AI would eventually speak.',
    phase: 'Phase 10',
    category: 'Science',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-principia.jpg'
  },
  {
    id: 'ai-mcculloch',
    year: '1943',
    yearNumeric: 1943,
    title: 'The First Neural Net',
    description: 'McCulloch and Pitts propose the first mathematical model of a biological neuron, suggesting that a network of simple switches could perform complex logic.',
    phase: 'Phase 10',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-mcculloch.jpg'
  },
  {
    id: 'ai-dartmouth',
    year: '1956',
    yearNumeric: 1956,
    title: 'Artificial Intelligence Born',
    description: 'At the Dartmouth Conference, McCarthy, Minsky, and others coin the term "AI" and set the goal: "Every aspect of learning can be so precisely described that a machine can be made to simulate it."',
    phase: 'Phase 11',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-dartmouth.jpg'
  },
  {
    id: 'ai-perceptron',
    year: '1958',
    yearNumeric: 1958,
    title: 'The Perceptron',
    description: 'Frank Rosenblatt builds the Perceptron, a machine that can "learn" to recognize shapes. The NYT predicts it will soon "walk, talk, see, and write."',
    phase: 'Phase 11',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-perceptron.jpg'
  },
  {
    id: 'ai-winter',
    year: '1974',
    yearNumeric: 1974,
    title: 'The AI Winter',
    description: 'Overhyped promises fail to materialize. Funding dries up. The field learns a hard lesson: logic is easy, but intuition and ambiguity are hard.',
    phase: 'Phase 11',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-winter.jpg'
  },
  {
    id: 'ai-deepblue',
    year: '1997',
    yearNumeric: 1997,
    title: 'Deep Blue Defeats Kasparov',
    description: 'Brute force wins. IBM\'s Deep Blue beats the World Chess Champion, proving machines can outperform humans in complex, closed systems.',
    phase: 'Phase 12',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-deepblue.jpg'
  },
  {
    id: 'ai-alexnet',
    year: '2012',
    yearNumeric: 2012,
    title: 'The Deep Learning Explosion',
    description: 'AlexNet destroys the competition in image recognition using deep neural networks on GPUs. The modern AI boom officially begins.',
    phase: 'Phase 12',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-alexnet.jpg'
  },
  {
    id: 'ai-alphago',
    year: '2016',
    yearNumeric: 2016,
    title: 'AlphaGo',
    description: 'Move 37. AlphaGo defeats Lee Sedol at Go, a game of intuition. The machine makes a move so creative that it initially confused human experts.',
    phase: 'Phase 12',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-alphago.jpg'
  },
  {
    id: 'ai-transformer',
    year: '2017',
    yearNumeric: 2017,
    title: 'Attention Is All You Need',
    description: 'Google researchers invent the Transformer architecture. This mechanism allows models to understand context in vast amounts of data, paving the way for ChatGPT.',
    phase: 'Phase 12',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-transformer.jpg'
  },

  // --- Ancestry of AI Expansion ---
  {
    id: 'ai-leibniz-binary-system',
    year: '1679 CE',
    yearNumeric: 1679,
    title: "Leibniz Binary System",
    description: "Gottfried Wilhelm Leibniz perfects binary arithmetic, the language of 0s and 1s that will one day speak for all machines.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-leibniz-binary-system.jpg',
    category: 'Technology',
    phase: 'Phase 8'
  },
  {
    id: 'ai-the-difference-engine',
    year: '1822 CE',
    yearNumeric: 1822,
    title: "The Difference Engine",
    description: "Charles Babbage designs the first automatic mechanical calculator, dreaming of a machine that can crunch numbers without human error.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-the-difference-engine.jpg',
    category: 'Technology',
    phase: 'Phase 9'
  },

  {
    id: 'ai-cybernetics',
    year: '1948 CE',
    yearNumeric: 1948,
    title: "Cybernetics",
    description: "The Feedback Loop. Norbert Wiener reveals that the secret of control—whether in a thermostat, a brain, or a society—is information flowing in circles. This single insight unifies biology and engineering, laying the conceptual foundation for AI.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-cybernetics.jpg',
    category: 'Technology',
    phase: 'Phase 11'
  },
  {
    id: 'ai-asimovs-three-laws',
    year: '1950 CE',
    yearNumeric: 1950,
    title: "Asimov's Three Laws",
    description: "The Ethics Before the Machine. Asimov pens the Three Laws of Robotics in fiction, forcing humanity to confront the moral implications of intelligent machines decades before they exist. These laws would shape real AI policy.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-asimovs-three-laws.jpg',
    category: 'Technology',
    phase: 'Phase 11'
  },
  {
    id: 'ai-the-logic-theorist',
    year: '1956 CE',
    yearNumeric: 1956,
    title: "The Logic Theorist",
    description: "The First Thinking Program. Newell, Shaw, and Simon create a machine that can prove mathematical theorems—the first software to simulate human reasoning. It debuts at Dartmouth, sparking the AI revolution.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-the-logic-theorist.jpg',
    category: 'Technology',
    phase: 'Phase 11'
  },
  {
    id: 'ai-eliza',
    year: '1966 CE',
    yearNumeric: 1966,
    title: "ELIZA",
    description: "Joseph Weizenbaum creates the first chatbot, demonstrating how easily humans attribute emotion to simple code.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-eliza.jpg',
    category: 'Technology',
    phase: 'Phase 11'
  },
  {
    id: 'ai-perceptrons-book',
    year: '1969 CE',
    yearNumeric: 1969,
    title: "Perceptrons Book",
    description: "Minsky and Papert publish a critique of neural networks that inadvertently freezes funding for a decade (AI Winter).",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-perceptrons-book.jpg',
    category: 'Technology',
    phase: 'Phase 11'
  },
  {
    id: 'ai-expert-systems',
    year: '1980 CE',
    yearNumeric: 1980,
    title: "Expert Systems",
    description: "Knowledge Bottled. AI finds its first commercial success by encoding human expertise into if-then rules. These systems diagnose diseases and configure computers, proving AI can generate profit—not just papers.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-expert-systems.jpg',
    category: 'Technology',
    phase: 'Phase 11'
  },
  {
    id: 'ai-backpropagation',
    year: '1986 CE',
    yearNumeric: 1986,
    title: "Backpropagation",
    description: "Geoffrey Hinton and colleagues show that neural networks can learn from their own mistakes, solving the problem that stalled AI for decades.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-backpropagation.jpg',
    category: 'Technology',
    phase: 'Phase 11'
  },
  {
    id: 'ai-deep-blue-defeats-kasparov',
    year: '1997 CE',
    yearNumeric: 1997,
    title: "Deep Blue Defeats Kasparov",
    description: "Brute force logic conquers human intuition in chess, a watershed moment for machine intelligence.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-deep-blue-defeats-kasparov.jpg',
    phase: 'Phase 12',
    category: 'Technology',
    semanticTags: [
      { type: 'Topic', value: 'Artificial Intelligence' },
      { type: 'Entity', value: 'IBM' },
      { type: 'Entity', value: 'Garry Kasparov' }
    ]
  },
  {
    id: 'ai-watson-wins-jeopardy',
    year: '2011 CE',
    yearNumeric: 2011,
    title: "Watson Wins Jeopardy",
    description: "IBM's Watson demonstrates that machines can understand natural language processing and nuance.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-watson-wins-jeopardy.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'ai-imagenet-breakthrough',
    year: '2012 CE',
    yearNumeric: 2012,
    title: "ImageNet Breakthrough",
    description: "AlexNet smashes error rates in image recognition, proving the power of Deep Learning and GPUs.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-imagenet-breakthrough.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'ai-alphago-zero',
    year: '2017 CE',
    yearNumeric: 2017,
    title: "AlphaGo Zero",
    description: "AI teaches itself Go without human data, creating strategies alien to 3,000 years of human history.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-alphago-zero.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'ai-gpt-3',
    year: '2020 CE',
    yearNumeric: 2020,
    title: "GPT-3",
    description: "OpenAI releases a language model so powerful it blurs the line between human and machine writing.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-gpt-3.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'ai-generative-reality',
    year: '2024 CE',
    yearNumeric: 2024,
    title: "Generative Reality",
    description: "AI moves beyond text to creating video, code, and virtual worlds, challenging the nature of creativity itself.",
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-generative-reality.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  // --- New AI Events ---
  {
    id: 'ai-turing-machine',
    year: '1936',
    yearNumeric: 1936,
    title: 'Turing\'s Universal Machine',
    description: 'Alan Turing proves that a machine can compute anything that is computable, providing the theoretical blueprint for the digital brain.',
    phase: 'Phase 10',
    category: 'Technology',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/ai-turing-machine.jpg' // Dynamic placeholder
  },

  // --- To The Stars: Space Exploration Events ---
  {
    id: 'space-stonehenge',
    year: '3000 BCE',
    yearNumeric: -3000,
    title: 'Stonehenge Astronomy',
    description: 'The Cosmic Calendar. Ancient Britons align massive stones to track solstices, proving that watching the sky was humanity\'s first science.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-stonehenge.jpg',
    phase: 'Phase 5',
    category: 'Science'
  },
  {
    id: 'space-ptolemy',
    year: '150 CE',
    yearNumeric: 150,
    title: 'Ptolemaic Model',
    description: 'Earth at Center. Ptolemy\'s geocentric model dominates astronomy for 1,400 years—wrong, but beautifully predictive.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-ptolemy.jpg',
    phase: 'Phase 7',
    category: 'Science'
  },
  {
    id: 'space-kepler',
    year: '1609 CE',
    yearNumeric: 1609,
    title: 'Kepler\'s Laws',
    description: 'The Cosmic Choreography. Planets don\'t move in perfect circles—they dance in ellipses, obeying mathematical laws that Newton will later explain.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-kepler.jpg',
    phase: 'Phase 8',
    category: 'Science'
  },
  {
    id: 'space-herschel',
    year: '1781 CE',
    yearNumeric: 1781,
    title: 'Discovery of Uranus',
    description: 'Expanding the Map. William Herschel doubles the size of the known solar system, proving the cosmos is far larger than anyone imagined.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-herschel.jpg',
    phase: 'Phase 9',
    category: 'Science'
  },
  {
    id: 'space-einstein',
    year: '1915 CE',
    yearNumeric: 1915,
    title: 'General Relativity',
    description: 'Gravity Reimagined. Space bends, time warps, and the universe becomes a four-dimensional fabric—the physics of interstellar travel.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-einstein.jpg',
    phase: 'Phase 10',
    category: 'Science'
  },
  {
    id: 'space-goddard',
    year: '1926',
    yearNumeric: 1926,
    title: 'First Liquid-Fuel Rocket',
    description: 'The Birth of Rocketry. Robert Goddard launches a 10-foot rocket that flies for 2.5 seconds—the ancestor of every Saturn V and Falcon 9.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-goddard.jpg',
    phase: 'Phase 10',
    category: 'Technology'
  },
  {
    id: 'space-v2',
    year: '1944',
    yearNumeric: 1944,
    title: 'V-2 Rocket',
    description: 'Weapon to Spacecraft. Nazi Germany\'s terror weapon becomes the first human object to reach space. Its creator will build America\'s Moon rockets.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-v2.jpg',
    phase: 'Phase 10',
    category: 'Technology'
  },
  {
    id: 'space-laika',
    year: '1957',
    yearNumeric: 1957,
    title: 'Laika in Orbit',
    description: 'First Earthling in Space. A stray Moscow dog becomes the first living creature to orbit Earth—a one-way ticket to prove survival was possible.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-laika.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'space-gagarin',
    year: '1961',
    yearNumeric: 1961,
    title: 'Gagarin Orbits Earth',
    description: 'Humanity Leaves Home. Yuri Gagarin becomes the first human in space, completing one orbit and proving that flesh can survive the void.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-gagarin.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'space-kennedy',
    year: '1962',
    yearNumeric: 1962,
    title: 'Moon Speech',
    description: 'We Choose to Go. Kennedy commits America to landing a man on the Moon, not because it\'s easy, but because that goal will organize and measure the best of our energies.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-kennedy.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'space-tereshkova',
    year: '1963',
    yearNumeric: 1963,
    title: 'First Woman in Space',
    description: 'Breaking the Ceiling. Valentina Tereshkova orbits Earth 48 times, proving space has no gender—two decades before America sends a woman.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-tereshkova.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'space-spacewalk',
    year: '1965',
    yearNumeric: 1965,
    title: 'First Spacewalk',
    description: 'Walking in the Void. Alexei Leonov floats outside his capsule for 12 minutes, attached only by a tether, humanity\'s first step into the abyss.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-spacewalk.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'space-voyager',
    year: '1977',
    yearNumeric: 1977,
    title: 'Voyager Launches',
    description: 'Message in a Cosmic Bottle. Twin probes begin their grand tour of the outer planets, carrying golden records for any civilization that finds them.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-voyager.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'space-shuttle',
    year: '1981',
    yearNumeric: 1981,
    title: 'Space Shuttle Era',
    description: 'Reusable Dreams. Columbia launches, promising routine space travel. The Shuttle will build the ISS, deploy Hubble, and teach us the cost of ambition.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-shuttle.jpg',
    phase: 'Phase 11',
    category: 'Technology'
  },
  {
    id: 'space-hubble',
    year: '1990',
    yearNumeric: 1990,
    title: 'Hubble Space Telescope',
    description: 'The Eye Above Clouds. After a flawed mirror nearly kills the mission, Hubble reveals galaxies at the edge of time and expands our cosmic horizon.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-hubble.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'space-mars-pathfinder',
    year: '1997',
    yearNumeric: 1997,
    title: 'Mars Pathfinder',
    description: 'Return to the Red Planet. Sojourner becomes the first rover on Mars, proving that wheels can explore other worlds.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-mars-pathfinder.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },
  {
    id: 'space-spirit',
    year: '2004',
    yearNumeric: 2004,
    title: 'Spirit & Opportunity',
    description: 'The 90-Day Rovers That Ran for Years. Spirit and Opportunity land on Mars, designed for 90 days but exploring for 6 and 15 years.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-spirit.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },
  {
    id: 'space-curiosity',
    year: '2012',
    yearNumeric: 2012,
    title: 'Curiosity Rover',
    description: 'The Nuclear-Powered Explorer. A car-sized rover lands via sky crane, proving Mars once had conditions for life.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-curiosity.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },
  {
    id: 'space-falcon-landing',
    year: '2015',
    yearNumeric: 2015,
    title: 'SpaceX Rocket Landing',
    description: 'The Economics of Orbit Change. A Falcon 9 booster lands itself after reaching space—making rockets reusable and slashing the cost of the stars.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-falcon-landing.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'space-gravitational-waves',
    year: '2016',
    yearNumeric: 2016,
    title: 'Gravitational Waves Detected',
    description: 'Hearing the Universe. LIGO detects ripples in spacetime from colliding black holes, confirming Einstein and opening a new window on the cosmos.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-gravitational-waves.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },
  {
    id: 'space-perseverance',
    year: '2021',
    yearNumeric: 2021,
    title: 'Perseverance & Ingenuity',
    description: 'First Flight on Another World. The Mars helicopter Ingenuity proves powered flight is possible in thin alien atmospheres.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-perseverance.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },
  {
    id: 'space-jwst',
    year: '2022',
    yearNumeric: 2022,
    title: 'James Webb Telescope',
    description: 'Seeing the First Light. Webb peers back 13.5 billion years to the birth of the first galaxies, rewriting our understanding of cosmic dawn.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-jwst.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },
  {
    id: 'space-artemis',
    year: '2022',
    yearNumeric: 2022,
    title: 'Artemis Program',
    description: 'Return to the Moon. NASA\'s Artemis launches, aiming to land the first woman and first person of color on the lunar surface.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-artemis.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },
  {
    id: 'space-starship',
    year: '2024',
    yearNumeric: 2024,
    title: 'Starship Test Flights',
    description: 'The Mars Ship. SpaceX\'s Starship, designed to carry 100 humans to Mars, proves itself through iterative test flights.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/space-starship.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },

  // --- The Cure: History of Medicine Events ---
  {
    id: 'cure-trepanning',
    year: '10,000 BCE',
    yearNumeric: -10000,
    title: 'Trepanning',
    description: 'The First Surgery. Stone Age healers drill holes in skulls to release demons or pressure, marking the beginning of humanity\'s attempt to hack the body.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-trepanning.jpg',
    phase: 'Phase 4',
    category: 'Science'
  },
  {
    id: 'cure-imhotep',
    year: '2600 BCE',
    yearNumeric: -2600,
    title: 'Imhotep',
    description: 'The First Physician. An Egyptian architect and healer who treats disease as a physical problem, not a curse, laying the groundwork for diagnosis.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-imhotep.jpg',
    phase: 'Phase 5',
    category: 'Science'
  },
  {
    id: 'cure-ayurveda',
    year: '800 BCE',
    yearNumeric: -800,
    title: 'Ayurveda',
    description: 'Knowledge of Life. Early Indian medicine systematizes the body into doshas, emphasizing balance, diet, and surgery centuries before the West.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-ayurveda.jpg',
    phase: 'Phase 6',
    category: 'Science'
  },
  {
    id: 'cure-hippocrates',
    year: '400 BCE',
    yearNumeric: -400,
    title: 'Hippocrates',
    description: 'Do No Harm. The "Father of Medicine" separates healing from religion, insisting that diseases have natural causes, not divine ones.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-hippocrates.jpg',
    phase: 'Phase 6',
    category: 'Science'
  },
  {
    id: 'cure-galen',
    year: '180 CE',
    yearNumeric: 180,
    title: 'Galen',
    description: 'The Authority. His theory of the Four Humors dominates medicine for 1,500 years—incorrectly, but establishing anatomy as a discipline.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-galen.jpg',
    phase: 'Phase 7',
    category: 'Science'
  },
  {
    id: 'cure-avicenna',
    year: '1025 CE',
    yearNumeric: 1025,
    title: 'Canon of Medicine',
    description: 'The Prince of Physicians. Ibn Sina (Avicenna) compiles the medical knowledge of the world into a text that will guide doctors for centuries.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-avicenna.jpg',
    phase: 'Phase 7',
    category: 'Science'
  },
  {
    id: 'cure-vesalius',
    year: '1543 CE',
    yearNumeric: 1543,
    title: 'De Humani Corporis Fabrica',
    description: 'The Body Revealed. Vesalius dissects corpses to draw the first accurate maps of human anatomy, overthrowing Galen\'s ancient errors.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-vesalius.jpg',
    phase: 'Phase 8',
    category: 'Science'
  },
  {
    id: 'cure-harvey',
    year: '1628 CE',
    yearNumeric: 1628,
    title: 'Circulation of Blood',
    description: 'The Living Pump. William Harvey proves the heart pumps blood in a closed loop, turning the body into a hydraulic machine.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-harvey.jpg',
    phase: 'Phase 8',
    category: 'Science'
  },
  {
    id: 'cure-leeuwenhoek',
    year: '1676 CE',
    yearNumeric: 1676,
    title: 'Microscopy',
    description: 'The Invisible World. Van Leeuwenhoek peers through a lens and sees "animalcules," discovering the biological universe that lives within us.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-leeuwenhoek.jpg',
    phase: 'Phase 8',
    category: 'Science'
  },
  {
    id: 'cure-lind',
    year: '1747 CE',
    yearNumeric: 1747,
    title: 'Taming Scurvy',
    description: 'The First Clinical Trial. James Lind proves citrus cures scurvy by testing treatments on sailors, inventing the methodology of modern medicine.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-lind.jpg',
    phase: 'Phase 9',
    category: 'Science'
  },
  {
    id: 'cure-stethoscope',
    year: '1816 CE',
    yearNumeric: 1816,
    title: 'Stethoscope Invented',
    description: 'Listening In. Laennec invents a tool to hear the heart and lungs, allowing doctors to diagnose without cutting.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-stethoscope.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'cure-anesthesia',
    year: '1846 CE',
    yearNumeric: 1846,
    title: 'The End of Agony',
    description: 'Ether Day. The first public demonstration of anesthesia turns surgery from a torture endurance test into a precise science.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-anesthesia.jpg',
    phase: 'Phase 9',
    category: 'Science'
  },
  {
    id: 'cure-semmelweis',
    year: '1847 CE',
    yearNumeric: 1847,
    title: 'Hand Washing',
    description: 'The Savior of Mothers. Ignaz Semmelweis discovers that hand washing saves lives, but is mocked by doctors who refuse to believe they are carriers of death.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-semmelweis.jpg',
    phase: 'Phase 9',
    category: 'Science'
  },
  {
    id: 'cure-nightingale',
    year: '1854 CE',
    yearNumeric: 1854,
    title: 'The Lady with the Lamp',
    description: 'Data Saves Lives. Florence Nightingale revolutionizes military hospitals with sanitation and statistics, proving that most soldiers die from preventable disease, not battle wounds.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-nightingale.jpg',
    phase: 'Phase 9',
    category: 'Science'
  },
  {
    id: 'cure-pasteur',
    year: '1861 CE',
    yearNumeric: 1861,
    title: 'Germ Theory',
    description: 'Life from Life. Louis Pasteur proves that invisible microbes cause spoilage and disease, finally killing the idea of "spontaneous generation."',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-pasteur.jpg',
    phase: 'Phase 9',
    category: 'Science'
  },
  {
    id: 'cure-lister',
    year: '1867 CE',
    yearNumeric: 1867,
    title: 'Antiseptic Surgery',
    description: 'Sterile Field. Joseph Lister applies germ theory to surgery, spraying carbolic acid to kill the invisible killers in the operating room.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-lister.jpg',
    phase: 'Phase 9',
    category: 'Science'
  },
  {
    id: 'cure-koch',
    year: '1882 CE',
    yearNumeric: 1882,
    title: 'Identifying Pathogens',
    description: 'The Hunter of Microbes. Robert Koch isolates the bacteria causing tuberculosis, proving specific germs cause specific diseases.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-koch.jpg',
    phase: 'Phase 9',
    category: 'Science'
  },
  {
    id: 'cure-xray',
    year: '1895 CE',
    yearNumeric: 1895,
    title: 'Discovery of X-Rays',
    description: 'Seeing Through Flesh. Wilhelm Roentgen discovers a mysterious ray that reveals the skeleton inside the living body.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-xray.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'cure-flu',
    year: '1918 CE',
    yearNumeric: 1918,
    title: 'Spanish Flu',
    description: 'The Great Pandemic. An influenza virus kills 50 million people, more than WWI, reshaping public health forever.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-flu.jpg',
    phase: 'Phase 10',
    category: 'Science'
  },
  {
    id: 'cure-insulin',
    year: '1921 CE',
    yearNumeric: 1921,
    title: 'Discovery of Insulin',
    description: 'Resurrecting the Dying. Banting and Best isolate insulin, turning Type 1 diabetes from a death sentence into a manageable condition.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-insulin.jpg',
    phase: 'Phase 10',
    category: 'Science'
  },
  {
    id: 'cure-penicillin',
    year: '1928 CE',
    yearNumeric: 1928,
    title: 'Penicillin',
    description: 'The Mold That Saves. Alexander Fleming accidentally discovers the first antibiotic, beginning the era where infections are no longer fatal.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-penicillin.jpg',
    phase: 'Phase 10',
    category: 'Science'
  },
  {
    id: 'cure-dna', // Using new ID instead of verifying p11-13 to ensure accuracy
    year: '1953 CE',
    yearNumeric: 1953,
    title: 'The Double Helix',
    description: 'The Code of Life. Watson, Crick, Franklin, and Wilkins reveal DNA\'s structure, unlocking the biological software of every living thing.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-dna.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'cure-polio',
    year: '1955 CE',
    yearNumeric: 1955,
    title: 'Polio Vaccine',
    description: 'The Crusade Ended. Jonas Salk develops a vaccine that eradicates the terror of childhood paralysis, asking "Could you patent the sun?"',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-polio.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'cure-transplant',
    year: '1967 CE',
    yearNumeric: 1967,
    title: 'First Heart Transplant',
    description: 'Exchange of Engines. Christiaan Barnard performs the first human heart transplant, challenging the definition of death and the limits of surgery.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-transplant.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'cure-smallpox-end',
    year: '1980 CE',
    yearNumeric: 1980,
    title: 'Eradication of Smallpox',
    description: 'Victory. The WHO declares smallpox eradicated—the first and only time humanity has driven a disease to total extinction.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-smallpox-end.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'cure-hiv',
    year: '1981 CE',
    yearNumeric: 1981,
    title: 'HIV/AIDS Emerges',
    description: 'The New Plague. A mysterious virus challenges modern medicine, leading to decades of activism, research, and life-saving antiretrovirals.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-hiv.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'cure-genome',
    year: '2003 CE',
    yearNumeric: 2003,
    title: 'Human Genome Project',
    description: 'The Book of Man. Scientists finish sequencing the 3 billion letters of human DNA, opening the door to personalized medicine.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-genome.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },
  {
    id: 'cure-crispr',
    year: '2012 CE',
    yearNumeric: 2012,
    title: 'CRISPR Gene Editing',
    description: 'Molecular Scissors. Doudna and Charpentier develop a tool to edit DNA with precision, giving humanity control over its own evolution.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-crispr.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },
  {
    id: 'cure-mrna',
    year: '2020 CE',
    yearNumeric: 2020,
    title: 'mRNA Vaccines',
    description: 'Speed of Science. In response to COVID-19, mRNA technology is deployed, turning the body\'s cells into vaccine factories.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/cure-mrna.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },

  // --- GODS & MORTALS: The Evolution of Belief ---
  {
    id: 'gm-burial',
    year: '100,000 BCE',
    yearNumeric: -100000,
    title: 'First Burial Rituals',
    description: 'Beyond the Grave. Death becomes more than an ending—our ancestors begin burying their dead with care and offerings, hinting at belief in an afterlife.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-burial.jpg',
    phase: 'Phase 3',
    category: 'Philosophy'
  },
  {
    id: 'gm-cave-art',
    year: '40,000 BCE',
    yearNumeric: -40000,
    title: 'Cave Paintings as Sacred Acts',
    description: 'Communion with Spirits. Deep in the darkness of Lascaux and Altamira, humans paint animals and handprints—not decoration, but rituals to summon power.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-cave-art.jpg',
    phase: 'Phase 3',
    category: 'Philosophy'
  },
  {
    id: 'gm-shaman',
    year: '30,000 BCE',
    yearNumeric: -30000,
    title: 'Rise of the Shaman',
    description: 'The First Priests. Specialists of the invisible world emerge—healers, dreamers, and intermediaries who journey between the realm of mortals and gods.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-shaman.jpg',
    phase: 'Phase 3',
    category: 'Philosophy'
  },
  {
    id: 'gm-goddess',
    year: '25,000 BCE',
    yearNumeric: -25000,
    title: 'Venus Figurines',
    description: 'The Divine Feminine. Across Ice Age Europe, small statues of exaggerated female forms suggest worship of fertility and the creative power of women.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-goddess.jpg',
    phase: 'Phase 3',
    category: 'Philosophy'
  },
  {
    id: 'gm-animism',
    year: '10,000 BCE',
    yearNumeric: -10000,
    title: 'Animism & Nature Spirits',
    description: 'Everything Is Alive. Every rock, river, and storm has a soul. The world is sacred, and humans must negotiate with it.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-animism.jpg',
    phase: 'Phase 4',
    category: 'Philosophy'
  },
  {
    id: 'gm-ziggurats',
    year: '2100 BCE',
    yearNumeric: -2100,
    title: 'Ziggurats of Mesopotamia',
    description: 'Stairways to Heaven. Artificial mountains reaching toward the sky—platforms for the gods to descend to Earth and dwell among mortals.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-ziggurats.jpg',
    phase: 'Phase 5',
    category: 'Philosophy'
  },
  {
    id: 'gm-book-dead',
    year: '1500 BCE',
    yearNumeric: -1500,
    title: 'Egyptian Book of the Dead',
    description: 'Instructions for Eternity. Spells and guides for navigating the afterlife, where the heart is weighed against the feather of Ma\'at.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-book-dead.jpg',
    phase: 'Phase 5',
    category: 'Philosophy'
  },
  {
    id: 'gm-zoroaster',
    year: '600 BCE',
    yearNumeric: -600,
    title: 'Zoroastrianism',
    description: 'Light vs. Darkness. The prophet Zarathustra teaches of cosmic struggle between Ahura Mazda and Angra Mainyu—influencing Judaism, Christianity, and Islam.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-zoroaster.jpg',
    phase: 'Phase 6',
    category: 'Philosophy'
  },
  {
    id: 'gm-taoism',
    year: '500 BCE',
    yearNumeric: -500,
    title: 'Taoism Emerges',
    description: 'The Way That Cannot Be Named. Laozi\'s Tao Te Ching offers a path of harmony with the natural order—wu wei, effortless action.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-taoism.jpg',
    phase: 'Phase 6',
    category: 'Philosophy'
  },
  {
    id: 'gm-mystery',
    year: '500 BCE',
    yearNumeric: -500,
    title: 'Greek Mystery Cults',
    description: 'Secrets of Eleusis. Initiates undergo secret rituals promising visions of the afterlife and communion with Demeter and Persephone.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-mystery.jpg',
    phase: 'Phase 6',
    category: 'Philosophy'
  },
  {
    id: 'gm-maccabees',
    year: '165 BCE',
    yearNumeric: -165,
    title: 'Maccabean Revolt',
    description: 'Faith Over Empire. Jews rebel against forced Hellenization, establishing Hanukkah and the precedent of dying for one\'s beliefs.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-maccabees.jpg',
    phase: 'Phase 6',
    category: 'Philosophy'
  },
  {
    id: 'gm-paul',
    year: '50 CE',
    yearNumeric: 50,
    title: 'Paul\'s Missions',
    description: 'The Apostle to the Gentiles. A former persecutor becomes Christianity\'s greatest missionary, spreading the faith from Jerusalem to Rome.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-paul.jpg',
    phase: 'Phase 7',
    category: 'Philosophy'
  },
  {
    id: 'gm-councils',
    year: '325 CE',
    yearNumeric: 325,
    title: 'Council of Nicaea',
    description: 'Defining Orthodoxy. Emperors and bishops forge Christian doctrine, deciding which beliefs are truth and which are heresy.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-councils.jpg',
    phase: 'Phase 7',
    category: 'Philosophy'
  },
  {
    id: 'gm-benedict',
    year: '529 CE',
    yearNumeric: 529,
    title: 'Monasticism Spreads',
    description: 'Islands of Light. Benedict of Nursia establishes his Rule, and monasteries become sanctuaries of learning in a chaotic world.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-benedict.jpg',
    phase: 'Phase 7',
    category: 'Philosophy'
  },
  {
    id: 'gm-hijra',
    year: '622 CE',
    yearNumeric: 622,
    title: 'The Hijra',
    description: 'Year One. Muhammad\'s migration from Mecca to Medina marks the beginning of the Islamic calendar and the birth of the first Muslim community.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-hijra.jpg',
    phase: 'Phase 7',
    category: 'Philosophy'
  },
  {
    id: 'gm-golden-age',
    year: '800 CE',
    yearNumeric: 800,
    title: 'Islamic Golden Age',
    description: 'The House of Wisdom. Baghdad becomes the intellectual center of the world, translating Greek philosophy and advancing science under the Abbasid Caliphate.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-golden-age.jpg',
    phase: 'Phase 7',
    category: 'Philosophy'
  },
  {
    id: 'gm-inquisition',
    year: '1231 CE',
    yearNumeric: 1231,
    title: 'The Inquisition',
    description: 'Enforcing Belief. The Church creates a mechanism to root out heresy—belief becomes a matter of life and death across Europe.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-inquisition.jpg',
    phase: 'Phase 7',
    category: 'Philosophy'
  },
  {
    id: 'gm-kabbalah',
    year: '1280 CE',
    yearNumeric: 1280,
    title: 'Zohar & Jewish Mysticism',
    description: 'Hidden Dimensions. The Zohar reveals secret layers of Torah, mapping the ten sefirot and influencing Jewish thought for centuries.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-kabbalah.jpg',
    phase: 'Phase 7',
    category: 'Philosophy'
  },
  {
    id: 'gm-sikhism',
    year: '1500 CE',
    yearNumeric: 1500,
    title: 'Sikhism Founded',
    description: 'One God, Many Paths. Guru Nanak synthesizes Hindu and Islamic ideas into a new faith of equality, devotion, and community service in Punjab.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-sikhism.jpg',
    phase: 'Phase 8',
    category: 'Philosophy'
  },
  {
    id: 'gm-scientific',
    year: '1687 CE',
    yearNumeric: 1687,
    title: 'Science vs. Faith',
    description: 'The Clockwork Universe. Newton\'s Principia reveals a cosmos governed by mathematical laws—does God still wind the clock?',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-scientific.jpg',
    phase: 'Phase 8',
    category: 'Philosophy'
  },
  {
    id: 'gm-enlightenment',
    year: '1762 CE',
    yearNumeric: 1762,
    title: 'Enlightenment Critique',
    description: 'Reason Over Revelation. Voltaire and Rousseau challenge religious authority, planting seeds of secularism and religious tolerance.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-enlightenment.jpg',
    phase: 'Phase 9',
    category: 'Philosophy'
  },
  {
    id: 'gm-darwin',
    year: '1859 CE',
    yearNumeric: 1859,
    title: 'Origin of Species',
    description: 'Alternative Genesis. Darwin\'s theory offers an alternative creation story—not from clay, but from common ancestry through natural selection.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-darwin.jpg',
    phase: 'Phase 9',
    category: 'Philosophy'
  },
  {
    id: 'gm-secularism',
    year: '1905 CE',
    yearNumeric: 1905,
    title: 'Rise of Secularism',
    description: 'Church and State Divided. France passes laïcité, separating religion from government—a model for modern secular democracies worldwide.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-secularism.jpg',
    phase: 'Phase 10',
    category: 'Philosophy'
  },
  {
    id: 'gm-new-age',
    year: '1960 CE',
    yearNumeric: 1960,
    title: 'New Religious Movements',
    description: 'The Marketplace of Faith. From Hare Krishna to Scientology to the Jesus Movement, the 20th century spawns a diverse array of spiritual alternatives.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-new-age.jpg',
    phase: 'Phase 11',
    category: 'Philosophy'
  },
  {
    id: 'gm-interfaith',
    year: '2000 CE',
    yearNumeric: 2000,
    title: 'Interfaith Dialogue',
    description: 'Bridges Between Faiths. In a globalized world, religions that once warred now meet to find common ground and address shared challenges.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/gm-interfaith.jpg',
    phase: 'Phase 12',
    category: 'Philosophy'
  },

  // --- THE ART OF WAR: Military History Events ---
  {
    id: 'war-sargon',
    year: '2334 BCE',
    yearNumeric: -2334,
    title: 'The First Empire',
    description: 'The Conqueror King. Sargon of Akkad creates history\'s first empire with a revolutionary concept: a professional standing army loyal to the king, not the city.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-sargon.jpg',
    phase: 'Phase 5',
    category: 'Civilization'
  },
  {
    id: 'war-phalanx',
    year: '700 BCE',
    yearNumeric: -700,
    title: 'The Phalanx',
    description: 'The Wall of Shields. Greek hoplites discover that men standing shoulder-to-shoulder, shields interlocked, become an unstoppable human tank.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-phalanx.jpg',
    phase: 'Phase 6',
    category: 'Civilization'
  },
  {
    id: 'war-legion',
    year: '300 BCE',
    yearNumeric: -300,
    title: 'The Roman Legion',
    description: 'Flexibility Over Rigidity. Rome replaces the rigid phalanx with flexible cohorts of legionaries—soldiers who can fight in any terrain, in any formation.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-legion.jpg',
    phase: 'Phase 6',
    category: 'Civilization'
  },
  {
    id: 'war-stirrup',
    year: '500 CE',
    yearNumeric: 500,
    title: 'The Stirrup',
    description: 'A Revolution in a Loop. A simple metal ring transforms cavalry—now riders can brace for impact, turning mounted warriors into armored shock troops.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-stirrup.jpg',
    phase: 'Phase 7',
    category: 'Technology'
  },
  {
    id: 'war-trebuchet',
    year: '1100 CE',
    yearNumeric: 1100,
    title: 'The Trebuchet',
    description: 'The Castle Killer. Counterweight siege engines hurl 300-pound stones at castle walls, making "impregnable" fortresses suddenly vulnerable.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-trebuchet.jpg',
    phase: 'Phase 7',
    category: 'Technology'
  },
  {
    id: 'war-longbow',
    year: '1346 CE',
    yearNumeric: 1346,
    title: 'The Longbow at Crécy',
    description: 'Death of Chivalry. English yeomen with simple wooden bows slaughter French knights from 200 yards, proving that technology beats aristocracy.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-longbow.jpg',
    phase: 'Phase 7',
    category: 'Technology'
  },
  {
    id: 'war-gunpowder',
    year: '1453 CE',
    yearNumeric: 1453,
    title: 'Gunpowder Shatters Walls',
    description: 'The End of Castles. Ottoman cannons breach the thousand-year-old walls of Constantinople in weeks, ending the medieval world.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-gunpowder.jpg',
    phase: 'Phase 8',
    category: 'Technology'
  },
  {
    id: 'war-pike',
    year: '1476 CE',
    yearNumeric: 1476,
    title: 'Pike and Shot',
    description: 'The Swiss Solution. Peasants with 18-foot pikes and arquebuses destroy armored cavalry, revolutionizing European warfare forever.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-pike.jpg',
    phase: 'Phase 8',
    category: 'Technology'
  },
  {
    id: 'war-armada',
    year: '1588 CE',
    yearNumeric: 1588,
    title: 'The Spanish Armada',
    description: 'Command of the Seas. England defeats the world\'s mightiest fleet, proving that naval supremacy—not land armies—controls global destiny.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-armada.jpg',
    phase: 'Phase 8',
    category: 'Technology'
  },
  {
    id: 'war-napoleon',
    year: '1805 CE',
    yearNumeric: 1805,
    title: 'Napoleonic Warfare',
    description: 'The Art of the Campaign. At Austerlitz, Napoleon demonstrates that war is about speed, logistics, and destroying enemy armies—not capturing cities.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-napoleon.jpg',
    phase: 'Phase 9',
    category: 'Civilization'
  },
  {
    id: 'war-machine-gun',
    year: '1884 CE',
    yearNumeric: 1884,
    title: 'The Machine Gun',
    description: 'The Reaper. Hiram Maxim\'s automatic gun fires 600 rounds per minute, making frontal infantry assault suicidal—but generals don\'t listen.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-machine-gun.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'war-tank',
    year: '1916 CE',
    yearNumeric: 1916,
    title: 'The Tank',
    description: 'Breaking the Deadlock. Armored vehicles crawl across trenches and barbed wire, offering a way out of the bloody stalemate of WWI.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-tank.jpg',
    phase: 'Phase 10',
    category: 'Technology'
  },
  {
    id: 'war-blitzkrieg',
    year: '1940 CE',
    yearNumeric: 1940,
    title: 'Blitzkrieg',
    description: 'Lightning War. Germany combines tanks, planes, and radio into an unstoppable force, conquering France in six weeks where WWI took four years.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-blitzkrieg.jpg',
    phase: 'Phase 10',
    category: 'Technology'
  },
  {
    id: 'war-guerrilla',
    year: '1965 CE',
    yearNumeric: 1965,
    title: 'Guerrilla Warfare',
    description: 'The People\'s War. In Vietnam, irregular forces prove that superior firepower cannot defeat an enemy who controls the population.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-guerrilla.jpg',
    phase: 'Phase 11',
    category: 'Civilization'
  },
  {
    id: 'war-precision',
    year: '1991 CE',
    yearNumeric: 1991,
    title: 'Precision Warfare',
    description: 'The CNN War. Smart bombs hit within meters, destroying Iraq\'s military while the world watches live—war becomes surgical theater.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-precision.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'war-drone',
    year: '2010 CE',
    yearNumeric: 2010,
    title: 'The Drone Age',
    description: 'War Without Warriors. Operators in Nevada kill targets in Yemen—remote warfare raises profound questions about the future of conflict.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/war-drone.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },

  // --- PANDEMICS & PLAGUES: Disease History Events ---
  {
    id: 'plague-athens',
    year: '430 BCE',
    yearNumeric: -430,
    title: 'Plague of Athens',
    description: 'The Death of Democracy. A mysterious epidemic kills a third of Athens—including Pericles—helping end the Golden Age and lose the Peloponnesian War.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-athens.jpg',
    phase: 'Phase 6',
    category: 'Life'
  },
  {
    id: 'plague-antonine',
    year: '165 CE',
    yearNumeric: 165,
    title: 'Antonine Plague',
    description: 'Rome\'s Invisible Enemy. Soldiers returning from Parthia bring smallpox that kills 5 million, beginning the slow decline of the Roman Empire.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-antonine.jpg',
    phase: 'Phase 7',
    category: 'Life'
  },
  {
    id: 'plague-justinian',
    year: '541 CE',
    yearNumeric: 541,
    title: 'Plague of Justinian',
    description: 'The End of Antiquity. Bubonic plague kills 25-50 million, derailing Justinian\'s dream of restoring Rome and reshaping the Mediterranean world.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-justinian.jpg',
    phase: 'Phase 7',
    category: 'Life'
  },
  {
    id: 'plague-aztec',
    year: '1520 CE',
    yearNumeric: 1520,
    title: 'Smallpox Conquers Mexico',
    description: 'The Invisible Conquistador. Smallpox kills more Aztecs than Spanish swords, reducing the population from 25 million to 1 million in a century.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-aztec.jpg',
    phase: 'Phase 8',
    category: 'Life'
  },
  {
    id: 'plague-london',
    year: '1665 CE',
    yearNumeric: 1665,
    title: 'Great Plague of London',
    description: 'The Last Visit. Bubonic plague kills 100,000 Londoners—a quarter of the population—in a final European outbreak before mysteriously retreating.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-london.jpg',
    phase: 'Phase 8',
    category: 'Life'
  },
  {
    id: 'plague-cholera',
    year: '1854 CE',
    yearNumeric: 1854,
    title: 'Cholera & John Snow',
    description: 'The Detective Doctor. Snow maps cholera deaths to a single water pump, proving disease spreads through water—not "bad air"—and inventing epidemiology.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-cholera.jpg',
    phase: 'Phase 9',
    category: 'Life'
  },
  {
    id: 'plague-yellow',
    year: '1900 CE',
    yearNumeric: 1900,
    title: 'Yellow Fever & Panama',
    description: 'Mosquitoes vs. Empire. Yellow fever kills 22,000 French canal workers. Only after Walter Reed proves mosquitoes carry it can America finish the job.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-yellow.jpg',
    phase: 'Phase 9',
    category: 'Life'
  },
  {
    id: 'plague-typhoid',
    year: '1906 CE',
    yearNumeric: 1906,
    title: 'Typhoid Mary',
    description: 'The Healthy Carrier. Mary Mallon infects 51 people while showing no symptoms herself, raising questions about public health vs. individual liberty.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-typhoid.jpg',
    phase: 'Phase 10',
    category: 'Life'
  },
  {
    id: 'plague-who',
    year: '1948 CE',
    yearNumeric: 1948,
    title: 'World Health Organization',
    description: 'Global Health Governance. The UN creates a body to fight disease across borders, coordinating the campaigns that will eradicate smallpox and nearly end polio.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-who.jpg',
    phase: 'Phase 11',
    category: 'Life'
  },
  {
    id: 'plague-sars',
    year: '2003 CE',
    yearNumeric: 2003,
    title: 'SARS Outbreak',
    description: 'The Warning Ignored. A coronavirus kills 774 in Asia before containment works. Scientists warn a deadlier variant is inevitable. The world forgets.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-sars.jpg',
    phase: 'Phase 12',
    category: 'Life'
  },
  {
    id: 'plague-ebola',
    year: '2014 CE',
    yearNumeric: 2014,
    title: 'Ebola Outbreak',
    description: 'The Horror in West Africa. Ebola kills 11,000 in the largest outbreak ever, exposing how unprepared the world remains for emerging diseases.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-ebola.jpg',
    phase: 'Phase 12',
    category: 'Life'
  },
  {
    id: 'plague-antibiotic',
    year: '2015 CE',
    yearNumeric: 2015,
    title: 'Antibiotic Resistance Crisis',
    description: 'The Clock Runs Out. Bacteria evolve faster than we can make drugs. Superbugs threaten to return us to an era when any infection could kill.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/plague-antibiotic.jpg',
    phase: 'Phase 12',
    category: 'Life'
  },

  // --- WOMEN WHO CHANGED HISTORY ---
  {
    id: 'women-hatshepsut',
    year: '1479 BCE',
    yearNumeric: -1479,
    title: 'Hatshepsut',
    description: 'The King Who Was a Woman. For 22 years she ruled as Pharaoh, built monuments, and expanded trade—then her successors tried to erase her from history.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-hatshepsut.jpg',
    phase: 'Phase 5',
    category: 'Civilization'
  },
  {
    id: 'women-nefertiti',
    year: '1350 BCE',
    yearNumeric: -1350,
    title: 'Nefertiti',
    description: 'The Beautiful One Has Come. More than a pretty face—she may have ruled Egypt alone after Akhenaten, guiding a religious revolution.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-nefertiti.jpg',
    phase: 'Phase 5',
    category: 'Civilization'
  },
  {
    id: 'women-cleopatra',
    year: '51 BCE',
    yearNumeric: -51,
    title: 'Cleopatra VII',
    description: 'The Last Pharaoh. She spoke nine languages, seduced two Roman rulers, and when she fell, so did independent Egypt—forever.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-cleopatra.jpg',
    phase: 'Phase 6',
    category: 'Civilization'
  },
  {
    id: 'women-boudica',
    year: '60 CE',
    yearNumeric: 60,
    title: 'Boudica',
    description: 'The Warrior Queen. When Rome humiliated her, she raised an army and burned three cities—a reminder that empires can be challenged.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-boudica.jpg',
    phase: 'Phase 6',
    category: 'Civilization'
  },
  {
    id: 'women-hypatia',
    year: '400 CE',
    yearNumeric: 400,
    title: 'Hypatia of Alexandria',
    description: 'The Martyr of Reason. The greatest mathematician of her age, murdered by a mob—a symbol of ancient knowledge lost to religious fury.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-hypatia.jpg',
    phase: 'Phase 6',
    category: 'Philosophy'
  },
  {
    id: 'women-wu',
    year: '690 CE',
    yearNumeric: 690,
    title: 'Wu Zetian',
    description: 'The Dragon Empress. The only woman to rule China as Emperor in her own right—ruthless, brilliant, and unforgettable.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-wu.jpg',
    phase: 'Phase 7',
    category: 'Civilization'
  },
  {
    id: 'women-murasaki',
    year: '1000 CE',
    yearNumeric: 1000,
    title: 'Murasaki Shikibu',
    description: 'The First Novelist. A Japanese lady-in-waiting writes "The Tale of Genji"—the world\'s first psychological novel, a millennium before its time.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-murasaki.jpg',
    phase: 'Phase 7',
    category: 'Art'
  },
  {
    id: 'women-hildegard',
    year: '1150 CE',
    yearNumeric: 1150,
    title: 'Hildegard of Bingen',
    description: 'The Polymath Abbess. Composer, philosopher, scientist, mystic—she corresponded with popes and kings, centuries ahead of her time.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-hildegard.jpg',
    phase: 'Phase 7',
    category: 'Art'
  },
  {
    id: 'women-eleanor',
    year: '1137 CE',
    yearNumeric: 1137,
    title: 'Eleanor of Aquitaine',
    description: 'Queen Twice Over. She divorced a king, married another, led a Crusade, and raised two more kings—the most powerful woman in medieval Europe.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-eleanor.jpg',
    phase: 'Phase 7',
    category: 'Civilization'
  },
  {
    id: 'women-joan',
    year: '1429 CE',
    yearNumeric: 1429,
    title: 'Joan of Arc',
    description: 'The Maid of Orléans. A peasant girl who heard voices, led armies, saved France, and was burned at 19—then canonized as a saint.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-joan.jpg',
    phase: 'Phase 7',
    category: 'Civilization'
  },
  {
    id: 'women-catherine',
    year: '1762 CE',
    yearNumeric: 1762,
    title: 'Catherine the Great',
    description: 'The Enlightened Empress. A German princess who seized Russia, expanded its borders, and made it a European superpower through wit and will.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-catherine.jpg',
    phase: 'Phase 9',
    category: 'Civilization'
  },
  {
    id: 'women-olympe',
    year: '1791 CE',
    yearNumeric: 1791,
    title: 'Declaration of the Rights of Woman',
    description: 'The First Feminist Manifesto. Olympe de Gouges demands equality—and is guillotined for it. Her words outlived her executioners.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-olympe.jpg',
    phase: 'Phase 9',
    category: 'Civilization'
  },
  {
    id: 'women-tubman',
    year: '1850 CE',
    yearNumeric: 1850,
    title: 'Harriet Tubman',
    description: 'Moses of Her People. She escaped slavery, then went back 13 times to free 70 more—"I never ran my train off the track and I never lost a passenger."',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-tubman.jpg',
    phase: 'Phase 9',
    category: 'Civilization'
  },
  {
    id: 'women-suffrage',
    year: '1893 CE',
    yearNumeric: 1893,
    title: 'Women\'s Suffrage Begins',
    description: 'New Zealand First. Women vote for the first time in a national election—a crack in the wall that would eventually crumble worldwide.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-suffrage.jpg',
    phase: 'Phase 9',
    category: 'Civilization'
  },
  {
    id: 'women-curie',
    year: '1898 CE',
    yearNumeric: 1898,
    title: 'Marie Curie',
    description: 'Radiant Genius. The first woman to win a Nobel, then the first person to win two—she discovered radioactivity and paid with her life.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-curie.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'women-pankhurst',
    year: '1913 CE',
    yearNumeric: 1913,
    title: 'Emmeline Pankhurst',
    description: 'Deeds Not Words. She was jailed, force-fed, and denounced—but her militancy won British women the vote. "We are here not because we are law-breakers; we are here in our efforts to become law-makers."',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-pankhurst.jpg',
    phase: 'Phase 10',
    category: 'Civilization'
  },
  {
    id: 'women-earhart',
    year: '1932 CE',
    yearNumeric: 1932,
    title: 'Amelia Earhart',
    description: 'First Across Alone. She flew solo across the Atlantic, then vanished over the Pacific—a mystery, but her courage is not.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-earhart.jpg',
    phase: 'Phase 10',
    category: 'Technology'
  },
  {
    id: 'women-parks',
    year: '1955 CE',
    yearNumeric: 1955,
    title: 'Rosa Parks',
    description: 'The Seamstress Who Sat. By refusing to give up her seat, she ignited the Montgomery Bus Boycott and the modern Civil Rights movement.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-parks.jpg',
    phase: 'Phase 11',
    category: 'Civilization'
  },
  {
    id: 'women-valentina',
    year: '1963 CE',
    yearNumeric: 1963,
    title: 'Valentina Tereshkova',
    description: 'First Woman in Space. A textile worker became a cosmonaut and orbited Earth 48 times—"Hey sky, take off your hat, I am coming!"',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-valentina.jpg',
    phase: 'Phase 11',
    category: 'Technology'
  },
  {
    id: 'women-thatcher',
    year: '1979 CE',
    yearNumeric: 1979,
    title: 'Margaret Thatcher',
    description: 'The Iron Lady. Love her or hate her, she transformed Britain, winning three elections and reshaping the global economic order.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-thatcher.jpg',
    phase: 'Phase 11',
    category: 'Civilization'
  },
  {
    id: 'women-bhutto',
    year: '1988 CE',
    yearNumeric: 1988,
    title: 'Benazir Bhutto',
    description: 'Breaking the Barrier. The first woman to lead a Muslim-majority nation—twice PM of Pakistan, assassinated but never silenced.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-bhutto.jpg',
    phase: 'Phase 12',
    category: 'Civilization'
  },
  {
    id: 'women-merkel',
    year: '2005 CE',
    yearNumeric: 2005,
    title: 'Angela Merkel',
    description: 'The Quiet Chancellor. For 16 years she led Germany and shaped Europe—a physicist who became the world\'s most powerful woman.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-merkel.jpg',
    phase: 'Phase 12',
    category: 'Civilization'
  },
  {
    id: 'women-malala',
    year: '2012 CE',
    yearNumeric: 2012,
    title: 'Malala Yousafzai',
    description: 'The Girl Who Stood Up. Shot by the Taliban for wanting an education, she became the youngest Nobel laureate—"One child, one teacher, one book, one pen can change the world."',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-malala.jpg',
    phase: 'Phase 12',
    category: 'Philosophy'
  },
  {
    id: 'women-sappho',
    year: '610 BCE',
    yearNumeric: -610,
    title: 'Sappho',
    description: 'The Tenth Muse. Her poetry was so powerful that Plato called her the tenth Muse—and her love lyrics invented the language of the heart.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-sappho.jpg',
    phase: 'Phase 6',
    category: 'Art'
  },
  {
    id: 'women-christine',
    year: '1405 CE',
    yearNumeric: 1405,
    title: 'Christine de Pizan',
    description: 'The First Feminist Writer. A widow who became Europe\'s first professional female author, defending women\'s worth and intellect centuries before the movement had a name.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-christine.jpg',
    phase: 'Phase 7',
    category: 'Art'
  },
  {
    id: 'women-sojourner',
    year: '1851 CE',
    yearNumeric: 1851,
    title: 'Sojourner Truth',
    description: 'Ain\'t I a Woman? Born a slave, she became an abolitionist and women\'s rights activist whose speeches still resonate today.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-sojourner.jpg',
    phase: 'Phase 9',
    category: 'Philosophy'
  },
  {
    id: 'women-beauvoir',
    year: '1949 CE',
    yearNumeric: 1949,
    title: 'Simone de Beauvoir',
    description: 'One Is Not Born a Woman. Her book "The Second Sex" launched second-wave feminism, arguing that gender is constructed, not natural.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/women-beauvoir.jpg',
    phase: 'Phase 11',
    category: 'Philosophy'
  },

  // --- EMPIRES OF TRADE ---
  {
    id: 'trade-obsidian',
    year: '7000 BCE',
    yearNumeric: -7000,
    title: 'Obsidian Trade Networks',
    description: 'The First Global Trade. Volcanic glass from Anatolia travels 500 miles to villages that need sharp blades—the earliest evidence of long-distance commerce.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-obsidian.jpg',
    phase: 'Phase 4',
    category: 'Economy'
  },
  {
    id: 'trade-bronze',
    year: '3000 BCE',
    yearNumeric: -3000,
    title: 'Bronze Age Trade Routes',
    description: 'The Alloy That Required Trade. Bronze needs tin from Afghanistan and copper from Cyprus—no single region can make it alone. Trade becomes essential.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-bronze.jpg',
    phase: 'Phase 5',
    category: 'Economy'
  },
  {
    id: 'trade-phoenicia',
    year: '1200 BCE',
    yearNumeric: -1200,
    title: 'Phoenician Merchants',
    description: 'The Purple Traders. From Tyre and Sidon they sail the Mediterranean, trading purple dye and spreading the alphabet that will become yours.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-phoenicia.jpg',
    phase: 'Phase 6',
    category: 'Economy'
  },
  {
    id: 'trade-rome-china',
    year: '166 CE',
    yearNumeric: 166,
    title: 'Rome Meets China',
    description: 'The Extremes Connect. Roman merchants reach the Han court—the first recorded direct contact between the two great empires at either end of the world.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-rome-china.jpg',
    phase: 'Phase 7',
    category: 'Economy'
  },
  {
    id: 'trade-vikings',
    year: '800 CE',
    yearNumeric: 800,
    title: 'Viking Trade Routes',
    description: 'Traders and Raiders. Norse longships carry goods from Baghdad to Greenland—Arab silver found in Swedish graves proves the reach of their networks.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-vikings.jpg',
    phase: 'Phase 7',
    category: 'Economy'
  },
  {
    id: 'trade-venice',
    year: '1200 CE',
    yearNumeric: 1200,
    title: 'Rise of Venice',
    description: 'The Merchant Republic. A city built on water becomes the richest in Europe by controlling trade between East and West—buying low, selling high.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-venice.jpg',
    phase: 'Phase 7',
    category: 'Economy'
  },
  {
    id: 'trade-hanseatic',
    year: '1350 CE',
    yearNumeric: 1350,
    title: 'Hanseatic League',
    description: 'Commerce Without Borders. German merchants form a trading alliance that spans from London to Novgorod—the first multinational corporation.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-hanseatic.jpg',
    phase: 'Phase 7',
    category: 'Economy'
  },
  {
    id: 'trade-eic',
    year: '1600 CE',
    yearNumeric: 1600,
    title: 'English East India Company',
    description: 'Company Becomes Empire. A trading company gets its own army, conquers a subcontinent, and rules 200 million people—profit above all.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-eic.jpg',
    phase: 'Phase 8',
    category: 'Economy'
  },
  {
    id: 'trade-voc',
    year: '1602 CE',
    yearNumeric: 1602,
    title: 'Dutch East India Company',
    description: 'The First Corporation. The VOC invents the stock market, the dividend, and the hostile takeover—and controls half the world\'s trade.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-voc.jpg',
    phase: 'Phase 8',
    category: 'Economy'
  },
  {
    id: 'trade-slave',
    year: '1619 CE',
    yearNumeric: 1619,
    title: 'Atlantic Slave Trade',
    description: 'Commerce in Human Beings. Twelve million Africans are shipped across the Atlantic—the darkest chapter in the history of trade.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-slave.jpg',
    phase: 'Phase 8',
    category: 'Economy'
  },
  {
    id: 'trade-tea',
    year: '1662 CE',
    yearNumeric: 1662,
    title: 'Tea Trade Begins',
    description: 'The Leaf That Built an Empire. Catherine of Braganza brings tea to England. The British addiction will reshape China, India, and the world.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-tea.jpg',
    phase: 'Phase 8',
    category: 'Economy'
  },
  {
    id: 'trade-suez',
    year: '1869 CE',
    yearNumeric: 1869,
    title: 'Suez Canal Opens',
    description: 'Shortcut to Empire. A 120-mile ditch cuts travel from Europe to Asia by 4,000 miles—whoever controls it controls world trade.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-suez.jpg',
    phase: 'Phase 9',
    category: 'Economy'
  },
  {
    id: 'trade-standard',
    year: '1870 CE',
    yearNumeric: 1870,
    title: 'Standard Oil',
    description: 'The First Monopoly. Rockefeller controls 90% of American oil, inventing vertical integration—and making antitrust law necessary.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-standard.jpg',
    phase: 'Phase 9',
    category: 'Economy'
  },
  {
    id: 'trade-panama',
    year: '1914 CE',
    yearNumeric: 1914,
    title: 'Panama Canal Opens',
    description: 'America\'s Gateway. A 50-mile canal links two oceans, reshaping global shipping and making the U.S. a superpower.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-panama.jpg',
    phase: 'Phase 10',
    category: 'Economy'
  },
  {
    id: 'trade-gatt',
    year: '1947 CE',
    yearNumeric: 1947,
    title: 'GATT Created',
    description: 'Rules for the World. Twenty-three nations agree to reduce tariffs—the first step toward globalization as policy.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-gatt.jpg',
    phase: 'Phase 11',
    category: 'Economy'
  },
  {
    id: 'trade-container',
    year: '1956 CE',
    yearNumeric: 1956,
    title: 'Shipping Container',
    description: 'The Box That Changed Everything. Malcolm McLean\'s standardized container makes global trade cheap enough to ship anything anywhere.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-container.jpg',
    phase: 'Phase 11',
    category: 'Economy'
  },
  {
    id: 'trade-amazon',
    year: '1994 CE',
    yearNumeric: 1994,
    title: 'Amazon Founded',
    description: 'Everything Store. Jeff Bezos starts selling books online. Thirty years later, Amazon moves $500 billion in goods and employs 1.5 million people.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-amazon.jpg',
    phase: 'Phase 12',
    category: 'Economy'
  },
  {
    id: 'trade-wto',
    year: '1995 CE',
    yearNumeric: 1995,
    title: 'WTO Founded',
    description: 'Globalization\'s Referee. The World Trade Organization replaces GATT, creating enforceable rules for 164 nations and $19 trillion in trade.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-wto.jpg',
    phase: 'Phase 12',
    category: 'Economy'
  },
  {
    id: 'trade-alibaba',
    year: '1999 CE',
    yearNumeric: 1999,
    title: 'Alibaba Founded',
    description: 'The Eastern Giant. Jack Ma creates a platform connecting Chinese factories to the world—enabling millions of small businesses to trade globally.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-alibaba.jpg',
    phase: 'Phase 12',
    category: 'Economy'
  },
  {
    id: 'trade-crisis',
    year: '2021 CE',
    yearNumeric: 2021,
    title: 'Supply Chain Crisis',
    description: 'The World Discovers Dependencies. A ship blocks Suez, chips run out, shelves go empty—globalization\'s fragility is revealed.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/trade-crisis.jpg',
    phase: 'Phase 12',
    category: 'Economy'
  },

  // ═══════════════════════════════════════════════════════════════
  // POWER TRIP JOURNEY - Energy history from fire to fusion
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'power-fire',
    year: '400,000 BCE',
    yearNumeric: -400000,
    title: 'Control of Fire',
    description: 'The First Energy Revolution. Homo erectus masters fire—cooking food, warding off predators, and unlocking calories that would fuel bigger brains.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-fire.jpg',
    phase: 'Phase 4',
    category: 'Technology'
  },
  {
    id: 'power-hearth',
    year: '12,000 BCE',
    yearNumeric: -12000,
    title: 'The Permanent Hearth',
    description: 'Home Base. As humans settle, fire pits become permanent. The hearth becomes the center of social life—cooking, warmth, and storytelling.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-hearth.jpg',
    phase: 'Phase 5',
    category: 'Technology'
  },
  {
    id: 'power-waterwheel',
    year: '300 BCE',
    yearNumeric: -300,
    title: 'The Water Wheel',
    description: 'Outsourcing Muscle. Greeks and Romans harness flowing water to grind grain—the first machine to replace human labor with natural force.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-waterwheel.jpg',
    phase: 'Phase 6',
    category: 'Technology'
  },
  {
    id: 'power-windmill',
    year: '900 CE',
    yearNumeric: 900,
    title: 'The Windmill',
    description: 'Catching the Breeze. Persian engineers build vertical-axis windmills to pump water and grind grain, harvesting energy from thin air.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-windmill.jpg',
    phase: 'Phase 7',
    category: 'Technology'
  },
  {
    id: 'power-coal',
    year: '1600 CE',
    yearNumeric: 1600,
    title: 'The Coal Age Begins',
    description: 'Black Gold. England\'s forests are depleted. Coal mines open, and humanity discovers the concentrated solar energy stored in ancient swamps.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-coal.jpg',
    phase: 'Phase 8',
    category: 'Technology'
  },
  {
    id: 'power-newcomen',
    year: '1712 CE',
    yearNumeric: 1712,
    title: 'Newcomen\'s Steam Engine',
    description: 'The First Hot Breath. Thomas Newcomen builds the first practical steam engine to pump water from coal mines—inefficient, but revolutionary.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-newcomen.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'power-watt',
    year: '1765 CE',
    yearNumeric: 1765,
    title: 'Watt\'s Improved Steam Engine',
    description: 'The Engine That Changed Everything. James Watt\'s separate condenser triples efficiency, making steam power practical for factories.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-watt.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'power-railway',
    year: '1830 CE',
    yearNumeric: 1830,
    title: 'The Railway Age',
    description: 'Steam on Wheels. The Liverpool-Manchester Railway opens, proving steam can move people and goods faster than horses ever could.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-railway.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'power-oil',
    year: '1859 CE',
    yearNumeric: 1859,
    title: 'Drake Strikes Oil',
    description: 'The Black Geyser. Edwin Drake drills the first commercial oil well in Pennsylvania. A lamp fuel at first, petroleum will reshape the 20th century.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-oil.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'power-dynamo',
    year: '1866 CE',
    yearNumeric: 1866,
    title: 'The Dynamo',
    description: 'Magnetism Becomes Power. Werner von Siemens invents the self-exciting dynamo—electricity can now be generated at industrial scale.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-dynamo.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'power-edison',
    year: '1882 CE',
    yearNumeric: 1882,
    title: 'Edison\'s Pearl Street Station',
    description: 'The Grid Is Born. Edison opens the first central power station in Manhattan, lighting 400 lamps and inventing the electric utility industry.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-edison.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'power-tesla',
    year: '1888 CE',
    yearNumeric: 1888,
    title: 'Tesla\'s AC Motor',
    description: 'The Current War. Nikola Tesla patents the alternating current motor. AC can travel hundreds of miles; Edison\'s DC cannot. Tesla wins.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-tesla.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'power-modelt',
    year: '1908 CE',
    yearNumeric: 1908,
    title: 'The Model T',
    description: 'Oil\'s Addiction Begins. Ford\'s assembly line makes cars affordable. By 1920, America is hooked on gasoline—and so is the world.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-modelt.jpg',
    phase: 'Phase 10',
    category: 'Technology'
  },
  {
    id: 'power-hoover',
    year: '1936 CE',
    yearNumeric: 1936,
    title: 'Hoover Dam',
    description: 'Taming the River. The largest dam in the world is completed, generating enough hydroelectric power for 1.3 million homes.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-hoover.jpg',
    phase: 'Phase 10',
    category: 'Technology'
  },
  {
    id: 'power-fermi',
    year: '1942 CE',
    yearNumeric: 1942,
    title: 'Fermi\'s Nuclear Pile',
    description: 'Splitting the Atom. Under a Chicago stadium, Enrico Fermi achieves the first controlled nuclear chain reaction. A new era begins.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-fermi.jpg',
    phase: 'Phase 10',
    category: 'Technology'
  },
  {
    id: 'power-hiroshima',
    year: '1945 CE',
    yearNumeric: 1945,
    title: 'Atomic Fire',
    description: 'The Destroyer of Worlds. Hiroshima and Nagasaki reveal nuclear energy\'s terrible power—enough to end civilization or power it forever.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-hiroshima.jpg',
    phase: 'Phase 10',
    category: 'Technology'
  },
  {
    id: 'power-solar',
    year: '1954 CE',
    yearNumeric: 1954,
    title: 'First Solar Cell',
    description: 'Bottling Sunlight. Bell Labs creates the first practical silicon solar cell—6% efficient, but proof that sunlight can become electricity.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-solar.jpg',
    phase: 'Phase 11',
    category: 'Technology'
  },
  {
    id: 'power-obninsk',
    year: '1954 CE',
    yearNumeric: 1954,
    title: 'First Nuclear Power Plant',
    description: 'Atoms for Peace. The Obninsk reactor in the Soviet Union becomes the first nuclear plant to generate electricity for a power grid.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-obninsk.jpg',
    phase: 'Phase 11',
    category: 'Technology'
  },
  {
    id: 'power-opec',
    year: '1973 CE',
    yearNumeric: 1973,
    title: 'OPEC Oil Embargo',
    description: 'The Wake-Up Call. Arab nations embargo oil to the West. Gas lines form, prices quadruple, and the world learns how dependent it is on petroleum.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-opec.jpg',
    phase: 'Phase 11',
    category: 'Economy'
  },
  {
    id: 'power-tmi',
    year: '1979 CE',
    yearNumeric: 1979,
    title: 'Three Mile Island',
    description: 'Nuclear Fear. A partial meltdown in Pennsylvania releases no significant radiation—but public trust in nuclear power never recovers.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-tmi.jpg',
    phase: 'Phase 11',
    category: 'Technology'
  },
  {
    id: 'power-chernobyl',
    year: '1986 CE',
    yearNumeric: 1986,
    title: 'Chernobyl Disaster',
    description: 'The Worst Case. Reactor 4 explodes, spreading radiation across Europe. The disaster haunts nuclear power for a generation.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-chernobyl.jpg',
    phase: 'Phase 11',
    category: 'Technology'
  },
  {
    id: 'power-windfarm',
    year: '1991 CE',
    yearNumeric: 1991,
    title: 'Offshore Wind Era',
    description: 'Harvesting the Sea Breeze. Denmark builds the world\'s first offshore wind farm at Vindeby—11 turbines proving wind can scale.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-windfarm.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'power-tesla-ev',
    year: '2008 CE',
    yearNumeric: 2008,
    title: 'Tesla Roadster',
    description: 'Electric Renaissance. Tesla proves electric cars can be fast and desirable. Silicon Valley disrupts Detroit.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-tesla-ev.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'power-fukushima',
    year: '2011 CE',
    yearNumeric: 2011,
    title: 'Fukushima Disaster',
    description: 'Nature\'s Revenge. An earthquake and tsunami overwhelm three reactors in Japan. Germany decides to phase out nuclear entirely.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-fukushima.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'power-paris',
    year: '2015 CE',
    yearNumeric: 2015,
    title: 'Paris Climate Agreement',
    description: 'The World Agrees. 196 nations commit to limiting warming to 1.5°C, acknowledging that our energy choices are changing the planet.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-paris.jpg',
    phase: 'Phase 12',
    category: 'Economy'
  },
  {
    id: 'power-iter',
    year: '2020 CE',
    yearNumeric: 2020,
    title: 'ITER Construction',
    description: 'Chasing the Stars. The world\'s largest fusion experiment begins assembly in France—humanity\'s attempt to bottle the power of the sun.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-iter.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'power-fusion',
    year: '2022 CE',
    yearNumeric: 2022,
    title: 'Fusion Ignition',
    description: 'Energy Gain Achieved. For the first time, a fusion reaction produces more energy than was put in. The dream moves closer to reality.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-fusion.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'power-lamp',
    year: '3000 BCE',
    yearNumeric: -3000,
    title: 'The Oil Lamp',
    description: 'Portable Light. Humans learn to burn olive oil in clay vessels—extending the productive day beyond sunset for the first time.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-lamp.jpg',
    phase: 'Phase 5',
    category: 'Technology'
  },
  {
    id: 'power-internal',
    year: '1876 CE',
    yearNumeric: 1876,
    title: 'Internal Combustion Engine',
    description: 'The Engine Inside. Otto perfects the four-stroke engine—compact enough to fit in a carriage and powerful enough to change the world.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-internal.jpg',
    phase: 'Phase 9',
    category: 'Technology'
  },
  {
    id: 'power-grid',
    year: '2003 CE',
    yearNumeric: 2003,
    title: 'The Blackout',
    description: 'The Grid Fails. A software bug cascades through the Northeast, leaving 55 million people in darkness and revealing the fragility of our electric civilization.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/power-grid.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },

  // ═══════════════════════════════════════════════════════════════
  // RIGHTS & REVOLUTIONS JOURNEY - How humanity invented freedom
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'rights-hammurabi',
    year: '1754 BCE',
    yearNumeric: -1754,
    title: 'Code of Hammurabi',
    description: 'The First Written Law. A Babylonian king carves 282 laws into stone, establishing that even rulers are bound by rules—and that justice should be public, not secret.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-hammurabi.jpg',
    phase: 'Phase 5',
    category: 'Civilization'
  },
  {
    id: 'rights-cyrus',
    year: '539 BCE',
    yearNumeric: -539,
    title: 'Cyrus Cylinder',
    description: 'The First Declaration. After conquering Babylon, Cyrus the Great proclaims religious tolerance and freedom—history\'s first charter of human rights.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-cyrus.jpg',
    phase: 'Phase 6',
    category: 'Civilization'
  },
  {
    id: 'rights-roman-law',
    year: '450 BCE',
    yearNumeric: -450,
    title: 'Twelve Tables of Rome',
    description: 'Law for the People. Rome\'s plebeians demand written laws, ending aristocratic monopoly on justice. The foundation of Western legal tradition is carved in bronze.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-roman-law.jpg',
    phase: 'Phase 6',
    category: 'Civilization'
  },
  {
    id: 'rights-stoics',
    year: '300 BCE',
    yearNumeric: -300,
    title: 'Stoic Natural Law',
    description: 'Rights Beyond Nations. The Stoics propose that all humans share a universal reason, and therefore universal rights—an idea that will echo through millennia.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-stoics.jpg',
    phase: 'Phase 6',
    category: 'Philosophy'
  },
  {
    id: 'rights-habeas',
    year: '1679 CE',
    yearNumeric: 1679,
    title: 'Habeas Corpus Act',
    description: 'The Body Belongs to You. England declares that no one can be imprisoned without being brought before a judge—the foundation of personal liberty.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-habeas.jpg',
    phase: 'Phase 8',
    category: 'Civilization'
  },
  {
    id: 'rights-locke',
    year: '1689 CE',
    yearNumeric: 1689,
    title: 'Locke\'s Two Treatises',
    description: 'The Social Contract. John Locke argues that governments exist to protect life, liberty, and property—and can be overthrown when they fail.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-locke.jpg',
    phase: 'Phase 8',
    category: 'Philosophy'
  },
  {
    id: 'rights-bill-1689',
    year: '1689 CE',
    yearNumeric: 1689,
    title: 'English Bill of Rights',
    description: 'Parliament Wins. After the Glorious Revolution, Parliament limits royal power—establishing free elections, free speech, and freedom from cruel punishment.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-bill-1689.jpg',
    phase: 'Phase 8',
    category: 'Civilization'
  },
  {
    id: 'rights-montesquieu',
    year: '1748 CE',
    yearNumeric: 1748,
    title: 'Spirit of the Laws',
    description: 'Power Checked. Montesquieu proposes separating government into three branches—executive, legislative, judicial—so no one can become a tyrant.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-montesquieu.jpg',
    phase: 'Phase 8',
    category: 'Philosophy'
  },
  {
    id: 'rights-rousseau',
    year: '1762 CE',
    yearNumeric: 1762,
    title: 'The Social Contract',
    description: 'The General Will. Rousseau imagines government as a contract between equals—"Man is born free, and everywhere he is in chains."',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-rousseau.jpg',
    phase: 'Phase 8',
    category: 'Philosophy'
  },
  {
    id: 'rights-us-const',
    year: '1787 CE',
    yearNumeric: 1787,
    title: 'US Constitution',
    description: 'We the People. Fifty-five men in Philadelphia create a government designed to limit itself—the oldest written constitution still in use.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-us-const.jpg',
    phase: 'Phase 9',
    category: 'Civilization'
  },
  {
    id: 'rights-us-bill',
    year: '1791 CE',
    yearNumeric: 1791,
    title: 'US Bill of Rights',
    description: 'Ten Amendments. Freedom of speech, religion, assembly, and the press. The right to bear arms. Protection from unreasonable search. The price of ratification.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-us-bill.jpg',
    phase: 'Phase 9',
    category: 'Civilization'
  },
  {
    id: 'rights-wollstonecraft',
    year: '1792 CE',
    yearNumeric: 1792,
    title: 'Vindication of Rights of Woman',
    description: 'Half of Humanity Speaks. Mary Wollstonecraft demands that the rights of man include women—a radical idea that will take 150 years to realize.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-wollstonecraft.jpg',
    phase: 'Phase 9',
    category: 'Philosophy'
  },
  {
    id: 'rights-abolition-uk',
    year: '1833 CE',
    yearNumeric: 1833,
    title: 'British Abolition Act',
    description: 'Empire Without Slavery. Britain abolishes slavery throughout its empire, paying £20 million to compensate owners—not the enslaved.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-abolition-uk.jpg',
    phase: 'Phase 9',
    category: 'Civilization'
  },
  {
    id: 'rights-emancipation',
    year: '1863 CE',
    yearNumeric: 1863,
    title: 'Emancipation Proclamation',
    description: 'Freedom as War Strategy. Lincoln declares slaves in rebel states "forever free"—turning the Civil War into a crusade for human liberty.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-emancipation.jpg',
    phase: 'Phase 9',
    category: 'Civilization'
  },
  {
    id: 'rights-13th',
    year: '1865 CE',
    yearNumeric: 1865,
    title: '13th Amendment',
    description: 'Neither Slavery Nor Involuntary Servitude. The Constitution is amended to abolish slavery—four million people are free, at least on paper.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-13th.jpg',
    phase: 'Phase 9',
    category: 'Civilization'
  },
  {
    id: 'rights-labor',
    year: '1886 CE',
    yearNumeric: 1886,
    title: 'Haymarket Affair',
    description: 'The Eight-Hour Day. Chicago workers strike for shorter hours. A bomb kills police, leading to executions—but the labor movement cannot be stopped.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-labor.jpg',
    phase: 'Phase 9',
    category: 'Economy'
  },
  {
    id: 'rights-naacp',
    year: '1909 CE',
    yearNumeric: 1909,
    title: 'NAACP Founded',
    description: 'Organizing for Equality. W.E.B. Du Bois and allies create an organization to fight for African American rights through legal action and public pressure.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-naacp.jpg',
    phase: 'Phase 10',
    category: 'Civilization'
  },
  {
    id: 'rights-gandhi',
    year: '1930 CE',
    yearNumeric: 1930,
    title: 'Salt March',
    description: 'Walking to Freedom. Gandhi leads 60,000 Indians on a 240-mile march to make salt from the sea—defying British law with radical nonviolence.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-gandhi.jpg',
    phase: 'Phase 10',
    category: 'Civilization'
  },
  {
    id: 'rights-un-decl',
    year: '1948 CE',
    yearNumeric: 1948,
    title: 'Universal Declaration of Human Rights',
    description: 'Rights for All Humanity. After the Holocaust, the world agrees: every person has dignity. Thirty articles define the minimum we owe each other.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-un-decl.jpg',
    phase: 'Phase 11',
    category: 'Civilization'
  },
  {
    id: 'rights-civil64',
    year: '1964 CE',
    yearNumeric: 1964,
    title: 'Civil Rights Act',
    description: 'The Second Reconstruction. After Years of marches and murders, the US outlaws discrimination based on race, color, religion, sex, or national origin.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-civil64.jpg',
    phase: 'Phase 11',
    category: 'Civilization'
  },
  {
    id: 'rights-mandela',
    year: '1994 CE',
    yearNumeric: 1994,
    title: 'Mandela Elected President',
    description: 'The Long Walk Ends. After 27 years in prison, Nelson Mandela becomes South Africa\'s first Black president—choosing reconciliation over revenge.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/rights-mandela.jpg',
    phase: 'Phase 12',
    category: 'Civilization'
  },

  // ═══════════════════════════════════════════════════════════════
  // THE CLIMATE CHRONICLE - Ice Ages to Global Warming
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'climate-hadean',
    year: '4.5 Billion Years Ago',
    yearNumeric: -4500000000,
    title: 'The Hadean Hellscape',
    description: 'Born in Fire. Earth is a molten ball of magma, bombarded by asteroids, with surface temperatures exceeding 1,000°C. No oceans, no life—just fire and rock.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-hadean.jpg',
    phase: 'Phase 1',
    category: 'Cosmology'
  },
  {
    id: 'climate-lhb',
    year: '3.9 Billion Years Ago',
    yearNumeric: -3900000000,
    title: 'Late Heavy Bombardment',
    description: 'The Last Assault. Asteroids and comets pummel Earth for 100 million years, possibly delivering water and organic molecules—and sterilizing the surface.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-lhb.jpg',
    phase: 'Phase 1',
    category: 'Cosmology'
  },
  {
    id: 'climate-methane',
    year: '3.5 Billion Years Ago',
    yearNumeric: -3500000000,
    title: 'Methane Atmosphere',
    description: 'The Purple Earth. Before oxygen, the atmosphere was thick with methane. The greenhouse effect kept Earth warm despite a fainter sun.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-methane.jpg',
    phase: 'Phase 2',
    category: 'Life'
  },
  {
    id: 'climate-rodinia',
    year: '1.1 Billion Years Ago',
    yearNumeric: -1100000000,
    title: 'Rodinia Supercontinent',
    description: 'The First Pangaea. All land masses collide into a single supercontinent, disrupting ocean currents and setting the stage for Snowball Earth.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-rodinia.jpg',
    phase: 'Phase 2',
    category: 'Cosmology'
  },
  {
    id: 'climate-snowball1',
    year: '720 Million Years Ago',
    yearNumeric: -720000000,
    title: 'Sturtian Glaciation',
    description: 'Snowball Earth I. Ice sheets reach the equator. The entire planet freezes for 50 million years—the most extreme climate event in Earth\'s history.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-snowball1.jpg',
    phase: 'Phase 2',
    category: 'Cosmology'
  },
  {
    id: 'climate-snowball2',
    year: '650 Million Years Ago',
    yearNumeric: -650000000,
    title: 'Marinoan Glaciation',
    description: 'Snowball Earth II. It happens again. Volcanic CO2 eventually melts the ice, triggering the Cambrian explosion of complex life.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-snowball2.jpg',
    phase: 'Phase 2',
    category: 'Cosmology'
  },
  {
    id: 'climate-cambrian-warm',
    year: '540 Million Years Ago',
    yearNumeric: -540000000,
    title: 'Cambrian Hothouse',
    description: 'Tropical World. CO2 levels 20 times higher than today create a greenhouse Earth with no ice caps. Life explodes in warm shallow seas.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-cambrian-warm.jpg',
    phase: 'Phase 2',
    category: 'Life'
  },
  {
    id: 'climate-pangaea',
    year: '300 Million Years Ago',
    yearNumeric: -300000000,
    title: 'Pangaea Forms',
    description: 'One World. All continents merge into a single supercontinent. The interior dries into vast deserts while coastal regions remain tropical.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-pangaea.jpg',
    phase: 'Phase 2',
    category: 'Cosmology'
  },
  {
    id: 'climate-siberian',
    year: '252 Million Years Ago',
    yearNumeric: -252000000,
    title: 'Siberian Traps Eruption',
    description: 'The Volcanic Apocalypse. Lava covers an area the size of Europe. CO2 and methane warm the planet 10°C, triggering the Great Dying.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-siberian.jpg',
    phase: 'Phase 2',
    category: 'Cosmology'
  },
  {
    id: 'climate-petm',
    year: '56 Million Years Ago',
    yearNumeric: -56000000,
    title: 'PETM Warming Event',
    description: 'The Ancient Warning. Global temperatures spike 5-8°C in 20,000 years. Crocodiles live in the Arctic. A preview of what rapid warming does.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-petm.jpg',
    phase: 'Phase 3',
    category: 'Life'
  },
  {
    id: 'climate-antarctic',
    year: '34 Million Years Ago',
    yearNumeric: -34000000,
    title: 'Antarctic Ice Sheet',
    description: 'The Big Freeze. Antarctica drifts over the South Pole and glaciers grow. Earth enters its current icehouse climate that persists today.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-antarctic.jpg',
    phase: 'Phase 3',
    category: 'Cosmology'
  },
  {
    id: 'climate-milankovitch',
    year: '2.6 Million Years Ago',
    yearNumeric: -2600000,
    title: 'Ice Age Cycles Begin',
    description: 'The Rhythm of Ice. Earth\'s orbital wobbles trigger cycles of glaciation. Ice sheets advance and retreat every 100,000 years, shaping human evolution.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-milankovitch.jpg',
    phase: 'Phase 3',
    category: 'Cosmology'
  },
  {
    id: 'climate-younger-dryas',
    year: '10,800 BCE',
    yearNumeric: -10800,
    title: 'The Younger Dryas',
    description: 'The Big Freeze Returns. Just as the ice age was ending, temperatures suddenly plunge for 1,200 years. Possibly triggered by a freshwater pulse or comet impact.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-younger-dryas.jpg',
    phase: 'Phase 4',
    category: 'Cosmology'
  },
  {
    id: 'climate-arrhenius',
    year: '1896 CE',
    yearNumeric: 1896,
    title: 'CO2 Warming Theory',
    description: 'The First Warning. Swedish chemist Svante Arrhenius calculates that doubling CO2 will warm Earth by 5°C. He considers it beneficial.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-arrhenius.jpg',
    phase: 'Phase 9',
    category: 'Science'
  },
  {
    id: 'climate-keeling',
    year: '1958 CE',
    yearNumeric: 1958,
    title: 'Keeling Curve',
    description: 'Measuring the Rise. Charles Keeling begins measuring atmospheric CO2 at Mauna Loa. The zigzag line rises relentlessly—proof of humanity\'s impact.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-keeling.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'climate-ozone',
    year: '1985 CE',
    yearNumeric: 1985,
    title: 'Ozone Hole Discovered',
    description: 'The Layer With a Hole. Scientists find CFCs have torn a hole in Earth\'s UV shield over Antarctica. Humanity responds with the Montreal Protocol.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-ozone.jpg',
    phase: 'Phase 11',
    category: 'Science'
  },
  {
    id: 'climate-ipcc',
    year: '1988 CE',
    yearNumeric: 1988,
    title: 'IPCC Founded',
    description: 'The Science Speaks. The UN creates the Intergovernmental Panel on Climate Change to assess the science. Their reports become increasingly alarming.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-ipcc.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },
  {
    id: 'climate-cop21',
    year: '2016 CE',
    yearNumeric: 2016,
    title: 'Paris Agreement Enters Force',
    description: 'The World Commits. 196 nations pledge to limit warming to 1.5°C. The legal framework exists—now comes the hard part of implementation.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-cop21.jpg',
    phase: 'Phase 12',
    category: 'Civilization'
  },
  {
    id: 'climate-1.5c',
    year: '2023 CE',
    yearNumeric: 2023,
    title: '1.5°C Threshold Breached',
    description: 'The Limit Crossed. For the first time, global temperatures exceed the Paris Agreement\'s aspirational target. The climate emergency is now.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/climate-1.5c.jpg',
    phase: 'Phase 12',
    category: 'Science'
  },

  // --- THE SHADOW WORLD: Spies, Codes, and Secrets ---
  {
    id: 'shadow-sunzi',
    year: '500 BCE',
    yearNumeric: -500,
    title: 'Sun Tzu\'s Art of War',
    description: 'The Spy\'s Bible. "All warfare is based on deception." The first treatise on espionage establishes spies as essential to military victory.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-sunzi.jpg',
    phase: 'Phase 6',
    category: 'Civilization'
  },
  {
    id: 'shadow-scytale',
    year: '400 BCE',
    yearNumeric: -400,
    title: 'The Spartan Scytale',
    description: 'First Encryption Device. Spartans wrap leather strips around a rod to scramble messages—history\'s first documented cryptographic tool.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-scytale.jpg',
    phase: 'Phase 6',
    category: 'Communications'
  },
  {
    id: 'shadow-caesar',
    year: '50 BCE',
    yearNumeric: -50,
    title: 'Caesar Cipher',
    description: 'The Emperor\'s Code. Julius Caesar shifts each letter by three positions—a simple substitution cipher that will inspire cryptography for millennia.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-caesar.jpg',
    phase: 'Phase 6',
    category: 'Communications'
  },
  {
    id: 'shadow-ninja',
    year: '1400 CE',
    yearNumeric: 1400,
    title: 'Rise of the Shinobi',
    description: 'The Shadow Warriors. Japanese ninja clans perfect the art of espionage, assassination, and unconventional warfare—spies elevated to legend.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-ninja.jpg',
    phase: 'Phase 7',
    category: 'Civilization'
  },
  {
    id: 'shadow-walsingham',
    year: '1570 CE',
    yearNumeric: 1570,
    title: 'Walsingham\'s Spy Network',
    description: 'The Spymaster. Sir Francis Walsingham creates England\'s first professional intelligence service, foiling Catholic plots against Elizabeth I.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-walsingham.jpg',
    phase: 'Phase 8',
    category: 'Civilization'
  },
  {
    id: 'shadow-blackchamber',
    year: '1700 CE',
    yearNumeric: 1700,
    title: 'The Black Chambers',
    description: 'Diplomatic Espionage. European powers establish "black chambers" to intercept and decode enemy mail—state-sponsored cryptanalysis becomes routine.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-blackchamber.jpg',
    phase: 'Phase 8',
    category: 'Civilization'
  },
  {
    id: 'shadow-roomforty',
    year: '1914 CE',
    yearNumeric: 1914,
    title: 'Room 40',
    description: 'Britain\'s Secret Weapon. The Royal Navy\'s codebreakers intercept German communications, turning cryptanalysis into a decisive war asset.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-roomforty.jpg',
    phase: 'Phase 10',
    category: 'Communications'
  },
  {
    id: 'shadow-zimmermann',
    year: '1917 CE',
    yearNumeric: 1917,
    title: 'Zimmermann Telegram',
    description: 'The Code That Changed History. Britain decrypts Germany\'s secret offer of Texas to Mexico—drawing America into WWI.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-zimmermann.jpg',
    phase: 'Phase 10',
    category: 'Communications'
  },
  {
    id: 'shadow-enigma',
    year: '1918 CE',
    yearNumeric: 1918,
    title: 'Enigma Machine Invented',
    description: 'The Unbreakable Code. German engineer Arthur Scherbius patents a rotor cipher machine. The Wehrmacht will bet their war on it.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-enigma.jpg',
    phase: 'Phase 10',
    category: 'Communications'
  },
  {
    id: 'shadow-bletchley',
    year: '1939 CE',
    yearNumeric: 1939,
    title: 'Bletchley Park Opens',
    description: 'The Secret War. Britain\'s codebreakers—mathematicians, linguists, crossword champions—gather at a Victorian mansion to break Enigma.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-bletchley.jpg',
    phase: 'Phase 10',
    category: 'Communications'
  },
  {
    id: 'shadow-ultra',
    year: '1941 CE',
    yearNumeric: 1941,
    title: 'Operation Ultra',
    description: 'The Secret That Won the War. Allied codebreakers crack Enigma, reading German communications throughout WWII—a secret kept for 30 years.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-ultra.jpg',
    phase: 'Phase 10',
    category: 'Communications'
  },
  {
    id: 'shadow-cia',
    year: '1947 CE',
    yearNumeric: 1947,
    title: 'CIA Founded',
    description: 'The Company. America creates a permanent peacetime intelligence agency, transforming wartime espionage into Cold War statecraft.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-cia.jpg',
    phase: 'Phase 11',
    category: 'Civilization'
  },
  {
    id: 'shadow-nsa',
    year: '1952 CE',
    yearNumeric: 1952,
    title: 'NSA Established',
    description: 'The Puzzle Palace. America creates the world\'s largest signals intelligence agency—so secret its existence isn\'t acknowledged for years.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-nsa.jpg',
    phase: 'Phase 11',
    category: 'Communications'
  },
  {
    id: 'shadow-u2',
    year: '1960 CE',
    yearNumeric: 1960,
    title: 'U-2 Incident',
    description: 'Shot Down. Gary Powers\'s spy plane is downed over the USSR. Eisenhower\'s cover story collapses. The Cold War turns colder.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-u2.jpg',
    phase: 'Phase 11',
    category: 'Civilization'
  },
  {
    id: 'shadow-philby',
    year: '1963 CE',
    yearNumeric: 1963,
    title: 'Kim Philby Defects',
    description: 'The Third Man. Britain\'s most trusted spy flees to Moscow, revealed as a Soviet mole for 30 years—the greatest betrayal in intelligence history.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-philby.jpg',
    phase: 'Phase 11',
    category: 'Civilization'
  },
  {
    id: 'shadow-pkc',
    year: '1976 CE',
    yearNumeric: 1976,
    title: 'Public-Key Cryptography',
    description: 'The Key Exchange Revolution. Diffie and Hellman solve the key distribution problem—strangers can now communicate securely without ever meeting.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-pkc.jpg',
    phase: 'Phase 11',
    category: 'Communications'
  },
  {
    id: 'shadow-pgp',
    year: '1991 CE',
    yearNumeric: 1991,
    title: 'PGP Released',
    description: 'Pretty Good Privacy. Phil Zimmermann gives military-grade encryption to everyone—the US government calls it "munitions" and investigates him.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-pgp.jpg',
    phase: 'Phase 11',
    category: 'Communications'
  },
  {
    id: 'shadow-echelon',
    year: '1999 CE',
    yearNumeric: 1999,
    title: 'ECHELON Exposed',
    description: 'The Global Ear. The EU reveals the Five Eyes\' worldwide signals intelligence network—monitoring phones, faxes, and emails across the globe.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-echelon.jpg',
    phase: 'Phase 12',
    category: 'Communications'
  },
  {
    id: 'shadow-tor',
    year: '2002 CE',
    yearNumeric: 2002,
    title: 'Tor Network Launched',
    description: 'The Onion Router. Originally a US Navy project, Tor enables anonymous communication—used by dissidents, journalists, and criminals alike.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-tor.jpg',
    phase: 'Phase 12',
    category: 'Communications'
  },
  {
    id: 'shadow-wikileaks',
    year: '2006 CE',
    yearNumeric: 2006,
    title: 'WikiLeaks Founded',
    description: 'Radical Transparency. Julian Assange creates a platform for anonymous leaks—governments can no longer assume their secrets are safe.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-wikileaks.jpg',
    phase: 'Phase 12',
    category: 'Communications'
  },
  {
    id: 'shadow-prism',
    year: '2013 CE',
    yearNumeric: 2013,
    title: 'PRISM Revealed',
    description: 'The Secret Program. The NSA\'s tool for direct access to servers at Google, Facebook, Microsoft, and Apple—collecting emails, chats, and files of millions worldwide.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-prism.jpg',
    phase: 'Phase 12',
    category: 'Communications'
  },
  {
    id: 'shadow-apple-fbi',
    year: '2016 CE',
    yearNumeric: 2016,
    title: 'Apple vs FBI',
    description: 'The Encryption War. Apple refuses to unlock a terrorist\'s iPhone. The battle lines are drawn: security versus privacy.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/shadow-apple-fbi.jpg',
    phase: 'Phase 12',
    category: 'Communications'
  },

  // --- THE RHYTHM OF LIFE: A History of Music ---
  {
    id: 'music-flute',
    year: '40,000 BCE',
    yearNumeric: -40000,
    title: 'The First Flute',
    description: 'The Oldest Song. A cave bear femur with carved holes—humanity\'s first known instrument. Even in the Ice Age, we needed music.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-flute.jpg',
    phase: 'Phase 3',
    category: 'Art'
  },
  {
    id: 'music-drums',
    year: '10,000 BCE',
    yearNumeric: -10000,
    title: 'Ritual Drums',
    description: 'The Heartbeat of the Tribe. Stretched animal skins over hollow logs—drums become the backbone of ceremony, war, and celebration.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-drums.jpg',
    phase: 'Phase 4',
    category: 'Art'
  },
  {
    id: 'music-lyre',
    year: '2500 BCE',
    yearNumeric: -2500,
    title: 'The Mesopotamian Lyre',
    description: 'Strings of the Gods. Found in the Royal Tombs of Ur, the lyre accompanies kings to the afterlife—music becomes art.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-lyre.jpg',
    phase: 'Phase 5',
    category: 'Art'
  },
  {
    id: 'music-greek-modes',
    year: '500 BCE',
    yearNumeric: -500,
    title: 'Greek Musical Theory',
    description: 'The Math of Sound. Pythagoras discovers that harmony is mathematics—ratios of vibrating strings. Music becomes science.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-greek-modes.jpg',
    phase: 'Phase 6',
    category: 'Art'
  },
  {
    id: 'music-roman',
    year: '100 CE',
    yearNumeric: 100,
    title: 'Roman Spectacle',
    description: 'Music of Empire. Horns, organs, and drums fill the Colosseum. Music becomes entertainment for the masses.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-roman.jpg',
    phase: 'Phase 6',
    category: 'Art'
  },
  {
    id: 'music-gregorian',
    year: '600 CE',
    yearNumeric: 600,
    title: 'Gregorian Chant',
    description: 'The Voice of God. Pope Gregory standardizes church music—single melodic lines that will echo through cathedrals for a millennium.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-gregorian.jpg',
    phase: 'Phase 7',
    category: 'Art'
  },
  {
    id: 'music-notation',
    year: '1000 CE',
    yearNumeric: 1000,
    title: 'Musical Notation Born',
    description: 'Writing Sound. Guido d\'Arezzo invents the staff and solfège (do-re-mi). Music can finally be written down and taught.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-notation.jpg',
    phase: 'Phase 7',
    category: 'Art'
  },
  {
    id: 'music-troubadours',
    year: '1100 CE',
    yearNumeric: 1100,
    title: 'The Troubadours',
    description: 'Songs of Love. Wandering poet-musicians invent romantic love songs in Provence—the ancestors of every pop ballad.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-troubadours.jpg',
    phase: 'Phase 7',
    category: 'Art'
  },
  {
    id: 'music-polyphony',
    year: '1200 CE',
    yearNumeric: 1200,
    title: 'Polyphony Emerges',
    description: 'Voices Intertwined. Multiple independent melodies woven together—the Notre-Dame school of Léonin and Pérotin creates complexity that still awes.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-polyphony.jpg',
    phase: 'Phase 7',
    category: 'Art'
  },
  {
    id: 'music-printing',
    year: '1501 CE',
    yearNumeric: 1501,
    title: 'Printed Sheet Music',
    description: 'Music for the Masses. Ottaviano Petrucci prints the first collection of sheet music. Compositions spread across Europe.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-printing.jpg',
    phase: 'Phase 8',
    category: 'Art'
  },
  {
    id: 'music-opera',
    year: '1600 CE',
    yearNumeric: 1600,
    title: 'Birth of Opera',
    description: 'Drama in Song. Florentine nobles recreate Greek tragedy with music—opera is born, combining all the arts.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-opera.jpg',
    phase: 'Phase 8',
    category: 'Art'
  },
  {
    id: 'music-violin',
    year: '1700 CE',
    yearNumeric: 1700,
    title: 'Stradivari\'s Violins',
    description: 'The Perfect Instrument. Antonio Stradivari crafts violins so perfect that 300 years later, no one can surpass them.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-violin.jpg',
    phase: 'Phase 8',
    category: 'Art'
  },
  {
    id: 'music-bach',
    year: '1722 CE',
    yearNumeric: 1722,
    title: 'Bach\'s Well-Tempered Clavier',
    description: 'The Foundation. Johann Sebastian Bach proves that all 24 keys can work—the mathematical and emotional foundation of Western music.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-bach.jpg',
    phase: 'Phase 8',
    category: 'Art'
  },
  {
    id: 'music-symphony',
    year: '1750 CE',
    yearNumeric: 1750,
    title: 'The Symphony Form',
    description: 'The Orchestra Speaks. Haydn perfects the four-movement symphony—a structure for the full power of the orchestra.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-symphony.jpg',
    phase: 'Phase 9',
    category: 'Art'
  },
  {
    id: 'music-mozart',
    year: '1785 CE',
    yearNumeric: 1785,
    title: 'Mozart\'s Genius',
    description: 'The Child Prodigy. Wolfgang Amadeus Mozart writes 41 symphonies, 27 piano concertos, and 22 operas—dying at 35.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-mozart.jpg',
    phase: 'Phase 9',
    category: 'Art'
  },
  {
    id: 'music-beethoven',
    year: '1808 CE',
    yearNumeric: 1808,
    title: 'Beethoven\'s Fifth',
    description: 'Fate Knocking. Four notes change music forever. Beethoven proves that deaf, he can still hear the universe.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-beethoven.jpg',
    phase: 'Phase 9',
    category: 'Art'
  },
  {
    id: 'music-piano',
    year: '1850 CE',
    yearNumeric: 1850,
    title: 'The Piano Age',
    description: 'The Parlor Instrument. Pianos fill middle-class homes. Chopin, Liszt, and Brahms write for the instrument everyone wants to play.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-piano.jpg',
    phase: 'Phase 9',
    category: 'Art'
  },
  {
    id: 'music-phonograph',
    year: '1877 CE',
    yearNumeric: 1877,
    title: 'Edison\'s Phonograph',
    description: 'Sound Captured. For the first time in history, a voice can outlive its owner. Music detaches from the moment.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-phonograph.jpg',
    phase: 'Phase 9',
    category: 'Art'
  },
  {
    id: 'music-blues',
    year: '1912 CE',
    yearNumeric: 1912,
    title: 'Birth of the Blues',
    description: 'The American Sound. W.C. Handy publishes "Memphis Blues"—the sorrow and hope of African Americans becomes the root of modern music.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-blues.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'music-jazz',
    year: '1920 CE',
    yearNumeric: 1920,
    title: 'The Jazz Age',
    description: 'Improvisation Rules. New Orleans musicians invent a new freedom—jazz becomes the soundtrack of the Roaring Twenties.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-jazz.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'music-electric-guitar',
    year: '1931 CE',
    yearNumeric: 1931,
    title: 'The Electric Guitar',
    description: 'Amplified Rebellion. Rickenbacker electrifies the guitar—quietly laying the foundation for rock and roll.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-electric-guitar.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'music-vinyl',
    year: '1948 CE',
    yearNumeric: 1948,
    title: 'The Vinyl Era',
    description: 'The LP Revolution. Columbia introduces the 33⅓ RPM long-playing record—albums become art forms, not just collections.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-vinyl.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'music-rock',
    year: '1954 CE',
    yearNumeric: 1954,
    title: 'Rock and Roll',
    description: 'The Revolution Begins. Elvis, Little Richard, Chuck Berry—Black and white music collides, and teenagers take control.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-rock.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'music-beatles',
    year: '1964 CE',
    yearNumeric: 1964,
    title: 'Beatlemania',
    description: 'The British Invasion. Four lads from Liverpool conquer America. The album becomes a unified artistic statement.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-beatles.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'music-synthesizer',
    year: '1970 CE',
    yearNumeric: 1970,
    title: 'The Synthesizer',
    description: 'Electronic Dreams. Robert Moog\'s invention lets musicians create sounds that never existed in nature.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-synthesizer.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'music-mtv',
    year: '1981 CE',
    yearNumeric: 1981,
    title: 'MTV Launches',
    description: 'Video Killed the Radio Star. Music becomes visual. Madonna, Michael Jackson—you have to see the song to hear it.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-mtv.jpg',
    phase: 'Phase 12',
    category: 'Art'
  },
  {
    id: 'music-mp3',
    year: '1993 CE',
    yearNumeric: 1993,
    title: 'The MP3 Format',
    description: 'Music Compressed. A German algorithm shrinks songs to 1/10th their size—setting the stage for digital revolution.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-mp3.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'music-napster',
    year: '1999 CE',
    yearNumeric: 1999,
    title: 'Napster Revolution',
    description: 'Free Music Everywhere. College kid Shawn Fanning lets 80 million people share MP3s—the record industry will never recover.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-napster.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'music-ipod',
    year: '2001 CE',
    yearNumeric: 2001,
    title: 'iPod + iTunes',
    description: '1,000 Songs in Your Pocket. Steve Jobs saves the music industry by making people pay for downloads again.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-ipod.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'music-spotify',
    year: '2008 CE',
    yearNumeric: 2008,
    title: 'The Streaming Era',
    description: 'Access Over Ownership. Spotify offers unlimited music for a monthly fee—you never own a song again.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-spotify.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'music-ai',
    year: '2023 CE',
    yearNumeric: 2023,
    title: 'AI Composition',
    description: 'The Machine Sings. AI generates music indistinguishable from human composers—who owns a song no one wrote?',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/music-ai.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },

  // --- THE EXAMINED LIFE: Philosophy Through the Ages ---
  {
    id: 'phil-thales',
    year: '600 BCE',
    yearNumeric: -600,
    title: 'Thales of Miletus',
    description: 'The First Philosopher. Instead of myths, Thales asks: "What is everything made of?" Philosophy is born.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-thales.jpg',
    phase: 'Phase 6',
    category: 'Philosophy'
  },
  {
    id: 'phil-plato',
    year: '387 BCE',
    yearNumeric: -387,
    title: 'Plato\'s Academy',
    description: 'The Eternal Forms. Plato founds the first university, teaching that reality is just shadows of perfect Ideas.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-plato.jpg',
    phase: 'Phase 6',
    category: 'Philosophy'
  },
  {
    id: 'phil-epicurus',
    year: '300 BCE',
    yearNumeric: -300,
    title: 'Epicurus\'s Garden',
    description: 'Atoms and Pleasure. Epicurus teaches that happiness is freedom from fear—of death, of gods, of pain.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-epicurus.jpg',
    phase: 'Phase 6',
    category: 'Philosophy'
  },
  {
    id: 'phil-augustine',
    year: '400 CE',
    yearNumeric: 400,
    title: 'Augustine\'s Confessions',
    description: 'Faith and Reason. Augustine fuses Plato with Christianity, creating the intellectual foundation of the medieval world.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-augustine.jpg',
    phase: 'Phase 7',
    category: 'Philosophy'
  },
  {
    id: 'phil-aquinas',
    year: '1274 CE',
    yearNumeric: 1274,
    title: 'Thomas Aquinas',
    description: 'Aristotle Baptized. Aquinas proves God\'s existence with reason, reconciling faith and philosophy for 700 years.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-aquinas.jpg',
    phase: 'Phase 7',
    category: 'Philosophy'
  },
  {
    id: 'phil-descartes',
    year: '1637 CE',
    yearNumeric: 1637,
    title: 'Descartes\' Cogito',
    description: 'I Think, Therefore I Am. Doubting everything, Descartes finds one certainty—his own thinking mind. Modern philosophy begins.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-descartes.jpg',
    phase: 'Phase 8',
    category: 'Philosophy'
  },
  {
    id: 'phil-spinoza',
    year: '1677 CE',
    yearNumeric: 1677,
    title: 'Spinoza\'s Ethics',
    description: 'God or Nature. Spinoza argues that God and the universe are identical—earning excommunication and Einstein\'s admiration.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-spinoza.jpg',
    phase: 'Phase 8',
    category: 'Philosophy'
  },
  {
    id: 'phil-locke',
    year: '1690 CE',
    yearNumeric: 1690,
    title: 'Locke\'s Tabula Rasa',
    description: 'The Blank Slate. Locke argues we\'re born knowing nothing—all ideas come from experience. Empiricism challenges rationalism.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-locke.jpg',
    phase: 'Phase 8',
    category: 'Philosophy'
  },
  {
    id: 'phil-hume',
    year: '1748 CE',
    yearNumeric: 1748,
    title: 'Hume\'s Skepticism',
    description: 'The Problem of Induction. Hume proves we can\'t know the sun will rise tomorrow—waking Kant from his "dogmatic slumber."',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-hume.jpg',
    phase: 'Phase 8',
    category: 'Philosophy'
  },
  {
    id: 'phil-kant',
    year: '1781 CE',
    yearNumeric: 1781,
    title: 'Kant\'s Critique',
    description: 'The Copernican Revolution in Philosophy. Kant shows that the mind shapes experience—we can never know things-in-themselves.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-kant.jpg',
    phase: 'Phase 9',
    category: 'Philosophy'
  },
  {
    id: 'phil-hegel',
    year: '1807 CE',
    yearNumeric: 1807,
    title: 'Hegel\'s Dialectic',
    description: 'Thesis, Antithesis, Synthesis. Hegel sees all of history as Spirit becoming conscious of itself—reality is process.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-hegel.jpg',
    phase: 'Phase 9',
    category: 'Philosophy'
  },
  {
    id: 'phil-kierkegaard',
    year: '1843 CE',
    yearNumeric: 1843,
    title: 'Kierkegaard\'s Leap',
    description: 'The Father of Existentialism. Against Hegel\'s systems, Kierkegaard insists: truth is subjective, choice is everything.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-kierkegaard.jpg',
    phase: 'Phase 9',
    category: 'Philosophy'
  },
  {
    id: 'phil-marx',
    year: '1848 CE',
    yearNumeric: 1848,
    title: 'Marx\'s Manifesto',
    description: 'Workers of the World. Marx turns Hegel upside down—it\'s not ideas but economics that drives history. Revolution follows.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-marx.jpg',
    phase: 'Phase 9',
    category: 'Philosophy'
  },
  {
    id: 'phil-nietzsche',
    year: '1882 CE',
    yearNumeric: 1882,
    title: 'Nietzsche\'s Proclamation',
    description: 'God Is Dead. Nietzsche declares the death of absolute values—now we must create our own meaning.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-nietzsche.jpg',
    phase: 'Phase 9',
    category: 'Philosophy'
  },
  {
    id: 'phil-wittgenstein',
    year: '1921 CE',
    yearNumeric: 1921,
    title: 'Wittgenstein\'s Tractatus',
    description: 'The Limits of Language. "Whereof one cannot speak, thereof one must be silent." Philosophy becomes the study of language.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-wittgenstein.jpg',
    phase: 'Phase 10',
    category: 'Philosophy'
  },
  {
    id: 'phil-heidegger',
    year: '1927 CE',
    yearNumeric: 1927,
    title: 'Heidegger\'s Being',
    description: 'Being-Toward-Death. Heidegger asks what it means to Be—and argues we flee from our mortality into inauthenticity.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-heidegger.jpg',
    phase: 'Phase 10',
    category: 'Philosophy'
  },
  {
    id: 'phil-sartre',
    year: '1943 CE',
    yearNumeric: 1943,
    title: 'Sartre\'s Existentialism',
    description: 'Existence Precedes Essence. Sartre declares we\'re "condemned to be free"—there\'s no human nature, only choices.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-sartre.jpg',
    phase: 'Phase 10',
    category: 'Philosophy'
  },
  {
    id: 'phil-beauvoir',
    year: '1949 CE',
    yearNumeric: 1949,
    title: 'Beauvoir\'s Second Sex',
    description: 'One Is Not Born a Woman. Simone de Beauvoir applies existentialism to gender—feminism gets its philosophical foundation.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-beauvoir.jpg',
    phase: 'Phase 11',
    category: 'Philosophy'
  },
  {
    id: 'phil-derrida',
    year: '1967 CE',
    yearNumeric: 1967,
    title: 'Derrida\'s Deconstruction',
    description: 'Nothing Outside the Text. Jacques Derrida shows that meaning is never stable—every text deconstructs itself. Postmodernism arrives.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-derrida.jpg',
    phase: 'Phase 11',
    category: 'Philosophy'
  },
  {
    id: 'phil-rawls',
    year: '1971 CE',
    yearNumeric: 1971,
    title: 'Rawls\'s Veil of Ignorance',
    description: 'The Fair Society. John Rawls asks: What rules would you choose if you didn\'t know your place in society? Justice as fairness is born.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-rawls.jpg',
    phase: 'Phase 11',
    category: 'Philosophy'
  },
  {
    id: 'phil-foucault',
    year: '1975 CE',
    yearNumeric: 1975,
    title: 'Foucault\'s Power',
    description: 'Power Is Everywhere. Michel Foucault reveals how prisons, hospitals, and schools discipline our bodies and minds. Power has no center.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-foucault.jpg',
    phase: 'Phase 11',
    category: 'Philosophy'
  },
  {
    id: 'phil-singer',
    year: '1975 CE',
    yearNumeric: 1975,
    title: 'Singer\'s Animal Liberation',
    description: 'Speciesism Exposed. Peter Singer argues that suffering matters regardless of species—launching the animal rights movement and effective altruism.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-singer.jpg',
    phase: 'Phase 11',
    category: 'Philosophy'
  },
  {
    id: 'phil-consciousness',
    year: '2020 CE',
    yearNumeric: 2020,
    title: 'The Hard Problem',
    description: 'Why Is There Experience? As AI advances, philosophy confronts the "hard problem" of consciousness—why does it feel like something to be you?',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/phil-consciousness.jpg',
    phase: 'Phase 12',
    category: 'Philosophy'
  },

  // --- THE SILVER SCREEN: A History of Cinema ---
  {
    id: 'film-lumiere',
    year: '1895 CE',
    yearNumeric: 1895,
    title: 'The Lumière Brothers',
    description: 'Birth of Cinema. Workers leaving a factory, a train arriving—the Lumière brothers project moving images for the first time. Reality becomes reproducible.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-lumiere.jpg',
    phase: 'Phase 9',
    category: 'Art'
  },
  {
    id: 'film-melies',
    year: '1902 CE',
    yearNumeric: 1902,
    title: 'A Trip to the Moon',
    description: 'The First Blockbuster. Georges Méliès rockets cinema from documentary to fantasy—a bullet in the Moon\'s eye becomes the icon of movie magic.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-melies.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-great-train',
    year: '1903 CE',
    yearNumeric: 1903,
    title: 'The Great Train Robbery',
    description: 'The First Action Movie. Edwin Porter invents cross-cutting, close-ups, and on-location shooting. A bandit fires at the audience—cinema becomes thrilling.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-great-train.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-birth-nation',
    year: '1915 CE',
    yearNumeric: 1915,
    title: 'Birth of a Nation',
    description: 'Art and Atrocity. D.W. Griffith invents modern film grammar—close-ups, parallel editing—but to tell a viciously racist story. Cinema\'s power revealed.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-birth-nation.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-chaplin',
    year: '1915 CE',
    yearNumeric: 1915,
    title: 'Chaplin\'s Tramp',
    description: 'The Little Fellow. Charlie Chaplin creates cinema\'s first global icon—the Tramp, a bowler hat and cane making humanity laugh and cry silently.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-chaplin.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-nosferatu',
    year: '1922 CE',
    yearNumeric: 1922,
    title: 'German Expressionism',
    description: 'Shadows Have Meaning. Nosferatu, The Cabinet of Dr. Caligari—German cinema uses distorted sets and shadows to express inner terror.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-nosferatu.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-battleship',
    year: '1925 CE',
    yearNumeric: 1925,
    title: 'Battleship Potemkin',
    description: 'The Odessa Steps. Eisenstein invents montage—meaning emerges from collision. A baby carriage bounces down stairs into cinema history.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-battleship.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-jazz-singer',
    year: '1927 CE',
    yearNumeric: 1927,
    title: 'The Jazz Singer',
    description: 'The Talkies Arrive. "Wait a minute, you ain\'t heard nothin\' yet!" Al Jolson speaks, and the silent era dies. Sound changes everything.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-jazz-singer.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-disney',
    year: '1937 CE',
    yearNumeric: 1937,
    title: 'Disney\'s Snow White',
    description: 'Animated Dreams. Walt Disney gambles everything on the first feature-length animated film. Critics call it "Disney\'s Folly"—until audiences weep.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-disney.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-kane',
    year: '1941 CE',
    yearNumeric: 1941,
    title: 'Citizen Kane',
    description: 'Rosebud. Orson Welles, age 25, reinvents cinema—deep focus, non-linear narrative, ceilinged sets. The greatest film ever made arrives unnoticed.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-kane.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-casablanca',
    year: '1942 CE',
    yearNumeric: 1942,
    title: 'Casablanca',
    description: 'Here\'s Looking at You, Kid. A studio production becomes a perfect film—romance, war, sacrifice. Hollywood\'s dream factory at its peak.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-casablanca.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-neorealism',
    year: '1945 CE',
    yearNumeric: 1945,
    title: 'Italian Neorealism',
    description: 'The Streets Are Real. Rome Open City, Bicycle Thieves—Italian directors abandon studios for real locations, non-actors, and raw truth.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-neorealism.jpg',
    phase: 'Phase 10',
    category: 'Art'
  },
  {
    id: 'film-kurosawa',
    year: '1950 CE',
    yearNumeric: 1950,
    title: 'Kurosawa\'s Rashomon',
    description: 'Truth Is Subjective. Akira Kurosawa shows the same event from four perspectives—cinema becomes philosophy. The "Rashomon effect" enters language.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-kurosawa.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'film-cinemascope',
    year: '1953 CE',
    yearNumeric: 1953,
    title: 'CinemaScope',
    description: 'The Wide Screen. Television threatens cinema. Hollywood responds with epics too vast for living rooms—CinemaScope makes screens panoramic.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-cinemascope.jpg',
    phase: 'Phase 11',
    category: 'Technology'
  },
  {
    id: 'film-nouvelle-vague',
    year: '1959 CE',
    yearNumeric: 1959,
    title: 'French New Wave',
    description: 'Breathless Revolution. Godard, Truffaut—young critics become filmmakers, breaking every rule. Hand-held cameras, jump cuts, cinema as personal essay.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-nouvelle-vague.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'film-psycho',
    year: '1960 CE',
    yearNumeric: 1960,
    title: 'Hitchcock\'s Psycho',
    description: 'The Shower Scene. Alfred Hitchcock kills his star 47 minutes in. 78 cuts, 7 days to film, eternal terror. The slasher genre is born.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-psycho.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'film-2001',
    year: '1968 CE',
    yearNumeric: 1968,
    title: '2001: A Space Odyssey',
    description: 'The Monolith. Stanley Kubrick creates science fiction as art—a bone becomes a spaceship, HAL says "I can\'t do that, Dave," and cinema reaches the infinite.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-2001.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'film-godfather',
    year: '1972 CE',
    yearNumeric: 1972,
    title: 'The Godfather',
    description: 'An Offer You Can\'t Refuse. Francis Ford Coppola turns pulp into Shakespeare. The American Dream becomes an American nightmare—in the family business.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-godfather.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'film-jaws',
    year: '1975 CE',
    yearNumeric: 1975,
    title: 'Jaws',
    description: 'The Summer Blockbuster. Steven Spielberg\'s mechanical shark kept breaking—so he showed less. Fear became imagination. Cinema became an event.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-jaws.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'film-star-wars',
    year: '1977 CE',
    yearNumeric: 1977,
    title: 'Star Wars',
    description: 'A New Hope. George Lucas revives myth, old serials, and hero\'s journeys. Hollywood discovers franchises, merchandising, and fandoms.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-star-wars.jpg',
    phase: 'Phase 11',
    category: 'Art'
  },
  {
    id: 'film-vhs',
    year: '1977 CE',
    yearNumeric: 1977,
    title: 'VHS Revolution',
    description: 'Movies at Home. The videocassette brings Hollywood to living rooms—and creates a new market. Rental stores become temples of taste.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-vhs.jpg',
    phase: 'Phase 11',
    category: 'Technology'
  },
  {
    id: 'film-dvd',
    year: '1997 CE',
    yearNumeric: 1997,
    title: 'The DVD Era',
    description: 'Crystal Clear. Digital discs replace magnetic tape—movies look pristine, extras are included, and film buffs become collectors again.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-dvd.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'film-jurassic',
    year: '1993 CE',
    yearNumeric: 1993,
    title: 'Jurassic Park CGI',
    description: 'Welcome to Jurassic Park. Spielberg\'s dinosaurs walk, breathe, and terrify—CGI proves the impossible is now filmable. Reality is optional.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-jurassic.jpg',
    phase: 'Phase 12',
    category: 'Art'
  },
  {
    id: 'film-toy-story',
    year: '1995 CE',
    yearNumeric: 1995,
    title: 'Toy Story',
    description: 'To Infinity and Beyond. Pixar\'s first film proves computers can have heart. The pixel replaces the brushstroke, but emotion remains hand-crafted.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-toy-story.jpg',
    phase: 'Phase 12',
    category: 'Art'
  },
  {
    id: 'film-matrix',
    year: '1999 CE',
    yearNumeric: 1999,
    title: 'The Matrix',
    description: 'Red Pill or Blue? The Wachowskis blend Hong Kong action, anime, and philosophy. "Bullet time" stops time. Reality is a simulation.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-matrix.jpg',
    phase: 'Phase 12',
    category: 'Art'
  },
  {
    id: 'film-lotr',
    year: '2001 CE',
    yearNumeric: 2001,
    title: 'Lord of the Rings',
    description: 'One Film to Rule Them All. Peter Jackson films all three at once—17 Oscars later, fantasy cinema is legitimized forever.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-lotr.jpg',
    phase: 'Phase 12',
    category: 'Art'
  },
  {
    id: 'film-avatar',
    year: '2009 CE',
    yearNumeric: 2009,
    title: 'Avatar',
    description: 'The 3D Renaissance. James Cameron waits 12 years for technology to catch up. Avatar becomes the highest-grossing film ever—twice.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-avatar.jpg',
    phase: 'Phase 12',
    category: 'Art'
  },
  {
    id: 'film-netflix',
    year: '2013 CE',
    yearNumeric: 2013,
    title: 'Netflix Streaming',
    description: 'House of Cards. Netflix releases an entire season at once—binge-watching is born. Theaters, cable, and schedules become optional.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-netflix.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  },
  {
    id: 'film-mcu',
    year: '2019 CE',
    yearNumeric: 2019,
    title: 'Avengers: Endgame',
    description: 'The Franchise Finale. 22 films, 11 years, $2.8 billion opening weekend. Cinema becomes serialized television. Theaters become event spaces.',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-mcu.jpg',
    phase: 'Phase 12',
    category: 'Art'
  },
  {
    id: 'film-ai',
    year: '2023 CE',
    yearNumeric: 2023,
    title: 'AI in Filmmaking',
    description: 'The Machine Directs. AI generates scripts, deepfakes resurrect actors, and algorithms predict hits. Who is the author when the machine creates?',
    imageUrl: (import.meta.env?.BASE_URL || '/') + 'images/film-ai.jpg',
    phase: 'Phase 12',
    category: 'Technology'
  }
];
