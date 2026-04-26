export interface ProjectTheme {
  pageBg: string  // dark case study header background
  accent: string  // vibrant project accent (stats, highlights)
  text: string    // primary text on dark bg
  muted: string   // secondary/label text on dark bg
}

export interface Project {
  slug: string
  title: string
  client: string
  fictional: boolean
  industry: string
  type: 'Frontend' | 'Automation' | 'Full-stack'
  typeLabel: string
  year: string
  summary: string
  outcome: {
    stat: string
    label: string
  }
  featured: boolean
  stack: string[]
  problem: string[]
  approach: string[]
  solution: string[]
  results: string[]
  reflection: string[]
  hoverTint: string    // subtle row hover bg (work index / homepage)
  theme: ProjectTheme  // full dark theme for case study header
}

export const projects: Project[] = [
  {
    slug: 'vorwerk-digital',
    title: 'Order Processing Automation',
    client: 'Vorwerk Digital', /* FICTIONAL: client name and all details */
    fictional: true,
    industry: 'B2B E-commerce',
    type: 'Automation',
    typeLabel: 'Automation · Integration',
    year: '2024',
    summary: 'Reduced manual order processing from ~6h/week to 12 minutes via an n8n workflow integrating Shopify, Airtable, and Slack.',
    outcome: {
      stat: '97%',
      label: 'reduction in manual processing time',
    },
    featured: true,
    stack: ['n8n', 'Shopify Webhooks', 'Airtable API', 'Slack API'],
    problem: [
      'The operations team at Vorwerk Digital was spending around six hours every week manually reconciling order data across three systems: Shopify for sales, Airtable for inventory tracking, and Slack for team coordination. Every morning, someone would export a CSV, copy rows into a spreadsheet, check stock levels, then post a summary message by hand.',
      'There were no automated alerts for low-stock SKUs, no structured record of which orders had been flagged, and no single source of truth for the team. When someone was out sick, the whole process broke. The inefficiency was obvious — the fix was not.',
    ],
    approach: [
      'Before writing a single workflow, I spent a day mapping the existing process: exactly which fields were read from Shopify, which Airtable columns mattered, and what the Slack message actually needed to say. Most automation work fails because people automate the wrong thing at the wrong granularity.',
      "The core question was: what decisions does this data actually drive? If the answer is 'none — it just goes into a spreadsheet no one fully reads,' then we're automating reporting theater. It turned out the Slack message did trigger real actions: two specific SKU categories needed a manual review when orders exceeded a threshold. I scoped the automation around those actual decision points.",
    ],
    solution: [
      'Built a three-stage n8n workflow: (1) A Shopify webhook fires on every new order and writes the structured record to Airtable. (2) A scheduled workflow runs every morning at 8:00 AM, queries the previous day\'s orders, cross-references stock levels, and generates a plain-English summary. (3) The summary posts to a dedicated Slack channel with a linked Airtable view for drill-down.',
      'Added deduplication logic to handle Shopify\'s webhook retry behavior — the first version was creating duplicate Airtable records on retried webhooks. A simple idempotency check on the order ID fixed it cleanly.',
      'For the two threshold-triggered SKUs, the workflow posts a separate flagged message mentioning the relevant team member by Slack handle, routing the right information to the right person without additional steps.',
    ],
    results: [
      'Manual processing time dropped from approximately six hours per week to twelve minutes of reviewing the Slack summary and actioning any flagged items. Zero missed orders in the four months since deployment.',
      'The Airtable database now serves as a living audit trail — something the team could query retroactively. This turned out to be immediately useful during a supplier dispute, where they needed records of specific order timestamps.',
    ],
    reflection: [
      'The hardest part was Shopify\'s webhook retry logic, which I hadn\'t fully accounted for in the initial design. The fix was simple once identified, but it reinforced a rule I now follow on every automation: assume the API will do something unexpected and build idempotency in from the start.',
      'I also deliberately kept the Slack output readable by a human who wasn\'t in the room when it was built. Terse automation output that requires context to interpret is just technical debt you pay every time someone new joins.',
    ],
    hoverTint: '#EDF5EF',
    theme: {
      pageBg: '#040F08',
      accent: '#22C55E',
      text:   '#D4EDD9',
      muted:  '#6B9A72',
    },
  },
  {
    slug: 'basecamp-studio',
    title: 'Agency Website Rebuild',
    client: 'Basecamp Studio', /* FICTIONAL: client name and all details */
    fictional: true,
    industry: 'Creative Agency',
    type: 'Frontend',
    typeLabel: 'Frontend · Design',
    year: '2024',
    summary: 'Rebuilt a Hamburg design agency\'s Squarespace site with a custom Next.js build. Qualified inbound inquiries tripled in the first quarter.',
    outcome: {
      stat: '3×',
      label: 'increase in qualified inbound inquiries',
    },
    featured: true,
    stack: ['Next.js', 'TypeScript', 'GSAP', 'Vercel'],
    problem: [
      'Basecamp Studio does excellent work for premium clients. Their Squarespace site did not reflect this. It looked like a Squarespace site — which, when your business is design, is a credibility problem before a prospect has seen a single project.',
      'The specific issues: templated layout with no distinct visual identity, slow load on mobile (4.8s on 4G), no per-project case study depth, and a portfolio grid that treated every project equally regardless of scope. The site was generating inquiries, but a disproportionate share were mismatched — small budgets, wrong scope, wrong industry.',
    ],
    approach: [
      'The brief was essentially: make the site perform at the level the work deserves. That meant two things: visual craft that signals high-end positioning, and information architecture that filters inquiries by quality rather than volume.',
      'We spent the first week on positioning and content before any design decisions. What makes this agency different? What do they want to be hired for? The answer shaped everything — a horizontal scroll format for each case study, a deliberately sparse project list (eight featured rather than a full archive), and copy that was direct about their client profile and minimum engagement size.',
    ],
    solution: [
      'Built a Next.js 15 site with static generation for all pages. Custom cursor with a hover-reactive morphing state. GSAP ScrollTrigger powers the case study reveals — each project section fades in on a staggered timeline as you scroll past it, giving the content a sense of pacing rather than just appearing all at once.',
      'The hero uses a large-format typographic treatment with Framer Motion handling the entrance animation — each word clips in from left on a precise 120ms stagger. On case study pages, the project overview uses a split-screen layout: image on the left, outcome metrics and copy on the right.',
      'Deployed on Vercel with a custom domain. Lighthouse scores: 97 Performance, 100 Accessibility, 100 Best Practices, 98 SEO.',
    ],
    results: [
      'Three months post-launch, qualified inbound inquiries — those from companies in the target client profile with appropriate budget signals — tripled compared to the same period the previous year.',
      'The site was featured on SiteInspire six weeks after launch, which drove a spike of direct traffic and several industry contacts reaching out to ask about the build.',
    ],
    reflection: [
      'The hardest creative call was restraint. My first draft had too much happening — the cursor effect, an animated counter on the hero, a marquee with client names. Cutting it down to the cursor and the text reveals made every remaining animation more deliberate. The constraint improved the work.',
      'I also learned that "make it look premium" is actually a research problem, not just a design problem. The visual language only worked because we had done the positioning work first. A beautiful template without clear positioning is just expensive-looking nothing.',
    ],
    hoverTint: '#FAF4EC',
    theme: {
      pageBg: '#120B03',
      accent: '#E8943A',
      text:   '#F5E6C8',
      muted:  '#B8946A',
    },
  },
  {
    slug: 'wanderfurther',
    title: 'Travel Content Platform',
    client: 'WanderFurther', /* REAL project — solo build */
    fictional: false,
    industry: 'Travel · Content Publishing',
    type: 'Frontend',
    typeLabel: 'Frontend · Solo Project',
    year: '2023',
    summary: 'Built a travel blog from scratch — no framework, no CMS lock-in. Sub-1s mobile load time, 40+ articles published, multiple page-1 rankings.',
    outcome: {
      stat: '<1s',
      label: 'load time on mobile (4G throttle)',
    },
    featured: true,
    stack: ['HTML', 'CSS', 'JavaScript', 'Airtable', 'Leaflet.js', 'Netlify'],
    problem: [
      'WanderFurther started as a personal travel writing project — a place to document trips with enough depth that it would actually be useful to someone planning the same route. WordPress felt like too much infrastructure for what was fundamentally a content problem. Ghost was cleaner but locked editorial content to a hosted database. I wanted full control over performance and markup.',
      'The secondary problem was the map component: I wanted each destination article to have an interactive map showing the actual route taken, with annotated stops. No existing CMS integration handled this in a way that didn\'t cost three times the site\'s budget.',
    ],
    approach: [
      'The constraint I set — no build framework, no Node.js in the pipeline — turned out to be the right one. It forced every decision to be intentional. No dependencies unless they earned their place. No JavaScript loaded unless it was doing something.',
      'For the CMS layer, Airtable made sense: free tier covers the content volume, the API is clean, and it\'s a tool I already used for other work. I wrote a small Netlify build function that fetches articles from Airtable at build time and generates static HTML pages. Zero runtime API calls.',
    ],
    solution: [
      'Plain HTML, CSS custom properties for theming, and vanilla JavaScript for the interactive elements. Each article page is generated from an Airtable record at build time via a Netlify Build Plugin — the function fetches all records, compiles them through a Mustache template, and writes static HTML files to the output directory.',
      'The map component uses Leaflet.js loaded conditionally — only on article pages that include GPS coordinates in the Airtable record. A lightweight JSON file stores the route polyline and annotated stops. No map API key required, tile server is OpenStreetMap.',
      'Image pipeline: photos are resized and converted to WebP at upload time using a simple shell script. The `<picture>` element with `srcset` handles responsive delivery. No image CDN needed at this traffic level.',
    ],
    results: [
      'Load time on mobile (4G throttling, no cache) consistently under one second. Lighthouse scores: 99 Performance, 97 Accessibility, 100 Best Practices, 97 SEO.',
      '40+ articles published. Multiple articles rank on page one for long-tail travel search queries — "best day hikes from Chiang Mai," "Oaxaca city walking route," and a few others with consistent organic traffic.',
      'Infrastructure cost: essentially zero. Netlify free tier covers the build minutes. Airtable free tier covers the article database. This is a site I\'ll never have to migrate.',
    ],
    reflection: [
      'This project reinforced something I\'ve become convinced of: the framework is usually the wrong starting point. Starting with constraints — what do I actually need this to do? — tends to produce better architecture than starting with a scaffold.',
      'The Airtable-as-CMS approach has one significant limitation: there\'s no live preview. Drafts only become visible after a deploy. For a solo blog, that\'s a non-issue. For a client, I\'d think carefully about whether the content editing experience is acceptable before recommending it.',
    ],
    hoverTint: '#EBF5FB',
    theme: {
      pageBg: '#020C14',
      accent: '#38BDF8',
      text:   '#C8E6F5',
      muted:  '#6899B4',
    },
  },
  {
    slug: 'relais-consulting',
    title: 'Client Onboarding Automation',
    client: 'Relais Consulting', /* FICTIONAL: client name and all details */
    fictional: true,
    industry: 'B2B SaaS Consultancy',
    type: 'Automation',
    typeLabel: 'Automation · Operations',
    year: '2024',
    summary: 'Collapsed a 11-step manual client onboarding process spanning four tools into a 20-minute automated pipeline. Six months of zero missing steps.',
    outcome: {
      stat: '3h → 20m',
      label: 'per-client onboarding time',
    },
    featured: false,
    stack: ['n8n', 'Typeform', 'Notion API', 'Pipedrive', 'Gmail API'],
    problem: [
      'Relais Consulting was onboarding two to three new clients per week. Each onboarding involved eleven steps: creating a Notion workspace from a template, setting up a Pipedrive deal, sending a welcome email sequence, scheduling a kickoff call, and several internal documentation steps. All of it manual, all of it prone to someone forgetting step seven.',
      'The failures were subtle — a client workspace missing one page, a Pipedrive deal without a linked contact, a welcome email arriving three days late. No single failure was catastrophic, but collectively they signaled operational immaturity to clients who were paying for precision consultancy.',
    ],
    approach: [
      'I audited every step: which ones genuinely required human judgment (kickoff call scheduling, assigning the account lead), and which were pure mechanical copying of structured data (Notion workspace creation, Pipedrive deal setup, welcome email copy that was the same for every client).',
      'Seven of the eleven steps were pure data transformation — take input from the intake form, write it to three different places. Those were the automation candidates. The remaining four still required a human touch, but the pipeline would route them to the right person with all the context pre-filled.',
    ],
    solution: [
      'n8n workflow triggered by a Typeform submission from the client intake form. Stage one: create a Notion workspace from a master template, with the client\'s name, project scope, and start date pre-populated into the relevant pages. Stage two: create a Pipedrive deal and linked contact from the Typeform fields. Stage three: trigger a three-email Gmail sequence using the client\'s first name and specific project details extracted from the form.',
      'The fourth step — assigning the account lead and scheduling the kickoff — surfaces as a structured Slack message with a pre-filled Calendly booking link and a one-click acknowledgment button. The human still decides and confirms, but they\'re doing so with all context in front of them.',
      'Added idempotency throughout: duplicate Typeform submissions (which happen when clients accidentally re-submit) create a de-duplication check against existing Pipedrive contacts before creating new records.',
    ],
    results: [
      'Onboarding time for the operations team dropped from approximately three hours to twenty minutes — the time required to review the Slack notification and confirm the kickoff scheduling. That\'s across every new client for six months with zero missed steps.',
      'The Notion workspace template itself improved in the process: forcing all onboarding into a single structured form revealed that the team was collecting inconsistent data. The intake form is now the single source of truth for project metadata.',
    ],
    reflection: [
      'Version one of this automation broke on clients with non-EU timezones — the Calendly integration was generating booking links with the wrong availability window. The fix required adding a timezone field to the Typeform and passing it to the Calendly API. A lesson in testing with real-world edge cases before declaring something production-ready.',
      'The broader lesson: automation surfaces inconsistency in the underlying process. If you can\'t define the exact input you need for a step, you can\'t automate it — and often, the value of the automation project is as much the process clarification as the time saved.',
    ],
    hoverTint: '#F2F0FD',
    theme: {
      pageBg: '#060819',
      accent: '#A78BFA',
      text:   '#DDD8F8',
      muted:  '#7A78B0',
    },
  },
  {
    slug: 'schreiber-co',
    title: 'Advisory Landing Page',
    client: 'Schreiber & Co', /* FICTIONAL: client name and all details */
    fictional: true,
    industry: 'Financial Advisory',
    type: 'Frontend',
    typeLabel: 'Frontend · Conversion',
    year: '2023',
    summary: 'Built a trust-first landing page for a boutique investment advisory. 40 qualified leads in the first 60 days, 4.2% conversion on paid search traffic.',
    outcome: {
      stat: '4.2%',
      label: 'conversion rate on paid search traffic',
    },
    featured: false,
    stack: ['Next.js', 'Tailwind CSS', 'Calendly API', 'Vercel'],
    problem: [
      'Schreiber & Co had no web presence — new clients found them exclusively through referrals, and the principals were ready to run paid search campaigns for the first time. A "coming soon" page was the only digital footprint.',
      'The problem wasn\'t traffic. The problem was that financial advisory is a high-trust, high-consideration purchase. A prospect who clicks a paid ad and lands on a page that feels generic or digitally thin will leave in seconds. Every page element had to signal legitimacy before it asked for anything.',
    ],
    approach: [
      'The core design constraint: this is not a SaaS landing page. There are no freemium tiers, no "start for free" CTAs, no social proof from faceless users. Trust signals in financial services are specific: regulatory mentions, named principals, precise language about what the service is and is not.',
      'I reviewed three competitor sites and identified a consistent failure mode: they tried to look prestigious by being vague. "Bespoke financial solutions for discerning clients." Schreiber & Co\'s brief pushed in the opposite direction — concrete about who they serve (business owners, €2M–€50M in investable assets), concrete about what they do, concrete about what happens after you book a call.',
    ],
    solution: [
      'Single-page Next.js site: hero with a direct value statement and a Calendly-integrated "Book a call" CTA, a four-section explanation of the service structure, a brief "who we work with" qualification section (intentionally filtering out unqualified prospects), and a footer with regulatory disclosures.',
      'The Calendly integration uses their API to show available slots inline rather than opening a new tab — a meaningful conversion improvement since it removes a navigation step. The form for the pre-call questionnaire runs on Formspree with server-side form handling.',
      'Design is deliberately quiet: near-black on white, one accent color (deep navy), no stock photography, no illustration. The typography and whitespace are doing the work of signaling quality.',
    ],
    results: [
      '40 qualified leads — booked discovery calls from people in the target profile — in the first 60 days of the campaign running. Conversion rate of 4.2% on paid search traffic, which the client\'s media buyer confirmed was significantly above benchmark for financial services.',
      'More importantly: almost no unqualified inquiries. The "who we work with" section and the Calendly questionnaire functioned as a pre-qualification layer, which saved the team from spending time on calls that weren\'t going anywhere.',
    ],
    reflection: [
      'My first version of this site had more sections — a "how we work" timeline, an FAQ accordion, a testimonial block. The client pushed back: "our prospective clients are busy. They\'ll read three things and either book a call or not." They were right. Cutting two sections and simplifying the CTA flow improved conversion.',
      'In financial services, less is credibility. Every extra element is an opportunity for something to feel wrong. The discipline of not adding things is harder than adding them.',
    ],
    hoverTint: '#F6F3EC',
    theme: {
      pageBg: '#0C0B09',
      accent: '#D4AF37',
      text:   '#F0EBD8',
      muted:  '#9C9080',
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null
  next: Project | null
} {
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
