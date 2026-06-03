import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Menu', href: '#services' },
  { label: 'About', href: '#about' },
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
        scrolled ? 'bg-surface/95 backdrop-blur-md shadow-md shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three-column layout matching Swig: logo | links | cta */}
        <div className="grid grid-cols-3 items-center h-16">

          {/* Logo — left */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-cream/10 border border-cream/30 flex items-center justify-center overflow-hidden group-hover:border-pink/60 transition-colors">
              <span className="font-display text-[10px] text-cream leading-none">STL</span>
            </div>
            <span className="font-display text-lg text-cream tracking-wide hidden sm:block">
              STL DRIZZLE
            </span>
          </a>

          {/* Nav links — centered */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold tracking-widest uppercase text-cream/80 hover:text-cream transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book Now CTA — right */}
          <div className="flex items-center justify-end gap-3">
            <a
              href="#book"
              className="hidden md:inline-flex border-2 border-cream text-cream hover:bg-cream hover:text-bg font-black text-sm px-5 py-2 rounded-full transition-all duration-200 uppercase tracking-wide"
            >
              Book Now
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden text-cream p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
                  className="text-sm font-bold tracking-widest uppercase text-cream/80 hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="border-2 border-cream text-cream font-black text-sm px-5 py-3 rounded-full text-center mt-2 uppercase tracking-wide hover:bg-cream hover:text-bg transition-all"
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
