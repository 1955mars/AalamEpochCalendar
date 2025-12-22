
const fs = require('fs');
const path = require('path');

const allEventsPath = path.join(__dirname, 'data/allEvents.ts');
const imagesDir = path.join(__dirname, 'public/images');

const content = fs.readFileSync(allEventsPath, 'utf8');

// Match 'images/XXXX.jpg' inside quotes
const imageRegex = /['"]images\/([^'"]+)['"]/g;

const existingImages = new Set(fs.readdirSync(imagesDir));

const missingImages = [];
console.log('Checking for missing images...');
let match;
while ((match = imageRegex.exec(content)) !== null) {
    if (!existingImages.has(match[1])) {
        missingImages.push(match[1]);
    }
}



const https = require('https');
// fs is already declared


const uniqueMissing = [...new Set(missingImages)];
console.log('Missing images:', uniqueMissing);
console.log(`Found ${uniqueMissing.length} missing images.`);

// Function to find title for an image
function findTitleForImage(imageName) {
    // Escape for regex
    const escapedName = imageName.replace(/\./g, '\\.');
    // Look for a block containing the image name.
    // We search for "title: '...'" then some content then the image name
    // This is a bit heuristic.
    // Alternatively, just search backwards from the image usage.

    const index = content.indexOf(imageName);
    if (index === -1) return 'Timeline Event';

    // Look backwards for "title:"
    const substring = content.substring(0, index);
    const titleMatch = substring.match(/title:\s*['"]([^'"]+)['"]/g);

    if (titleMatch && titleMatch.length > 0) {
        // Get the last one defined before the image
        const lastTitle = titleMatch[titleMatch.length - 1];
        const match = /title:\s*['"]([^'"]+)['"]/.exec(lastTitle);
        return match ? match[1] : 'Timeline Event';
    }
    return 'Timeline Event';
}

async function downloadImage(filename) {
    const title = findTitleForImage(filename);
    const prompt = `historically accurate ${title}, cinematic lighting, photorealistic, 8k`;
    const encodedPrompt = encodeURIComponent(prompt);
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
    const dest = path.join(imagesDir, filename);

    console.log(`Downloading ${filename} for "${title}"...`);

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                console.error(`Failed to download ${url}: ${response.statusCode}`);
                file.close();
                fs.unlink(dest, () => { }); // Delete partial
                resolve(false);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    console.log(`Saved ${filename}`);
                    resolve(true);
                });
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            console.error(`Error downloading ${filename}:`, err.message);
            resolve(false);
        });
    });
}


async function processMissing() {
    const checkOnly = process.argv.includes('--check');

    if (uniqueMissing.length === 0) {
        console.log('All images verified.');
        return;
    }

    if (checkOnly) {
        console.error(`ERROR: Found ${uniqueMissing.length} missing images.`);
        process.exit(1);
    }

    for (const img of uniqueMissing) {
        await downloadImage(img);
    }
    console.log('Done downloading.');
}

processMissing();


