'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function MainHeader() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingDown = prevScrollPos < currentScrollPos
      const isScrolledPastThreshold = currentScrollPos > 10

      setVisible(!isScrollingDown || !isScrolledPastThreshold)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/80 backdrop-blur-sm border-b border-[#243B61] transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/illustrations/Screenshot_2025-01-16_at_4.36.53_AM-removebg-preview.png"
              alt="Calance"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/solutions" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Solutions
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/case-studies" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Case Studies
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Contact
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-[#1A2B44] text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 