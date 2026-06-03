import { motion } from 'framer-motion'

const galleryImages = [
  { src: '/gallery-1.jpg', alt: 'Colorful toppings on chocolate cake' },
  { src: '/gallery-2.jpg', alt: 'STL Drizzle signature moment' },
  { src: '/gallery-3.jpg', alt: 'Waffle with powdered sugar' },
  { src: '/gallery-4.jpg', alt: 'Happy customers enjoying desserts' },
]

export default function GalleryPage() {
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
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream mt-2">The Drizzle Life</h1>
          <p className="text-muted mt-3 text-lg max-w-md mx-auto">
            Real moments from real events. Follow us on Instagram for more sweet content.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[320px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden bg-surface cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/stldrizzle/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-cream text-cream hover:bg-cream hover:text-bg font-black text-sm px-8 py-3 rounded-full transition-all duration-200 uppercase tracking-wide"
          >
            📸 Follow @stldrizzle
          </a>
        </motion.div>
      </div>
    </section>
  )
}
