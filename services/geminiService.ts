import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedEventData } from '../types';

const AI_MODEL_NAME = 'gemini-2.5-flash';

export const generateTimelineEvents = async (topic: string): Promise<GeneratedEventData[]> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `Generate a chronological timeline of 5 to 8 major events related to the topic: "${topic}". 
  Focus on key historical moments or milestones. 
  Keep descriptions concise (under 30 words).
  For 'imageKeyword', provide a single noun that best represents the event visually (e.g., 'rocket', 'computer', 'flag') to be used for image search.`;

  try {
    const response = await ai.models.generateContent({
      model: AI_MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              year: { type: Type.STRING, description: "The year or date of the event" },
              title: { type: Type.STRING, description: "Short title of the event" },
              description: { type: Type.STRING, description: "Concise description of what happened" },
              imageKeyword: { type: Type.STRING, description: "A single keyword to find a relevant image" }
            },
            required: ["year", "title", "description", "imageKeyword"]
          }
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("No text returned from Gemini");
    }

    const data = JSON.parse(jsonText) as GeneratedEventData[];
    return data;

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};