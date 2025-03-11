import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Solutions | Blit Software',
  description: 'Transform your business with our comprehensive suite of enterprise solutions. From integration to AI, we deliver cutting-edge technology solutions.',
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 