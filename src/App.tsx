import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

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
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}
