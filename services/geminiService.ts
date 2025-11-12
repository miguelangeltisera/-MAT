import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAI = () => {
  if (!ai) {
    const apiKey = (window as any).process?.env?.API_KEY;
    if (!apiKey || apiKey === 'TU_API_KEY_AQUÍ') {
      throw new Error("ERROR: La clave de API de Gemini no está configurada. Por favor, abre el archivo `index.html`, busca la sección de script al final y reemplaza 'TU_API_KEY_AQUÍ' con tu clave real obtenida de Google AI Studio.");
    }
    ai = new GoogleGenAI({ apiKey: apiKey });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = "Eres un asistente de IA para CINE & TV MAT HYPERMEDIA, una productora audiovisual de vanguardia y futurista. Tu nombre es 'MAT-X'. Tu tono es profesional, tecnológico, creativo y servicial. Responde preguntas sobre producción de video, cinematografía digital, post-producción, efectos visuales (VFX), animación 3D, realidad virtual (VR) y nuestros servicios. Inspira confianza y resalta nuestra capacidad para crear contenido impactante e innovador. Sé conciso y atractivo.";

export const startChat = (history: ChatMessage[]) => {
  const aiInstance = getAI();
  chat = aiInstance.chats.create({
    model: 'gemini-2.5-flash',
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
    if(!chat) throw new Error("Chat no inicializado. El servicio de IA podría estar mal configurado.");
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error al comunicarse con la API de Gemini:", error);
    let errorMessage = "Lo siento, estoy encontrando una malfunción en el sistema. Por favor, inténtalo de nuevo en unos momentos.";
    if (error instanceof Error && (error.message.includes('API key') || error.message.includes('permission'))) {
        errorMessage = "Parece que hay un problema con la configuración de la API. Por favor, contacta con el soporte técnico.";
    } else if (error instanceof Error) {
        errorMessage = `Ha ocurrido un error de comunicación. [${error.name}] Por favor, comprueba tu conexión de red y vuelve a intentarlo.`;
    }
    return errorMessage;
  }
};