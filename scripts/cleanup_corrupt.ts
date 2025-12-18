import fs from 'fs';
import path from 'path';
import https from 'https';

const CORRUPT_FILES = [
    'public/images/p12-26.jpg',
    'public/images/p12-31.jpg',
    'public/images/p12-24.jpg',
    'public/images/71.jpg',
    'public/images/p12-20.jpg',
    'public/images/70.jpg',
    'public/images/66.jpg',
    'public/images/72.jpg',
    'public/images/p12-23.jpg',
    'public/images/p12-22.jpg',
    'public/images/73.jpg',
    'public/images/p10-1.jpg',
    'public/images/p10-4.jpg',
    'public/images/p4-5.jpg',
    'public/images/p4-4.jpg',
    'public/images/25.jpg',
    'public/images/p12-13.jpg',
    'public/images/69.jpg',
    'public/images/p12-10.jpg',
    'public/images/p12-15.jpg',
    'public/images/p12-14.jpg',
    'public/images/p12-16.jpg'
];

async function downloadImage(url: string, dest: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                fs.unlink(dest, () => { }); // Delete empty file
                reject(new Error(`Server responded with ${response.statusCode}: ${response.statusMessage}`));
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

// We need to map these filenames back to prompts/URLs.
// Since we don't have the map here easily, we will loop through constants.ts logic
// OR simpler: Delete these files and re-run the main script?
// The main script likely checking for existence. if we delete them, it will re-fetch.

console.log('Deleting corrupt files...');
CORRUPT_FILES.forEach(file => {
    try {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
            console.log(`Deleted: ${file}`);
        }
    } catch (e) {
        console.error(`Error deleting ${file}:`, e);
    }
});

console.log('Done. Please re-run "npm run generate:images" to fetch these specific files.');
