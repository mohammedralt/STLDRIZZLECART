import { motion } from 'framer-motion'
import { MapPin, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#8B2500]/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-surface-2 text-pink text-xs font-bold px-3 py-1.5 rounded-full border border-pink/20 mb-6 uppercase tracking-widest">
                <MapPin size={11} />
                St. Louis, MO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none mb-6"
            >
              Sweetness{' '}
              <span className="text-gradient">Drizzled</span>{' '}
              to Perfection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted text-lg leading-relaxed mb-8 max-w-md"
            >
              Portable dessert cart serving St. Louis with fresh mini pancakes and premium ice cream donuts.{' '}
              <strong className="text-cream font-black">Licensed and Insured</strong> for your peace of mind.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#book"
                className="bg-pink hover:bg-pink-hover text-white font-black text-base px-8 py-4 rounded-full transition-all duration-200 glow-pink hover:scale-105 uppercase tracking-wide"
              >
                Start Booking
              </a>
              <a
                href="#services"
                className="bg-surface border border-surface-2 hover:border-pink/40 text-cream font-black text-base px-8 py-4 rounded-full transition-all duration-200 uppercase tracking-wide"
              >
                Our Menu
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {['Licensed & Insured', 'Family Owned', 'St. Louis Based'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-muted text-sm font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Logo / visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 80 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-pink/20 blur-3xl scale-110" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-[#f5e6c8] border-4 border-surface-2 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Placeholder logo — replace with actual logo image */}
                <div className="text-center p-8">
                  <div className="font-display text-[#120b08] text-5xl leading-none mb-2">STL</div>
                  <div className="font-display text-pink text-6xl leading-none">Drizzle</div>
                  <div className="text-[#8B5E3C] text-xs font-bold mt-2 tracking-widest uppercase">Cart</div>
                  {/* Replace the above div contents with: */}
                  {/* <img src="/logo.png" alt="STL Drizzle Cart" className="w-full h-full object-contain" /> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-muted"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
