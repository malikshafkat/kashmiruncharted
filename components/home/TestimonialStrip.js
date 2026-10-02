'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

const testimonials = [
  {
    name: 'Sonam D.',
    origin: 'Sikkim',
    text: 'Mr. Anish made my experience better. He returned my wallet with all documents — I would have been in great trouble without his help. Such people make us believe kindness is still alive.',
  },
  {
    name: 'Sourav G.',
    origin: 'Kolkata',
    text: 'The booking process was simple, the cab arrived on time, the vehicle was clean, and the ride was smooth. The driver was courteous and professional. Felt safe throughout.',
  },
  {
    name: 'Shin T.',
    origin: 'Singapore',
    text: 'Luxury ride for a reasonable price. Instead of taking local taxis, opt for this. An amazing ride — AC, complimentary snacks, comfortable seats, same price.',
  },
]

export default function TestimonialStrip() {
  return (
    <section className="py-20" style={{ background: '#f5f3ee' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p
              className="text-xs uppercase tracking-[0.4em] mb-4"
              style={{ color: 'var(--pine)' }}
            >
              From our travellers
            </p>
            <h2 className="font-heading text-3xl md:text-5xl max-w-xl leading-tight">
              What they say after the trip.
            </h2>
          </div>
          <Link
            href="/reviews"
            className="text-sm underline underline-offset-4 hover:opacity-70"
          >
            Read all reviews →
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-7 rounded-2xl bg-white flex flex-col h-full"
              style={{ border: '1px solid var(--muted)' }}
            >
              <div className="flex gap-1 mb-5" style={{ color: 'var(--saffron)' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="text-sm leading-relaxed opacity-85 mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div
                className="pt-4 flex items-center gap-3"
                style={{ borderTop: '1px solid var(--muted)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-heading"
                  style={{ background: 'var(--pine)' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs opacity-60">{t.origin}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}