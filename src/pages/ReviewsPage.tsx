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
      <Star key={i} size={14} className="text-pink fill-pink" />
    ))}
  </div>
)

export default function ReviewsPage() {
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
          <span className="text-pink text-xs font-black uppercase tracking-widest">Happy Customers</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream mt-2">Everyone Loves Drizzle</h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRow />
            <span className="text-muted font-bold text-sm">5.0 · 50+ events served</span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-surface-2 hover:border-pink/30 rounded-3xl p-6 flex flex-col gap-4 transition-colors duration-200"
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

        {/* Book CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-muted text-lg mb-4">Ready to create your own sweet memory?</p>
          <a
            href="/#book"
            className="inline-flex items-center border-2 border-cream text-cream hover:bg-cream hover:text-bg font-black text-base px-10 py-4 rounded-full transition-all duration-200 uppercase tracking-wide"
          >
            Book Your Event
          </a>
        </motion.div>
      </div>
    </section>
  )
}
