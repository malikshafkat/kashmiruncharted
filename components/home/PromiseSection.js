'use client'

import { motion } from 'motion/react'

const values = [
  {
    icon: '🤝',
    label: 'Best service',
    text: 'Vetted guides, honest pricing, no surprises.',
  },
  {
    icon: '🔒',
    label: 'Privacy',
    text: 'Your details stay with us. No spam, no sharing.',
  },
  {
    icon: '⏳',
    label: 'Quality time',
    text: 'Small groups, unhurried itineraries.',
  },
  {
    icon: '🛡️',
    label: 'Safety',
    text: 'Registered operators, insured vehicles.',
  },
  {
    icon: '🚨',
    label: 'Security',
    text: '24/7 on-trip support, trusted partners only.',
  },
]

export default function PromiseSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4"
            style={{ color: 'var(--pine)' }}
          >
            Our promise to you
          </p>
          <div
            className="h-px w-16"
            style={{ background: 'var(--pine)', opacity: 0.4 }}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative text-center rounded-2xl bg-white px-5 py-8 transition-shadow duration-500"
              style={{
                border: '1px solid var(--muted)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(30, 77, 58, 0.18)'
                e.currentTarget.style.borderColor = 'rgba(30, 77, 58, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.03)'
                e.currentTarget.style.borderColor = 'var(--muted)'
              }}
            >
              {/* Icon plate */}
              <motion.div
                className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center text-2xl"
                style={{
                  background: 'rgba(30, 77, 58, 0.06)',
                }}
                whileHover={{ scale: 1.12, rotate: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {v.icon}
              </motion.div>

              {/* Label */}
              <div
                className="font-heading text-lg mb-3"
                style={{ color: 'var(--text)' }}
              >
                {v.label}
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed opacity-70">
                {v.text}
              </p>

              {/* Accent bar on hover */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: 32, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] rounded-full"
                style={{ background: 'var(--pine)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}