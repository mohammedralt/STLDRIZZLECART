import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Loader2, CheckCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

type FormData = {
  fullName: string
  email: string
  phone: string
  preferredContact: string
  eventType: string
  eventDate: string
  startTime: string
  duration: string
  estimatedGuests: number
  eventLocation: string
  services: string[]
  notes: string
}

const inputClass =
  'w-full bg-bg border border-surface-2 hover:border-pink/30 focus:border-pink/60 focus:ring-2 focus:ring-pink/10 text-cream placeholder-muted/50 rounded-2xl px-4 py-3 text-sm font-body transition-all duration-200 outline-none'

const labelClass = 'block text-xs font-black uppercase tracking-widest text-muted mb-1.5'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: { services: [] },
  })

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'xjgewnkj'

  const onSubmit = async (data: FormData) => {
    setLoading(true)

    try {
      // 1. Save to Supabase
      const { error: dbError } = await supabase.from('bookings').insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          preferred_contact: data.preferredContact,
          event_type: data.eventType,
          event_date: data.eventDate,
          start_time: data.startTime,
          duration: data.duration,
          estimated_guests: Number(data.estimatedGuests),
          event_location: data.eventLocation,
          services: data.services,
          notes: data.notes || null,
        },
      ])

      if (dbError) {
        console.error('Supabase error:', dbError)
        // Don't block — still try Formspree
      }

      // 2. Send via Formspree
      const formspreeBody = new FormData()
      formspreeBody.append('_subject', `New STL Drizzle Inquiry: ${data.fullName}`)
      formspreeBody.append('_replyto', data.email)
      formspreeBody.append('Full Name', data.fullName)
      formspreeBody.append('Email', data.email)
      formspreeBody.append('Phone', data.phone)
      formspreeBody.append('Preferred Contact', data.preferredContact)
      formspreeBody.append('Event Type', data.eventType)
      formspreeBody.append('Event Date', data.eventDate)
      formspreeBody.append('Start Time', data.startTime)
      formspreeBody.append('Duration', data.duration)
      formspreeBody.append('Estimated Guests', String(data.estimatedGuests))
      formspreeBody.append('Event Location', data.eventLocation)
      formspreeBody.append('Services', data.services.join(', '))
      if (data.notes) formspreeBody.append('Notes', data.notes)

      const formspreeRes = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formspreeBody,
        headers: { Accept: 'application/json' },
      })

      if (!formspreeRes.ok) {
        throw new Error('Formspree submission failed')
      }

      setSubmitted(true)
      toast.success('Inquiry Sent Successfully! We\'ll be in touch soon 🍩')
    } catch (err) {
      console.error('Booking error:', err)
      toast.error('Something went wrong. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="book" className="py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="bg-surface border border-green-500/20 rounded-4xl p-12 flex flex-col items-center gap-6"
          >
            <CheckCircle size={56} className="text-green-400" />
            <h2 className="font-display text-4xl text-cream">We Got Your Booking!</h2>
            <p className="text-muted text-lg leading-relaxed">
              Thanks for reaching out! We will contact you within 24 hours to confirm details and talk
              about making your event extra sweet. 🎉
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-pink hover:bg-pink-hover text-bg font-black text-sm px-6 py-3 rounded-full transition-all duration-200 uppercase tracking-wide"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="book" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B2500]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-pink text-xs font-black uppercase tracking-widest">Let's Make It Sweet</span>
          <h2 className="font-display text-5xl sm:text-6xl text-cream mt-2">Book STL Drizzle</h2>
          <p className="text-muted mt-3 text-lg max-w-md mx-auto">
            Complete this form to inquire about booking our dessert services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-surface border border-surface-2 rounded-4xl p-6 sm:p-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {/* Row 1 — Name & Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  {...register('fullName', { required: 'Full name is required' })}
                  placeholder="Jane Smith"
                  className={inputClass}
                />
                {errors.fullName && <p className="text-pink text-xs mt-1">{errors.fullName.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Email Address *</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                  })}
                  type="email"
                  placeholder="jane@example.com"
                  className={inputClass}
                />
                {errors.email && <p className="text-pink text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            {/* Row 2 — Phone & Preferred Contact */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Phone Number *</label>
                <input
                  {...register('phone', { required: 'Phone number is required' })}
                  type="tel"
                  placeholder="(314) 555-0000"
                  className={inputClass}
                />
                {errors.phone && <p className="text-pink text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Preferred Contact *</label>
                <select
                  {...register('preferredContact', { required: 'Select a contact method' })}
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>Select method...</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone Call</option>
                  <option value="Text">Text Message</option>
                </select>
                {errors.preferredContact && <p className="text-pink text-xs mt-1">{errors.preferredContact.message}</p>}
              </div>
            </div>

            {/* Row 3 — Event Type */}
            <div>
              <label className={labelClass}>Type of Event *</label>
              <input
                {...register('eventType', { required: 'Event type is required' })}
                placeholder="e.g. Birthday Party, Wedding, Corporate Event, Festival..."
                className={inputClass}
              />
              {errors.eventType && <p className="text-pink text-xs mt-1">{errors.eventType.message}</p>}
            </div>

            {/* Row 4 — Date, Time, Duration, Guests */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="sm:col-span-1">
                <label className={labelClass}>Event Date *</label>
                <input
                  {...register('eventDate', { required: 'Event date is required' })}
                  type="date"
                  className={inputClass}
                />
                {errors.eventDate && <p className="text-pink text-xs mt-1">{errors.eventDate.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Start Time *</label>
                <input
                  {...register('startTime', { required: 'Start time is required' })}
                  type="time"
                  className={inputClass}
                />
                {errors.startTime && <p className="text-pink text-xs mt-1">{errors.startTime.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Duration *</label>
                <select
                  {...register('duration', { required: 'Select duration' })}
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>Select...</option>
                  <option value="1 hour">1 hour</option>
                  <option value="2 hours">2 hours</option>
                  <option value="3 hours">3 hours</option>
                  <option value="4 hours">4 hours</option>
                  <option value="4+ hours">4+ hours</option>
                </select>
                {errors.duration && <p className="text-pink text-xs mt-1">{errors.duration.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Est. Guests *</label>
                <input
                  {...register('estimatedGuests', {
                    required: 'Required',
                    min: { value: 1, message: 'At least 1' },
                  })}
                  type="number"
                  placeholder="50"
                  className={inputClass}
                />
                {errors.estimatedGuests && <p className="text-pink text-xs mt-1">{errors.estimatedGuests.message}</p>}
              </div>
            </div>

            {/* Row 5 — Location */}
            <div>
              <label className={labelClass}>Event Location / Address *</label>
              <input
                {...register('eventLocation', { required: 'Event location is required' })}
                placeholder="123 Main St, St. Louis, MO 63101"
                className={inputClass}
              />
              {errors.eventLocation && <p className="text-pink text-xs mt-1">{errors.eventLocation.message}</p>}
            </div>

            {/* Row 6 — Services */}
            <div>
              <label className={labelClass}>Services Requested *</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { value: 'Mini Pancakes', emoji: '🥞' },
                  { value: 'Ice Cream Donuts', emoji: '🍩' },
                  { value: 'Bubble Waffles', emoji: '🧇' },
                  { value: 'All', emoji: '✨' },
                ].map(({ value, emoji }) => {
                  const checked = watch('services')?.includes(value)
                  return (
                    <label
                      key={value}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 cursor-pointer transition-all duration-200 ${
                        checked
                          ? 'border-pink/60 bg-pink/10 text-cream'
                          : 'border-surface-2 hover:border-pink/30 text-muted'
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={value}
                        {...register('services', { required: 'Select at least one service' })}
                        className="sr-only"
                      />
                      <span className="text-xl">{emoji}</span>
                      <span className="font-black text-sm">{value}</span>
                    </label>
                  )
                })}
              </div>
              {errors.services && <p className="text-pink text-xs mt-1">{errors.services.message}</p>}
            </div>

            {/* Row 7 — Notes */}
            <div>
              <label className={labelClass}>Additional Notes</label>
              <textarea
                {...register('notes')}
                rows={3}
                placeholder="Any special requests, dietary needs, setup requirements..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink hover:bg-pink-hover disabled:opacity-60 disabled:cursor-not-allowed text-bg font-black text-base px-8 py-4 rounded-full transition-all duration-200 glow-pink flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending Inquiry...
                </>
              ) : (
                'Send My Inquiry 🍩'
              )}
            </button>

            <p className="text-center text-muted text-xs">
              We'll respond within 24 hours. Licensed & Insured for your peace of mind.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
