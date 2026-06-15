import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

// Category tiles — Swig shows these as a horizontal scrolling image grid
const categories = [
  {
    title: 'Mini Pancakes',
    description: 'Bite-sized & fluffy, drizzled to order',
    img: '/minipancakes.png',
    imgStyle: { objectPosition: '60% 55%', transform: 'scale(1.1)', transformOrigin: '60% 55%' },
  },
  {
    title: 'Ice Cream Donuts',
    description: 'Glazed donuts loaded with premium ice cream',
    img: '/IMG_9675.jpeg',
    imgStyle: { objectPosition: '25% 60%', transform: 'scale(1.3)', transformOrigin: '25% 60%' },
  },
  {
    title: 'Bubble Waffles',
    description: 'Golden waffles with custom toppings',
    img: '/bubblewaffles.JPEG',
    imgStyle: { objectPosition: '20% center' },
  },
]

export default function Services() {

  return (
    <>
      {/* Explore Our Menu */}
      <section id="services" className="py-20 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-pink text-xs font-black uppercase tracking-widest">What We Serve</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-bg mt-2">Explore Our Menu</h2>
          </motion.div>

          {/* Horizontal tile grid — 4 columns desktop, 2 mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.title}
                href="#book"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center text-center gap-3 cursor-pointer"
              >
                {/* Square image tile */}
                <div className="w-full aspect-square rounded-3xl overflow-hidden bg-surface-2 shadow-lg">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={cat.imgStyle}
                  />
                </div>
                <div>
                  <div className="font-display text-bg text-xl leading-tight">{cat.title}</div>
                  <div className="text-bg/50 text-xs mt-0.5 font-bold">{cat.description}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Licensed badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-10"
          >
            <ShieldCheck size={16} className="text-bg/60" />
            <span className="text-bg/60 font-black text-sm">
              Licensed &amp; Insured — Full liability coverage for every event
            </span>
          </motion.div>
        </div>
      </section>

    </>
  )
}
