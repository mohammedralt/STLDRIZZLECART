import { motion } from 'framer-motion'
import { Heart, Users } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Founders photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <div className="relative pb-4 pr-4">
              <div className="rounded-4xl overflow-hidden h-[320px] sm:h-[440px] lg:h-[520px]">
                <img
                  src="/aleenaumair.PNG"
                  alt="STL Drizzle Cart founders Umair and Aleena with the cart"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-0 right-0 bg-pink rounded-3xl px-5 py-3 glow-pink shadow-xl">
                <div className="font-display text-bg text-sm">Since 2025 🍩</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div>
              <span className="text-pink text-xs font-black uppercase tracking-widest">Our Story</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream mt-2 leading-tight">
                A Sweet Family Adventure
              </h2>
            </div>

            <div className="space-y-4 text-muted text-lg leading-relaxed">
              <p>
                STL Drizzle Cart was born from a simple idea - bring joy to St. Louis one delicious treat at a time. Founded by siblings{' '}
                <strong className="text-cream">Umair and Aleena Hussain</strong>, what started as a passion project has grown into one of the city's most beloved portable dessert experiences.
              </p>
              <p>
                From intimate backyard birthdays to large corporate events, we show up with warm mini pancakes drizzled to perfection and indulgent ice cream donuts that keep guests coming back for more.
              </p>
              <p>
                We're fully licensed and insured, so you can focus on making memories while we handle the sweetness.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-surface border border-surface-2 rounded-3xl p-5 flex items-start gap-4 hover:border-pink/30 transition-colors">
                <div className="w-10 h-10 rounded-2xl bg-pink/10 flex items-center justify-center shrink-0">
                  <Heart size={18} className="text-pink" />
                </div>
                <div>
                  <div className="font-black text-cream text-sm">Family Owned</div>
                  <div className="text-muted text-sm mt-0.5">Sibling duo Umair & Aleena run every event personally</div>
                </div>
              </div>
              <div className="bg-surface border border-surface-2 rounded-3xl p-5 flex items-start gap-4 hover:border-pink/30 transition-colors">
                <div className="w-10 h-10 rounded-2xl bg-pink/10 flex items-center justify-center shrink-0">
                  <Users size={18} className="text-pink" />
                </div>
                <div>
                  <div className="font-black text-cream text-sm">Community First</div>
                  <div className="text-muted text-sm mt-0.5">Proud to serve St. Louis events big and small</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#book"
                className="inline-flex bg-surface border border-pink/30 hover:bg-pink text-pink hover:text-bg font-black text-sm px-6 py-3 rounded-full transition-all duration-200 uppercase tracking-wide"
              >
                Join Our Journey →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}