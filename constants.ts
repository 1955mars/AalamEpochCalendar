
import { TimelineEvent } from './types';

// Helper to generate consistent, relevant AI images on the fly
const generateImage = (prompt: string, type: 'phase_marker' | 'event' = 'event', context: string = ''): string => {
  const width = type === 'phase_marker' ? 1600 : 600;
  const height = type === 'phase_marker' ? 900 : 400;
  const style = 'detailed realistic cinematic';
  
  // Encode the prompt safely
  const encodedPrompt = encodeURIComponent(`${prompt} ${context} ${style}`);
  return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&nologo=true&seed=${Math.floor(Math.random() * 100)}`; 
  // Note: Seed added to ensure consistency across renders if the URL stays static, 
  // though Pollinations might ignore it in the URL param, the unique URL string helps caching.
  // Actually, removing random seed from the static export to ensure SSR consistency and caching.
};

// We use a fixed seed concept by just relying on the text. 
const getImg = (title: string, context: string, isMarker: boolean = false) => {
    const width = isMarker ? 1600 : 600;
    const height = isMarker ? 900 : 400;
    // Append a consistent seed string to force the API to give a stable image for "The Big Bang" vs "The Big Bang "
    const safeTitle = encodeURIComponent(`${title} ${context} realistic cinematic high quality`);
    return `https://image.pollinations.ai/prompt/${safeTitle}?width=${width}&height=${height}&nologo=true`;
};

export const INITIAL_EVENTS: TimelineEvent[] = [
  // --- PHASE 1: Cosmic & Primordial Earth ---
  {
    id: 'phase-1-marker',
    year: '13.8 Billion Years Ago',
    title: 'Cosmic & Primordial Earth',
    description: '',
    imageUrl: getImg('Cosmic and Primordial Earth', 'space galaxy universe', true),
    phase: 'Phase 1',
    type: 'phase_marker'
  },
  {
    id: '1',
    year: '13.8 Billion Years Ago',
    title: 'The Big Bang',
    description: 'The origin of the universe, representing the rapid expansion of space, time, matter, and energy from an extremely hot, dense state.',
    imageUrl: getImg('The Big Bang explosion', 'space cosmic'),
    phase: 'Phase 1'
  },
  {
    id: '2',
    year: '13.78 Billion Years Ago',
    title: 'Formation of First Subatomic Particles',
    description: 'Quarks and leptons condense out of the super-hot early plasma, eventually leading to protons and neutrons.',
    imageUrl: getImg('Subatomic particles quarks leptons', 'physics abstract science'),
    phase: 'Phase 1'
  },
  {
    id: '3',
    year: '13.77 Billion Years Ago',
    title: 'Cosmic Microwave Background',
    description: 'About 380,000 years after the Big Bang, the universe cools enough for the first stable atoms (mostly hydrogen and helium) to form, releasing light.',
    imageUrl: getImg('Cosmic Microwave Background radiation', 'space astronomy'),
    phase: 'Phase 1'
  },
  {
    id: '4',
    year: '13.5 Billion Years Ago',
    title: 'The Dark Ages End',
    description: 'The first stars, massive and extremely luminous (Population III stars), ignite, flooding the universe with light and heavy elements.',
    imageUrl: 'https://image.pollinations.ai/prompt/First%20stars%20igniting%20space%20dark%20ages%20realistic?width=600&height=400&nologo=true',
    phase: 'Phase 1'
  },
  {
    id: '5',
    year: '13.4 Billion Years Ago',
    title: 'The First Galaxies',
    description: 'Gravity causes vast clouds of gas and the earliest stars to coalesce, forming the first small, irregular protogalaxies.',
    imageUrl: getImg('First galaxies forming', 'space nebula'),
    phase: 'Phase 1'
  },
  {
    id: '6',
    year: '13.0 Billion Years Ago',
    title: 'Galactic Mergers',
    description: 'Protogalaxies begin to collide and merge, slowly building the massive spiral and elliptical galaxies we see today.',
    imageUrl: getImg('Galaxies colliding merging', 'space astronomy'),
    phase: 'Phase 1'
  },
  {
    id: '7',
    year: '11.0 Billion Years Ago',
    title: 'The Milky Way Forms',
    description: 'The primordial hydrogen/helium cloud that would become our home galaxy collapses and begins spinning, shaping the characteristic disk.',
    imageUrl: getImg('Milky Way galaxy forming', 'space spiral galaxy'),
    phase: 'Phase 1'
  },
  {
    id: '8',
    year: '8.8 Billion Years Ago',
    title: 'Milky Way Disk Complete',
    description: 'The main spiral structure of the Milky Way, including its disk and arms, becomes fully formed and stabilized.',
    imageUrl: getImg('Milky Way galaxy spiral disk', 'space stars'),
    phase: 'Phase 1'
  },
  {
    id: '9',
    year: '4.6 Billion Years Ago',
    title: 'Formation of the Solar System',
    description: 'A rotating cloud of interstellar dust and gas (the solar nebula) collapses under gravity, forming the Sun and the protoplanetary disk.',
    imageUrl: getImg('Solar system formation protoplanetary disk', 'space sun'),
    phase: 'Phase 1'
  },
  {
    id: '10',
    year: '4.57 Billion Years Ago',
    title: 'Planetary Accretion Begins',
    description: 'Dust particles in the disk collide and stick together to form planetesimals, the building blocks of the terrestrial planets.',
    imageUrl: getImg('Planetary accretion planetesimals', 'space rocks'),
    phase: 'Phase 1'
  },
  {
    id: '11',
    year: '4.54 Billion Years Ago',
    title: "Earth's Core Formation",
    description: 'Differentiation occurs: dense iron and nickel sink to the center of the molten Earth, forming the inner and outer cores.',
    imageUrl: getImg('Earth core formation molten planet', 'geology space'),
    phase: 'Phase 1'
  },
  {
    id: '12',
    year: '4.53 Billion Years Ago',
    title: 'The Moon-Forming Impact',
    description: 'The leading scientific theory suggests a Mars-sized object named Theia collides with the early Earth, ejecting material that coalesces to form the Moon.',
    imageUrl: getImg('Theia impacting Earth moon formation', 'space collision'),
    phase: 'Phase 1'
  },
  {
    id: '13',
    year: '4.5 Billion Years Ago',
    title: 'Beginning of the Hadean Eon',
    description: "The earliest, hottest, and most volatile geological eon begins; Earth's surface is molten, undergoing heavy bombardment.",
    imageUrl: getImg('Hadean Eon molten earth lava', 'volcanic landscape'),
    phase: 'Phase 1'
  },
  {
    id: '14',
    year: '4.4 Billion Years Ago',
    title: 'Oldest Known Earth Material',
    description: 'Discovery of zircon crystals in Western Australia, suggesting that solid continental crust and liquid water may have existed earlier than previously thought.',
    imageUrl: getImg('Zircon crystal microscope', 'geology mineral'),
    phase: 'Phase 1'
  },
  {
    id: '15',
    year: '4.1 Billion Years Ago',
    title: 'Late Heavy Bombardment (LHB)',
    description: 'A theorized period when a disproportionately large number of asteroids and comets impacted the inner planets, potentially delivering water and organic materials.',
    imageUrl: getImg('Asteroid bombardment earth surface', 'space impact'),
    phase: 'Phase 1'
  },
  {
    id: '16',
    year: '4.0 Billion Years Ago',
    title: 'End of the Hadean Eon',
    description: 'Marks the point at which the first continental crust rocks are preserved in the geological record, signaling the beginning of the Archean.',
    imageUrl: getImg('Archean landscape cooling earth', 'geology prehistoric'),
    phase: 'Phase 1'
  },
  {
    id: '17',
    year: '3.9 Billion Years Ago',
    title: 'Formation of the First Continents',
    description: 'Lighter, silicic rocks float on the denser mantle, forming small, unstable protocontinents that are highly volcanic.',
    imageUrl: getImg('First continents forming volcano', 'geology landscape'),
    phase: 'Phase 1'
  },
  {
    id: '18',
    year: '3.8 Billion Years Ago',
    title: 'First Evidence of Life',
    description: 'Indirect chemical evidence (carbon isotopic signatures) in ancient rocks suggests the presence of the earliest, single-celled life forms (prokaryotes).',
    imageUrl: getImg('Microscopic prokaryotes first life', 'biology science'),
    phase: 'Phase 1'
  },
  {
    id: '19',
    year: '3.5 Billion Years Ago',
    title: 'Oldest Microfossils (Stromatolites)',
    description: 'Direct fossil evidence appears in the form of stromatolites, layered mounds created by sheets of early cyanobacteria.',
    imageUrl: getImg('Stromatolites ancient ocean', 'prehistoric biology'),
    phase: 'Phase 1'
  },
  {
    id: '20',
    year: '3.4 Billion Years Ago',
    title: 'Anoxygenic Photosynthesis',
    description: 'Early microbes begin to use light energy to synthesize food, but initially without producing free oxygen.',
    imageUrl: getImg('Early microbes photosynthesis underwater', 'biology prehistoric'),
    phase: 'Phase 1'
  },
  {
    id: '21',
    year: '3.0 Billion Years Ago',
    title: 'Stabilization of Continental Crust',
    description: "The scattered protocontinents begin to coalesce into the first stable cratons, forming the ancient cores of today's continents.",
    imageUrl: getImg('Continental crust cratons landscape', 'geology earth'),
    phase: 'Phase 1'
  },
  {
    id: '22',
    year: '2.5 Billion Years Ago',
    title: 'Beginning of the Proterozoic Eon',
    description: 'The second phase of the Precambrian starts, marked by the rapid rise of atmospheric oxygen and the assembly of supercontinents.',
    imageUrl: getImg('Proterozoic earth landscape oxygen', 'prehistoric earth'),
    phase: 'Phase 1'
  },
  {
    id: '23',
    year: '2.4 Billion Years Ago',
    title: 'The Great Oxidation Event (GOE)',
    description: "Oxygen-producing cyanobacteria proliferate, causing atmospheric oxygen levels to rise sharply, resulting in Earth's first ice age (Huronian Glaciation).",
    imageUrl: getImg('Great Oxidation Event cyanobacteria', 'prehistoric ocean'),
    phase: 'Phase 1'
  },
  {
    id: '24',
    year: '2.3 Billion Years Ago',
    title: 'Huronian Glaciation',
    description: 'The first and longest ice age, possibly triggered by the GOE which removed atmospheric methane (a strong greenhouse gas).',
    imageUrl: getImg('Huronian Glaciation snowball earth', 'ice age landscape'),
    phase: 'Phase 1'
  },
  {
    id: '25',
    year: '2.0 Billion Years Ago',
    title: 'Banded Iron Formations (BIFs) Peak',
    description: 'Rust-colored sedimentary rock layers form as rising ocean oxygen reacts with dissolved iron, clearing the way for free oxygen accumulation.',
    imageUrl: getImg('Banded Iron Formations rock layers', 'geology'),
    phase: 'Phase 1'
  },
  {
    id: '26',
    year: '1.8 Billion Years Ago',
    title: 'Oldest Eukaryote Fossils',
    description: 'The first fossils of complex cells (with a nucleus and organelles) appear, representing a massive leap toward multicellular life.',
    imageUrl: getImg('Eukaryote cell microscopic', 'biology science'),
    phase: 'Phase 1'
  },
  {
    id: '27',
    year: '1.2 Billion Years Ago',
    title: 'The Invention of Sexual Reproduction',
    description: 'Eukaryotes develop the ability to share genetic material, greatly accelerating the pace of evolution and increasing genetic diversity.',
    imageUrl: getImg('Microscopic cells reproduction', 'biology art'),
    phase: 'Phase 1'
  },
  {
    id: '28',
    year: '1.0 Billion Years Ago',
    title: 'Supercontinent Rodinia Forms',
    description: "The first well-documented supercontinent assembles, containing most of Earth's landmass, disrupting ocean circulation and climate.",
    imageUrl: getImg('Supercontinent Rodinia map earth', 'geology space view'),
    phase: 'Phase 1'
  },
  {
    id: '29',
    year: '850 Million Years Ago',
    title: 'Rodinia Begins to Break Up',
    description: 'Rifting begins in Rodinia, triggering massive volcanic activity and initiating cycles of extreme global glaciation.',
    imageUrl: getImg('Rodinia breaking up volcano', 'prehistoric earth'),
    phase: 'Phase 1'
  },
  {
    id: '30',
    year: '720 Million Years Ago',
    title: '"Snowball Earth" Glaciation (Cryogenian)',
    description: 'Massive global ice events (Sturtian and Marinoan) possibly cover the planet from pole to pole, only to be ended by extreme volcanism.',
    imageUrl: getImg('Snowball Earth planet ice', 'space view'),
    phase: 'Phase 1'
  },
  {
    id: '31',
    year: '635 Million Years Ago',
    title: 'The Ediacaran Biota',
    description: 'Following the Snowball Earth periods, the first large, complex, soft-bodied multicellular organisms appear, preceding the Cambrian Explosion.',
    imageUrl: getImg('Ediacaran biota sea life', 'prehistoric underwater'),
    phase: 'Phase 1'
  },

  // --- PHASE 2: The Age of Ancient Life ---
  {
    id: 'phase-2-marker',
    year: '541 Million Years Ago',
    title: 'The Age of Ancient Life',
    description: '',
    imageUrl: getImg('Ancient Life Prehistoric ocean landscape', 'Cambrian', true),
    phase: 'Phase 2',
    type: 'phase_marker'
  },
  {
    id: 'p2-1',
    year: '541 Million Years Ago',
    title: 'The Cambrian Explosion',
    description: 'Life diversifies rapidly; most major animal body plans appear in the fossil record, ending the "Boring Billion" years.',
    imageUrl: getImg('Cambrian Explosion ocean life', 'prehistoric underwater'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-2',
    year: '530 Million Years Ago',
    title: 'Earliest Vertebrates',
    description: 'The first ancestors of all backboned animals (fish, amphibians, humans) appear, exemplified by Myllokunmingia.',
    imageUrl: getImg('Myllokunmingia early vertebrate fish', 'prehistoric underwater'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-3',
    year: '521 Million Years Ago',
    title: 'Rise of the Trilobites',
    description: 'Trilobites develop sophisticated crystal eyes and hard exoskeletons, becoming the dominant life form of the ocean floor.',
    imageUrl: getImg('Trilobites ocean floor', 'prehistoric fossil'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-4',
    year: '508 Million Years Ago',
    title: 'The Burgess Shale Biota',
    description: 'A burst of bizarre evolutionary experiments, including the five-eyed Opabinia and the apex predator Anomalocaris.',
    imageUrl: getImg('Anomalocaris Burgess Shale', 'prehistoric creature'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-5',
    year: '485 Million Years Ago',
    title: 'The Great Ordovician Biodiversity',
    description: 'Life expands further; the first coral reefs form, and cephalopods (ancestors of squid/octopus) become top predators.',
    imageUrl: getImg('Ordovician sea life cephalopods', 'prehistoric underwater'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-6',
    year: '470 Million Years Ago',
    title: 'Plants Colonize Land',
    description: 'Primitive mosses and liverworts leave the water, turning the barren, rocky continents green for the first time.',
    imageUrl: getImg('Primitive land plants moss liverworts', 'prehistoric landscape'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-7',
    year: '444 Million Years Ago',
    title: 'Ordovician-Silurian Extinction',
    description: 'A severe ice age causes a massive drop in sea levels, wiping out 85% of marine species in the first great mass extinction.',
    imageUrl: getImg('Ordovician extinction ice age', 'prehistoric landscape'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-8',
    year: '430 Million Years Ago',
    title: 'Life Recovers (The Silurian)',
    description: 'Seas warm again; the first jawed fish appear, and scorpions (Eurypterids) grow to massive sizes.',
    imageUrl: getImg('Silurian eurypterids sea scorpion', 'prehistoric underwater'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-9',
    year: '420 Million Years Ago',
    title: 'First Breath on Land',
    description: 'Arthropods (ancestors of spiders and millipedes) become the first animals to walk on dry land and breathe air.',
    imageUrl: getImg('First arthropods on land', 'prehistoric nature'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-10',
    year: '400 Million Years Ago',
    title: 'The Devonian "Age of Fish"',
    description: 'Armored fish (Placoderms) like Dunkleosteus dominate the oceans with bone-crushing jaws.',
    imageUrl: getImg('Dunkleosteus armored fish', 'prehistoric underwater'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-11',
    year: '385 Million Years Ago',
    title: 'The First Forests',
    description: 'Plants evolve wood and leaves (Archaeopteris), creating the first tall forests and drastically altering the atmosphere.',
    imageUrl: getImg('Archaeopteris ancient forest', 'prehistoric landscape'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-12',
    year: '375 Million Years Ago',
    title: 'Tiktaalik & The Transition',
    description: 'Lobe-finned fish develop wrist-like bones, allowing them to push up in shallow water—the precursor to walking.',
    imageUrl: getImg('Tiktaalik fish land transition', 'prehistoric nature'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-13',
    year: '365 Million Years Ago',
    title: 'First Amphibians',
    description: 'Vertebrates like Acanthostega finally haul themselves onto land, though they must return to water to reproduce.',
    imageUrl: getImg('Acanthostega ancient amphibian', 'prehistoric swamp'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-14',
    year: '359 Million Years Ago',
    title: 'Late Devonian Extinction',
    description: 'A mysterious extinction event, possibly caused by ocean anoxia from nutrient runoff, resets the evolutionary clock.',
    imageUrl: getImg('Devonian extinction dead ocean', 'prehistoric landscape'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-15',
    year: '320 Million Years Ago',
    title: 'Carboniferous Coal Swamps',
    description: 'Oxygen levels peak (35%); giant insects (dragonflies with 2ft wingspans) and massive millipedes rule the humid swamps.',
    imageUrl: getImg('Carboniferous swamp giant dragonfly', 'prehistoric forest'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-16',
    year: '312 Million Years Ago',
    title: 'The Amniotic Egg',
    description: 'Reptiles evolve the hard-shelled egg, breaking the bond with water and allowing life to conquer the interior of continents.',
    imageUrl: getImg('First reptile egg land', 'prehistoric nature'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-17',
    year: '299 Million Years Ago',
    title: 'Rise of the Synapsids',
    description: 'Before dinosaurs, mammal-like reptiles (like the sail-backed Dimetrodon) become the apex predators on land.',
    imageUrl: getImg('Dimetrodon synapsid', 'prehistoric animal'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-18',
    year: '280 Million Years Ago',
    title: 'Supercontinent Pangaea',
    description: "Earth's landmasses smash together to form a single supercontinent, creating vast, dry interior deserts.",
    imageUrl: getImg('Pangaea supercontinent map', 'geology space view'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-19',
    year: '252 Million Years Ago',
    title: 'The Great Dying',
    description: 'The Permian-Triassic Extinction (volcanic eruptions in Siberia) kills 96% of marine life; the closest life comes to total erasure.',
    imageUrl: getImg('Great Dying Permian extinction volcano', 'prehistoric apocalypse'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-20',
    year: '240 Million Years Ago',
    title: 'The Triassic Recovery',
    description: 'Life slowly rebounds; the first marine reptiles (Ichthyosaurs) take to the seas, resembling dolphins.',
    imageUrl: getImg('Ichthyosaur marine reptile', 'prehistoric underwater'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-21',
    year: '233 Million Years Ago',
    title: 'Dawn of the Dinosaurs',
    description: 'Small, bipedal dinosaurs like Eoraptor appear, initially overshadowed by larger crocodilian relatives.',
    imageUrl: getImg('Eoraptor early dinosaur', 'prehistoric nature'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-22',
    year: '201 Million Years Ago',
    title: 'Triassic-Jurassic Extinction',
    description: 'Volcanic activity splits Pangaea; the competition is wiped out, clearing the stage for Dinosaur dominance.',
    imageUrl: getImg('Triassic Jurassic extinction volcano', 'prehistoric landscape'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-23',
    year: '155 Million Years Ago',
    title: 'Age of Giants (Jurassic)',
    description: 'Dinosaurs reach their peak size; long-necked Sauropods (Brachiosaurus) and plate-backed Stegosaurus roam the earth.',
    imageUrl: getImg('Brachiosaurus Stegosaurus Jurassic', 'prehistoric dinosaur'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-24',
    year: '150 Million Years Ago',
    title: 'The First Birds',
    description: 'Archaeopteris bridges the gap between reptile and bird, developing feathers for flight while keeping its teeth.',
    imageUrl: getImg('Archaeopteryx first bird dinosaur', 'prehistoric nature'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-25',
    year: '125 Million Years Ago',
    title: 'The Flower Revolution',
    description: 'Angiosperms (flowering plants) appear; their partnership with insects transforms the world from green/brown to colorful.',
    imageUrl: getImg('First flowering plants dinosaur era', 'prehistoric nature'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-26',
    year: '90 Million Years Ago',
    title: 'Monsters of the Deep',
    description: 'The Cretaceous Interior Seaway is ruled by massive marine reptiles like Mosasaurus and giant turtles.',
    imageUrl: getImg('Mosasaurus underwater', 'prehistoric ocean'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-27',
    year: '68 Million Years Ago',
    title: 'The Tyrant King',
    description: 'The evolution of Tyrannosaurus Rex and Triceratops; the most famous dinosaurs walk the earth in its final days.',
    imageUrl: getImg('Tyrannosaurus Rex Triceratops', 'prehistoric dinosaur'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-28',
    year: '66 Million Years Ago',
    title: 'The Sky Falls (Impact)',
    description: 'A 10km wide asteroid strikes the Yucatán Peninsula (Chicxulub), releasing the energy of billions of atomic bombs.',
    imageUrl: getImg('Asteroid impact dinosaur extinction', 'space collision'),
    phase: 'Phase 2'
  },
  {
    id: 'p2-29',
    year: '66 Million Years Ago ',
    title: 'The End of an Era',
    description: 'The K-Pg Extinction event. Nuclear winter, firestorms, and the death of 75% of species, including all non-avian dinosaurs.',
    imageUrl: getImg('K-Pg extinction aftermath', 'prehistoric apocalyptic'),
    phase: 'Phase 2'
  },

  // --- PHASE 3: Hominid Evolution ---
  {
    id: 'phase-3-marker',
    year: '65 Million Years Ago',
    title: 'Hominid Evolution',
    description: '',
    imageUrl: getImg('Human Evolution Hominids', 'prehistoric ancestors', true),
    phase: 'Phase 3',
    type: 'phase_marker'
  },
  {
    id: '41',
    year: '65 Million Years Ago',
    title: 'The Paleogene Recovery',
    description: 'Following the K-Pg extinction, surviving mammals rapidly diversify, filling ecological niches left vacant by the non-avian dinosaurs.',
    imageUrl: getImg('Paleogene mammals evolving', 'prehistoric nature'),
    phase: 'Phase 3'
  },
  {
    id: '42',
    year: '60 Million Years Ago',
    title: 'Rise of the Primates',
    description: 'Early primates evolve, characterized by traits like grasping hands, forward-facing eyes, and larger brains, setting the stage for human evolution.',
    imageUrl: getImg('Early primates lemur-like', 'prehistoric nature'),
    phase: 'Phase 3'
  },
  {
    id: '45',
    year: '35 Million Years Ago',
    title: 'Oligocene Cooling',
    description: 'Global climate cools, leading to the expansion of grasslands and a reduction in forests, which eventually drives primates to adapt to open environments.',
    imageUrl: getImg('Oligocene landscape grasslands', 'prehistoric nature'),
    phase: 'Phase 3'
  },
  {
    id: '46',
    year: '25 Million Years Ago',
    title: 'Apes and Old World Monkeys Diverge',
    description: 'The evolutionary lineage leading to modern humans separates from the lineage leading to Old World monkeys in Africa.',
    imageUrl: getImg('Early apes monkeys primates', 'prehistoric jungle'),
    phase: 'Phase 3'
  },
  {
    id: '47',
    year: '7 Million Years Ago',
    title: 'First Hominin Divergence',
    description: 'The lineage of hominins (bipedal apes) separates from the lineage leading to modern chimpanzees; Sahelanthropus tchadensis may represent one of the earliest hominins.',
    imageUrl: getImg('Sahelanthropus tchadensis skull', 'prehistoric human ancestor'),
    phase: 'Phase 3'
  },
  {
    id: '48',
    year: '6 Million Years Ago',
    title: 'Evolution of Consistent Bipedalism',
    description: 'Early hominins like Orrorin tugenensis begin walking habitually on two legs, a defining feature that frees the hands for tool use and carrying.',
    imageUrl: getImg('Early hominin walking bipedal', 'prehistoric african landscape'),
    phase: 'Phase 3'
  },
  {
    id: '49',
    year: '4.4 Million Years Ago',
    title: 'Ardipithecus ramidus',
    description: 'This hominin species exhibits a mix of ape-like traits (grasping feet) and hominin traits (bipedal walking), suggesting life in a wooded environment.',
    imageUrl: getImg('Ardipithecus ramidus', 'prehistoric hominin'),
    phase: 'Phase 3'
  },
  {
    id: '50',
    year: '4.2 Million Years Ago',
    title: 'The Australopithecines Emerge',
    description: 'The genus Australopithecus appears, characterized by fully committed bipedalism, though still possessing a relatively small brain.',
    imageUrl: getImg('Australopithecus afarensis', 'prehistoric hominin'),
    phase: 'Phase 3'
  },
  {
    id: '51',
    year: '3.7 Million Years Ago',
    title: 'Laetoli Footprints',
    description: 'Three early hominins (likely Australopithecus afarensis) leave a trail of volcanic ash footprints in Tanzania, offering clear evidence of ancient bipedal walking.',
    imageUrl: getImg('Laetoli footprints volcanic ash', 'prehistoric archaeology'),
    phase: 'Phase 3'
  },
  {
    id: '52',
    year: '3.2 Million Years Ago',
    title: '"Lucy" Discovered',
    description: 'The partial skeleton of Australopithecus afarensis is found in Ethiopia, providing key insight into the size and locomotion of this famous species.',
    imageUrl: getImg('Lucy Australopithecus skeleton', 'archaeology fossil'),
    phase: 'Phase 3'
  },
  {
    id: '53',
    year: '2.5 Million Years Ago',
    title: 'Oldowan Tool Technology',
    description: 'The earliest widespread stone tool industry begins, characterized by simple stone cores and sharp flakes used for butchering animals and processing plants.',
    imageUrl: getImg('Oldowan stone tools', 'prehistoric artifacts'),
    phase: 'Phase 3'
  },
  {
    id: '54',
    year: '2.4 Million Years Ago',
    title: 'Genus Homo Appears',
    description: 'The first members of the genus Homo (Homo habilis—"handy man") emerge in East Africa, identified by larger brains and sophisticated tool use.',
    imageUrl: getImg('Homo habilis handy man', 'prehistoric human ancestor'),
    phase: 'Phase 3'
  },
  {
    id: '55',
    year: '2.0 Million Years Ago',
    title: 'The Great African Aridification',
    description: 'A major climate shift causes grasslands to expand further, driving hominins to rely more on meat and highly mobile hunting strategies.',
    imageUrl: getImg('African savanna prehistoric', 'landscape nature'),
    phase: 'Phase 3'
  },
  {
    id: '56',
    year: '1.9 Million Years Ago',
    title: 'Homo erectus Evolves',
    description: 'A new hominin emerges, characterized by a large brain, a tall, modern body structure, and the ability to travel vast distances.',
    imageUrl: getImg('Homo erectus hunting', 'prehistoric human ancestor'),
    phase: 'Phase 3'
  },
  {
    id: '57',
    year: '1.8 Million Years Ago',
    title: 'The First Major Out-of-Africa Migration',
    description: 'Homo erectus leaves Africa and rapidly spreads across Asia (Java, China) and Europe, demonstrating unprecedented adaptability and travel capability.',
    imageUrl: getImg('Homo erectus migration map', 'prehistoric human'),
    phase: 'Phase 3'
  },
  {
    id: '58',
    year: '1.6 Million Years Ago',
    title: 'Acheulean Hand Axes',
    description: 'Homo erectus develops more refined, symmetric, pear-shaped stone tools (hand axes), representing a significant cognitive leap in planning and execution.',
    imageUrl: getImg('Acheulean hand axe', 'prehistoric stone tool'),
    phase: 'Phase 3'
  },
  {
    id: '59',
    year: '1.0 Million Years Ago',
    title: 'Mastery of Fire Begins',
    description: 'Evidence suggests Homo erectus begins to control fire, providing warmth, protection, and the ability to cook food, which aids in brain development.',
    imageUrl: getImg('Homo erectus making fire', 'prehistoric camp'),
    phase: 'Phase 3'
  },
  {
    id: '60',
    year: '800,000 Years Ago',
    title: 'Human Expansion into Europe',
    description: 'Early hominins establish a durable presence in Europe, adapting to colder climates using fire and robust hunting techniques.',
    imageUrl: 'https://image.pollinations.ai/prompt/Early%20humans%20Europe%20winter%20realistic?width=600&height=400&nologo=true',
    phase: 'Phase 3'
  },
  {
    id: '61',
    year: '600,000 Years Ago',
    title: 'Divergence of Neanderthals and Denisovans',
    description: 'The common ancestor of Homo sapiens splits from the lineage that will eventually become Neanderthals (Europe) and Denisovans (Asia).',
    imageUrl: getImg('Neanderthals and Denisovans', 'prehistoric human portraits'),
    phase: 'Phase 3'
  },
  {
    id: '62',
    year: '400,000 Years Ago',
    title: 'Use of Wooden Spears',
    description: 'Hominin sites reveal ancient wooden spears (Schöningen spears), demonstrating sophisticated hunting technology that predates modern humans.',
    imageUrl: getImg('Schöningen wooden spears', 'prehistoric hunting'),
    phase: 'Phase 3'
  },
  {
    id: '63',
    year: '300,000 Years Ago',
    title: 'Emergence of Archaic Homo sapiens',
    description: 'The earliest fossils considered anatomically modern Homo sapiens appear in Morocco, showing the gradual transition toward our species.',
    imageUrl: getImg('Archaic Homo sapiens Morocco', 'prehistoric human'),
    phase: 'Phase 3'
  },
  {
    id: '64',
    year: '200,000 Years Ago',
    title: 'The Deepest Female Mitochondrial Ancestor',
    description: 'Mitochondrial Eve, the most recent common ancestor from whom all living humans trace their maternal line, is estimated to have lived around this time in Africa.',
    imageUrl: getImg('Mitochondrial Eve genetics', 'abstract science art'),
    phase: 'Phase 3'
  },
  {
    id: '65',
    year: '120,000 Years Ago',
    title: 'Beginning of the Last Ice Age (Glacial Period)',
    description: 'Massive ice sheets expand across the continents, driving complex human migration patterns and requiring further adaptive evolution.',
    imageUrl: getImg('Last Ice Age landscape mammoth', 'prehistoric winter'),
    phase: 'Phase 3'
  },
  {
    id: '66',
    year: '70,000 Years Ago',
    title: 'The "Great Leap Forward" (Cognitive Revolution)',
    description: 'A potential burst in cognitive abilities leads to complex language, symbolism, ritual burial, and sophisticated art and tools.',
    imageUrl: getImg('Cognitive revolution cave painting art', 'prehistoric human'),
    phase: 'Phase 3'
  },
  {
    id: '67',
    year: '60,000 Years Ago',
    title: 'Second Major Out-of-Africa Migration',
    description: 'Anatomically modern Homo sapiens (our species) migrate out of Africa via the Arabian Peninsula, rapidly displacing older hominin populations.',
    imageUrl: getImg('Homo sapiens migration map', 'prehistoric earth'),
    phase: 'Phase 3'
  },
  {
    id: '68',
    year: '50,000 Years Ago',
    title: 'Settlement of Australia',
    description: 'Humans cross the sea barriers and colonize Sahul (the combined landmass of Australia and New Guinea), representing a major seafaring achievement.',
    imageUrl: getImg('Aboriginal Australians arrival', 'prehistoric boat'),
    phase: 'Phase 3'
  },
  {
    id: '69',
    year: '40,000 Years Ago',
    title: 'Upper Paleolithic Art Flourishes',
    description: 'The height of Ice Age cave painting begins in Europe, featuring stunning, detailed depictions of bison, horses, and human hands (e.g., Chauvet Cave).',
    imageUrl: getImg('Chauvet cave paintings', 'prehistoric art'),
    phase: 'Phase 3'
  },
  {
    id: '70',
    year: '30,000 Years Ago',
    title: 'Extinction of Neanderthals',
    description: 'Neanderthal populations decline and vanish from the fossil record, likely due to a combination of climate change and competition with Homo sapiens.',
    imageUrl: getImg('Last Neanderthals', 'prehistoric human drama'),
    phase: 'Phase 3'
  },
  {
    id: '71',
    year: '16,000 Years Ago',
    title: 'Initial Settlement of the Americas',
    description: 'Humans cross the Beringia land bridge (connecting Asia and North America) or travel along the coast, becoming the continent\'s first settlers.',
    imageUrl: getImg('Beringia land bridge migration', 'ice age humans'),
    phase: 'Phase 3'
  },
  {
    id: '72',
    year: '12,000 Years Ago',
    title: 'Clovis Culture in North America',
    description: 'A distinctive and widespread North American culture, characterized by unique fluted stone projectile points, appears and dominates the hunting landscape.',
    imageUrl: getImg('Clovis point arrowhead', 'prehistoric artifact'),
    phase: 'Phase 3'
  },
  {
    id: '73',
    year: '10,000 BCE',
    title: 'End of the Last Ice Age (Holocene Begins)',
    description: 'The Earth enters the current, relatively warm and stable interglacial period, setting the stage for the development of agriculture and settled civilization.',
    imageUrl: getImg('Holocene landscape warming', 'nature melting ice'),
    phase: 'Phase 3'
  },

  // --- PHASE 4: The Neolithic Revolution ---
  {
    id: 'phase-4-marker',
    year: '10,000 BCE',
    title: 'The Neolithic Revolution',
    description: '',
    imageUrl: getImg('Neolithic Revolution farming agriculture', 'ancient history', true),
    phase: 'Phase 4',
    type: 'phase_marker'
  },
  { id: 'p4-1', year: '10,000 BCE', title: 'The Dawn of the Holocene', description: 'The most recent glacial period ends, leading to a stable, warmer, and wetter climate worldwide.', imageUrl: getImg('Dawn of Holocene lush landscape', 'nature'), phase: 'Phase 4' },
  { id: 'p4-2', year: '9,600 BCE', title: 'First Cereal Cultivation', description: 'Early intentional cultivation of wild einkorn and emmer wheat begins in the Fertile Crescent of Southwest Asia.', imageUrl: getImg('First wheat cultivation farming', 'neolithic'), phase: 'Phase 4' },
  { id: 'p4-3', year: '9,500 BCE', title: 'Permanent Settlement at Jericho', description: 'The site of Jericho is established as one of the world\'s oldest continuously inhabited proto-cities.', imageUrl: getImg('Ancient Jericho settlement', 'neolithic city'), phase: 'Phase 4' },
  { id: 'p4-4', year: '9,000 BCE', title: 'Göbekli Tepe Complex', description: 'Hunter-gatherers construct monumental T-shaped stone pillar enclosures in modern Turkey.', imageUrl: getImg('Gobekli Tepe stone pillars', 'ancient ruin'), phase: 'Phase 4' },
  { id: 'p4-5', year: '9,000 BCE', title: 'Domestication of the Dog', description: 'The gray wolf is widely accepted to have been domesticated, providing protection and aid in hunting.', imageUrl: getImg('Domestication of dog wolf', 'ancient humans'), phase: 'Phase 4' },
  { id: 'p4-6', year: '8,800 BCE', title: 'Pre-Pottery Neolithic A', description: 'This period sees the construction of round, semi-subterranean houses and communal food storage.', imageUrl: getImg('Pre-Pottery Neolithic round houses', 'archaeology'), phase: 'Phase 4' },
  { id: 'p4-7', year: '8,500 BCE', title: 'Domestication of the Goat', description: 'Wild goats are domesticated in the Zagros Mountains, marking the first major livestock for milk and meat.', imageUrl: getImg('Domesticated goat ancient', 'livestock'), phase: 'Phase 4' },
  { id: 'p4-8', year: '8,000 BCE', title: 'Wall of Jericho', description: 'A massive stone wall is constructed around Jericho, likely for defense or flood control.', imageUrl: getImg('Ancient Wall of Jericho', 'archaeology'), phase: 'Phase 4' },
  { id: 'p4-9', year: '8,000 BCE', title: 'Rice Domestication in China', description: 'Evidence for independent domestication of rice appears in the Yangtze River valley.', imageUrl: getImg('Rice paddy ancient China', 'agriculture'), phase: 'Phase 4' },
  { id: 'p4-10', year: '7,700 BCE', title: 'Domesticated Wheat', description: 'Farmers develop wheat strains that do not easily shatter upon ripening, enabling efficient harvest.', imageUrl: getImg('Ancient wheat harvest', 'agriculture'), phase: 'Phase 4' },
  { id: 'p4-11', year: '7,500 BCE', title: 'Domestication of Cattle and Pig', description: 'Wild aurochs and boars are domesticated into cattle and pigs, completing major Neolithic livestock.', imageUrl: getImg('Domesticated cattle pigs ancient', 'farm'), phase: 'Phase 4' },
  { id: 'p4-12', year: '7,200 BCE', title: 'Plastered Skulls of \'Ain Ghazal', description: 'Human skulls are adorned with plaster and shells, representing a form of ancestor veneration.', imageUrl: getImg('Plastered Skulls Ain Ghazal', 'archaeology artifact'), phase: 'Phase 4' },
  { id: 'p4-13', year: '7,000 BCE', title: 'Pre-Pottery Neolithic B', description: 'Architecture shifts to rectilinear, multi-room structures, indicating complex social organization.', imageUrl: getImg('Neolithic rectilinear houses', 'architecture'), phase: 'Phase 4' },
  { id: 'p4-14', year: '7,000 BCE', title: 'Settlement of Çatalhöyük', description: 'A large proto-city in Anatolia flourishes, with houses entered from the roof.', imageUrl: getImg('Catalhoyuk ancient city rooftop', 'archaeology'), phase: 'Phase 4' },
  { id: 'p4-15', year: '7,000 BCE', title: 'Early Flax Textiles', description: 'Evidence of processing flax into linen fibers for woven cloth appears in the Levant.', imageUrl: getImg('Ancient linen flax textile weaving', 'craft'), phase: 'Phase 4' },
  { id: 'p4-16', year: '6,500 BCE', title: 'Farming Spreads to Europe', description: 'Agricultural practices begin to diffuse from Anatolia into Southeastern Europe.', imageUrl: getImg('Early European farming', 'neolithic'), phase: 'Phase 4' },
  { id: 'p4-17', year: '6,200 BCE', title: 'First Known Copper Smelting', description: 'Earliest evidence of extracting copper from ore marks the start of the Chalcolithic.', imageUrl: getImg('Ancient copper smelting', 'metalwork'), phase: 'Phase 4' },
  { id: 'p4-18', year: '6,000 BCE', title: 'Maize Cultivation in Mesoamerica', description: 'Farmers in Mexico begin cultivating teosinte, the wild ancestor of maize.', imageUrl: getImg('Ancient maize corn cultivation', 'agriculture'), phase: 'Phase 4' },
  { id: 'p4-19', year: '6,000 BCE', title: 'Earliest Irrigation', description: 'Simple earthen canals and controlled diversion of river water begin in Mesopotamia.', imageUrl: getImg('Ancient irrigation canal Mesopotamia', 'agriculture'), phase: 'Phase 4' },
  { id: 'p4-20', year: '6,000 BCE', title: 'Sahara Aridification', description: 'The "Green Sahara" ends, forcing populations to congregate along the Nile River.', imageUrl: getImg('Sahara desertification ancient', 'landscape'), phase: 'Phase 4' },
  { id: 'p4-21', year: '5,500 BCE', title: 'First Evidence of Cheese Making', description: 'Milk processing and cheese production appear in Poland to preserve nutrients.', imageUrl: getImg('Ancient cheese making pottery', 'food history'), phase: 'Phase 4' },
  { id: 'p4-22', year: '5,400 BCE', title: 'Halaf Culture Pottery', description: 'Northern Mesopotamia produces elaborate, brightly painted pottery that is widely traded.', imageUrl: getImg('Halaf culture painted pottery', 'artifact'), phase: 'Phase 4' },
  { id: 'p4-23', year: '5,000 BCE', title: 'Invention of the Plow', description: 'The earliest scratch plow drawn by oxen dramatically increases cultivated land area.', imageUrl: getImg('Ancient ox drawn plow', 'agriculture'), phase: 'Phase 4' },
  { id: 'p4-24', year: '5,000 BCE', title: 'Megalithic Construction in Europe', description: 'Large stone monuments and tombs begin to be erected in Portugal and France.', imageUrl: getImg('Megalithic standing stones Europe', 'archaeology'), phase: 'Phase 4' },
  { id: 'p4-25', year: '4,500 BCE', title: 'Ubaid Period in Sumer', description: 'Foundation for first city-states laid in Mesopotamia with large temple complexes.', imageUrl: getImg('Ubaid period Sumer temple', 'ancient architecture'), phase: 'Phase 4' },
  { id: 'p4-26', year: '4,000 BCE', title: 'Invention of Potter\'s Wheel', description: 'Rapid potter\'s wheel in Mesopotamia revolutionizes ceramic production.', imageUrl: getImg('Ancient potters wheel Mesopotamia', 'craft'), phase: 'Phase 4' },
  { id: 'p4-27', year: '4,000 BCE', title: 'Use of Wool', description: 'Sheep are selectively bred to maximize wool for widespread clothing production.', imageUrl: getImg('Ancient sheep wool shearing', 'agriculture'), phase: 'Phase 4' },
  { id: 'p4-28', year: '3,800 BCE', title: 'The Sweet Track', description: 'Construction of an ancient timber causeway in England, one of the oldest engineered roads.', imageUrl: getImg('Sweet Track ancient timber road', 'archaeology'), phase: 'Phase 4' },
  { id: 'p4-29', year: '3,500 BCE', title: 'Proto-Cuneiform', description: 'Pictographic clay tablets used in Uruk for accounting, a precursor to writing.', imageUrl: getImg('Proto-cuneiform clay tablet', 'ancient writing'), phase: 'Phase 4' },
  { id: 'p4-30', year: '3,200 BCE', title: 'Bronze Alloy Invention', description: 'Alloying copper with tin creates bronze, ushering in the Bronze Age.', imageUrl: getImg('Ancient bronze ingot smelting', 'metalwork'), phase: 'Phase 4' },

  // --- PHASE 5: The Bronze Age ---
  {
    id: 'phase-5-marker',
    year: '3100 BCE',
    title: 'The Bronze Age',
    description: '',
    imageUrl: getImg('The Bronze Age civilizations', 'ancient history', true),
    phase: 'Phase 5',
    type: 'phase_marker'
  },
  { id: 'p5-1', year: '3100 BCE', title: 'Unification of Egypt', description: 'Upper and Lower Egypt are unified, establishing the centralized Pharaonic state.', imageUrl: getImg('Narmer Palette Unification of Egypt', 'ancient egypt'), phase: 'Phase 5' },
  { id: 'p5-2', year: '3000 BCE', title: 'First Cities in Sumer', description: 'Urban centers like Uruk become true cities with massive walls and temples.', imageUrl: getImg('Ancient city of Uruk Ziggurat', 'Mesopotamia'), phase: 'Phase 5' },
  { id: 'p5-3', year: '2900 BCE', title: 'Rise of Cuneiform', description: 'Pictographic writing in Mesopotamia develops into formalized cuneiform script.', imageUrl: getImg('Cuneiform tablet writing', 'ancient history'), phase: 'Phase 5' },
  { id: 'p5-4', year: '2800 BCE', title: 'Royal Tombs of Ur', description: 'Elaborate burials reveal massive human sacrifices and exquisite craftsmanship.', imageUrl: getImg('Royal Tombs of Ur gold artifacts', 'archaeology'), phase: 'Phase 5' },
  { id: 'p5-5', year: '2700 BCE', title: 'Reign of Gilgamesh', description: 'The semi-mythical King of Uruk, later immortalized in the Epic of Gilgamesh.', imageUrl: getImg('Gilgamesh king of Uruk', 'ancient myth'), phase: 'Phase 5' },
  { id: 'p5-6', year: '2686 BCE', title: 'Old Kingdom of Egypt', description: 'Marked by political stability and monumental architecture, the "Age of the Pyramids".', imageUrl: getImg('Pyramids of Giza Old Kingdom', 'ancient egypt'), phase: 'Phase 5' },
  { id: 'p5-7', year: '2630 BCE', title: 'Djoser\'s Step Pyramid', description: 'Imhotep designs the first true pyramid at Saqqara for Pharaoh Djoser.', imageUrl: getImg('Step Pyramid of Djoser', 'ancient egypt'), phase: 'Phase 5' },
  { id: 'p5-8', year: '2500 BCE', title: 'Indus Valley Civilization', description: 'Major cities like Mohenjo-Daro flourish with sophisticated grid planning and sewage systems.', imageUrl: getImg('Mohenjo Daro Indus Valley city', 'ancient history'), phase: 'Phase 5' },
  { id: 'p5-9', year: '2500 BCE', title: 'Great Pyramid of Giza', description: 'Pharaoh Khufu commissions the largest stone structure ever built.', imageUrl: getImg('Great Pyramid of Giza construction', 'ancient egypt'), phase: 'Phase 5' },
  { id: 'p5-10', year: '2400 BCE', title: 'Development of Sanskrit', description: 'Early forms of the Indo-Aryan language begin to develop in the Indian subcontinent.', imageUrl: getImg('Ancient Sanskrit manuscript', 'ancient india'), phase: 'Phase 5' },
  { id: 'p5-11', year: '2334 BCE', title: 'Sargon of Akkad', description: 'Sargon establishes the Akkadian Empire, the world\'s first large territorial empire.', imageUrl: getImg('Sargon of Akkad head statue', 'mesopotamia'), phase: 'Phase 5' },
  { id: 'p5-12', year: '2112 BCE', title: 'Neo-Sumerian Renaissance', description: 'Ur III dynasty leads to a brief but highly centralized revival of Sumerian culture.', imageUrl: getImg('Ziggurat of Ur neo-sumerian', 'mesopotamia'), phase: 'Phase 5' },
  { id: 'p5-13', year: '2000 BCE', title: 'Collapse of Indus Valley', description: 'Harappan cities decline due to environmental changes and drying rivers.', imageUrl: getImg('Ruins of Indus Valley Civilization', 'ancient history'), phase: 'Phase 5' },
  { id: 'p5-14', year: '1900 BCE', title: 'Minoan Civilization Rises', description: 'Crete establishes palace centers like Knossos with vibrant frescos and trade.', imageUrl: getImg('Palace of Knossos Minoan', 'ancient crete'), phase: 'Phase 5' },
  { id: 'p5-15', year: '1850 BCE', title: 'Caral Supe Civilization', description: 'Earliest major complex society in the Americas develops in Peru.', imageUrl: getImg('Caral Supe pyramids Peru', 'ancient americas'), phase: 'Phase 5' },
  { id: 'p5-16', year: '1792 BCE', title: 'Reign of Hammurabi', description: 'Hammurabi creates the Old Babylonian Empire and his comprehensive legal code.', imageUrl: 'https://image.pollinations.ai/prompt/Code%20of%20Hammurabi%20stele%20realistic?width=600&height=400&nologo=true', phase: 'Phase 5' },
  { id: 'p5-17', year: '1750 BCE', title: 'Writing Spreads to China', description: 'Early forms of writing appear in China, precursors to oracle bone script.', imageUrl: getImg('Oracle bones ancient chinese writing', 'artifact'), phase: 'Phase 5' },
  { id: 'p5-18', year: '1700 BCE', title: 'Hyksos Invasion of Egypt', description: 'Foreign rulers use superior bronze weaponry and chariots to control northern Egypt.', imageUrl: getImg('Hyksos chariots invasion Egypt', 'ancient warfare'), phase: 'Phase 5' },
  { id: 'p5-19', year: '1600 BCE', title: 'Mycenaean Civilization', description: 'Mainland Greece culture emerges with fortified citadels and warrior culture.', imageUrl: getImg('Lion Gate Mycenae', 'ancient greece'), phase: 'Phase 5' },
  { id: 'p5-20', year: '1600 BCE', title: 'The Hittite Kingdom', description: 'Hittites establish a kingdom in Anatolia and master chariot warfare.', imageUrl: 'https://image.pollinations.ai/prompt/Hittite%20chariots%20warfare%20realistic?width=600&height=400&nologo=true', phase: 'Phase 5' },
  { id: 'p5-21', year: '1600 BCE', title: 'Shang Dynasty', description: 'First confirmed Chinese dynasty emerges along the Yellow River.', imageUrl: 'https://image.pollinations.ai/prompt/Shang%20Dynasty%20bronze%20vessel%20realistic?width=600&height=400&nologo=true', phase: 'Phase 5' },
  { id: 'p5-22', year: '1550 BCE', title: 'New Kingdom of Egypt', description: 'Egypt expels the Hyksos and reaches its peak imperial power.', imageUrl: 'https://image.pollinations.ai/prompt/Temple%20of%20Karnak%20New%20Kingdom%20realistic?width=600&height=400&nologo=true', phase: 'Phase 5' },
  { id: 'p5-23', year: '1500 BCE', title: 'Cult of Aten', description: 'Pharaoh Akhenaten initiates a brief shift toward worship of a single sun disk.', imageUrl: 'https://image.pollinations.ai/prompt/Akhenaten%20worshipping%20Aten%20sun%20disk%20realistic?width=600&height=400&nologo=true', phase: 'Phase 5' },
  { id: 'p5-24', year: '1500 BCE', title: 'Olmec Culture Emerges', description: 'The Olmec flourish in Mesoamerica, known for colossal stone heads.', imageUrl: getImg('Olmec colossal head', 'ancient mexico'), phase: 'Phase 5' },
  { id: 'p5-25', year: '1500 BCE', title: 'Vedic Period in India', description: 'Indo-Aryan groups bring early Vedic religion and Sanskrit to the subcontinent.', imageUrl: 'https://image.pollinations.ai/prompt/Vedic%20ritual%20ancient%20India%20realistic?width=600&height=400&nologo=true', phase: 'Phase 5' },
  { id: 'p5-26', year: '1450 BCE', title: 'Eruption of Thera', description: 'Massive volcanic eruption devastates the Minoan civilization.', imageUrl: getImg('Santorini Thera eruption volcano', 'ancient disaster'), phase: 'Phase 5' },
  { id: 'p5-27', year: '1400 BCE', title: 'Height of Mycenaean Power', description: 'Mycenaean culture dominates the Aegean trade network.', imageUrl: 'https://image.pollinations.ai/prompt/Mycenaean%20gold%20mask%20Agamemnon%20realistic?width=600&height=400&nologo=true', phase: 'Phase 5' },
  { id: 'p5-28', year: '1350 BCE', title: 'Amarna Letters', description: 'Diplomatic correspondence reveals the complex political world of the Late Bronze Age.', imageUrl: getImg('Amarna letters clay tablets', 'ancient egypt'), phase: 'Phase 5' },
  { id: 'p5-29', year: '1300 BCE', title: 'Moses and the Exodus', description: 'Traditional dating for the Exodus of the Israelites from Egypt.', imageUrl: getImg('Moses parting Red Sea biblical', 'painting'), phase: 'Phase 5' },
  { id: 'p5-30', year: '1274 BCE', title: 'Battle of Kadesh', description: 'Ramesses II fights the Hittites in the earliest battle with a surviving peace treaty.', imageUrl: getImg('Battle of Kadesh chariots', 'ancient warfare'), phase: 'Phase 5' },
  { id: 'p5-31', year: '1200 BCE', title: 'Bronze Age Collapse', description: 'Destruction of major cities across the Mediterranean ushers in a dark age.', imageUrl: getImg('Burning ancient city Bronze Age collapse', 'ruins'), phase: 'Phase 5' },

  // --- PHASE 6: The Iron Age & Classical Age ---
  {
    id: 'phase-6-marker',
    year: '1200 BCE',
    title: 'The Iron Age & Classical Age',
    description: '',
    imageUrl: getImg('Classical antiquity Iron Age civilizations', 'Greece Rome', true),
    phase: 'Phase 6',
    type: 'phase_marker'
  },
  { id: 'p6-1', year: '1200 BCE', title: 'Iron Technology Spreads', description: 'Iron production replaces bronze as the primary metal for tools and weapons.', imageUrl: getImg('Ancient blacksmith forging iron', 'history'), phase: 'Phase 6' },
  { id: 'p6-2', year: '1150 BCE', title: 'Greek Dark Ages Begin', description: 'Greece enters a period of decline and depopulation; Linear B writing is lost.', imageUrl: getImg('Greek Dark Ages ruins', 'ancient greece'), phase: 'Phase 6' },
  { id: 'p6-3', year: '1046 BCE', title: 'Zhou Dynasty Established', description: 'The Zhou introduce the concept of the "Mandate of Heaven" in China.', imageUrl: getImg('Zhou Dynasty bronze vessel', 'ancient china'), phase: 'Phase 6' },
  { id: 'p6-4', year: '1000 BCE', title: 'Phoenician Alphabet', description: 'Phoenicians develop an alphabetic script, the basis of modern Western alphabets.', imageUrl: getImg('Phoenician alphabet stone tablet', 'ancient writing'), phase: 'Phase 6' },
  { id: 'p6-5', year: '957 BCE', title: 'Solomon Builds First Temple', description: 'King Solomon centralizes Yahweh worship in Jerusalem.', imageUrl: getImg('Solomons Temple Jerusalem', 'ancient architecture'), phase: 'Phase 6' },
  { id: 'p6-6', year: '911 BCE', title: 'Rise of Neo-Assyrian Empire', description: 'Assyria establishes the first empire to systematically rule conquered territories.', imageUrl: getImg('Assyrian palace relief sculpture', 'ancient mesopotamia'), phase: 'Phase 6' },
  { id: 'p6-7', year: '800 BCE', title: 'Greek Polis Emerges', description: 'Independent city-states like Athens and Sparta develop.', imageUrl: getImg('Acropolis of Athens ancient', 'greece'), phase: 'Phase 6' },
  { id: 'p6-8', year: '776 BCE', title: 'First Olympic Games', description: 'Recorded Games in Olympia mark the start of a pan-Hellenic identity.', imageUrl: getImg('Ancient Greek Olympic runners', 'pottery'), phase: 'Phase 6' },
  { id: 'p6-9', year: '753 BCE', title: 'Founding of Rome', description: 'Legendary founding of Rome by Romulus and Remus.', imageUrl: getImg('She-wolf Romulus and Remus statue', 'rome'), phase: 'Phase 6' },
  { id: 'p6-10', year: '722 BCE', title: 'Fall of Kingdom of Israel', description: 'Assyria conquers Israel, leading to the "Ten Lost Tribes".', imageUrl: getImg('Assyrian siege of Israel', 'ancient history'), phase: 'Phase 6' },
  { id: 'p6-11', year: '700 BCE', title: 'Homer Composes Epics', description: 'The Iliad and Odyssey become the foundation of Greek literature.', imageUrl: getImg('Homer poet ancient Greece', 'bust'), phase: 'Phase 6' },
  { id: 'p6-12', year: '612 BCE', title: 'Fall of Nineveh', description: 'Babylonians and Medes sack the Assyrian capital, ending the empire.', imageUrl: getImg('Fall of Nineveh burning city', 'ancient history'), phase: 'Phase 6' },
  { id: 'p6-13', year: '600 BCE', title: 'Rise of Mahajanapadas', description: 'Sixteen major kingdoms emerge in North India.', imageUrl: getImg('Ancient Indian city Mahajanapada', 'history'), phase: 'Phase 6' },
  { id: 'p6-14', year: '594 BCE', title: 'Solon\'s Reforms', description: 'Athenian statesman Solon lays the groundwork for democracy.', imageUrl: getImg('Solon Athenian lawgiver', 'ancient greece'), phase: 'Phase 6' },
  { id: 'p6-15', year: '586 BCE', title: 'Destruction of First Temple', description: 'Nebuchadnezzar II destroys the Temple and exiles the Jewish elite.', imageUrl: getImg('Destruction of Jerusalem Temple Babylon', 'ancient history'), phase: 'Phase 6' },
  { id: 'p6-16', year: '563 BCE', title: 'Birth of Buddha', description: 'Siddhartha Gautama is born, founder of Buddhism.', imageUrl: getImg('Buddha under Bodhi tree', 'ancient art'), phase: 'Phase 6' },
  { id: 'p6-17', year: '551 BCE', title: 'Birth of Confucius', description: 'Chinese philosopher Kong Fuzi is born.', imageUrl: getImg('Confucius teaching students', 'ancient china'), phase: 'Phase 6' },
  { id: 'p6-18', year: '550 BCE', title: 'Achaemenid Empire Founded', description: 'Cyrus the Great unifies Iranian tribes into a massive empire.', imageUrl: getImg('Cyrus the Great tomb Pasargadae', 'ancient persia'), phase: 'Phase 6' },
  { id: 'p6-19', year: '539 BCE', title: 'Cyrus Frees the Jews', description: 'Cyrus allows Jewish exiles to return to Jerusalem.', imageUrl: getImg('Cyrus Cylinder artifact', 'ancient history'), phase: 'Phase 6' },
  { id: 'p6-20', year: '509 BCE', title: 'Founding of Roman Republic', description: 'Rome expels its king and establishes a Senate-led government.', imageUrl: getImg('Roman Senate meeting', 'ancient rome'), phase: 'Phase 6' },
  { id: 'p6-21', year: '508 BCE', title: 'Athenian Democracy', description: 'Cleisthenes institutes democratic reforms in Athens.', imageUrl: getImg('Athenian voting shards ostraka', 'ancient greece'), phase: 'Phase 6' },
  { id: 'p6-22', year: '490 BCE', title: 'Battle of Marathon', description: 'Greek forces defeat the first Persian invasion.', imageUrl: getImg('Greek hoplite phalanx Marathon', 'ancient warfare'), phase: 'Phase 6' },
  { id: 'p6-23', year: '480 BCE', title: 'Battle of Salamis', description: 'Greek naval victory ensures the survival of the Hellenic world.', imageUrl: getImg('Battle of Salamis triremes', 'ancient naval war'), phase: 'Phase 6' },
  { id: 'p6-24', year: '475 BCE', title: 'Warring States Period', description: 'Seven major states vie for control of China.', imageUrl: getImg('Warring States Period China warriors', 'ancient history'), phase: 'Phase 6' },
  { id: 'p6-25', year: '447 BCE', title: 'Parthenon Construction', description: 'Work starts on the Parthenon in Athens.', imageUrl: getImg('Parthenon Athens construction', 'ancient architecture'), phase: 'Phase 6' },
  { id: 'p6-26', year: '431 BCE', title: 'Peloponnesian War', description: 'Conflict between Athens and Sparta ends Athens\' Golden Age.', imageUrl: getImg('Spartan warrior helmet', 'ancient greece'), phase: 'Phase 6' },
  { id: 'p6-27', year: '399 BCE', title: 'Death of Socrates', description: 'Socrates is executed in Athens for impiety.', imageUrl: getImg('Death of Socrates painting', 'classical art'), phase: 'Phase 6' },
  { id: 'p6-28', year: '336 BCE', title: 'Alexander the Great Rises', description: 'Alexander begins his campaign to conquer the Persian Empire.', imageUrl: getImg('Alexander the Great mosaic', 'ancient history'), phase: 'Phase 6' },
  { id: 'p6-29', year: '221 BCE', title: 'Unification of China', description: 'Qin Shi Huang becomes the First Emperor, beginning the Imperial era.', imageUrl: getImg('Terracotta Warriors Qin Dynasty', 'ancient china'), phase: 'Phase 6' },
  { id: 'p6-30', year: '27 BCE', title: 'End of Roman Republic', description: 'Octavian becomes Augustus, establishing the Roman Empire.', imageUrl: getImg('Augustus Caesar statue', 'ancient rome'), phase: 'Phase 6' },

  // --- PHASE 7: The Post-Classical World ---
  {
    id: 'phase-7-marker',
    year: '6 CE',
    title: 'The Post-Classical World',
    description: '',
    imageUrl: getImg('Medieval world history post-classical', 'middle ages', true),
    phase: 'Phase 7',
    type: 'phase_marker'
  },
  { id: 'p7-1', year: '6 CE', title: 'Roman Annexation of Judea', description: 'Rome formalizes rule over Judea, fueling tensions.', imageUrl: getImg('Roman soldiers Judea', 'ancient history'), phase: 'Phase 7' },
  { id: 'p7-2', year: '29 CE', title: 'Crucifixion of Jesus', description: 'Foundational event of Christianity.', imageUrl: getImg('Crucifixion historical painting', 'religious art'), phase: 'Phase 7' },
  { id: 'p7-3', year: '70 CE', title: 'Destruction of Second Temple', description: 'Roman forces destroy the Temple in Jerusalem.', imageUrl: getImg('Destruction of Jerusalem Temple Titus', 'ancient history'), phase: 'Phase 7' },
  { id: 'p7-4', year: '100 CE', title: 'Height of Silk Roads', description: 'Trade routes connect Rome, Parthia, India, and China.', imageUrl: getImg('Silk Road caravan camels', 'ancient trade'), phase: 'Phase 7' },
  { id: 'p7-5', year: '117 CE', title: 'Roman Empire Peak', description: 'Empire reaches maximum extent under Trajan.', imageUrl: getImg('Roman Empire map Trajan', 'ancient history'), phase: 'Phase 7' },
  { id: 'p7-6', year: '220 CE', title: 'Fall of Han Dynasty', description: 'Ends unified rule in China, beginning fragmentation.', imageUrl: getImg('Han Dynasty China fall', 'ancient history'), phase: 'Phase 7' },
  { id: 'p7-7', year: '313 CE', title: 'Edict of Milan', description: 'Constantine legalizes Christianity in the Roman Empire.', imageUrl: getImg('Emperor Constantine Christianity', 'roman history'), phase: 'Phase 7' },
  { id: 'p7-8', year: '330 CE', title: 'Founding of Constantinople', description: 'Constantine dedicates new capital, shifting power east.', imageUrl: getImg('Constantinople Hagia Sophia ancient', 'byzantine'), phase: 'Phase 7' },
  { id: 'p7-9', year: '395 CE', title: 'Division of Roman Empire', description: 'Empire splits into Western and Eastern halves.', imageUrl: getImg('Map of divided Roman Empire', 'history'), phase: 'Phase 7' },
  { id: 'p7-10', year: '476 CE', title: 'Fall of Western Rome', description: 'Romulus Augustulus deposed, marking end of Antiquity in West.', imageUrl: getImg('Fall of Rome barbarian invasion', 'ancient history'), phase: 'Phase 7' },
  { id: 'p7-11', year: '529 CE', title: 'Justinian\'s Code', description: 'Byzantine Emperor codifies Roman Law.', imageUrl: getImg('Justinian I mosaic', 'byzantine art'), phase: 'Phase 7' },
  { id: 'p7-12', year: '570 CE', title: 'Birth of Muhammad', description: 'Traditional date for birth of Islam\'s founder.', imageUrl: getImg('Mecca Kaaba historical', 'islamic history'), phase: 'Phase 7' },
  { id: 'p7-13', year: '618 CE', title: 'Founding of Tang Dynasty', description: 'Golden Age begins in China.', imageUrl: getImg('Tang Dynasty court painting', 'chinese art'), phase: 'Phase 7' },
  { id: 'p7-14', year: '622 CE', title: 'The Hijra', description: 'Migration to Medina marks start of Islamic calendar.', imageUrl: getImg('Hijra migration camel caravan', 'islamic history'), phase: 'Phase 7' },
  { id: 'p7-15', year: '661 CE', title: 'Umayyad Caliphate', description: 'First major Islamic empire forms.', imageUrl: getImg('Great Mosque of Damascus Umayyad', 'islamic architecture'), phase: 'Phase 7' },
  { id: 'p7-16', year: '711 CE', title: 'Conquest of Iberia', description: 'Muslim forces conquer most of Spain and Portugal.', imageUrl: getImg('Moorish architecture Spain Alhambra', 'history'), phase: 'Phase 7' },
  { id: 'p7-17', year: '750 CE', title: 'Abbasid Caliphate', description: 'Capital shifts to Baghdad, ushering in Golden Age of scholarship.', imageUrl: getImg('House of Wisdom Baghdad', 'islamic golden age'), phase: 'Phase 7' },
  { id: 'p7-18', year: '793 CE', title: 'Raid on Lindisfarne', description: 'First recorded Viking attack in England.', imageUrl: getImg('Viking longship raid', 'medieval history'), phase: 'Phase 7' },
  { id: 'p7-19', year: '800 CE', title: 'Charlemagne Crowned', description: 'Frankish King becomes "Emperor of the Romans".', imageUrl: getImg('Charlemagne coronation painting', 'medieval art'), phase: 'Phase 7' },
  { id: 'p7-20', year: '800 CE', title: 'Invention of Gunpowder', description: 'Alchemists in China create early gunpowder.', imageUrl: getImg('Ancient Chinese gunpowder fireworks', 'history'), phase: 'Phase 7' },
  { id: 'p7-21', year: '960 CE', title: 'Song Dynasty Founded', description: 'Period of technological and commercial growth in China.', imageUrl: getImg('Song Dynasty landscape painting', 'chinese art'), phase: 'Phase 7' },
  { id: 'p7-22', year: '1054 CE', title: 'The Great Schism', description: 'Split between Eastern Orthodox and Roman Catholic Churches.', imageUrl: getImg('Hagia Sophia St Peter\'s Basilica', 'church history'), phase: 'Phase 7' },
  { id: 'p7-23', year: '1066 CE', title: 'Norman Conquest', description: 'William the Conqueror defeats the English at Hastings.', imageUrl: getImg('Bayeux Tapestry Battle of Hastings', 'medieval art'), phase: 'Phase 7' },
  { id: 'p7-24', year: '1095 CE', title: 'First Crusade Called', description: 'Pope Urban II calls for reclamation of Holy Land.', imageUrl: getImg('Council of Clermont First Crusade', 'medieval history'), phase: 'Phase 7' },
  { id: 'p7-25', year: '1192 CE', title: 'Kamakura Shogunate', description: 'Feudal era begins in Japan with military rule.', imageUrl: getImg('Samurai warrior Kamakura period', 'japanese history'), phase: 'Phase 7' },
  { id: 'p7-26', year: '1206 CE', title: 'Genghis Khan Unites Mongols', description: 'Beginning of Mongol Empire expansion.', imageUrl: getImg('Genghis Khan Mongol cavalry', 'history'), phase: 'Phase 7' },
  { id: 'p7-27', year: '1215 CE', title: 'Magna Carta', description: 'King John signs foundational document for rights.', imageUrl: getImg('Magna Carta document', 'medieval history'), phase: 'Phase 7' },
  { id: 'p7-28', year: '1271 CE', title: 'Marco Polo Travels', description: 'Venetian merchant begins journey to Asia.', imageUrl: getImg('Marco Polo Silk Road journey', 'history'), phase: 'Phase 7' },
  { id: 'p7-29', year: '1299 CE', title: 'Ottoman Empire Founded', description: 'Osman I establishes empire that would replace Byzantium.', imageUrl: getImg('Ottoman Janissaries warrior', 'history'), phase: 'Phase 7' },
  { id: 'p7-30', year: '1324 CE', title: 'Mansa Musa\'s Hajj', description: 'Mali Emperor showcases West African wealth.', imageUrl: getImg('Mansa Musa pilgrimage gold', 'african history'), phase: 'Phase 7' },
  { id: 'p7-31', year: '1347 CE', title: 'Black Death', description: 'Bubonic plague reaches Europe, devastating population.', imageUrl: getImg('Black Death plague doctor medieval', 'history'), phase: 'Phase 7' },

  // --- PHASE 8: The Age of Exploration ---
  {
    id: 'phase-8-marker',
    year: '1405 CE',
    title: 'The Age of Exploration',
    description: '',
    imageUrl: getImg('Age of Exploration ships map', 'renaissance', true),
    phase: 'Phase 8',
    type: 'phase_marker'
  },
  { id: 'p8-1', year: '1405 CE', title: 'Treasure Voyages', description: 'Zheng He leads massive Chinese naval expeditions.', imageUrl: getImg('Zheng He treasure ship', 'chinese history'), phase: 'Phase 8' },
  { id: 'p8-2', year: '1415 CE', title: 'Capture of Ceuta', description: 'Portugal begins overseas expansion.', imageUrl: getImg('Portuguese conquest Ceuta', 'history'), phase: 'Phase 8' },
  { id: 'p8-3', year: '1440 CE', title: 'Donation of Constantine Disproved', description: 'Renaissance textual criticism exposes forgery.', imageUrl: getImg('Lorenzo Valla manuscript', 'renaissance'), phase: 'Phase 8' },
  { id: 'p8-4', year: '1450 CE', title: 'Printing Press', description: 'Gutenberg revolutionizes communication.', imageUrl: getImg('Gutenberg printing press', 'history'), phase: 'Phase 8' },
  { id: 'p8-5', year: '1453 CE', title: 'Fall of Constantinople', description: 'Ottomans conquer Byzantine capital.', imageUrl: getImg('Siege of Constantinople 1453', 'history'), phase: 'Phase 8' },
  { id: 'p8-6', year: '1478 CE', title: 'Spanish Inquisition', description: 'Ferdinand and Isabella enforce orthodoxy.', imageUrl: getImg('Spanish Inquisition tribunal', 'history'), phase: 'Phase 8' },
  { id: 'p8-7', year: '1488 CE', title: 'Dias Rounds Cape', description: 'Sea route from Atlantic to Indian Ocean found.', imageUrl: getImg('Bartolomeu Dias ship Cape of Good Hope', 'history'), phase: 'Phase 8' },
  { id: 'p8-8', year: '1492 CE', title: 'Columbus Reaches Americas', description: 'Initiates Columbian Exchange.', imageUrl: getImg('Christopher Columbus ships landing', 'history'), phase: 'Phase 8' },
  { id: 'p8-9', year: '1494 CE', title: 'Treaty of Tordesillas', description: 'Spain and Portugal divide non-European world.', imageUrl: getImg('Treaty of Tordesillas map', 'history'), phase: 'Phase 8' },
  { id: 'p8-10', year: '1498 CE', title: 'Da Gama Reaches India', description: 'Portugal secures direct spice trade route.', imageUrl: getImg('Vasco da Gama arrival India', 'history'), phase: 'Phase 8' },
  { id: 'p8-11', year: '1503 CE', title: 'Mona Lisa', description: 'Da Vinci completes High Renaissance masterpiece.', imageUrl: getImg('Mona Lisa Leonardo da Vinci', 'art'), phase: 'Phase 8' },
  { id: 'p8-12', year: '1509 CE', title: 'Henry VIII King', description: 'Reign alters England\'s religious landscape.', imageUrl: getImg('King Henry VIII portrait', 'history'), phase: 'Phase 8' },
  { id: 'p8-13', year: '1517 CE', title: '95 Theses', description: 'Martin Luther starts Protestant Reformation.', imageUrl: getImg('Martin Luther Wittenberg church door', 'history'), phase: 'Phase 8' },
  { id: 'p8-14', year: '1519 CE', title: 'Magellan Circumnavigation', description: 'First voyage around the world begins.', imageUrl: getImg('Ferdinand Magellan ship circumnavigation', 'history'), phase: 'Phase 8' },
  { id: 'p8-15', year: '1521 CE', title: 'Conquest of Aztecs', description: 'Cortés defeats Aztec Empire for Spain.', imageUrl: getImg('Hernan Cortes Aztec meeting', 'history'), phase: 'Phase 8' },
  { id: 'p8-16', year: '1526 CE', title: 'Mughal Empire', description: 'Babur founds Islamic empire in India.', imageUrl: getImg('Babur Mughal Emperor', 'history'), phase: 'Phase 8' },
  { id: 'p8-17', year: '1533 CE', title: 'Conquest of Incas', description: 'Pizarro captures Inca Empire.', imageUrl: getImg('Francisco Pizarro Inca Atahualpa', 'history'), phase: 'Phase 8' },
  { id: 'p8-18', year: '1534 CE', title: 'Church of England', description: 'Act of Supremacy makes King head of church.', imageUrl: getImg('Henry VIII Parliament Act of Supremacy', 'history'), phase: 'Phase 8' },
  { id: 'p8-19', year: '1540 CE', title: 'Jesuits Founded', description: 'Ignatius of Loyola starts order for Counter-Reformation.', imageUrl: getImg('Ignatius of Loyola Jesuits', 'history'), phase: 'Phase 8' },
  { id: 'p8-20', year: '1543 CE', title: 'Copernican Theory', description: 'Heliocentric model proposed, turning point in science.', imageUrl: getImg('Copernicus heliocentric solar system', 'science history'), phase: 'Phase 8' },
  { id: 'p8-21', year: '1545 CE', title: 'Council of Trent', description: 'Catholic Counter-Reformation begins.', imageUrl: getImg('Council of Trent painting', 'history'), phase: 'Phase 8' },
  { id: 'p8-22', year: '1558 CE', title: 'Elizabeth I Reign', description: 'Golden Age of England begins.', imageUrl: getImg('Queen Elizabeth I portrait', 'history'), phase: 'Phase 8' },
  { id: 'p8-23', year: '1588 CE', title: 'Spanish Armada Defeated', description: 'English naval victory signals rise of power.', imageUrl: getImg('Spanish Armada battle', 'naval history'), phase: 'Phase 8' },
  { id: 'p8-24', year: '1600 CE', title: 'British East India Co.', description: 'Foundation for British rule in India laid.', imageUrl: getImg('East India Company ship', 'history'), phase: 'Phase 8' },
  { id: 'p8-25', year: '1603 CE', title: 'Tokugawa Shogunate', description: 'Edo period begins in Japan.', imageUrl: getImg('Tokugawa Ieyasu samurai', 'japanese history'), phase: 'Phase 8' },
  { id: 'p8-26', year: '1610 CE', title: 'Sidereus Nuncius', description: 'Galileo supports Copernican model with telescope.', imageUrl: getImg('Galileo telescope moon', 'science history'), phase: 'Phase 8' },
  { id: 'p8-27', year: '1618 CE', title: 'Thirty Years\' War', description: 'Devastating religious conflict in Europe.', imageUrl: getImg('Thirty Years War battle', 'history'), phase: 'Phase 8' },
  { id: 'p8-28', year: '1644 CE', title: 'Qing Dynasty', description: 'Manchus establish China\'s last dynasty.', imageUrl: getImg('Qing Dynasty emperor court', 'chinese history'), phase: 'Phase 8' },
  { id: 'p8-29', year: '1648 CE', title: 'Peace of Westphalia', description: 'Treaties establish state sovereignty.', imageUrl: getImg('Peace of Westphalia signing', 'history'), phase: 'Phase 8' },
  { id: 'p8-30', year: '1687 CE', title: 'Principia Mathematica', description: 'Newton establishes laws of motion.', imageUrl: getImg('Isaac Newton apple tree gravity', 'science history'), phase: 'Phase 8' },
  { id: 'p8-31', year: '1750 CE', title: 'Enlightenment Peak', description: 'Intellectual movement promoting reason.', imageUrl: getImg('Age of Enlightenment salon', 'history'), phase: 'Phase 8' },

  // --- PHASE 9: The Age of Revolutions ---
  {
    id: 'phase-9-marker',
    year: '1765 CE',
    title: 'The Age of Revolutions',
    description: '',
    imageUrl: getImg('Industrial and French Revolutions', 'history', true),
    phase: 'Phase 9',
    type: 'phase_marker'
  },
  { id: 'p9-1', year: '1765 CE', title: 'Improved Steam Engine', description: 'Watt perfects steam engine, driving Industrial Revolution.', imageUrl: getImg('James Watt steam engine', 'industrial revolution'), phase: 'Phase 9' },
  { id: 'p9-2', year: '1776 CE', title: 'Declaration of Independence', description: 'US colonies declare separation from Britain.', imageUrl: getImg('Signing Declaration of Independence', 'american history'), phase: 'Phase 9' },
  { id: 'p9-3', year: '1783 CE', title: 'Treaty of Paris', description: 'Britain recognizes US independence.', imageUrl: getImg('Treaty of Paris 1783', 'american history'), phase: 'Phase 9' },
  { id: 'p9-4', year: '1789 CE', title: 'French Revolution Begins', description: 'Storming of Bastille starts upheaval in France.', imageUrl: getImg('Storming of the Bastille', 'french revolution'), phase: 'Phase 9' },
  { id: 'p9-5', year: '1789 CE', title: 'Rights of Man', description: 'French Assembly establishes universal rights.', imageUrl: getImg('Declaration of Rights of Man', 'french history'), phase: 'Phase 9' },
  { id: 'p9-6', year: '1793 CE', title: 'Cotton Gin Invented', description: 'Whitney\'s machine expands slavery in US South.', imageUrl: getImg('Eli Whitney cotton gin', 'history'), phase: 'Phase 9' },
  { id: 'p9-7', year: '1796 CE', title: 'Smallpox Vaccine', description: 'Jenner pioneers vaccination.', imageUrl: getImg('Edward Jenner vaccination', 'medical history'), phase: 'Phase 9' },
  { id: 'p9-8', year: '1799 CE', title: 'Coup of 18 Brumaire', description: 'Napoleon takes power in France.', imageUrl: getImg('Napoleon Bonaparte coup', 'history'), phase: 'Phase 9' },
  { id: 'p9-9', year: '1803 CE', title: 'Louisiana Purchase', description: 'US doubles in size with territory from France.', imageUrl: getImg('Louisiana Purchase map', 'american history'), phase: 'Phase 9' },
  { id: 'p9-10', year: '1804 CE', title: 'Haitian Independence', description: 'First free black republic established.', imageUrl: getImg('Haitian Revolution Toussaint Louverture', 'history'), phase: 'Phase 9' },
  { id: 'p9-11', year: '1804 CE', title: 'Napoleon Emperor', description: 'Napoleon crowns himself, ending Republic.', imageUrl: getImg('Coronation of Napoleon', 'art'), phase: 'Phase 9' },
  { id: 'p9-12', year: '1807 CE', title: 'Slave Trade Abolished', description: 'Britain outlaws Atlantic slave trade.', imageUrl: getImg('Abolition of slave trade ship', 'history'), phase: 'Phase 9' },
  { id: 'p9-13', year: '1810 CE', title: 'Latin American Revolts', description: 'Colonies fight for independence from Spain.', imageUrl: getImg('Simon Bolivar revolution', 'history'), phase: 'Phase 9' },
  { id: 'p9-14', year: '1815 CE', title: 'Battle of Waterloo', description: 'Napoleon defeated, ending his rule.', imageUrl: getImg('Battle of Waterloo', 'military history'), phase: 'Phase 9' },
  { id: 'p9-15', year: '1815 CE', title: 'Congress of Vienna', description: 'Europe redraws map to restore balance.', imageUrl: getImg('Congress of Vienna painting', 'history'), phase: 'Phase 9' },
  { id: 'p9-16', year: '1825 CE', title: 'First Steam Railway', description: 'Stockton and Darlington Railway opens.', imageUrl: getImg('First steam locomotive railway', 'history'), phase: 'Phase 9' },
  { id: 'p9-17', year: '1833 CE', title: 'Slavery Abolished in Empire', description: 'Britain frees enslaved people in empire.', imageUrl: getImg('Emancipation of slaves British Empire', 'history'), phase: 'Phase 9' },
  { id: 'p9-18', year: '1837 CE', title: 'Telegraph Invented', description: 'Morse creates instant communication.', imageUrl: getImg('Samuel Morse telegraph', 'history'), phase: 'Phase 9' },
  { id: 'p9-19', year: '1839 CE', title: 'First Opium War', description: 'Britain defeats China, starting "Century of Humiliation".', imageUrl: getImg('First Opium War ship battle', 'history'), phase: 'Phase 9' },
  { id: 'p9-20', year: '1848 CE', title: 'Spring of Nations', description: 'Revolutions sweep Europe for reform.', imageUrl: getImg('Revolutions of 1848 barricades', 'history'), phase: 'Phase 9' },
  { id: 'p9-21', year: '1848 CE', title: 'Communist Manifesto', description: 'Marx and Engels outline communism.', imageUrl: getImg('Karl Marx Friedrich Engels', 'history'), phase: 'Phase 9' },
  { id: 'p9-22', year: '1853 CE', title: 'Perry Opens Japan', description: 'US forces end Japanese isolation.', imageUrl: getImg('Commodore Perry Black Ships Japan', 'history'), phase: 'Phase 9' },
  { id: 'p9-23', year: '1859 CE', title: 'Origin of Species', description: 'Darwin publishes theory of evolution.', imageUrl: getImg('Charles Darwin evolution biology', 'history'), phase: 'Phase 9' },
  { id: 'p9-24', year: '1861 CE', title: 'Serfdom Abolished', description: 'Russia frees serfs.', imageUrl: 'https://image.pollinations.ai/prompt/Russian%20serfs%20emancipation%20realistic?width=600&height=400&nologo=true', phase: 'Phase 9' },
  { id: 'p9-25', year: '1861 CE', title: 'US Civil War', description: 'North fights South over slavery and unity.', imageUrl: getImg('American Civil War battle', 'history'), phase: 'Phase 9' },
  { id: 'p9-26', year: '1868 CE', title: 'Meiji Restoration', description: 'Japan modernizes and industrializes.', imageUrl: getImg('Emperor Meiji Japan modernization', 'history'), phase: 'Phase 9' },
  { id: 'p9-27', year: '1869 CE', title: 'Suez Canal Opens', description: 'Connects Mediterranean and Red Sea.', imageUrl: getImg('Suez Canal opening ceremony 1869', 'history'), phase: 'Phase 9' },
  { id: 'p9-28', year: '1871 CE', title: 'Unification of Germany', description: 'German Empire created under Bismarck.', imageUrl: getImg('Proclamation of German Empire Versailles', 'history'), phase: 'Phase 9' },
  { id: 'p9-29', year: '1884 CE', title: 'Berlin Conference', description: 'Europe partitions Africa.', imageUrl: getImg('Berlin Conference Africa map', 'history'), phase: 'Phase 9' },
  { id: 'p9-30', year: '1914 CE', title: 'Franz Ferdinand Killed', description: 'Assassination triggers WWI.', imageUrl: getImg('Assassination of Archduke Franz Ferdinand', 'history'), phase: 'Phase 9' },

  // --- PHASE 10: The Early 20th Century ---
  {
    id: 'phase-10-marker',
    year: '1914 CE',
    title: 'The Early 20th Century',
    description: '',
    imageUrl: getImg('World War I and II 20th century', 'history', true),
    phase: 'Phase 10',
    type: 'phase_marker'
  },
  { id: 'p10-1', year: '1914', title: 'World War I Begins', description: 'Declarations of war trigger massive conflict.', imageUrl: getImg('World War I trench warfare', 'history'), phase: 'Phase 10' },
  { id: 'p10-2', year: '1915', title: 'Armenian Genocide', description: 'Systematic extermination by Ottoman Empire.', imageUrl: getImg('Armenian Genocide memorial', 'history'), phase: 'Phase 10' },
  { id: 'p10-3', year: '1916', title: 'Battle of the Somme', description: 'Bloody trench warfare battle.', imageUrl: getImg('Battle of the Somme soldiers', 'ww1'), phase: 'Phase 10' },
  { id: 'p10-4', year: '1917', title: 'US Enters WWI', description: 'US shifts balance of power.', imageUrl: getImg('US soldiers arrival WW1', 'history'), phase: 'Phase 10' },
  { id: 'p10-5', year: '1917', title: 'October Revolution', description: 'Bolsheviks seize power in Russia.', imageUrl: getImg('Lenin Russian Revolution', 'history'), phase: 'Phase 10' },
  { id: 'p10-6', year: '1918', title: 'WWI Armistice', description: 'Fighting ends, empires collapse.', imageUrl: getImg('WWI Armistice celebration', 'history'), phase: 'Phase 10' },
  { id: 'p10-7', year: '1919', title: 'Treaty of Versailles', description: 'Formal peace treaty imposes reparations.', imageUrl: getImg('Treaty of Versailles signing Hall of Mirrors', 'history'), phase: 'Phase 10' },
  { id: 'p10-8', year: '1920', title: 'League of Nations', description: 'International peace organization formed.', imageUrl: getImg('League of Nations Geneva', 'history'), phase: 'Phase 10' },
  { id: 'p10-9', year: '1922', title: 'March on Rome', description: 'Mussolini seizes power in Italy.', imageUrl: getImg('Mussolini March on Rome', 'history'), phase: 'Phase 10' },
  { id: 'p10-10', year: '1927', title: 'First TV Broadcast', description: 'Farnsworth transmits electronic image.', imageUrl: getImg('Philo Farnsworth first television', 'history'), phase: 'Phase 10' },
  { id: 'p10-11', year: '1928', title: 'Penicillin Discovered', description: 'Fleming finds first antibiotic.', imageUrl: getImg('Alexander Fleming penicillin lab', 'history'), phase: 'Phase 10' },
  { id: 'p10-12', year: '1929', title: 'Black Tuesday', description: 'Stock market crash triggers Great Depression.', imageUrl: getImg('Wall Street Crash 1929 crowds', 'history'), phase: 'Phase 10' },
  { id: 'p10-13', year: '1931', title: 'Japan Invades Manchuria', description: 'Start of Japanese aggression in Asia.', imageUrl: getImg('Japanese troops Manchuria', 'history'), phase: 'Phase 10' },
  { id: 'p10-14', year: '1933', title: 'Hitler Chancellor', description: 'Nazis take power in Germany.', imageUrl: getImg('Hitler becoming Chancellor 1933', 'history'), phase: 'Phase 10' },
  { id: 'p10-15', year: '1935', title: 'Italy Invades Ethiopia', description: 'League of Nations fails to stop aggression.', imageUrl: getImg('Italian invasion of Ethiopia', 'history'), phase: 'Phase 10' },
  { id: 'p10-16', year: '1936', title: 'Spanish Civil War', description: 'Republicans vs Nationalists conflict.', imageUrl: getImg('Spanish Civil War soldiers', 'history'), phase: 'Phase 10' },
  { id: 'p10-17', year: '1937', title: 'Second Sino-Japanese War', description: 'Full-scale invasion of China.', imageUrl: getImg('Second Sino-Japanese War battle', 'history'), phase: 'Phase 10' },
  { id: 'p10-18', year: '1938', title: 'Anschluss', description: 'Germany annexes Austria.', imageUrl: getImg('Anschluss Austria Germany 1938', 'history'), phase: 'Phase 10' },
  { id: 'p10-19', year: '1938', title: 'Munich Agreement', description: 'Appeasement allows annexation of Sudetenland.', imageUrl: getImg('Chamberlain Munich Agreement peace for our time', 'history'), phase: 'Phase 10' },
  { id: 'p10-20', year: '1939', title: 'WWII Begins', description: 'Germany invades Poland.', imageUrl: getImg('German invasion of Poland 1939', 'ww2'), phase: 'Phase 10' },
  { id: 'p10-21', year: '1940', title: 'Battle of Britain', description: 'RAF defends UK from Luftwaffe.', imageUrl: getImg('Spitfire Battle of Britain dogfight', 'ww2'), phase: 'Phase 10' },
  { id: 'p10-22', year: '1941', title: 'Lend-Lease Act', description: 'US supplies Allies with war material.', imageUrl: getImg('Lend-Lease supplies ships', 'ww2'), phase: 'Phase 10' },
  { id: 'p10-23', year: '1941', title: 'Pearl Harbor', description: 'Japan attacks US, US enters war.', imageUrl: getImg('Pearl Harbor attack ships burning', 'ww2'), phase: 'Phase 10' },
  { id: 'p10-24', year: '1942', title: 'The Holocaust', description: 'Nazis systematize genocide of Jews.', imageUrl: getImg('Holocaust memorial shoes', 'history'), phase: 'Phase 10' },
  { id: 'p10-25', year: '1942', title: 'Battle of Midway', description: 'US defeats Japanese Navy, turning point.', imageUrl: getImg('Battle of Midway aircraft carriers', 'ww2'), phase: 'Phase 10' },
  { id: 'p10-26', year: '1943', title: 'Stalingrad Ends', description: 'Soviet victory turns Eastern Front.', imageUrl: getImg('Battle of Stalingrad ruins', 'ww2'), phase: 'Phase 10' },
  { id: 'p10-27', year: '1944', title: 'D-Day', description: 'Allies land in Normandy.', imageUrl: getImg('D-Day Normandy landing beaches', 'ww2'), phase: 'Phase 10' },
  { id: 'p10-28', year: '1945', title: 'Yalta Conference', description: 'Allies plan post-war Europe.', imageUrl: getImg('Yalta Conference Churchill Roosevelt Stalin', 'history'), phase: 'Phase 10' },
  { id: 'p10-29', year: '1945', title: 'Mussolini Executed', description: 'Italian dictator killed by partisans.', imageUrl: getImg('Mussolini demise news', 'history'), phase: 'Phase 10' },
  { id: 'p10-30', year: '1945', title: 'Hitler Suicide', description: 'Hitler dies in Berlin bunker.', imageUrl: getImg('Berlin bunker 1945 ruins', 'ww2'), phase: 'Phase 10' },
  { id: 'p10-31', year: '1945', title: 'Atomic Bombings', description: 'Hiroshima and Nagasaki bombed, war ends.', imageUrl: getImg('Atomic bomb mushroom cloud Hiroshima', 'ww2'), phase: 'Phase 10' },

  // --- PHASE 11: The Cold War Era ---
  {
    id: 'phase-11-marker',
    year: '1945',
    title: 'The Cold War Era',
    description: '',
    imageUrl: getImg('Cold War nuclear standoff Berlin Wall', 'history', true),
    phase: 'Phase 11',
    type: 'phase_marker'
  },
  { id: 'p11-1', year: '1945', title: 'UN Founded', description: 'Global body replaces League of Nations.', imageUrl: getImg('United Nations headquarters flags', 'history'), phase: 'Phase 11' },
  { id: 'p11-2', year: '1946', title: 'Nuremberg Trials', description: 'Nazi leaders prosecuted for war crimes.', imageUrl: getImg('Nuremberg Trials courtroom', 'history'), phase: 'Phase 11' },
  { id: 'p11-3', year: '1947', title: 'Truman Doctrine', description: 'US policy to contain communism.', imageUrl: getImg('Harry Truman speech Cold War', 'history'), phase: 'Phase 11' },
  { id: 'p11-4', year: '1947', title: 'Partition of India', description: 'India and Pakistan created.', imageUrl: getImg('Partition of India refugees train', 'history'), phase: 'Phase 11' },
  { id: 'p11-5', year: '1948', title: 'Israel Established', description: 'Jewish state proclaimed, conflict begins.', imageUrl: getImg('Declaration of Independence Israel 1948', 'history'), phase: 'Phase 11' },
  { id: 'p11-6', year: '1948', title: 'Berlin Blockade', description: 'Soviets block access, Airlift begins.', imageUrl: getImg('Berlin Airlift planes', 'cold war'), phase: 'Phase 11' },
  { id: 'p11-7', year: '1949', title: 'NATO Formed', description: 'Western military alliance established.', imageUrl: getImg('NATO flag signing 1949', 'history'), phase: 'Phase 11' },
  { id: 'p11-8', year: '1949', title: 'Chinese Revolution', description: 'Mao establishes People\'s Republic.', imageUrl: getImg('Mao Zedong proclamation Tiananmen', 'history'), phase: 'Phase 11' },
  { id: 'p11-9', year: '1950', title: 'Korean War', description: 'Conflict between North and South Korea.', imageUrl: getImg('Korean War soldiers', 'history'), phase: 'Phase 11' },
  { id: 'p11-10', year: '1951', title: 'Libya Independent', description: 'Early success in African decolonization.', imageUrl: getImg('Libya independence flag', 'history'), phase: 'Phase 11' },
  { id: 'p11-11', year: '1953', title: 'Stalin Dies', description: 'De-Stalinization begins in USSR.', imageUrl: getImg('Joseph Stalin funeral', 'history'), phase: 'Phase 11' },
  { id: 'p11-12', year: '1955', title: 'Warsaw Pact', description: 'Soviet counter-alliance to NATO.', imageUrl: getImg('Warsaw Pact signing', 'cold war'), phase: 'Phase 11' },
  { id: 'p11-13', year: '1956', title: 'Suez Crisis', description: 'Crisis shows decline of European powers.', imageUrl: getImg('Suez Crisis ships canal', 'history'), phase: 'Phase 11' },
  { id: 'p11-14', year: '1957', title: 'Sputnik Launch', description: 'First satellite sparks Space Race.', imageUrl: getImg('Sputnik satellite space', 'history'), phase: 'Phase 11' },
  { id: 'p11-15', year: '1959', title: 'Cuban Revolution', description: 'Castro establishes communist state.', imageUrl: getImg('Fidel Castro Cuban Revolution', 'history'), phase: 'Phase 11' },
  { id: 'p11-16', year: '1960', title: 'Year of Africa', description: '17 nations gain independence.', imageUrl: getImg('African independence celebrations 1960', 'history'), phase: 'Phase 11' },
  { id: 'p11-17', year: '1961', title: 'Berlin Wall', description: 'Barrier divides East and West Berlin.', imageUrl: getImg('Berlin Wall construction', 'cold war'), phase: 'Phase 11' },
  { id: 'p11-18', year: '1962', title: 'Cuban Missile Crisis', description: 'Nuclear standoff between US and USSR.', imageUrl: getImg('Cuban Missile Crisis u2 photo', 'cold war'), phase: 'Phase 11' },
  { id: 'p11-19', year: '1963', title: 'JFK Assassinated', description: 'President Kennedy killed in Dallas.', imageUrl: getImg('JFK motorcade Dallas', 'history'), phase: 'Phase 11' },
  { id: 'p11-20', year: '1964', title: 'Gulf of Tonkin', description: 'US escalates Vietnam War.', imageUrl: getImg('Vietnam War helicopters', 'history'), phase: 'Phase 11' },
  { id: 'p11-21', year: '1966', title: 'Cultural Revolution', description: 'Mao purges rivals in China.', imageUrl: getImg('Cultural Revolution propaganda China', 'history'), phase: 'Phase 11' },
  { id: 'p11-22', year: '1967', title: 'Six-Day War', description: 'Israel defeats Arab neighbors.', imageUrl: getImg('Six Day War tanks', 'history'), phase: 'Phase 11' },
  { id: 'p11-23', year: '1968', title: 'Prague Spring Crushed', description: 'Soviets invade Czechoslovakia.', imageUrl: getImg('Soviet tanks Prague 1968', 'history'), phase: 'Phase 11' },
  { id: 'p11-24', year: '1969', title: 'Apollo 11', description: 'Armstrong walks on Moon.', imageUrl: getImg('Apollo 11 moon landing astronaut', 'history'), phase: 'Phase 11' },
  { id: 'p11-25', year: '1972', title: 'SALT I Treaty', description: 'Arms limitation marks Détente.', imageUrl: getImg('Nixon Brezhnev SALT treaty', 'cold war'), phase: 'Phase 11' },
  { id: 'p11-26', year: '1979', title: 'Iranian Revolution', description: 'Islamic Republic established.', imageUrl: getImg('Iranian Revolution crowds 1979', 'history'), phase: 'Phase 11' },
  { id: 'p11-27', year: '1979', title: 'Soviet Afghan Invasion', description: 'USSR invades Afghanistan.', imageUrl: getImg('Soviet tanks Afghanistan', 'history'), phase: 'Phase 11' },
  { id: 'p11-28', year: '1986', title: 'Chernobyl', description: 'Nuclear disaster in Ukraine.', imageUrl: getImg('Chernobyl reactor ruins', 'history'), phase: 'Phase 11' },
  { id: 'p11-29', year: '1989', title: 'Fall of Berlin Wall', description: 'Symbol of Cold War ends.', imageUrl: getImg('Fall of Berlin Wall crowds', 'history'), phase: 'Phase 11' },
  { id: 'p11-30', year: '1991', title: 'USSR Dissolves', description: 'Cold War officially ends.', imageUrl: getImg('Soviet flag lowered Kremlin', 'history'), phase: 'Phase 11' },

  // --- PHASE 12: The Modern Digital Age ---
  {
    id: 'phase-12-marker',
    year: '1991',
    title: 'The Modern Digital Age',
    description: '',
    imageUrl: getImg('Digital Age Internet Computer Future', 'technology', true),
    phase: 'Phase 12',
    type: 'phase_marker'
  },
  { id: 'p12-1', year: '1991', title: 'Māori Language Act', description: 'Indigenous language revitalization in NZ.', imageUrl: getImg('Maori culture New Zealand', 'culture'), phase: 'Phase 12' },
  { id: 'p12-2', year: '1992', title: 'EU Created', description: 'Maastricht Treaty forms European Union.', imageUrl: getImg('European Union flags Brussels', 'politics'), phase: 'Phase 12' },
  { id: 'p12-3', year: '1991', title: 'WWW Protocol', description: 'Berners-Lee introduces Web standards.', imageUrl: getImg('Tim Berners Lee first website', 'technology'), phase: 'Phase 12' },
  { id: 'p12-4', year: '1994', title: 'Apartheid Ends', description: 'Mandela elected in South Africa.', imageUrl: getImg('Nelson Mandela voting 1994', 'history'), phase: 'Phase 12' },
  { id: 'p12-5', year: '1995', title: 'WTO Established', description: 'Global trade body formed.', imageUrl: getImg('World Trade Organization meeting', 'politics'), phase: 'Phase 12' },
  { id: 'p12-6', year: '1997', title: 'Kyoto Protocol', description: 'Treaty to limit greenhouse gases.', imageUrl: getImg('Kyoto Protocol climate change', 'politics'), phase: 'Phase 12' },
  { id: 'p12-7', year: '1998', title: 'Google Founded', description: 'Search engine launched.', imageUrl: getImg('Google early logo server', 'technology'), phase: 'Phase 12' },
  { id: 'p12-8', year: '2000', title: 'ISS Activated', description: 'Permanent human presence in space.', imageUrl: getImg('International Space Station orbit', 'space'), phase: 'Phase 12' },
  { id: 'p12-9', year: '2001', title: '9/11 Attacks', description: 'Terror attacks on US, War on Terror.', imageUrl: getImg('9/11 memorial tribute light', 'history'), phase: 'Phase 12' },
  { id: 'p12-10', year: '2001', title: 'China Joins WTO', description: 'Accelerates global economic integration.', imageUrl: getImg('China shipping port trade', 'economy'), phase: 'Phase 12' },
  { id: 'p12-11', year: '2003', title: 'Human Genome Project', description: 'DNA mapping completed.', imageUrl: getImg('Human DNA double helix digital', 'science'), phase: 'Phase 12' },
  { id: 'p12-12', year: '2004', title: 'Facebook Founded', description: 'Social networking rises.', imageUrl: getImg('Facebook early interface concept', 'technology'), phase: 'Phase 12' },
  { id: 'p12-13', year: '2007', title: 'iPhone Released', description: 'Smartphone era begins.', imageUrl: getImg('Steve Jobs first iPhone', 'technology'), phase: 'Phase 12' },
  { id: 'p12-14', year: '2008', title: 'Global Financial Crisis', description: 'Recession triggered by housing collapse.', imageUrl: getImg('Stock market crash 2008 graph', 'economy'), phase: 'Phase 12' },
  { id: 'p12-15', year: '2009', title: 'Bitcoin Launched', description: 'First cryptocurrency released.', imageUrl: getImg('Bitcoin physical coin blockchain', 'technology'), phase: 'Phase 12' },
  { id: 'p12-16', year: '2010', title: 'Arab Spring', description: 'Pro-democracy protests in Middle East.', imageUrl: getImg('Arab Spring protests Tahrir Square', 'history'), phase: 'Phase 12' },
  { id: 'p12-17', year: '2011', title: '7 Billion People', description: 'Global population milestone.', imageUrl: getImg('Crowded city earth population', 'society'), phase: 'Phase 12' },
  { id: 'p12-18', year: '2012', title: 'Higgs Boson Confirmed', description: 'Particle physics breakthrough.', imageUrl: getImg('Higgs Boson collider visual', 'science'), phase: 'Phase 12' },
  { id: 'p12-19', year: '2013', title: 'Snowden Leaks', description: 'Surveillance programs revealed.', imageUrl: getImg('Edward Snowden digital surveillance', 'technology'), phase: 'Phase 12' },
  { id: 'p12-20', year: '2014', title: 'Annexation of Crimea', description: 'Russia seizes territory from Ukraine.', imageUrl: getImg('Crimea map russia flag', 'politics'), phase: 'Phase 12' },
  { id: 'p12-21', year: '2015', title: 'Paris Agreement', description: 'Global climate change pact.', imageUrl: getImg('Paris Climate Agreement gavel', 'environment'), phase: 'Phase 12' },
  { id: 'p12-22', year: '2016', title: 'CRISPR Rising', description: 'Gene editing technology adopts.', imageUrl: getImg('CRISPR gene editing DNA', 'science'), phase: 'Phase 12' },
  { id: 'p12-23', year: '2016', title: 'Brexit Vote', description: 'UK votes to leave EU.', imageUrl: getImg('Brexit vote UK EU flags', 'politics'), phase: 'Phase 12' },
  { id: 'p12-24', year: '2017', title: '#MeToo Movement', description: 'Global movement against abuse.', imageUrl: getImg('MeToo protest signs', 'society'), phase: 'Phase 12' },
  { id: 'p12-25', year: '2019', title: 'Black Hole Image', description: 'First direct visual evidence.', imageUrl: getImg('M87 Black Hole first image', 'space'), phase: 'Phase 12' },
  { id: 'p12-26', year: '2020', title: 'COVID-19 Pandemic', description: 'Global lockdowns and vaccines.', imageUrl: getImg('Coronavirus molecule medical', 'science'), phase: 'Phase 12' },
  { id: 'p12-27', year: '2022', title: 'Invasion of Ukraine', description: 'Russia invades, conflict in Europe.', imageUrl: getImg('Ukraine flag destroyed buildings', 'history'), phase: 'Phase 12' },
  { id: 'p12-28', year: '2022', title: '8 Billion People', description: 'Population reaches new milestone.', imageUrl: getImg('Global population growth map', 'society'), phase: 'Phase 12' },
  { id: 'p12-29', year: '2022', title: 'ChatGPT Launched', description: 'Generative AI revolution begins.', imageUrl: getImg('ChatGPT AI interface brain', 'technology'), phase: 'Phase 12' },
  { id: 'p12-30', year: '2023', title: 'AI Regulation', description: 'Governments draft AI rules.', imageUrl: getImg('AI regulation gavel robot', 'technology'), phase: 'Phase 12' },
  { id: 'p12-31', year: '2025', title: 'The Present Day', description: 'End of known history.', imageUrl: getImg('Futuristic city sustainable future', 'concept art'), phase: 'Phase 12' },
];
