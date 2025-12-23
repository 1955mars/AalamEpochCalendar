import { GraphEngine } from '../utils/GraphEngine';

const graph = new GraphEngine();

// Test 1: Downstream (Printing Press)
const ROOT_ID = 'modern-4'; // Printing Press (approx ID, need to verify) or let's use a known one. 
// Actually 'modern-4' is likely correct but let's check one we know exists.
// Let's use 'money-shekel' from Money journey if unique.

console.log('--- GRAPH DEMO ---');

// Let's find "The Printing Press" by title to be safe
const press = graph['eventMap'].get('1439-printing-press') || Array.from(graph['eventMap'].values()).find(e => e.title.includes('Printing Press'));

if (press) {
    console.log(`\n📚 Impacts of: ${press.title} (${press.id})`);
    const effects = graph.getEffects(press.id);
    effects.forEach(e => {
        console.log(`   -> [${e.connection.type}] ${e.event.title}`);
    });
} else {
    console.log('Printing Press not found');
}

// Test 2: Ancestry (iPhone)
const iphone = Array.from(graph['eventMap'].values()).find(e => e.title.includes('iPhone'));
if (iphone) {
    console.log(`\n📱 Ancestry of: ${iphone.title} (${iphone.id})`);
    const ancestry = graph.traceAncestry(iphone.id);
    ancestry.forEach((e, i) => {
        console.log(`   ${i + 1}. ${e.title} (${e.year})`);
    });
}
