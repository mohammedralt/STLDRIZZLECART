import { lazy, Suspense } from 'react'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignupStrip from './components/SignupStrip'

// Swig-mirrored section order:
// Hero → SignupStrip → Menu (Services) → About → Gallery → Videos → Reviews → BookingForm
const Hero = lazy(() => import('./components/Hero'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Gallery = lazy(() => import('./components/Gallery'))
const Videos = lazy(() => import('./components/Videos'))
const Reviews = lazy(() => import('./components/Reviews'))
const BookingForm = lazy(() => import('./components/BookingForm'))

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-cream font-body">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#B82733',
            color: '#FBF3E2',
            border: '1px solid #FFC93C',
          },
        }}
      />

      <Navbar />

      <main>
        <Suspense fallback={<div />}>
          <Hero />
          <SignupStrip />
          <Services />
          <About />
          <Gallery />
          <Videos />
          <Reviews />
          <BookingForm />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
