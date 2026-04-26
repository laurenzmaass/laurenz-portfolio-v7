import Link from 'next/link'
import { Container } from '@/components/layout/Container'

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-start justify-end pb-16 pt-32">
      <Container>
        <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-8">
          404 · Page not found
        </p>
        <h1 className="font-display italic text-[clamp(6rem,20vw,14rem)] leading-[0.85] tracking-[-0.04em] text-ink/10 mb-8 select-none" aria-hidden="true">
          404
        </h1>
        <div className="border-t border-border pt-8 max-w-lg">
          <h2 className="font-display italic text-2xl mb-3">Nothing here.</h2>
          <p className="font-sans text-sm text-muted mb-8 leading-relaxed">
            The page you&#39;re looking for doesn&#39;t exist or has moved. Head back to somewhere real.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="font-sans text-sm font-medium text-ink border border-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-colors duration-200"
            >
              Go home
            </Link>
            <Link
              href="/work"
              className="font-sans text-sm text-muted hover:text-ink transition-colors duration-150 py-2.5"
            >
              View work →
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
