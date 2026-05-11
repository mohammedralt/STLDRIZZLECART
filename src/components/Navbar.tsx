import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center overflow-hidden border-2 border-pink/40 group-hover:border-pink transition-colors">
              <span className="font-display text-xs text-pink leading-none text-center">STL</span>
            </div>
            <span className="font-display text-xl text-cream tracking-wide hidden sm:block">STL DRIZZLE</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold tracking-widest uppercase text-muted hover:text-cream transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              className="bg-pink hover:bg-pink-hover text-white font-black text-sm px-5 py-2.5 rounded-full transition-all duration-200 glow-pink-sm hover:glow-pink tracking-wide uppercase"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-surface-2 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold tracking-widest uppercase text-muted hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="bg-pink text-white font-black text-sm px-5 py-3 rounded-full text-center mt-2 uppercase tracking-wide"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
