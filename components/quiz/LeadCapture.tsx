'use client'

import { useState } from 'react'

interface LeadCaptureProps {
  onSubmit: (email: string) => void
  onSkip: () => void
}

export default function LeadCapture({ onSubmit, onSkip }: LeadCaptureProps) {
  const [email, setEmail] = useState('')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="label-caps" style={{ color: '#C8A96E' }}>Your Protocol is Ready</span>
        <h2 className="text-2xl md:text-3xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
          Your personalized protocol is ready.
        </h2>
        <p className="text-sm" style={{ color: '#8A8580', lineHeight: '1.7' }}>
          Enter your email to receive your results and a protocol guide.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-3.5 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-[#C8A96E]"
          style={{
            background: '#161616',
            border: '1px solid rgba(255,255,255,0.10)',
            color: '#F0EDE8',
          }}
        />
        <button
          onClick={() => onSubmit(email)}
          disabled={!email}
          className="btn-gold w-full py-3.5 rounded-sm text-sm tracking-wider uppercase disabled:opacity-40"
        >
          See My Results →
        </button>
      </div>

      <button
        onClick={onSkip}
        className="text-xs text-center transition-colors hover:text-[#C8A96E]"
        style={{ color: '#8A8580' }}
      >
        Skip and see results
      </button>
    </div>
  )
}
