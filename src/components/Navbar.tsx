import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Menu', href: '/#services', external: true },
  { label: 'About', href: '/#about', external: true },
  { label: 'Gallery', href: '/gallery', external: false },
  { label: 'Reviews', href: '/reviews', external: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur-md shadow-md shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">

          {/* Logo — left */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="STL Drizzle Cart"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-display text-lg text-cream tracking-wide hidden sm:block">
              STL DRIZZLE
            </span>
          </Link>

          {/* Nav links — center */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            <a href="/#services" className="text-sm font-bold tracking-widest uppercase text-cream/80 hover:text-cream transition-colors duration-200">Menu</a>
            <a href="/#about" className="text-sm font-bold tracking-widest uppercase text-cream/80 hover:text-cream transition-colors duration-200">About</a>
            <Link to="/gallery" className={`text-sm font-bold tracking-widest uppercase transition-colors duration-200 ${location.pathname === '/gallery' ? 'text-pink' : 'text-cream/80 hover:text-cream'}`}>Gallery</Link>
            <Link to="/reviews" className={`text-sm font-bold tracking-widest uppercase transition-colors duration-200 ${location.pathname === '/reviews' ? 'text-pink' : 'text-cream/80 hover:text-cream'}`}>Reviews</Link>
          </nav>

          {/* Book Now — right */}
          <div className="flex items-center justify-end gap-3">
            <a
              href="/#book"
              className="hidden md:inline-flex border-2 border-cream text-cream hover:bg-cream hover:text-bg font-black text-sm px-5 py-2 rounded-full transition-all duration-200 uppercase tracking-wide"
            >
              Book Now
            </a>
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
              {links.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-bold tracking-widest uppercase text-cream/80 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                      location.pathname === link.href ? 'text-pink' : 'text-cream/80 hover:text-cream'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="/#book"
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
