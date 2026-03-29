/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageNavbar, PageFooter } from './PageShells';

const CASE_STUDIES = [
  {
    tag: 'B2B SaaS',
    color: '#F27D26',
    client: 'TechFlow SaaS',
    headline: 'From Zero Organic to 50K Monthly Visitors in 4 Months',
    duration: '90 days',
    stats: [
      { value: '50K+', label: 'Monthly Visitors' },
      { value: '4.7x', label: 'ROAS Improvement' },
      { value: '62%', label: 'CAC Reduction' },
    ],
    challenge: 'Zero organic traffic. $50K/month paid spend with 1.2x ROAS. CAC was unsustainable.',
    whatWeDid: 'Deployed 12 AI agents: Keyword Scout found 200+ keyword opportunities, Blog Architect built a 40-article content engine, SEO Agent fixed 150+ technical issues, Paid Ads Manager restructured campaign architecture.',
    result: '50,000+ monthly organic visitors in 4 months. Google Ads ROAS improved from 1.2x to 4.7x. CAC dropped 62%.',
    agents: ['SEO Agent', 'Content Writer', 'Blog Architect', 'Keyword Scout', 'Paid Ads Manager', 'Reporting Manager'],
  },
  {
    tag: 'Fintech',
    color: '#3B82F6',
    client: 'DataPulse',
    headline: '10,000 New Email Subscribers in 60 Days',
    duration: '60 days',
    stats: [
      { value: '10K', label: 'New Subscribers' },
      { value: '340%', label: 'Branded Search Lift' },
      { value: '5K', label: 'Waitlist Signups' },
    ],
    challenge: 'Launching a new fintech product. Zero brand recognition. Needed to build credibility and capture leads fast without a massive paid budget.',
    whatWeDid: 'AI agents built full content + SEO strategy in 48 hours. Content Writer produced 24 educational articles. Social Media launched omnichannel presence. Lead Gen Agent built automated nurture sequences.',
    result: '10,000 new email subscribers in 60 days. 340% increase in branded search queries. Product waitlist hit 5,000 signups organically.',
    agents: ['SEO Agent', 'Content Writer', 'Blog Architect', 'Social Media Manager', 'Lead Gen Agent', 'Email Strategist'],
  },
  {
    tag: 'eCommerce / DTC',
    color: '#10B981',
    client: 'NovaBrand',
    headline: '35% of Traffic Now Organic — Reducing Paid Dependency',
    duration: '120 days',
    stats: [
      { value: '35%', label: 'Organic Traffic Share' },
      { value: '65%', label: 'Less Paid Dependence' },
      { value: '4x', label: 'Content Speed' },
    ],
    challenge: '100% dependent on paid ads. One algorithm change and the business was at risk. Needed to diversify into organic channels fast.',
    whatWeDid: 'Built organic growth engine: SEO content targeting buyer-intent keywords, product comparison content, blog addressing every customer question. Social Scheduler maintained consistent presence.',
    result: 'Within 120 days, 35% of total traffic came from organic search. Paid dependency reduced from 100% to 65%. ROAS improved as organic compensated for paid efficiency drops.',
    agents: ['SEO Agent', 'Content Strategist', 'Blog Architect', 'Social Scheduler', 'Community Manager', 'Analytics Dashboard'],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <PageNavbar active="Case Studies" />

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26] mb-4 block">
            Results That Speak
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            CASE STUDIES
          </h1>
          <p className="text-lg font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
            Real campaigns. Real metrics. AI agents delivering compounding growth for SaaS, fintech, and eCommerce brands.
          </p>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="px-8 pb-20 max-w-7xl mx-auto space-y-8">
        {CASE_STUDIES.map((cs, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden border border-white/8"
          >
            {/* Header bar */}
            <div className="px-10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ backgroundColor: cs.color }}>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-1">{cs.tag}</div>
                <h2 className="text-3xl font-black text-white">{cs.client}</h2>
                <p className="text-white/80 font-light mt-1">{cs.headline}</p>
              </div>
              <span className="self-start md:self-center border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                {cs.duration}
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 border-b border-white/8">
              {cs.stats.map((stat, j) => (
                <div key={j} className="bg-[#0d0d0d] p-8 text-center border-r border-white/8 last:border-r-0">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="bg-[#080808] grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-white/8">
              {[
                { label: 'The Challenge', text: cs.challenge },
                { label: 'What We Did', text: cs.whatWeDid },
                { label: 'The Result', text: cs.result },
              ].map((col, j) => (
                <div key={j} className="p-8 border-r border-white/8 last:border-r-0">
                  <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-3">{col.label}</div>
                  <p className="text-sm font-light text-white/60 leading-relaxed">{col.text}</p>
                </div>
              ))}
            </div>

            {/* Agents */}
            <div className="bg-[#080808] px-8 py-6">
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-3">AI Agents Deployed</div>
              <div className="flex flex-wrap gap-2">
                {cs.agents.map(agent => (
                  <span key={agent} className="text-[9px] font-bold uppercase tracking-widest border border-white/15 text-white/50 px-3 py-1 rounded">
                    {agent}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
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
          <h2 className="text-3xl font-black mb-3">Want results like these?</h2>
          <p className="text-white/50 font-light mb-8 max-w-lg mx-auto">
            Tell us about your business. We'll show you exactly how our AI agent team will tackle your specific growth challenge.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#F27D26] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Start the Conversation <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <PageFooter />
    </div>
  );
}
