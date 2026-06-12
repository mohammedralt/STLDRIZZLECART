import { motion } from 'framer-motion'
import { MapPin, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Right half — product photo bleeds to the viewport edge (Swig-style) */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full pointer-events-none">
        <motion.img
          src="/IMG_8011.jpeg"
          alt="STL Drizzle Cart signature dessert"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        {/* Gradient: bleeds from the red left side into the image */}
        <div className="absolute inset-0 bg-bg/60" />
        {/* Bottom fade on mobile so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent lg:hidden" />
      </div>

      {/* Left — text content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28 lg:py-0 w-full min-h-screen flex flex-col justify-center items-center">

<div className="max-w-[480px] text-center">

          {/* Location eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-6 mt-16"
          >
            <MapPin size={13} className="text-cream/70" />
            <span className="text-cream/70 text-sm font-bold uppercase tracking-[0.2em]">
              St. Louis, MO
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-cream leading-none mb-4"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 5.5rem)' }}
          >
            Home of the<br />
            <span className="text-pink" style={{ fontStyle: 'italic', marginLeft: '-1.2rem' }}>Original</span>
            <br />
            <span className="block mt-3">Drizzle Cart</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-cream/85 text-base sm:text-xl font-bold tracking-wide mb-8"
          >
            Sweetness Meets Every Event
          </motion.p>

          {/* CTA */}
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

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 text-cream/50 text-xs sm:text-sm font-bold tracking-wide leading-relaxed"
          >
            Licensed &amp; Insured · Family Owned · St. Louis Based
          </motion.p>
        </div>
      </div>

      {/* Scroll caret */}
      <motion.button
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-cream/60 hover:text-cream transition-colors"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}
