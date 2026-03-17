import { FAQ_ITEMS } from '@/lib/copy'
import FAQAccordion from '@/components/home/FAQAccordion'

export default function AccordionFAQ() {
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
        <FAQAccordion items={FAQ_ITEMS} defaultOpen="q1" />
      </div>
    </section>
  )
}
