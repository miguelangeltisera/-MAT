import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage } from '../types';
import { getChatResponse, startChat } from '../services/geminiService';
import { SendIcon } from './icons';

const Chatbot: React.FC<{ chatContainerRef: React.RefObject<HTMLDivElement> }> = ({ chatContainerRef }) => {
  const initialMessage: ChatMessage = {
    role: 'model',
    content: "Hola. Soy MAT-X. Si tienes alguna pregunta rápida mientras exploras, no dudes en consultarme aquí."
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inicializa el chat al cargar el componente.
  useEffect(() => {
    try {
      startChat(messages.slice(0, messages.length - 1)); // Inicia con el historial, excluyendo el saludo inicial
      setError(null);
    } catch (e) {
      console.error("Error al inicializar el chat:", e);
      setError("No se pudo conectar con el asistente de IA. La configuración de la API podría faltar en el servidor.");
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Re-inicia el chat con el historial completo antes de enviar el nuevo mensaje
      startChat(messages);
      const response = await getChatResponse(currentInput);
      const modelMessage: ChatMessage = { role: 'model', content: response };
      setMessages(prev => [...prev, modelMessage]);
    } catch (err) {
      console.error("Error al obtener respuesta del chat:", err);
      const errorMessageContent = 'Error: No se pudo conectar con mis sistemas. Por favor, inténtalo más tarde.';
      setError(errorMessageContent);
      const errorMessage: ChatMessage = { role: 'model', content: errorMessageContent };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const isChatReady = !error;

  return (
    <div ref={chatContainerRef} id="chatbot" className="container mx-auto max-w-4xl py-16 md:py-24 px-4 scroll-mt-20">
      <div className="bg-slate-950/60 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-lg shadow-cyan-500/10 overflow-hidden flex flex-col h-[70vh]">
        <div className="p-4 border-b border-cyan-500/30 flex justify-between items-center">
          <h3 className="text-xl font-bold text-cyan-300">Asistente IA: MAT-X</h3>
           {error && (
            <div className="flex items-center gap-2 text-sm text-red-400" title={error}>
              <span className="relative flex h-3 w-3">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span>ERROR DE CONEXIÓN</span>
            </div>
           )}
        </div>
        <div className="flex-1 p-4 md:p-6 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-cyan-500 flex-shrink-0"></div>}
              <div className={`max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-cyan-600 rounded-br-none text-white' : 'bg-slate-800 rounded-bl-none text-slate-200'}`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-cyan-500 flex-shrink-0"></div>
              <div className="max-w-md lg:max-w-lg px-4 py-3 rounded-2xl bg-slate-800 rounded-bl-none">
                <div className="flex items-center justify-center space-x-1">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-cyan-500/30 mt-auto">
          <div className={`flex items-center bg-slate-800/50 border ${isChatReady ? 'border-cyan-600/50 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/50' : 'border-red-500/40'} rounded-full transition-all`}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isChatReady ? "Escribe tu consulta aquí..." : "Asistente no disponible."}
              className="flex-1 w-full bg-transparent text-slate-100 placeholder-slate-400/60 py-3 px-5 focus:outline-none disabled:placeholder-red-400/60"
              disabled={isLoading || !isChatReady}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || input.trim() === '' || !isChatReady}
              className="p-3 m-1 text-cyan-400 rounded-full transition-colors duration-200 enabled:hover:bg-cyan-500/20 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              <SendIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;