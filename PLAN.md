# PLAN.md — Laurenz Portfolio v7
*Ultrathink document. Written before a single line of code.*

---

## 1. Creative Direction: "Continental Precision"

Most portfolios in 2025 fall into one of three buckets:
- Dark-mode tech bro (gradient mesh, glass cards, neon accents)
- Ultra-minimal Swiss clone (Helvetica, white space, predictable)
- Three.js showoff (impressive but distracts from the actual work)

This is none of those.

**The concept:** A European design sensibility — the tradition of Otl Aicher, Dieter Rams, Swiss grid systems — brought forward with the craft of someone who builds real digital products. The site should feel like it was *typeset* by someone who studied graphic design and *built* by someone who thinks in systems.

**Why this works for Laurenz:**
The brief is "web builder who also ships automation." That's a person who thinks in workflows, dependencies, and precise outputs. The visual language mirrors the mental model: structure is visible, motion is precise and mechanical (no spring physics, no bounce), every element has a reason to be there.

**Light mode as primary:** Nearly all ambitious portfolio sites default to dark mode. Light mode is harder to execute well, which means a well-crafted light mode stands out immediately and signals genuine craft.

**The unexpected detail:** Using a high-contrast *serif* for display text (Newsreader) in a primarily sans-serif context creates a visual tension that makes the eye stop. Not decorative — structural. The serif is used only for large display contexts, where its optical weight earns its place.

---

## 2. Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15 (App Router) | SSG per page, `next/font` for zero-CLS fonts, `next/image`, built-in sitemap/robots generation, real page routing vs SPA. v6 was Vite/React SPA — this is the architectural upgrade. |
| Language | TypeScript | Professional signal, catches errors at compile time |
| Styling | Tailwind CSS + CSS Custom Properties | Tailwind for layout/spacing utility; CSS vars for design tokens (color, typography scale, motion duration). Never just Tailwind defaults. |
| Animations (scroll) | GSAP + ScrollTrigger | Best-in-class scroll choreography. More precise control than Framer Motion for timeline-based animations. |
| Animations (UI/transitions) | Framer Motion | `layoutId` shared element transitions for the work row→page expand, page transitions, entrance animations |
| Smooth scroll | Lenis | Better momentum feel than CSS `scroll-behavior: smooth` |
| Fonts | `next/font/google` | Zero CLS font loading, automatic `size-adjust` fallback metrics |
| Forms | react-hook-form + Zod | Type-safe form validation |
| Contact delivery | Resend API (with Formspree fallback) | Professional email delivery, free tier |
| Deployment | Vercel | Optimal for Next.js, Edge Network, preview URLs |
| Analytics | Vercel Analytics | Privacy-friendly, no cookie banner needed |

---

## 3. Information Architecture

```
/ (Home)
├── Hero — name, positioning, one precise sentence
├── Work Preview — 3 selected projects as a list (not a grid of cards)
├── Process — 3 principles, numbered, large type
└── Contact Tease — one line + CTA

/work (Work Index)
├── All 5 case studies as a list
├── Each row: client type · category · year · one-line outcome
├── Hover: row expands to show full outcome + stack tags
└── Click: row expands to fill viewport → routes to case study

/work/[slug] (Case Study — 5 pages)
├── Header: client type, title, outcome stat, stack
├── Problem
├── Approach
├── Solution
├── Outcome
├── Reflection
└── Next project navigation

/about
├── Narrative (not CV) — the hybrid angle, how it developed
├── How I work — 3 principles as prose
├── Currently — what I'm exploring now
└── A few honest lines on tools/skills (prose, no skill bars)

/lab
├── Short experiments, process notes, 3–4 entries
├── Each entry: title, date, 200-400 word note or interactive demo
└── Where personality lives

/contact
├── Brief context ("Available for projects, contracts, and the occasional interesting problem")
├── Designed form (name, email, message, project type)
├── Direct: LinkedIn, GitHub, email
└── Location: Germany · Response time: 24–48h

/404 (custom)
```

**Narrative arc on the homepage:**
1. **0–1 scroll:** Who this is — stripped of jargon, confident, done in 8 words
2. **1–3 scrolls:** The work — not cards, a list. Outcomes first.
3. **3–4 scrolls:** How he thinks — 3 process principles
4. **4–5 scrolls:** The invitation — one line, one button

---

## 4. Signature Moments

### Moment 1: The Precision Hero Reveal
The name "Laurenz" and the positioning line appear as if being drawn by a precision instrument — not a typewriter (cliché), not a fade (boring), but a clip-path reveal from left to right, each word on a slightly different delay. The timing is mechanical: 0ms, 120ms, 240ms... Exact intervals, no easing variation.

### Moment 2: The Expanding Work Row
On `/work`, each project is a full-width row with minimal info. Hovering a row expands it with a smooth `height` animation, revealing the project outcome and stack tags. Clicking triggers a `layoutId`-powered Framer Motion shared element transition — the row expands to fill the viewport before the next page mounts. This is the hardest interaction to build and the most memorable one.

### Moment 3: The SVG Workflow Diagram (About Page)
A hand-drawn-style SVG showing "A typical project" — from brief to deployed. Nodes and connections draw themselves as you scroll through the About section. Built with GSAP `drawSVG` — the path `stroke-dashoffset` animates to zero as it enters the viewport. This is the most direct embodiment of "systems thinker."

### Moment 4: The Precision Cursor
A custom cursor: a small filled circle (8px) that follows the pointer with a slight trailing delay, and a larger ring (32px) that follows with more delay. On hover over interactive elements, the large ring scales to fill the target element. On hover over text, it becomes a thin vertical bar (like a text insertion cursor, but designed). Built with CSS transforms, no library.

### Moment 5: Case Study Progress Indicator
Each case study page has a reading progress bar — not the browser default, but a thin ruled line in the accent color at the very top of the viewport, filling left-to-right as you read. It disappears on the last section when the "Next project" navigation comes into view.

---

## 5. Design System

### Color Tokens
```
--ink:         #0C0C0B    /* warm black — text, borders */
--paper:       #F5F2EC    /* warm cream — page background */
--accent:      #1C4532    /* deep forest green — CTAs, highlights */
--accent-mid:  #2D6B4A    /* lighter green — hover states */
--muted:       #6B6862    /* warm gray — secondary text */
--subtle:      #C8C4BC    /* light warm gray — disabled, subtle borders */
--border:      #E4E0D8    /* off-white border */
--surface:     #EDE9E2    /* slightly darker than paper — card backgrounds */
```

**Why forest green?** It reads as serious and European — closer to the green of old Bundespost signage or European passport covers than the SaaS greens (Stripe, Linear). It has no "startup" association. Against warm cream, it creates a combination that reads as considered and premium.

### Typography
```
Display (Newsreader):
  Used for: hero names, case study titles, large quotes
  Why: High contrast, optically elegant at large sizes. 
       Italic variant creates stopping-power contrast in a 
       sea of grotesque portfolios.

UI / Body (Plus Jakarta Sans):
  Used for: all body text, navigation, labels, body copy
  Weights: 300, 400, 500, 600
  Why: More character than Inter, cleaner than Space Grotesk,
       professional without being corporate.

Monospace (JetBrains Mono):
  Used for: project metadata, stack tags, dates, counters
  Why: Signals technical precision. Used sparingly.
```

### Type Scale
```
--text-xs:   0.6875rem  /* 11px — metadata labels */
--text-sm:   0.8125rem  /* 13px — captions, tags */
--text-base: 1rem       /* 16px — body */
--text-lg:   1.125rem   /* 18px — lead paragraphs */
--text-xl:   1.375rem   /* 22px — large body */
--text-2xl:  1.75rem    /* 28px — section headings */
--text-3xl:  2.25rem    /* 36px — page headings */
--text-4xl:  3rem       /* 48px — display */
--text-5xl:  4rem       /* 64px — hero */
--text-6xl:  6rem       /* 96px — hero name */
--text-7xl:  8rem       /* 128px — oversized display */
```

### Motion Language
```
Duration:
  --dur-micro:    200ms   /* hover state color changes */
  --dur-standard: 400ms   /* UI transitions, reveals */
  --dur-page:     700ms   /* page transitions */
  --dur-draw:     1200ms  /* SVG path draws */

Easing:
  --ease-out:  cubic-bezier(0.16, 1, 0.3, 1)   /* entries */
  --ease-in:   cubic-bezier(0.7, 0, 0.84, 0)   /* exits */
  --ease-inout: cubic-bezier(0.83, 0, 0.17, 1) /* bidirectional */
  
  NO spring physics. NO bounce. Mechanical precision.
  
prefers-reduced-motion: All animations use 
  @media (prefers-reduced-motion: reduce) guards.
  Fallback: instant opacity crossfades.
```

### Grid
```
Columns: 12
Gutter:  24px (mobile), 32px (tablet), 48px (desktop)
Padding: 20px (mobile), 40px (tablet), 80px (desktop)
Max-width: 1440px
Body-text max: 68ch
```

### Component Vocabulary
```
<SectionLabel>      Small-caps category identifier, always above headings
<Tag>               Monospace pill for stack items, categories, dates
<ProjectRow>        Full-width list item with expand animation
<CaseStudyHeader>   Full-bleed opener for case study pages
<Callout>           Highlighted stat or outcome — large number + context
<ScrollProgress>    Reading progress indicator (case study pages)
<WorkflowDiagram>   SVG diagram that draws on scroll (About)
<CustomCursor>      Precision cursor overlay
<PageTransition>    Framer Motion layout animation wrapper
```

---

## 6. Case Studies

### CS-1: Vorwerk Digital — Order Processing Automation
<!-- FICTIONAL: client name, all details -->
- **Type:** Automation / Integration
- **One-line:** Reduced order processing from ~6h/week to 12min via n8n
- **Stack:** n8n, Shopify Webhooks, Airtable API, Slack API
- **The number:** 97% reduction in manual processing time

### CS-2: Basecamp Studio — Agency Website Rebuild  
<!-- FICTIONAL: client name, all details -->
- **Type:** Frontend Development
- **One-line:** Rebuilt a Hamburg design agency's site; 3× increase in qualified inbound
- **Stack:** Next.js, TypeScript, GSAP, Vercel
- **The number:** 3× qualified inbound inquiries

### CS-3: WanderFurther — Travel Content Platform
<!-- REAL project -->
- **Type:** Frontend Development (Solo)
- **One-line:** Built a travel blog from scratch; sub-1s mobile load, 40+ articles, page-1 rankings
- **Stack:** HTML, CSS, JavaScript, Airtable, Leaflet.js, Netlify
- **The number:** <1s load time (mobile, 4G throttle)

### CS-4: Relais Consulting — Client Onboarding Pipeline
<!-- FICTIONAL: client name, all details -->
- **Type:** Automation / Operations
- **One-line:** Collapsed an 11-step, 3-hour manual onboarding into a 20-minute automated pipeline
- **Stack:** n8n, Typeform, Notion API, Pipedrive, Gmail API
- **The number:** 3h → 20min per client

### CS-5: Schreiber & Co — Advisory Landing Page
<!-- FICTIONAL: client name, all details -->
- **Type:** Frontend Development + Conversion
- **One-line:** No web presence to 40 qualified leads in 60 days at 4.2% conversion
- **Stack:** Next.js, Tailwind CSS, Calendly API, Vercel
- **The number:** 4.2% conversion rate on paid traffic

---

## 7. Build Sequence

1. **Project setup** — Next.js 15, dependencies, config
2. **Design system** — CSS tokens, Tailwind config, font loading
3. **Layout primitives** — Nav, Footer, Container, SectionLabel, Tag
4. **Hero + Homepage** — the first thing anyone sees
5. **Work index** — list with expand animation
6. **WanderFurther case study** — first full case study end-to-end
7. **About page** — narrative + SVG diagram
8. **Contact page** — form + links
9. **Remaining 4 case studies** — fill in the data
10. **Lab page** — 3–4 entries
11. **Polish pass** — cursor, transitions, 404, loading states
12. **Audit** — Lighthouse, axe, keyboard, mobile
13. **Deploy** — Vercel, OG image, sitemap, JSON-LD

---

*This document describes the intent. The code is the proof.*
