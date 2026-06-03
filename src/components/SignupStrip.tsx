import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SignupStrip() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
  }

  return (
    <div className="bg-cream py-5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <p className="text-bg font-black text-sm uppercase tracking-widest text-center sm:text-left whitespace-nowrap">
          🍩 Stay in the Drizzle Loop — Get event alerts &amp; exclusive deals
        </p>

        {done ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-bg font-black text-sm"
          >
            ✅ You&apos;re in! We&apos;ll be in touch.
          </motion.span>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 sm:w-64 bg-white border border-bg/20 text-bg placeholder-bg/40 rounded-full px-4 py-2 text-sm font-bold outline-none focus:border-bg/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-bg text-cream font-black text-sm px-5 py-2 rounded-full hover:bg-surface transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
