import { useEffect } from 'react'
import { motion } from 'framer-motion'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': { 'feed-id': string }
    }
  }
}

export default function GalleryPage() {
  useEffect(() => {
    const s = document.createElement('script')
    s.type = 'module'
    s.src = 'https://w.behold.so/widget.js'
    document.head.appendChild(s)
  }, [])

  return (
    <section className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-pink text-xs font-black uppercase tracking-widest">In Action</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream mt-2">The Drizzle Life</h1>
          <p className="text-muted mt-3 text-lg max-w-md mx-auto">
            Real moments from real events. Follow us on Instagram for more sweet content.
          </p>
        </motion.div>

        {/* Behold Instagram Feed */}
        <behold-widget feed-id="PEq27Pjy8CDAjHv1k7M5" />

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/stldrizzlecart/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-cream text-cream hover:bg-cream hover:text-bg font-black text-sm px-8 py-3 rounded-full transition-all duration-200 uppercase tracking-wide"
          >
            📸 Follow @stldrizzlecart
          </a>
        </motion.div>
      </div>
    </section>
  )
}
