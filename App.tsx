
import React from 'react';
import { Navbar, Footer } from './components/Layout';
import { 
  Hero, 
  NeuralBridge, 
  StructuralFailure, 
  ConvergenceMap, 
  AccessRights, 
  TechStack, 
  StatsStripe, 
  MarketOpportunity,
  StrategicPositioning,
  Vision,
  Architects,
  CTA
} from './components/Sections';
import { ChatAssistant } from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-black bg-[#01040a]">
      <Navbar />
      <main>
        <Hero />
        <NeuralBridge />
        <StructuralFailure />
        <ConvergenceMap />
        <AccessRights />
        <TechStack />
        <StatsStripe />
        <MarketOpportunity />
        <StrategicPositioning />
        <Vision />
        <Architects />
        <CTA />
      </main>
      <ChatAssistant />
      <Footer />
    </div>
  );
};

export default App;
