
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
    { role: 'assistant', content: 'Welcome to NeuroVine Infrastructure. I am your Neural Interface Assistant. How can I help you navigate our capability brokerage platform today?' }
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
          systemInstruction: "You are the NeuroVine Neural Assistant (Year 2080). You represent a high-tech BCI company. Tone: Professional, visionary, slightly detached but helpful. Use terms like 'neural sync', 'synaptic packets', and 'capability access'. Highlight that education is now 'access rights'. Keep responses concise (max 3 sentences). Refer to PLOS ONE and PubMed research if asked about scientific validity.",
          temperature: 0.7,
        },
      });

      const aiText = response.text || "Neural link latency detected. Please repeat your query.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error("Neural link error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Neural sync interrupted. Check your bio-mesh connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_20px_60px_rgba(16,185,129,0.3)] relative group ${
          isOpen ? 'bg-slate-900 rotate-90 scale-0 opacity-0' : 'bg-emerald-500 hover:bg-emerald-400 scale-100 opacity-100'
        }`}
      >
        <MessageSquare className="text-slate-950 w-7 h-7" />
        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 pointer-events-none"></div>
      </button>

      <div
        className={`absolute bottom-0 right-0 w-[420px] max-h-[650px] h-[85vh] flex flex-col glass rounded-[3.5rem] border border-white/15 shadow-[0_40px_100px_rgba(0,0,0,0.9)] transition-all duration-500 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-20 pointer-events-none'
        }`}
      >
        <div className="p-8 border-b border-white/10 flex items-center justify-between bg-emerald-500/[0.03] rounded-t-[3.5rem]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-inner">
              <Bot className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-widest uppercase">Neural Interface</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] text-emerald-500/80 font-mono tracking-tighter">Link Optimized</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 scrollbar-hide">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-3`}>
              <div className={`max-w-[85%] flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border ${
                  msg.role === 'user' ? 'bg-slate-800 border-white/10' : 'bg-emerald-500/10 border-emerald-500/20'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-slate-400" /> : <Sparkles className="w-4 h-4 text-emerald-400" />}
                </div>
                <div className={`p-5 rounded-[1.75rem] text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-slate-200 rounded-tr-none border border-white/5' 
                    : 'bg-emerald-500/[0.04] text-slate-300 rounded-tl-none border border-emerald-500/10'
                }`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-4 animate-pulse">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-[1.5rem] rounded-tl-none flex gap-1.5">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-10 border-t border-white/10 bg-black/20">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query the BCI network..."
              className="w-full bg-slate-900/60 border border-white/10 rounded-2xl py-5 pl-7 pr-16 text-sm focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-600 font-light"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 transition-all hover:bg-emerald-400 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-[9px] text-slate-700 mt-5 text-center uppercase tracking-[0.4em] font-mono">
            Direct Link Secured by NeuroVine AI Node
          </p>
        </div>
      </div>
    </div>
  );
};
