import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

let chat: Chat | null = null;

const SYSTEM_INSTRUCTION = "Eres un asistente de IA para CINE & TV MAT HYPERMEDIA, una productora audiovisual de vanguardia y futurista. Tu nombre es 'MAT-X'. Tu tono es profesional, tecnológico, creativo y servicial. Responde preguntas sobre producción de video, cinematografía digital, post-producción, efectos visuales (VFX), animación 3D, realidad virtual (VR) y nuestros servicios. Inspira confianza y resalta nuestra capacidad para crear contenido impactante e innovador. Sé conciso y atractivo.";

/**
 * Crea y devuelve una instancia de GoogleGenAI.
 * Se llama cada vez que se inicia un chat para garantizar que se utiliza la clave de API más reciente.
 * @returns {GoogleGenAI} Una instancia del cliente de IA.
 * @throws {Error} Si la inicialización falla.
 */
const getAiInstance = (): GoogleGenAI => {
    try {
        // Siempre crea una nueva instancia para recoger la última API key del entorno.
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        return ai;
    } catch(e) {
        console.error("Fallo al inicializar GoogleGenAI. La API_KEY podría no estar configurada.", e);
        throw new Error("No se pudo inicializar la IA. Verifica la configuración de la clave API.");
    }
}

/**
 * Inicia una nueva sesión de chat.
 * Crea el objeto de chat que mantiene el historial de la conversación.
 * @param {ChatMessage[]} history - El historial de mensajes existente para continuar la conversación.
 */
export const startChat = (history: ChatMessage[]) => {
  const ai = getAiInstance(); // Obtiene una instancia nueva de IA con la clave actual.
  
  chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
        systemInstruction: SYSTEM_INSTRUCTION,
    },
    // Mapea correctamente el historial para incluir el array 'parts'
    history: history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    })),
  });
};

/**
 * Envía un mensaje a la sesión de chat actual y obtiene una respuesta.
 * @param {string} message - El mensaje del usuario.
 * @returns {Promise<string>} La respuesta del modelo de IA.
 * @throws {Error} Si el chat no está inicializado o si hay un error en la API.
 */
export const getChatResponse = async (message: string): Promise<string> => {
  if (!chat) {
    // Si se llama a getChatResponse sin un chat inicializado, es un estado inesperado.
    // El componente de la UI es responsable de llamar a startChat primero.
    throw new Error("Chat no inicializado. El servicio de IA podría estar mal configurado.");
  }
  
  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error al comunicarse con la API de Gemini:", error);
    // Re-lanza el error para que el componente de la UI pueda manejarlo (p. ej., mostrar un mensaje al usuario).
    throw error;
  }
};
