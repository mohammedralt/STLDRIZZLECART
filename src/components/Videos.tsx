import { useEffect } from 'react'
import { motion } from 'framer-motion'

// Add or remove entries freely — the grid adapts automatically.
const TIKTOK_VIDEOS = [
  'https://www.tiktok.com/@stldrizzle/video/7633194493142945038',
  'https://www.tiktok.com/@stldrizzle/video/7627286037072530702',
]

function videoId(url: string): string {
  const match = url.match(/video\/(\d+)/)
  return match ? match[1] : ''
}

export default function Videos() {
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

  return (
    <section id="videos" className="overflow-hidden">

      {/* ── Social banner — mirrors Swig's "DIRTY. DELICIOUS. VIRAL." strip ── */}
      <div className="bg-surface-2 py-16 px-4 text-center overflow-hidden relative">
        {/* Big bold statement — the headline IS the design */}
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

        {/* Hashtag — mirrors Swig's #swigtok */}
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

      {/* ── TikTok embedded videos ── */}
      <div className="bg-bg py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
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
