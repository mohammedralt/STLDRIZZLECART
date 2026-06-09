import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Adam K.',
    event: 'Car Meet',
    text: 'Had them pull up to our car meet and they honestly stole the show. People stopped checking out cars the second the food started coming out. Mini pancakes at night just hits. Already got them on the schedule for next month.',
    initials: 'AK',
    color: 'from-pink to-pink-hover',
  },
  {
    name: 'Hannah M.',
    event: 'Wedding Reception',
    text: 'We had them at our wedding and honestly it was one of the best decisions we made. Our guests went crazy for the donuts. People are still texting me asking where we got them from. So worth it.',
    initials: 'HM',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Ismail R.',
    event: 'Car Meet',
    text: 'Shoutout to STL Drizzle Cart for pulling up to Midwest Motorfest. The bubble waffles were fire and they kept up with the crowd no problem. Already got them booked for the next one.',
    initials: 'IR',
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Maria L.',
    event: 'Quinceañera',
    text: 'My daughter wanted something different for her quince and this was perfect. The cart looked so cute in the photos and the food was genuinely delicious. Every single guest asked for the info. Highly recommend!',
    initials: 'ML',
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'Ahmed S.',
    event: 'Birthday Party',
    text: 'Booked them for my birthday and they did not disappoint. Showed up early, set up fast, and the food was insane. My friends literally would not leave until they finished everything. Already planning to book again.',
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
