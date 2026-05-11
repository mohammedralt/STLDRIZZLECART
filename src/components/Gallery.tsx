import { motion } from 'framer-motion'

const galleryImages = [
  {
    src: '/gallery-1.jpg',
    alt: 'Colorful toppings on chocolate cake',
    span: 'col-span-1',
  },
  {
    src: '/gallery-2.jpg',
    alt: 'STL Drizzle signature moment',
    span: 'col-span-1',
  },
  {
    src: '/gallery-3.jpg',
    alt: 'Waffle with powdered sugar',
    span: 'col-span-1',
  },
  {
    src: '/gallery-4.jpg',
    alt: 'Happy customers enjoying desserts',
    span: 'col-span-1',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-pink text-xs font-black uppercase tracking-widest">In Action</span>
          <h2 className="font-display text-5xl sm:text-6xl text-cream mt-2">The Drizzle Life</h2>
          <p className="text-muted mt-3 text-lg max-w-md mx-auto">
            Real moments from real events. Follow us on Instagram for more sweet content.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-0 auto-rows-[280px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${img.span} relative rounded-2xl overflow-hidden bg-white cursor-pointer group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-0"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/stldrizzlecart/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface border border-surface-2 hover:border-pink/40 text-cream font-black text-sm px-6 py-3 rounded-full transition-all duration-200 uppercase tracking-wide"
          >
            <span>📸</span> Follow @stldrizzlecart
          </a>
        </motion.div>
      </div>
    </section>
  )
}
