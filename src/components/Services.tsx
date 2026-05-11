import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const services = [
  {
    emoji: '🥞',
    title: 'Mini Pancakes',
    subtitle: 'Warm & Fresh',
    description:
      'Bite-sized fluffy pancakes made fresh on-site, drizzled with your choice of toppings — Nutella, strawberry, caramel, whipped cream, and more. A crowd favorite at every event.',
    tags: ['Made Fresh', 'Custom Toppings', 'Crowd Favorite'],
  },
  {
    emoji: '🍩',
    title: 'Ice Cream Donuts',
    subtitle: 'Premium Indulgence',
    description:
      'Glazed donuts loaded with premium ice cream, drizzled sauces, and gourmet toppings. An Instagrammable dessert experience that your guests will be talking about for months.',
    tags: ['Instagrammable', 'Gourmet Toppings', 'Custom Flavors'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-surface/30 overflow-hidden">
      {/* Background decorative blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-pink text-xs font-black uppercase tracking-widest">What We Serve</span>
          <h2 className="font-display text-5xl sm:text-6xl text-cream mt-2">Our Menu</h2>
          <p className="text-muted mt-3 text-lg max-w-md mx-auto">
            Two signature offerings, countless ways to customize. Every event is a new flavor story.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Cards */}
          <div className="space-y-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="bg-surface border border-surface-2 hover:border-pink/30 rounded-4xl p-7 transition-colors duration-200 cursor-default"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-surface-2 flex items-center justify-center text-3xl shrink-0">
                    {service.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display text-2xl text-cream">{service.title}</h3>
                      <span className="text-pink text-xs font-black uppercase tracking-wider bg-pink/10 px-2.5 py-1 rounded-full">
                        {service.subtitle}
                      </span>
                    </div>
                    <p className="text-muted mt-2 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-cream/60 font-bold bg-surface-2 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Licensed badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 bg-green-950/50 border border-green-500/30 rounded-3xl px-5 py-3"
            >
              <ShieldCheck size={20} className="text-green-400 shrink-0" />
              <span className="text-green-300 font-black text-sm">
                Licensed and Insured — Full liability coverage for every event
              </span>
            </motion.div>
          </div>

          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-square rounded-4xl overflow-hidden">
              {/* Replace with actual product image */}
              <img
                src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=700&auto=format&fit=crop"
                alt="STL Drizzle Cart desserts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-bg/80 backdrop-blur-sm rounded-3xl px-5 py-3">
                  <div className="font-display text-cream text-lg">Made Fresh at Your Event ✨</div>
                  <div className="text-muted text-sm mt-0.5">Watch us drizzle perfection right before your eyes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
