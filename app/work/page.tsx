import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'
import { WorkList } from '@/components/work/WorkList'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies in frontend development, automation, and digital product work.',
}

export default function WorkPage() {
  return (
    <div className="pt-32">
      <Container>
        <FadeIn>
          <div className="mb-12 pb-10 border-b border-border">
            <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
              Case studies
            </p>
            <div className="flex items-baseline justify-between">
              <h1 className="font-display italic text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em]">
                Work
              </h1>
              <span className="font-mono text-xs text-muted">
                {projects.length} projects
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <WorkList projects={projects} />
        </FadeIn>

        <div className="section-padding" />
      </Container>
    </div>
  )
}
