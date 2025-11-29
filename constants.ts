

import { TimelineEvent } from './types';

export const INITIAL_EVENTS: TimelineEvent[] = [
  // Phase 1 Marker (Placed chronologically before the first event)
  {
    id: 'phase-1-marker',
    year: '13.8 Billion Years Ago', // Matching Big Bang
    title: 'Cosmic & Primordial Earth',
    description: '',
    imageUrl: 'https://picsum.photos/seed/cosmos_hero/1600/900',
    phase: 'Phase 1',
    type: 'phase_marker'
  },
  {
    id: '1',
    year: '13.8 Billion Years Ago',
    title: 'The Big Bang',
    description: 'The origin of the universe, representing the rapid expansion of space, time, matter, and energy from an extremely hot, dense state.',
    imageUrl: 'https://picsum.photos/seed/bigbang/600/400',
    phase: 'Phase 1'
  },
  {
    id: '2',
    year: '13.78 Billion Years Ago',
    title: 'Formation of First Subatomic Particles',
    description: 'Quarks and leptons condense out of the super-hot early plasma, eventually leading to protons and neutrons.',
    imageUrl: 'https://picsum.photos/seed/subatomic/600/400',
    phase: 'Phase 1'
  },
  {
    id: '3',
    year: '13.77 Billion Years Ago',
    title: 'Cosmic Microwave Background',
    description: 'About 380,000 years after the Big Bang, the universe cools enough for the first stable atoms (mostly hydrogen and helium) to form, releasing light.',
    imageUrl: 'https://picsum.photos/seed/cmb/600/400',
    phase: 'Phase 1'
  },
  {
    id: '4',
    year: '13.5 Billion Years Ago',
    title: 'The Dark Ages End',
    description: 'The first stars, massive and extremely luminous (Population III stars), ignite, flooding the universe with light and heavy elements.',
    imageUrl: 'https://picsum.photos/seed/firststars/600/400',
    phase: 'Phase 1'
  },
  {
    id: '5',
    year: '13.4 Billion Years Ago',
    title: 'The First Galaxies',
    description: 'Gravity causes vast clouds of gas and the earliest stars to coalesce, forming the first small, irregular protogalaxies.',
    imageUrl: 'https://picsum.photos/seed/protogalaxies/600/400',
    phase: 'Phase 1'
  },
  {
    id: '6',
    year: '13.0 Billion Years Ago',
    title: 'Galactic Mergers',
    description: 'Protogalaxies begin to collide and merge, slowly building the massive spiral and elliptical galaxies we see today.',
    imageUrl: 'https://picsum.photos/seed/mergers/600/400',
    phase: 'Phase 1'
  },
  {
    id: '7',
    year: '11.0 Billion Years Ago',
    title: 'The Milky Way Forms',
    description: 'The primordial hydrogen/helium cloud that would become our home galaxy collapses and begins spinning, shaping the characteristic disk.',
    imageUrl: 'https://picsum.photos/seed/milkyway/600/400',
    phase: 'Phase 1'
  },
  {
    id: '8',
    year: '8.8 Billion Years Ago',
    title: 'Milky Way Disk Complete',
    description: 'The main spiral structure of the Milky Way, including its disk and arms, becomes fully formed and stabilized.',
    imageUrl: 'https://picsum.photos/seed/spiral/600/400',
    phase: 'Phase 1'
  },
  {
    id: '9',
    year: '4.6 Billion Years Ago',
    title: 'Formation of the Solar System',
    description: 'A rotating cloud of interstellar dust and gas (the solar nebula) collapses under gravity, forming the Sun and the protoplanetary disk.',
    imageUrl: 'https://picsum.photos/seed/solarnebula/600/400',
    phase: 'Phase 1'
  },
  {
    id: '10',
    year: '4.57 Billion Years Ago',
    title: 'Planetary Accretion Begins',
    description: 'Dust particles in the disk collide and stick together to form planetesimals, the building blocks of the terrestrial planets.',
    imageUrl: 'https://picsum.photos/seed/accretion/600/400',
    phase: 'Phase 1'
  },
  {
    id: '11',
    year: '4.54 Billion Years Ago',
    title: "Earth's Core Formation",
    description: 'Differentiation occurs: dense iron and nickel sink to the center of the molten Earth, forming the inner and outer cores.',
    imageUrl: 'https://picsum.photos/seed/core/600/400',
    phase: 'Phase 1'
  },
  {
    id: '12',
    year: '4.53 Billion Years Ago',
    title: 'The Moon-Forming Impact',
    description: 'The leading scientific theory suggests a Mars-sized object named Theia collides with the early Earth, ejecting material that coalesces to form the Moon.',
    imageUrl: 'https://picsum.photos/seed/theia/600/400',
    phase: 'Phase 1'
  },
  {
    id: '13',
    year: '4.5 Billion Years Ago',
    title: 'Beginning of the Hadean Eon',
    description: "The earliest, hottest, and most volatile geological eon begins; Earth's surface is molten, undergoing heavy bombardment.",
    imageUrl: 'https://picsum.photos/seed/hadean/600/400',
    phase: 'Phase 1'
  },
  {
    id: '14',
    year: '4.4 Billion Years Ago',
    title: 'Oldest Known Earth Material',
    description: 'Discovery of zircon crystals in Western Australia, suggesting that solid continental crust and liquid water may have existed earlier than previously thought.',
    imageUrl: 'https://picsum.photos/seed/zircon/600/400',
    phase: 'Phase 1'
  },
  {
    id: '15',
    year: '4.1 Billion Years Ago',
    title: 'Late Heavy Bombardment (LHB)',
    description: 'A theorized period when a disproportionately large number of asteroids and comets impacted the inner planets, potentially delivering water and organic materials.',
    imageUrl: 'https://picsum.photos/seed/bombardment/600/400',
    phase: 'Phase 1'
  },
  {
    id: '16',
    year: '4.0 Billion Years Ago',
    title: 'End of the Hadean Eon',
    description: 'Marks the point at which the first continental crust rocks are preserved in the geological record, signaling the beginning of the Archean.',
    imageUrl: 'https://picsum.photos/seed/archean/600/400',
    phase: 'Phase 1'
  },
  {
    id: '17',
    year: '3.9 Billion Years Ago',
    title: 'Formation of the First Continents',
    description: 'Lighter, silicic rocks float on the denser mantle, forming small, unstable protocontinents that are highly volcanic.',
    imageUrl: 'https://picsum.photos/seed/protocontinents/600/400',
    phase: 'Phase 1'
  },
  {
    id: '18',
    year: '3.8 Billion Years Ago',
    title: 'First Evidence of Life',
    description: 'Indirect chemical evidence (carbon isotopic signatures) in ancient rocks suggests the presence of the earliest, single-celled life forms (prokaryotes).',
    imageUrl: 'https://picsum.photos/seed/prokaryotes/600/400',
    phase: 'Phase 1'
  },
  {
    id: '19',
    year: '3.5 Billion Years Ago',
    title: 'Oldest Microfossils (Stromatolites)',
    description: 'Direct fossil evidence appears in the form of stromatolites, layered mounds created by sheets of early cyanobacteria.',
    imageUrl: 'https://picsum.photos/seed/stromatolites/600/400',
    phase: 'Phase 1'
  },
  {
    id: '20',
    year: '3.4 Billion Years Ago',
    title: 'Anoxygenic Photosynthesis',
    description: 'Early microbes begin to use light energy to synthesize food, but initially without producing free oxygen.',
    imageUrl: 'https://picsum.photos/seed/photosynthesis/600/400',
    phase: 'Phase 1'
  },
  {
    id: '21',
    year: '3.0 Billion Years Ago',
    title: 'Stabilization of Continental Crust',
    description: "The scattered protocontinents begin to coalesce into the first stable cratons, forming the ancient cores of today's continents.",
    imageUrl: 'https://picsum.photos/seed/cratons/600/400',
    phase: 'Phase 1'
  },
  {
    id: '22',
    year: '2.5 Billion Years Ago',
    title: 'Beginning of the Proterozoic Eon',
    description: 'The second phase of the Precambrian starts, marked by the rapid rise of atmospheric oxygen and the assembly of supercontinents.',
    imageUrl: 'https://picsum.photos/seed/proterozoic/600/400',
    phase: 'Phase 1'
  },
  {
    id: '23',
    year: '2.4 Billion Years Ago',
    title: 'The Great Oxidation Event (GOE)',
    description: "Oxygen-producing cyanobacteria proliferate, causing atmospheric oxygen levels to rise sharply, resulting in Earth's first ice age (Huronian Glaciation).",
    imageUrl: 'https://picsum.photos/seed/oxidation/600/400',
    phase: 'Phase 1'
  },
  {
    id: '24',
    year: '2.3 Billion Years Ago',
    title: 'Huronian Glaciation',
    description: 'The first and longest ice age, possibly triggered by the GOE which removed atmospheric methane (a strong greenhouse gas).',
    imageUrl: 'https://picsum.photos/seed/huronian/600/400',
    phase: 'Phase 1'
  },
  {
    id: '25',
    year: '2.0 Billion Years Ago',
    title: 'Banded Iron Formations (BIFs) Peak',
    description: 'Rust-colored sedimentary rock layers form as rising ocean oxygen reacts with dissolved iron, clearing the way for free oxygen accumulation.',
    imageUrl: 'https://picsum.photos/seed/bif/600/400',
    phase: 'Phase 1'
  },
  {
    id: '26',
    year: '1.8 Billion Years Ago',
    title: 'Oldest Eukaryote Fossils',
    description: 'The first fossils of complex cells (with a nucleus and organelles) appear, representing a massive leap toward multicellular life.',
    imageUrl: 'https://picsum.photos/seed/eukaryote/600/400',
    phase: 'Phase 1'
  },
  {
    id: '27',
    year: '1.2 Billion Years Ago',
    title: 'The Invention of Sexual Reproduction',
    description: 'Eukaryotes develop the ability to share genetic material, greatly accelerating the pace of evolution and increasing genetic diversity.',
    imageUrl: 'https://picsum.photos/seed/meiosis/600/400',
    phase: 'Phase 1'
  },
  {
    id: '28',
    year: '1.0 Billion Years Ago',
    title: 'Supercontinent Rodinia Forms',
    description: "The first well-documented supercontinent assembles, containing most of Earth's landmass, disrupting ocean circulation and climate.",
    imageUrl: 'https://picsum.photos/seed/rodinia/600/400',
    phase: 'Phase 1'
  },
  {
    id: '29',
    year: '850 Million Years Ago',
    title: 'Rodinia Begins to Break Up',
    description: 'Rifting begins in Rodinia, triggering massive volcanic activity and initiating cycles of extreme global glaciation.',
    imageUrl: 'https://picsum.photos/seed/rifting/600/400',
    phase: 'Phase 1'
  },
  {
    id: '30',
    year: '720 Million Years Ago',
    title: '"Snowball Earth" Glaciation (Cryogenian)',
    description: 'Massive global ice events (Sturtian and Marinoan) possibly cover the planet from pole to pole, only to be ended by extreme volcanism.',
    imageUrl: 'https://picsum.photos/seed/snowball/600/400',
    phase: 'Phase 1'
  },
  {
    id: '31',
    year: '635 Million Years Ago',
    title: 'The Ediacaran Biota',
    description: 'Following the Snowball Earth periods, the first large, complex, soft-bodied multicellular organisms appear, preceding the Cambrian Explosion.',
    imageUrl: 'https://picsum.photos/seed/ediacaran/600/400',
    phase: 'Phase 1'
  },
  // Phase 2 Marker (Placed chronologically before the first Phase 2 event)
  {
    id: 'phase-2-marker',
    year: '541 Million Years Ago', // Matching Cambrian Explosion
    title: 'The Age of Ancient Life',
    description: '',
    imageUrl: 'https://picsum.photos/seed/ancient_life_hero/1600/900',
    phase: 'Phase 2',
    type: 'phase_marker'
  },
  {
    id: '32',
    year: '541 Million Years Ago',
    title: 'The Cambrian Explosion',
    description: 'A relatively short period of rapid evolutionary diversification when most major animal phyla first appeared in the fossil record.',
    imageUrl: 'https://picsum.photos/seed/cambrian/600/400',
    phase: 'Phase 2'
  },
  {
    id: '33',
    year: '480 Million Years Ago',
    title: 'First Land Plants',
    description: 'Green algae adapt to life on land, evolving into early bryophytes, beginning the greening of the continents.',
    imageUrl: 'https://picsum.photos/seed/firstplants/600/400',
    phase: 'Phase 2'
  },
  {
    id: '34',
    year: '375 Million Years Ago',
    title: 'Tiktaalik Emerges',
    description: 'A transitional "fishapod" species with limb-like fins marks the crucial step of vertebrates moving from water to land.',
    imageUrl: 'https://picsum.photos/seed/tiktaalik/600/400',
    phase: 'Phase 2'
  },
  {
    id: '35',
    year: '300 Million Years Ago',
    title: 'Carboniferous Forests',
    description: 'Vast swamp forests dominate the Earth, sequestering massive amounts of carbon that eventually become the world\'s coal deposits.',
    imageUrl: 'https://picsum.photos/seed/carboniferous/600/400',
    phase: 'Phase 2'
  },
  {
    id: '36',
    year: '252 Million Years Ago',
    title: 'The Great Dying',
    description: 'The Permian-Triassic extinction event, the most severe in Earth\'s history, wipes out ~96% of marine and ~70% of terrestrial species.',
    imageUrl: 'https://picsum.photos/seed/permian/600/400',
    phase: 'Phase 2'
  },
  {
    id: '37',
    year: '230 Million Years Ago',
    title: 'Rise of the Dinosaurs',
    description: 'Small, bipedal archosaurs evolve into the first true dinosaurs during the Triassic Period, beginning their 165-million-year reign.',
    imageUrl: 'https://picsum.photos/seed/triassic/600/400',
    phase: 'Phase 2'
  },
  {
    id: '38',
    year: '200 Million Years Ago',
    title: 'Breakup of Pangea',
    description: 'The supercontinent Pangea begins to rift apart, forming the Atlantic Ocean and setting the stage for modern continental configuration.',
    imageUrl: 'https://picsum.photos/seed/pangea/600/400',
    phase: 'Phase 2'
  },
  {
    id: '39',
    year: '150 Million Years Ago',
    title: 'First Birds Take Flight',
    description: 'Small, feathered theropod dinosaurs like Archaeopteryx evolve powered flight, representing the evolutionary bridge between reptiles and birds.',
    imageUrl: 'https://picsum.photos/seed/archaeopteryx/600/400',
    phase: 'Phase 2'
  },
  {
    id: '40',
    year: '66 Million Years Ago',
    title: 'The K-Pg Extinction',
    description: 'A massive asteroid impact at Chicxulub ends the age of dinosaurs, paving the way for mammals to diversify and dominate.',
    imageUrl: 'https://picsum.photos/seed/asteroid/600/400',
    phase: 'Phase 2'
  },
  // Phase 3 Marker
  {
    id: 'phase-3-marker',
    year: '65 Million Years Ago',
    title: 'Hominid Evolution',
    description: '',
    imageUrl: 'https://picsum.photos/seed/hominid_evolution_hero/1600/900',
    phase: 'Phase 3',
    type: 'phase_marker'
  },
  {
    id: '41',
    year: '65 Million Years Ago',
    title: 'The Paleogene Recovery',
    description: 'Following the K-Pg extinction, surviving mammals rapidly diversify, filling ecological niches left vacant by the non-avian dinosaurs.',
    imageUrl: 'https://picsum.photos/seed/paleogene/600/400',
    phase: 'Phase 3'
  },
  {
    id: '42',
    year: '60 Million Years Ago',
    title: 'Rise of the Primates',
    description: 'Early primates evolve, characterized by traits like grasping hands, forward-facing eyes, and larger brains, setting the stage for human evolution.',
    imageUrl: 'https://picsum.photos/seed/primates/600/400',
    phase: 'Phase 3'
  },
  {
    id: '43',
    year: '55 Million Years Ago',
    title: 'Rise of Mammals (Diversity)',
    description: 'Mammals explode in diversity during the Paleocene and Eocene, filling vacant ecological niches.',
    imageUrl: 'https://picsum.photos/seed/mammals/600/400',
    phase: 'Phase 3' // Moved to Phase 3 timeline chronologically
  },
  {
    id: '44',
    year: '47 Million Years Ago',
    title: 'Evolution of Whales',
    description: 'Terrestrial ancestors of whales (like Pakicetus) fully adapt to aquatic life, illustrating a dramatic evolutionary reversal.',
    imageUrl: 'https://picsum.photos/seed/whales/600/400',
    phase: 'Phase 3' // Moved to Phase 3 timeline chronologically
  },
  {
    id: '45',
    year: '35 Million Years Ago',
    title: 'Oligocene Cooling',
    description: 'Global climate cools, leading to the expansion of grasslands and a reduction in forests, which eventually drives primates to adapt to open environments.',
    imageUrl: 'https://picsum.photos/seed/oligocene/600/400',
    phase: 'Phase 3'
  },
  {
    id: '46',
    year: '25 Million Years Ago',
    title: 'Apes and Old World Monkeys Diverge',
    description: 'The evolutionary lineage leading to modern humans separates from the lineage leading to Old World monkeys in Africa.',
    imageUrl: 'https://picsum.photos/seed/apesdiverge/600/400',
    phase: 'Phase 3'
  },
  {
    id: '47',
    year: '7 Million Years Ago',
    title: 'First Hominin Divergence',
    description: 'The lineage of hominins (bipedal apes) separates from the lineage leading to modern chimpanzees; Sahelanthropus tchadensis may represent one of the earliest hominins.',
    imageUrl: 'https://picsum.photos/seed/hominin/600/400',
    phase: 'Phase 3'
  },
  {
    id: '48',
    year: '6 Million Years Ago',
    title: 'Evolution of Consistent Bipedalism',
    description: 'Early hominins like Orrorin tugenensis begin walking habitually on two legs, a defining feature that frees the hands for tool use and carrying.',
    imageUrl: 'https://picsum.photos/seed/bipedalism/600/400',
    phase: 'Phase 3'
  },
  {
    id: '49',
    year: '4.4 Million Years Ago',
    title: 'Ardipithecus ramidus',
    description: 'This hominin species exhibits a mix of ape-like traits (grasping feet) and hominin traits (bipedal walking), suggesting life in a wooded environment.',
    imageUrl: 'https://picsum.photos/seed/ardipithecus/600/400',
    phase: 'Phase 3'
  },
  {
    id: '50',
    year: '4.2 Million Years Ago',
    title: 'The Australopithecines Emerge',
    description: 'The genus Australopithecus appears, characterized by fully committed bipedalism, though still possessing a relatively small brain.',
    imageUrl: 'https://picsum.photos/seed/australopithecus/600/400',
    phase: 'Phase 3'
  },
  {
    id: '51',
    year: '3.7 Million Years Ago',
    title: 'Laetoli Footprints',
    description: 'Three early hominins (likely Australopithecus afarensis) leave a trail of volcanic ash footprints in Tanzania, offering clear evidence of ancient bipedal walking.',
    imageUrl: 'https://picsum.photos/seed/laetoli/600/400',
    phase: 'Phase 3'
  },
  {
    id: '52',
    year: '3.2 Million Years Ago',
    title: '"Lucy" Discovered',
    description: 'The partial skeleton of Australopithecus afarensis is found in Ethiopia, providing key insight into the size and locomotion of this famous species.',
    imageUrl: 'https://picsum.photos/seed/lucy/600/400',
    phase: 'Phase 3'
  },
  {
    id: '53',
    year: '2.5 Million Years Ago',
    title: 'Oldowan Tool Technology',
    description: 'The earliest widespread stone tool industry begins, characterized by simple stone cores and sharp flakes used for butchering animals and processing plants.',
    imageUrl: 'https://picsum.photos/seed/oldowan/600/400',
    phase: 'Phase 3'
  },
  {
    id: '54',
    year: '2.4 Million Years Ago',
    title: 'Genus Homo Appears',
    description: 'The first members of the genus Homo (Homo habilis—"handy man") emerge in East Africa, identified by larger brains and sophisticated tool use.',
    imageUrl: 'https://picsum.photos/seed/homohabilis/600/400',
    phase: 'Phase 3'
  },
  {
    id: '55',
    year: '2.0 Million Years Ago',
    title: 'The Great African Aridification',
    description: 'A major climate shift causes grasslands to expand further, driving hominins to rely more on meat and highly mobile hunting strategies.',
    imageUrl: 'https://picsum.photos/seed/aridification/600/400',
    phase: 'Phase 3'
  },
  {
    id: '56',
    year: '1.9 Million Years Ago',
    title: 'Homo erectus Evolves',
    description: 'A new hominin emerges, characterized by a large brain, a tall, modern body structure, and the ability to travel vast distances.',
    imageUrl: 'https://picsum.photos/seed/homoerectus/600/400',
    phase: 'Phase 3'
  },
  {
    id: '57',
    year: '1.8 Million Years Ago',
    title: 'The First Major Out-of-Africa Migration',
    description: 'Homo erectus leaves Africa and rapidly spreads across Asia (Java, China) and Europe, demonstrating unprecedented adaptability and travel capability.',
    imageUrl: 'https://picsum.photos/seed/migration/600/400',
    phase: 'Phase 3'
  },
  {
    id: '58',
    year: '1.6 Million Years Ago',
    title: 'Acheulean Hand Axes',
    description: 'Homo erectus develops more refined, symmetric, pear-shaped stone tools (hand axes), representing a significant cognitive leap in planning and execution.',
    imageUrl: 'https://picsum.photos/seed/handaxes/600/400',
    phase: 'Phase 3'
  },
  {
    id: '59',
    year: '1.0 Million Years Ago',
    title: 'Mastery of Fire Begins',
    description: 'Evidence suggests Homo erectus begins to control fire, providing warmth, protection, and the ability to cook food, which aids in brain development.',
    imageUrl: 'https://picsum.photos/seed/fire/600/400',
    phase: 'Phase 3'
  },
  {
    id: '60',
    year: '800,000 Years Ago',
    title: 'Human Expansion into Europe',
    description: 'Early hominins establish a durable presence in Europe, adapting to colder climates using fire and robust hunting techniques.',
    imageUrl: 'https://picsum.photos/seed/europe/600/400',
    phase: 'Phase 3'
  },
  {
    id: '61',
    year: '600,000 Years Ago',
    title: 'Divergence of Neanderthals and Denisovans',
    description: 'The common ancestor of Homo sapiens splits from the lineage that will eventually become Neanderthals (Europe) and Denisovans (Asia).',
    imageUrl: 'https://picsum.photos/seed/divergence/600/400',
    phase: 'Phase 3'
  },
  {
    id: '62',
    year: '400,000 Years Ago',
    title: 'Use of Wooden Spears',
    description: 'Hominin sites reveal ancient wooden spears (Schöningen spears), demonstrating sophisticated hunting technology that predates modern humans.',
    imageUrl: 'https://picsum.photos/seed/spears/600/400',
    phase: 'Phase 3'
  },
  {
    id: '63',
    year: '300,000 Years Ago',
    title: 'Emergence of Archaic Homo sapiens',
    description: 'The earliest fossils considered anatomically modern Homo sapiens appear in Morocco, showing the gradual transition toward our species.',
    imageUrl: 'https://picsum.photos/seed/archaic_sapiens/600/400',
    phase: 'Phase 3'
  },
  {
    id: '64',
    year: '200,000 Years Ago',
    title: 'The Deepest Female Mitochondrial Ancestor',
    description: 'Mitochondrial Eve, the most recent common ancestor from whom all living humans trace their maternal line, is estimated to have lived around this time in Africa.',
    imageUrl: 'https://picsum.photos/seed/mitochondrial/600/400',
    phase: 'Phase 3'
  },
  {
    id: '65',
    year: '120,000 Years Ago',
    title: 'Beginning of the Last Ice Age (Glacial Period)',
    description: 'Massive ice sheets expand across the continents, driving complex human migration patterns and requiring further adaptive evolution.',
    imageUrl: 'https://picsum.photos/seed/iceage/600/400',
    phase: 'Phase 3'
  },
  {
    id: '66',
    year: '70,000 Years Ago',
    title: 'The "Great Leap Forward" (Cognitive Revolution)',
    description: 'A potential burst in cognitive abilities leads to complex language, symbolism, ritual burial, and sophisticated art and tools.',
    imageUrl: 'https://picsum.photos/seed/cognitive/600/400',
    phase: 'Phase 3'
  },
  {
    id: '67',
    year: '60,000 Years Ago',
    title: 'Second Major Out-of-Africa Migration',
    description: 'Anatomically modern Homo sapiens (our species) migrate out of Africa via the Arabian Peninsula, rapidly displacing older hominin populations.',
    imageUrl: 'https://picsum.photos/seed/migration2/600/400',
    phase: 'Phase 3'
  },
  {
    id: '68',
    year: '50,000 Years Ago',
    title: 'Settlement of Australia',
    description: 'Humans cross the sea barriers and colonize Sahul (the combined landmass of Australia and New Guinea), representing a major seafaring achievement.',
    imageUrl: 'https://picsum.photos/seed/australia/600/400',
    phase: 'Phase 3'
  },
  {
    id: '69',
    year: '40,000 Years Ago',
    title: 'Upper Paleolithic Art Flourishes',
    description: 'The height of Ice Age cave painting begins in Europe, featuring stunning, detailed depictions of bison, horses, and human hands (e.g., Chauvet Cave).',
    imageUrl: 'https://picsum.photos/seed/caveart/600/400',
    phase: 'Phase 3'
  },
  {
    id: '70',
    year: '30,000 Years Ago',
    title: 'Extinction of Neanderthals',
    description: 'Neanderthal populations decline and vanish from the fossil record, likely due to a combination of climate change and competition with Homo sapiens.',
    imageUrl: 'https://picsum.photos/seed/neanderthal_extinction/600/400',
    phase: 'Phase 3'
  },
  {
    id: '71',
    year: '16,000 Years Ago',
    title: 'Initial Settlement of the Americas',
    description: 'Humans cross the Beringia land bridge (connecting Asia and North America) or travel along the coast, becoming the continent\'s first settlers.',
    imageUrl: 'https://picsum.photos/seed/americas/600/400',
    phase: 'Phase 3'
  },
  {
    id: '72',
    year: '12,000 Years Ago',
    title: 'Clovis Culture in North America',
    description: 'A distinctive and widespread North American culture, characterized by unique fluted stone projectile points, appears and dominates the hunting landscape.',
    imageUrl: 'https://picsum.photos/seed/clovis/600/400',
    phase: 'Phase 3'
  },
  {
    id: '73',
    year: '10,000 BCE',
    title: 'End of the Last Ice Age (Holocene Begins)',
    description: 'The Earth enters the current, relatively warm and stable interglacial period, setting the stage for the development of agriculture and settled civilization.',
    imageUrl: 'https://picsum.photos/seed/holocene/600/400',
    phase: 'Phase 3'
  },
  // Phase 4 Marker
  {
    id: 'phase-4-marker',
    year: '10,000 BCE',
    title: 'The Neolithic Revolution',
    description: '',
    imageUrl: 'https://picsum.photos/seed/neolithic_hero/1600/900',
    phase: 'Phase 4',
    type: 'phase_marker'
  },
  {
    id: '74',
    year: '10,000 BCE',
    title: 'The Dawn of the Holocene',
    description: 'The most recent glacial period ends, leading to a stable, warmer, and wetter climate worldwide, enabling settled life and reliable plant growth.',
    imageUrl: 'https://picsum.photos/seed/holocene_dawn/600/400',
    phase: 'Phase 4'
  },
  {
    id: '75',
    year: '9,600 BCE',
    title: 'First Cereal Cultivation',
    description: 'Early intentional cultivation of wild einkorn and emmer wheat begins in the Fertile Crescent of Southwest Asia.',
    imageUrl: 'https://picsum.photos/seed/wheat/600/400',
    phase: 'Phase 4'
  },
  {
    id: '76',
    year: '9,500 BCE',
    title: 'Permanent Settlement at Jericho',
    description: "The site of Jericho (in the Jordan Valley) is established as one of the world's oldest continuously inhabited proto-cities, dating back to the Mesolithic.",
    imageUrl: 'https://picsum.photos/seed/jericho/600/400',
    phase: 'Phase 4'
  },
  {
    id: '77',
    year: '9,000 BCE',
    title: 'Göbekli Tepe Complex Flourishes',
    description: 'Hunter-gatherers in modern Turkey construct monumental T-shaped stone pillar enclosures, suggesting complex religious organization preceded agriculture.',
    imageUrl: 'https://picsum.photos/seed/gobeklitepe/600/400',
    phase: 'Phase 4'
  },
  {
    id: '78',
    year: '9,000 BCE',
    title: 'Domestication of the Dog',
    description: 'The gray wolf is widely accepted to have been domesticated by this time, providing protection and aid in hunting.',
    imageUrl: 'https://picsum.photos/seed/dog/600/400',
    phase: 'Phase 4'
  },
  {
    id: '79',
    year: '8,800 BCE',
    title: 'Pre-Pottery Neolithic A (PPNA)',
    description: 'This period sees the construction of round, semi-subterranean houses and the use of communal food storage.',
    imageUrl: 'https://picsum.photos/seed/neolithic_houses/600/400',
    phase: 'Phase 4'
  },
  {
    id: '80',
    year: '8,500 BCE',
    title: 'Domestication of the Goat',
    description: 'Wild goats (Capra aegagrus) are domesticated in the Zagros Mountains (Iran), marking the first major livestock to provide milk and meat.',
    imageUrl: 'https://picsum.photos/seed/goat/600/400',
    phase: 'Phase 4'
  },
  {
    id: '81',
    year: '8,000 BCE',
    title: 'Wall of Jericho',
    description: 'A massive stone wall, reaching up to 12 feet high, is constructed around the settlement of Jericho, likely for defense or flood control.',
    imageUrl: 'https://picsum.photos/seed/jericho_wall/600/400',
    phase: 'Phase 4'
  },
  {
    id: '82',
    year: '8,000 BCE',
    title: 'Rice Domestication in China',
    description: 'Evidence for the independent domestication of rice (Oryza sativa) appears in the Yangtze River valley, launching a parallel agricultural revolution in East Asia.',
    imageUrl: 'https://picsum.photos/seed/rice/600/400',
    phase: 'Phase 4'
  },
  {
    id: '83',
    year: '7,700 BCE',
    title: 'Domesticated Wheat in the Fertile Crescent',
    description: 'Through generations of selective breeding, early farmers develop wheat strains that do not easily shatter upon ripening, enabling efficient harvest.',
    imageUrl: 'https://picsum.photos/seed/wheat_field/600/400',
    phase: 'Phase 4'
  },
  {
    id: '84',
    year: '7,500 BCE',
    title: 'Domestication of Cattle and Pig',
    description: 'Wild aurochs are domesticated into cattle (Anatolia/India) and pigs (Near East/China), completing the four major Neolithic livestock species.',
    imageUrl: 'https://picsum.photos/seed/cattle/600/400',
    phase: 'Phase 4'
  },
  {
    id: '85',
    year: '7,200 BCE',
    title: 'Plastered Skulls of \'Ain Ghazal',
    description: 'A practice in settlements like \'Ain Ghazal (Jordan) where human skulls are adorned with plaster and shells, representing a form of ancestor veneration.',
    imageUrl: 'https://picsum.photos/seed/skulls/600/400',
    phase: 'Phase 4'
  },
  {
    id: '86',
    year: '7,000 BCE',
    title: 'Pre-Pottery Neolithic B (PPNB)',
    description: 'Architecture shifts from round houses to rectilinear, multi-room structures, indicating more complex spatial and social organization.',
    imageUrl: 'https://picsum.photos/seed/ppnb/600/400',
    phase: 'Phase 4'
  },
  {
    id: '87',
    year: '7,000 BCE',
    title: 'The Settlement of Çatalhöyük',
    description: 'A very large proto-city in Anatolia (Turkey) flourishes, characterized by houses packed so tightly they are entered from the roof.',
    imageUrl: 'https://picsum.photos/seed/catalhoyuk/600/400',
    phase: 'Phase 4'
  },
  {
    id: '88',
    year: '7,000 BCE',
    title: 'Early Flax Textiles',
    description: 'Evidence of processing flax into linen fibers for woven cloth appears in the Levant, signifying the beginning of the textile industry.',
    imageUrl: 'https://picsum.photos/seed/linen/600/400',
    phase: 'Phase 4'
  },
  {
    id: '89',
    year: '6,500 BCE',
    title: 'Spread of Farming to Europe',
    description: 'Agricultural practices begin to diffuse from Anatolia into Southeastern Europe (Greece and the Balkans).',
    imageUrl: 'https://picsum.photos/seed/europe_farming/600/400',
    phase: 'Phase 4'
  },
  {
    id: '90',
    year: '6,200 BCE',
    title: 'First Known Copper Smelting',
    description: 'The earliest evidence of extracting copper from ore appears in Çatalhöyük, marking the start of the Chalcolithic (Copper Age).',
    imageUrl: 'https://picsum.photos/seed/copper/600/400',
    phase: 'Phase 4'
  },
  {
    id: '91',
    year: '6,000 BCE',
    title: 'Independent Maize Cultivation in Mesoamerica',
    description: 'Farmers in Mexico begin cultivating teosinte, the wild ancestor of maize (corn), initiating the agricultural revolution in the New World.',
    imageUrl: 'https://picsum.photos/seed/maize/600/400',
    phase: 'Phase 4'
  },
  {
    id: '92',
    year: '6,000 BCE',
    title: 'Earliest Irrigation',
    description: 'Simple earthen canals and controlled diversion of river water begin in Mesopotamia to support crop growth beyond natural floodplains.',
    imageUrl: 'https://picsum.photos/seed/irrigation/600/400',
    phase: 'Phase 4'
  },
  {
    id: '93',
    year: '6,000 BCE',
    title: 'Sahara Aridification Forces Migration',
    description: 'The "Green Sahara" period ends as the climate dries, forcing populations to congregate along the Nile River, a precursor to Pharaonic Egypt.',
    imageUrl: 'https://picsum.photos/seed/nile/600/400',
    phase: 'Phase 4'
  },
  {
    id: '94',
    year: '5,500 BCE',
    title: 'First Evidence of Cheese Making',
    description: 'Archaeological evidence suggests milk processing and cheese production in Poland, a method to preserve nutrients and make milk digestible.',
    imageUrl: 'https://picsum.photos/seed/cheese/600/400',
    phase: 'Phase 4'
  },
  {
    id: '95',
    year: '5,400 BCE',
    title: 'Halaf Culture and Fine Pottery',
    description: 'The Halaf culture in Northern Mesopotamia produces elaborate, brightly painted pottery that is widely traded, indicating craft specialization.',
    imageUrl: 'https://picsum.photos/seed/pottery/600/400',
    phase: 'Phase 4'
  },
  {
    id: '96',
    year: '5,000 BCE',
    title: 'Invention of the Plow (Ard)',
    description: 'The earliest known use of a simple scratch plow, likely drawn by oxen, dramatically increasing the area of land a farmer could cultivate.',
    imageUrl: 'https://picsum.photos/seed/plow/600/400',
    phase: 'Phase 4'
  },
  {
    id: '97',
    year: '5,000 BCE',
    title: 'Megalithic Construction Begins in Europe',
    description: 'Large stone monuments (megaliths) and tombs begin to be erected in regions like Portugal and France, suggesting the emergence of organized labor and status.',
    imageUrl: 'https://picsum.photos/seed/megaliths/600/400',
    phase: 'Phase 4'
  },
  {
    id: '98',
    year: '4,500 BCE',
    title: 'The Ubaid Period in Sumer',
    description: 'The foundation for the first city-states is laid in Mesopotamia, characterized by the construction of large temple complexes that served as administrative centers.',
    imageUrl: 'https://picsum.photos/seed/ziggurat/600/400',
    phase: 'Phase 4'
  },
  {
    id: '99',
    year: '4,000 BCE',
    title: 'Invention of the Potter\'s Wheel',
    description: 'The rapid potter\'s wheel is invented in Mesopotamia, revolutionizing ceramic production and enabling the mass creation of uniform vessels.',
    imageUrl: 'https://picsum.photos/seed/potterswheel/600/400',
    phase: 'Phase 4'
  },
  {
    id: '100',
    year: '4,000 BCE',
    title: 'Use of Wool for Textiles',
    description: 'Sheep are selectively bred to maximize wool, shifting their role from primarily meat providers to fiber producers for widespread clothing.',
    imageUrl: 'https://picsum.photos/seed/wool/600/400',
    phase: 'Phase 4'
  },
  {
    id: '101',
    year: '3,800 BCE',
    title: 'The Sweet Track in England',
    description: 'Construction of an ancient timber causeway in the Somerset Levels, one of the oldest known engineered roads in Europe.',
    imageUrl: 'https://picsum.photos/seed/trackway/600/400',
    phase: 'Phase 4'
  },
  {
    id: '102',
    year: '3,500 BCE',
    title: 'Early Writing (Proto-Cuneiform) in Uruk',
    description: 'Pictographic clay tablets are used in the city of Uruk (Mesopotamia) for accounting and tracking goods, a direct precursor to the first complete writing systems.',
    imageUrl: 'https://picsum.photos/seed/cuneiform/600/400',
    phase: 'Phase 4'
  },
  {
    id: '103',
    year: '3,200 BCE',
    title: 'Bronze Alloy Invention',
    description: 'The deliberate alloying of copper with tin to create bronze begins in the Near East, ushering in the Bronze Age, an era defined by metal tools and weaponry.',
    imageUrl: 'https://picsum.photos/seed/bronze/600/400',
    phase: 'Phase 4'
  },
  // Phase 5 Marker
  {
    id: 'phase-5-marker',
    year: '3100 BCE',
    title: 'The Bronze Age',
    description: '',
    imageUrl: 'https://picsum.photos/seed/bronze_age_hero/1600/900',
    phase: 'Phase 5',
    type: 'phase_marker'
  },
  {
    id: '104',
    year: '3100 BCE',
    title: 'Unification of Egypt (Dynasty 0/I)',
    description: 'Upper and Lower Egypt are unified, traditionally under the legendary King Menes (Narmer), establishing the centralized Pharaonic state along the Nile.',
    imageUrl: 'https://picsum.photos/seed/egypt_unification/600/400',
    phase: 'Phase 5'
  },
  {
    id: '105',
    year: '3000 BCE',
    title: 'First Cities in Sumer',
    description: 'Large urban centers like Uruk, Ur, and Lagash become true cities, featuring massive walls, ziggurats (temples), and large, specialized populations.',
    imageUrl: 'https://picsum.photos/seed/sumer_cities/600/400',
    phase: 'Phase 5'
  },
  {
    id: '106',
    year: '2900 BCE',
    title: 'Rise of Cuneiform Writing',
    description: 'The early pictographic writing in Mesopotamia develops into formalized cuneiform script, used for administration, law, and literature.',
    imageUrl: 'https://picsum.photos/seed/cuneiform_writing/600/400',
    phase: 'Phase 5'
  },
  {
    id: '107',
    year: '2800 BCE',
    title: 'The Royal Tombs of Ur',
    description: 'Elaborate burials in the Sumerian city of Ur reveal massive human sacrifices and exquisite craftsmanship (gold, lapis lazuli), indicating extreme social stratification.',
    imageUrl: 'https://picsum.photos/seed/ur_tombs/600/400',
    phase: 'Phase 5'
  },
  {
    id: '108',
    year: '2700 BCE',
    title: 'Legendary Reign of Gilgamesh',
    description: 'The semi-mythical King of Uruk, later immortalized in the Epic of Gilgamesh, believed to have ruled during this early dynastic period.',
    imageUrl: 'https://picsum.photos/seed/gilgamesh/600/400',
    phase: 'Phase 5'
  },
  {
    id: '109',
    year: '2686 BCE',
    title: 'Old Kingdom of Egypt Begins',
    description: 'Marked by political stability, massive wealth, and the construction of the most monumental architecture, often called the "Age of the Pyramids."',
    imageUrl: 'https://picsum.photos/seed/old_kingdom/600/400',
    phase: 'Phase 5'
  },
  {
    id: '110',
    year: '2630 BCE',
    title: 'Djoser\'s Step Pyramid',
    description: 'The architect Imhotep designs the first true pyramid (at Saqqara) for Pharaoh Djoser, establishing stone as the standard material for royal tombs.',
    imageUrl: 'https://picsum.photos/seed/step_pyramid/600/400',
    phase: 'Phase 5'
  },
  {
    id: '111',
    year: '2500 BCE',
    title: 'Height of the Indus Valley Civilization',
    description: 'Major cities like Mohenjo-Daro and Harappa flourish, characterized by sophisticated grid planning, advanced sewage systems, and standardized weights and measures.',
    imageUrl: 'https://picsum.photos/seed/indus_valley/600/400',
    phase: 'Phase 5'
  },
  {
    id: '112',
    year: '2500 BCE',
    title: 'The Great Pyramid of Giza',
    description: 'Pharaoh Khufu commissions the Great Pyramid, the largest stone structure ever built and the last surviving wonder of the ancient world.',
    imageUrl: 'https://picsum.photos/seed/great_pyramid/600/400',
    phase: 'Phase 5'
  },
  {
    id: '113',
    year: '2400 BCE',
    title: 'The Development of Sanskrit',
    description: 'Early forms of the Indo-Aryan language that would become Sanskrit begin to develop in the Indian subcontinent.',
    imageUrl: 'https://picsum.photos/seed/sanskrit/600/400',
    phase: 'Phase 5'
  },
  {
    id: '114',
    year: '2334 BCE',
    title: 'Sargon of Akkad Creates the First Empire',
    description: 'Sargon conquers the Sumerian city-states and establishes the Akkadian Empire, the world\'s first large territorial empire, ruling from the Persian Gulf to the Mediterranean.',
    imageUrl: 'https://picsum.photos/seed/sargon/600/400',
    phase: 'Phase 5'
  },
  {
    id: '115',
    year: '2112 BCE',
    title: 'The Neo-Sumerian Renaissance (Ur III)',
    description: 'Sumerian city of Ur regains control after the Akkadian collapse, leading to a brief but highly centralized revival of Sumerian culture and art.',
    imageUrl: 'https://picsum.photos/seed/ur_renaissance/600/400',
    phase: 'Phase 5'
  },
  {
    id: '116',
    year: '2000 BCE',
    title: 'Collapse of the Indus Valley Civilization',
    description: 'Harappan cities begin to decline and are abandoned due to environmental changes (drying rivers) and possible migrations.',
    imageUrl: 'https://picsum.photos/seed/indus_collapse/600/400',
    phase: 'Phase 5'
  },
  {
    id: '117',
    year: '1900 BCE',
    title: 'The Minoan Civilization Rises',
    description: 'The Minoan civilization (on Crete) establishes palace centers like Knossos, characterized by vibrant frescos, sophisticated trade, and a unique undeciphered script (Linear A).',
    imageUrl: 'https://picsum.photos/seed/minoan/600/400',
    phase: 'Phase 5'
  },
  {
    id: '118',
    year: '1850 BCE',
    title: 'First Major Centralization in the Americas',
    description: 'The Caral Supe civilization in Peru develops large monumental structures and organized urban planning, representing the earliest major complex society in the Americas.',
    imageUrl: 'https://picsum.photos/seed/caral_supe/600/400',
    phase: 'Phase 5'
  },
  {
    id: '119',
    year: '1792 BCE',
    title: 'Reign of Hammurabi of Babylon',
    description: 'Hammurabi creates the Old Babylonian Empire and is famed for his comprehensive legal code, which established concepts like "an eye for an eye."',
    imageUrl: 'https://picsum.photos/seed/hammurabi/600/400',
    phase: 'Phase 5'
  },
  {
    id: '120',
    year: '1750 BCE',
    title: 'Writing Spreads to China',
    description: 'Early forms of writing begin to appear in China, precursors to the sophisticated oracle bone script that emerges later.',
    imageUrl: 'https://picsum.photos/seed/chinese_writing/600/400',
    phase: 'Phase 5'
  },
  {
    id: '121',
    year: '1700 BCE',
    title: 'The Hyksos Invasion of Egypt',
    description: 'Foreign rulers (the Hyksos) invade and take control of northern Egypt, using superior bronze weaponry and chariots, disrupting the Middle Kingdom.',
    imageUrl: 'https://picsum.photos/seed/hyksos/600/400',
    phase: 'Phase 5'
  },
  {
    id: '122',
    year: '1600 BCE',
    title: 'Mycenaean Civilization Begins',
    description: 'The Mycenaean culture (mainland Greece) emerges, characterized by fortified citadel palaces, warrior culture, and Linear B script (early Greek).',
    imageUrl: 'https://picsum.photos/seed/mycenaean/600/400',
    phase: 'Phase 5'
  },
  {
    id: '123',
    year: '1600 BCE',
    title: 'The Hittite Kingdom',
    description: 'The Hittites establish a major kingdom in Anatolia, mastering chariot warfare and becoming the first civilization to smelt and use iron widely (though its use is restricted).',
    imageUrl: 'https://picsum.photos/seed/hittite/600/400',
    phase: 'Phase 5'
  },
  {
    id: '124',
    year: '1600 BCE',
    title: 'Establishment of the Shang Dynasty',
    description: 'The first historically and archaeologically confirmed dynasty in China emerges along the Yellow River, known for its bronze technology and oracle bones.',
    imageUrl: 'https://picsum.photos/seed/shang/600/400',
    phase: 'Phase 5'
  },
  {
    id: '125',
    year: '1550 BCE',
    title: 'New Kingdom of Egypt Begins',
    description: 'The Egyptians expel the Hyksos and establish the New Kingdom, marking Egypt\'s greatest territorial expansion and peak of imperial power.',
    imageUrl: 'https://picsum.photos/seed/new_kingdom/600/400',
    phase: 'Phase 5'
  },
  {
    id: '126',
    year: '1500 BCE',
    title: 'Early Monotheistic Cult in Egypt',
    description: 'Pharaoh Akhenaten initiates a brief but radical shift toward the worship of a single sun disk deity, the Aten.',
    imageUrl: 'https://picsum.photos/seed/akhenaten/600/400',
    phase: 'Phase 5'
  },
  {
    id: '127',
    year: '1500 BCE',
    title: 'The Olmec Culture Emerges',
    description: 'The Olmec begin to flourish in Mesoamerica (Gulf Coast of Mexico), known for their colossal stone heads and setting the cultural foundations for later American civilizations.',
    imageUrl: 'https://picsum.photos/seed/olmec/600/400',
    phase: 'Phase 5'
  },
  {
    id: '128',
    year: '1500 BCE',
    title: 'The Vedic Period in India',
    description: 'Indo-Aryan groups migrate into the Indian subcontinent, bringing early Vedic religion and Sanskrit, which forms the basis for Hinduism.',
    imageUrl: 'https://picsum.photos/seed/vedic/600/400',
    phase: 'Phase 5'
  },
  {
    id: '129',
    year: '1450 BCE',
    title: 'The Eruption of Thera',
    description: 'A massive volcanic eruption on the island of Thera (Santorini) causes widespread devastation and severely impacts the Minoan civilization, contributing to its decline.',
    imageUrl: 'https://picsum.photos/seed/thera/600/400',
    phase: 'Phase 5'
  },
  {
    id: '130',
    year: '1400 BCE',
    title: 'Height of Mycenaean Power',
    description: 'Mycenaean culture dominates the Aegean, establishing a vast trade network and possibly forming the historical basis for the stories of the Trojan War.',
    imageUrl: 'https://picsum.photos/seed/mycenaean_height/600/400',
    phase: 'Phase 5'
  },
  {
    id: '131',
    year: '1350 BCE',
    title: 'The Amarna Letters',
    description: 'An archive of diplomatic correspondence between Egyptian pharaohs (Akhenaten and Tutankhamun) and other Near Eastern rulers is created, revealing the complex political world of the Late Bronze Age.',
    imageUrl: 'https://picsum.photos/seed/amarna/600/400',
    phase: 'Phase 5'
  },
  {
    id: '132',
    year: '1300 BCE',
    title: 'Moses and the Exodus',
    description: 'Traditional dating places the life of Moses and the Exodus of the Israelites from Egypt around this time (though archaeological evidence remains debated).',
    imageUrl: 'https://picsum.photos/seed/moses/600/400',
    phase: 'Phase 5'
  },
  {
    id: '133',
    year: '1274 BCE',
    title: 'Battle of Kadesh',
    description: 'Ramesses II of Egypt fights the Hittite army in one of the largest chariot battles in history, leading to the world\'s earliest known surviving peace treaty.',
    imageUrl: 'https://picsum.photos/seed/kadesh/600/400',
    phase: 'Phase 5'
  },
  {
    id: '134',
    year: '1200 BCE',
    title: 'Bronze Age Collapse Begins',
    description: 'The simultaneous destruction of major cities across the Mediterranean, caused by climate change, internal revolts, and mysterious "Sea Peoples," ushers in a dark age.',
    imageUrl: 'https://picsum.photos/seed/bronze_collapse/600/400',
    phase: 'Phase 5'
  },
  // Phase 6 Marker
  {
    id: 'phase-6-marker',
    year: '1200 BCE',
    title: 'The Iron Age & Classical Age',
    description: '',
    imageUrl: 'https://picsum.photos/seed/iron_age_hero/1600/900',
    phase: 'Phase 6',
    type: 'phase_marker'
  },
  {
    id: '135',
    year: '1200 BCE',
    title: 'Iron Technology Spreads',
    description: 'Iron production becomes widespread across the Mediterranean and Near East, replacing bronze as the primary metal for tools and weapons.',
    imageUrl: 'https://picsum.photos/seed/iron_smelting/600/400',
    phase: 'Phase 6'
  },
  {
    id: '136',
    year: '1150 BCE',
    title: 'Greek Dark Ages Begin',
    description: 'Following the collapse of the Mycenaean civilization, Greece enters a period of decline and depopulation where writing (Linear B) is lost.',
    imageUrl: 'https://picsum.photos/seed/greek_dark_ages/600/400',
    phase: 'Phase 6'
  },
  {
    id: '137',
    year: '1046 BCE',
    title: 'Zhou Dynasty Established (China)',
    description: 'The Zhou overthrew the Shang, establishing a long-lasting dynasty that introduced the influential concept of the "Mandate of Heaven."',
    imageUrl: 'https://picsum.photos/seed/zhou_dynasty/600/400',
    phase: 'Phase 6'
  },
  {
    id: '138',
    year: '1000 BCE',
    title: 'Phoenician Alphabet Creation',
    description: 'Phoenician traders develop and spread an alphabetic script, which the Greeks later adopted and adapted to create the basis of all modern Western alphabets.',
    imageUrl: 'https://picsum.photos/seed/phoenician_alphabet/600/400',
    phase: 'Phase 6'
  },
  {
    id: '139',
    year: '957 BCE',
    title: 'Solomon Builds the First Temple',
    description: 'King Solomon completes the Holy Temple in Jerusalem, centralizing the worship of Yahweh in the Kingdom of Israel and Judah.',
    imageUrl: 'https://picsum.photos/seed/solomons_temple/600/400',
    phase: 'Phase 6'
  },
  {
    id: '140',
    year: '911 BCE',
    title: 'Rise of the Neo-Assyrian Empire',
    description: 'Assyria begins a period of relentless military expansion and terror, establishing the first empire to systematically rule and administer conquered territories.',
    imageUrl: 'https://picsum.photos/seed/assyrian_empire/600/400',
    phase: 'Phase 6'
  },
  {
    id: '141',
    year: '800 BCE',
    title: 'Greek Polis Emerges',
    description: 'The independent city-state (polis), such as Athens and Sparta, develops as the fundamental social and political unit of Greek civilization.',
    imageUrl: 'https://picsum.photos/seed/greek_polis/600/400',
    phase: 'Phase 6'
  },
  {
    id: '142',
    year: '776 BCE',
    title: 'First Olympic Games',
    description: 'The first recorded Ancient Olympic Games are held in Olympia, Greece, marking the start of a powerful pan-Hellenic identity.',
    imageUrl: 'https://picsum.photos/seed/olympics/600/400',
    phase: 'Phase 6'
  },
  {
    id: '143',
    year: '753 BCE',
    title: 'Traditional Founding of Rome',
    description: 'The legendary date for the founding of Rome by the twins Romulus and Remus, beginning the period of the Roman Kingdom.',
    imageUrl: 'https://picsum.photos/seed/rome_founding/600/400',
    phase: 'Phase 6'
  },
  {
    id: '144',
    year: '722 BCE',
    title: 'Fall of the Kingdom of Israel',
    description: 'The Neo-Assyrian Empire conquers the Northern Kingdom of Israel, leading to the mass deportation of its inhabitants (the "Ten Lost Tribes").',
    imageUrl: 'https://picsum.photos/seed/israel_fall/600/400',
    phase: 'Phase 6'
  },
  {
    id: '145',
    year: '700 BCE',
    title: 'Homer Composes the Epics',
    description: 'The great oral poems, the Iliad and the Odyssey, are solidified, becoming the foundation of Greek literature and education.',
    imageUrl: 'https://picsum.photos/seed/homer/600/400',
    phase: 'Phase 6'
  },
  {
    id: '146',
    year: '612 BCE',
    title: 'Fall of Nineveh',
    description: 'An alliance of Babylonians and Medes sacks the Assyrian capital, Nineveh, effectively ending the powerful Neo-Assyrian Empire.',
    imageUrl: 'https://picsum.photos/seed/nineveh/600/400',
    phase: 'Phase 6'
  },
  {
    id: '147',
    year: '600 BCE',
    title: 'Rise of the Mahajanapadas (India)',
    description: 'Sixteen major kingdoms (Great Realms) emerge in North India, setting the political stage for the rise of powerful states like Magadha.',
    imageUrl: 'https://picsum.photos/seed/mahajanapadas/600/400',
    phase: 'Phase 6'
  },
  {
    id: '148',
    year: '594 BCE',
    title: 'Solon\'s Reforms in Athens',
    description: 'Athenian statesman Solon introduces legal and economic reforms that dismantle aristocratic power and lay the groundwork for later democracy.',
    imageUrl: 'https://picsum.photos/seed/solon/600/400',
    phase: 'Phase 6'
  },
  {
    id: '149',
    year: '586 BCE',
    title: 'Destruction of the First Temple',
    description: 'Nebuchadnezzar II of Babylon destroys the First Temple and exiles the Jewish elite, a pivotal event in Jewish religious history.',
    imageUrl: 'https://picsum.photos/seed/temple_destruction/600/400',
    phase: 'Phase 6'
  },
  {
    id: '150',
    year: '563 BCE',
    title: 'Birth of Siddhartha Gautama',
    description: 'Traditional birth date of the founder of Buddhism, who would become known as the Buddha.',
    imageUrl: 'https://picsum.photos/seed/buddha/600/400',
    phase: 'Phase 6'
  },
  {
    id: '151',
    year: '551 BCE',
    title: 'Birth of Confucius',
    description: 'The Chinese philosopher Kong Fuzi is born; his teachings on social harmony, ritual, and governance form the basis of Confucianism.',
    imageUrl: 'https://picsum.photos/seed/confucius/600/400',
    phase: 'Phase 6'
  },
  {
    id: '152',
    year: '550 BCE',
    title: 'Achaemenid Empire Founded (Persia)',
    description: 'Cyrus the Great unifies the Iranian tribes, establishing the Achaemenid Empire, the largest and most influential empire of the ancient world.',
    imageUrl: 'https://picsum.photos/seed/persian_empire/600/400',
    phase: 'Phase 6'
  },
  {
    id: '153',
    year: '539 BCE',
    title: 'Cyrus Frees the Jews',
    description: 'Cyrus the Great conquers Babylon and allows the Jewish exiles to return to Jerusalem to rebuild their temple.',
    imageUrl: 'https://picsum.photos/seed/cyrus/600/400',
    phase: 'Phase 6'
  },
  {
    id: '154',
    year: '509 BCE',
    title: 'Founding of the Roman Republic',
    description: 'The last king is expelled, and Rome establishes a new government based on elected officials (Consuls) and a powerful Senate.',
    imageUrl: 'https://picsum.photos/seed/roman_republic/600/400',
    phase: 'Phase 6'
  },
  {
    id: '155',
    year: '508 BCE',
    title: 'Athenian Democracy Instituted',
    description: 'Cleisthenes institutes democratic reforms in Athens, granting power to the citizen assembly and cementing Athens\' status as the world\'s first democracy.',
    imageUrl: 'https://picsum.photos/seed/democracy/600/400',
    phase: 'Phase 6'
  },
  {
    id: '156',
    year: '490 BCE',
    title: 'Battle of Marathon',
    description: 'Athenian and allied Greek forces decisively defeat the first Persian invasion under King Darius I, preserving Greek independence.',
    imageUrl: 'https://picsum.photos/seed/marathon/600/400',
    phase: 'Phase 6'
  },
  {
    id: '157',
    year: '480 BCE',
    title: 'Battles of Thermopylae/Salamis',
    description: 'The pivotal battles of the Second Persian War; Greek naval victory at Salamis ensures the survival of the Hellenic world.',
    imageUrl: 'https://picsum.photos/seed/salamis/600/400',
    phase: 'Phase 6'
  },
  {
    id: '158',
    year: '475 BCE',
    title: 'Warring States Period (China)',
    description: 'Centuries of warfare begin as the Zhou dynasty fragments, with seven major states vying for total control of China.',
    imageUrl: 'https://picsum.photos/seed/warring_states/600/400',
    phase: 'Phase 6'
  },
  {
    id: '159',
    year: '447 BCE',
    title: 'Parthenon Construction Begins',
    description: 'Work starts on the Parthenon in Athens, a monumental Doric temple considered the high point of Classical Greek art and architecture.',
    imageUrl: 'https://picsum.photos/seed/parthenon/600/400',
    phase: 'Phase 6'
  },
  {
    id: '160',
    year: '431 BCE',
    title: 'Peloponnesian War Begins',
    description: 'The devastating conflict between the Athenian Empire and the Spartan-led Peloponnesian League begins, eventually ending the "Golden Age" of Athens.',
    imageUrl: 'https://picsum.photos/seed/peloponnesian/600/400',
    phase: 'Phase 6'
  },
  {
    id: '161',
    year: '399 BCE',
    title: 'Death of Socrates',
    description: 'The philosopher Socrates is executed in Athens for impiety and corrupting the youth, profoundly influencing his students Plato and Xenophon.',
    imageUrl: 'https://picsum.photos/seed/socrates/600/400',
    phase: 'Phase 6'
  },
  {
    id: '162',
    year: '336 BCE',
    title: 'Alexander the Great Rises',
    description: 'Alexander III of Macedon succeeds his father, Philip II, beginning his campaign to conquer the Persian Empire and spread Hellenistic culture.',
    imageUrl: 'https://picsum.photos/seed/alexander/600/400',
    phase: 'Phase 6'
  },
  {
    id: '163',
    year: '221 BCE',
    title: 'Unification of China (Qin Dynasty)',
    description: 'Qin Shi Huang defeats the last rival states, unifies China, and proclaims himself the First Emperor, beginning the Imperial era.',
    imageUrl: 'https://picsum.photos/seed/qin/600/400',
    phase: 'Phase 6'
  },
  {
    id: '164',
    year: '27 BCE',
    title: 'End of the Roman Republic',
    description: 'Octavian is granted the title Augustus, effectively ending the Roman Republic and establishing the autocratic rule of the Roman Empire.',
    imageUrl: 'https://picsum.photos/seed/augustus/600/400',
    phase: 'Phase 6'
  },
  // Phase 7 Marker
  {
    id: 'phase-7-marker',
    year: '6 CE',
    title: 'The Post-Classical World',
    description: '',
    imageUrl: 'https://picsum.photos/seed/post_classical_hero/1600/900',
    phase: 'Phase 7',
    type: 'phase_marker'
  },
  {
    id: '165',
    year: '6 CE',
    title: 'Roman Annexation of Judea',
    description: 'Rome formalizes its direct rule over Judea, increasing political tensions that fueled revolts and shaped early Jewish and Christian history.',
    imageUrl: 'https://picsum.photos/seed/judea_annexation/600/400',
    phase: 'Phase 7'
  },
  {
    id: '166',
    year: '29 CE',
    title: 'Crucifixion of Jesus Christ',
    description: 'The foundational event of Christianity, which, despite early persecution, would eventually become the official religion of the Roman Empire.',
    imageUrl: 'https://picsum.photos/seed/crucifixion/600/400',
    phase: 'Phase 7'
  },
  {
    id: '167',
    year: '70 CE',
    title: 'Destruction of the Second Temple',
    description: 'Roman forces crush a major revolt, destroying the Temple in Jerusalem and accelerating the Jewish diaspora across the globe.',
    imageUrl: 'https://picsum.photos/seed/temple_destruction_2/600/400',
    phase: 'Phase 7'
  },
  {
    id: '168',
    year: '100 CE',
    title: 'Height of the Silk Roads',
    description: 'Long-distance trade routes across Eurasia are heavily utilized, connecting the Roman, Parthian, Indian, and Han Empires, exchanging goods and ideas.',
    imageUrl: 'https://picsum.photos/seed/silk_road/600/400',
    phase: 'Phase 7'
  },
  {
    id: '169',
    year: '117 CE',
    title: 'Roman Empire Reaches Greatest Extent',
    description: 'The empire reaches its maximum territorial size under Emperor Trajan, encompassing all Mediterranean shores and parts of Britain, North Africa, and the Near East.',
    imageUrl: 'https://picsum.photos/seed/roman_empire_map/600/400',
    phase: 'Phase 7'
  },
  {
    id: '170',
    year: '220 CE',
    title: 'Fall of the Han Dynasty',
    description: 'Ends four centuries of unified imperial rule in China, beginning the tumultuous Three Kingdoms Period and centuries of fragmentation.',
    imageUrl: 'https://picsum.photos/seed/han_dynasty/600/400',
    phase: 'Phase 7'
  },
  {
    id: '171',
    year: '313 CE',
    title: 'Edict of Milan',
    description: 'Emperor Constantine legalizes Christianity throughout the Roman Empire, dramatically shifting the religion\'s status from persecuted sect to dominant force.',
    imageUrl: 'https://picsum.photos/seed/edict_milan/600/400',
    phase: 'Phase 7'
  },
  {
    id: '172',
    year: '330 CE',
    title: 'Founding of Constantinople',
    description: 'Constantine dedicates a new imperial capital on the site of Byzantium, shifting the political center of gravity eastward.',
    imageUrl: 'https://picsum.photos/seed/constantinople/600/400',
    phase: 'Phase 7'
  },
  {
    id: '173',
    year: '395 CE',
    title: 'Division of the Roman Empire',
    description: 'The empire formally splits into Western (Latin-speaking) and Eastern (Greek-speaking) halves following the death of Emperor Theodosius I.',
    imageUrl: 'https://picsum.photos/seed/empire_split/600/400',
    phase: 'Phase 7'
  },
  {
    id: '174',
    year: '476 CE',
    title: 'Fall of the Western Roman Empire',
    description: 'The last Western Roman Emperor, Romulus Augustulus, is deposed, marking the traditional end of Antiquity in Western Europe.',
    imageUrl: 'https://picsum.photos/seed/rome_fall/600/400',
    phase: 'Phase 7'
  },
  {
    id: '175',
    year: '529 CE',
    title: 'Justinian\'s Code (Corpus Juris Civilis)',
    description: 'The Byzantine Emperor Justinian codifies Roman Law, preserving and standardizing the legal system for future Western civilization.',
    imageUrl: 'https://picsum.photos/seed/justinian_code/600/400',
    phase: 'Phase 7'
  },
  {
    id: '176',
    year: '570 CE',
    title: 'Birth of the Prophet Muhammad',
    description: 'Traditional date for the birth of the founder of Islam in Mecca, Arabia.',
    imageUrl: 'https://picsum.photos/seed/mecca/600/400',
    phase: 'Phase 7'
  },
  {
    id: '177',
    year: '618 CE',
    title: 'Founding of the Tang Dynasty',
    description: 'The Tang Dynasty begins a new Golden Age in China, marked by vast territorial expansion, political stability, and high cultural output.',
    imageUrl: 'https://picsum.photos/seed/tang_dynasty/600/400',
    phase: 'Phase 7'
  },
  {
    id: '178',
    year: '622 CE',
    title: 'The Hijra',
    description: 'Muhammad and his followers migrate from Mecca to Medina, marking the beginning of the Islamic calendar and the first true Muslim community.',
    imageUrl: 'https://picsum.photos/seed/hijra/600/400',
    phase: 'Phase 7'
  },
  {
    id: '179',
    year: '661 CE',
    title: 'Umayyad Caliphate Established',
    description: 'The first major Islamic empire forms, rapidly expanding its territory into North Africa and the Iberian Peninsula.',
    imageUrl: 'https://picsum.photos/seed/umayyad/600/400',
    phase: 'Phase 7'
  },
  {
    id: '180',
    year: '711 CE',
    title: 'Muslim Conquest of Iberia',
    description: 'Arab and Berber forces cross the Strait of Gibraltar and rapidly conquer most of the Iberian Peninsula (Spain and Portugal).',
    imageUrl: 'https://picsum.photos/seed/iberia_conquest/600/400',
    phase: 'Phase 7'
  },
  {
    id: '181',
    year: '750 CE',
    title: 'Abbasid Caliphate Rises',
    description: 'The Abbasids overthrow the Umayyads, shifting the capital to Baghdad and ushering in the Islamic Golden Age of scholarship and science.',
    imageUrl: 'https://picsum.photos/seed/abbasid/600/400',
    phase: 'Phase 7'
  },
  {
    id: '182',
    year: '793 CE',
    title: 'Viking Raid on Lindisfarne',
    description: 'The first recorded Viking attack on a monastery in England, marking the beginning of the Viking Age in Europe.',
    imageUrl: 'https://picsum.photos/seed/viking_raid/600/400',
    phase: 'Phase 7'
  },
  {
    id: '183',
    year: '800 CE',
    title: 'Charlemagne Crowned Emperor',
    description: 'Frankish King Charlemagne is crowned "Emperor of the Romans" by the Pope, reviving the imperial title in the West.',
    imageUrl: 'https://picsum.photos/seed/charlemagne/600/400',
    phase: 'Phase 7'
  },
  {
    id: '184',
    year: '800 CE',
    title: 'Invention of Gunpowder',
    description: 'Alchemists in Tang China are credited with accidentally creating the earliest form of gunpowder.',
    imageUrl: 'https://picsum.photos/seed/gunpowder/600/400',
    phase: 'Phase 7'
  },
  {
    id: '185',
    year: '960 CE',
    title: 'Founding of the Song Dynasty (China)',
    description: 'Marks a period of immense technological (printing, compass, iron production) and commercial growth in China.',
    imageUrl: 'https://picsum.photos/seed/song_dynasty/600/400',
    phase: 'Phase 7'
  },
  {
    id: '186',
    year: '1054 CE',
    title: 'The Great Schism',
    description: 'The formal split between the Eastern Orthodox Church (Constantinople) and the Roman Catholic Church (Rome).',
    imageUrl: 'https://picsum.photos/seed/great_schism/600/400',
    phase: 'Phase 7'
  },
  {
    id: '187',
    year: '1066 CE',
    title: 'Norman Conquest of England',
    description: 'William the Conqueror defeats the English at the Battle of Hastings, fundamentally changing English language, aristocracy, and political structure.',
    imageUrl: 'https://picsum.photos/seed/norman_conquest/600/400',
    phase: 'Phase 7'
  },
  {
    id: '188',
    year: '1095 CE',
    title: 'First Crusade Called',
    description: 'Pope Urban II calls for Christian knights to reclaim the Holy Land from Muslim control, initiating centuries of religious wars.',
    imageUrl: 'https://picsum.photos/seed/crusades/600/400',
    phase: 'Phase 7'
  },
  {
    id: '189',
    year: '1192 CE',
    title: 'Establishment of the Kamakura Shogunate (Japan)',
    description: 'Marks the beginning of the feudal era in Japan, where military governors (Shoguns) hold the real political power.',
    imageUrl: 'https://picsum.photos/seed/shogunate/600/400',
    phase: 'Phase 7'
  },
  {
    id: '190',
    year: '1206 CE',
    title: 'Genghis Khan Unites the Mongols',
    description: 'Temüjin is proclaimed Genghis Khan, beginning the unprecedented expansion of the Mongol Empire across Eurasia.',
    imageUrl: 'https://picsum.photos/seed/genghis_khan/600/400',
    phase: 'Phase 7'
  },
  {
    id: '191',
    year: '1215 CE',
    title: 'King John Seals the Magna Carta',
    description: 'The English barons force the king to sign the "Great Charter," a foundational document for constitutional law and human rights.',
    imageUrl: 'https://picsum.photos/seed/magna_carta/600/400',
    phase: 'Phase 7'
  },
  {
    id: '192',
    year: '1271 CE',
    title: 'Marco Polo Begins his Journey',
    description: 'The Venetian merchant begins his legendary travels to Asia, highlighting the extensive trade and cultural links established under the Pax Mongolica.',
    imageUrl: 'https://picsum.photos/seed/marco_polo/600/400',
    phase: 'Phase 7'
  },
  {
    id: '193',
    year: '1299 CE',
    title: 'Osman I Establishes the Ottoman Empire',
    description: 'The foundation of one of the world\'s longest-lasting empires, which would eventually replace the Byzantine Empire.',
    imageUrl: 'https://picsum.photos/seed/ottoman_empire/600/400',
    phase: 'Phase 7'
  },
  {
    id: '194',
    year: '1324 CE',
    title: 'Mansa Musa\'s Hajj (Mali)',
    description: 'The Emperor of the Mali Empire makes a pilgrimage to Mecca, showcasing the immense wealth of West African gold and expanding Islamic influence across the Sahara.',
    imageUrl: 'https://picsum.photos/seed/mansa_musa/600/400',
    phase: 'Phase 7'
  },
  {
    id: '195',
    year: '1347 CE',
    title: 'The Black Death Arrives in Europe',
    description: 'The devastating bubonic plague, carried along global trade routes, reaches Europe and begins its catastrophic sweep across Eurasia.',
    imageUrl: 'https://picsum.photos/seed/black_death/600/400',
    phase: 'Phase 7'
  },
  // Phase 8 Marker
  {
    id: 'phase-8-marker',
    year: '1405 CE',
    title: 'The Age of Exploration',
    description: '',
    imageUrl: 'https://picsum.photos/seed/exploration_hero/1600/900',
    phase: 'Phase 8',
    type: 'phase_marker'
  },
  {
    id: '196',
    year: '1405 CE',
    title: 'Yongle Emperor Launches Treasure Voyages',
    description: 'China\'s Ming Dynasty begins the massive naval expeditions led by Zheng He, briefly establishing the largest maritime presence in the world.',
    imageUrl: 'https://picsum.photos/seed/zheng_he/600/400',
    phase: 'Phase 8'
  },
  {
    id: '197',
    year: '1415 CE',
    title: 'Capture of Ceuta (Portugal)',
    description: 'Portugal captures the North African port, marking the beginning of the Age of Exploration and the establishment of European overseas empires.',
    imageUrl: 'https://picsum.photos/seed/ceuta/600/400',
    phase: 'Phase 8'
  },
  {
    id: '198',
    year: '1440 CE',
    title: 'Discovery of the Forgery of the "Donation of Constantine"',
    description: 'Scholar Lorenzo Valla disproves a document central to papal claims of temporal power, marking a triumph of Renaissance textual criticism.',
    imageUrl: 'https://picsum.photos/seed/valla/600/400',
    phase: 'Phase 8'
  },
  {
    id: '199',
    year: '1450 CE',
    title: 'Gutenberg Invents the Printing Press',
    description: 'The development of movable type printing revolutionizes communication, dramatically accelerating the spread of Renaissance, Reformation, and scientific ideas.',
    imageUrl: 'https://picsum.photos/seed/printing_press/600/400',
    phase: 'Phase 8'
  },
  {
    id: '200',
    year: '1453 CE',
    title: 'Fall of Constantinople',
    description: 'The Ottoman Turks conquer the Byzantine capital, ending the Roman Empire\'s last vestige and prompting Greek scholars to flee west, boosting the Renaissance.',
    imageUrl: 'https://picsum.photos/seed/constantinople_fall/600/400',
    phase: 'Phase 8'
  },
  {
    id: '201',
    year: '1478 CE',
    title: 'Establishment of the Spanish Inquisition',
    description: 'Ferdinand II and Isabella I institute the Inquisition to enforce Catholic orthodoxy, leading to the persecution and expulsion of non-Christians.',
    imageUrl: 'https://picsum.photos/seed/inquisition/600/400',
    phase: 'Phase 8'
  },
  {
    id: '202',
    year: '1488 CE',
    title: 'Dias Rounds the Cape of Good Hope',
    description: 'Portuguese explorer Bartolomeu Dias finds a sea route from the Atlantic to the Indian Ocean, opening up direct trade with Asia.',
    imageUrl: 'https://picsum.photos/seed/dias/600/400',
    phase: 'Phase 8'
  },
  {
    id: '203',
    year: '1492 CE',
    title: 'Columbus Reaches the Americas',
    description: 'Christopher Columbus\'s voyage initiates the Columbian Exchange, permanently connecting the Eastern and Western hemispheres, leading to mass colonization.',
    imageUrl: 'https://picsum.photos/seed/columbus/600/400',
    phase: 'Phase 8'
  },
  {
    id: '204',
    year: '1494 CE',
    title: 'Treaty of Tordesillas',
    description: 'Spain and Portugal, brokered by the Pope, divide the non-European world between them for exploration and conquest.',
    imageUrl: 'https://picsum.photos/seed/tordesillas/600/400',
    phase: 'Phase 8'
  },
  {
    id: '205',
    year: '1498 CE',
    title: 'Vasco da Gama Reaches Calicut, India',
    description: 'Portugal secures a direct sea route to Asia, bypassing traditional land-based Silk Roads and challenging existing Muslim/Venetian trade monopolies.',
    imageUrl: 'https://picsum.photos/seed/vasco_da_gama/600/400',
    phase: 'Phase 8'
  },
  {
    id: '206',
    year: '1503 CE',
    title: 'Da Vinci Completes Mona Lisa',
    description: 'The peak of the High Renaissance is defined by masterpieces that integrate mathematics, humanism, and artistic genius.',
    imageUrl: 'https://picsum.photos/seed/mona_lisa/600/400',
    phase: 'Phase 8'
  },
  {
    id: '207',
    year: '1509 CE',
    title: 'Henry VIII Becomes King of England',
    description: 'His reign would be dominated by religious, political, and personal conflicts that permanently alter England\'s relationship with the Catholic Church.',
    imageUrl: 'https://picsum.photos/seed/henry_viii/600/400',
    phase: 'Phase 8'
  },
  {
    id: '208',
    year: '1517 CE',
    title: 'Martin Luther Posts the 95 Theses',
    description: 'Widely considered the start of the Protestant Reformation, challenging the authority of the Pope and the Catholic Church.',
    imageUrl: 'https://picsum.photos/seed/luther/600/400',
    phase: 'Phase 8'
  },
  {
    id: '209',
    year: '1519 CE',
    title: 'Magellan\'s Expedition Begins Circumnavigation',
    description: 'Ferdinand Magellan sets off on the first successful (though he died en route) voyage to sail around the world, proving the Earth\'s spherical nature.',
    imageUrl: 'https://picsum.photos/seed/magellan/600/400',
    phase: 'Phase 8'
  },
  {
    id: '210',
    year: '1521 CE',
    title: 'Cortés Conquers the Aztec Empire',
    description: 'Spanish conquistadors defeat the powerful Aztec Empire (Tenochtitlan), securing Mexico for Spain and accelerating the colonial transfer of wealth and disease.',
    imageUrl: 'https://picsum.photos/seed/cortes/600/400',
    phase: 'Phase 8'
  },
  {
    id: '211',
    year: '1526 CE',
    title: 'Establishment of the Mughal Empire',
    description: 'Babur defeats the Delhi Sultanate, founding a powerful Islamic empire that dominates the Indian subcontinent for over two centuries.',
    imageUrl: 'https://picsum.photos/seed/mughal/600/400',
    phase: 'Phase 8'
  },
  {
    id: '212',
    year: '1533 CE',
    title: 'Pizarro Conquers the Inca Empire',
    description: 'Spanish forces capture and execute Inca Emperor Atahualpa, bringing the vast South American empire under Spanish control.',
    imageUrl: 'https://picsum.photos/seed/pizarro/600/400',
    phase: 'Phase 8'
  },
  {
    id: '213',
    year: '1534 CE',
    title: 'Henry VIII Creates the Church of England',
    description: 'The English Parliament passes the Act of Supremacy, declaring the King, not the Pope, as the supreme head of the church in England.',
    imageUrl: 'https://picsum.photos/seed/church_of_england/600/400',
    phase: 'Phase 8'
  },
  {
    id: '214',
    year: '1540 CE',
    title: 'Founding of the Society of Jesus (Jesuits)',
    description: 'Established by Ignatius of Loyola, the Jesuit order becomes the intellectual and missionary arm of the Catholic Counter-Reformation.',
    imageUrl: 'https://picsum.photos/seed/jesuits/600/400',
    phase: 'Phase 8'
  },
  {
    id: '215',
    year: '1543 CE',
    title: 'Copernicus Publishes On the Revolutions of the Heavenly Spheres',
    description: 'Proposes a heliocentric model of the solar system, marking a critical turning point in the Scientific Revolution.',
    imageUrl: 'https://picsum.photos/seed/copernicus/600/400',
    phase: 'Phase 8'
  },
  {
    id: '216',
    year: '1545 CE',
    title: 'The Council of Trent Begins',
    description: 'This council initiates the Catholic Counter-Reformation, addressing Protestant challenges and defining Catholic doctrine for the next four centuries.',
    imageUrl: 'https://picsum.photos/seed/council_trent/600/400',
    phase: 'Phase 8'
  },
  {
    id: '217',
    year: '1558 CE',
    title: 'Elizabeth I Begins Reign in England',
    description: 'Her 44-year reign establishes Anglicanism, solidifies English power, and begins a period of cultural flourishing (the Elizabethan Era).',
    imageUrl: 'https://picsum.photos/seed/elizabeth_i/600/400',
    phase: 'Phase 8'
  },
  {
    id: '218',
    year: '1588 CE',
    title: 'Defeat of the Spanish Armada',
    description: 'English naval victory over the Spanish fleet marks a major geopolitical shift, signaling the decline of Spanish dominance and the rise of England as a naval power.',
    imageUrl: 'https://picsum.photos/seed/armada/600/400',
    phase: 'Phase 8'
  },
  {
    id: '219',
    year: '1600 CE',
    title: 'The British East India Company is Chartered',
    description: 'The granting of a monopoly to this joint-stock company lays the foundation for British economic and eventual political control in India.',
    imageUrl: 'https://picsum.photos/seed/east_india_company/600/400',
    phase: 'Phase 8'
  },
  {
    id: '220',
    year: '1603 CE',
    title: 'Tokugawa Ieyasu Establishes the Shogunate in Japan',
    description: 'Begins the Edo period, a time of prolonged peace and stability, and eventually implements the sakoku (closed country) policy.',
    imageUrl: 'https://picsum.photos/seed/tokugawa/600/400',
    phase: 'Phase 8'
  },
  {
    id: '221',
    year: '1610 CE',
    title: 'Galileo Publishes Sidereus Nuncius',
    description: 'Using his improved telescope, Galileo publishes groundbreaking astronomical observations, supporting the Copernican model and furthering the Scientific Revolution.',
    imageUrl: 'https://picsum.photos/seed/galileo/600/400',
    phase: 'Phase 8'
  },
  {
    id: '222',
    year: '1618 CE',
    title: 'Start of the Thirty Years\' War',
    description: 'A series of devastating conflicts in Central Europe, primarily over religion and dynastic power, reshaping the political map of the continent.',
    imageUrl: 'https://picsum.photos/seed/thirty_years_war/600/400',
    phase: 'Phase 8'
  },
  {
    id: '223',
    year: '1644 CE',
    title: 'The Manchu People Establish the Qing Dynasty in China',
    description: 'Following the collapse of the Ming Dynasty, the Qing Dynasty begins a long period of rule, becoming the last imperial dynasty of China.',
    imageUrl: 'https://picsum.photos/seed/qing/600/400',
    phase: 'Phase 8'
  },
  {
    id: '224',
    year: '1648 CE',
    title: 'Peace of Westphalia',
    description: 'The series of treaties ends the Thirty Years\' War, establishing the principle of state sovereignty and creating the modern system of nation-states.',
    imageUrl: 'https://picsum.photos/seed/westphalia/600/400',
    phase: 'Phase 8'
  },
  {
    id: '225',
    year: '1687 CE',
    title: 'Newton Publishes Philosophiæ Naturalis Principia Mathematica',
    description: 'Isaac Newton lays out the laws of motion and universal gravitation, establishing the foundation for classical mechanics and defining the Scientific Revolution.',
    imageUrl: 'https://picsum.photos/seed/newton/600/400',
    phase: 'Phase 8'
  },
  {
    id: '226',
    year: '1750 CE',
    title: 'Peak of the Enlightenment Era',
    description: 'The mid-18th century sees the height of intellectual movements promoting reason, individualism, and skepticism, laying the ideological groundwork for the American and French Revolutions.',
    imageUrl: 'https://picsum.photos/seed/enlightenment/600/400',
    phase: 'Phase 8'
  },
  // Phase 9 Marker
  {
    id: 'phase-9-marker',
    year: '1765 CE',
    title: 'The Age of Revolutions',
    description: '',
    imageUrl: 'https://picsum.photos/seed/revolutions_hero/1600/900',
    phase: 'Phase 9',
    type: 'phase_marker'
  },
  {
    id: '227',
    year: '1765 CE',
    title: 'James Watt\'s Improved Steam Engine',
    description: 'Watt perfects the steam engine, turning a simple machine into an efficient power source that drives the First Industrial Revolution, particularly in factories and mines.',
    imageUrl: 'https://picsum.photos/seed/steam_engine/600/400',
    phase: 'Phase 9'
  },
  {
    id: '228',
    year: '1776 CE',
    title: 'American Declaration of Independence',
    description: 'The American colonies declare their separation from Great Britain, proclaiming ideals of popular sovereignty, liberty, and unalienable rights.',
    imageUrl: 'https://picsum.photos/seed/independence/600/400',
    phase: 'Phase 9'
  },
  {
    id: '229',
    year: '1783 CE',
    title: 'Treaty of Paris (American Revolution Ends)',
    description: 'Great Britain formally recognizes the independence of the United States, cementing the success of the first major democratic revolution.',
    imageUrl: 'https://picsum.photos/seed/treaty_paris/600/400',
    phase: 'Phase 9'
  },
  {
    id: '230',
    year: '1789 CE',
    title: 'French Revolution Begins (Storming of the Bastille)',
    description: 'A period of radical social and political upheaval begins in France, overthrowing the Bourbon monarchy and challenging the idea of absolute rule across Europe.',
    imageUrl: 'https://picsum.photos/seed/bastille/600/400',
    phase: 'Phase 9'
  },
  {
    id: '231',
    year: '1789 CE',
    title: 'Declaration of the Rights of Man and of the Citizen',
    description: 'The French National Assembly issues this document, establishing universal rights for all men and defining citizenship, heavily influencing future democracies.',
    imageUrl: 'https://picsum.photos/seed/rights_of_man/600/400',
    phase: 'Phase 9'
  },
  {
    id: '232',
    year: '1793 CE',
    title: 'Eli Whitney Invents the Cotton Gin',
    description: 'This machine rapidly separates cotton fiber from seed, making cotton production vastly more profitable and tragically accelerating the expansion of chattel slavery in the U.S. South.',
    imageUrl: 'https://picsum.photos/seed/cotton_gin/600/400',
    phase: 'Phase 9'
  },
  {
    id: '233',
    year: '1796 CE',
    title: 'Edward Jenner Develops Smallpox Vaccine',
    description: 'Jenner pioneers the concept of vaccination, a major breakthrough in medicine that eventually leads to the global eradication of the deadly disease.',
    imageUrl: 'https://picsum.photos/seed/vaccine/600/400',
    phase: 'Phase 9'
  },
  {
    id: '234',
    year: '1799 CE',
    title: 'Coup of 18 Brumaire (France)',
    description: 'Napoleon Bonaparte overthrows the Directory and establishes the Consulate, signaling the end of the revolutionary phase and the beginning of his authoritarian rule.',
    imageUrl: 'https://picsum.photos/seed/napoleon/600/400',
    phase: 'Phase 9'
  },
  {
    id: '235',
    year: '1803 CE',
    title: 'Louisiana Purchase',
    description: 'The United States acquires vast territory from France, instantly doubling the size of the nation and accelerating its westward expansion.',
    imageUrl: 'https://picsum.photos/seed/louisiana_purchase/600/400',
    phase: 'Phase 9'
  },
  {
    id: '236',
    year: '1804 CE',
    title: 'Haitian Independence',
    description: 'Haiti defeats French forces, becoming the world\'s first free black republic and the only nation established by a successful slave revolt.',
    imageUrl: 'https://picsum.photos/seed/haiti/600/400',
    phase: 'Phase 9'
  },
  {
    id: '237',
    year: '1804 CE',
    title: 'Napoleon Crowns Himself Emperor',
    description: 'Napoleon abolishes the French Republic and declares himself Emperor, ending France\'s revolutionary experiment and leading to further European wars.',
    imageUrl: 'https://picsum.photos/seed/napoleon_crown/600/400',
    phase: 'Phase 9'
  },
  {
    id: '238',
    year: '1807 CE',
    title: 'Britain Abolishes the Slave Trade',
    description: 'The British Parliament outlaws the transportation of enslaved people across the Atlantic (though slavery itself would continue in the colonies until 1833).',
    imageUrl: 'https://picsum.photos/seed/abolition/600/400',
    phase: 'Phase 9'
  },
  {
    id: '239',
    year: '1810 CE',
    title: 'Latin American Wars of Independence Begin',
    description: 'Revolts begin across Spanish colonies, led by figures like Simón Bolívar, fighting for self-governance and an end to Spanish imperial rule.',
    imageUrl: 'https://picsum.photos/seed/bolivar/600/400',
    phase: 'Phase 9'
  },
  {
    id: '240',
    year: '1815 CE',
    title: 'Battle of Waterloo',
    description: 'Napoleon is decisively defeated by a coalition force, marking the final end of his rule and the conclusion of the Napoleonic Wars.',
    imageUrl: 'https://picsum.photos/seed/waterloo/600/400',
    phase: 'Phase 9'
  },
  {
    id: '241',
    year: '1815 CE',
    title: 'Congress of Vienna Convenes',
    description: 'European powers meet to redraw the continental map, restore monarchies, and establish a Balance of Power system to prevent future revolutions and wars.',
    imageUrl: 'https://picsum.photos/seed/congress_vienna/600/400',
    phase: 'Phase 9'
  },
  {
    id: '242',
    year: '1825 CE',
    title: 'First Public Steam Railway',
    description: 'The Stockton and Darlington Railway opens in England, marking the true beginning of the Railway Age and revolutionizing mass transport of goods and people.',
    imageUrl: 'https://picsum.photos/seed/steam_train/600/400',
    phase: 'Phase 9'
  },
  {
    id: '243',
    year: '1833 CE',
    title: 'Slavery Abolished in the British Empire',
    description: 'The British Parliament passes the Slavery Abolition Act, freeing approximately 800,000 enslaved people throughout the empire.',
    imageUrl: 'https://picsum.photos/seed/slavery_abolition/600/400',
    phase: 'Phase 9'
  },
  {
    id: '244',
    year: '1837 CE',
    title: 'Samuel Morse Invents the Telegraph',
    description: 'The invention of the electric telegraph and Morse code creates the first instantaneous global communication system, dramatically shrinking the world.',
    imageUrl: 'https://picsum.photos/seed/telegraph/600/400',
    phase: 'Phase 9'
  },
  {
    id: '245',
    year: '1839 CE',
    title: 'First Opium War Begins',
    description: 'Great Britain wages war against Qing China over trade disputes, leading to China\'s defeat and the start of its "Century of Humiliation" under foreign influence.',
    imageUrl: 'https://picsum.photos/seed/opium_war/600/400',
    phase: 'Phase 9'
  },
  {
    id: '246',
    year: '1848 CE',
    title: '"Spring of Nations" Revolutions',
    description: 'Waves of political revolt sweep across Europe (France, Germany, Italy, Austrian Empire) advocating for liberal reforms, nationalism, and democracy.',
    imageUrl: 'https://picsum.photos/seed/spring_nations/600/400',
    phase: 'Phase 9'
  },
  {
    id: '247',
    year: '1848 CE',
    title: 'Marx and Engels Publish The Communist Manifesto',
    description: 'This pamphlet outlines the principles of communism, arguing for a classless society and profoundly influencing future socialist movements globally.',
    imageUrl: 'https://picsum.photos/seed/manifesto/600/400',
    phase: 'Phase 9'
  },
  {
    id: '248',
    year: '1853 CE',
    title: 'Commodore Perry Opens Japan',
    description: 'U.S. Commodore Matthew Perry forces Japan to open its ports to trade, ending over 200 years of self-imposed isolation (sakoku).',
    imageUrl: 'https://picsum.photos/seed/perry_japan/600/400',
    phase: 'Phase 9'
  },
  {
    id: '249',
    year: '1859 CE',
    title: 'Darwin Publishes On the Origin of Species',
    description: 'Charles Darwin introduces the theory of evolution by natural selection, fundamentally challenging traditional scientific and religious views of life\'s creation.',
    imageUrl: 'https://picsum.photos/seed/darwin/600/400',
    phase: 'Phase 9'
  },
  {
    id: '250',
    year: '1861 CE',
    title: 'Abolition of Serfdom in Russia',
    description: 'Czar Alexander II frees Russia\'s serfs, marking a major social reform and a step toward modernization, though conditions for peasants remained poor.',
    imageUrl: 'https://picsum.photos/seed/serfdom/600/400',
    phase: 'Phase 9'
  },
  {
    id: '251',
    year: '1861 CE',
    title: 'American Civil War Begins',
    description: 'Conflict erupts between the Union (North) and the Confederacy (South) over the issues of slavery, states\' rights, and national unity.',
    imageUrl: 'https://picsum.photos/seed/civil_war/600/400',
    phase: 'Phase 9'
  },
  {
    id: '252',
    year: '1868 CE',
    title: 'Meiji Restoration (Japan)',
    description: 'The Emperor is restored to power, leading to a rapid, state-sponsored program of industrialization and Westernization that transforms Japan into a world power.',
    imageUrl: 'https://picsum.photos/seed/meiji/600/400',
    phase: 'Phase 9'
  },
  {
    id: '253',
    year: '1869 CE',
    title: 'Suez Canal Opens',
    description: 'The man-made canal connecting the Mediterranean Sea to the Red Sea opens, drastically reducing the travel time for trade between Europe and Asia.',
    imageUrl: 'https://picsum.photos/seed/suez_canal/600/400',
    phase: 'Phase 9'
  },
  {
    id: '254',
    year: '1871 CE',
    title: 'Unification of Germany',
    description: 'Otto von Bismarck\'s successful wars lead to the creation of a powerful, unified German Empire, fundamentally altering the balance of power in Europe.',
    imageUrl: 'https://picsum.photos/seed/germany_unification/600/400',
    phase: 'Phase 9'
  },
  {
    id: '255',
    year: '1884 CE',
    title: 'Berlin Conference (Scramble for Africa)',
    description: 'European powers meet in Berlin to formally partition the continent of Africa among themselves, initiating a rapid period of colonization.',
    imageUrl: 'https://picsum.photos/seed/berlin_conference/600/400',
    phase: 'Phase 9'
  },
  {
    id: '256',
    year: '1914 CE',
    title: 'Assassination of Archduke Franz Ferdinand',
    description: 'The assassination in Sarajevo triggers a complex chain of alliances and declarations of war, plunging Europe into World War I.',
    imageUrl: 'https://picsum.photos/seed/franz_ferdinand/600/400',
    phase: 'Phase 9'
  }
];

export const AI_MODEL_NAME = 'gemini-2.5-flash';