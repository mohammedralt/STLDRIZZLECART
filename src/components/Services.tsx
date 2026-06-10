import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react'

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

// Featured signature creations — Swig's "Signature Sips" row
const featured = [
  {
    name: 'The Classic Drizzle',
    desc: 'Mini pancakes · Nutella · Strawberry · Whipped Cream',
    tag: 'Fan Favorite',
    img: '/gallery-1.jpg',
  },
  {
    name: 'Donut Sundae',
    desc: 'Glazed donut · Two scoops · Caramel crunch · Sprinkles',
    tag: 'Most Popular',
    img: '/gallery-2.jpg',
  },
  {
    name: 'Golden Stack',
    desc: 'Pancake tower · Honey butter · Powdered sugar · Berries',
    tag: 'Weekend Special',
    img: '/gallery-3.jpg',
  },
  {
    name: 'Birthday Bomb',
    desc: 'Custom donut · Rainbow sprinkles · Whipped cream · Candle',
    tag: 'Party Must-Have',
    img: '/gallery-4.jpg',
  },
]

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null)

function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Category tiles (Swig "Explore Our Menu" section) ── */}
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

      {/* ── Signature Creations (Swig "Signature Sips" scroll) ── */}
      <section className="py-20 bg-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-pink text-xs font-black uppercase tracking-widest">Signature Creations</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream mt-2">Fan Favorites</h2>
            </motion.div>

            {/* Scroll arrows — desktop only */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border-2 border-cream/30 flex items-center justify-center text-cream/60 hover:border-cream hover:text-cream transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border-2 border-cream/30 flex items-center justify-center text-cream/60 hover:border-cream hover:text-cream transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Horizontal scroll strip */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {featured.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="shrink-0 w-64 snap-start group"
              >
                <div className="rounded-3xl overflow-hidden aspect-[3/4] relative mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-pink text-bg text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    {item.tag}
                  </span>
                </div>
                <div className="font-display text-cream text-xl leading-tight mb-1">{item.name}</div>
                <div className="text-muted text-sm leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
