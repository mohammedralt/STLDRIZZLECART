import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Adam K.',
    event: 'Birthday Party',
    text: 'STL Drizzle Cart was the highlight of our party! The mini pancakes were absolutely delicious and everyone was raving about them. Umair and Aleena were professional, on time, and so friendly. 100% booking again!',
    initials: 'AK',
    color: 'from-pink to-pink-hover',
  },
  {
    name: 'Hannah M.',
    event: 'Corporate Event',
    text: 'We hired them for our company holiday party and they exceeded every expectation. The ice cream donuts were a massive hit — I have never seen a dessert line that long! Highly recommend for any event.',
    initials: 'HM',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Ismail R.',
    event: 'Wedding Reception',
    text: 'Our guests could not stop talking about the dessert cart. The presentation was beautiful, the food was incredible, and the service was top notch. STL Drizzle Cart made our wedding night extra special.',
    initials: 'IR',
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Maria L.',
    event: 'Quinceañera',
    text: 'Absolutely loved working with them! They were so accommodating with our custom topping requests and the cart looked amazing in photos. Every bite was perfection. Will definitely use them again!',
    initials: 'ML',
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'Ahmed S.',
    event: 'Community Festival',
    text: 'Brought them out to our neighborhood festival and they were a smash hit. The line never stopped all night. Friendly, fast, and the food is genuinely some of the best dessert I have ever had. STL is lucky to have them!',
    initials: 'AS',
    color: 'from-yellow-400 to-orange-500',
  },
]

const StarRow = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
    ))}
  </div>
)

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-surface/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-pink text-xs font-black uppercase tracking-widest">Happy Customers</span>
          <h2 className="font-display text-5xl sm:text-6xl text-cream mt-2">Everyone Loves Drizzle</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRow />
            <span className="text-muted font-bold text-sm">5.0 • 50+ events served</span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-surface border border-surface-2 hover:border-pink/20 rounded-3xl p-6 transition-colors duration-200 flex flex-col gap-4 ${
                i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-black text-cream text-sm">{review.name}</div>
                    <div className="text-pink text-xs font-bold">{review.event}</div>
                  </div>
                </div>
                <StarRow />
              </div>
              <p className="text-muted text-sm leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
