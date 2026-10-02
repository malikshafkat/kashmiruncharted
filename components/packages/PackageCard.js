'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

export default function PackageCard({ pkg }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group rounded-2xl overflow-hidden bg-white h-full flex flex-col transition-shadow duration-500 hover:shadow-xl"
      style={{ border: '1px solid var(--muted)' }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${pkg.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#334155',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5) 100%)',
          }}
        />

        {pkg.featured && (
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: 'var(--saffron)' }}
          >
            Most booked
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="text-xs uppercase tracking-wider opacity-80 mb-1">
            {pkg.duration}
          </div>
          <div className="text-sm opacity-90">{pkg.destinations}</div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-2xl leading-tight mb-3">
          {pkg.title}
        </h3>

        <p className="text-sm opacity-70 leading-relaxed mb-5">
          {pkg.summary}
        </p>

        <ul className="space-y-2 text-sm mb-6">
          {pkg.includes.slice(0, 4).map((item) => (
            <li key={item} className="flex items-start gap-2 opacity-80">
              <span style={{ color: 'var(--pine)' }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
          {pkg.includes.length > 4 && (
            <li className="text-xs opacity-50 pl-5">
              +{pkg.includes.length - 4} more
            </li>
          )}
        </ul>

        {/* Footer: price + CTA */}
        <div
          className="mt-auto pt-5 flex items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--muted)' }}
        >
          <div>
            <div className="text-xs uppercase tracking-wider opacity-50 mb-1">
              From
            </div>
            <div className="font-heading text-xl">
              ₹{pkg.price.toLocaleString('en-IN')}
              <span className="text-sm opacity-60 font-body"> /person</span>
            </div>
          </div>

          <Link
            href={`/packages/${pkg.id}`}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white transition-transform hover:scale-105 whitespace-nowrap"
            style={{ background: 'var(--pine)' }}
          >
            View details
          </Link>
        </div>
      </div>
    </motion.div>
  )
}