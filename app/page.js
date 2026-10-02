import Link from 'next/link'
import FadeUp from '@/components/motion/FadeUp'
import CabSearchBar from '@/components/home/CabSearchBar'
import CabAboutStrip from '@/components/home/CabAboutStrip'
import PromiseSection from '@/components/home/PromiseSection'
import DestinationSlideshow from '@/components/home/DestinationSlideshow'
import StatsStrip from '@/components/home/StatsStrip'
import TestimonialStrip from '@/components/home/TestimonialStrip'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: 'calc(100vh - 73px)' }}
      >
        <div
          className="absolute inset-0 kenburns"
          style={{
            backgroundImage: 'url(/assets/hero/dal-lake-sunrise.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#1e293b',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.55) 100%)',
          }}
        />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
          <FadeUp delay={0.1}>
            <p className="text-white/80 text-sm uppercase tracking-[0.3em] mb-6">
              Srinagar · Gulmarg · Pahalgam · Sonmarg
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-heading font-medium max-w-4xl leading-[0.95] mb-8">
              Kashmir,<br />
              <em className="font-normal" style={{ color: '#f5c9a0' }}>done right.</em>
            </h1>
          </FadeUp>

          <FadeUp delay={0.5}>
            <p className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed">
              Airport pickup, trusted houseboats, licensed guides, and honest pricing —
              all in one seamless trip.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* SEARCH BAR + ABOUT STRIP */}
      <section className="px-6 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <CabSearchBar />
          <div className="mt-6">
            <CabAboutStrip />
          </div>
        </div>
      </section>

      {/* PROMISE SECTION */}
      <PromiseSection />

      {/* DESTINATION SLIDESHOW */}
      <DestinationSlideshow />

      {/* STATS */}
      <StatsStrip />

      {/* TESTIMONIALS */}
      <TestimonialStrip />

      {/* WHY US */}
      <section className="py-24" style={{ background: '#f5f3ee' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-sm uppercase tracking-[0.25em] opacity-50 mb-6">Why us</p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-8">
              Tourists get scammed in Kashmir.<br />
              <em className="font-normal" style={{ color: 'var(--saffron)' }}>
                You won&apos;t be one of them.
              </em>
            </h2>
            <p className="text-lg opacity-75 leading-relaxed max-w-2xl mx-auto">
              We started Kashmir Uncharted because we were tired of watching visitors
              overpay for mediocre trips. Every stay is vetted, every guide is licensed,
              every price is quoted upfront. You pay once, and everything — from the
              moment you land to the moment you fly out — is taken care of.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div
              className="rounded-3xl px-8 py-20 md:px-20 md:py-28 text-center relative overflow-hidden"
              style={{ background: 'var(--pine)' }}
            >
              <h2 className="font-heading text-4xl md:text-6xl text-white leading-tight mb-6">
                Ready to see Kashmir?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                Tell us your dates and we&apos;ll craft the trip. No obligation, no pressure.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/packages"
                  className="px-8 py-4 rounded-full text-sm font-medium transition-transform hover:scale-105"
                  style={{ background: 'white', color: 'var(--pine)' }}
                >
                  Browse packages
                </Link>
                <Link
                  href="/custom"
                  className="px-8 py-4 rounded-full text-sm font-medium border border-white/40 text-white hover:bg-white/10 transition"
                >
                  Build a custom trip
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}