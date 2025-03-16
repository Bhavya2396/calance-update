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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] bg-[#0A1628]/80 backdrop-blur-sm border-b border-[#243B61] transition-all duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center relative z-[101]">
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
              onClick={toggleMobileMenu}
              className="md:hidden relative z-[101] p-2 rounded-lg bg-[#1A2B44] text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  className="absolute top-2 left-0 right-0 h-0.5 bg-current rounded-full"
                  variants={{
                    open: { rotate: 45, y: 6 },
                    closed: { rotate: 0, y: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute top-4 left-0 right-0 h-0.5 bg-current rounded-full"
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute top-6 left-0 right-0 h-0.5 bg-current rounded-full"
                  variants={{
                    open: { rotate: -45, y: -6 },
                    closed: { rotate: 0, y: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[99] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={toggleMobileMenu}
            />
            
            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.3
              }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-[#0A1628] border-l border-[#243B61]"
            >
              <motion.div 
                className="h-full px-4 py-6 overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="space-y-6">
                  {navigationLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className="block text-lg text-gray-300 hover:text-white transition-colors font-medium py-3"
                        onClick={toggleMobileMenu}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <a 
                      href="/contact" 
                      className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity text-lg"
                      onClick={toggleMobileMenu}
                    >
                      Contact
                      <ArrowRightIcon className="w-5 h-5" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  )
} 