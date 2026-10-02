'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/cabs', label: 'Cabs' },
  { href: '/packages', label: 'Packages' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const infoRef = useRef(null)

  useEffect(() => {
    setMenuOpen(false)
    setInfoOpen(false)
  }, [pathname])

  useEffect(() => {
    function onClick(e) {
      if (infoRef.current && !infoRef.current.contains(e.target)) {
        setInfoOpen(false)
      }
    }
    function onKey(e) {
      if (e.key === 'Escape') setInfoOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 bg-white"
      style={{ borderBottom: '1px solid var(--muted)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo — placeholder for now, swap for <img src="/logo.png" /> later */}
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          aria-label="Kashmir Uncharted home"
        >
          <span className="font-heading text-xl md:text-2xl font-semibold tracking-tight">
            Kashmir <span style={{ color: 'var(--saffron)' }}>Uncharted</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:opacity-70"
                style={{
                  color: active ? 'var(--pine)' : 'var(--text)',
                  fontWeight: active ? 600 : 400,
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Info button */}
          <div className="relative" ref={infoRef}>
            <button
              onClick={() => setInfoOpen((v) => !v)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105"
              style={{ background: 'var(--pine)' }}
              aria-label="Contact information"
            >
              <span className="font-heading italic text-base">i</span>
            </button>

            {infoOpen && (
              <div
                className="absolute right-0 mt-3 w-72 rounded-xl shadow-2xl bg-white p-5 z-50"
                style={{ border: '1px solid var(--muted)' }}
              >
                <div className="font-heading text-lg mb-4">Get in touch</div>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="opacity-60">📞</span>
                    <div>
                      <div className="opacity-60 text-xs uppercase tracking-wider mb-0.5">Phone</div>
                      <a href="tel:+91XXXXXXXXXX" className="hover:opacity-70">+91 XXXXX XXXXX</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="opacity-60">💬</span>
                    <div>
                      <div className="opacity-60 text-xs uppercase tracking-wider mb-0.5">WhatsApp</div>
                      <a
                        href="https://wa.me/91XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70"
                      >
                        Chat with us
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="opacity-60">✉️</span>
                    <div>
                      <div className="opacity-60 text-xs uppercase tracking-wider mb-0.5">Email</div>
                      <a href="mailto:hello@kashmiruncharted.com" className="hover:opacity-70">
                        hello@kashmiruncharted.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="opacity-60">📍</span>
                    <div>
                      <div className="opacity-60 text-xs uppercase tracking-wider mb-0.5">Location</div>
                      <div>Srinagar, Jammu & Kashmir</div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5" style={{ background: 'var(--text)' }} />
            <span className="block w-6 h-0.5" style={{ background: 'var(--text)' }} />
            <span className="block w-6 h-0.5" style={{ background: 'var(--text)' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: 'var(--muted)', background: 'white' }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base"
                  style={{
                    color: active ? 'var(--pine)' : 'var(--text)',
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}