'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqItems = [
  {
    id: 'q1',
    question: 'Are these products safe?',
    answer: '[COMPLIANCE PLACEHOLDER — Insert reviewed safety copy here. Consult with a licensed healthcare provider before beginning any protocol.]',
    isCompliance: true,
  },
  {
    id: 'q2',
    question: 'Do I need a prescription?',
    answer: '[COMPLIANCE PLACEHOLDER — Insert reviewed prescription/access requirement copy here.]',
    isCompliance: true,
  },
  {
    id: 'q3',
    question: 'How does the assessment work?',
    answer: 'The assessment is a 7-question quiz designed to understand your primary wellness goal, activity level, timeline, and priorities. Based on your answers, our algorithm maps your responses to the most relevant formulation in our protocol suite. It takes about 2 minutes and requires no account or login.',
  },
  {
    id: 'q4',
    question: "What's the difference between the products?",
    answer: 'Each formulation targets a specific goal: Retatrutide is designed for metabolic and body composition support. Glow Peptide focuses on cellular rejuvenation and skin health. NAD+ supports cellular energy and long-term vitality. BPC + TB is chosen for recovery, joint support, and tissue repair.',
  },
  {
    id: 'q5',
    question: 'How do I get started?',
    answer: 'Start by taking the 7-question assessment. You\'ll receive a personalized protocol recommendation based on your goals. From there, you can explore the recommended product page and connect with a provider for guided onboarding.',
  },
]

interface AccordionFAQProps {
  items?: typeof faqItems
}

export default function AccordionFAQ({ items = faqItems }: AccordionFAQProps) {
  return (
    <section id="faq" className="py-24 px-6" style={{ background: '#0A0A0A' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <span className="label-caps">Questions</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
            Frequently asked
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
              <AccordionTrigger className="text-sm font-light py-5 hover:no-underline" style={{ color: '#F0EDE8', letterSpacing: '-0.01em' }}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                {item.isCompliance ? (
                  <div className="compliance-box">{item.answer}</div>
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
