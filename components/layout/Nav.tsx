'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/lab', label: 'Lab' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-[20] mix-blend-multiply"
    >
      <div className="flex items-center justify-between px-5 md:px-10 py-5">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-base italic text-ink leading-none tracking-[-0.01em] hover:text-accent transition-colors duration-150"
          aria-label="Laurenz M. — home"
        >
          Laurenz M.
        </Link>

        {/* Nav links */}
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6 md:gap-8 list-none m-0 p-0">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'font-sans text-sm font-light tracking-wide transition-colors duration-150',
                      active
                        ? 'text-ink font-medium'
                        : 'text-muted hover:text-ink'
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
