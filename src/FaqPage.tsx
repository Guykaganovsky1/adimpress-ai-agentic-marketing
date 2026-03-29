/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { PageNavbar, PageFooter } from './PageShells';

const FAQS = [
  {
    q: 'What is an AI marketing agency?',
    a: 'An AI marketing agency deploys specialized AI agents that autonomously manage marketing channels — SEO, content, paid ads, and analytics — 24/7. Unlike traditional agencies, our AI agents act on real-time data without waiting for human direction.',
  },
  {
    q: 'How is an AI agency different from a traditional agency?',
    a: 'Traditional agencies are limited by human bandwidth — one strategist juggling multiple clients. An AI agency like Adimpress runs 21 specialized agents simultaneously, each dedicated to a specific channel. This means faster execution, real-time optimization, and costs up to 80% lower than a traditional retainer.',
  },
  {
    q: 'Can AI agents really handle my SEO and content?',
    a: 'Yes. Our SEO and content agents handle keyword research, on-page optimization, blog writing, and link-building at a scale no human team can match. Each agent is trained on your brand voice, target keywords, and competitor data.',
  },
  {
    q: 'How fast can you start?',
    a: 'Most clients see their first AI-generated deliverable — a keyword map, content brief, or ad campaign structure — within 72 hours of kickoff. We start with a focused scope, not a months-long discovery phase.',
  },
  {
    q: 'How much does marketing cost with Adimpress?',
    a: 'SEO starts at $1,500/mo, paid ads from $2,000/mo, full-service from $5,000/mo. No bloated retainers. No hidden fees.',
  },
  {
    q: 'What makes you different from other AI marketing agencies?',
    a: 'We don\'t use AI as a buzzword. We built 21 specialized agents that work together as a team. Each agent is an expert in one domain — SEO, content, paid ads, analytics. They\'re orchestrated, not siloed.',
  },
  {
    q: 'Do I get a human point of contact?',
    a: 'Every client has a dedicated strategist who oversees the AI agent team, interprets results, and translates them into business terms. The agents do the execution; your strategist ensures strategy stays aligned with your goals.',
  },
  {
    q: 'What industries do you work with?',
    a: 'SaaS, fintech, eCommerce, local businesses, and AI startups. We\'ve proven ourselves in B2B and B2C across Southeast Asia, the US, and Europe.',
  },
  {
    q: 'What\'s the minimum contract?',
    a: 'Month-to-month on most services. No 12-month lock-ins. We earn your business every month through results, not contracts.',
  },
  {
    q: 'How do I measure results?',
    a: 'Real-time dashboards, weekly reports, monthly strategy calls. We track the metrics that matter to your business — traffic, leads, revenue impact — not vanity numbers.',
  },
];

const FaqItem = ({ q, a, index }: { key?: number; q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/8"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6 hover:text-[#F27D26] transition-colors"
      >
        <span className="text-base font-bold">{q}</span>
        {open ? <Minus className="w-4 h-4 flex-shrink-0 text-[#F27D26]" /> : <Plus className="w-4 h-4 flex-shrink-0 text-white/40" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-sm font-light text-white/60 leading-relaxed pb-6 max-w-3xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FaqPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <PageNavbar active="FAQ" />

      {/* Hero */}
      <section className="pt-40 pb-16 px-8 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
            Questions Answered
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            FAQ
          </h1>
          <p className="text-lg font-light text-white/60 max-w-xl mx-auto">
            Everything you need to know about working with an AI marketing agency.
          </p>
        </motion.div>
      </section>

      {/* FAQ List */}
      <section className="px-8 pb-20 max-w-3xl mx-auto">
        {FAQS.map((item, i) => (
          <FaqItem key={i} q={item.q} a={item.a} index={i} />
        ))}
      </section>

      {/* CTA */}
      <section className="px-8 pb-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-white/8 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-black mb-3">Still have questions?</h2>
          <p className="text-white/50 font-light mb-8">
            Can't find what you're looking for? Talk to us directly.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#F27D26] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <PageFooter />
    </div>
  );
}
