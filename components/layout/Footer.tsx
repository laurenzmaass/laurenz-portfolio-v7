import Link from 'next/link'
import { Container } from './Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="mt-auto border-t border-border">
      <Container>
        <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            © {year} Laurenz M. · Germany
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              <li>
                <a
                  href="https://github.com/laurenzmaass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted hover:text-ink transition-colors duration-150"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/laurenzmaass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted hover:text-ink transition-colors duration-150"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-mono text-xs text-muted hover:text-ink transition-colors duration-150"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
