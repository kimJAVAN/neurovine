
import React from 'react';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'SUMMARY', href: '#summary' },
  { label: 'EVIDENCE', href: '#evidence' },
  { label: 'PRODUCT', href: '#product' },
  { label: 'ECONOMICS', href: '#market' },
  { label: 'ARCHITECTS', href: '#architects' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#01040a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-emerald-500 rounded-sm shadow-[0_0_10px_#10b981]"></div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight leading-none uppercase">NeuroVine</span>
            <span className="text-[8px] text-slate-500 tracking-[0.2em] font-mono mt-0.5 uppercase">Capability Infrastructure AD 2080</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-[10px] font-bold text-slate-500 hover:text-emerald-400 transition-all tracking-[0.2em]">
              {link.label}
            </a>
          ))}
        </div>

        <button className="px-5 py-2.5 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold tracking-widest rounded-full hover:bg-emerald-500 hover:text-slate-900 transition-all uppercase">
          Access IR Data Room
        </button>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#01040a] border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-emerald-500 rounded-sm"></div>
              <span className="font-bold text-lg">NeuroVine</span>
            </div>
            <p className="text-[9px] text-slate-600 font-mono tracking-widest leading-relaxed uppercase">
              Redefining education as capability access rights. Established 2080.
            </p>
          </div>
          
          <div>
            <h4 className="text-[9px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-8">IR Navigation</h4>
            <ul className="space-y-4 text-[11px] text-slate-500">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Strategic Thesis</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Unit Economics</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Ethics Board</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-8">Science & Legal</h4>
            <ul className="space-y-4 text-[11px] text-slate-500">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Peer Reviewed Data</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Compliance 2080</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Neural Safety Act</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-8">Global Hubs</h4>
            <ul className="space-y-4 text-[11px] text-slate-500 font-mono">
              <li>invest@neurovine.sys</li>
              <li>Neo-Silicon Valley, NA</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[9px] text-slate-700 font-mono tracking-widest uppercase">
          <p>© 2080 NEUROVINE BCI SYSTEMS INC. HIGHLY CONFIDENTIAL.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-slate-500 transition-colors">Sovereignty Protocol</a>
            <a href="#" className="hover:text-slate-500 transition-colors">Privacy Shield</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
