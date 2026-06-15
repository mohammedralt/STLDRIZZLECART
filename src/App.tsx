import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Homepage sections
const Hero = lazy(() => import('./components/Hero'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Videos = lazy(() => import('./components/Videos'))
const BookingForm = lazy(() => import('./components/BookingForm'))

// Separate tab pages
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'))

const toastStyle = {
  style: {
    background: '#B82733',
    color: '#FBF3E2',
    border: '1px solid #FFC93C',
  },
}

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const sectionId = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (!sectionId) return
    window.history.replaceState({}, '')
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(sectionId)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 60
        window.scrollTo({ top, behavior: 'smooth' })
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100)
      }
    }
    setTimeout(tryScroll, 50)
  }, [location.state])

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Videos />
      <BookingForm />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-cream font-body">
      <Toaster position="top-center" toastOptions={toastStyle} />
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
