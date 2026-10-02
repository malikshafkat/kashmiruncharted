'use client'

import { motion } from 'motion/react'

export default function DestinationChapter({
  name,
  tagline,
  story,
  images,
  reverse = false,
  speed = 60, // seconds for one full loop
}) {
  // Duplicate the images so the loop is seamless
  const loopImages = [...images, ...images]

  return (
    <section className="relative w-full overflow-hidden">
      {/* Auto-scrolling image strip */}
      <div className="absolute inset-0">
        <div
          className="flex h-full"
          style={{
            width: `${loopImages.length * 40}vw`,
            animation: `scroll-${reverse ? 'right' : 'left'} ${speed}s linear infinite`,
          }}
        >
          {loopImages.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0"
              style={{
                width: '40vw',
                height: '100%',
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#1e293b',
              }}
            />
          ))}
        </div>

        {/* Darkening overlay for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.7) 100%)',
          }}
        />
      </div>

      {/* Text overlay — sits above the moving images */}
      <div className="relative max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className={`max-w-xl ${reverse ? 'ml-auto text-right' : ''}`}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/70 text-sm uppercase tracking-[0.3em] mb-4"
          >
            {tagline}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-6xl md:text-8xl text-white leading-none mb-8"
          >
            <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105 cursor-default">
              {name}
            </span>
          </motion.h2>

          <div className="space-y-4 max-w-lg">
            {story.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-white/90 text-lg md:text-xl leading-relaxed transition-colors duration-300 hover:text-[#f5c9a0]"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}