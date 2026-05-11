import { lazy, Suspense } from 'react'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy-loaded sections (better performance)
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Gallery = lazy(() => import('./components/Gallery'))
const Reviews = lazy(() => import('./components/Reviews'))
const BookingForm = lazy(() => import('./components/BookingForm'))

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-cream font-body">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1c130f',
            color: '#fdf5e6',
            border: '1px solid #2d1b14',
          },
        }}
      />

      <Navbar />

      <main>
        <Suspense fallback={<div />}>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Reviews />
          <BookingForm />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}