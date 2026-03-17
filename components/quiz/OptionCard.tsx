'use client'

interface OptionCardProps {
  label: string
  selected: boolean
  onClick: () => void
}

export default function OptionCard({ label, selected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-5 py-4 rounded-sm transition-all duration-200 focus:outline-none"
      style={{
        background: selected ? 'rgba(200,169,110,0.10)' : '#161616',
        border: selected ? '1px solid rgba(200,169,110,0.55)' : '1px solid rgba(255,255,255,0.07)',
        color: selected ? '#F0EDE8' : '#8A8580',
        minHeight: 52,
      }}
    >
      <div className="flex items-center gap-4">
        {/* Select indicator */}
        <span
          className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center transition-all duration-200"
          style={{
            border: selected ? '1px solid #C8A96E' : '1px solid rgba(255,255,255,0.15)',
            background: selected ? '#C8A96E' : 'transparent',
          }}
        >
          {selected && (
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <circle cx="4" cy="4" r="2.5" fill="#0A0A0A" />
            </svg>
          )}
        </span>
        <span className="text-sm font-light" style={{ lineHeight: '1.5' }}>{label}</span>
      </div>
    </button>
  )
}
