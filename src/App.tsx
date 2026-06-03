import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
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
