'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingDown = prevScrollPos < currentScrollPos
      const isScrolledPastThreshold = currentScrollPos > 10

      if (!isMobileMenuOpen) {
        setVisible(!isScrollingDown || !isScrolledPastThreshold)
      }
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isMobileMenuOpen])

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navigationLinks = [
    { href: '/solutions', label: 'Solutions' },
    { href: '/about', label: 'About Us' },
    { href: '/case-studies', label: 'Case Studies' },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/80 backdrop-blur-sm border-b border-[#243B61] transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <Image
                src="/images/illustrations/Screenshot_2025-01-16_at_4.36.53_AM-removebg-preview.png"
                alt="Calance"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </a>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="/contact" 
                className="inline-flex items-center px-4 py-2 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Contact
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#1A2B44] text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{ 
                  transform: isMobileMenuOpen ? 'rotate(90deg)' : 'none',
                  transition: 'transform 0.3s ease-in-out'
                }}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-[#0A1628] border-l border-[#243B61] z-50 md:hidden overflow-y-auto"
            >
              <div className="px-4 py-6 space-y-6">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-lg text-gray-300 hover:text-white transition-colors font-medium py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a 
                  href="/contact" 
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 