import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/copy'

export default function BlogPreview() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              Education & Guides
            </span>
            <h2
              className="mt-5 text-3xl md:text-4xl font-black text-balance"
              style={{ letterSpacing: '-0.025em', color: '#1A1A1A' }}
            >
              Learn before you order
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex text-sm font-bold transition-colors hover:opacity-70"
            style={{ color: '#E8541A' }}
          >
            View all posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              href={post.slug}
              className="group flex flex-col gap-4 rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-lg"
              style={{ border: '2px solid #E5E7EB' }}
            >
              {/* Placeholder thumbnail */}
              <div
                className="h-40 flex items-center justify-center"
                style={{ background: '#E8541A' }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                  {post.category}
                </span>
              </div>

              <div className="px-6 pb-7 flex flex-col gap-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full self-start"
                  style={{ background: '#FEF0E9', color: '#E8541A' }}
                >
                  {post.category}
                </span>
                <h3 className="text-base font-bold leading-snug text-balance" style={{ color: '#1A1A1A' }}>
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>{post.readTime}</span>
                  <span className="text-xs font-bold transition-colors group-hover:opacity-70" style={{ color: '#E8541A' }}>
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="btn-outline px-6 py-3 text-xs">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
