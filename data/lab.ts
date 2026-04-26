export interface LabEntry {
  slug: string
  title: string
  date: string
  category: 'Essay' | 'Experiment' | 'Note' | 'Tool'
  summary: string
  content: string[]
  tags: string[]
}

export const labEntries: LabEntry[] = [
  {
    slug: 'on-automation-literacy',
    title: 'On Automation Literacy',
    date: '2024-11-12',
    category: 'Essay',
    summary: 'Most "no-code" automation tools are not actually no-code. They are low-code tools with a polished UI — which is fine, but requires a certain kind of thinking that is not as universal as the marketing suggests.',
    tags: ['automation', 'n8n', 'thinking'],
    content: [
      'The pitch for tools like n8n, Make, and Zapier is that anyone can automate their workflows without writing code. This is mostly true in the same way that anyone can drive a car without knowing how an internal combustion engine works. The abstraction is real and useful.',
      'What gets underplayed: automation still requires systems thinking. You need to be able to model a process as a directed graph — this input flows into this transformation, which produces this output, which triggers this next step. You need to handle edge cases (what happens when the webhook fails? when the API returns a 429?). You need to think about idempotency.',
      "None of that is 'code' in the traditional sense, but it is a specific cognitive skill that not everyone has developed. The tools lower the implementation barrier significantly. They don't lower the design barrier.",
      'I think the practical implication is this: automation literacy is most valuable in hybrid roles — people who understand both the business process and have enough technical intuition to model it precisely. Pure operators often see the automation as a black box. Pure engineers often over-engineer it. The person in the middle is who actually ships working automations that other people maintain.',
    ],
  },
  {
    slug: 'typography-as-infrastructure',
    title: 'Typography as Infrastructure',
    date: '2024-09-03',
    category: 'Note',
    summary: 'A typographic system is not decoration. It is the primary structural decision in any web project. Getting it right early saves more time than almost any other upfront investment.',
    tags: ['typography', 'design', 'process'],
    content: [
      "When I start a web project, I set the type scale before I design anything else. Not because it's philosophically important, but because every layout decision flows from it. Column widths, spacing units, grid gutters — they all derive from the base type size and line height.",
      "The rule I follow: set a 16px base, a 1.5 line height for body text, and a modular scale (I use 1.25 — the 'major third') for heading sizes. Then test it with real content. Headers at 3rem look different with nine words than with two. Body text at 1rem looks different in a 45-character column than a 75-character column.",
      "The other thing: fonts load. This is a performance problem with a precise solution — `next/font` with `size-adjust` fallback metrics, or preloading a subset. Zero CLS on fonts is achievable without compromise. There's no reason for text to jump on load in 2024.",
      'A project where the typography is working correctly is a project where everything else is easier. A project where it\'s wrong — wrong scale, wrong line height, wrong pairing — will fight you on every layout decision until you go back and fix the foundation.',
    ],
  },
  {
    slug: 'the-right-abstraction',
    title: 'The Right Abstraction',
    date: '2024-07-18',
    category: 'Note',
    summary: 'The best abstractions in software are not the most clever ones. They are the ones that match how the problem actually behaves.',
    tags: ['engineering', 'thinking', 'craft'],
    content: [
      'I spent an afternoon last week refactoring a data-fetching layer I had written two months earlier. The original version used a generic fetch wrapper with a lot of configuration options. The refactored version is a plain async function that does one thing.',
      'The generic wrapper was not wrong. But it was abstract in the wrong direction — optimized for hypothetical flexibility rather than the actual usage pattern, which turned out to be consistent across every call site. The abstraction added cognitive load without removing any.',
      "The question I now ask before introducing any abstraction: what two things am I collapsing? If I can't name them precisely, the abstraction is probably premature. If I can, it's almost always worth it.",
      'Three similar lines of code is better than a premature abstraction. This is a real rule, not a platitude — I\'ve spent hours debugging "smart" helpers that collapsed distinctions the code needed.',
    ],
  },
  {
    slug: 'constraints-as-design-tools',
    title: 'Constraints as Design Tools',
    date: '2024-05-22',
    category: 'Essay',
    summary: 'Constraints are not obstacles to good work. They are usually the reason good work gets done. The question is whether you are working with the right constraints.',
    tags: ['design', 'process', 'thinking'],
    content: [
      "Most of my best project work came from constraints I didn't choose. The client who had no budget for images forced a typographic solution that ended up being the most distinctive part of the design. The automation project with a read-only API forced a workaround that turned out to be more robust than direct write access would have been.",
      'I\'ve started to deliberately impose constraints on projects where none exist. "Build this without JavaScript." "Make it work without custom fonts." "The entire value proposition has to fit in two sentences." These are arbitrary restrictions, but they compress the solution space into a smaller, more tractable problem.',
      "The constraint that matters most: time. A solution that could be shipped tomorrow beats a more elegant solution that requires another week. This isn't laziness — it's an acknowledgment that software exists to serve a goal, and the goal rarely waits for perfection.",
      "The best designers and engineers I've worked with are unusually good at identifying which constraints are load-bearing and which are negotiable. Everything else flows from that judgment.",
    ],
  },
]

export function getLabEntry(slug: string): LabEntry | undefined {
  return labEntries.find((e) => e.slug === slug)
}
