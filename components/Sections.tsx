
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Cpu, Network, Brain, Target, Shield, 
  ChevronRight, Zap, Key, DollarSign, TrendingUp, 
  Infinity as InfinityIcon, ArrowDown, AlertTriangle, Layers, Globe, 
  Lock, Beaker, FileText, CheckCircle2, Users, PieChart,
  User, Sparkles, Activity, Eye, ShieldCheck, Scale,
  Smartphone, FastForward, Repeat, HeartPulse, Microscope,
  Database, ZapOff, Fingerprint, Construction, 
  UserCheck, ShieldAlert, Rocket, Package, FlaskConical, Quote,
  Server, HardDrive, ShoppingBag, Briefcase
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell, AreaChart, Area,
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ScatterChart, Scatter, ZAxis
} from 'recharts';

// --- 애니메이션 카운터 컴포넌트 ---
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  isVisible?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000, decimals = 0, suffix = "", prefix = "", isVisible = false }) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * value);
      if (progress < 1) animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [value, duration, isVisible]);

  return <span className="tabular-nums">{prefix}{count.toFixed(decimals)}{suffix}</span>;
};

// --- 1. 메인 (Hero) ---
export const Hero: React.FC = () => {
  return (
    <section id="summary" className="relative pt-40 pb-20 overflow-hidden min-h-screen flex items-center bg-[#01040a]">
      <div className="absolute top-[5%] left-[0%] w-[800px] h-[800px] bg-emerald-500/[0.08] rounded-full blur-[160px] -z-10 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
            <span className="text-[10px] font-bold text-slate-500 tracking-[0.4em] uppercase">Non-learning Capability Access Protocol AD 2080</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tighter text-white">
            배움을 넘어선<br />
            새로운 <span className="accent-gradient">연결.</span>
          </h1>
          <div className="space-y-4 max-w-lg">
            <p className="text-xl text-slate-200 font-medium tracking-tight">
              ‘뉴로바인은 인간의 한계에 도전합니다.’
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              검증된 최첨단 뇌파 신경망 동기화 기술로 새로운 분야에 도전하거나, 당신의 전문성을 더 업그레이드 하세요. 교육은 더 이상 과정이 아닌 접속 권한입니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <button className="flex items-center gap-4 px-10 py-5 bg-white text-black font-bold text-[12px] tracking-[0.2em] rounded-full hover:bg-emerald-50 transition-all group shadow-xl uppercase">
              Full Strategy Deck <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button className="flex items-center gap-4 px-10 py-5 border border-white/10 text-white font-bold text-[12px] tracking-[0.2em] rounded-full hover:bg-white/5 transition-all uppercase">
              Explore Library <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="relative group animate-float hidden lg:block">
          <div className="relative z-10 aspect-square rounded-[4rem] overflow-hidden glass p-8 border border-white/10 shadow-2xl bg-black/40">
             <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover rounded-[3.5rem] opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Neural Backbone" />
             <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="relative p-12 bg-black/80 backdrop-blur-3xl rounded-[3rem] border border-emerald-500/30 shadow-[0_0_120px_rgba(16,185,129,0.3)]">
                  <Activity className="w-28 h-28 text-emerald-400" strokeWidth={1} />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 2. 전략 수립의 핵심 전제 (Strategy Thesis) ---
export const StrategyThesis: React.FC = () => {
  return (
    <section className="py-32 bg-[#01040a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <span className="text-emerald-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">Core Thesis</span>
            <h2 className="text-5xl font-bold text-white tracking-tight leading-tight italic">"인간의 학습 속도를 <br />한계까지 끌어올리다."</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              우리는 교육을 끝내려는 것이 아닙니다. 인간이 따라갈 수 있는 속도로 교육을 진화시키려 합니다. '설명 중심'에서 '경험·감각·판단 전달 중심'으로의 패러다임 전환입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Globe />, title: "Market Entry", desc: "기본 교육 시스템 내부 진입 및 AI 교육 파트너 포지셔닝." },
              { icon: <ShieldCheck />, title: "Non-Invasive", desc: "칩 이식이 아닌 비침습 뇌파/전자기 신호 기반 경험 동기화." },
              { icon: <Users />, title: "Accessibility", desc: "기술 진보를 인간의 학습 리듬에 맞춘 사회적 수용성 최우선." },
              { icon: <InfinityIcon />, title: "Experience Sync", desc: "능력을 '이식'하는 것이 아닌 '경험 유도'로 재정의." }
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-4 hover:border-emerald-500/20 transition-all">
                <div className="text-emerald-400">{item.icon}</div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 3. 시장 확장 로드맵 (Market Roadmap) ---
export const MarketRoadmap: React.FC = () => {
  const phases = [
    {
      step: "Phase 1",
      title: "AI Assistant",
      subtitle: "이해 가속",
      desc: "판단 흐름과 사고 순서를 실시간 보조하는 AI 교육 파트너. 직무 및 전문 기술 교육 효율 개선.",
      icon: <Cpu />,
      accent: "bg-emerald-500/10"
    },
    {
      step: "Phase 2",
      title: "Wearable Mastery",
      subtitle: "실행 능력",
      desc: "웨어러블 생체 신호와 VR/AR 결합. '몸이 먼저 배우는 교육'을 통한 체화 가속 실현.",
      icon: <Smartphone />,
      accent: "bg-emerald-500/20"
    },
    {
      step: "Phase 3",
      title: "Neural Transfer",
      subtitle: "숙련 압축",
      desc: "뇌파 패턴을 통한 경험 유도. 고급 전문 기술 및 장인 기술 전수 시 인지 부담 최소화.",
      icon: <Brain />,
      accent: "bg-emerald-500/30"
    },
    {
      step: "Phase 4",
      title: "Infrastructure",
      subtitle: "접속형 배움",
      desc: "배움은 소유가 아니라 접속. 국가 교육 및 평생 학습을 위한 실시간 경험 동기화 인프라.",
      icon: <Network />,
      accent: "bg-emerald-500/40"
    }
  ];

  return (
    <section className="py-32 border-t border-white/5 bg-[#01040a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl font-bold text-white tracking-tight">Market Expansion Roadmap</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed uppercase tracking-widest text-xs">교육 인프라의 단계적 진화 전략</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-emerald-500/10 -z-10 hidden md:block"></div>
          {phases.map((phase, i) => (
            <div key={i} className="relative group p-10 glass rounded-[3rem] border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col items-center text-center space-y-8 bg-black/40">
              <div className={`w-20 h-20 ${phase.accent} rounded-[2rem] flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform`}>
                {phase.icon}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-emerald-500 tracking-[0.4em] uppercase">{phase.step}</span>
                <h4 className="text-xl font-bold text-white tracking-tight">{phase.title}</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{phase.subtitle}</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-light">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. 문제 정의 & RICE 프레임워크 (Problem Definition) ---
export const ProblemDefinition: React.FC = () => {
  const riceData = [
    { subject: 'Education Burden', score: 8.0, r: 5, i: 4, c: 0.8, e: 2 },
    { subject: 'Ethical Control', score: 5.3, r: 4, i: 5, c: 0.8, e: 3 },
    { subject: 'Tech Gap', score: 6.7, r: 5, i: 5, c: 0.8, e: 3 },
    { subject: 'Safe Distribution', score: 4.5, r: 3, i: 5, c: 0.9, e: 3 },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 border-t border-white/5 bg-[#01040a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <span className="text-emerald-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">Problem Definition</span>
          <h2 className="text-5xl font-bold text-white tracking-tight leading-tight">인류는 이미 사용할 수 있는 <br />기술을 배우지 못해 <br /><span className="text-emerald-500">쓰지 못하고 있다.</span></h2>
          <div className="space-y-6">
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              기술 발전 속도와 인간 학습 속도 간 격차가 구조적으로 확대되고 있습니다. 이미 존재하는 기술 자원의 사회적 비효율을 해결하기 위해 우리는 '배움'의 개념을 재정립합니다.
            </p>
            <div className="grid grid-cols-1 gap-6 pt-6">
              {riceData.map((item, i) => (
                <div key={i} className="flex items-center gap-6 glass p-6 rounded-2xl border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center font-mono font-bold text-emerald-500 border border-emerald-500/20">{item.score.toFixed(1)}</div>
                  <div className="flex-1">
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">{item.subject}</h5>
                    <div className="flex gap-4 mt-2">
                       <span className="text-[9px] text-slate-600 uppercase font-mono tracking-widest">Reach: {item.r}</span>
                       <span className="text-[9px] text-slate-600 uppercase font-mono tracking-widest">Impact: {item.i}</span>
                       <span className="text-[9px] text-slate-600 uppercase font-mono tracking-widest">Conf: {item.c}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">RICE Score</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="glass p-12 rounded-[4rem] border border-white/10 bg-black/40 h-[500px] flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <ResponsiveContainer width="100%" height="100%">
                 <ScatterChart>
                    <XAxis type="number" dataKey="r" hide />
                    <YAxis type="number" dataKey="i" hide />
                    <ZAxis type="number" dataKey="score" range={[100, 1000]} />
                    <Scatter name="Issues" data={riceData} fill="#10b981" />
                 </ScatterChart>
              </ResponsiveContainer>
           </div>
           <div className="relative text-center space-y-8 z-10">
              <div className="inline-flex p-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                 <AlertTriangle className="w-12 h-12 text-emerald-400 animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold text-white italic tracking-tighter uppercase tracking-[0.1em]">Structural Gap</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto font-light leading-relaxed uppercase tracking-widest">기술 접근 격차가 역량 문제가 아닌 구조적 학습 한계로 고착화</p>
              <div className="pt-10 flex justify-center gap-20">
                 <div><p className="text-4xl font-bold text-white font-mono"><AnimatedCounter value={8} decimals={1} isVisible={isVisible} /></p><p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-2">Core Score</p></div>
                 <div><p className="text-4xl font-bold text-white font-mono"><AnimatedCounter value={95} suffix="%" isVisible={isVisible} /></p><p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-2">Reach factor</p></div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- 4.5. 가치 제안 캔버스 (Value Proposition Canvas) ---
export const ValueProposition: React.FC = () => {
  return (
    <section className="py-32 border-t border-white/5 bg-[#01040a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <span className="text-emerald-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">Value Proposition Canvas</span>
          <h2 className="text-5xl font-bold text-white tracking-tight italic">Customer Profile & Value Map</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed uppercase tracking-widest text-[11px] font-bold">인류의 고통을 해결하고 새로운 혜택을 창출하는 뉴로바인의 가치 공식</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Customer Profile Side */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-white/10 text-slate-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">1. Customer Profile</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {/* Jobs to be done */}
              <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6 bg-slate-900/20">
                <div className="flex items-center gap-3 text-emerald-400">
                  <Target className="w-5 h-5" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">과업 (Jobs-to-be-done)</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-[13px] text-slate-300 font-light leading-relaxed">
                    수년이 걸리는 전문 기술을 즉각 수행하고, 과정 없는 지식 인스톨을 통해 뇌에 직접 기술 패턴을 동기화합니다.
                  </p>
                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex gap-4 items-start">
                    <FlaskConical className="w-4 h-4 text-emerald-500/50 flex-shrink-0 mt-1" />
                    <p className="text-[10px] font-mono text-emerald-500/60 leading-relaxed uppercase tracking-tighter">
                      [Scientific Grounding] DARPA TNT(2016): 신경 자극을 통한 뇌 가소성 최적화로 학습 속도 획기적 단축 시사.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pains */}
              <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6 bg-slate-900/20">
                <div className="flex items-center gap-3 text-slate-400">
                  <ShieldAlert className="w-5 h-5" />
                  <h4 className="font-bold uppercase tracking-widest text-sm text-slate-200">고통 (Pains)</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-[13px] text-slate-400 font-light leading-relaxed italic">
                    지식의 빠른 유동기한과 인간 뇌의 물리적 인지 한계로 인한 '지식의 홍수' 속에서의 무력감.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start">
                    <Quote className="w-4 h-4 text-slate-600 flex-shrink-0 mt-1" />
                    <p className="text-[10px] font-mono text-slate-600 leading-relaxed uppercase tracking-tighter">
                      에빙하우스 망각 곡선: 정보량 과부하로 인한 지식 습득의 물리적 임계치 도달.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gains */}
              <div className="glass p-8 rounded-[2.5rem] border border-emerald-500/20 space-y-6 bg-emerald-500/[0.02]">
                <div className="flex items-center gap-3 text-emerald-400">
                  <Sparkles className="w-5 h-5" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">혜택 (Gains)</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-[13px] text-emerald-100/70 font-light leading-relaxed">
                    학습 시간을 창조적 활동에 투입하는 '시간의 자유'와 누구나 전문성을 보유할 수 있는 '능력의 평등'.
                  </p>
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex gap-4 items-start">
                    <Layers className="w-4 h-4 text-emerald-400/50 flex-shrink-0 mt-1" />
                    <p className="text-[10px] font-mono text-emerald-400/60 leading-relaxed uppercase tracking-tighter">
                      BrainNet(2019): 뇌 간 직접 정보 전달을 통한 '정보 동기화'의 실험적 구현.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Map Side */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">2. Value Map</h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Products & Services */}
              <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6 bg-emerald-500/[0.04]">
                <div className="flex items-center gap-3 text-emerald-400">
                  <Package className="w-5 h-5" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">제품 및 서비스 (Products)</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-[13px] text-slate-300 font-light leading-relaxed">
                    비침습형 인터페이스 'The Vine Patch'와 전 세계 마스터의 신경 패턴 마켓플레이스 'Neuro-Library'.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-4 items-start">
                    <Zap className="w-4 h-4 text-emerald-500/50 flex-shrink-0 mt-1" />
                    <p className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase tracking-tighter">
                      Neural Dust(2016): 무선 고해상도 신경 신호 기록을 위한 하드웨어적 초석.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pain Relievers */}
              <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6 bg-slate-900/40">
                <div className="flex items-center gap-3 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">고통 완화 요소 (Relievers)</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-[13px] text-slate-400 font-light leading-relaxed">
                    학습 루프를 삭제한 'Learning-less' 경험과 실시간 인지 피로도를 측정하는 'Safety Manager'.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start">
                    <Activity className="w-4 h-4 text-slate-600 flex-shrink-0 mt-1" />
                    <p className="text-[10px] font-mono text-slate-600 leading-relaxed uppercase tracking-tighter">
                      HRL Laboratories(2016): 뇌파 전이를 통한 초보자 학습 효율 33% 향상 데이터 확보.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gain Creators */}
              <div className="glass p-8 rounded-[2.5rem] border border-emerald-500/30 space-y-6 bg-emerald-500/[0.08] shadow-[0_0_50px_rgba(16,185,129,0.05)]">
                <div className="flex items-center gap-3 text-emerald-400">
                  <InfinityIcon className="w-5 h-5" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">가치 창출 요소 (Creators)</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-[13px] text-emerald-50 font-medium leading-relaxed">
                    필요한 순간 능력을 켜는 'On-Demand Ability'와 외부 데이터를 자신의 능력으로 인식하게 하는 가소성 최적화.
                  </p>
                  <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex gap-4 items-start">
                    <Brain className="w-4 h-4 text-emerald-400/70 flex-shrink-0 mt-1" />
                    <p className="text-[10px] font-mono text-emerald-100/60 leading-relaxed uppercase tracking-tighter">
                      Tool Incorporation 연구: 적절한 피드백 시 외부 장치를 신체 일부로 완벽히 인식.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 5. 선택 근거: 왜 뇌파 패치인가? (Selection Rationale) ---
export const SelectionRationale: React.FC = () => {
  return (
    <section className="py-32 border-t border-white/5 bg-[#01040a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <span className="text-emerald-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">Selection Rationale</span>
          <h2 className="text-5xl font-bold text-white tracking-tight italic">Why Brainwave Patches?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed uppercase tracking-widest text-[11px] font-bold">능력 전이를 위한 최적의 인터페이스 선택 근거</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7 glass p-12 rounded-[4rem] border border-white/5 space-y-10">
            <div className="flex items-center gap-4">
               <Zap className="w-8 h-8 text-emerald-400" />
               <h3 className="text-2xl font-bold text-white">기술적 당위성: 상태 동기화</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              능력 전이는 단순한 '정보 전달'이 아닌 <span className="text-emerald-400 font-bold">'상태 동기화(State Synchronization)'</span>입니다. 언어나 영상으로는 복제할 수 없는 숙련자의 인지 회로와 판단 영역의 발화 패턴을 실시간으로 포착하고 전달할 수 있는 유일한 매개체는 뇌파(Neural Signal)뿐입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-slate-900/40 rounded-3xl border border-white/5">
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mb-2">Existing Limits</p>
                <p className="text-xs text-slate-400 leading-relaxed font-light">화면/텍스트는 지식 전달에 그치며, 웨어러블은 운동 보조는 가능하나 고차 인지 전달 불가.</p>
              </div>
              <div className="p-6 bg-emerald-500/[0.03] rounded-3xl border border-emerald-500/20">
                <p className="text-[10px] text-emerald-500/60 font-bold uppercase tracking-widest mb-2">Neural Solution</p>
                <p className="text-xs text-emerald-100/60 leading-relaxed font-light">뇌 상태에 직접 접근하여 사용자가 특정 기술 수행 상태로 즉시 진입 가능.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 glass p-12 rounded-[4rem] border border-white/10 bg-emerald-500/[0.01] flex flex-col justify-center space-y-12">
             <div className="space-y-6">
                <div className="flex items-center gap-4 text-emerald-400">
                   <Fingerprint className="w-6 h-6" />
                   <h4 className="text-lg font-bold uppercase tracking-widest">Why Patch Form?</h4>
                </div>
                <ul className="space-y-6">
                   {[
                     { t: "Portability", d: "비침습형으로 언제든 빠른 착·탈 및 일상 사용 가능." },
                     { t: "Social Acceptance", d: "외과적 수술이 필요 없는 저위험 패치 형태로 거부감 최소화." },
                     { t: "Scalability", d: "표준화된 하드웨어 규격으로 글로벌 유통 및 중개 플랫폼 확장 가능." }
                   ].map((item, i) => (
                     <li key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <div>
                           <p className="text-xs font-bold text-white uppercase tracking-wider">{item.t}</p>
                           <p className="text-[11px] text-slate-600 leading-relaxed font-light">{item.d}</p>
                        </div>
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Scale />, title: "Ethical Rationale", desc: "침습형 BCI의 영구적 개입과 달리 가역적이며 사용자 동의 기반의 안전한 통제 가능." },
            { icon: <TrendingUp />, title: "Business Strategy", desc: "제조 단가 하락과 범용성 확보가 용이하여 B2C/B2B 마켓플레이스 구축에 최적." },
            { icon: <ShieldCheck />, title: "Regulatory Compliance", desc: "허용 가능한 최저 위험선(비침습형 저위험군)을 준수하여 교육·산업 영역으로의 빠른 확장성 확보." }
          ].map((reason, i) => (
            <div key={i} className="glass p-10 rounded-[3.5rem] border border-white/5 space-y-6 hover:bg-emerald-500/[0.02] transition-colors group">
              <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight">{reason.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 6. 핵심 기술 (Scientific Grounds) ---
export const TechnicalGrounds: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setIsVisible(e.isIntersecting));
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} id="evidence" className="py-32 border-t border-white/5 bg-emerald-500/[0.01]">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        <div className="max-w-3xl">
          <span className="flex items-center gap-3 text-emerald-400 font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
            <Microscope className="w-4 h-4" /> Scientific Evidence
          </span>
          <h2 className="text-5xl font-bold text-white mb-8">검증된 과학적 근거: <br />인간 인터페이스의 현실화</h2>
          <p className="text-slate-500 leading-relaxed font-light">
            뉴로바인의 기술적 실현 가능성은 이미 발표된 학술적 성과와 실험 데이터를 통해 뒷받침되고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="glass p-10 rounded-[2.5rem] border border-white/10 bg-black/40">
              <div className="flex items-start gap-6">
                <FileText className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white">PLOS ONE (0111332): BBI 실험</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    사람의 뇌에서 다른 사람의 뇌로 정보가 직접 전달될 수 있음을 실험적으로 확인. 전송자의 의도가 TMS 자극으로 전환되어 수신자의 즉각적 행동 유도.
                  </p>
                  <div className="pt-2">
                    <span className="text-[9px] font-mono text-emerald-500/60 uppercase tracking-widest border border-emerald-500/20 px-3 py-1 rounded-full">Source: PLOS ONE 2014</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-[2.5rem] border border-white/10 bg-black/40">
              <div className="flex items-start gap-6">
                <Brain className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white">PubMed (39123894): Motor Tasks</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Motor Imagery(MI)와 Motor Attempt(MA) 분석을 통한 숙련자의 뇌파 패턴 추출. 초보자 학습 속도의 비약적 증가 및 수행 능력 조절 가능성 확인.
                  </p>
                  <div className="pt-2">
                    <span className="text-[9px] font-mono text-emerald-500/60 uppercase tracking-widest border border-emerald-500/20 px-3 py-1 rounded-full">Source: PubMed 2023</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-10 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/[0.03]">
              <div className="flex items-start gap-6">
                <Repeat className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white">Neural Pattern Streaming</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light font-bold">
                    숙련자 데이터 수집·분석을 통한 핵심 기술 패턴 추출 성공률 90% 돌파. 시행착오 최소화 및 학습 곡선 압축 성공.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-center items-center text-center space-y-4">
              <p className="text-6xl font-bold text-emerald-400 font-mono"><AnimatedCounter value={90} suffix="%" isVisible={isVisible} /></p>
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Decoding Accuracy</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-center items-center text-center space-y-4">
              <p className="text-6xl font-bold text-emerald-400 font-mono"><AnimatedCounter value={350} suffix="%" isVisible={isVisible} /></p>
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Efficiency Boost</p>
            </div>
            <div className="col-span-2 glass p-12 rounded-[2.5rem] border border-emerald-500/30 bg-emerald-500/[0.05] flex items-center gap-10 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <FastForward className="w-12 h-12 text-emerald-400 flex-shrink-0" />
              <p className="text-sm text-emerald-100/80 leading-relaxed italic">
                "뉴로바인은 단순한 도구가 아닙니다. 인류가 기술의 속도를 따라잡을 수 있게 하는 신경학적 동기화 계층입니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 6. 기술 융합 비전 & 기술 레이어 ---
export const TechLayers: React.FC = () => {
  return (
    <section id="product" className="py-32 border-t border-white/5 bg-[#01040a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white tracking-tight leading-tight">The Neural Stack <br />AD 2080</h2>
            <p className="text-slate-500 max-w-lg font-light leading-relaxed italic">"접근성·확산성·윤리적 수용성을 우선한 신경망 인프라."</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            {[
              { l: 'L3', n: 'Capability Brokerage Platform', d: '경험이 소유가 아닌 접속이 되는 단계. 글로벌 실시간 경험 동기화 마켓플레이스.' },
              { l: 'L2', n: 'Neural Decoding Engine', d: 'EEG 원시 데이터에서 핵심 판단·감각 패턴을 추출하는 딥러닝 고도화 계층.' },
              { l: 'L1', n: 'Non-Invasive Neuro-Patch', d: '비침습 뇌파 수집 및 TMS 자극을 동시에 수행하는 하드웨어 인터페이스.' }
            ].map((layer, i) => (
              <div key={i} className="glass p-12 rounded-[3.5rem] border border-white/5 flex items-center gap-12 hover:border-emerald-500/30 transition-all group bg-black/30">
                <span className="text-4xl font-mono font-bold text-emerald-900 group-hover:text-emerald-500 transition-colors">{layer.l}</span>
                <div className="w-px h-16 bg-white/5"></div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-tight uppercase tracking-widest">{layer.n}</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{layer.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 glass p-16 rounded-[4.5rem] border border-white/10 flex flex-col justify-center space-y-12 bg-emerald-500/[0.02] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Shield className="w-40 h-40 text-emerald-500" strokeWidth={0.5} />
            </div>
            <div className="w-20 h-20 bg-slate-900 rounded-[2.5rem] flex items-center justify-center border border-white/5 relative z-10">
              <HeartPulse className="w-10 h-10 text-emerald-400" />
            </div>
            <div className="space-y-6 relative z-10">
               <h3 className="text-3xl font-bold text-white tracking-tight">Safety & Ethics</h3>
               <p className="text-sm text-slate-500 leading-relaxed font-light uppercase tracking-widest text-[11px] font-bold text-emerald-500">Fail-Safe Protocol</p>
               <p className="text-sm text-slate-600 leading-relaxed font-light">
                 세션 상한(최대 2시간), 실시간 모니터링, 이상 뇌파 자동 차단. 종료 후 기본 인지 상태로의 100% 가역적 복구 보장.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 7. 서비스 포지셔닝 ---
export const Positioning: React.FC = () => {
  return (
    <section id="positioning" className="py-32 border-t border-white/5 bg-[#01040a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight italic">Efficiency Redefined</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed uppercase tracking-widest text-xs">
            전통적 학습 vs 뉴로바인 동기화
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass p-12 rounded-[4rem] border border-white/5 space-y-10 opacity-40">
            <div className="flex items-center gap-4 text-slate-500">
              <Repeat className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-widest">Education 1.0</h3>
            </div>
            <ul className="space-y-8">
              {[
                { t: "Time-Intensive", d: "기술 습득에 수년 소요" },
                { t: "Linear Growth", d: "인지 피로 및 생물학적 한계" },
                { t: "Structural Gap", d: "기술 발전 속도에 뒤처짐" }
              ].map((item, i) => (
                <li key={i} className="space-y-2">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.t}</p>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-12 rounded-[4rem] border border-emerald-500/20 bg-emerald-500/[0.03] space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12">
              <Sparkles className="w-16 h-16 text-emerald-500/20 animate-pulse" />
            </div>
            <div className="flex items-center gap-4 text-emerald-400">
              <InfinityIcon className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-widest">NeuroVine Sync</h3>
            </div>
            <ul className="space-y-8">
              {[
                { t: "Instant Access", d: "30분 내 기술 수행 상태 진입" },
                { t: "Exponential Leverage", d: "신경망 패턴 스트리밍" },
                { t: "Universal Access", d: "교육의 평등한 접근성 확보" }
              ].map((item, i) => (
                <li key={i} className="space-y-2">
                  <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest">{item.t}</p>
                  <p className="text-xs text-emerald-500/60 font-light leading-relaxed">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 8. BM 구조 & 시장 포지셔닝 (Updated with 3-Layer & 상세 수익구조) ---
export const BusinessModel: React.FC = () => {
  return (
    <section id="market" className="py-32 border-t border-white/5 bg-[#01040a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
          <span className="text-emerald-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">Business Model & Revenue Streams</span>
          <h2 className="text-5xl font-bold text-white tracking-tight leading-tight">3-Layer Architecture <br />& <span className="text-emerald-500">Value Distribution</span></h2>
        </div>

        {/* 3-Layer Architecture Section */}
        <div className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-white/10 text-emerald-400">
               <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-widest uppercase tracking-[0.2em]">Experience Infrastructure</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {/* Connection Arrows (Desktop only) */}
             <div className="hidden md:block absolute top-1/2 left-[31%] -translate-y-1/2 text-emerald-900">
                <ArrowRight className="w-10 h-10" />
             </div>
             <div className="hidden md:block absolute top-1/2 left-[65%] -translate-y-1/2 text-emerald-900">
                <ArrowRight className="w-10 h-10" />
             </div>

             {/* Layer 1 */}
             <div className="glass p-10 rounded-[3rem] border border-white/5 space-y-8 bg-black/40 hover:border-emerald-500/20 transition-all group">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-emerald-500/60 tracking-widest uppercase">Layer 01</span>
                  <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">Experience Provider</h4>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5 flex items-center gap-4">
                   <UserCheck className="w-6 h-6 text-emerald-500" />
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Masters & Experts</p>
                </div>
                <ul className="space-y-4">
                   <li className="text-[11px] text-slate-500 leading-relaxed font-light">
                      • 숙련된 경험·판단 기준을 데이터로 플랫폼에 등록
                   </li>
                   <li className="text-[11px] text-slate-500 leading-relaxed font-light">
                      • 경험 활용도에 따른 투명한 수익 분배(Profit Share)
                   </li>
                   <li className="text-[11px] text-slate-500 leading-relaxed font-light">
                      • 개인 노하우의 영구적 보존 및 유산화(Legacy)
                   </li>
                </ul>
             </div>

             {/* Layer 2 */}
             <div className="glass p-10 rounded-[3rem] border border-emerald-500/20 space-y-8 bg-emerald-500/[0.02] shadow-[0_0_80px_rgba(16,185,129,0.05)] group">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-emerald-500 tracking-widest uppercase">Layer 02</span>
                  <h4 className="text-xl font-bold text-white tracking-tight uppercase tracking-wider">The Core Engine</h4>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-4">
                   <Server className="w-6 h-6 text-emerald-400" />
                   <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Proprietary Neural Stack</p>
                </div>
                <ul className="space-y-4">
                   <li className="text-[11px] text-emerald-100/60 leading-relaxed font-light">
                      • BCI/웨어러블 기반 신경·행동 데이터 실시간 정밀 수집
                   </li>
                   <li className="text-[11px] text-emerald-100/60 leading-relaxed font-light">
                      • Generative AI 기반 경험 단위 재구성 및 고도화
                   </li>
                   <li className="text-[11px] text-emerald-100/60 leading-relaxed font-light">
                      • 독점적 캘리브레이션 및 안전/윤리 제어 레이어
                   </li>
                </ul>
             </div>

             {/* Layer 3 */}
             <div className="glass p-10 rounded-[3rem] border border-white/5 space-y-8 bg-black/40 hover:border-emerald-500/20 transition-all group">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-emerald-500/60 tracking-widest uppercase">Layer 03</span>
                  <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">Capability Consumer</h4>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5 flex items-center gap-4">
                   <Users className="w-6 h-6 text-emerald-500" />
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">B2C / B2B / B2G Users</p>
                </div>
                <ul className="space-y-4">
                   <li className="text-[11px] text-slate-500 leading-relaxed font-light">
                      • 배움의 과정 없이 필요한 능력에 즉시 "접속"
                   </li>
                   <li className="text-[11px] text-slate-500 leading-relaxed font-light">
                      • 반복 비용 최소화 및 즉각적인 실무 기술 활용
                   </li>
                   <li className="text-[11px] text-slate-500 leading-relaxed font-light">
                      • 평생 학습 플랫폼의 새로운 표준 인프라
                   </li>
                </ul>
             </div>
          </div>
        </div>

        {/* Revenue Streams Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
           <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white italic tracking-tight">Revenue Streams</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed max-w-lg">
                  초기 클래스 중개 모델(B2C)을 통한 시장 장악과 중장기 기업 구독 모델(B2B)을 통한 인적 자원 인프라 선점 전략.
                </p>
              </div>

              <div className="space-y-8">
                 {/* B2C Revenue */}
                 <div className="flex gap-8 group">
                    <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shadow-xl group-hover:scale-110 transition-transform">
                       <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-2xl font-bold text-white tracking-tight">B2C: Class Brokerage Fees</h4>
                       <div className="flex items-center gap-6">
                          <p className="text-4xl font-black text-emerald-400 font-mono">20~30%</p>
                          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest leading-relaxed">플랫폼 중개 <br />수수료 수익</p>
                       </div>
                       <p className="text-xs text-slate-500 leading-relaxed font-light italic">
                         "배움 클래스 중개 수수료 수익 모델. 단순 영상 시청이 아닌 '즉시 습득형 데이터' 제공으로 기존 교육 플랫폼과 본질적 차별화."
                       </p>
                    </div>
                 </div>

                 {/* B2B Revenue */}
                 <div className="flex gap-8 group">
                    <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shadow-xl group-hover:scale-110 transition-transform">
                       <Briefcase className="w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-2xl font-bold text-white tracking-tight">B2B: Workforce Subscription</h4>
                       <div className="flex items-center gap-6">
                          <p className="text-4xl font-black text-white font-mono">SAAS</p>
                          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest leading-relaxed">기업 구독형 <br />능력 제공 솔루션</p>
                       </div>
                       <p className="text-xs text-slate-500 leading-relaxed font-light italic">
                         "교육 중심 연수를 대체하여 실무 수행 중 필요한 역량을 즉시 구독 형태로 공급. 신입 온보딩 기간 단축 및 기술 표준화 실현."
                       </p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="glass p-20 rounded-[6rem] border border-white/10 flex flex-col justify-center items-center text-center space-y-16 bg-slate-950/40 shadow-inner group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                 <DollarSign className="w-60 h-60 text-emerald-500" strokeWidth={0.5} />
              </div>
              <PieChart className="w-24 h-24 text-emerald-500 group-hover:rotate-12 transition-transform relative z-10" strokeWidth={1} />
              <div className="space-y-8 relative z-10">
                <h3 className="text-2xl font-bold text-white tracking-widest uppercase tracking-[0.4em] text-emerald-500/80">Projected Market Impact</h3>
                <div className="space-y-2">
                   <p className="text-[10px] text-slate-600 font-bold tracking-[0.4em] uppercase">AD 2085 Targeted EBITDA</p>
                   <p className="text-8xl font-black text-white tracking-tighter">$2.4B</p>
                </div>
                <div className="pt-6 border-t border-white/5 flex justify-center gap-12 text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                   <span>B2C Share: 45%</span>
                   <span>B2B Share: 55%</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- 9. 팀 소개 & 운영 정책 (Updated with 18 Team Members) ---
export const Architects: React.FC = () => {
  const team = [
    { name: "김근영", role: "프론트엔드", detail: "기술 리서치" },
    { name: "김범진", role: "클라우드 네이티브", detail: "아키텍처 초기 설계" },
    { name: "김아름", role: "PM", detail: "기획 리드, PRD 작성" },
    { name: "남경은", role: "백엔드", detail: "기술 리서치" },
    { name: "남경진", role: "풀스택", detail: "시장 진입 및 확장 전략 구체화" },
    { name: "신형우", role: "프로덕트디자인", detail: "VPC / BMC 작성" },
    { name: "안용식", role: "클라우드 네이티브", detail: "BM 및 수익 구조 구체화" },
    { name: "양승엽", role: "생성형 AI", detail: "생성형 AI 테크 리드" },
    { name: "윤홍민", role: "백엔드", detail: "기술 리서치" },
    { name: "이동석", role: "백엔드", detail: "기술 리서치" },
    { name: "이세현", role: "백엔드", detail: "API 명세" },
    { name: "이수호", role: "팀장 / 프로덕트디자인", detail: "UI 리드, 디자인시스템 리드" },
    { name: "이예림", role: "프로덕트디자인", detail: "기술 리서치" },
    { name: "이은초", role: "프로덕트디자인", detail: "BI 리드" },
    { name: "조영운", role: "사이버 보안", detail: "보안 위협 요소 정리" },
    { name: "최민재", role: "사이버 보안", detail: "대응 방안 및 보안 정책 요약" },
    { name: "허예은", role: "사이버 보안", detail: "보안 정책 요약 및 설계" },
    { name: "홍성주", role: "생성형 AI", detail: "기술 검토, 논문 리서치" },
  ];

  return (
    <section id="architects" className="py-32 border-t border-white/5 bg-[#01040a]">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        <div>
          <h2 className="text-3xl font-bold mb-24 uppercase tracking-[0.4em] text-white text-center italic">The Neural Architects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person, i) => (
              <div key={i} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/30 transition-all group bg-black/40 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-emerald-400 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                  <User className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white tracking-tight">{person.name}</h3>
                  <p className="text-emerald-500 text-[10px] font-bold tracking-[0.2em] uppercase">{person.role}</p>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-light">{person.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-24 rounded-[6rem] border border-white/10 bg-emerald-500/[0.01] shadow-2xl">
          <h2 className="text-3xl font-bold mb-20 uppercase tracking-[0.4em] text-white text-center">Operation Ethics Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck />, title: "Safety First", desc: "사용자 인지 안전을 모든 성과보다 우선함." },
              { icon: <Scale />, title: "Reversibility", desc: "기본 인지 상태로의 100% 안전 복귀." },
              { icon: <Eye />, title: "Transparency", desc: "위험도 및 AI 판단 근거의 실시간 고지." },
              { icon: <Lock />, title: "Sovereignty", desc: "개인의 의식적 주도권 및 뇌파 주권 보호." }
            ].map((policy, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center text-emerald-400 mx-auto border border-white/5 shadow-xl">{policy.icon}</div>
                <h4 className="font-bold text-white uppercase tracking-[0.2em] text-xs leading-relaxed">{policy.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-light px-4">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 10. 투자 유도 (CTA) ---
export const CTA: React.FC = () => {
  return (
    <section className="py-44 border-t border-white/5 bg-[#01040a]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="glass p-32 rounded-[7rem] border border-white/15 space-y-20 shadow-2xl relative overflow-hidden bg-slate-900/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[4px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_40px_#10b981]"></div>
          <h2 className="text-6xl font-bold tracking-tight text-white leading-tight italic">"The Future is Ready for <span className="text-emerald-500">Sync.</span>"</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-xl leading-relaxed font-light italic">배움은 더 이상 소유가 아니라 접속입니다. <br />전 세계 최초의 인간 인터페이스 인프라 투자에 참여하십시오.</p>
          <div className="flex flex-col sm:flex-row gap-10 justify-center pt-10">
            <button className="px-20 py-8 bg-emerald-500 text-slate-950 font-black text-[14px] tracking-[0.4em] rounded-full hover:bg-emerald-400 transition-all uppercase shadow-[0_0_60px_rgba(16,185,129,0.4)]">Request IR Data Room</button>
            <button className="px-20 py-8 border border-white/20 text-white font-bold text-[14px] tracking-[0.4em] rounded-full hover:bg-white/5 transition-all uppercase">Investor Contact</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Stripe Component
export const StatsStripe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);
  return (
    <section ref={sectionRef} className="py-40 bg-[#01040a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-20 text-center">
        <div className="space-y-6"><p className="text-6xl font-bold text-emerald-400"><AnimatedCounter value={0.02} decimals={2} suffix="s" isVisible={isVisible} /></p><p className="text-[11px] font-bold text-slate-600 tracking-[0.5em] uppercase">Sync Latency</p></div>
        <div className="space-y-6"><p className="text-6xl font-bold text-emerald-400"><AnimatedCounter value={90} suffix="%" isVisible={isVisible} /></p><p className="text-[11px] font-bold text-slate-600 tracking-[0.5em] uppercase">Pattern Extraction</p></div>
        <div className="space-y-6"><p className="text-6xl font-bold text-emerald-400">0.00</p><p className="text-[11px] font-bold text-slate-600 tracking-[0.5em] uppercase">Skill Decay</p></div>
        <div className="space-y-6"><p className="text-6xl font-bold text-emerald-400">Instant</p><p className="text-[11px] font-bold text-slate-600 tracking-[0.5em] uppercase">Transfer</p></div>
      </div>
    </section>
  );
};
