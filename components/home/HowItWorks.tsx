import { HOW_IT_WORKS_STEPS } from '@/lib/copy'
import { MessageSquare, Package, Zap } from 'lucide-react'

const ICONS = [MessageSquare, Zap, Package]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#E8541A' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white" style={{ letterSpacing: '-0.025em' }}>
            How to Order
          </h2>
          <p className="mt-3 text-base text-white/75">
            Simple. Fast. Discreet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line desktop */}
          <div
            className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px"
            style={{ background: 'rgba(255,255,255,0.25)' }}
          />

          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center gap-5 p-8 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center relative z-10"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)' }}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <div
                  className="text-xs font-black uppercase tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  Step {step.number}
                </div>
                <h3 className="text-lg font-bold text-white" style={{ letterSpacing: '-0.01em' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
