import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: 'var(--muted)', background: '#f5f3ee' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-heading text-2xl font-semibold mb-4">
              Kashmir <span style={{ color: 'var(--saffron)' }}>Uncharted</span>
            </div>
            <p className="opacity-70 max-w-sm leading-relaxed mb-6">
              Curated tours across Kashmir — airport pickup, trusted stays, licensed guides,
              and honest pricing. No scams, no surprises.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-xs hover:bg-white transition"
                  style={{ borderColor: 'var(--muted)' }}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/packages" className="hover:opacity-70">Tour packages</Link></li>
              <li><Link href="/custom" className="hover:opacity-70">Custom trips</Link></li>
              <li><Link href="/about" className="hover:opacity-70">About us</Link></li>
              <li><Link href="/reviews" className="hover:opacity-70">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Get in touch</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>📞 +91 XXXXX XXXXX</li>
              <li>✉️ hello@kashmiruncharted.com</li>
              <li>📍 Srinagar, Jammu & Kashmir</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between gap-4 text-xs opacity-60"
          style={{ borderColor: 'var(--muted)' }}
        >
          <div>© {new Date().getFullYear()} Kashmir Uncharted. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:opacity-80">FAQ</Link>
            <Link href="/contact" className="hover:opacity-80">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}