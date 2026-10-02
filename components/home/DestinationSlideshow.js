'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const slides = [
  {
    name: 'Gulmarg',
    lines: [
      'A meadow at 2,650 metres.',
      'In winter, it disappears under eight feet of snow — a silent white world where only skiers and the gondola move.',
      'In summer, it comes alive. Wildflowers, ponies, the smell of pine.',
      "The gondola takes you higher than you've ever been. Up there, the air thins and the noise of the world fades.",
    ],
    image: '/destinations/gulmarg/gulmarg1.jpg',
  },
  {
    name: 'Pahalgam',
    lines: [
      'A valley where the Lidder runs cold and clear.',
      'Pine forests climb the slopes. Horses graze by the water.',
      'This is where the city softens, where the noise quiets, where you finally hear yourself think.',
    ],
    image: '/destinations/pahalgam/pahalgam1.jpg',
  },
  {
    name: 'Sonmarg',
    lines: [
      '"Meadow of gold."',
      'The name comes from the wildflowers that turn the slopes yellow in spring.',
      'Beyond it, the Thajiwas Glacier sits like a white cathedral, unreachable and impossibly still.',
      'Bring a jacket. Bring nothing else.',
    ],
    image: '/destinations/sonmarg/sonmarg1.jpg',
  },
  {
    name: 'Dal Lake',
    lines: [
      'A lake that has no bottom, they say.',
      "Houseboats that haven't moved in a hundred years. Shikaras gliding past at dawn, carrying flowers and bread and silence.",
      'In the evening, the mountains fold into the water and disappear.',
      "You'll want to stay longer. Everyone does.",
    ],
    image: '/destinations/dallake/dallake1.jpg',
  },
]

const SLIDE_DURATION = 11000

export default function DestinationSlideshow() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!playing) return
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearTimeout(timeoutRef.current)
  }, [index, playing])

  function goTo(i) {
    setIndex((i + slides.length) % slides.length)
  }

  function next() {
    goTo(index + 1)
  }

  function prev() {
    goTo(index - 1)
  }

  const current = slides[index]

  return (
    <section className="relative">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
        <p
          className="text-xs uppercase tracking-[0.4em] mb-4"
          style={{ color: 'var(--pine)' }}
        >
          Where we take you
        </p>
        <h2 className="font-heading text-4xl md:text-5xl leading-tight max-w-2xl mx-auto">
          Four places that stay with you.
        </h2>
      </div>

      {/* Slideshow */}
      <div className="relative w-full h-[85vh] min-h-[640px] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: SLIDE_DURATION / 1000 + 2, ease: 'linear' }}
              style={{
                backgroundImage: `url(${current.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#1e293b',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.8) 100%)',
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Text overlay */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-28 md:pb-36">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <h3 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-8">
                {current.name}
              </h3>
              <div className="space-y-3">
                {current.lines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.1,
                      delay: 0.4 + i * 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-white/90 text-base md:text-xl leading-relaxed"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 z-20"
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)' }}
        >
          ←
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 z-20"
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)' }}
        >
          →
        </button>

        {/* Pause/Play */}
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Pause' : 'Play'}
          className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 z-20"
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)' }}
        >
          {playing ? (
            <span className="flex gap-1">
              <span className="w-1 h-4 bg-white rounded-sm" />
              <span className="w-1 h-4 bg-white rounded-sm" />
            </span>
          ) : (
            <span
              className="w-0 h-0"
              style={{
                borderLeft: '10px solid white',
                borderTop: '7px solid transparent',
                borderBottom: '7px solid transparent',
                marginLeft: '3px',
              }}
            />
          )}
        </button>

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((s, i) => (
            <button
              key={s.name}
              onClick={() => goTo(i)}
              aria-label={`Go to ${s.name}`}
              className="rounded-full transition-all duration-500"
              style={{
                width: i === index ? '32px' : '10px',
                height: '10px',
                background: i === index ? 'white' : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}