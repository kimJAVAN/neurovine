
import React from 'react';
import { Navbar, Footer } from './components/Layout';
import { 
  Hero, 
  StrategyThesis,
  MarketRoadmap,
  ProblemDefinition,
  ValueProposition,
  SelectionRationale,
  TechnicalGrounds,
  TechLayers,
  StatsStripe,
  Positioning,
  BusinessModel,
  Architects,
  CTA
} from './components/Sections';
import { ChatAssistant } from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-black bg-[#01040a]">
      <Navbar />
      <main>
        {/* 1. 메인 (Hero) */}
        <Hero />
        
        {/* 2. 전략 수립의 핵심 전제 (Strategy Thesis) */}
        <StrategyThesis />

        {/* 3. 단계별 시장 확장 요약 (Market Roadmap Phase 1-4) */}
        <MarketRoadmap />
        
        {/* 4. 문제 정의 & RICE 프레임워크 (Problem Definition) */}
        <ProblemDefinition />

        {/* 5. 가치 제안 캔버스 (Value Proposition Canvas) */}
        <ValueProposition />

        {/* 6. 선택 근거: 왜 뇌파 패치인가? (Selection Rationale) */}
        <SelectionRationale />
        
        {/* 7. 핵심 기술 & 과학적 근거 (Technical Evidence) */}
        <TechnicalGrounds />
        
        {/* 8. 기술 융합 비전 & 기술 레이어 (The Neural Stack) */}
        <TechLayers />
        
        {/* 중간 지표 시각화 (Real-time Stats) */}
        <StatsStripe />
        
        {/* 9. 서비스 포지셔닝 (Education 1.0 vs NeuroVine Sync) */}
        <Positioning />
        
        {/* 10. BM 구조 & 수익성 (Business Model) */}
        <BusinessModel />
        
        {/* 11. 팀원 / 팀 소개 (Architects) */}
        <Architects />
        
        {/* 12. 투자 유도 문구 (CTA) */}
        <CTA />
      </main>
      <ChatAssistant />
      <Footer />
    </div>
  );
};

export default App;
