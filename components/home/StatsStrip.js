'use client'

import { motion } from 'motion/react'

const stats = [
  { value: '10+', label: 'Years guiding travellers' },
  { value: '2,400+', label: 'Trips completed' },
  { value: '18,000+', label: 'Travellers hosted' },
  { value: '4.9', label: 'Average rating' },
]

export default function StatsStrip() {
  return (
    <section className="py-20 border-y" style={{ borderColor: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-xs uppercase tracking-[0.4em] mb-16"
          style={{ color: 'var(--pine)' }}
        >
          Our numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <div
                className="font-heading text-4xl md:text-6xl mb-3"
                style={{ color: 'var(--pine)' }}
              >
                {s.value}
              </div>
              <div className="text-sm opacity-65 max-w-[200px] mx-auto">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}