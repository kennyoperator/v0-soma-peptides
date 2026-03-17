import { quizResultsMap } from './mock-data'

export type Goal = 'weight-loss' | 'recovery' | 'glow' | 'vitality'

export function getPrimaryRecommendation(answers: Record<number, string>): Goal {
  const q1 = answers[1] ?? ''
  if (q1.toLowerCase().includes('weight') || q1.toLowerCase().includes('body composition')) return 'weight-loss'
  if (q1.toLowerCase().includes('repair') || q1.toLowerCase().includes('recover')) return 'recovery'
  if (q1.toLowerCase().includes('skin') || q1.toLowerCase().includes('look')) return 'glow'
  if (q1.toLowerCase().includes('energy') || q1.toLowerCase().includes('vitality') || q1.toLowerCase().includes('longevity')) return 'vitality'
  return 'vitality'
}

export function getSecondaryRecommendation(primary: Goal, answers: Record<number, string>): Goal | null {
  const q5 = answers[5] ?? ''
  if (primary === 'weight-loss' && q5.toLowerCase().includes('depleted')) return 'vitality'
  if (primary === 'recovery' && q5.toLowerCase().includes('skin')) return 'glow'
  if (primary === 'glow' && q5.toLowerCase().includes('depleted')) return 'vitality'
  if (primary === 'vitality' && q5.toLowerCase().includes('weight')) return 'weight-loss'
  return null
}

export function getWhyBullets(primary: Goal, answers: Record<number, string>): string[] {
  const bullets: string[] = []
  const q1 = answers[1] ?? ''
  const q6 = answers[6] ?? ''
  const q7 = answers[7] ?? ''

  bullets.push(`Your primary goal — "${q1}" — aligns with the core use-case for ${quizResultsMap[primary].name}.`)

  if (q6.toLowerCase().includes('clinically')) {
    bullets.push('You prioritize clinically-backed formulations, and this protocol is research-referenced.')
  } else if (q6.toLowerCase().includes('long-term')) {
    bullets.push('You\'re focused on long-term health and prevention — this protocol is designed for sustained results.')
  } else if (q6.toLowerCase().includes('fast')) {
    bullets.push('You\'re looking for visible results — this is one of the most commonly chosen formulations for that goal.')
  } else {
    bullets.push('This protocol is matched to your stated wellness priorities.')
  }

  if (q7.toLowerCase().includes('30 days')) {
    bullets.push('For your 30-day timeline, provider-guided onboarding is recommended to optimize results.')
  } else if (q7.toLowerCase().includes('3') || q7.toLowerCase().includes('6 month')) {
    bullets.push('A 3–6 month protocol approach aligns well with how this formulation is typically used.')
  } else {
    bullets.push('This formulation fits well with your stated timeline and wellness approach.')
  }

  return bullets
}
