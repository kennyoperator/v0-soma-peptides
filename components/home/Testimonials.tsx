import { testimonials } from '@/lib/mock-data'

interface TestimonialCardProps {
  quote: string
  name: string
  goal: string
}

export function TestimonialCard({ quote, name, goal }: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col gap-5 p-7 rounded-sm min-w-[300px] md:min-w-0"
      style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Gold quote mark */}
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
        <path d="M0 16V9.6C0 4.267 2.933 1.067 8.8 0L9.6 1.6C7.2 2.133 5.6 3.2 4.8 4.8H8V16H0ZM12 16V9.6C12 4.267 14.933 1.067 20.8 0L21.6 1.6C19.2 2.133 17.6 3.2 16.8 4.8H20V16H12Z" fill="#C8A96E" fillOpacity="0.4"/>
      </svg>
      <p className="text-sm flex-1" style={{ color: '#F0EDE8', lineHeight: '1.8' }}>
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium" style={{ color: '#8A8580' }}>{name}</span>
        <span className="w-px h-3" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <span className="label-caps" style={{ color: '#C8A96E', fontSize: '10px' }}>{goal}</span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: '#111111' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="label-caps">Client Experiences</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
            What clients are saying
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible flex md:grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} quote={t.quote} name={t.name} goal={t.goal} />
          ))}
        </div>
      </div>
    </section>
  )
}
