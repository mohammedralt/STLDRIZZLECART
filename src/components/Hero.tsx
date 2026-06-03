import { motion } from 'framer-motion'
import { MapPin, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Right half — product photo bleeds to the viewport edge (Swig-style) */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[58%] pointer-events-none">
        <motion.img
          src="/gallery-2.jpg"
          alt="STL Drizzle Cart signature dessert"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        {/* Gradient: bleeds from the red left side into the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/50 lg:via-bg/30 to-transparent" />
        {/* Bottom fade on mobile so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent lg:hidden" />
      </div>

      {/* Left — text content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-0 w-full min-h-screen flex flex-col justify-center">
        <div className="max-w-[480px]">

          {/* Location eyebrow — matches Swig's subtle location tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <MapPin size={13} className="text-cream/70" />
            <span className="text-cream/70 text-sm font-bold uppercase tracking-[0.2em]">
              St. Louis, MO
            </span>
          </motion.div>

          {/* Main headline — Swig uses a 3-line stacked headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-cream leading-none mb-4"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
          >
            Home of the<br />
            <span
              className="text-pink"
              style={{ fontStyle: 'italic' }}
            >
              Original
            </span>
            <br />
            Drizzle Cart
          </motion.h1>

          {/* Subtitle — Swig's "Soda Meets Cream" is short and punchy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-cream/85 text-lg sm:text-xl font-bold tracking-wide mb-10"
          >
            Sweetness Meets Every Event
          </motion.p>

          {/* CTA — Swig uses an outlined button on the red hero, not filled */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a
              href="#book"
              className="inline-flex items-center border-2 border-cream text-cream hover:bg-cream hover:text-bg font-black text-base px-10 py-4 rounded-full transition-all duration-200 uppercase tracking-wide"
            >
              Book Now
            </a>
          </motion.div>

          {/* Trust line — Licensed & Insured · Family Owned · St. Louis Based */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 text-cream/50 text-sm font-bold tracking-wide"
          >
            Licensed &amp; Insured&nbsp;&nbsp;·&nbsp;&nbsp;Family Owned&nbsp;&nbsp;·&nbsp;&nbsp;St. Louis Based
          </motion.p>
        </div>
      </div>

      {/* Scroll caret */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-cream/40"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  )
}
