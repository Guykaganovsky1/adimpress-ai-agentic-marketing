/**
 * Shared Navbar and Footer used by all inner pages
 */
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Agents', to: '/agents' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
];

// ─── Pages Dropdown ───────────────────────────────────────────────────────────

const PagesDropdown = ({ active }: { active?: string }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = NAV_LINKS.some(l => l.label === active);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-[#F27D26]' : 'text-white/70 hover:text-white'}`}
      >
        Pages <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setOpen(false)}
              className={`block px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors border-b border-white/5 last:border-0 ${active === label ? 'text-[#F27D26] bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Shared Navbar ────────────────────────────────────────────────────────────

export const PageNavbar = ({ active }: { active?: string }) => (
  <nav className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-[#050505] border-b border-white/5">
    <Link to="/" className="text-xl font-black tracking-tighter italic text-[#F27D26]">
      ADIMPRESS
    </Link>

    <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
      <Link to="/" className="hover:text-white transition-colors">Home</Link>
      <PagesDropdown active={active} />
    </div>

    <a
      href="/#contact"
      className="bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all"
    >
      Free Audit
    </a>
  </nav>
);

// ─── Shared Footer ─────────────────────────────────────────────────────────────

export const PageFooter = () => (
  <footer className="bg-black border-t border-white/5 px-8 py-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-3">
        <div className="text-2xl font-black tracking-tighter italic text-[#F27D26]">ADIMPRESS</div>
        <p className="text-sm font-light text-white/40 leading-relaxed">
          Agentic AI marketing agency.<br />21 specialized agents, 24/7.
        </p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Koh Phangan, Thailand</p>
      </div>

      <div className="space-y-4">
        <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Navigation</div>
        <div className="flex flex-col gap-3">
          {[...NAV_LINKS, { label: 'Contact', to: '/#contact' }].map(({ label, to }) => (
            to.includes('#')
              ? <a key={label} href={to} className="text-sm text-white/50 hover:text-white transition-colors">{label}</a>
              : <Link key={label} to={to} className="text-sm text-white/50 hover:text-white transition-colors">{label}</Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Contact</div>
        <a href="mailto:hello@adimpress.com" className="block text-sm text-white/50 hover:text-white transition-colors">
          hello@adimpress.com
        </a>
        <div className="flex gap-4 text-sm text-white/40">
          <a href="https://instagram.com/adimpress" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://twitter.com/adimpress" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://linkedin.com/company/adimpress" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/15">
      © 2026 Adimpress. AI-powered. Human-reviewed.
    </div>
  </footer>
);
