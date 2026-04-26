# Laurenz Portfolio v7

Flagship portfolio site. Next.js 16 + Tailwind v4 + Framer Motion. See `PLAN.md` for the full design rationale.

## Design rationale

**Creative direction: Continental Precision.** Light mode primary (warm cream base, near-black type, deep forest green accent). Typography pairs Newsreader (high-contrast editorial serif for display text) with Plus Jakarta Sans (clean grotesque for UI/body) and JetBrains Mono (metadata and tags). Motion is precise and mechanical — no spring bounce, no gratuitous animation. Every transition serves information hierarchy.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, full SSG) |
| Styling | Tailwind CSS v4 + CSS Custom Properties |
| Animations | Framer Motion (UI) + GSAP (scroll choreography) |
| Smooth scroll | Lenis |
| Fonts | next/font/google — Newsreader, Plus Jakarta Sans, JetBrains Mono |
| Forms | react-hook-form + Zod v4 |
| Contact | Formspree (replace endpoint with real form ID) |
| Deployment | Vercel |

## Local setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Swapping fictional content for real

Every invented element is marked in TypeScript data files with:

```ts
client: 'Vorwerk Digital', /* FICTIONAL: client name and all details */
```

Search the codebase for `FICTIONAL` to find every item needing replacement.

**`data/projects.ts`** — case study data. Update `client`, `title`, `summary`, `problem`, `approach`, `solution`, `results`, `reflection`, `stack`, and set `fictional: false` for each real project.

**Fields to update before going live:**

| File | What to update |
|------|---|
| `app/layout.tsx` | `metadataBase`, title, description, OG URL |
| `app/layout.tsx` | Hero — replace `M.` with real surname initial |
| `app/sitemap.ts` | `baseUrl` |
| `app/robots.ts` | sitemap URL |
| `components/layout/Footer.tsx` | GitHub and LinkedIn URLs |
| `app/contact/page.tsx` | email address |
| `app/page.tsx` | email in CTA section |
| `components/contact/ContactForm.tsx` | Formspree endpoint |

## Adding new case studies

Add a `Project` object to the `projects` array in `data/projects.ts`. The `slug` field becomes the URL path `/work/[slug]`. Run `npm run build` to regenerate static pages.

## Deployment

1. Push to GitHub
2. Connect to Vercel (auto-detects Next.js)
3. Set custom domain in Vercel dashboard

## Performance / accessibility scorecard

*Update after final Lighthouse audit*

| Metric | Target | Actual |
|---|---|---|
| Performance | ≥ 95 | — |
| Accessibility | ≥ 95 | — |
| Best Practices | ≥ 95 | — |
| SEO | ≥ 95 | — |

All pages prerendered at build time (SSG). Fonts loaded via `next/font` with automatic fallback metrics — zero CLS. Lenis smooth scroll disabled at `prefers-reduced-motion: reduce`. All animations respect `prefers-reduced-motion`. Custom focus states on every interactive element. Skip navigation link present.
