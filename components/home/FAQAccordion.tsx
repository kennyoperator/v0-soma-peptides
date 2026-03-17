'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function FAQAccordion({
  items,
  defaultOpen,
}: {
  items: FAQItem[]
  defaultOpen?: string
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl overflow-hidden"
          style={{
            background: '#FFFFFF',
            border: open === item.id ? '2px solid #E8541A' : '2px solid #E5E7EB',
          }}
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
  )
}
