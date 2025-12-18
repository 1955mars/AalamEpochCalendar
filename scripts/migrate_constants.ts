
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE_PATH = path.join(__dirname, '../constants.source.ts');
const DEST_PATH = path.join(__dirname, '../constants.ts');

let content = fs.readFileSync(SOURCE_PATH, 'utf-8');

// Regex to match: id: 'some-id', ... imageUrl: VALUE
// Capture group 1: everything from id up to imageUrl:
// Capture group 2: the ID string
// Capture group 3: the value of imageUrl (up to comma, newline, or brace)
// We use a global regex with 's' (dotAll) flag logic via [\s\S]
// Careful with greedy matches.

// Pattern explanation:
// id:\s*'([^']+)'   -> matches id: 'foo' and captures 'foo'
// (?:(?!imageUrl).)*? -> matches anything that is NOT "imageUrl" minimally
// imageUrl:\s*      -> matches imageUrl:
// (?:getImg\([^)]+\)|'[^']+'|"[^"]+") -> matches getImg(...) OR 'string' OR "string"
// We want to replace the value part.

// Let's iterate manually or use a replace function.
// The structure is fairly consistent.

const newContent = content.replace(
    /(id:\s*'([^']+)'[\s\S]*?imageUrl:\s*)(?:getImg\([^)]+\)|'[^']+'|"[^"]+")/g,
    (match, prefix, id) => {
        return `${prefix}(import.meta.env?.BASE_URL || '/') + 'images/${id}.jpg'`;
    }
);

// Also remove the getImg function definition
// It starts with "const getImg =" and ends with "};" around line 26.
// We can just comment it out or try to remove it.
// Regex for getImg definition:
// const getImg =[\s\S]*?};
const cleanedContent = newContent.replace(
    /\/\/\s*Helper to generate consistent[\s\S]*?const getImg =[\s\S]*?};/g,
    '// getImg helper removed (images are now static)'
);

fs.writeFileSync(DEST_PATH, cleanedContent);
console.log('Migrated constants.ts to use local images.');
