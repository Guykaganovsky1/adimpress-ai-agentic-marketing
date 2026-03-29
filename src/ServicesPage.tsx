/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Cpu,
  Search,
  Target,
  TrendingUp,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { PageNavbar, PageFooter } from './PageShells';

// ─── Data (copied from adimpress-company-ai.vercel.app/services) ──────────────

const SERVICES = [
  {
    icon: Globe,
    name: 'Websites & Apps',
    subtitle: 'Built to Perform',
    desc: 'Your website is your best salesperson. We build sites and apps that load fast, rank on Google, and turn visitors into paying customers. From landing pages to full e-commerce builds.',
    tags: ['Web Design', 'Development', 'E-Commerce', 'Landing Pages', 'CMS Setup', 'Conversion Optimization'],
    price: 'From $2,500',
  },
  {
    icon: Cpu,
    name: 'AI & Automation',
    subtitle: 'That Works for Your Business',
    desc: 'Stop spending hours on tasks a machine can do better. We build AI chatbots, automations, and intelligent tools that handle the busywork — customer service bots, lead qualification, internal tools.',
    tags: ['AI Chatbots', 'Automation', 'Lead Qualification', 'Workflows', 'CRM Integration'],
    price: 'From $1,500/mo',
  },
  {
    icon: Search,
    name: 'SEO & Content',
    subtitle: 'Get Found on Page One',
    desc: 'No fluff. Just rankings. Our SEO combines technical optimization with AI-powered content that earns citations and backlinks. We track every keyword, every ranking, every dollar of organic traffic.',
    tags: ['Technical SEO', 'Content Strategy', 'Link Building', 'Agentic SEO', 'Keyword Research'],
    price: 'From $1,500/mo',
  },
  {
    icon: Target,
    name: 'Paid Advertising',
    subtitle: 'Ads That Pay for Themselves',
    desc: 'We manage Google Ads and Meta campaigns that bring qualified leads at a price that makes sense. No vanity metrics — just conversions you can track. We don\'t start campaigns until we know your numbers.',
    tags: ['Google Ads', 'Meta Ads', 'PPC', 'Conversion Tracking', 'Audience Modeling'],
    price: 'From $2,000/mo',
  },
  {
    icon: TrendingUp,
    name: 'Content & Copywriting',
    subtitle: 'Words That Sell',
    desc: 'Every word on your site should earn its place. We write copy that\'s benefit-driven, clear, and optimized for both humans and search engines — by specialists who understand your industry.',
    tags: ['Copywriting', 'Content Writing', 'Brand Voice', 'Landing Page Copy', 'Email Sequences'],
    price: 'From $800/mo',
  },
  {
    icon: BarChart3,
    name: 'Analytics & Reporting',
    subtitle: 'Data You Can Actually Use',
    desc: 'Most agencies bury you in dashboards. We give you real-time visibility into what matters — traffic, leads, revenue impact — in plain English with actionable recommendations.',
    tags: ['Google Analytics', 'Real-Time Dashboards', 'Weekly Reports', 'ROI Tracking'],
    price: 'From $500/mo',
  },
];

// ─── Services Page ────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <PageNavbar active="Services" />

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
            What we do
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            SERVICES
          </h1>
          <p className="text-lg font-light text-white/60 max-w-xl leading-relaxed">
            Every service is powered by specialized AI agents, reviewed by senior strategists.
            We build marketing systems — not isolated tactics.
          </p>
        </motion.div>
      </section>

      {/* Service Cards */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 flex flex-col gap-6 hover:border-[#F27D26]/30 transition-colors"
              >
                <Icon className="w-8 h-8 text-[#F27D26]" strokeWidth={1.5} />
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight mb-1">{s.name}</h2>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F27D26]">{s.subtitle}</p>
                </div>
                <p className="text-sm font-light text-white/60 leading-relaxed flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-widest border border-white/15 text-white/50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xl font-black italic text-[#F27D26]">{s.price}</p>
              </motion.div>
            );
          })}
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
          <h2 className="text-3xl font-black mb-3">Need a custom package?</h2>
          <p className="text-white/50 font-light mb-8 max-w-lg mx-auto">
            Most clients combine services. Tell us what you're trying to achieve
            and we'll build the right combination for your goals.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#F27D26] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Get a Custom Quote <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <PageFooter />
    </div>
  );
}
