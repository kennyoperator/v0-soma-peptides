import Link from 'next/link'

const goals = [
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    description: 'GLP-1 and triple agonist peptides for metabolic support and body recomposition research',
    emoji: null,
  },
  {
    id: 'recovery',
    title: 'Recovery',
    description: 'BPC-157 and TB-500 for joint, tissue, and performance repair research',
    emoji: null,
  },
  {
    id: 'glow',
    title: 'Skin & Glow',
    description: 'GHK-Cu + BPC-157 + TB-500 blend for cellular rejuvenation and radiance',
    emoji: null,
  },
  {
    id: 'vitality',
    title: 'Vitality & Longevity',
    description: 'Energy, cognitive clarity, and long-game cellular health support',
    emoji: null,
  },
]

export default function GoalCards() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#F9F9F9' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{ background: '#FEF0E9', color: '#E8541A' }}
          >
            Find Your Focus
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-black text-balance" style={{ letterSpacing: '-0.025em', color: '#1A1A1A' }}>
            What are you optimizing for?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <Link key={goal.id} href={`/products?goal=${goal.id}`}>
              <div
                className="group p-7 rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-primary"
                style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-black" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                    {goal.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {goal.description}
                  </p>
                  <span className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: '#E8541A' }}>
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
