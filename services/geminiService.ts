import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAI = () => {
  if (!ai) {
    // FIX: The API key must be obtained exclusively from the environment variable `process.env.API_KEY`.
    if (!process.env.API_KEY) {
      throw new Error("Falta la clave de API de Gemini. Por favor, verifica la configuración de tu entorno y asegúrate de que la variable API_KEY esté definida.");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = "Eres un asistente de IA para CINE & TV MAT HYPERMEDIA, una productora audiovisual de vanguardia y futurista. Tu nombre es 'MAT-X'. Tu tono es profesional, tecnológico, creativo y servicial. Responde preguntas sobre producción de video, cinematografía digital, post-producción, efectos visuales (VFX), animación 3D, realidad virtual (VR) y nuestros servicios. Inspira confianza y resalta nuestra capacidad para crear contenido impactante e innovador. Sé conciso y atractivo.";

export const startChat = (history: ChatMessage[]) => {
  const aiInstance = getAI();
  chat = aiInstance.chats.create({
    model: 'gemini-2.5-flash',
    // FIX: `systemInstruction` must be inside a `config` object.
    config: {
        systemInstruction: SYSTEM_INSTRUCTION,
    },
    history: history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    })),
  });
};

export const getChatResponse = async (message: string): Promise<string> => {
  if (!chat) {
    startChat([]);
  }
  
  try {
    if(!chat) throw new Error("Chat not initialized");
    // FIX: `sendMessage` expects an object with a `message` property, not a string.
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error getting chat response:", error);
    return "Lo siento, estoy experimentando una sobrecarga en mis circuitos. Por favor, inténtalo de nuevo en unos momentos.";
  }
};