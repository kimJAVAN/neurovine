
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Network, 
  Brain, 
  Target, 
  Shield, 
  ChevronRight,
  Zap, 
  Key,
  Library,
  DollarSign,
  TrendingUp,
  Infinity,
  ArrowDown,
  AlertTriangle
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

// --- 애니메이션 카운터 컴포넌트 ---
const AnimatedCounter = ({ value, duration = 2000, decimals = 0, suffix = "", prefix = "", isVisible = false }) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * value);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [value, duration, isVisible]);

  return (
    <span className="tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

// --- 텍스트 셔플 애니메이션 컴포넌트 ---
const TextShuffle = ({ targetText, isVisible = false, duration = 1500 }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
  
  useEffect(() => {
    if (!isVisible) return;
    
    let frame = 0;
    const totalFrames = Math.floor((duration / 1000) * 60);
    
    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      
      if (progress < 1) {
        const currentText = targetText
          .split("")
          .map((char, index) => {
            if (char === " " || char === "-" || char === ">") return char;
            if (index / targetText.length < progress) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
        
        setDisplayText(currentText);
        requestAnimationFrame(animate);
      } else {
        setDisplayText(targetText);
      }
    };
    
    animate();
  }, [targetText, isVisible, duration]);

  return <span className="font-mono">{displayText}</span>;
};

// --- Hero Section ---
export const Hero: React.FC = () => {
  return (
    <section id="summary" className="relative pt-40 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background Glows for high-end look */}
      <div className="absolute top-[5%] left-[0%] w-[800px] h-[800px] bg-emerald-500/[0.07] rounded-full blur-[160px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[0%] w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[140px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
            <span className="text-[10px] font-bold text-slate-500 tracking-[0.4em] uppercase">Series A Pitch</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold leading-[0.95] tracking-tighter text-white">
            The Future of <br />
            <span className="accent-gradient">Human <br />Capability</span>
          </h1>
          
          <p className="text-lg text-slate-500 max-w-md leading-relaxed font-light">
            NeuroVine is bridging the cognitive gap between human potential and industrial demand through the world's first BCI-native skill brokerage.
          </p>
          
          <button className="flex items-center gap-4 px-10 py-5 bg-white text-black font-bold text-[12px] tracking-[0.2em] rounded-full hover:bg-emerald-50 transition-all group shadow-[0_20px_40px_rgba(255,255,255,0.1)] uppercase">
            Review Pitch Narrative
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        <div className="relative group">
          <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden glass p-5 border border-white/10 shadow-2xl bg-black/40">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
             {/* 세련된 그린톤 반도체/회로 이미지 */}
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
               alt="Neural Semiconductor Architecture" 
               className="w-full h-full object-cover rounded-[2.5rem] opacity-90 transition-transform duration-1000 group-hover:scale-110"
             />
             
             {/* Central Glow Chip Area */}
             <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-80 h-80 bg-emerald-500/10 rounded-full blur-[80px] animate-pulse"></div>
                <div className="relative p-10 bg-black/60 backdrop-blur-2xl rounded-[2.5rem] border border-emerald-500/30 shadow-[0_0_100px_rgba(52,211,153,0.3)]">
                  <Cpu className="w-24 h-24 text-emerald-400 drop-shadow-[0_0_30px_#10b981]" strokeWidth={1} />
                </div>
             </div>
             
             {/* High Fidelity Integration Badge */}
             <div className="absolute bottom-10 right-10 glass px-8 py-5 rounded-2xl border border-white/10 z-30 shadow-2xl backdrop-blur-3xl">
               <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Neural Integration</p>
               <p className="text-2xl font-bold text-emerald-400 font-mono tracking-tighter drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">99.4% Sync</p>
             </div>
          </div>
          {/* Subtle connecting lines decoration */}
          <div className="absolute -left-20 top-1/2 w-40 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
          <div className="absolute -top-10 right-20 w-px h-20 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

// --- Neural Bridge ---
export const NeuralBridge: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-[0.3em] mb-8 uppercase text-white">The Neural Bridge</h2>
        <p className="italic text-slate-500 max-w-2xl mx-auto mb-28 text-sm leading-relaxed font-light">
          "We are shifting the paradigm from 'Linear Learning' to 'Direct Capability Transfer'."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {[
            {
              icon: <Brain className="w-6 h-6 text-emerald-400" />,
              title: "Who",
              desc: "A multidisciplinary team of neuroscientists, BCI engineers, and SaaS veterans scaling the human interface."
            },
            {
              icon: <Network className="w-6 h-6 text-emerald-400" />,
              title: "What",
              desc: "The NeuroVine Patch & Ecosystem: A proprietary hardware-software stack for neural mapping and skill injection."
            },
            {
              icon: <Target className="w-6 h-6 text-emerald-400" />,
              title: "Why",
              desc: "Standard education is collapsing under the weight of exponential technological change. Humans need an upgrade."
            }
          ].map((item, i) => (
            <div key={i} className="glass p-12 rounded-[2.5rem] border border-white/5 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/[0.06] transition-colors"></div>
              <div className="mb-10 p-5 bg-emerald-500/[0.07] rounded-2xl w-fit group-hover:bg-emerald-500/[0.12] transition-colors group-hover:scale-110 duration-500">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Structural Failure (Bar Chart) ---
const chartData = [
  { name: 'T1', value: 25 },
  { name: 'T2', value: 45 },
  { name: 'T3', value: 65 },
  { name: 'T4', value: 85 },
  { name: 'T5', value: 100 },
];

export const StructuralFailure: React.FC = () => {
  return (
    <section id="gap" className="py-32 border-t border-white/5 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/[0.02] rounded-full blur-[160px] -z-10 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div>
            <span className="text-[10px] font-bold text-emerald-400 tracking-[0.4em] uppercase mb-5 block">The Thesis</span>
            <h2 className="text-5xl font-bold leading-tight tracking-tight text-white">The Structural Failure of Education</h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-lg font-light">
            Traditional learning takes 10,000 hours. Technology shifts every 18 months. The gap between human capability and market requirement is now unbridgeable through standard pedagogy.
          </p>
          
          <ul className="space-y-7">
            {[
              "Human bandwidth is the ultimate bottleneck.",
              "Education ROI has reached negative parity.",
              "Skill decay exceeds skill acquisition."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 text-xs font-medium text-slate-300">
                <AlertTriangle className="w-5 h-5 text-emerald-500 mt-0.5 opacity-80" />
                {text}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass p-14 rounded-[3rem] border border-white/10 h-[460px] flex flex-col relative overflow-hidden bg-slate-900/10 shadow-2xl backdrop-blur-md">
          <div className="flex justify-between items-center mb-14">
            <span className="text-[10px] font-mono font-bold text-slate-600 tracking-[0.3em] uppercase">Tech Growth Horizon</span>
          </div>
          <div className="flex-1 w-full px-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barGap={12} margin={{ top: 0, right: 0, left: -40, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" opacity={0.15} />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.01)' }}
                  contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '16px', fontSize: '10px' }}
                />
                <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={70}>
                   {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#10b981' : '#064e3b'} />
                   ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-12 border-t border-white/5 pt-8">
            <p className="text-[10px] text-slate-700 font-mono text-center tracking-[0.4em] uppercase">
              COGNITIVE DEFICIT VS. EXPONENTIAL ACCELERATION
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Stats Stripe ---
export const StatsStripe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} className="py-48 relative overflow-hidden bg-[#01040a]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.015] to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center">
          <div className="space-y-6 group">
            {/* 시안의 에메랄드 그린 컬러 반영 */}
            <p className="text-6xl font-bold tracking-tighter text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-transform duration-500 group-hover:scale-110">
              <AnimatedCounter value={0.02} decimals={2} suffix="s" isVisible={isVisible} />
            </p>
            <p className="text-[11px] font-bold text-slate-600 tracking-[0.5em] uppercase group-hover:text-slate-400 transition-colors">Latency</p>
          </div>
          <div className="space-y-6 group">
            <p className="text-6xl font-bold tracking-tighter text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-transform duration-500 group-hover:scale-110">
              <AnimatedCounter value={10} decimals={0} suffix="k+" isVisible={isVisible} />
            </p>
            <p className="text-[11px] font-bold text-slate-600 tracking-[0.5em] uppercase group-hover:text-slate-400 transition-colors">Skill Library</p>
          </div>
          <div className="space-y-6 group">
            <p className="text-6xl font-bold tracking-tighter text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-transform duration-500 group-hover:scale-110 font-mono">
              <TextShuffle targetText="Cost -> 0" isVisible={isVisible} />
            </p>
            <p className="text-[11px] font-bold text-slate-600 tracking-[0.5em] uppercase group-hover:text-slate-400 transition-colors">Learning Cost</p>
          </div>
          <div className="space-y-6 group">
            <p className="text-6xl font-bold tracking-tighter text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-transform duration-500 group-hover:scale-110">
              <TextShuffle targetText="Instant" isVisible={isVisible} />
            </p>
            <p className="text-[11px] font-bold text-slate-600 tracking-[0.5em] uppercase group-hover:text-slate-400 transition-colors">Mastery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Architects ---
export const Architects: React.FC = () => {
  return (
    <section className="py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-[140px] -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-24 uppercase tracking-[0.3em] text-white">The Architects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {[
            {
              name: "Dr. Aris Thorne",
              role: "CHIEF NEUROSCIENTIST",
              bio: "Former lead at MIT Neural Systems Group. 15+ years in synaptic mapping.",
              image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"
            },
            {
              name: "Sarah Chen",
              role: "VP ENGINEERING",
              bio: "Architected high-scale fintech systems. Expertise in neural data encryption.",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
            },
            {
              name: "Marcus Vane",
              role: "CEO & FOUNDER",
              bio: "Serial entrepreneur. Previously exited $1B+ AI logistics platform.",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
            }
          ].map((person, i) => (
            <div key={i} className="glass rounded-[3.5rem] overflow-hidden border border-white/10 group bg-slate-900/10 shadow-2xl transition-all duration-700 hover:-translate-y-6 hover:shadow-emerald-500/[0.05]">
              <div className="aspect-[5/4] relative overflow-hidden bg-slate-950">
                <img src={person.image} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" alt={person.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01040a] via-transparent to-transparent opacity-95"></div>
              </div>
              <div className="p-14 space-y-6 relative -mt-24 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent">
                 <div>
                   <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-500">{person.name}</h3>
                   <p className="text-emerald-500 text-[11px] font-bold tracking-[0.4em] uppercase mt-2">{person.role}</p>
                 </div>
                 <p className="text-sm text-slate-500 leading-relaxed font-light">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 나머지 섹션들은 기존 시안의 높은 퀄리티 유지 ---
export const ConvergenceMap: React.FC = () => {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-[0.3em] mb-24 uppercase text-white">The Convergence Map</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-left">
          {[
            { label: "BCI Maturity", value: "Non-invasive signal resolution has increased 1000x since 2020." },
            { label: "AI Infrastructure", value: "LLMs can now translate neural signals into structured data maps." },
            { label: "Industrial Demand", value: "Global talent shortage exceeds 85M roles in specialized tech." }
          ].map((item, i) => (
            <div key={i} className="space-y-6">
              <h4 className="text-emerald-400 font-bold text-xs tracking-[0.3em] uppercase">{item.label}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AccessRights: React.FC = () => {
  return (
    <section id="solution" className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative aspect-square flex items-center justify-center">
          <div className="absolute inset-0 border border-white/5 rounded-full"></div>
          <div className="absolute inset-[10%] border border-white/10 rounded-full"></div>
          <div className="absolute inset-[25%] border border-white/20 rounded-full"></div>
          <div className="absolute inset-[40%] border border-emerald-500/10 rounded-full animate-pulse"></div>
          
          <div className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(52,211,153,0.4)] z-10 border-[8px] border-[#01040a]">
            <Key className="w-14 h-14 text-slate-950" strokeWidth={2.5} />
          </div>
          
          <div className="absolute top-[12%] right-[12%] text-[11px] font-bold text-slate-600 tracking-[0.3em] uppercase bg-black/60 px-5 py-2 backdrop-blur-xl rounded-full border border-white/5">Skills</div>
          <div className="absolute bottom-[22%] left-[8%] text-[11px] font-bold text-slate-600 tracking-[0.3em] uppercase bg-black/60 px-5 py-2 backdrop-blur-xl rounded-full border border-white/5">Expertise</div>
          <div className="absolute top-[50%] left-[-10%] -translate-y-1/2 text-[11px] font-bold text-slate-600 tracking-[0.3em] uppercase bg-black/60 px-5 py-2 backdrop-blur-xl rounded-full border border-white/5">Data</div>
        </div>
        
        <div className="space-y-14">
          <h2 className="text-6xl font-bold leading-tight tracking-tight text-white">
            Learning as <span className="text-emerald-400">Access <br />Rights</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed font-light">
            NeuroVine decouples ability from effort. By treating skills as encrypted data packets, we enable users to "subscribe" to expertise. No study, only synchronization.
          </p>
          
          <div className="space-y-12">
            {[
              { id: '1', title: 'Neural Mapping', desc: 'Expert brains are scanned while performing tasks.' },
              { id: '2', title: 'Protocol Translation', desc: 'AI distills experience into universal synaptic packets.' },
              { id: '3', title: 'Active Transfer', desc: 'The Patch delivers packets via high-fidelity induction.' }
            ].map((item) => (
              <div key={item.id} className="flex gap-10 group cursor-default">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-slate-900 border border-white/10 text-emerald-400 text-sm font-bold flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-500">
                  {item.id}
                </div>
                <div className="pt-2">
                   <h4 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors text-white">{item.title}</h4>
                   <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const TechStack: React.FC = () => {
  return (
    <section id="product" className="py-32 border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 uppercase tracking-[0.3em] text-white">The Patch Model</h2>
        <p className="text-slate-600 text-[11px] mb-24 tracking-[0.4em] uppercase">Proprietary hardware meeting world-class SaaS delivery.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-4">
            <div className="glass p-14 rounded-[3rem] border border-white/10 bg-slate-900/10 shadow-2xl">
               <div className="flex justify-between items-center mb-14 border-b border-white/5 pb-10">
                 <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-500">Tech Stack Layering</span>
                 <div className="flex gap-8">
                   <div className="text-[10px] font-bold text-slate-600 flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full border-2 border-emerald-500/50"></div> SECURE-SYNC™
                   </div>
                   <div className="text-[10px] font-bold text-slate-600 flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full border-2 border-emerald-500/50"></div> BIO-ENCRYPT
                   </div>
                 </div>
               </div>
               
               <div className="space-y-4">
                 {[
                   { level: 'L3', name: 'Marketplace / API Layer', techs: 'Node.js / GraphQL' },
                   { level: 'L2', name: 'Neural Translation Engine', techs: 'TensorFlow / Custom BCI DSP' },
                   { level: 'L1', name: 'Bio-Conductive Hardware', techs: 'ARM Cortex / Neural Mesh' }
                 ].map((layer, i) => (
                   <div key={i} className="flex items-center justify-between p-10 bg-black/40 border border-white/5 rounded-2xl hover:bg-emerald-500/[0.05] hover:border-emerald-500/40 transition-all group">
                     <div className="flex gap-8 items-center">
                        <span className="text-emerald-400 font-mono text-base font-bold">{layer.level}:</span>
                        <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{layer.name}</span>
                     </div>
                     <span className="text-[11px] font-mono text-slate-600 group-hover:text-emerald-400 transition-colors uppercase tracking-[0.2em]">{layer.techs}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 h-full">
            <div className="glass p-16 rounded-[3rem] border border-white/10 h-full flex flex-col items-center justify-center text-center space-y-16 bg-emerald-500/[0.02] shadow-2xl backdrop-blur-3xl group">
               <div className="w-24 h-24 rounded-[2rem] bg-slate-900/80 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                 <Shield className="w-12 h-12" strokeWidth={1.5} />
               </div>
               <div className="space-y-8">
                 <h3 className="text-2xl font-bold text-white">Security Standard</h3>
                 <p className="text-sm text-slate-500 leading-relaxed px-4 font-light">End-to-end encryption for neural pathways. Your original memory stays your own.</p>
               </div>
               <button className="w-full py-6 border border-white/10 text-[12px] font-bold tracking-[0.3em] rounded-2xl hover:bg-white hover:text-black transition-all uppercase shadow-lg hover:border-white">
                 Download Specs
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MarketOpportunity: React.FC = () => {
  return (
    <section id="market" className="py-32 border-t border-white/5 relative">
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-20">
          <h2 className="text-5xl font-bold tracking-tight text-white leading-tight">Dual Ecosystem Market</h2>
          
          <div className="space-y-16">
            <div className="space-y-6">
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400">B2C: The Skill Market</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">Consumers pay per-sync or subscription to acquire hobbies, languages, and technical skills instantly.</p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400">B2B: Workforce Velocity</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">Enterprise licensing for rapid upskilling. Training 10,000 engineers in a new language in 24 hours.</p>
            </div>
          </div>
          
          <div className="space-y-12">
            <h4 className="text-[11px] font-bold text-slate-600 tracking-[0.4em] uppercase">Pricing Tiers</h4>
            <div className="grid grid-cols-2 gap-20">
              <div>
                <p className="text-[11px] text-slate-700 font-bold uppercase mb-4 tracking-[0.1em]">Hourly Sync</p>
                <p className="text-5xl font-bold text-white tracking-tighter">$29 <span className="text-sm font-normal text-slate-700">/hr</span></p>
              </div>
              <div>
                <p className="text-[11px] text-slate-700 font-bold uppercase mb-4 tracking-[0.1em]">Pro Access</p>
                <p className="text-5xl font-bold text-white tracking-tighter">$499 <span className="text-sm font-normal text-slate-700">/mo</span></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass p-20 rounded-[4rem] border border-white/10 flex flex-col bg-slate-900/10 shadow-2xl backdrop-blur-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px]"></div>
          <h3 className="text-xl font-bold mb-24 tracking-[0.4em] uppercase text-white border-b border-white/5 pb-10">TAM Projection</h3>
          
          <div className="flex-1 space-y-28">
             <div className="space-y-8">
               <div className="flex justify-between text-[12px] font-bold text-slate-600 uppercase tracking-widest">
                 <span>Current Education Market</span>
                 <span>$6.5 Trillion</span>
               </div>
               <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                 <div className="h-full w-[35%] bg-slate-800"></div>
               </div>
             </div>
             
             <div className="space-y-8">
               <div className="flex justify-between text-[12px] font-bold text-emerald-400 uppercase tracking-widest drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                 <span>Cognitive Enhancement (2030)</span>
                 <span>$24.2 Trillion</span>
               </div>
               <div className="h-5 w-full bg-slate-950 rounded-full overflow-hidden border border-emerald-500/20 p-1 shadow-[0_0_30px_rgba(52,211,153,0.15)]">
                 <div className="h-full w-full bg-gradient-to-r from-emerald-600 to-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.6)] rounded-full transition-all duration-1000"></div>
               </div>
             </div>
          </div>
          
          <div className="mt-32 border-t border-white/5 pt-16">
            <p className="text-5xl font-bold accent-gradient tracking-tighter italic text-center drop-shadow-lg">
               "The End of Human Stagnation"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const StrategicPositioning: React.FC = () => {
  return (
    <section className="py-40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-32 uppercase tracking-[0.4em] text-center text-white">Strategic Positioning</h2>
        
        <div className="aspect-[21/9] relative border border-white/10 rounded-[3.5rem] overflow-hidden bg-slate-950/40 shadow-inner group">
           {/* Axis Lines */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-full h-px bg-white/10 group-hover:bg-emerald-500/10 transition-colors duration-1000"></div>
             <div className="h-full w-px bg-white/10 group-hover:bg-emerald-500/10 transition-colors duration-1000"></div>
           </div>
           
           <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[12px] font-bold text-slate-700 tracking-[0.6em] uppercase bg-black/60 px-10 py-4 backdrop-blur-md rounded-full border border-white/5">Transfer Speed</div>
           <div className="absolute left-12 top-1/2 -rotate-90 origin-left -translate-y-1/2 text-[12px] font-bold text-slate-700 tracking-[0.6em] uppercase bg-black/60 px-10 py-4 backdrop-blur-md rounded-full border border-white/5">Invasiveness</div>
           
           <div className="absolute top-[38%] left-[32%] flex flex-col items-center gap-4 opacity-40">
              <div className="w-5 h-5 rounded-full bg-slate-600 shadow-xl border-2 border-slate-950"></div>
              <span className="text-[11px] text-slate-600 uppercase font-bold tracking-[0.3em]">Legacy Tech</span>
           </div>
           
           <div className="absolute bottom-[18%] right-[15%] group/vine">
              <div className="relative cursor-pointer transition-transform duration-1000 hover:scale-125">
                <div className="w-32 h-32 rounded-full border-2 border-emerald-500/40 flex items-center justify-center p-4 bg-emerald-500/5 shadow-[0_0_100px_rgba(52,211,153,0.5)] relative">
                   <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping opacity-20 duration-[2000ms]"></div>
                   <div className="w-full h-full rounded-full bg-emerald-500 flex items-center justify-center border-4 border-[#01040a]/50 shadow-inner">
                      <span className="text-[12px] font-black text-slate-950 uppercase tracking-tighter">NeuroVine</span>
                   </div>
                </div>
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap px-10 py-3 rounded-full border border-emerald-500/60 text-[12px] font-bold text-emerald-400 tracking-[0.5em] uppercase bg-black/80 shadow-2xl backdrop-blur-md group-hover/vine:bg-emerald-500 group-hover/vine:text-black transition-all duration-500">
                  Optimal Position
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-44 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1000px] bg-emerald-500/[0.06] rounded-full blur-[200px] -z-10 animate-pulse duration-[4000ms]"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <span className="text-[12px] font-bold text-emerald-400 tracking-[1em] uppercase mb-20 block drop-shadow-md">The Long Arc</span>
        <h2 className="text-8xl md:text-[11rem] font-bold mb-28 tracking-tighter text-white drop-shadow-2xl leading-none">MEMORA 2080</h2>
        <p className="text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed mb-56 font-light italic opacity-80">
          By 2080, NeuroVine evolves into MEMORA: A global, decentralized neural infrastructure where collective human knowledge is accessible as a planetary nervous system. Individual brilliance becomes communal property.
        </p>
        
        <div className="flex flex-wrap justify-center gap-48">
          {[
            { label: 'Connected Nodes', value: '10B' },
            { label: 'Illiteracy Rate', value: 'Zero' },
            { label: 'Potential', value: '∞' }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <p className="text-8xl font-bold mb-10 text-white transition-all duration-700 group-hover:scale-125 group-hover:text-emerald-400 drop-shadow-sm">{item.value}</p>
              <div className="w-24 h-1.5 bg-emerald-500/20 mx-auto mb-10 rounded-full group-hover:w-44 group-hover:bg-emerald-500 transition-all duration-700 shadow-[0_0_15px_rgba(52,211,153,0.3)]"></div>
              <p className="text-[14px] font-bold text-slate-600 tracking-[0.5em] uppercase group-hover:text-slate-400 transition-colors">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTA: React.FC = () => {
  return (
    <section className="py-44 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-emerald-500/[0.07] rounded-full blur-[180px] -z-10 animate-pulse"></div>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="glass p-28 rounded-[5rem] border border-white/15 space-y-20 shadow-[0_60px_150px_rgba(0,0,0,0.7)] relative overflow-hidden bg-slate-900/10 backdrop-blur-3xl group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[3px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_25px_#10b981]"></div>
          
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">Invest in the <br/><span className="text-emerald-400">Bridge</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto text-xl leading-relaxed font-light italic opacity-70">
            Access the full financial prospectus and due diligence package.
          </p>
          <div className="flex flex-col sm:flex-row gap-10 justify-center pt-10">
            <button className="px-16 py-7 bg-emerald-500 text-slate-950 font-black text-[14px] tracking-[0.4em] rounded-full hover:bg-emerald-400 transition-all hover:scale-105 shadow-[0_30px_70px_rgba(52,211,153,0.5)] uppercase">
              Request Data Room
            </button>
            <button className="px-16 py-7 border border-white/20 text-white font-bold text-[14px] tracking-[0.4em] rounded-full hover:bg-white/5 transition-all uppercase hover:border-white/40 shadow-2xl backdrop-blur-sm">
              Talk to Founders
            </button>
          </div>
          
          <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
        </div>
      </div>
    </section>
  );
};
