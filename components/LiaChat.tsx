import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { sendMessageToLia } from '../services/geminiService';
import { ChatMessage } from '../types';

const LiaChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Olá! Sou a LIA. Como posso ajudar você hoje com a Lexia Platform?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for context (excluding the just added message for the API call if the service handles history differently, 
      // but here we pass the history *before* the current message to the service if we were re-creating chat, 
      // but our service takes history to initialize. 
      // Simplified: We pass the conversation history to the service helper).
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      
      const responseText = await sendMessageToLia(userMsg.text, history);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-[500px] bg-lexia-card border border-lexia-secondary/30 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-lexia-dark p-4 border-b border-lexia-secondary/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-lexia-secondary/20 flex items-center justify-center text-lexia-accent">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lexia-accent">LIA</h3>
                <p className="text-xs text-gray-400">Lexia Intelligent Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-lexia-card">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-lexia-secondary text-white rounded-tr-none' 
                    : 'bg-lexia-dark border border-gray-700 text-gray-300 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-lexia-dark border border-gray-700 p-3 rounded-lg rounded-tl-none flex gap-1">
                  <span className="w-2 h-2 bg-lexia-accent rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-lexia-accent rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-lexia-accent rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-lexia-dark border-t border-lexia-secondary/20 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-lexia-card border border-gray-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-lexia-accent transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-lexia-secondary hover:bg-lexia-accent text-lexia-dark p-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-lexia-accent hover:bg-lexia-secondary text-lexia-dark shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default LiaChat;
