import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ProductDetail from '@/components/products/ProductDetail'
import { PRODUCTS } from '@/lib/copy'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.id === slug)
  if (!product) return {}
  return {
    title: `${product.name} | Soma Solutions Vietnam`,
    description: `${product.descriptor}. ${product.purity} purity, lab-tested by TrustPointe Analytics. ${product.priceVnd} per ${product.quantity}. Same-day delivery in HCMC.`,
  }
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }))
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.id === slug)
  if (!product) notFound()
  return (
    <>
      <Nav />
      <ProductDetail product={product} />
      <Footer />
    </>
  )
}
