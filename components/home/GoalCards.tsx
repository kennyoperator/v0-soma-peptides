import Link from 'next/link'

const goals = [
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    description: 'Metabolic support for body recomposition',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8.5 3 6 6 6 9c0 4.5 6 12 6 12s6-7.5 6-12c0-3-2.5-6-6-6z" stroke="#C8A96E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="12" cy="9" r="2" stroke="#C8A96E" strokeWidth="1.25"/>
      </svg>
    ),
  },
  {
    id: 'recovery',
    title: 'Recovery',
    description: 'Joint, tissue, and performance repair',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="#C8A96E" strokeWidth="1.25"/>
      </svg>
    ),
  },
  {
    id: 'glow',
    title: 'Skin & Glow',
    description: 'Cellular rejuvenation and radiance',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="#C8A96E" strokeWidth="1.25"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#C8A96E" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'vitality',
    title: 'Vitality & Longevity',
    description: 'Energy, cellular health, long-game wellness',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" stroke="#C8A96E" strokeWidth="1.25" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
]

interface GoalCardProps {
  title: string
  description: string
  icon: React.ReactNode
  goalId: string
}

function GoalCard({ title, description, icon, goalId }: GoalCardProps) {
  return (
    <Link href={`/quiz?goal=${goalId}`}>
      <div
        className="group relative p-6 rounded-sm cursor-pointer transition-all duration-300"
        style={{
          background: '#161616',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ border: '1px solid rgba(200,169,110,0.35)' }} />
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-sm" style={{ background: 'rgba(200,169,110,0.08)' }}>
            {icon}
          </div>
          <div>
            <h3 className="text-base font-light mb-1.5" style={{ color: '#F0EDE8', letterSpacing: '-0.01em' }}>{title}</h3>
            <p className="text-sm" style={{ color: '#8A8580', lineHeight: '1.6' }}>{description}</p>
          </div>
          <span className="text-xs mt-1" style={{ color: '#C8A96E', letterSpacing: '0.08em' }}>Explore →</span>
        </div>
      </div>
    </Link>
  )
}

export default function GoalCards() {
  return (
    <section className="py-24 px-6" style={{ background: '#111111' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="label-caps">Find Your Focus</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
            What are you optimizing for?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <GoalCard key={goal.id} title={goal.title} description={goal.description} icon={goal.icon} goalId={goal.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
