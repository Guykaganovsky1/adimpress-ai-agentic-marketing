/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageNavbar, PageFooter } from './PageShells';

// ─── Data (copied from adimpress-company-ai.vercel.app/agents) ────────────────

const AGENTS = [
  { emoji: '👑', name: 'CEO Agent', category: 'Strategy & Vision', desc: 'Sets the overall marketing strategy, identifies opportunities, and ensures every campaign aligns with business goals.' },
  { emoji: '📋', name: 'Project Manager Agent', category: 'Operations', desc: 'Coordinates all tasks, manages timelines, and ensures seamless delivery across every workstream.' },
  { emoji: '🎨', name: 'Web Designer Agent', category: 'Design & UX', desc: 'Designs beautiful, conversion-focused websites and apps. Every pixel serves a purpose.' },
  { emoji: '💻', name: 'App Builder Agent', category: 'Development', desc: 'Builds web applications, landing pages, and custom tools with clean, scalable code.' },
  { emoji: '🤖', name: 'AI Engineer Agent', category: 'Technology', desc: 'Builds and maintains AI systems, chatbots, and automations that power your marketing.' },
  { emoji: '🔍', name: 'SEO Agent', category: 'Organic Search', desc: 'Researches keywords, optimizes pages, and builds link-building campaigns that move rankings.' },
  { emoji: '📈', name: 'Paid Ads Manager', category: 'Paid Media', desc: 'Manages Google Ads and Meta campaigns, optimizes bids, and maximizes ROAS every hour.' },
  { emoji: '✍️', name: 'Content Writer Agent', category: 'Copywriting', desc: 'Writes blog posts, landing pages, email sequences, and ad copy that converts.' },
  { emoji: '📱', name: 'Social Media Manager', category: 'Social', desc: 'Creates, schedules, and optimizes content across Instagram, LinkedIn, Twitter, and TikTok.' },
  { emoji: '🧠', name: 'Knowledge Base Manager', category: 'Research', desc: 'Deep research on your industry, competitors, and customers to inform every strategy.' },
  { emoji: '🎯', name: 'Sales Closer Agent', category: 'Revenue', desc: 'Nurtures inbound leads, qualifies prospects, and ensures no opportunity slips through.' },
  { emoji: '🤝', name: 'Account Manager Agent', category: 'Client Success', desc: 'Manages client relationships, communicates results, and ensures long-term satisfaction.' },
  { emoji: '💰', name: 'Finance Agent', category: 'Budget & ROI', desc: 'Tracks spend, calculates ROI, and ensures every dollar delivers maximum return.' },
  { emoji: '✅', name: 'QA Reviewer Agent', category: 'Quality', desc: 'Reviews all deliverables for accuracy, brand consistency, and performance before launch.' },
  { emoji: '📊', name: 'Reporting Manager', category: 'Analytics', desc: 'Compiles weekly reports, tracks KPIs, and surfaces insights that drive better decisions.' },
  { emoji: '🚀', name: 'Onboarding Manager', category: 'Setup', desc: 'Gets new clients up and running in 72 hours. Briefs the team, sets up tracking, launches.' },
  { emoji: '🔭', name: 'Competitor Intel Agent', category: 'Competitive Research', desc: 'Monitors competitor strategies, pricing, and positioning to find untapped opportunities.' },
  { emoji: '🎭', name: 'Brand Voice Agent', category: 'Brand', desc: 'Ensures all copy and content stays consistent with your brand personality and tone.' },
  { emoji: '⚡', name: 'Lead Gen Agent', category: 'Demand Generation', desc: 'Identifies and targets high-intent prospects across channels to fill your pipeline.' },
  { emoji: '🏷️', name: 'Whitelabel Manager', category: 'Partnerships', desc: 'Manages agency partner deliverables with white-label branding and seamless handoff.' },
  { emoji: '🐕', name: 'Buddy', category: 'Support & Morale', desc: 'Keeps the team motivated, flags blockers, and handles miscellaneous tasks that need a human touch.' },
];

// ─── Agents Page ──────────────────────────────────────────────────────────────

export default function AgentsPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <PageNavbar active="Agents" />

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
            Behind every campaign
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            21 AI AGENTS.<br />WORKING 24/7.
          </h1>
          <p className="text-lg font-light text-white/60 max-w-xl leading-relaxed">
            We don't hire generalists. Every agent is a specialist in one domain — trained on
            thousands of campaigns, working around the clock, with human oversight.
          </p>
        </motion.div>
      </section>

      {/* Agent Cards */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 flex flex-col gap-4 hover:border-[#F27D26]/30 transition-colors"
            >
              <span className="text-4xl">{agent.emoji}</span>
              <div>
                <h2 className="text-lg font-black uppercase tracking-tight mb-1">{agent.name}</h2>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26]">{agent.category}</p>
              </div>
              <p className="text-sm font-light text-white/55 leading-relaxed">{agent.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-white/8 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-black mb-3">Ready to meet the team?</h2>
          <p className="text-white/50 font-light mb-8 max-w-lg mx-auto">
            Tell us your goals and we'll show you exactly which agents will tackle your project.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#F27D26] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Talk to the Team <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <PageFooter />
    </div>
  );
}
