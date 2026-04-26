import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'

const principles = [
  {
    number: '01',
    heading: 'Start with the decision, not the data.',
    body: 'Before building anything — a feature, a workflow, a page — I ask: what decision does this enable? Vague requirements produce expensive solutions to the wrong problem.',
  },
  {
    number: '02',
    heading: 'The constraint is usually the design.',
    body: 'Budget ceilings, time pressure, read-only APIs, a client who can\'t code — the constraints are not obstacles. They compress the solution space into something tractable. Work with them.',
  },
  {
    number: '03',
    heading: 'Ship, then improve.',
    body: 'A working solution in production beats a perfect solution in a Figma file. I build to the point of real use, learn from it, and iterate. Version two is always better than the over-engineered version one.',
  },
]

export function ProcessSection() {
  return (
    <section className="section-padding border-t border-border" aria-labelledby="process-heading">
      <Container>
        <div className="mb-12">
          <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-2">
            How I work
          </p>
          <h2 id="process-heading" className="font-display italic text-3xl tracking-[-0.02em]">
            Three principles
          </h2>
        </div>

        <ol className="list-none m-0 p-0 grid grid-cols-1 md:grid-cols-3 gap-px bg-border" role="list">
          {principles.map((p, i) => (
            <li key={p.number} className="bg-paper p-8">
              <FadeIn delay={i * 0.1}>
                <span className="font-mono text-xs text-muted block mb-6">{p.number}</span>
                <h3 className="font-display italic text-xl leading-[1.2] tracking-[-0.01em] text-ink mb-4">
                  {p.heading}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {p.body}
                </p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
