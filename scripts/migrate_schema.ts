
import fs from 'fs';
import path from 'path';

const TARGET_PATH = path.resolve(process.cwd(), 'constants.ts');

function migrate() {
    console.log('Reading constants.ts...');
    let content = fs.readFileSync(TARGET_PATH, 'utf-8');

    // Regex to find imageUrl: "..."
    // We want to replace it with media: { type: "image", url: "..." }

    // Pattern: imageUrl: (import.meta.env?.BASE_URL || '/') + 'path/to/image.jpg'
    // We want to wrap the value in media: { type: 'image', url: ... }

    // Regex explanation:
    // imageUrl:\s*                                     -> key
    // (                                                -> capture group 1 (the whole value expression)
    //   \(import\.meta\.env\?\.BASE_URL\s*\|\|\s*'/'\) -> the prefix part
    //   \s*\+\s*                                       -> the + operator
    //   (['"])([^'"]+)\2                               -> the string literal path (group 2 quote, group 3 path)
    // )

    // Actually, simpler: just match `imageUrl:` and capture everything until the comma or newline?
    // But safely, let's match the specific known prefix.

    const regex = /imageUrl:\s*(\(import\.meta\.env\?\.BASE_URL\s*\|\|\s*'\/[^']*'\)\s*\+\s*['"][^'"]+['"])/g;

    let matchCount = 0;
    const newContent = content.replace(regex, (match, valueExpression) => {
        matchCount++;
        return `media: { type: 'image', url: ${valueExpression} }`;
    });

    if (matchCount > 0) {
        console.log(`Migrating ${matchCount} events...`);
        fs.writeFileSync(TARGET_PATH, newContent, 'utf-8');
        console.log('Done!');
    } else {
        console.log('No legacy imageUrl fields found.');
    }
}

migrate();
