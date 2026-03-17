import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { BLOG_POSTS } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Blog & Education | Soma Solutions Vietnam Peptide Guide',
  description:
    'Guides, research, and educational content about peptides in Vietnam. Tirzepatide, Retatrutide, GLP-1 research, and expat wellness resources.',
}

const ALL_POSTS = [
  ...BLOG_POSTS,
  {
    id: 4,
    slug: '/blog/what-is-retatrutide',
    category: 'Research',
    title: 'What Is Retatrutide? The Triple Agonist Explained',
    readTime: '8 min read',
  },
  {
    id: 5,
    slug: '/blog/peptide-storage-vietnam',
    category: 'Guide',
    title: 'How to Store Peptides in Vietnam\'s Heat & Humidity',
    readTime: '4 min read',
  },
  {
    id: 6,
    slug: '/blog/glow-peptide-blend-guide',
    category: 'Guide',
    title: 'The GLOW Blend: GHK-Cu, BPC-157, and TB-500 Explained',
    readTime: '6 min read',
  },
]

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-5">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full self-center"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              Education &amp; Guides
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              Learn before you order
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              Research-backed guides on peptides, protocols, and wellness — written for the English-speaking
              expat community in Vietnam.
            </p>
          </div>
        </section>

        {/* Post grid */}
        <section className="py-12 pb-24 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ALL_POSTS.map((post) => (
                <Link
                  key={post.id}
                  href={post.slug}
                  className="group flex flex-col rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-lg"
                  style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
                >
                  {/* Thumbnail */}
                  <div
                    className="h-44 flex items-center justify-center"
                    style={{ background: '#E8541A' }}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                      {post.category}
                    </span>
                  </div>
                  <div className="px-6 py-6 flex flex-col gap-3 flex-1">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full self-start"
                      style={{ background: '#FEF0E9', color: '#E8541A' }}
                    >
                      {post.category}
                    </span>
                    <h2 className="text-base font-bold leading-snug text-balance flex-1" style={{ color: '#1A1A1A' }}>
                      {post.title}
                    </h2>
                    <div className="flex items-center justify-between mt-2 pt-3" style={{ borderTop: '1px solid #F3F4F6' }}>
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>{post.readTime}</span>
                      <span
                        className="text-xs font-bold transition-opacity group-hover:opacity-70"
                        style={{ color: '#E8541A' }}
                      >
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          headline="Have a question not covered here?"
          sub="Message our team on WhatsApp or Telegram. We answer in English within minutes."
          cta="Ask via WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
