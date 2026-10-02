import Link from 'next/link'
import { notFound } from 'next/navigation'
import FadeUp from '@/components/motion/FadeUp'
import { packages } from '../page'

// Dummy itineraries — attach to packages by id
const ITINERARIES = {
  '3-day-kashmir': [
    { day: 1, title: 'Arrival & Dal Lake', text: 'Airport pickup. Settle into your houseboat. Evening shikara ride at sunset.' },
    { day: 2, title: 'Gulmarg day trip', text: 'Full day in the meadows. Optional gondola ride to Apharwat. Back to Srinagar by evening.' },
    { day: 3, title: 'Mughal gardens & departure', text: 'Morning at Nishat and Shalimar gardens. Airport drop.' },
  ],
  '5-day-classic': [
    { day: 1, title: 'Arrival & Dal Lake', text: 'Airport pickup. Houseboat check-in. Evening shikara ride.' },
    { day: 2, title: 'Gulmarg', text: 'Drive to Gulmarg. Gondola ride. Overnight stay in a hotel.' },
    { day: 3, title: 'Pahalgam', text: 'Drive to Pahalgam. Betaab Valley, Aru Valley, riverside evening. Overnight.' },
    { day: 4, title: 'Return to Srinagar', text: 'Morning at leisure. Drive back. Afternoon at Mughal gardens.' },
    { day: 5, title: 'Departure', text: 'Airport drop.' },
  ],
  '7-day-grand': [
    { day: 1, title: 'Arrival & Dal Lake', text: 'Airport pickup. Houseboat check-in. Evening shikara ride.' },
    { day: 2, title: 'Srinagar city', text: 'Mughal gardens, old city walk, Jamia Masjid, shopping at Lal Chowk.' },
    { day: 3, title: 'Gulmarg', text: 'Drive to Gulmarg. Gondola, meadow walks, overnight.' },
    { day: 4, title: 'Gulmarg to Pahalgam', text: 'Scenic drive. Check in at Pahalgam hotel.' },
    { day: 5, title: 'Pahalgam valleys', text: 'Betaab Valley, Aru Valley, Chandanwari. Riverside evening.' },
    { day: 6, title: 'Sonmarg day trip', text: 'Drive to Sonmarg. Thajiwas Glacier pony ride. Back to Srinagar.' },
    { day: 7, title: 'Departure', text: 'Airport drop.' },
  ],
}

export default function PackageDetailPage({ params }) {
  const pkg = packages.find((p) => p.id === params.id)
  if (!pkg) notFound()

  const itinerary = ITINERARIES[pkg.id] || []

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${pkg.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#1e293b',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%)',
          }}
        />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
          <Link
            href="/packages"
            className="text-white/80 text-sm mb-4 hover:text-white w-fit"
          >
            ← All packages
          </Link>

          <p className="text-white/70 text-xs uppercase tracking-[0.3em] mb-3">
            {pkg.duration} · {pkg.destinations}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-white leading-tight max-w-3xl">
            {pkg.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Left: content */}
          <div className="lg:col-span-2 space-y-12">
            <FadeUp>
              <div>
                <h2 className="font-heading text-2xl mb-4">Overview</h2>
                <p className="text-lg opacity-80 leading-relaxed">{pkg.summary}</p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <h2 className="font-heading text-2xl mb-6">Day by day</h2>
                <div className="space-y-6">
                  {itinerary.map((day) => (
                    <div key={day.day} className="flex gap-6">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0"
                        style={{ background: 'var(--pine)' }}
                      >
                        {day.day}
                      </div>
                      <div className="pt-2">
                        <div className="font-heading text-lg mb-1">{day.title}</div>
                        <p className="opacity-70 text-sm leading-relaxed">{day.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <h2 className="font-heading text-2xl mb-4">What&apos;s included</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5"
                        style={{ background: 'var(--pine)' }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp>
              <div
                className="rounded-2xl p-6"
                style={{ background: '#f5f3ee' }}
              >
                <h3 className="font-heading text-lg mb-3">Not included</h3>
                <ul className="text-sm opacity-70 space-y-1">
                  <li>· Flights to and from Srinagar</li>
                  <li>· Personal expenses and shopping</li>
                  <li>· Gondola tickets and pony rides</li>
                  <li>· Travel insurance</li>
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* Right: booking sidebar */}
          <div className="lg:col-span-1">
            <div
              className="rounded-2xl p-6 sticky top-24"
              style={{ border: '1px solid var(--muted)', background: 'white' }}
            >
              <div className="text-xs uppercase tracking-wider opacity-50 mb-2">
                Starting from
              </div>
              <div className="font-heading text-4xl mb-1">
                ₹{pkg.price.toLocaleString('en-IN')}
              </div>
              <div className="text-sm opacity-60 mb-6">per person</div>

              <div
                className="pt-6 space-y-3 text-sm"
                style={{ borderTop: '1px solid var(--muted)' }}
              >
                <Row label="Duration" value={pkg.duration} />
                <Row label="Destinations" value={pkg.destinations} />
                <Row label="Group size" value="1–10 travellers" />
                <Row label="Starts" value="Srinagar Airport" />
              </div>

              <Link
                href={`/contact?package=${pkg.id}`}
                className="block text-center mt-6 px-6 py-4 rounded-full text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                style={{ background: 'var(--pine)' }}
              >
                Enquire about this trip
              </Link>

              <Link
                href="/custom"
                className="block text-center mt-3 text-xs opacity-60 hover:opacity-100 underline"
              >
                Or build a custom trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Questions about this trip?
            </h2>
            <p className="opacity-70 mb-8">
              We&apos;re happy to walk you through it. WhatsApp is fastest.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full text-sm font-medium text-white transition-transform hover:scale-105"
              style={{ background: '#25D366' }}
            >
              💬 Chat on WhatsApp
            </a>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="opacity-60">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}