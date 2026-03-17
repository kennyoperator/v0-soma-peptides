import { TRUST_BADGES } from '@/lib/copy'

export default function TrustStrip() {
  return (
    <section
      className="py-4 overflow-hidden"
      style={{ background: '#E8541A' }}
    >
      <div className="flex md:justify-center overflow-x-auto">
        <div className="flex items-center min-w-max">
          {TRUST_BADGES.map((item, i) => (
            <div key={item.label} className="flex items-center">
              <div className="flex items-center gap-2.5 px-6 py-1 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                  {item.label}
                </span>
              </div>
              {i < TRUST_BADGES.length - 1 && (
                <span className="w-px h-4 shrink-0 bg-white/25" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
