
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config({ path: '.env.local' });
const API_KEY = process.env.GEMINI_API_KEY;
const client = new GoogleGenAI({ apiKey: API_KEY });

async function main() {
    try {
        const response = await client.models.list();
        // Check structure of response
        console.log('Models:', JSON.stringify(response, null, 2));
    } catch (error) {
        console.error('Error listing models:', error);
    }
}

main();
