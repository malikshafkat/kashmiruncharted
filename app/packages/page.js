import Link from 'next/link'
import FadeUp from '@/components/motion/FadeUp'
import PackageCard from '@/components/packages/PackageCard'

// Dummy data — will move to a database in Batch 4
export const packages = [
  {
    id: '3-day-kashmir',
    title: '3-Day Kashmir Essentials',
    duration: '3 days, 2 nights',
    destinations: 'Srinagar · Gulmarg',
    price: 18500,
    image: '/destinations/gulmarg/gulmarg1.jpg',
    summary:
      'The perfect introduction. Land, settle into a houseboat on Dal Lake, then spend a full day in the meadows of Gulmarg.',
    includes: ['Airport pickup', 'Houseboat stay', 'Gulmarg day trip', 'All cabs', 'Breakfast & dinner'],
  },
  {
    id: '5-day-classic',
    title: '5-Day Classic Kashmir',
    duration: '5 days, 4 nights',
    destinations: 'Srinagar · Gulmarg · Pahalgam',
    price: 32000,
    image: '/destinations/pahalgam/pahalgam1.jpg',
    summary:
      'Our most-booked trip. Two nights on the lake, one in the meadow, one in the valley. Enough time to slow down.',
    includes: ['Airport pickup', 'Houseboat + hotel stays', 'Gulmarg & Pahalgam trips', 'All cabs', 'Shikara ride', 'Meals'],
    featured: true,
  },
  {
    id: '7-day-grand',
    title: '7-Day Grand Kashmir',
    duration: '7 days, 6 nights',
    destinations: 'Srinagar · Gulmarg · Pahalgam · Sonmarg',
    price: 46000,
    image: '/destinations/sonmarg/sonmarg1.jpg',
    summary:
      'Everything, with the time to actually enjoy it. Including Sonmarg and a day of nothing but the lake.',
    includes: ['Airport pickup', 'All stays', 'All four destinations', 'All cabs', 'Shikara ride', 'All meals', 'Local guide'],
  },
]

export default function PackagesPage() {
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
              🗺 Tour packages
            </p>
            <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4 max-w-3xl">
              Curated trips through Kashmir.
            </h1>
            <p className="text-lg opacity-70 max-w-2xl">
              Pick-up from the airport. Stays we&apos;ve vetted personally. Guides who know
              the place. Prices that don&apos;t change halfway.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Packages grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <FadeUp key={pkg.id} delay={i * 0.1}>
                <PackageCard pkg={pkg} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Custom trip CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div
              className="rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center"
              style={{ background: '#f5f3ee' }}
            >
              <p
                className="text-xs uppercase tracking-[0.4em] mb-4"
                style={{ color: 'var(--saffron)' }}
              >
                Or build your own
              </p>
              <h2 className="font-heading text-3xl md:text-5xl mb-4">
                None of these fit?
              </h2>
              <p className="opacity-70 text-lg max-w-xl mx-auto mb-8">
                Tell us your dates, your pace, and what you want to see. We&apos;ll craft
                something just for you.
              </p>
              <Link
                href="/custom"
                className="inline-block px-8 py-4 rounded-full text-sm font-medium text-white transition-transform hover:scale-105"
                style={{ background: 'var(--pine)' }}
              >
                Build a custom trip
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}