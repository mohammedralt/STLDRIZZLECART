import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TIKTOK_VIDEOS = [
  'https://www.tiktok.com/@stldrizzle/video/7633194493142945038',
  'https://www.tiktok.com/@stldrizzle/video/7627286037072530702',
  'https://www.tiktok.com/@stldrizzle/video/7596439847145901343',
]

function videoId(url: string): string {
  const match = url.match(/video\/(\d+)/)
  return match ? match[1] : ''
}

export default function Videos() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const scriptId = 'tiktok-embed-script'
    document.getElementById(scriptId)?.remove()
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => { script.remove() }
  }, [])

  function scrollTo(index: number) {
    const el = scrollRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(index, TIKTOK_VIDEOS.length - 1))
    const cardWidth = el.scrollWidth / TIKTOK_VIDEOS.length
    el.scrollTo({ left: clamped * cardWidth, behavior: 'smooth' })
    setActiveIndex(clamped)
  }

  function onScroll() {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / TIKTOK_VIDEOS.length
    const index = Math.round(el.scrollLeft / cardWidth)
    setActiveIndex(index)
  }

  return (
    <section id="videos" className="overflow-hidden">

      {/* Social banner */}
      <div className="bg-surface-2 py-16 px-4 text-center overflow-hidden relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-cream leading-none select-none"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
        >
          SWEET.
          <br />
          <span className="text-pink">DRIZZLED.</span>
          <br />
          VIRAL.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted font-bold text-lg mt-6"
        >
          Follow{' '}
          <a
            href="https://www.tiktok.com/@stldrizzle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream hover:text-pink transition-colors"
          >
            @stldrizzle
          </a>
          {' '}on TikTok for all the sweet moments
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-pink font-black text-sm mt-2 uppercase tracking-widest"
        >
          #stldrizzle
        </motion.p>
      </div>

      {/* TikTok embedded videos */}
      <div className="bg-bg py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* ── Mobile: horizontal snap carousel ── */}
          <div className="md:hidden relative">
            <div
              ref={scrollRef}
              onScroll={onScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {TIKTOK_VIDEOS.map((url, i) => (
                <div
                  key={i}
                  className="flex-none snap-center"
                  style={{ width: 325 }}
                >
                  <blockquote
                    className="tiktok-embed"
                    cite={url}
                    data-video-id={videoId(url)}
                    style={{ maxWidth: 325, minWidth: 325 }}
                  >
                    <section>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        Watch on TikTok →
                      </a>
                    </section>
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Arrow controls */}
            <button
              onClick={() => scrollTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-9 h-9 rounded-full bg-surface border border-surface-2 flex items-center justify-center text-cream shadow-md disabled:opacity-30 transition-opacity"
              aria-label="Previous video"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo(activeIndex + 1)}
              disabled={activeIndex === TIKTOK_VIDEOS.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-9 h-9 rounded-full bg-surface border border-surface-2 flex items-center justify-center text-cream shadow-md disabled:opacity-30 transition-opacity"
              aria-label="Next video"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {TIKTOK_VIDEOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-200 ${i === activeIndex ? 'bg-pink w-5' : 'bg-cream/30 w-2'}`}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── Desktop: flex row ── */}
          <div className="hidden md:flex flex-wrap justify-center gap-6">
            {TIKTOK_VIDEOS.map((url, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="w-full max-w-[325px]"
              >
                <blockquote
                  className="tiktok-embed"
                  cite={url}
                  data-video-id={videoId(url)}
                  style={{ maxWidth: 325, minWidth: 325 }}
                >
                  <section>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      Watch on TikTok →
                    </a>
                  </section>
                </blockquote>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="https://www.tiktok.com/@stldrizzle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-cream text-cream hover:bg-cream hover:text-bg font-black text-sm px-6 py-3 rounded-full transition-all duration-200 uppercase tracking-wide"
            >
              🎵 See All Videos on TikTok
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
