import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'
import { Tag } from '@/components/ui/Tag'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Digital product builder based in Germany — bridging frontend development and workflow automation.',
}

const tools = [
  'Next.js', 'React', 'TypeScript', 'HTML/CSS', 'JavaScript',
  'n8n', 'Airtable', 'Notion API', 'Zapier',
  'Figma', 'GSAP', 'Framer Motion',
  'Vercel', 'Netlify', 'Git',
]

export default function AboutPage() {
  return (
    <div className="pt-32">
      <Container>
        <FadeIn>
          <div className="mb-16 pb-12 border-b border-border">
            <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
              About
            </p>
            <h1 className="font-display italic text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em]">
              The hybrid.
            </h1>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 pb-section">
          {/* Main narrative */}
          <div>
            <FadeIn>
              <div className="mb-12">
                <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
                  Background
                </p>
                <div className="space-y-5">
                  <p className="font-sans text-lg font-light text-ink leading-relaxed">
                    I studied Digital Business in Germany, which means I came out understanding both why a product needs to exist and how to build it. That turned out to be a useful combination.
                  </p>
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    Most digital teams I&#39;ve worked with have a gap: the people who understand the business problem can&#39;t build the solution, and the people who can build don&#39;t always understand what would actually be useful. I operate in that gap.
                  </p>
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    On any given project, that might mean designing and building a marketing site, or automating a client&#39;s onboarding process, or figuring out why the existing automation keeps breaking on edge cases. The common thread is translating a real problem into a working solution.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mb-12">
                <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
                  What I actually do
                </p>
                <div className="space-y-5">
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    <strong className="font-medium text-ink">Frontend development.</strong> I build websites and web apps — custom Next.js builds, performance-optimized static sites, design implementations that do justice to the work they&#39;re representing. I write the HTML, CSS, and JavaScript. I do the Figma work when that&#39;s what&#39;s needed.
                  </p>
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    <strong className="font-medium text-ink">Workflow automation.</strong> I map, design, and build automated pipelines for operational processes — mostly using n8n, occasionally Make or Zapier when the scope calls for it. The typical engagement is a process that someone is doing manually on a recurring basis, where the manual work is expensive in time or error-prone.
                  </p>
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    <strong className="font-medium text-ink">Operations thinking.</strong> Sometimes the right deliverable isn&#39;t a website or a workflow — it&#39;s a clearer process, a better information architecture, a more honest scoping conversation. I don&#39;t always bring this up unprompted, but it&#39;s always part of how I think.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mb-12">
                <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
                  How I work
                </p>
                <div className="space-y-5">
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    I work best on projects where the scope is clear enough to estimate but open enough that the solution isn&#39;t predetermined. I prefer fewer, longer engagements over many short ones — partly because context accumulates, and the third week of a project is usually more valuable than the first.
                  </p>
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    I write clear documentation, keep stakeholders updated without requiring constant check-ins, and flag problems early rather than late. These aren&#39;t differentiators — they&#39;re baseline professional behavior. I mention them only because apparently they&#39;re not universal.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
                  Currently
                </p>
                <div className="space-y-5">
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    Deepening my React and TypeScript work. Exploring edge of what&#39;s possible with n8n&#39;s newer AI agent nodes. Reading a lot about information architecture and content strategy — adjacent skills that tend to produce better briefs.
                  </p>
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    Available for project work, fixed-scope contracts, and the occasional interesting problem that doesn&#39;t fit neatly into either.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <aside>
            <FadeIn delay={0.1}>
              {/* Skills prose */}
              <div className="bg-surface p-6 mb-6">
                <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
                  Tools &amp; technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>

              {/* Location / availability */}
              <div className="bg-surface p-6 mb-6">
                <dl className="space-y-4">
                  <div>
                    <dt className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-1">
                      Based in
                    </dt>
                    <dd className="font-sans text-sm text-ink">Germany</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-1">
                      Languages
                    </dt>
                    <dd className="font-sans text-sm text-ink">German · English</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-1">
                      Availability
                    </dt>
                    <dd className="font-sans text-sm text-ink">
                      Open to new projects {/* TODO: update this periodically */}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-1">
                      Response time
                    </dt>
                    <dd className="font-sans text-sm text-ink">24–48h</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="block w-full text-center bg-ink text-paper font-sans text-sm font-medium py-3.5 hover:bg-accent transition-colors duration-200"
              >
                Get in touch
              </Link>
            </FadeIn>
          </aside>
        </div>
      </Container>
    </div>
  )
}
