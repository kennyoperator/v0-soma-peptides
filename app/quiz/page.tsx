'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from '@/components/layout/Nav'
import ProgressBar from '@/components/quiz/ProgressBar'
import OptionCard from '@/components/quiz/OptionCard'
import LeadCapture from '@/components/quiz/LeadCapture'
import { quizQuestions } from '@/lib/mock-data'
import { getPrimaryRecommendation, getSecondaryRecommendation, getWhyBullets } from '@/lib/quiz-logic'
import { ChevronLeft } from 'lucide-react'

type QuizState = {
  currentStep: number
  answers: Record<number, string>
  email?: string
  showLeadCapture: boolean
  complete: boolean
}

const TOTAL_STEPS = quizQuestions.length

function QuizContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const preGoal = searchParams.get('goal')

  const [state, setState] = useState<QuizState>({
    currentStep: 1,
    answers: {},
    showLeadCapture: false,
    complete: false,
  })
  const [direction, setDirection] = useState(1)

  // Pre-fill Q1 from ?goal= param
  useEffect(() => {
    if (!preGoal) return
    const goalMap: Record<string, string> = {
      'weight-loss': 'Lose weight / change body composition',
      recovery: 'Repair and recover (joints, tissue, performance)',
      glow: 'Look and feel better in my skin',
      vitality: 'Boost energy, longevity, and overall vitality',
    }
    const answer = goalMap[preGoal]
    if (answer) {
      setState((prev) => ({
        ...prev,
        answers: { ...prev.answers, 1: answer },
        currentStep: 2,
      }))
    }
  }, [preGoal])

  const currentQuestion = quizQuestions.find((q) => q.id === state.currentStep)

  function handleSelect(option: string) {
    const newAnswers = { ...state.answers, [state.currentStep]: option }
    setState((prev) => ({ ...prev, answers: newAnswers }))

    setTimeout(() => {
      setDirection(1)
      if (state.currentStep >= TOTAL_STEPS) {
        setState((prev) => ({ ...prev, answers: newAnswers, showLeadCapture: true }))
      } else {
        setState((prev) => ({ ...prev, answers: newAnswers, currentStep: prev.currentStep + 1 }))
      }
    }, 300)
  }

  function handleBack() {
    setDirection(-1)
    if (state.showLeadCapture) {
      setState((prev) => ({ ...prev, showLeadCapture: false }))
    } else if (state.currentStep > 1) {
      setState((prev) => ({ ...prev, currentStep: prev.currentStep - 1 }))
    }
  }

  function finishQuiz(email?: string) {
    const primary = getPrimaryRecommendation(state.answers)
    const secondary = getSecondaryRecommendation(primary, state.answers)
    const bullets = getWhyBullets(primary, state.answers)

    const result = {
      primary,
      secondary,
      bullets,
      email: email || '',
      answers: state.answers,
    }

    if (typeof window !== 'undefined') {
      sessionStorage.setItem('quizResult', JSON.stringify(result))
    }
    router.push('/results')
  }

  const progressStep = state.showLeadCapture ? TOTAL_STEPS : state.currentStep - 1

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0A0A0A' }}>
      <Nav />

      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-10">
        <div className="w-full max-w-xl">
          {/* Progress */}
          <div className="mb-10 flex flex-col gap-4">
            <ProgressBar current={progressStep} total={TOTAL_STEPS} />
          </div>

          {/* Card */}
          <div
            className="rounded-sm p-7 md:p-9"
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Back button */}
            {(state.currentStep > 1 || state.showLeadCapture) && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1.5 text-xs mb-7 transition-colors hover:text-[#C8A96E]"
                style={{ color: '#8A8580' }}
              >
                <ChevronLeft size={14} />
                Back
              </button>
            )}

            <AnimatePresence mode="wait" custom={direction}>
              {state.showLeadCapture ? (
                <motion.div
                  key="lead-capture"
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                >
                  <LeadCapture
                    onSubmit={(email) => finishQuiz(email)}
                    onSkip={() => finishQuiz()}
                  />
                </motion.div>
              ) : currentQuestion ? (
                <motion.div
                  key={state.currentStep}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className="flex flex-col gap-7"
                >
                  {/* Question */}
                  <div className="flex flex-col gap-2">
                    <span className="label-caps">Question {state.currentStep} of {TOTAL_STEPS}</span>
                    <h2 className="text-xl md:text-2xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.025em', lineHeight: '1.3' }}>
                      {currentQuestion.question}
                    </h2>
                  </div>

                  {/* Options */}
                  <div className="flex flex-col gap-2.5">
                    {currentQuestion.options.map((option) => (
                      <OptionCard
                        key={option}
                        label={option}
                        selected={state.answers[state.currentStep] === option}
                        onClick={() => handleSelect(option)}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function QuizPage() {
  return (
    <Suspense>
      <QuizContent />
    </Suspense>
  )
}
