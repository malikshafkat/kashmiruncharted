'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import FadeUp from '@/components/motion/FadeUp'
import DriverCard from '@/components/cabs/DriverCard'

const SHARED_ROUTES = [
  { id: 'sxr-gulmarg', from: 'Srinagar Airport (SXR)', to: 'Gulmarg', distance: '56 km', duration: '1h 45m', price: 1200, departures: ['08:00', '11:00', '14:00'], seats: 4 },
  { id: 'sxr-pahalgam', from: 'Srinagar Airport (SXR)', to: 'Pahalgam', distance: '95 km', duration: '2h 30m', price: 1500, departures: ['09:00', '13:00'], seats: 4 },
  { id: 'sxr-sonmarg', from: 'Srinagar Airport (SXR)', to: 'Sonmarg', distance: '85 km', duration: '2h 30m', price: 1400, departures: ['08:30', '12:00'], seats: 4 },
  { id: 'srinagar-gulmarg', from: 'Srinagar City', to: 'Gulmarg', distance: '50 km', duration: '1h 30m', price: 900, departures: ['07:30', '10:30', '15:00'], seats: 4 },
  { id: 'srinagar-pahalgam', from: 'Srinagar City', to: 'Pahalgam', distance: '90 km', duration: '2h 15m', price: 1100, departures: ['08:00', '13:30'], seats: 4 },
  { id: 'srinagar-sonmarg', from: 'Srinagar City', to: 'Sonmarg', distance: '80 km', duration: '2h 15m', price: 1000, departures: ['07:00', '11:30'], seats: 4 },
]

const RESERVED_ROUTES = [
  { id: 'sxr-gulmarg', from: 'Srinagar Airport (SXR)', to: 'Gulmarg', distance: '56 km', duration: '1h 45m', price: 3800, vehicle: 'Sedan (up to 4)' },
  { id: 'sxr-pahalgam', from: 'Srinagar Airport (SXR)', to: 'Pahalgam', distance: '95 km', duration: '2h 30m', price: 4500, vehicle: 'Sedan (up to 4)' },
  { id: 'sxr-sonmarg', from: 'Srinagar Airport (SXR)', to: 'Sonmarg', distance: '85 km', duration: '2h 30m', price: 4200, vehicle: 'Sedan (up to 4)' },
  { id: 'sxr-city', from: 'Srinagar Airport (SXR)', to: 'Srinagar City', distance: '14 km', duration: '30 min', price: 1200, vehicle: 'Sedan (up to 4)' },
  { id: 'srinagar-gulmarg', from: 'Srinagar City', to: 'Gulmarg', distance: '50 km', duration: '1h 30m', price: 3200, vehicle: 'Sedan (up to 4)' },
  { id: 'srinagar-pahalgam', from: 'Srinagar City', to: 'Pahalgam', distance: '90 km', duration: '2h 15m', price: 4000, vehicle: 'Sedan (up to 4)' },
  { id: 'srinagar-sonmarg', from: 'Srinagar City', to: 'Sonmarg', distance: '80 km', duration: '2h 15m', price: 3800, vehicle: 'Sedan (up to 4)' },
  { id: 'srinagar-doodhpathri', from: 'Srinagar City', to: 'Doodhpathri', distance: '42 km', duration: '1h 30m', price: 3000, vehicle: 'Sedan (up to 4)' },
]

// Placeholder drivers — will be replaced by real drivers with availability toggles once the database is up
const DRIVERS = [
  { id: 'd1', name: 'Imtiyaz Ahmad', years: 12, languages: ['Kashmiri', 'Hindi', 'English'], vehicle: 'Toyota Innova · JK01-AB-1234', available: true },
  { id: 'd2', name: 'Bashir Khan', years: 8, languages: ['Kashmiri', 'Hindi'], vehicle: 'Maruti Ertiga · JK01-CD-5678', available: true },
  { id: 'd3', name: 'Nazir Wani', years: 15, languages: ['Kashmiri', 'Hindi', 'English'], vehicle: 'Toyota Innova Crysta · JK01-EF-9012', available: true },
  { id: 'd4', name: 'Sajad Mir', years: 6, languages: ['Kashmiri', 'Hindi', 'English'], vehicle: 'Hyundai Aura · JK01-GH-3456', available: false },
]

const CITIES = ['Srinagar Airport (SXR)', 'Srinagar City', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Doodhpathri', 'Yusmarg']

export default function CabsPage() {
  const [tab, setTab] = useState('shared')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [travellers, setTravellers] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setFrom(params.get('from') || '')
    setTo(params.get('to') || '')
    setTravellers(params.get('travellers') || '')
  }, [])

  const routes = tab === 'shared' ? SHARED_ROUTES : RESERVED_ROUTES

  const filtered = routes.filter((r) => {
    if (from && r.from !== from) return false
    if (to && r.to !== to) return false
    return true
  })

  const availableDrivers = DRIVERS.filter((d) => d.available)

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
              🚕 Cab services
            </p>
            <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4 max-w-3xl">
              Reliable cabs across Kashmir.
            </h1>
            <p className="text-lg opacity-70 max-w-2xl">
              Shared rides at fixed fares, or reserve a private cab for your group.
              Vetted drivers, insured vehicles, no surprises.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Tabs + routes */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab switcher */}
          <FadeUp>
            <div
              className="inline-flex rounded-full p-1 mb-10"
              style={{ background: '#f5f3ee', border: '1px solid var(--muted)' }}
            >
              <button
                onClick={() => setTab('shared')}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all"
                style={{
                  background: tab === 'shared' ? 'var(--pine)' : 'transparent',
                  color: tab === 'shared' ? 'white' : 'var(--text)',
                }}
              >
                👥 Shared cabs
              </button>
              <button
                onClick={() => setTab('reserved')}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all"
                style={{
                  background: tab === 'reserved' ? 'var(--pine)' : 'transparent',
                  color: tab === 'reserved' ? 'white' : 'var(--text)',
                }}
              >
                🚗 Reserved cabs
              </button>
            </div>
          </FadeUp>

          {/* Tab description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-base opacity-70 mb-10 max-w-2xl"
            >
              {tab === 'shared'
                ? 'Fixed routes, fixed departure times. Share the ride with other travellers and split the fare. Perfect for solo travellers and small groups.'
                : 'A private car just for your group. Any route, any time, door to door. Flexible itineraries and premium comfort.'}
            </motion.p>
          </AnimatePresence>

          {/* Results count */}
          <FadeUp>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-sm opacity-60">
                {filtered.length} {filtered.length === 1 ? 'route' : 'routes'}
                {from || to ? ' match your search' : ''}
              </span>
              {(from || to) && (
                <button
                  onClick={() => {
                    setFrom('')
                    setTo('')
                    window.history.replaceState({}, '', '/cabs')
                  }}
                  className="text-sm underline opacity-70 hover:opacity-100"
                >
                  Clear filters
                </button>
              )}
            </div>
          </FadeUp>

          {/* Routes */}
          <div className="grid gap-4 mb-20">
            {filtered.map((route, i) => (
              <FadeUp key={route.id} delay={i * 0.05}>
                <RouteCard
                  route={route}
                  mode={tab}
                  travellers={travellers}
                />
              </FadeUp>
            ))}

            {filtered.length === 0 && (
              <div
                className="rounded-2xl p-12 text-center"
                style={{ background: '#f5f3ee' }}
              >
                <p className="font-heading text-2xl mb-3">No routes match</p>
                <p className="opacity-70 mb-6">
                  We can still arrange a custom pickup. Just tell us where.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white"
                  style={{ background: 'var(--pine)' }}
                >
                  Contact us
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Meet our drivers */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--muted)', background: '#faf8f3' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p
                  className="text-xs uppercase tracking-[0.4em] mb-4"
                  style={{ color: 'var(--pine)' }}
                >
                  Meet our drivers
                </p>
                <h2 className="font-heading text-3xl md:text-5xl max-w-xl leading-tight">
                  The people behind the wheel.
                </h2>
              </div>
              <div className="text-sm opacity-70">
                {availableDrivers.length} of {DRIVERS.length} drivers available now
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {DRIVERS.map((driver, i) => (
              <FadeUp key={driver.id} delay={i * 0.06}>
                <DriverCard driver={driver} />
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <p className="text-sm opacity-60 mt-8 max-w-2xl">
              Availability updates in real time. When you book a route, we assign the
              driver best suited to your timing and group size.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🛡️', title: 'Insured, clean vehicles', text: 'Every cab is registered and maintained. AC, seat belts, and luggage space guaranteed.' },
                { icon: '👨‍✈️', title: 'Licensed local drivers', text: 'Our drivers know the roads, the weather, and the shortcuts. Most speak Kashmiri, Hindi, and English.' },
                { icon: '💬', title: 'No hidden charges', text: 'What you see is what you pay. Toll, parking, and driver meals included in the quoted price.' },
              ].map((item) => (
                <div key={item.title}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-heading text-xl mb-2">{item.title}</div>
                  <p className="text-sm opacity-70 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl md:text-5xl mb-4">
              Need a custom route?
            </h2>
            <p className="opacity-70 text-lg mb-8">
              Multi-day trips, sightseeing circuits, or airport pickups at 3am — just ask.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-sm font-medium text-white transition-transform hover:scale-105"
              style={{ background: 'var(--pine)' }}
            >
              Get in touch
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}

function RouteCard({ route, mode, travellers }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="rounded-2xl bg-white p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl"
      style={{ border: '1px solid var(--muted)' }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Route info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm opacity-60">{route.from}</span>
            <span className="opacity-40">→</span>
            <span className="font-medium">{route.to}</span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-70">
            <span>📍 {route.distance}</span>
            <span>⏱ {route.duration}</span>
            {mode === 'reserved' && route.vehicle && (
              <span>🚗 {route.vehicle}</span>
            )}
          </div>

          {/* Shared: departure times + seats */}
          {mode === 'shared' && route.departures && (
            <div className="flex flex-wrap gap-2 mt-4">
              {route.departures.map((time) => (
                <span
                  key={time}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ background: 'rgba(30, 77, 58, 0.08)', color: 'var(--pine)' }}
                >
                  {time}
                </span>
              ))}
              <span className="text-xs px-3 py-1 rounded-full opacity-60">
                {route.seats} seats per cab
              </span>
            </div>
          )}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center gap-6 md:gap-8">
          <div className="text-right">
            <div className="text-xs uppercase tracking-wider opacity-50 mb-1">
              {mode === 'shared' ? 'Per seat' : 'From'}
            </div>
            <div className="font-heading text-2xl md:text-3xl">
              ₹{route.price.toLocaleString('en-IN')}
            </div>
          </div>

          <Link
            href={`/contact?route=${route.id}&mode=${mode}${travellers ? `&travellers=${travellers}` : ''}`}
            className="px-6 py-3 rounded-full text-sm font-medium text-white whitespace-nowrap transition-transform hover:scale-105"
            style={{ background: 'var(--pine)' }}
          >
            {mode === 'shared' ? 'Book a seat' : 'Book this cab'}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}