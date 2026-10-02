'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'motion/react'
import ThemedDropdown from '@/components/ui/ThemedDropdown'
import ThemedCalendar from '@/components/ui/ThemedCalendar'

const CITIES = [
  'Srinagar Airport (SXR)',
  'Srinagar City',
  'Gulmarg',
  'Pahalgam',
  'Sonmarg',
  'Doodhpathri',
  'Yusmarg',
]

export default function CabSearchBar() {
  const router = useRouter()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [travellers, setTravellers] = useState(2)

  function handleSearch(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (from) params.set('from', from)
    if (to) params.set('to', to)
    if (date) params.set('date', date)
    params.set('travellers', travellers)
    router.push(`/cabs?${params.toString()}`)
  }

  function swap() {
    setFrom(to)
    setTo(from)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {/* Tab */}
      <div className="flex">
        <div
          className="px-6 py-3 rounded-t-xl text-sm font-medium flex items-center gap-2 text-white"
          style={{ background: 'var(--pine)' }}
        >
          <span>🚕</span>
          <span>Cab services</span>
        </div>
      </div>

      {/* Card */}
      <div
        className="rounded-b-xl rounded-tr-xl bg-white shadow-2xl p-2"
        style={{ border: '1px solid var(--muted)' }}
      >
        <form onSubmit={handleSearch} className="relative flex flex-col lg:flex-row">
          {/* Swap button — sits on the divider between FROM and TO */}
          <button
            type="button"
            onClick={swap}
            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full items-center justify-center text-white text-sm z-30 transition-transform hover:scale-110"
            style={{
              background: 'var(--pine)',
              left: '21.5%',
              transform: 'translate(-50%, -50%)',
            }}
            aria-label="Swap From and To"
          >
            ⇄
          </button>

          {/* FROM */}
          <div
            className="flex-1 px-6 py-4 border-b lg:border-b-0 lg:border-r"
            style={{ borderColor: 'var(--muted)' }}
          >
            <ThemedDropdown
              label="From"
              value={from}
              onChange={setFrom}
              options={CITIES}
              placeholder="Select pickup"
              hint="Where should we pick you up?"
            />
          </div>

          {/* TO */}
          <div
            className="flex-1 px-10 py-4 border-b lg:border-b-0 lg:border-r"
            style={{ borderColor: 'var(--muted)' }}
          >
            <ThemedDropdown
              label="To"
              value={to}
              onChange={setTo}
              options={CITIES}
              placeholder="Select drop"
              hint="Your destination"
            />
          </div>

          {/* WHEN */}
          <div
            className="flex-1 px-6 py-4 border-b lg:border-b-0 lg:border-r"
            style={{ borderColor: 'var(--muted)' }}
          >
            <ThemedCalendar
              label="When"
              value={date}
              onChange={setDate}
              hint="Pickup date"
            />
          </div>

          {/* TRAVELLERS */}
          <div
            className="flex-1 px-6 py-4 border-b lg:border-b-0 lg:border-r"
            style={{ borderColor: 'var(--muted)' }}
          >
            <div className="text-[11px] uppercase tracking-wider opacity-50 mb-1">
              Travellers
            </div>
            <div className="flex items-center gap-3 mt-1">
              <button
                type="button"
                onClick={() => setTravellers((v) => Math.max(1, v - 1))}
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm"
                style={{ background: 'var(--pine)' }}
              >
                −
              </button>
              <span className="text-base w-6 text-center">{travellers}</span>
              <button
                type="button"
                onClick={() => setTravellers((v) => Math.min(20, v + 1))}
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm"
                style={{ background: 'var(--pine)' }}
              >
                +
              </button>
            </div>
            <div className="text-xs opacity-50 mt-1">Total passengers</div>
          </div>

          {/* SEARCH */}
          <div className="px-4 py-4 flex items-center">
            <button
              type="submit"
              className="px-8 py-4 rounded-full text-sm font-medium text-white transition-transform hover:scale-105 whitespace-nowrap"
              style={{ background: 'var(--pine)' }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}