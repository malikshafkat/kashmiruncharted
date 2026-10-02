import Link from 'next/link'
import FadeUp from '@/components/motion/FadeUp'

const reviews = [
  {
    name: 'Priya & Arjun',
    origin: 'Mumbai',
    date: 'May 2026',
    rating: 5,
    text: 'We were nervous about Kashmir — you hear things. But everything was exactly as promised. Someone was waiting at the airport with our name. The houseboat was beautiful. Our driver, Imtiyaz, was with us for 5 days and became a friend. Worth every rupee.',
    trip: '5-Day Classic Kashmir',
  },
  {
    name: 'Marcus Hoffmann',
    origin: 'Berlin',
    date: 'September 2026',
    rating: 5,
    text: 'I have travelled across India, and this was the smoothest experience I have had. No haggling, no "extra charges", no surprises. The Gulmarg gondola was closed because of weather and they rearranged our day without me even asking.',
    trip: '7-Day Grand Kashmir',
  },
  {
    name: 'Aisha Khan',
    origin: 'Dubai',
    date: 'April 2026',
    rating: 5,
    text: 'Booked the 3-day trip as a solo female traveller. I was looked after the whole time — the driver would call to check I got to my room safely. Felt genuinely cared for, not just managed.',
    trip: '3-Day Kashmir Essentials',
  },
  {
    name: 'The Mehtas',
    origin: 'Bengaluru',
    date: 'June 2026',
    rating: 5,
    text: 'Travelled with our two kids (ages 6 and 9). The team were patient, flexible, and always found kid-friendly things to do. The shikara ride at sunset was the highlight of the trip for all of us.',
    trip: '5-Day Classic Kashmir',
  },
  {
    name: 'Ravi Subramanian',
    origin: 'Chennai',
    date: 'October 2026',
    rating: 5,
    text: 'I have used many tour operators across India. This one is different. You can tell they actually live there and care about the place. Would book again without hesitation.',
    trip: 'Custom 6-day trip',
  },
  {
    name: 'Julia & Tom',
    origin: 'London',
    date: 'August 2026',
    rating: 5,
    text: 'We came for our honeymoon. They upgraded our houseboat without us asking, arranged a private dinner on the deck, and the whole thing felt effortless. Genuinely one of the best trips we have taken.',
    trip: '5-Day Classic Kashmir',
  },
]

export default function ReviewsPage() {
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
              Reviews
            </p>
            <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4 max-w-3xl">
              What travellers say.
            </h1>
            <p className="text-lg opacity-70 max-w-2xl">
              Every review is from a real trip. We don&apos;t edit them, and we don&apos;t
              ask for them — people just send them.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12" style={{ background: '#f5f3ee' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="font-heading text-4xl md:text-5xl mb-1">4.9</div>
              <div className="text-xs uppercase tracking-wider opacity-60">
                Average rating
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl mb-1">200+</div>
              <div className="text-xs uppercase tracking-wider opacity-60">
                Trips organised
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl mb-1">70%</div>
              <div className="text-xs uppercase tracking-wider opacity-60">
                Return or refer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <FadeUp key={r.name} delay={i * 0.08}>
                <article
                  className="p-8 rounded-2xl bg-white h-full flex flex-col"
                  style={{ border: '1px solid var(--muted)' }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <span key={i} style={{ color: 'var(--saffron)' }}>
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base leading-relaxed opacity-85 mb-6 flex-1">
                    &ldquo;{r.text}&rdquo;
                  </p>

                  {/* Footer */}
                  <div
                    className="pt-5 mt-auto"
                    style={{ borderTop: '1px solid var(--muted)' }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-heading text-base">{r.name}</div>
                        <div className="text-xs opacity-60">
                          {r.origin} · {r.date}
                        </div>
                      </div>
                      <div
                        className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{
                          background: 'rgba(30, 77, 58, 0.08)',
                          color: 'var(--pine)',
                        }}
                      >
                        {r.trip}
                      </div>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl md:text-5xl mb-4">
              Ready to write your own review?
            </h2>
            <p className="opacity-70 text-lg mb-8">
              Browse our packages, or tell us what you have in mind.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/packages"
                className="px-8 py-4 rounded-full text-sm font-medium text-white transition-transform hover:scale-105"
                style={{ background: 'var(--pine)' }}
              >
                Browse packages
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full text-sm font-medium transition-transform hover:scale-105"
                style={{ border: '1px solid var(--pine)', color: 'var(--pine)' }}
              >
                Contact us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}