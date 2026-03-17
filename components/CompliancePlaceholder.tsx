interface CompliancePlaceholderProps {
  label?: string
}

const DEFAULT_COMPLIANCE = 'These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. For investigational use only. A licensed provider consultation is required prior to dispensing.'

export default function CompliancePlaceholder({ label }: CompliancePlaceholderProps) {
  return (
    <div className="compliance-box flex items-start gap-3">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
        <rect x="0.5" y="0.5" width="13" height="13" rx="2.5" stroke="#C8A96E" strokeOpacity="0.5" strokeDasharray="3 2" />
        <circle cx="7" cy="7" r="1.5" fill="#C8A96E" fillOpacity="0.5" />
      </svg>
      <span>{label && label.length > 0 ? label : DEFAULT_COMPLIANCE}</span>
    </div>
  )
}
