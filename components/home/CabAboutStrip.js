'use client'

import { motion } from 'motion/react'

const features = [
  'Airport pickups',
  'Gulmarg & Pahalgam transfers',
  'Professional local drivers',
  'Fixed, transparent fares',
  '24/7 availability',
  'Clean, insured vehicles',
]

export default function CabAboutStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-white rounded-xl p-8 md:p-10 relative overflow-hidden"
      style={{ border: '1px solid var(--muted)' }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex-1">
          <h3 className="font-heading text-2xl md:text-3xl mb-6">
            Kashmir Uncharted&apos;s Cabs
          </h3>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 opacity-80">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--pine)' }}
                />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Car image — replace with a real photo later at /assets/cabs/car.jpg */}
        <div className="w-full md:w-72 h-40 relative flex-shrink-0 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-lg flex items-center justify-center text-6xl"
            style={{ background: '#f5f3ee' }}
          >
            🚗
          </div>
        </div>
      </div>
    </motion.div>
  )
}