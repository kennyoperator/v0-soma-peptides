'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface QuizCardProps {
  children: React.ReactNode
  step: number
}

export default function QuizCard({ children, step }: QuizCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.28, ease: 'easeInOut' }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
