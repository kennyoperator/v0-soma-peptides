'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ProviderUpsellSection from '@/components/results/ProviderUpsellSection'
import ConsultationEmbed from '@/components/results/ConsultationEmbed'
import ConsultationFallback from '@/components/results/ConsultationFallback'
import { quizResultsMap } from '@/lib/mock-data'
import type { Goal } from '@/lib/quiz-logic'

interface QuizResult {
  primary: Goal
  secondary: Goal | null
  bullets: string[]
  email: string
  answers: Record<number, string>
}

export default function ResultsPage() {
  const [result, setResult] = useState<QuizResult | null>(null)

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('quizResult')
      if (stored) {
        setResult(JSON.parse(stored))
      }
    } catch {
      // fallback to default
    }
  }, [])

  const primaryData = result ? quizResultsMap[result.primary] : quizResultsMap['vitality']
  const secondaryData = result?.secondary ? quizResultsMap[result.secondary] : null

  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Nav />

      <div className="max-w-2xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-12">
          <span className="label-caps">Your Protocol</span>
          <h1 className="text-3xl md:text-4xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
            Based on your answers, we recommend:
          </h1>
        </div>

        {/* Email confirmation */}
        {result?.email && (
          <div
            className="mb-8 px-4 py-3 rounded-sm flex items-center gap-3"
            style={{ background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#C8A96E' }} />
            <p className="text-xs" style={{ color: '#8A8580' }}>
              Your protocol guide has been sent to{' '}
              <span style={{ color: '#C8A96E' }}>{result.email}</span>
            </p>
          </div>
        )}

        {/* Primary Recommendation */}
        <div
          className="rounded-sm p-7 md:p-9 mb-5"
          style={{ background: '#161616', border: '1px solid rgba(200,169,110,0.35)' }}
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className="label-caps" style={{ color: '#C8A96E' }}>Primary Recommendation</span>
              <span
                className="label-caps px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(200,169,110,0.1)',
                  color: '#C8A96E',
                  border: '1px solid rgba(200,169,110,0.2)',
                }}
              >
                {primaryData.tag}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
              {primaryData.name}
            </h2>
            <p className="text-sm" style={{ color: '#8A8580', lineHeight: '1.8' }}>
              {primaryData.rationale}
            </p>
            <Link
              href={primaryData.slug}
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm tracking-wider uppercase self-start"
            >
              View Full Protocol →
            </Link>
          </div>
        </div>

        {/* Secondary Recommendation */}
        {secondaryData && (
          <div
            className="rounded-sm p-6 md:p-8 mb-5"
            style={{ background: '#161616', border: '1px solid rgba(123,158,166,0.3)' }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="label-caps" style={{ color: '#7B9EA6' }}>You May Also Benefit From</span>
                <span
                  className="label-caps px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(123,158,166,0.1)',
                    color: '#7B9EA6',
                    border: '1px solid rgba(123,158,166,0.2)',
                  }}
                >
                  {secondaryData.tag}
                </span>
              </div>
              <h3 className="text-2xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.025em' }}>
                {secondaryData.name}
              </h3>
              <p className="text-sm" style={{ color: '#8A8580', lineHeight: '1.8' }}>
                {secondaryData.rationale}
              </p>
              <Link
                href={secondaryData.slug}
                className="btn-ghost-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs tracking-wider uppercase self-start"
              >
                Learn More →
              </Link>
            </div>
          </div>
        )}

        {/* Why this protocol */}
        {result?.bullets && result.bullets.length > 0 && (
          <div
            className="rounded-sm p-6 mb-8"
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3 className="text-sm font-medium mb-4" style={{ color: '#F0EDE8', letterSpacing: '-0.01em' }}>
              Why this protocol?
            </h3>
            <ul className="flex flex-col gap-3">
              {result.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#8A8580', lineHeight: '1.7' }}>
                  <span className="w-1 h-1 rounded-full mt-2.5 shrink-0" style={{ background: '#C8A96E' }} />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Fallback CTAs */}
        <div className="flex flex-col items-center gap-4 pt-2 text-center">
          <p className="text-sm" style={{ color: '#8A8580' }}>Not sure this is right for you?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="btn-ghost-gold px-5 py-2.5 rounded-sm text-xs tracking-wider uppercase">
              Talk to a Provider
            </a>
            <Link href="/quiz" className="text-xs py-2.5 transition-colors hover:text-[#C8A96E]" style={{ color: '#8A8580' }}>
              Retake Assessment
            </Link>
          </div>
        </div>
      </div>

      <ProviderUpsellSection />
      <ConsultationEmbed />
      <ConsultationFallback />

      <Footer />
    </main>
  )
}
