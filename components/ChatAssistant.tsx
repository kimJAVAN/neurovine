
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Welcome to NeuroVine. I am your Neural Assistant. How can I help you explore the future of human capability today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', content: userMessage }].map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: "You are the NeuroVine Neural Assistant. You represent a high-tech BCI (Brain-Computer Interface) company. Your tone is professional, futuristic, and visionary. You explain complex neuro-tech concepts (synaptic mapping, neural induction, BCI-native skill brokerage) with clarity. Encourage investors and potential partners. Keep responses concise and focused on the NeuroVine brand.",
          temperature: 0.7,
        },
      });

      const aiText = response.text || "I apologize, my neural link is experiencing minor latency. Could you repeat that?";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error("Neural link error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Error: Neural sync interrupted. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl relative group ${
          isOpen ? 'bg-slate-900 rotate-90 scale-0 opacity-0' : 'bg-emerald-500 hover:bg-emerald-400 scale-100 opacity-100'
        }`}
      >
        <MessageSquare className="text-slate-950 w-7 h-7" />
        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 pointer-events-none group-hover:opacity-40"></div>
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-0 right-0 w-[400px] max-h-[600px] h-[80vh] flex flex-col glass rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] transition-all duration-500 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-20 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-emerald-500/5 rounded-t-[2.5rem]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Bot className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-widest uppercase">Neural Assistant</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] text-emerald-500/80 font-mono tracking-tighter">Link Stable (99.4% Sync)</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4 text-slate-500" />
          </button>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
              <div className={`max-w-[85%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border ${
                  msg.role === 'user' ? 'bg-slate-800 border-white/10' : 'bg-emerald-500/10 border-emerald-500/20'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-slate-400" /> : <Sparkles className="w-4 h-4 text-emerald-400" />}
                </div>
                <div className={`p-4 rounded-2xl text-[13px] leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-slate-200 rounded-tr-none border border-white/5' 
                    : 'bg-emerald-500/5 text-slate-300 rounded-tl-none border border-emerald-500/10'
                }`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-pulse">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-white/5">
          <div className="relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query the network..."
              className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600 font-light"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-slate-700 mt-3 text-center uppercase tracking-widest font-mono">
            Powered by Gemini 3 Flash Node
          </p>
        </div>
      </div>
    </div>
  );
};
