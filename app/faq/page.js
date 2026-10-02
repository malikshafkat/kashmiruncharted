'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import FadeUp from '@/components/motion/FadeUp'

const faqs = [
  {
    category: 'Booking & payment',
    questions: [
      {
        q: 'How do I book a trip?',
        a: 'Browse our packages or tell us what you have in mind through the contact page. We\'ll reply within 24 hours with a plan and a price. If you\'re happy, we take a 30% deposit to confirm, and the rest on arrival.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'UPI, bank transfer, and international cards via Razorpay. We\'ll send you a payment link once we agree on the trip.',
      },
      {
        q: 'Can I cancel? What\'s the policy?',
        a: 'Free cancellation up to 14 days before your trip — full refund of deposit. 7–13 days: 50% refund. Less than 7 days: deposit is non-refundable, but we\'ll always try to reschedule you instead.',
      },
      {
        q: 'Do you take a deposit or full payment upfront?',
        a: 'A 30% deposit confirms your trip. The remaining 70% is paid on arrival, in cash or UPI. We don\'t ask for full payment upfront.',
      },
    ],
  },
  {
    category: 'On the trip',
    questions: [
      {
        q: 'Who will pick me up from the airport?',
        a: 'One of our drivers, with a sign showing your name. We track your flight, so even if you land late, we\'ll be there. You get the driver\'s name and phone number before you travel.',
      },
      {
        q: 'What language do the drivers/guides speak?',
        a: 'All our drivers speak Kashmiri and Hindi. Most speak conversational English. If you need a dedicated English-speaking guide, tell us in advance.',
      },
      {
        q: 'Is it safe for solo female travellers?',
        a: 'Yes. We host solo female travellers often, and take extra care. Our drivers check in with you during the trip. You always have a WhatsApp number to reach us, 24/7.',
      },
      {
        q: 'What if the weather changes mid-trip?',
        a: 'Kashmir weather is unpredictable, especially in the mountains. We check conditions daily and will rearrange your itinerary if needed — no fuss, no extra charge.',
      },
    ],
  },
  {
    category: 'Practical',
    questions: [
      {
        q: 'When is the best time to visit Kashmir?',
        a: 'April to October for warm weather and green meadows. May–June for wildflowers. September–October for clear skies and autumn colours. December–February for snow and skiing in Gulmarg.',
      },
      {
        q: 'What should I pack?',
        a: 'Layers. Even in summer, evenings get cool. Bring a light jacket, comfortable walking shoes, sunscreen, and a hat. In winter, proper thermals and a heavy jacket are essential for Gulmarg.',
      },
      {
        q: 'Is mobile/internet connectivity good?',
        a: 'Yes in Srinagar and the main towns. Postpaid SIMs from most Indian operators work. Prepaid SIMs from outside J&K may not work — check with your provider. We\'ll share Wi-Fi details at every stay.',
      },
      {
        q: 'Can I customise a package?',
        a: 'Always. Every trip we run is adjusted to the traveller. Extend a day, skip a destination, add a trek — just tell us what you want and we\'ll quote it.',
      },
    ],
  },
]

export default function FAQPage() {
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
              FAQ
            </p>
            <h1 className="font-heading text-4xl md:text-6xl leading-tight mb-4 max-w-3xl">
              Questions, answered.
            </h1>
            <p className="text-lg opacity-70 max-w-2xl">
              Everything we get asked most, in one place. If yours isn&apos;t here,
              just message us — we reply personally.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ accordions by category */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {faqs.map((group) => (
            <div key={group.category}>
              <FadeUp>
                <h2 className="font-heading text-2xl mb-6">{group.category}</h2>
                <div className="space-y-3">
                  {group.questions.map((item) => (
                    <Accordion key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Still have a question?
            </h2>
            <p className="opacity-70 text-lg mb-8">
              WhatsApp us. We usually reply within an hour.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-sm font-medium text-white transition-transform hover:scale-105"
                style={{ background: '#25D366' }}
              >
                💬 Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full text-sm font-medium transition-transform hover:scale-105"
                style={{ border: '1px solid var(--pine)', color: 'var(--pine)' }}
              >
                Send a message
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-xl bg-white overflow-hidden"
      style={{ border: '1px solid var(--muted)' }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-black/[0.02] transition-colors"
      >
        <span className="font-medium pr-4">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl flex-shrink-0"
          style={{ color: 'var(--pine)' }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-5 pb-5 pt-0 text-sm opacity-75 leading-relaxed"
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}