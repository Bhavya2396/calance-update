import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calanceus - Enterprise Technology Solutions',
  description: 'Empowering enterprises with innovative technology solutions for digital transformation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
