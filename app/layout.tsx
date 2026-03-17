import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Soma Solutions — Premium Peptides in Vietnam | Same-Day HCMC Delivery',
  description: 'Lab-tested peptides delivered same-day in Ho Chi Minh City. English support. Discreet packaging. 99.9% purity verified by US laboratory. Tirzepatide, Retatrutide, and more.',
  keywords: 'peptides vietnam, tirzepatide vietnam, retatrutide vietnam, peptides ho chi minh city, peptides hcmc, soma solutions',
  openGraph: {
    title: 'Soma Solutions — Premium Peptides in Vietnam',
    description: 'Lab-tested peptides delivered same-day in HCMC. English support. Discreet packaging. Real results.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#E8541A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
