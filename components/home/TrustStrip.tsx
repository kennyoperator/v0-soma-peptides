const trustItems = [
  { label: 'Lab-Verified Formulations' },
  { label: 'Provider-Guided Protocols' },
  { label: 'Discreet Shipping' },
  { label: 'Research-Referenced' },
  { label: 'Premium Peptide Quality' },
]

export default function TrustStrip() {
  return (
    <section style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }} className="py-5 overflow-hidden">
      <div className="flex md:justify-center gap-0 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-0 min-w-max">
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center">
              <div className="flex items-center gap-3 px-6 py-2 whitespace-nowrap">
                {/* Gold dot */}
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#C8A96E' }} />
                <span className="text-xs" style={{ color: '#8A8580', letterSpacing: '0.08em' }}>
                  {item.label}
                </span>
              </div>
              {i < trustItems.length - 1 && (
                <span className="w-px h-4 shrink-0" style={{ background: 'rgba(255,255,255,0.07)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
