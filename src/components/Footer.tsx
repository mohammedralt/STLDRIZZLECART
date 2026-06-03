import { Instagram, Mail, MapPin, Music2 } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  const navLinks = [
    { label: 'Menu', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Book Now', href: '#book' },
  ]

  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/stldrizzle/',
      icon: <Instagram size={17} />,
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@stldrizzle',
      icon: <Music2 size={17} />,
    },
    {
      label: 'Email',
      href: 'mailto:stldrizzlecart@gmail.com',
      icon: <Mail size={17} />,
    },
  ]

  return (
    <footer className="bg-surface-2 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <div className="font-display text-3xl text-cream tracking-wide leading-none mb-1">
                STL DRIZZLE
              </div>
              <div className="text-pink text-xs font-black uppercase tracking-widest">
                Portable Dessert Cart · St. Louis, MO
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              St. Louis's premier portable dessert cart. Bringing warm mini pancakes and ice cream
              donuts to events of all sizes — licensed, insured, and made fresh.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-cream/20 hover:border-pink hover:text-pink flex items-center justify-center text-cream/60 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-black text-cream text-xs uppercase tracking-widest mb-5">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-muted hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-cream text-xs uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=St.+Louis,+MO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-cream transition-colors text-sm font-bold"
                >
                  <MapPin size={14} className="text-pink shrink-0" />
                  St. Louis, MO
                </a>
              </li>
              <li>
                <a
                  href="mailto:stldrizzlecart@gmail.com"
                  className="flex items-center gap-3 text-muted hover:text-cream transition-colors text-sm font-bold break-all"
                >
                  <Mail size={14} className="text-pink shrink-0" />
                  stldrizzlecart@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@stldrizzle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-cream transition-colors text-sm font-bold"
                >
                  <Music2 size={14} className="text-pink shrink-0" />
                  @stldrizzle
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-muted text-xs">© {year} STL Drizzle Cart. All rights reserved.</p>
          <p className="text-muted text-xs">Made with 🍩 in St. Louis, MO</p>
        </div>
      </div>
    </footer>
  )
}
