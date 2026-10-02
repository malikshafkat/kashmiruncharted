'use client'

import { useState, useEffect } from 'react'
import FadeUp from '@/components/motion/FadeUp'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [context, setContext] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const route = params.get('route')
    const pkg = params.get('package')
    const travellers = params.get('travellers')
    if (route) {
      setContext(`Cab enquiry: ${route}`)
      setForm((f) => ({
        ...f,
        message: `I'd like to book the cab route: ${route}.${travellers ? ` Travellers: ${travellers}.` : ''}`,
      }))
    } else if (pkg) {
      setContext(`Package enquiry: ${pkg}`)
      setForm((f) => ({
        ...f,
        message: `I'm interested in the package: ${pkg}. Please share more details.`,
      }))
    }
  }, [])

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: replace with real submission in Batch 4
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="text-6xl mb-6">✓</div>
        <h1 className="font-heading text-3xl md:text-4xl mb-4">
          Thanks, {form.name.split(' ')[0] || 'friend'}.
        </h1>
        <p className="opacity-70 text-lg mb-8">
          We&apos;ve received your message and will reply within 24 hours —
          usually much sooner. WhatsApp is the fastest way to reach us in the meantime.
        </p>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full text-sm font-medium text-white"
          style={{ background: '#25D366' }}
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <div>
      {/* Hero band */}
      <section className="py-16 border-b" style={{ borderColor: 'var(--muted)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p
              className="text-xs uppercase tracking-[0.4em] mb-4"
              style={{ color: 'var(--pine)' }}
            >
              Contact
            </p>
            <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4 max-w-3xl">
              Tell us about your trip.
            </h1>
            <p className="text-lg opacity-70 max-w-2xl">
              We reply to every enquiry personally. No bots, no call centers.
              Fastest reply is on WhatsApp.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="lg:col-span-2">
            <FadeUp>
              <h2 className="font-heading text-2xl mb-6">Get in touch</h2>

              <div className="space-y-6">
                <ContactRow
                  icon="💬"
                  label="WhatsApp"
                  value="+91 XXXXX XXXXX"
                  href="https://wa.me/91XXXXXXXXXX"
                  note="Fastest — usually a reply within an hour"
                />
                <ContactRow
                  icon="📞"
                  label="Phone"
                  value="+91 XXXXX XXXXX"
                  href="tel:+91XXXXXXXXXX"
                  note="Available 8am – 10pm IST"
                />
                <ContactRow
                  icon="✉️"
                  label="Email"
                  value="hello@kashmiruncharted.com"
                  href="mailto:hello@kashmiruncharted.com"
                  note="Replies within 24 hours"
                />
                <ContactRow
                  icon="📍"
                  label="Office"
                  value="Srinagar, Jammu & Kashmir"
                  note="Visits by appointment"
                />
              </div>

              <div
                className="mt-10 p-6 rounded-2xl"
                style={{ background: '#f5f3ee' }}
              >
                <div className="font-heading text-lg mb-2">Planning ahead?</div>
                <p className="text-sm opacity-70 leading-relaxed">
                  Peak season is April to October. For trips in May, June, and September,
                  book at least 3–4 weeks in advance. December is ski season in Gulmarg.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeUp>
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-white"
                style={{ border: '1px solid var(--muted)' }}
              >
                {context && (
                  <div
                    className="mb-6 p-4 rounded-lg text-sm"
                    style={{ background: 'rgba(30, 77, 58, 0.08)', color: 'var(--pine)' }}
                  >
                    {context}
                  </div>
                )}

                <h2 className="font-heading text-2xl mb-6">Send us a message</h2>

                <div className="space-y-5">
                  <Field
                    label="Your name"
                    value={form.name}
                    onChange={(v) => update('name', v)}
                    placeholder="e.g. Priya Sharma"
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(v) => update('email', v)}
                      placeholder="you@example.com"
                    />
                    <Field
                      label="Phone"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => update('phone', v)}
                      placeholder="+91 ..."
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold">
                      Your message
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us your dates, group size, and what you'd like to see..."
                      className="w-full px-4 py-3 rounded-lg bg-white text-base resize-none outline-none transition-colors"
                      style={{ border: '1px solid var(--muted)' }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                  style={{ background: 'var(--pine)' }}
                >
                  Send message
                </button>

                <p className="mt-4 text-xs opacity-60">
                  We&apos;ll never share your details. Promise.
                </p>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactRow({ icon, label, value, href, note }) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="flex items-start gap-4 group"
      style={{ cursor: href ? 'pointer' : 'default' }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center text-lg flex-shrink-0"
        style={{ background: 'rgba(30, 77, 58, 0.08)' }}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider opacity-50 mb-1">
          {label}
        </div>
        <div className="font-medium transition-colors group-hover:text-[color:var(--pine)]">
          {value}
        </div>
        {note && <div className="text-xs opacity-60 mt-1">{note}</div>}
      </div>
    </Wrapper>
  )
}

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-white text-base outline-none transition-colors"
        style={{ border: '1px solid var(--muted)' }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--pine)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--muted)')}
      />
    </div>
  )
}