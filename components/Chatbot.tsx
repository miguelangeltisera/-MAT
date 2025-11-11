import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage } from '../types';
import { getChatResponse, startChat } from '../services/geminiService';
import { SendIcon } from './icons';

const Chatbot: React.FC<{ chatContainerRef: React.RefObject<HTMLDivElement> }> = ({ chatContainerRef }) => {
  const initialMessage: ChatMessage = {
    role: 'model',
    content: "Saludos. Soy MAT-X, la interfaz de IA de CINE & TV MAT HYPERMEDIA. ¿En qué puedo ayudarte a crear hoy? Pregúntame sobre nuestros servicios o cualquier consulta sobre producción audiovisual."
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      startChat([]); // Initialize chat history
    } catch (error) {
      console.error("Initialization Error:", error);
      setMessages([{
        role: 'model',
        content: "Error de inicialización: La API Key de Gemini no se ha configurado correctamente. Por favor, verifica la configuración para poder interactuar conmigo."
      }]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getChatResponse(input);
      const modelMessage: ChatMessage = { role: 'model', content: response };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { role: 'model', content: 'Error: No se pudo conectar con mis sistemas. Inténtalo más tarde.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div ref={chatContainerRef} id="chatbot" className="container mx-auto max-w-4xl py-16 md:py-24 px-4 scroll-mt-20">
      <div className="bg-sky-100/40 backdrop-blur-md border border-green-500/30 rounded-xl shadow-lg shadow-green-500/10 overflow-hidden flex flex-col h-[70vh]">
        <div className="p-4 border-b border-green-500/30">
          <h3 className="text-xl font-bold text-center text-green-800">Consola de Interacción: MAT-X</h3>
        </div>
        <div className="flex-1 p-4 md:p-6 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-green-800 border-2 border-green-500 flex-shrink-0"></div>}
              <div className={`max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-green-700 rounded-br-none text-white' : 'bg-white/70 rounded-bl-none text-green-950'}`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-green-800 border-2 border-green-500 flex-shrink-0"></div>
              <div className="max-w-md lg:max-w-lg px-4 py-3 rounded-2xl bg-white/70 rounded-bl-none">
                <div className="flex items-center justify-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-green-500/30 mt-auto">
          <div className="flex items-center bg-white/50 border border-green-600/50 rounded-full focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/50 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu consulta aquí..."
              className="flex-1 w-full bg-transparent text-green-900 placeholder-green-700/60 py-3 px-5 focus:outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || input.trim() === ''}
              className="p-3 m-1 text-green-600 rounded-full transition-colors duration-200 enabled:hover:bg-green-500/20 disabled:text-green-800/40 disabled:cursor-not-allowed"
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