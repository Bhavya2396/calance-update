'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import GlowingButton from './GlowingButton'

const navigation = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Enterprise', href: '#enterprise' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Partners', href: '#partners' }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollPos = window.scrollY
        setIsScrolled(currentScrollPos > 10)
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
        setPrevScrollPos(currentScrollPos)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-[#0A1628]/80 backdrop-blur-sm border-b border-white/5 transform ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a href="/" className="flex items-center">
              <Image
                src="/images/illustrations/Screenshot_2025-01-16_at_4.36.53_AM-removebg-preview.png"
                alt="Calance Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <GlowingButton 
                href="#contact" 
                className="bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C]"
              >
                Get Started
              </GlowingButton>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0A1628]/95 backdrop-blur-sm"
            >
              <div className="space-y-1 px-4 pb-3 pt-2">
                {navigation.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-[#FF6B2C]/10 hover:text-white"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="px-3 py-2">
                  <GlowingButton href="#contact" className="w-full bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C]">
                    Get Started
                  </GlowingButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
} 