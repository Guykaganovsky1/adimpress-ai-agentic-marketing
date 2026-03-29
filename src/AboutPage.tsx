/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageNavbar, PageFooter } from './PageShells';

const STATS = [
  { value: '21', label: 'AI Agents' },
  { value: '3+', label: 'Years Building' },
  { value: '50+', label: 'Projects' },
  { value: '98%', label: 'Retention' },
];

const PILLARS = [
  {
    emoji: '🎯',
    title: 'Specialists, Not Generalists',
    desc: 'Most agencies hire generalists who do a bit of everything. We built specialists that do ONE thing perfectly — 21 agents, each an expert in SEO, content, paid ads, web dev, or analytics.',
  },
  {
    emoji: '📊',
    title: 'Results, Not Hours',
    desc: 'Traditional agencies bill 40 hours and deliver 10. We measure by outcomes: traffic growth, lead volume, ROAS improvement. You pay for results, not activity.',
  },
  {
    emoji: '⚡',
    title: '72-Hour Deploy',
    desc: 'Most agencies take weeks to brief. We deploy your first AI-generated deliverable within 72 hours of kickoff. No months-long discovery phases.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <PageNavbar active="About" />

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-6 block">
            About Adimpress
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            WE BUILT THE MARKETING AGENCY<br />WE'D ALWAYS WANTED.
          </h1>
          <p className="text-lg font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
            Traditional agencies are too slow, too expensive, too generic. We spent 3 years building 21 specialized AI agents that deliver marketing at machine speed — for a fraction of what agencies charge.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl font-black text-[#F27D26] mb-2">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-black mb-6">Our Story</h2>
          <div className="space-y-5 text-white/60 font-light leading-relaxed max-w-3xl">
            <p>
              We started Adimpress because we were tired of agencies that promised the world and delivered mediocrity. As founders and growth operators, we'd worked with dozens of agencies — the retainer traps, the 6-week discovery phases, the monthly PDFs that told us what we already knew.
            </p>
            <p>
              So we did something different. We spent 3 years building 21 specialized AI agents — each one trained on a specific marketing domain, each one capable of executing at 10x human speed. Not AI tools. Not chatbots. Real agents that can research, create, optimize, and report — autonomously.
            </p>
            <p>
              Today we run campaigns for SaaS companies, fintech startups, and eCommerce brands — from our base in Koh Phangan, Thailand. And we deliver in days what used to take agencies months.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Our Approach */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-8">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 space-y-4"
            >
              <span className="text-4xl">{p.emoji}</span>
              <h3 className="text-lg font-black uppercase tracking-tight">{p.title}</h3>
              <p className="text-sm font-light text-white/55 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-10 flex items-center gap-8"
        >
          <div className="w-16 h-16 rounded-full bg-[#F27D26] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-black text-xl">G</span>
          </div>
          <div>
            <div className="text-xl font-black">Guy Kaganovsky</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F27D26] mb-3">Founder, Adimpress AI</div>
            <p className="text-sm font-light text-white/55">
              Building the marketing agency I always wanted to work with. AI-first, results-obsessed, based in Koh Phangan, Thailand.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-white/8 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-black mb-3">Ready to work with an AI-first agency?</h2>
          <p className="text-white/50 font-light mb-8 max-w-lg mx-auto">
            Tell us what you're building. We'll show you exactly how our agent team will accelerate it.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#F27D26] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <PageFooter />
    </div>
  );
}
