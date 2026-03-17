'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/copy'

export default function AccordionFAQ() {
  const [open, setOpen] = useState<string | null>('q1')

  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#F9F9F9' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{ background: '#FEF0E9', color: '#E8541A' }}
          >
            FAQ
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-black text-balance" style={{ letterSpacing: '-0.025em', color: '#1A1A1A' }}>
            Frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden"
              style={{ background: '#FFFFFF', border: open === item.id ? '2px solid #E8541A' : '2px solid #E5E7EB' }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 transition-colors"
                onClick={() => setOpen(open === item.id ? null : item.id)}
                aria-expanded={open === item.id}
              >
                <span className="text-sm font-bold leading-snug" style={{ color: '#1A1A1A' }}>
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: '#E8541A',
                    flexShrink: 0,
                    transform: open === item.id ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>
              {open === item.id && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280', lineHeight: '1.8' }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
