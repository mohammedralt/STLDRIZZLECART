import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAVBAR_HEIGHT = 60

const links = [
  { label: 'Menu', href: '/#services', sectionId: 'services' },
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Gallery', href: '/gallery', sectionId: null },
  { label: 'Reviews', href: '/reviews', sectionId: null },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
    e.preventDefault()
    setMobileOpen(false)
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
        window.scrollTo({ top, behavior: 'smooth' })
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md shadow-md shadow-black/20' : 'bg-transparent'}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-14">

          {/* Logo + Nav links — centered as one group */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src="/logo.jpg"
                alt="STL Drizzle Cart"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-display font-black text-base text-cream tracking-wide">
                STL DRIZZLE
              </span>
            </Link>
            <a href="/#services" onClick={(e) => handleAnchorClick(e, 'services')} className="text-sm font-bold tracking-wide text-cream/85 hover:text-cream transition-colors duration-200">Menu</a>
            <a href="/#about" onClick={(e) => handleAnchorClick(e, 'about')} className="text-sm font-bold tracking-wide text-cream/85 hover:text-cream transition-colors duration-200">About</a>
            <Link to="/gallery" className={`text-sm font-bold tracking-wide transition-colors duration-200 ${location.pathname === '/gallery' ? 'text-pink' : 'text-cream/85 hover:text-cream'}`}>Gallery</Link>
            <Link to="/reviews" className={`text-sm font-bold tracking-wide transition-colors duration-200 ${location.pathname === '/reviews' ? 'text-pink' : 'text-cream/85 hover:text-cream'}`}>Reviews</Link>
          </div>

          {/* Mobile logo */}
          <Link to="/" className="md:hidden flex items-center gap-2">
            <img src="/logo.jpg" alt="STL Drizzle Cart" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-display font-black text-base text-cream">STL DRIZZLE</span>
          </Link>

          {/* Book Now — absolute far right */}
          <div className="absolute right-0 flex items-center gap-3">
            <a
              href="/#book"
              onClick={(e) => handleAnchorClick(e, 'book')}
              className="hidden md:inline-flex border-2 border-cream text-cream hover:bg-cream hover:text-bg font-black text-xs px-4 py-1.5 rounded-full transition-all duration-200 uppercase tracking-wide"
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
                link.sectionId ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.sectionId!)}
                    className="text-sm font-bold tracking-widest uppercase text-cream/80 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
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
                onClick={(e) => handleAnchorClick(e, 'book')}
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
