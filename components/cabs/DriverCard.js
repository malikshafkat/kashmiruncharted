'use client'

import { motion } from 'motion/react'

export default function DriverCard({ driver }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="rounded-2xl bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg"
      style={{ border: '1px solid var(--muted)' }}
    >
      {/* Avatar */}
      <div
        className="h-44 flex items-center justify-center relative"
        style={{ background: 'linear-gradient(135deg, #f5f3ee 0%, #e8e4dc 100%)' }}
      >
        {driver.photo ? (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${driver.photo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ) : (
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-heading"
            style={{ background: 'var(--pine)', color: 'white' }}
          >
            {driver.name.charAt(0)}
          </div>
        )}

        {/* Availability pill */}
        <div
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5"
          style={{
            background: driver.available ? 'rgba(30, 77, 58, 0.95)' : 'rgba(0,0,0,0.55)',
            color: 'white',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: driver.available ? '#7ed957' : '#ffd166' }}
          />
          {driver.available ? 'Available' : 'On trip'}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="font-heading text-lg mb-1">{driver.name}</div>
        <div className="text-xs opacity-60 mb-3">{driver.years} years driving</div>

        {/* Languages */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {driver.languages.map((lang) => (
            <span
              key={lang}
              className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(30, 77, 58, 0.08)', color: 'var(--pine)' }}
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Vehicle */}
        <div
          className="pt-4 text-xs opacity-70"
          style={{ borderTop: '1px solid var(--muted)' }}
        >
          <div className="flex items-center gap-2">
            <span>🚗</span>
            <span>{driver.vehicle}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}