/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Zap,
  Target,
  Layers,
  Globe,
  Sparkles,
  BarChart3,
  MessageSquare,
  X,
  Send,
  Loader2,
  ChevronDown,
  Quote,
  TrendingUp,
  Activity,
  Heart,
  Check,
  Search,
  Play,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const getAI = (() => {
  let instance: GoogleGenAI | null = null;
  return () => {
    if (!instance && process.env.GEMINI_API_KEY) {
      instance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
    return instance;
  };
})();

// ─── Navbar ──────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center mix-blend-difference text-white">
      <div className="text-xl md:text-2xl font-black tracking-tighter italic">ADIMPRESS</div>

      <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
        <a href="#services" className="hover:text-[#F27D26] transition-colors">Services</a>
        <a href="#why" className="hover:text-[#F27D26] transition-colors">Why Us</a>
        <a href="#lab" className="hover:text-[#F27D26] transition-colors">AI Demo</a>
        <a href="#pricing" className="hover:text-[#F27D26] transition-colors">Pricing</a>
        <a href="#work" className="hover:text-[#F27D26] transition-colors">Work</a>
        <a href="#faq" className="hover:text-[#F27D26] transition-colors">FAQ</a>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden sm:block bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all"
        >
          Free Audit
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="md:hidden p-2 hover:text-[#F27D26] transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="space-y-1.5 flex flex-col items-end">
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-4 h-0.5 bg-white" />
              <div className="w-2 h-0.5 bg-white" />
            </div>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/20 z-40 flex flex-col items-center justify-center p-8 md:hidden"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 p-2 text-white hover:text-[#F27D26] transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="flex flex-col items-center gap-8 text-2xl font-black uppercase tracking-tighter italic">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">Services</a>
              <a href="#why" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">Why Us</a>
              <a href="#lab" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">AI Demo</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">Pricing</a>
              <a href="#work" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">Work</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">FAQ</a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#F27D26] text-white px-12 py-4 mt-4"
              >
                Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-[#050505] text-white flex flex-col justify-center px-6 md:px-8 relative overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pt-4 md:pt-24"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-6 block">
          AI-Powered Digital Agency
        </span>
        <h1 className="text-[11vw] md:text-[9vw] leading-[0.85] font-black uppercase tracking-tighter md:-ml-[0.5vw]">
          YOUR WEBSITE
          <br />
          SHOULD MAKE
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>
            YOU MONEY.
          </span>
        </h1>
      </motion.div>

      <div className="mt-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl space-y-8"
        >
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-60">
            Adimpress builds websites, apps, and marketing systems designed to generate leads,
            make sales, and grow your business — not collect dust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-4 bg-[#F27D26] px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Get a free conversion audit <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-4 border border-white/20 px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              <Play className="w-5 h-5" />
              See our services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="hidden lg:flex gap-12"
        >
          {[
            { label: 'Sites Launched', value: '40+' },
            { label: 'Avg. Load Time', value: '<2s' },
            { label: 'Client ROI', value: '4–12x' },
          ].map((stat) => (
            <div key={stat.label} className="text-right">
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">{stat.label}</div>
              <div className="text-5xl font-black italic">{stat.value}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute left-0 bottom-0 w-full h-1/3 pointer-events-none overflow-hidden opacity-10">
        <motion.div
          animate={isPaused ? { x: '0%' } : { x: ['0%', '-50%'] }}
          transition={isPaused ? { duration: 0 } : { duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap text-[25vw] font-black uppercase tracking-tighter italic"
        >
          WEBSITES • APPS • AI TOOLS • SEO • PAID ADS •&nbsp;
        </motion.div>
      </div>

      {/* Pause button hidden but preserved for state */}
      <button onClick={() => setIsPaused(!isPaused)} className="sr-only">Toggle marquee</button>
    </section>
  );
};

// ─── Trust Bar ────────────────────────────────────────────────────────────────

const TrustBar = () => (
  <section className="bg-white text-black py-8 border-y border-black/10 overflow-hidden">
    <div className="flex items-center gap-4 mb-4 px-8">
      <div className="w-2 h-2 rounded-full bg-[#F27D26]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">
        Trusted by forward-thinking businesses
      </span>
    </div>
    <motion.div
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="flex whitespace-nowrap gap-16 text-[10px] font-bold uppercase tracking-[0.3em] opacity-30"
    >
      {[
        'Lumina Tech', 'Aura Fashion', 'Nexus Bank', 'Vibe Energy',
        'Pulse Health', 'Zenith AI', 'Orbit Travel', 'Nova Studio',
        'Lumina Tech', 'Aura Fashion', 'Nexus Bank', 'Vibe Energy',
        'Pulse Health', 'Zenith AI', 'Orbit Travel', 'Nova Studio',
      ].map((name, i) => (
        <span key={i}>{name} &nbsp;•</span>
      ))}
    </motion.div>
  </section>
);

// ─── Services ─────────────────────────────────────────────────────────────────

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Websites & Apps',
      headline: 'Built to Perform',
      desc: 'Your website is your best salesperson — but most are just expensive business cards. We build sites and apps that load fast, rank on Google, and turn visitors into paying customers. From landing pages to full e-commerce builds.',
      cta: 'See our work',
      href: '#work',
      icon: <Globe className="w-8 h-8" />,
      keywords: ['Web Design', 'Development', 'E-Commerce', 'Landing Pages'],
    },
    {
      number: '02',
      title: 'AI & Automation',
      headline: 'That Works for Your Business',
      desc: 'Stop spending hours on tasks a machine can do better. We build AI chatbots, automations, and intelligent tools that handle the busywork — so you can focus on growing. Customer service bots, lead qualification, internal tools.',
      cta: 'See AI in action',
      href: '#lab',
      icon: <Cpu className="w-8 h-8" />,
      keywords: ['AI Chatbots', 'Automation', 'Lead Qualification', 'Workflows'],
    },
    {
      number: '03',
      title: 'SEO & Content',
      headline: 'Get Found on Page One',
      desc: 'No fluff. Just rankings. Our SEO combines technical optimization with AI-powered content that earns citations and backlinks. We track every keyword, every ranking, every dollar of organic traffic. Monthly reports. Real data.',
      cta: 'Check your ranking potential',
      href: '#contact',
      icon: <Search className="w-8 h-8" />,
      keywords: ['Technical SEO', 'Content Strategy', 'Link Building', 'Agentic SEO'],
    },
    {
      number: '04',
      title: 'Paid Advertising',
      headline: 'Ads That Pay for Themselves',
      desc: "We manage Google Ads and Meta campaigns that bring qualified leads at a price that makes sense. No vanity metrics — just conversions you can track. We don't start campaigns until we know your numbers.",
      cta: 'Get a free ad audit',
      href: '#contact',
      icon: <Target className="w-8 h-8" />,
      keywords: ['Google Ads', 'Meta Ads', 'PPC', 'Conversion Tracking'],
    },
  ];

  return (
    <section id="services" className="bg-white text-black py-32 px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
          Everything you need
        </span>
        <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
          SHOW UP, <br /> GET FOUND, <br /> SELL.
        </h2>
        <p className="mt-8 text-xl font-light opacity-60 max-w-xl">
          We don't do generic templates. Every project is built to hit specific business goals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 border-t border-black">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 md:p-12 border-r border-b border-black group hover:bg-black hover:text-white transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">{s.number}</span>
              <div className="text-[#F27D26]">{s.icon}</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">{s.title}</h3>
            <div className="text-[#F27D26] text-sm font-bold uppercase tracking-widest mb-6">{s.headline}</div>
            <p className="text-base font-light leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity mb-8">
              {s.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {s.keywords.map((k) => (
                <span
                  key={k}
                  className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 border border-current opacity-30"
                >
                  {k}
                </span>
              ))}
            </div>
            <a
              href={s.href}
              className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest group-hover:text-[#F27D26] transition-colors"
            >
              {s.cta} <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ─── Why Adimpress ────────────────────────────────────────────────────────────

const WhyAdimpress = () => {
  const differentiators = [
    { icon: <Zap className="w-6 h-6" />, title: 'No bloat', desc: 'Sites load in under 2 seconds. No page builders, no unnecessary plugins, no excuses.' },
    { icon: <Cpu className="w-6 h-6" />, title: 'AI-first', desc: 'We use AI tools most agencies don\'t know exist — from design to SEO to copy.' },
    { icon: <Heart className="w-6 h-6" />, title: 'Human oversight', desc: 'Every AI output reviewed by a senior team member before it touches your brand.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Measurable', desc: 'You get dashboards and real data, not vague "brand awareness" reports.' },
    { icon: <Check className="w-6 h-6" />, title: 'Fixed pricing', desc: 'No surprise invoices. Scope is agreed upfront. You know exactly what you\'re paying.' },
  ];

  return (
    <section id="why" className="bg-[#050505] text-white py-32 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] block">
              Why Adimpress
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
              MOST AGENCIES SELL YOU A WEBSITE.
              <br />
              <span className="text-[#F27D26]">WE SELL YOU A GROWTH SYSTEM.</span>
            </h2>
            <p className="text-xl font-light opacity-60 leading-relaxed max-w-lg">
              We're built different. Every project starts with your business goal — not a template.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-4 bg-[#F27D26] px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Start a project <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <div className="space-y-1">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start p-6 border border-white/5 hover:border-[#F27D26]/30 hover:bg-white/5 transition-all"
              >
                <div className="text-[#F27D26] mt-0.5 shrink-0">{d.icon}</div>
                <div>
                  <div className="font-black uppercase tracking-tight text-lg mb-1">{d.title}</div>
                  <div className="text-sm font-light opacity-50 leading-relaxed">{d.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Background Animation ────────────────────────────────────────────────────

const BackgroundAnimation = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full border border-[#F27D26]/30 blur-3xl"
      />
      <motion.div
        style={{ y: y2, rotate: -rotate }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full border border-white/10 blur-3xl"
      />
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 10,0 Q 90,50 10,100"
          fill="none"
          stroke="#F27D26"
          strokeWidth="0.1"
          style={{ pathLength }}
        />
        <motion.path
          d="M 90,0 Q 10,50 90,100"
          fill="none"
          stroke="white"
          strokeWidth="0.05"
          style={{ pathLength }}
        />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
    </div>
  );
};

// ─── Neural Network (floating visual) ────────────────────────────────────────

// Hoisted to module level — stable across renders (react-best-practices: rendering-hoist-jsx)
const NEURAL_CIRCLES = Array.from({ length: 20 }, () => ({
  cx: Math.random() * 100,
  cy: Math.random() * 100,
  duration: Math.random() * 3 + 2,
}));

const NEURAL_LINES = Array.from({ length: 15 }, () => ({
  x1: Math.random() * 100,
  y1: Math.random() * 100,
  x2: Math.random() * 100,
  y2: Math.random() * 100,
  duration: Math.random() * 5 + 5,
}));

const NeuralNetwork = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.1, 0.1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <svg className="w-full h-full max-w-4xl max-h-4xl" viewBox="0 0 100 100">
        {NEURAL_CIRCLES.map((c, i) => (
          <motion.circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r="0.5"
            fill="#F27D26"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: c.duration, repeat: Infinity }}
          />
        ))}
        {NEURAL_LINES.map((l, i) => (
          <motion.line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#F27D26"
            strokeWidth="0.05"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: l.duration, repeat: Infinity }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

// ─── Neural Creative Lab (AI Demo) ───────────────────────────────────────────

const NeuralCreativeLab = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<{ headline: string; copy: string; imageUrl?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateConcept = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      const ai = getAI();
      if (!ai) throw new Error('AI not configured');
      const textResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a compelling marketing concept for: ${prompt}. Return JSON with "headline" (punchy, max 8 words) and "copy" (benefit-focused, max 20 words).`,
        config: { responseMimeType: 'application/json' },
      });
      const copyData = JSON.parse(textResponse.text);

      const imageResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: `A professional, high-impact marketing visual for ${prompt}. Bold orange and black color scheme, clean composition, cinematic lighting, 8k.`,
            },
          ],
        },
        config: { imageConfig: { aspectRatio: '16:9' } },
      });

      let imageUrl = '';
      for (const part of imageResponse.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
        }
      }

      setResult({ ...copyData, imageUrl });
    } catch (err) {
      console.error(err);
      setError('Generation failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="lab" className="bg-white text-black py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
                Live AI Demo
              </span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                AI THAT <br /> WORKS FOR <br /> YOU.
              </h2>
            </motion.div>
            <p className="text-xl font-light opacity-60 leading-relaxed">
              This is what AI automation looks like in practice. Enter any brand or product and our
              AI generates a marketing concept in seconds — copy, visuals, the lot.
            </p>
            <div className="space-y-4">
              <div className="relative flex flex-col sm:block">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && generateConcept()}
                  placeholder="Enter your brand or product name..."
                  className="w-full bg-black/5 border border-black/10 rounded-2xl py-6 px-8 text-lg focus:outline-none focus:border-[#F27D26] transition-colors mb-4 sm:mb-0"
                />
                <button
                  onClick={generateConcept}
                  disabled={isLoading}
                  className="sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2 bg-black text-white px-8 py-4 sm:py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-[#F27D26] transition-all disabled:opacity-50 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  Generate
                </button>
              </div>
              {error && <p className="text-red-500 text-sm font-bold uppercase tracking-widest">{error}</p>}
            </div>
          </div>

          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6"
                >
                  <div className="w-16 h-16 border-4 border-[#F27D26] border-t-transparent rounded-full animate-spin" />
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">
                    Generating concept...
                  </div>
                </motion.div>
              ) : result ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0"
                >
                  {result.imageUrl && (
                    <img
                      src={result.imageUrl}
                      alt="AI Generated Concept"
                      className="w-full h-full object-cover opacity-60"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
                        AI Generated
                      </span>
                      <h4 className="text-4xl font-black uppercase tracking-tight text-white mb-4">
                        {result.headline}
                      </h4>
                      <p className="text-lg font-light text-white/80 max-w-md">{result.copy}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white/20 p-12 text-center"
                >
                  <Cpu className="w-24 h-24 mb-6 opacity-10" />
                  <p className="text-sm font-bold uppercase tracking-widest">Enter your brand above to generate</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── ROI Calculator ───────────────────────────────────────────────────────────

const ROICalculator = () => {
  const [budget, setBudget] = useState(5000);

  const data = [
    { month: 'M1', leads: Math.round(budget * 0.002) },
    { month: 'M2', leads: Math.round(budget * 0.004) },
    { month: 'M3', leads: Math.round(budget * 0.007) },
    { month: 'M4', leads: Math.round(budget * 0.011) },
    { month: 'M5', leads: Math.round(budget * 0.016) },
    { month: 'M6', leads: Math.round(budget * 0.022) },
  ];

  const monthlyLeads = Math.round(budget * 0.022);
  const annualRevenue = monthlyLeads * 12 * 2500; // avg deal $2,500
  const annualRevenueFormatted = annualRevenue >= 1_000_000
    ? `$${(annualRevenue / 1_000_000).toFixed(1)}M`
    : `$${(annualRevenue / 1000).toFixed(0)}k`;

  return (
    <section id="roi" className="py-32 bg-[#050505] text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
                ROI Calculator
              </span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                WHAT WOULD 10 MORE LEADS{' '}
                <span className="text-[#F27D26]">MEAN FOR YOU?</span>
              </h2>
            </motion.div>
            <p className="text-xl font-light opacity-60 leading-relaxed max-w-lg">
              Most business owners know they need a better website. They just haven't seen proof it converts.
            </p>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest">Monthly Marketing Budget</span>
                <span className="text-2xl font-black italic">${budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                aria-label="Monthly marketing budget"
                aria-valuemin={1000}
                aria-valuemax={50000}
                aria-valuenow={budget}
                className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-[#F27D26]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-6 bg-white/5 border border-white/10">
                <div className="text-3xl font-black italic text-[#F27D26]">{monthlyLeads}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1">
                  Est. Monthly Leads
                </div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10">
                <div className="text-3xl font-black italic text-[#F27D26]">
                  {annualRevenueFormatted}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1">
                  Est. Annual Revenue
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all"
            >
              Book your free audit <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="h-[400px] bg-white/5 border border-white/10 p-8">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8">
              Projected Lead Growth (6 months)
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F27D26" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#F27D26" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis
                  dataKey="month"
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#050505',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '10px',
                  }}
                  itemStyle={{ color: '#F27D26', fontWeight: 'bold' }}
                />
                <Area
                  type="monotone"
                  dataKey="leads"
                  stroke="#F27D26"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorLeads)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Stats ────────────────────────────────────────────────────────────────────

const StatsSection = () => {
  const data = [
    { name: 'M1', perf: 42 },
    { name: 'M2', perf: 55 },
    { name: 'M3', perf: 63 },
    { name: 'M4', perf: 72 },
    { name: 'M5', perf: 84 },
    { name: 'M6', perf: 95 },
  ];

  const stats = [
    { icon: <Activity className="w-8 h-8 text-[#F27D26]" />, value: '<2s', label: 'Average Load Time' },
    { icon: <TrendingUp className="w-8 h-8 text-[#F27D26]" />, value: '4–12x', label: 'Client ROI Range' },
    { icon: <Layers className="w-8 h-8 text-[#F27D26]" />, value: '40+', label: 'Projects Delivered' },
    { icon: <Target className="w-8 h-8 text-[#F27D26]" />, value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="stats" className="bg-[#050505] text-white py-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
              The Numbers
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              RESULTS <br /> THAT SPEAK
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 bg-[#111] border border-white/5 rounded-2xl"
              >
                {s.icon}
                <div className="text-3xl md:text-4xl font-black my-2">{s.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-[400px] w-full bg-[#111] border border-white/5 rounded-3xl p-8">
          <div className="mb-8 flex justify-between items-center">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">
              Client Performance Over 6 Months
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#F27D26] rounded-full" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Score</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F27D26" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#F27D26" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
              <XAxis
                dataKey="name"
                stroke="#ffffff20"
                fontSize={10}
                tickLine={false}
                axisLine={false}
              />
              <YAxis stroke="#ffffff20" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111',
                  border: '1px solid #ffffff10',
                  borderRadius: '12px',
                }}
                itemStyle={{ color: '#F27D26', fontSize: '12px', fontWeight: 'bold' }}
              />
              <Area
                type="monotone"
                dataKey="perf"
                stroke="#F27D26"
                fillOpacity={1}
                fill="url(#colorPerf)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

// ─── Process ──────────────────────────────────────────────────────────────────

const Process = () => (
  <section id="process" className="bg-white text-black py-32 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
            How it works
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            SIMPLE. <br /> FAST. <br /> EFFECTIVE.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              step: '01',
              title: 'Discovery',
              desc: 'We dig into your business, your goals, and your competitors. No templates, no shortcuts.',
            },
            {
              step: '02',
              title: 'Build',
              desc: 'We build fast, clean, and conversion-optimised. Every decision is tied to a business outcome.',
            },
            {
              step: '03',
              title: 'Launch & Optimize',
              desc: 'We go live, measure everything, and keep improving. Your success is our scoreboard.',
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-8 items-start border-b border-black/10 pb-8"
            >
              <span className="text-4xl font-black italic text-[#F27D26]">{p.step}</span>
              <div>
                <h3 className="text-2xl font-bold uppercase mb-2">{p.title}</h3>
                <p className="opacity-60 font-light">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative aspect-square bg-[#050505] rounded-3xl p-12 flex flex-col justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #F27D26 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-64 h-64 rounded-full border border-dashed border-white/20 flex items-center justify-center"
        >
          <Cpu className="w-16 h-16 text-[#F27D26]" />
        </motion.div>
        <div className="mt-12 text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Status</div>
          <div className="text-2xl font-black italic text-white animate-pulse">BUILDING...</div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Pricing ──────────────────────────────────────────────────────────────────

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'websites' | 'seo' | 'ads'>('websites');

  const plans = {
    websites: [
      {
        name: 'Starter',
        price: '$2,500–$5,000',
        period: 'one-time',
        retainer: '$200–500/mo',
        retainerLabel: 'maintenance',
        highlight: false,
        features: [
          'Template customization',
          '3–5 pages',
          'Basic SEO',
          'Mobile responsive',
          'Contact form',
          'AI-written copy',
          '1 revision round',
        ],
        cta: 'Get started',
        ideal: 'Local SMB, personal brand',
      },
      {
        name: 'Growth',
        price: '$7,500–$15,000',
        period: 'one-time',
        retainer: '$500–1,500/mo',
        retainerLabel: 'optimization',
        highlight: true,
        features: [
          'Custom design',
          '5–15 pages',
          'CMS setup',
          'Conversion optimization',
          'Analytics dashboard',
          'Brand voice copywriting',
          '2–3 revision rounds',
        ],
        cta: 'Most popular',
        ideal: 'Growing business, startup',
      },
      {
        name: 'Enterprise',
        price: '$20,000+',
        period: 'one-time',
        retainer: '$2,000–5,000/mo',
        retainerLabel: 'ongoing dev',
        highlight: false,
        features: [
          'Custom Next.js / React',
          'Headless CMS',
          'API integrations',
          'Performance SLA',
          'AI search / chat features',
          'Ongoing support SLA',
          'Unlimited revisions',
        ],
        cta: 'Let\'s talk',
        ideal: 'Mid-market, funded startup',
      },
    ],
    seo: [
      {
        name: 'Foundation',
        price: '$1,000–$2,000',
        period: 'per month',
        retainer: '3-month min',
        retainerLabel: 'commitment',
        highlight: false,
        features: [
          'Technical audit + fixes',
          'On-page optimization',
          'Google Business Profile',
          'Keyword tracking',
          'Monthly report',
        ],
        cta: 'Get started',
        ideal: 'Local business, new site',
      },
      {
        name: 'Growth',
        price: '$2,500–$5,000',
        period: 'per month',
        retainer: '6-month min',
        retainerLabel: 'commitment',
        highlight: true,
        features: [
          'Everything in Foundation',
          '4–8 content pieces/mo',
          'Link building',
          'AI keyword clustering',
          'Competitor tracking',
          'Bi-weekly optimization',
        ],
        cta: 'Most popular',
        ideal: 'Growing business',
      },
      {
        name: 'Agentic SEO',
        price: '$5,000–$8,000',
        period: 'per month',
        retainer: '6-month min',
        retainerLabel: 'commitment',
        highlight: false,
        features: [
          'Daily ranking monitoring',
          'AI content generation',
          'Human-approved output',
          'Internal link building',
          'Technical issue fixing',
          'Weekly strategy reports',
          'AI adapts continuously',
        ],
        cta: 'Signature service',
        ideal: 'Competitive markets',
      },
    ],
    ads: [
      {
        name: 'Starter',
        price: '$1,000–$2,000',
        period: 'per month',
        retainer: 'Up to $5k ad spend',
        retainerLabel: 'ad budget',
        highlight: false,
        features: [
          'Single platform',
          'Google OR Meta',
          'Campaign setup',
          'Monthly reporting',
          'Basic optimization',
        ],
        cta: 'Get started',
        ideal: 'Small budget, single platform',
      },
      {
        name: 'Growth',
        price: '$2,500–$5,000',
        period: 'per month',
        retainer: '$5k–25k ad spend',
        retainerLabel: 'ad budget',
        highlight: true,
        features: [
          'Multi-platform',
          'Google + Meta',
          'AI ad copy variants',
          'Audience modeling',
          'Bi-weekly optimization',
          'Conversion tracking',
        ],
        cta: 'Most popular',
        ideal: 'Growth-stage business',
      },
      {
        name: 'Scale',
        price: '$5,000–$10,000',
        period: 'per month',
        retainer: '$25k+ ad spend',
        retainerLabel: 'ad budget',
        highlight: false,
        features: [
          'Full-funnel campaigns',
          'All platforms',
          'Automated creative refresh',
          'Predictive audience AI',
          'Landing page optimization',
          'Weekly reporting',
          'Dedicated account manager',
        ],
        cta: 'Let\'s talk',
        ideal: 'Scale-up, e-commerce',
      },
    ],
  };

  const tabs: { key: 'websites' | 'seo' | 'ads'; label: string }[] = [
    { key: 'websites', label: 'Websites & Apps' },
    { key: 'seo', label: 'SEO' },
    { key: 'ads', label: 'Paid Ads' },
  ];

  return (
    <section id="pricing" className="bg-white text-black py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
            Transparent pricing
          </span>
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
            FIXED. <br /> FAIR. <br /> NO SURPRISES.
          </h2>
          <p className="mt-8 text-xl font-light opacity-60 max-w-xl mx-auto">
            Scope is agreed upfront. You know exactly what you're getting and what you're paying.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-16 border border-black/10 p-1 w-fit mx-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeTab === t.key ? 'bg-black text-white' : 'hover:bg-black/5'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-t border-l border-black">
          {plans[activeTab].map((plan, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 border-r border-b border-black relative ${
                plan.highlight ? 'bg-black text-white' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-[#F27D26] text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1">
                  Most Popular
                </div>
              )}
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">{plan.name}</div>
              <div className="text-3xl font-black mb-1">{plan.price}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">{plan.period}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] mb-8">
                {plan.retainer} {plan.retainerLabel}
              </div>

              <div className="space-y-3 mb-10">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-[#F27D26] shrink-0" />
                    <span className={plan.highlight ? 'opacity-80' : 'opacity-60'}>{f}</span>
                  </div>
                ))}
              </div>

              <div className={`text-[9px] font-bold uppercase tracking-widest mb-8 ${plan.highlight ? 'opacity-40' : 'opacity-30'}`}>
                Ideal for: {plan.ideal}
              </div>

              <a
                href="#contact"
                className={`inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest px-6 py-3 border transition-all ${
                  plan.highlight
                    ? 'border-white hover:bg-white hover:text-black'
                    : 'border-black hover:bg-black hover:text-white'
                }`}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-12 bg-[#F27D26] text-white text-center"
        >
          <div className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-70">
            Founding client offer
          </div>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            30–40% off for our first 10 clients.
          </h3>
          <p className="opacity-80 mb-8 max-w-xl mx-auto">
            In exchange for a case study, testimonial, and referral commitment. Minimum 3-month engagement.
            Limited spots remaining.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all text-sm"
          >
            Claim founding price <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Work Gallery ─────────────────────────────────────────────────────────────

const Work = () => (
  <section id="work" className="bg-[#050505] text-white py-32 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]"
        >
          IMPACT <br /> GALLERY
        </motion.h2>
        <p className="max-w-sm text-lg font-light opacity-60">
          Proof that AI-first marketing isn't just a concept — it's a revolution in performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { title: 'Lumina Tech', category: 'SaaS Scaling', img: 'https://picsum.photos/seed/tech/800/1000' },
          { title: 'Aura Fashion', category: 'D2C Growth', img: 'https://picsum.photos/seed/fashion/800/1000' },
          { title: 'Nexus Bank', category: 'Fintech Trust', img: 'https://picsum.photos/seed/finance/800/1000' },
          { title: 'Vibe Energy', category: 'Brand Awareness', img: 'https://picsum.photos/seed/energy/800/1000' },
          { title: 'Pulse Health', category: 'MedTech Impact', img: 'https://picsum.photos/seed/health/800/1000' },
          { title: 'Zenith AI', category: 'Enterprise Automation', img: 'https://picsum.photos/seed/ai/800/1000' },
        ].map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -20 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] bg-[#111] overflow-hidden mb-6">
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26]">{w.category}</span>
                <h3 className="text-4xl font-black uppercase tracking-tight">{w.title}</h3>
              </div>
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Testimonials ─────────────────────────────────────────────────────────────

// Hoisted: plain data, stable across renders (react-best-practices: rendering-hoist-jsx)
const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'CMO, Lumina Tech',
    text: 'Adimpress didn\'t just build us a website — they built a growth machine. Leads up 3x in 90 days.',
    img: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder, Aura Fashion',
    text: 'We saw a 400% increase in conversion within the first 48 hours of launch. The SEO work alone paid for itself.',
    img: 'https://picsum.photos/seed/marcus/100/100',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Growth, Nexus Bank',
    text: 'Fixed pricing, real data, and they actually explain what they\'re doing. A refreshing change from every other agency.',
    img: 'https://picsum.photos/seed/elena/100/100',
  },
];

const Testimonials = () => {
  const testimonials = TESTIMONIALS;

  return (
    <section className="bg-white text-black py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
            Client results
          </span>
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
            RESULTS THAT <br /> SPEAK FOR <br /> THEMSELVES.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-t border-black">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 border-r border-b border-black relative group hover:bg-black hover:text-white transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[#F27D26] opacity-20" />
              <p className="text-xl font-light italic mb-12 opacity-80 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold uppercase text-sm tracking-widest">{t.name}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

// Hoisted: plain data, stable across renders (react-best-practices: rendering-hoist-jsx)
const FAQS = [
  {
    q: 'How is Adimpress different from other agencies?',
      a: 'Most agencies deliver a website and disappear. We build systems with measurable outcomes — every deliverable is tied to a business goal. We also use AI tools that most agencies haven\'t heard of, which means faster delivery and better results for the same budget.',
    },
    {
      q: 'What does "AI-powered" actually mean for my project?',
      a: 'It means faster turnaround, more content variations, better keyword research, and smarter ad targeting — all at a cost that would be impossible with a fully manual team. Every AI output is reviewed and refined by a human before it touches your brand.',
    },
    {
      q: 'Do you work with businesses outside of tech?',
      a: 'Yes. We work with local businesses, e-commerce brands, professional services, healthcare, finance, and more. Industry doesn\'t matter — what matters is whether you have a clear goal and a real product or service.',
    },
    {
      q: 'How fast can I see results?',
      a: 'Websites: live in 2–6 weeks depending on scope. SEO: meaningful ranking movement in 60–90 days. Paid ads: leads within the first week of going live. We set realistic expectations upfront and back them with data.',
    },
    {
      q: 'Do you offer white-label services for other agencies?',
      a: 'Yes. We offer 40–50% off retail pricing for agency partners, with Adimpress branding removed and your branding on all deliverables. We have capacity for 3–5 white-label partners. Get in touch to discuss.',
    },
];

const QASection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = FAQS;

  return (
    <section id="faq" className="bg-[#050505] text-white py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
            Common questions
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            GOOD <br /> QUESTIONS.
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 md:py-8 px-8 flex justify-between items-center text-left group"
              >
                <span className="text-lg md:text-xl font-black uppercase tracking-tight group-hover:text-[#F27D26] transition-colors pr-8">
                  {f.q}
                </span>
                <ChevronDown
                  className={`w-6 h-6 shrink-0 transition-transform duration-500 ${openIndex === i ? 'rotate-180 text-[#F27D26]' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 px-8 text-lg font-light opacity-60 leading-relaxed max-w-3xl">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Footer / Contact ─────────────────────────────────────────────────────────

const Footer = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@adimpress.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <footer id="contact" className="bg-[#050505] text-white py-32 px-6 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
              Ready to show up different?
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              MOST AGENCIES GIVE YOU A WEBSITE.{' '}
              <span className="text-[#F27D26]">WE GIVE YOU ONE THAT CONVERTS.</span>
            </h2>
          </motion.div>

          <div className="space-y-6 opacity-60">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1">Email</div>
              <a href="mailto:hello@adimpress.com" className="hover:text-[#F27D26] transition-colors">
                hello@adimpress.com
              </a>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-2">Socials</div>
              <div className="flex gap-6 text-sm font-bold uppercase">
                <a href="https://www.instagram.com/adimpress" target="_blank" rel="noopener noreferrer" className="hover:text-[#F27D26] transition-colors">Instagram</a>
                <a href="https://twitter.com/adimpress" target="_blank" rel="noopener noreferrer" className="hover:text-[#F27D26] transition-colors">Twitter</a>
                <a href="https://www.linkedin.com/company/adimpress" target="_blank" rel="noopener noreferrer" className="hover:text-[#F27D26] transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-6 p-12 border border-white/10"
            >
              <Check className="w-16 h-16 text-[#F27D26]" />
              <h3 className="text-3xl font-black uppercase">We'll be in touch.</h3>
              <p className="opacity-60">Expect a reply within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-[#F27D26] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-[#F27D26] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2">
                  What do you need?
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-[#F27D26] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F27D26] text-white py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4"
              >
                Start a project <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-30 text-center">
                No obligation. No sales pitch. Just data.
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="#top" className="text-4xl font-black tracking-tighter italic hover:text-[#F27D26] transition-colors">
          ADIMPRESS
        </a>
        <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">
          © 2026 Adimpress. All rights reserved. AI-powered. Human-reviewed.
        </div>
      </div>
    </footer>
  );
};

// ─── AI Chat Widget ───────────────────────────────────────────────────────────

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = getAI();
      if (!ai) throw new Error('AI not configured');
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction:
            "You are the Adimpress AI assistant. Adimpress is an AI-powered digital agency that builds websites, apps, SEO systems, and paid ad campaigns for businesses. You help potential clients understand our services, pricing, and process. Be direct, confident, and honest. Keep responses under 3 sentences. Never use corporate buzzwords. Focus on business outcomes — leads, revenue, conversions.",
        },
      });
      const aiMsg = {
        role: 'ai',
        text: response.text || 'Happy to help — what are you trying to achieve with your marketing?',
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: "Something went wrong on our end. Email us at hello@adimpress.com and we'll reply fast." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#F27D26] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageSquare className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#050505] animate-pulse" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-28 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] md:w-96 h-[500px] bg-[#111] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Adimpress AI
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100 transition-opacity">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.length === 0 && (
                <div className="text-center py-12 space-y-4">
                  <Sparkles className="w-12 h-12 text-[#F27D26] mx-auto opacity-50" />
                  <p className="text-xs font-bold uppercase tracking-widest opacity-40 text-white">
                    Ask us anything about your marketing goals
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                      m.role === 'user'
                        ? 'bg-[#F27D26] text-white'
                        : 'bg-white/5 text-white/80 border border-white/5'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <Loader2 className="w-4 h-4 animate-spin opacity-50 text-white" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-white/5 bg-black/50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about pricing, services, timelines..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 pr-12 text-sm focus:outline-none focus:border-[#F27D26] transition-colors text-white placeholder-white/30"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[#F27D26] hover:scale-110 transition-transform disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-[#050505] selection:bg-[#F27D26] selection:text-white relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#F27D26] focus:text-white focus:px-4 focus:py-2 focus:font-bold focus:uppercase focus:tracking-widest focus:text-xs"
      >
        Skip to main content
      </a>
      <BackgroundAnimation />
      <NeuralNetwork />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyAdimpress />
      <NeuralCreativeLab />
      <ROICalculator />
      <StatsSection />
      <Process />
      <Pricing />
      <Work />
      <Testimonials />
      <QASection />
      <Footer />
      <AIChat />
    </div>
  );
}
