'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import CompliancePlaceholder from '@/components/CompliancePlaceholder'

interface FAQItem {
  id: string
  question: string
  answer: string
  isCompliance?: boolean
}

interface ProductFAQProps {
  items: FAQItem[]
}

export default function ProductFAQ({ items }: ProductFAQProps) {
  return (
    <section className="py-20 px-6" style={{ background: '#111111' }}>
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <span className="label-caps">Questions</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
            Common questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-sm px-5"
              style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <AccordionTrigger
                className="text-sm font-light py-5 hover:no-underline"
                style={{ color: '#F0EDE8' }}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                {item.isCompliance ? (
                  <CompliancePlaceholder label={item.answer} />
                ) : (
                  <p className="text-sm" style={{ color: '#8A8580', lineHeight: '1.8' }}>{item.answer}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
