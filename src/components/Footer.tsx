import { Instagram, Mail, MapPin, ShieldCheck } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-surface-2 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-surface-2 flex items-center justify-center border-2 border-pink/30 overflow-hidden">
                <span className="font-display text-sm text-pink">STL</span>
              </div>
              <div>
                <div className="font-display text-xl text-cream">STL DRIZZLE</div>
                <div className="text-pink text-xs font-black uppercase tracking-widest">Portable Dessert Cart</div>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              St. Louis's premier portable dessert cart. Bringing warm mini pancakes and ice cream donuts to events
              of all sizes with a touch of elegance.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/stldrizzlecart/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-surface-2 hover:bg-pink/20 border border-surface-2 hover:border-pink/40 flex items-center justify-center text-muted hover:text-pink transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href="mailto:stldrizzlecart@gmail.com"
                className="w-10 h-10 rounded-2xl bg-surface-2 hover:bg-pink/20 border border-surface-2 hover:border-pink/40 flex items-center justify-center text-muted hover:text-pink transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-cream text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Book Now', href: '#book', highlight: true },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm font-bold transition-colors duration-200 ${
                      link.highlight ? 'text-pink hover:text-pink-hover' : 'text-muted hover:text-cream'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-cream text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=St.+Louis,+MO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted hover:text-cream transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-surface-2 group-hover:bg-pink/10 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                    <MapPin size={14} className="text-pink" />
                  </div>
                  <span className="text-sm">St. Louis, MO</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:stldrizzlecart@gmail.com"
                  className="flex items-start gap-3 text-muted hover:text-cream transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-surface-2 group-hover:bg-pink/10 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                    <Mail size={14} className="text-pink" />
                  </div>
                  <span className="text-sm break-all">stldrizzlecart@gmail.com</span>
                </a>
              </li>

              <li>
                <div className="flex items-center gap-2 bg-green-950/50 border border-green-500/30 rounded-2xl px-3 py-2 mt-2">
                  <ShieldCheck size={14} className="text-green-400 shrink-0" />
                  <span className="text-green-300 font-black text-xs">Licensed and Insured</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-2 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">
            © {year} STL Drizzle Cart. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Made with 🍩 in St. Louis, MO
          </p>
        </div>
      </div>
    </footer>
  )
}