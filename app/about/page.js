import Link from 'next/link'
import FadeUp from '@/components/motion/FadeUp'

export default function AboutPage() {
  return (
    <div>
      {/* Hero band */}
      <section className="py-20 border-b" style={{ borderColor: 'var(--muted)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p
              className="text-xs uppercase tracking-[0.4em] mb-4"
              style={{ color: 'var(--pine)' }}
            >
              About us
            </p>
            <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-6 max-w-4xl">
              We started this because we were tired of watching tourists get taken for a ride.
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <div className="space-y-6 text-lg leading-relaxed opacity-85">
              <p>
                Kashmir is one of the most beautiful places on earth. It also has a tourism
                problem — overpriced houseboats, guides who pocket commissions, drivers
                who quote one price and charge another. We saw it happen to friends who
                visited. We saw it happen to strangers at the airport.
              </p>
              <p>
                So we built something different. A single operator that handles everything:
                airport pickup, stays we&apos;ve vetted personally, drivers we&apos;ve worked
                with for years, and a price that doesn&apos;t change halfway through.
              </p>
              <p>
                We&apos;re not a booking platform. We&apos;re not a marketplace. We&apos;re a small
                team of people from Kashmir who know this place — and we take care of you
                the way we&apos;d want to be taken care of.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: '#f5f3ee' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p
              className="text-xs uppercase tracking-[0.4em] mb-4 text-center"
              style={{ color: 'var(--pine)' }}
            >
              What we stand for
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-center mb-16 max-w-2xl mx-auto">
              Five promises we make to every traveller.
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🤝', title: 'Best service', text: 'Every guide, driver, and host is vetted personally. If we wouldn\'t send our own family, we won\'t send you.' },
              { icon: '🔒', title: 'Privacy', text: 'Your details stay with us. No sharing with third parties, no spam calls, no reselling your data.' },
              { icon: '⏳', title: 'Quality time', text: 'Small groups, unhurried itineraries. We don\'t pack six sights into one day so you can tick boxes.' },
              { icon: '🛡️', title: 'Safety', text: 'Registered operators, insured vehicles, licensed drivers. Weather and road conditions checked daily.' },
              { icon: '🚨', title: 'Security', text: '24/7 on-trip support. If anything changes — flight delay, weather, health — you have a number to call.' },
              { icon: '💰', title: 'Honest pricing', text: 'One quote, all inclusive. No tolls, no parking, no "extra" charges once you arrive.' },
            ].map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.08}>
                <div
                  className="p-6 rounded-2xl bg-white h-full"
                  style={{ border: '1px solid var(--muted)' }}
                >
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <div className="font-heading text-lg mb-2">{v.title}</div>
                  <p className="text-sm opacity-70 leading-relaxed">{v.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <p
              className="text-xs uppercase tracking-[0.4em] mb-4 text-center"
              style={{ color: 'var(--pine)' }}
            >
              How it works
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-center mb-16">
              Three steps from enquiry to airport.
            </h2>
          </FadeUp>

          <div className="space-y-12">
            {[
              { n: '1', title: 'Tell us what you want', text: 'Pick a package, or tell us your dates and interests. We respond within 24 hours with a plan and a price.' },
              { n: '2', title: 'We book everything', text: 'Stays, cabs, guides — all confirmed before you arrive. You get a full itinerary by email and WhatsApp.' },
              { n: '3', title: 'Land, and stop worrying', text: 'Someone is waiting at the airport with your name. From there, everything is taken care of.' },
            ].map((step) => (
              <FadeUp key={step.n}>
                <div className="flex gap-6 items-start">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-heading text-xl flex-shrink-0"
                    style={{ background: 'var(--pine)' }}
                  >
                    {step.n}
                  </div>
                  <div className="pt-2">
                    <div className="font-heading text-2xl mb-2">{step.title}</div>
                    <p className="opacity-75 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div
              className="rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center"
              style={{ background: 'var(--pine)', color: 'white' }}
            >
              <h2 className="font-heading text-3xl md:text-5xl mb-4">
                Ready to plan your trip?
              </h2>
              <p className="opacity-80 text-lg max-w-xl mx-auto mb-8">
                We reply to every enquiry personally. No bots, no call centers.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-full text-sm font-medium transition-transform hover:scale-105"
                style={{ background: 'white', color: 'var(--pine)' }}
              >
                Get in touch
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}