import fs from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'data', 'pending_assets.json');
const pending = JSON.parse(fs.readFileSync(FILE, 'utf8'));

// Filter for AI related events
const aiPending = pending.filter((p: any) =>
    p.status === 'pending' &&
    (p.title.toLowerCase().includes('ai') ||
        p.description.toLowerCase().includes('intelligence') ||
        p.imagePath.includes('ai-') ||
        p.title.includes('Computer') ||
        p.title.includes('Neural') ||
        p.title.includes('Logic'))
);

console.log(JSON.stringify(aiPending, null, 2));
