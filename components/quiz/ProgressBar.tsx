'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100)

  return (
    <div className="w-full flex items-center gap-4">
      <div className="flex-1 h-px relative" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <motion.div
          className="absolute top-0 left-0 h-px"
          style={{ background: '#C8A96E' }}
          initial={{ width: '0%' }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
      <span className="text-xs shrink-0 tabular-nums" style={{ color: '#8A8580', letterSpacing: '0.04em' }}>
        {current} of {total}
      </span>
    </div>
  )
}
