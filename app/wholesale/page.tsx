'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { CheckCircle2 } from 'lucide-react'

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    business: '',
    city: '',
    volume: '',
    contact: 'WhatsApp',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-5">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full self-center"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              B2B &amp; Wholesale
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              Supplying clinics and wellness professionals in Vietnam
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              Soma Solutions works with clinics, wellness centers, and licensed practitioners across Vietnam.
              Full COA documentation, local delivery, and bulk pricing available on request.
            </p>
          </div>
        </section>

        {/* B2B benefits */}
        <section className="py-12 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
              {[
                {
                  title: 'Full COA Documentation',
                  desc: 'Every batch comes with a TrustPointe Analytics COA. Verifiable at TrustPointeLIMS.com. Suitable for clinical documentation.',
                },
                {
                  title: 'Local Delivery Across Vietnam',
                  desc: 'Same-day delivery in HCMC, 2–4 day nationwide. We coordinate directly with your clinic or facility.',
                },
                {
                  title: 'Bulk Pricing on Request',
                  desc: 'Volume discounts available for regular orders. Contact us to discuss your monthly volume and we will create a custom pricing structure.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-7 flex flex-col gap-4"
                  style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
                >
                  <CheckCircle2 size={22} style={{ color: '#E8541A' }} />
                  <h3 className="text-base font-black" style={{ color: '#1A1A1A' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Inquiry form */}
            <div className="max-w-2xl mx-auto">
              <h2
                className="text-2xl font-black mb-8 text-center"
                style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}
              >
                Submit a wholesale inquiry
              </h2>

              {submitted ? (
                <div
                  className="rounded-2xl p-10 text-center flex flex-col items-center gap-5"
                  style={{ background: '#FFFFFF', border: '2px solid #E8541A' }}
                >
                  <CheckCircle2 size={40} style={{ color: '#E8541A' }} />
                  <h3 className="text-xl font-black" style={{ color: '#1A1A1A' }}>
                    Inquiry received
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    Thank you. Our team will be in touch within 24 hours via your preferred contact method.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8 flex flex-col gap-5"
                  style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6B7280' }}>
                        Your Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: '2px solid #E5E7EB', background: '#F9F9F9', color: '#1A1A1A' }}
                        placeholder="Full name"
                      />
                    </div>
                    {/* Business */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6B7280' }}>
                        Business / Clinic *
                      </label>
                      <input
                        name="business"
                        value={form.business}
                        onChange={handleChange}
                        required
                        className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: '2px solid #E5E7EB', background: '#F9F9F9', color: '#1A1A1A' }}
                        placeholder="Clinic or business name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* City */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6B7280' }}>
                        City *
                      </label>
                      <input
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: '2px solid #E5E7EB', background: '#F9F9F9', color: '#1A1A1A' }}
                        placeholder="e.g. Ho Chi Minh City"
                      />
                    </div>
                    {/* Volume */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6B7280' }}>
                        Monthly Volume Estimate
                      </label>
                      <select
                        name="volume"
                        value={form.volume}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: '2px solid #E5E7EB', background: '#F9F9F9', color: '#1A1A1A' }}
                      >
                        <option value="">Select volume</option>
                        <option>1–5 vials/month</option>
                        <option>5–20 vials/month</option>
                        <option>20–50 vials/month</option>
                        <option>50+ vials/month</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact preference */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6B7280' }}>
                      Preferred Contact Method *
                    </label>
                    <select
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ border: '2px solid #E5E7EB', background: '#F9F9F9', color: '#1A1A1A' }}
                    >
                      <option>WhatsApp</option>
                      <option>Telegram</option>
                      <option>Email</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6B7280' }}>
                      Message (optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{ border: '2px solid #E5E7EB', background: '#F9F9F9', color: '#1A1A1A' }}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button type="submit" className="btn-primary py-4 text-sm mt-2">
                    Submit Inquiry
                  </button>

                  <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
                    We will respond within 24 hours via your preferred contact method.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <CTASection
          headline="Prefer to talk first?"
          sub="Message us directly on WhatsApp or Telegram and let us know you are inquiring about wholesale."
          cta="WhatsApp Us →"
        />
      </main>
      <Footer />
    </>
  )
}
