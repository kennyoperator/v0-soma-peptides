export default function ConsultationFallback() {
  return (
    <section className="py-12 px-6" style={{ background: '#0A0A0A' }}>
      <div className="max-w-[480px] mx-auto flex flex-col items-center gap-5 text-center">

        {/* Divider */}
        <div className="w-12" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

        <p className="text-sm" style={{ color: '#8A8580' }}>
          Prefer to connect another way?
        </p>

        {/* Ghost pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@PLACEHOLDER.com"
            className="text-sm px-5 py-2.5 rounded-full transition-colors hover:text-[#C8A96E]"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#F0EDE8',
            }}
          >
            Send us a message
          </a>
          <a
            href="/#faq"
            className="text-sm px-5 py-2.5 rounded-full transition-colors hover:text-[#C8A96E]"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#F0EDE8',
            }}
          >
            View FAQ first
          </a>
        </div>

        <p className="text-xs" style={{ color: '#8A8580' }}>
          Most people hear back within 24 hours.
        </p>

      </div>
    </section>
  )
}
