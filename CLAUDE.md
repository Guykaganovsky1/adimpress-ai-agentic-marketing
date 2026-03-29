# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

The Adimpress marketing website — a single-page React app for an AI-powered digital agency. Built with Vite + React 19 + TypeScript + Tailwind CSS v4. Bootstrapped from Google AI Studio.

The entire site lives in **one file**: `src/App.tsx` (~1800 lines). There is no routing, no separate component files, no state management library.

## Commands

```bash
npm run dev       # Dev server at http://localhost:3000
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build
npm run lint      # TypeScript type-check (tsc --noEmit)
npm run clean     # Remove dist/
```

## Environment

Requires `.env.local` (or `.env`) with:
```
GEMINI_API_KEY=your_key_here
```

The Vite config bakes `GEMINI_API_KEY` into the bundle at build time via `define`. The key is exposed client-side — this is intentional for the AI Studio demo context.

## Architecture

**Single component file** (`src/App.tsx`) organized by page section, separated by ASCII banner comments (`// ─── Section Name ───`):

| Section | Component | Notes |
|---|---|---|
| Top of file | `getAI()` | Lazy singleton for `GoogleGenAI` |
| Navbar | `Navbar` | Fixed, mobile hamburger menu |
| Hero | `Hero` | Scroll-animated with `motion/react` |
| Trust Bar | `TrustBar` | Static logo strip |
| Services | `Services` | Animated service cards |
| Why Us | `WhyAdimpress` | Differentiators grid |
| Background FX | `BackgroundAnimation`, `NeuralNetwork` | Canvas-free CSS/SVG animations |
| AI Demo | `NeuralCreativeLab` | Live Gemini API integration — generates ad copy/visuals |
| ROI Calculator | `ROICalculator` | Interactive sliders with `recharts` AreaChart |
| Stats | `StatsSection` | Animated counters |
| Process | `Process` | Static steps |
| Pricing | `Pricing` | Plan cards with toggle |
| Work Gallery | `Work` | Portfolio grid |
| Testimonials | `Testimonials` | Auto-scrolling carousel |
| FAQ | `QASection` | Accordion |
| Footer/Contact | `Footer` | Contact form (no backend — visual only) |
| AI Chat Widget | `AIChat` | Floating chat powered by Gemini API |

## Key Libraries

- **`motion/react`** (Framer Motion v12) — scroll animations (`useScroll`, `useTransform`), `AnimatePresence`
- **`@google/genai`** — Gemini API for `NeuralCreativeLab` and `AIChat`
- **`recharts`** — `AreaChart` in ROI Calculator
- **`lucide-react`** — Icons throughout
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed)

## Design System

- Brand color: `#F27D26` (orange accent)
- Background: `#050505` (near-black)
- Typography: system font stack, heavy weight, tight tracking
- All responsive breakpoints use Tailwind's `md:` prefix

## Gemini Integration

Both `NeuralCreativeLab` and `AIChat` use the same `getAI()` singleton. The `NeuralCreativeLab` prompts Gemini to generate marketing copy in structured JSON. `AIChat` streams responses using `generateContentStream`. If `GEMINI_API_KEY` is absent, the AI features silently degrade (no instance created).
