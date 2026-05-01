'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-lg font-semibold text-primary hover:text-accent transition-colors"
          >
            Mwadime's
          </Link>
          
          <div className="flex gap-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors hover:text-accent ${
                  pathname === href 
                    ? 'text-accent font-medium' 
                    : 'text-secondary'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}