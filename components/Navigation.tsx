'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '/', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{
        background: 'color-mix(in srgb, var(--color-page-bg) 92%, transparent)',
        borderBottom: '1px solid var(--color-line)',
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-base font-semibold text-primary hover:text-accent transition-colors"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            mwadime<span className="text-accent">.</span>
          </Link>

          <div className="flex items-center gap-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors hover:text-accent ${
                  pathname === href ? 'text-accent font-medium' : 'text-secondary'
                }`}
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}