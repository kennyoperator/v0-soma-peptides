import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Protocol — Personalized Peptide Protocols',
  description: 'Answer 7 questions. Get a personalized peptide recommendation designed around your goals. Provider-guided protocols. Premium quality formulations.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased" style={{ backgroundColor: '#0A0A0A', color: '#F0EDE8' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
