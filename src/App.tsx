/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
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
  Search,
  BarChart3,
  MessageSquare,
  Play,
  X,
  Send,
  Loader2,
  ChevronDown,
  Quote,
  TrendingUp,
  Activity,
  Users,
  Heart
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// --- AI Service ---
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center mix-blend-difference text-white">
      <div className="text-xl md:text-2xl font-black tracking-tighter italic">ADIMPRESS</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
        <a href="#work" className="hover:text-[#F27D26] transition-colors">Work</a>
        <a href="#mesh" className="hover:text-[#F27D26] transition-colors">Mesh</a>
        <a href="#persona" className="hover:text-[#F27D26] transition-colors">Persona</a>
        <a href="#roi" className="hover:text-[#F27D26] transition-colors">ROI</a>
        <a href="#dna" className="hover:text-[#F27D26] transition-colors">DNA</a>
        <a href="#lab" className="hover:text-[#F27D26] transition-colors">Lab</a>
        <a href="#sentiment" className="hover:text-[#F27D26] transition-colors">Sentiment</a>
        <a href="#stats" className="hover:text-[#F27D26] transition-colors">Stats</a>
        <a href="#contact" className="hover:text-[#F27D26] transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="#contact" className="hidden sm:block bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all">
          Get Started
        </a>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:text-[#F27D26] transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <div className="space-y-1.5 flex flex-col items-end">
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-4 h-0.5 bg-white" />
            <div className="w-2 h-0.5 bg-white" />
          </div>}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-black uppercase tracking-tighter italic">
              <a href="#work" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">Work</a>
              <a href="#mesh" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">Mesh</a>
              <a href="#persona" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">Persona</a>
              <a href="#roi" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">ROI</a>
              <a href="#dna" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">DNA</a>
              <a href="#lab" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">Lab</a>
              <a href="#sentiment" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F27D26]">Sentiment</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-[#F27D26] text-white px-12 py-4 mt-4">Get Started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="top" className="min-h-screen bg-[#050505] text-white flex flex-col justify-center px-6 md:px-8 relative overflow-hidden">
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pt-20"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-6 block">The 2026 Agentic Agency</span>
        <h1 className="text-[18vw] md:text-[16vw] leading-[0.8] font-black uppercase tracking-tighter -ml-[1vw]">
          IMPRESS <br /> 
          <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>BEYOND</span>
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
            We deploy autonomous marketing agents that evolve with your audience. 
            Real-time neural targeting for the digital-first era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group flex items-center justify-center gap-4 bg-[#F27D26] px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Initialize Protocol <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center justify-center gap-4 border border-white/20 px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
              {isPaused ? 'Resume Flow' : 'Pause Flow'}
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="hidden lg:block text-right"
        >
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Active Deployments</div>
          <div className="text-6xl font-black italic">1,402+</div>
        </motion.div>
      </div>

      {/* Background Marquee */}
      <div className="absolute left-0 bottom-0 w-full h-1/3 pointer-events-none overflow-hidden opacity-10">
        <motion.div 
          animate={isPaused ? { x: '0%' } : { x: ['0%', '-50%'] }}
          transition={isPaused ? { duration: 0 } : { duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap text-[25vw] font-black uppercase tracking-tighter italic"
        >
          AUTONOMOUS AGENTS • NEURAL MARKETING • REAL-TIME IMPACT •&nbsp;
        </motion.div>
      </div>
    </section>
  );
};

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
      
      {/* Dynamic Scroll Path */}
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

const NeuralSentimentAnalyzer = () => {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState<{score: number, label: string, insights: string[]} | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const analyzeSentiment = async () => {
    if (!text.trim()) return;
    setIsLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze the marketing sentiment of this text: "${text}". Return JSON with "score" (0-100), "label" (e.g., Aggressive, Empathetic, Visionary), and "insights" (array of 3 short strings).`,
        config: { responseMimeType: "application/json" }
      });
      setAnalysis(JSON.parse(response.text));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="sentiment" className="bg-[#050505] text-white py-32 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="p-12 bg-[#111] border border-white/5 rounded-[2rem] space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F27D26]/10 blur-3xl rounded-full -mr-16 -mt-16" />
              
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] block">Input Neural Stream</label>
                <textarea 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste your ad copy or brand message here..."
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 text-sm h-40 focus:outline-none focus:border-[#F27D26] transition-colors resize-none"
                />
              </div>

              <button 
                onClick={analyzeSentiment}
                disabled={isLoading}
                className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Activity className="w-5 h-5" />}
                Analyze Sentiment
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">Neural Audit</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                SENTIMENT <br /> RESONANCE
              </h2>
            </motion.div>

            <AnimatePresence mode="wait">
              {analysis ? (
                <motion.div 
                  key="analysis"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="flex items-end gap-6">
                    <div className="text-8xl font-black italic text-[#F27D26] leading-none">{analysis.score}</div>
                    <div className="pb-2">
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Resonance Score</div>
                      <div className="text-2xl font-black uppercase tracking-tight">{analysis.label}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {analysis.insights.map((insight, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
                        <span className="text-sm font-light opacity-80">{insight}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-6 opacity-20">
                  <div className="h-24 bg-white/5 rounded-2xl animate-pulse" />
                  <div className="h-12 bg-white/5 rounded-2xl animate-pulse w-2/3" />
                  <div className="h-12 bg-white/5 rounded-2xl animate-pulse w-1/2" />
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const NeuralNetwork = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.1, 0.1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center"
    >
      <svg className="w-full h-full max-w-4xl max-h-4xl" viewBox="0 0 100 100">
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 100}
            cy={Math.random() * 100}
            r="0.5"
            fill="#F27D26"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <motion.line
            key={i}
            x1={Math.random() * 100}
            y1={Math.random() * 100}
            x2={Math.random() * 100}
            y2={Math.random() * 100}
            stroke="#F27D26"
            strokeWidth="0.05"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

const StatsSection = () => {
  const data = [
    { name: 'Jan', efficiency: 45, impact: 30 },
    { name: 'Feb', efficiency: 52, impact: 42 },
    { name: 'Mar', efficiency: 61, impact: 55 },
    { name: 'Apr', efficiency: 58, impact: 68 },
    { name: 'May', efficiency: 75, impact: 82 },
    { name: 'Jun', efficiency: 88, impact: 95 },
  ];

  return (
    <section id="stats" className="bg-[#050505] text-white py-32 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">Neural Performance</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              DATA <br /> DRIVEN <br /> IMPACT
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <div className="p-6 md:p-8 bg-[#111] border border-white/5 rounded-2xl">
              <Activity className="w-8 h-8 text-[#F27D26] mb-4" />
              <div className="text-3xl md:text-4xl font-black mb-2">98.4%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Target Accuracy</div>
            </div>
            <div className="p-6 md:p-8 bg-[#111] border border-white/5 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-[#F27D26] mb-4" />
              <div className="text-3xl md:text-4xl font-black mb-2">12.5x</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">ROI Multiplier</div>
            </div>
          </div>
        </div>

        <div className="h-[400px] w-full bg-[#111] border border-white/5 rounded-3xl p-8">
          <div className="mb-8 flex justify-between items-center">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Agent Efficiency Evolution</div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F27D26] rounded-full" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Efficiency</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F27D26" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F27D26" stopOpacity={0}/>
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
              <YAxis 
                stroke="#ffffff20" 
                fontSize={10} 
                tickLine={false} 
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #ffffff10', borderRadius: '12px' }}
                itemStyle={{ color: '#F27D26', fontSize: '12px', fontWeight: 'bold' }}
              />
              <Area 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#F27D26" 
                fillOpacity={1} 
                fill="url(#colorEff)" 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const steps = [
    { year: "Q1 2026", title: "Neural Core Alpha", desc: "Initial deployment of autonomous sentiment agents across core digital channels." },
    { year: "Q2 2026", title: "Global Mesh", desc: "Expansion of agentic flow to 40+ languages and hyper-localized cultural contexts." },
    { year: "Q3 2026", title: "Predictive Creative", desc: "Launch of real-time generative video assets that adapt to user eye-tracking data." },
    { year: "Q4 2026", title: "Singularity Protocol", desc: "Full brand autonomy where agents manage the entire marketing lifecycle with zero human input." }
  ];

  return (
    <section id="roadmap" className="bg-white text-black py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">The Future</span>
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
            2026 <br /> PROTOCOL
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-black/10" />
          
          <div className="space-y-24">
            {steps.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="text-4xl font-black italic text-[#F27D26] mb-2">{s.year}</div>
                  <h4 className="text-3xl font-black uppercase mb-4">{s.title}</h4>
                  <p className="text-lg font-light opacity-60 max-w-md mx-auto md:mx-0 ml-auto mr-auto">{s.desc}</p>
                </div>
                <div className="relative z-10 w-4 h-4 rounded-full bg-black border-4 border-white shadow-xl" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CMO, Lumina Tech",
      text: "AdImpress didn't just change our ads; they changed how we think about our customers. The agents are scarily accurate.",
      img: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Marcus Thorne",
      role: "Founder, Aura Fashion",
      text: "We saw a 400% increase in conversion within the first 48 hours of deployment. The neural targeting is a game changer.",
      img: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Growth, Nexus Bank",
      text: "The autonomy of the system is what impressed us most. It evolves faster than any human team ever could.",
      img: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  return (
    <section className="bg-[#050505] text-white py-32 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-12 bg-[#111] border border-white/5 rounded-3xl relative"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-[#F27D26] opacity-20" />
            <p className="text-xl font-light italic mb-12 opacity-80 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full grayscale" referrerPolicy="no-referrer" />
              <div>
                <div className="font-bold uppercase text-sm tracking-widest">{t.name}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26]">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const QASection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What is an autonomous marketing agent?", a: "An autonomous agent is a self-evolving AI system that manages marketing tasks—from creative generation to media buying—without human intervention, optimizing for real-time performance." },
    { q: "How does neural targeting differ from traditional ads?", a: "Traditional targeting uses static demographics. Neural targeting analyzes real-time sentiment, biometric cues (where permitted), and contextual intent to deliver impressions that resonate on a subconscious level." },
    { q: "Is my brand data secure?", a: "We use encrypted neural enclaves to ensure your brand DNA and customer data never leave your private ecosystem. Our agents learn from the data without exposing it." },
    { q: "How fast can I see results?", a: "Deployment takes minutes. Optimization begins instantly. Most clients see significant performance deltas within the first 24-72 hours of agentic flow." }
  ];

  return (
    <section id="faq" className="bg-white text-black py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">Intelligence</span>
          <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            COMMON <br /> QUERIES
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-black/10">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 md:py-8 flex justify-between items-center text-left group"
              >
                <span className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-[#F27D26] transition-colors">{f.q}</span>
                <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-lg font-light opacity-60 leading-relaxed max-w-2xl">
                      {f.a}
                    </p>
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

const GlobalNeuralMesh = () => {
  const [activeNodes, setActiveNodes] = useState<{id: number, x: number, y: number}[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNode = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100
      };
      setActiveNodes(prev => [...prev.slice(-10), newNode]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="mesh" className="py-32 bg-[#050505] text-white overflow-hidden relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-12">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            GLOBAL <br /> <span className="text-[#F27D26]">NEURAL</span> <br /> MESH
          </h2>
          <p className="text-xl font-light opacity-60 max-w-md">
            Visualizing real-time agent deployments across the global digital landscape. 
            Every pulse represents an autonomous optimization event.
          </p>
          <div className="flex gap-12">
            <div>
              <div className="text-4xl font-black italic">142</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Active Regions</div>
            </div>
            <div>
              <div className="text-4xl font-black italic">8.2M</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Daily Optimizations</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-square bg-white/5 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 2" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 2" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 2" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.05" opacity="0.5" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.05" opacity="0.5" />
            </svg>
          </div>
          
          <AnimatePresence>
            {activeNodes.map(node => (
              <motion.div
                key={node.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
                className="absolute w-4 h-4 rounded-full bg-[#F27D26] blur-sm"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              />
            ))}
          </AnimatePresence>

          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="w-3/4 h-3/4 border border-[#F27D26]/20 rounded-full flex items-center justify-center"
          >
            <Globe className="w-16 h-16 md:w-32 md:h-32 text-[#F27D26] opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AgentPersonaArchitect = () => {
  const [traits, setTraits] = useState({
    aggression: 50,
    empathy: 50,
    analytical: 50,
    entropy: 50
  });
  const [dossier, setDossier] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateDossier = async () => {
    setLoading(true);
    try {
      const prompt = `Generate a technical dossier for a marketing agent with these traits (0-100 scale): 
      Aggression: ${traits.aggression}, Empathy: ${traits.empathy}, Analytical Depth: ${traits.analytical}, Creative Entropy: ${traits.entropy}. 
      Include an Agent Name, a "Neural Signature" description, and a "Strategic Protocol" summary. Keep it futuristic and concise.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt
      });
      setDossier(response.text);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="persona" className="py-32 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
            AGENT <br /> <span className="text-[#F27D26]">PERSONA</span> <br /> ARCHITECT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-12">
            {[
              { id: 'aggression', label: 'Aggression', icon: Zap },
              { id: 'empathy', label: 'Empathy', icon: Heart },
              { id: 'analytical', label: 'Analytical Depth', icon: BarChart3 },
              { id: 'entropy', label: 'Creative Entropy', icon: Sparkles }
            ].map(trait => (
              <div key={trait.id} className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <trait.icon className="w-4 h-4 text-[#F27D26]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{trait.label}</span>
                  </div>
                  <span className="font-mono text-xs opacity-40">{traits[trait.id as keyof typeof traits]}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={traits[trait.id as keyof typeof traits]}
                  onChange={(e) => setTraits(prev => ({ ...prev, [trait.id]: parseInt(e.target.value) }))}
                  className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-[#F27D26]"
                />
              </div>
            ))}

            <button 
              onClick={generateDossier}
              disabled={loading}
              className="w-full bg-white text-black py-6 font-black uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all flex items-center justify-center gap-4"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Cpu className="w-6 h-6" />}
              Synthesize Brain
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 md:p-12 min-h-[300px] md:min-h-[400px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity className="w-32 h-32" />
            </div>
            {dossier ? (
              <div className="prose prose-invert max-w-none">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] mb-8">Generated Dossier // v1.0</div>
                <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
                  {dossier}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-40">
                <Cpu className="w-12 h-12" />
                <p className="text-sm uppercase tracking-widest font-bold">Awaiting Neural Synthesis...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const PredictiveROIEngine = () => {
  const [budget, setBudget] = useState(50000);
  const data = [
    { month: 'M1', impact: budget * 1.2 },
    { month: 'M2', impact: budget * 1.8 },
    { month: 'M3', impact: budget * 2.5 },
    { month: 'M4', impact: budget * 3.8 },
    { month: 'M5', impact: budget * 5.2 },
    { month: 'M6', impact: budget * 7.5 },
  ];

  return (
    <section id="roi" className="py-32 bg-[#050505] text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              PREDICTIVE <br /> <span className="text-[#F27D26]">ROI</span> <br /> ENGINE
            </h2>
            <p className="text-xl font-light opacity-60">
              Simulate the exponential growth of agentic marketing. 
              Our neural models predict impact based on real-world deployment data.
            </p>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest">Monthly Investment</span>
                <span className="text-2xl font-black italic">${budget.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="1000000" 
                step="10000"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-[#F27D26]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 pt-8">
              <div className="p-6 md:p-8 bg-white/5 border border-white/10">
                <div className="text-3xl md:text-4xl font-black italic text-[#F27D26]">7.5X</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Projected Efficiency</div>
              </div>
              <div className="p-6 md:p-8 bg-white/5 border border-white/10">
                <div className="text-3xl md:text-4xl font-black italic text-[#F27D26]">${(budget * 7.5).toLocaleString()}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Est. Monthly Impact</div>
              </div>
            </div>
          </div>

          <div className="h-[300px] md:h-[500px] bg-white/5 border border-white/10 p-4 md:p-8">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F27D26" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F27D26" stopOpacity={0}/>
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
                  contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px' }}
                  itemStyle={{ color: '#F27D26', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="impact" 
                  stroke="#F27D26" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorImpact)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

const NeuralBrandDNAVisualizer = () => {
  const [brandName, setBrandName] = useState('');
  const [dna, setDna] = useState<number[]>([]);

  const generateDNA = () => {
    const newDna = Array.from({ length: 20 }, () => Math.random() * 100);
    setDna(newDna);
  };

  return (
    <section id="dna" className="py-32 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24 space-y-8">
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
            BRAND <span className="text-[#F27D26]">DNA</span> <br /> VISUALIZER
          </h2>
          <div className="max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Enter Brand Identity..."
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl font-black uppercase tracking-widest focus:border-[#F27D26] outline-none transition-colors text-center"
            />
            <button 
              onClick={generateDNA}
              className="mt-8 bg-white text-black px-12 py-4 font-black uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all"
            >
              Generate Signature
            </button>
          </div>
        </div>

        <div className="aspect-video bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center">
          {dna.length > 0 ? (
            <svg viewBox="0 0 200 100" className="w-full h-full">
              {dna.map((val, i) => (
                <motion.rect
                  key={i}
                  x={i * 10}
                  y={50 - val / 2}
                  width="8"
                  height={val}
                  fill="#F27D26"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: val, opacity: 0.6 }}
                  transition={{ delay: i * 0.05 }}
                />
              ))}
              <motion.path
                d={`M 0,50 ${dna.map((val, i) => `L ${i * 10 + 4},${50 - val / 2}`).join(' ')}`}
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>
          ) : (
            <div className="text-center opacity-20 space-y-4">
              <Sparkles className="w-16 h-16 mx-auto" />
              <p className="text-[10px] font-bold uppercase tracking-widest">Awaiting Identity Input...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const NeuralStory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const chapters = [
    {
      title: "THE GENESIS",
      text: "In the beginning, data was static. Impressions were counted, not felt. We saw the void and filled it with intelligence.",
      accent: "01"
    },
    {
      title: "NEURAL AWAKENING",
      text: "Our agents began to breathe. They learned to sense the subtle shifts in human sentiment, adapting in microseconds.",
      accent: "02"
    },
    {
      title: "AGENTIC SINGULARITY",
      text: "Now, the brand and the agent are one. A seamless flow of intent and impact that evolves beyond human constraints.",
      accent: "03"
    }
  ];

  return (
    <section id="story" ref={containerRef} className="h-[400vh] bg-[#050505] text-white relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Parallax Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <motion.div 
            style={{ 
              x: useTransform(scrollYProgress, [0, 1], [0, -1000]),
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.5, 0.1])
            }} 
            className="text-[60vw] md:text-[40vw] font-black uppercase whitespace-nowrap leading-none tracking-tighter italic absolute top-1/4"
          >
            INTELLIGENCE • EVOLUTION • IMPACT •&nbsp;
          </motion.div>
          <motion.div 
            style={{ 
              x: useTransform(scrollYProgress, [0, 1], [0, 1000]),
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.5, 0.1])
            }} 
            className="text-[60vw] md:text-[40vw] font-black uppercase whitespace-nowrap leading-none tracking-tighter italic absolute bottom-1/4"
          >
            NEURAL • AGENTIC • FLOW •&nbsp;
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-6xl px-8">
          {chapters.map((chapter, i) => {
            const start = i / chapters.length;
            const end = (i + 1) / chapters.length;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], ["0%", "-50%", "-50%", "-100%"]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1, 1, 1.2]);

            return (
              <motion.div 
                key={i}
                style={{ opacity, y, scale, position: 'absolute', top: '50%', left: '50%', x: '-50%' }}
                className="w-full text-center space-y-8"
              >
                <span className="text-4xl md:text-9xl font-black italic text-[#F27D26] opacity-20 block">{chapter.accent}</span>
                <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                  {chapter.title}
                </h2>
                <p className="text-lg md:text-2xl font-light opacity-60 leading-relaxed max-w-2xl mx-auto px-4 md:px-0">
                  {chapter.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          {chapters.map((_, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const active = useTransform(scrollYProgress, [i/3, (i+1)/3], [0.2, 1]);
            return (
              <motion.div 
                key={i}
                style={{ opacity: active, scale: active }}
                className="w-1 h-12 bg-[#F27D26] rounded-full"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const NeuralCreativeLab = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<{headline: string, copy: string, imageUrl?: string} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateConcept = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      // 1. Generate Copy
      const textResponse = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a futuristic marketing concept for: ${prompt}. Return JSON with "headline" and "copy" (max 20 words).`,
        config: { responseMimeType: "application/json" }
      });
      const copyData = JSON.parse(textResponse.text);

      // 2. Generate Image
      const imageResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash-image",
        contents: { parts: [{ text: `A futuristic, high-tech, minimalist marketing visual for ${prompt}, orange and black theme, cinematic lighting, 8k resolution.` }] },
        config: { imageConfig: { aspectRatio: "16:9" } }
      });

      let imageUrl = "";
      for (const part of imageResponse.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
        }
      }

      setResult({ ...copyData, imageUrl });
    } catch (err) {
      console.error(err);
      setError("Neural synthesis failed. Please check your protocol and try again.");
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
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">Experimental</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                NEURAL <br /> CREATIVE <br /> LAB
              </h2>
            </motion.div>
            
            <p className="text-xl font-light opacity-60 leading-relaxed">
              Experience the power of autonomous creative. Input your brand vision and let our agents synthesize a neural marketing concept in real-time.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="relative flex flex-col sm:block">
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter brand or product name..."
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

          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl group">
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
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">Synthesizing Neural Concept...</div>
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
                      alt="Neural Concept" 
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">Generated Concept</span>
                      <h4 className="text-4xl font-black uppercase tracking-tight text-white mb-4">{result.headline}</h4>
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
                  <p className="text-sm font-bold uppercase tracking-widest">Awaiting Brand Input for Neural Synthesis</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Neural Targeting",
      desc: "AI agents that analyze audience sentiment in real-time to deliver hyper-relevant impressions.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Autonomous Creative",
      desc: "Generative systems that produce thousands of high-performing assets tailored to every user.",
      icon: <Layers className="w-8 h-8" />
    },
    {
      title: "Predictive Scaling",
      desc: "Our agents anticipate market shifts before they happen, scaling your reach with zero latency.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <section id="agents" className="bg-white text-black py-32 px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">Our Capabilities</span>
        <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
          AGENTIC <br /> ECOSYSTEMS
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-0 border-t border-black">
        {services.map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-12 border-r border-b border-black group hover:bg-black hover:text-white transition-all duration-500"
          >
            <div className="mb-12 text-[#F27D26]">{s.icon}</div>
            <h3 className="text-4xl font-black uppercase tracking-tight mb-6">{s.title}</h3>
            <p className="text-lg font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
              {s.desc}
            </p>
            <div className="mt-12 flex justify-end">
              <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);
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
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: input,
        config: {
          systemInstruction: "You are AdImpress AI, a futuristic marketing agent from 2026. You help users understand agentic marketing, neural targeting, and autonomous growth. Keep your tone bold, professional, and slightly technical. Use terms like 'neural delta', 'agentic flow', and 'impression evolution'.",
        }
      });
      
      const aiMsg = { role: 'ai', text: response.text || "Agentic systems are currently optimizing. Please retry." };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "Neural connection interrupted. Please check your protocol." }]);
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
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse" />
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
                <span className="text-[10px] font-bold uppercase tracking-widest">AdImpress Agent v1.0</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100 transition-opacity">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.length === 0 && (
                <div className="text-center py-12 space-y-4">
                  <Sparkles className="w-12 h-12 text-[#F27D26] mx-auto opacity-50" />
                  <p className="text-xs font-bold uppercase tracking-widest opacity-40">Initialize Neural Dialogue</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    m.role === 'user' ? 'bg-[#F27D26] text-white' : 'bg-white/5 text-white/80 border border-white/5'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <Loader2 className="w-4 h-4 animate-spin opacity-50" />
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
                  placeholder="Ask about agentic marketing..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 pr-12 text-sm focus:outline-none focus:border-[#F27D26] transition-colors"
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

const Process = () => (
  <section id="process" className="bg-[#050505] text-white py-32 px-8 relative overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">The Workflow</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            HOW WE <br /> EVOLVE
          </h2>
        </motion.div>
        
        <div className="space-y-8">
          {[
            { step: "01", title: "Ingestion", desc: "We feed our agents your brand DNA and market data." },
            { step: "02", title: "Deployment", desc: "Autonomous agents launch across all digital touchpoints." },
            { step: "03", title: "Evolution", desc: "Real-time feedback loops optimize every single impression." }
          ].map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-8 items-start border-b border-white/10 pb-8"
            >
              <span className="text-4xl font-black italic text-[#F27D26]">{p.step}</span>
              <div>
                <h4 className="text-2xl font-bold uppercase mb-2">{p.title}</h4>
                <p className="opacity-60 font-light">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative aspect-square bg-[#111] border border-white/5 rounded-3xl p-12 flex flex-col justify-center items-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #F27D26 0%, transparent 70%)' }} />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-64 h-64 rounded-full border border-dashed border-white/20 flex items-center justify-center"
        >
          <Cpu className="w-16 h-16 text-[#F27D26]" />
        </motion.div>
        <div className="mt-12 text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Neural Core Status</div>
          <div className="text-2xl font-black italic animate-pulse">OPTIMIZING...</div>
        </div>
      </div>
    </div>
  </section>
);

const Work = () => (
  <section id="work" className="bg-white text-black py-32 px-8">
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
        Proof that agentic marketing isn't just a concept—it's a revolution in performance.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {[
        { title: "Lumina Tech", category: "SaaS Scaling", img: "https://picsum.photos/seed/tech/800/1000" },
        { title: "Aura Fashion", category: "D2C Growth", img: "https://picsum.photos/seed/fashion/800/1000" },
        { title: "Nexus Bank", category: "Fintech Trust", img: "https://picsum.photos/seed/finance/800/1000" },
        { title: "Vibe Energy", category: "Brand Awareness", img: "https://picsum.photos/seed/energy/800/1000" },
        { title: "Pulse Health", category: "MedTech Impact", img: "https://picsum.photos/seed/health/800/1000" },
        { title: "Zenith AI", category: "Enterprise Flow", img: "https://picsum.photos/seed/ai/800/1000" },
        { title: "Orbit Travel", category: "Global Reach", img: "https://picsum.photos/seed/travel/800/1000" }
      ].map((w, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -20 }}
          className="group cursor-pointer"
        >
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-6">
            <img 
              src={w.img} 
              alt={w.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26]">{w.category}</span>
              <h4 className="text-4xl font-black uppercase tracking-tight">{w.title}</h4>
            </div>
            <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-[#050505] text-white py-32 px-6 md:px-8 border-t border-white/10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
      <div className="space-y-12">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
          READY TO <br /> <span className="text-[#F27D26]">EVOLVE?</span>
        </h2>
        <div className="flex gap-8">
          <button className="bg-white text-black px-12 py-6 text-lg font-black uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all">
            Contact Us
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6">
          <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Socials</h5>
          <ul className="space-y-4 text-xl font-bold uppercase">
            <li><a href="#" className="hover:text-[#F27D26]">Instagram</a></li>
            <li><a href="#" className="hover:text-[#F27D26]">Twitter</a></li>
            <li><a href="#" className="hover:text-[#F27D26]">LinkedIn</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Office</h5>
          <p className="text-xl font-bold uppercase leading-tight">
            124 Neural Way <br /> Silicon Valley, CA <br /> 94025
          </p>
        </div>
      </div>
    </div>

    <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
      <a href="#top" className="text-4xl font-black tracking-tighter italic hover:text-[#F27D26] transition-colors">ADIMPRESS</a>
      <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">
        © 2026 AdImpress Agentic Agency. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#050505] selection:bg-[#F27D26] selection:text-white relative">
      <BackgroundAnimation />
      <NeuralNetwork />
      <Navbar />
      <Hero />
      <NeuralStory />
      <GlobalNeuralMesh />
      <AgentPersonaArchitect />
      <PredictiveROIEngine />
      <NeuralBrandDNAVisualizer />
      <NeuralCreativeLab />
      <NeuralSentimentAnalyzer />
      <Services />
      <StatsSection />
      <Process />
      <Roadmap />
      <Work />
      <Testimonials />
      <QASection />
      <Footer />
      <AIChat />
    </div>
  );
}
