'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import GlowingButton from '@/components/GlowingButton'

export default function ProcoreXeroCase() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      <div className="page-content">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/10 to-[#3B82F6]/10" />
            <motion.div 
              className="absolute inset-0"
              animate={{ 
                background: [
                  "radial-gradient(600px circle at 30% 30%, rgba(255, 107, 44, 0.15), transparent 70%)",
                  "radial-gradient(600px circle at 70% 70%, rgba(59, 130, 246, 0.15), transparent 70%)",
                  "radial-gradient(600px circle at 30% 70%, rgba(255, 107, 44, 0.15), transparent 70%)",
                  "radial-gradient(600px circle at 70% 30%, rgba(59, 130, 246, 0.15), transparent 70%)"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-4"
              >
                <SparklesIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Case Study</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Procore-Xero Integration
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto"
              >
                Automating financial data flow between Procore construction management and Xero accounting.
              </motion.p>
            </div>

            {/* Content will be added here */}
            <div className="text-center py-12">
              <p className="text-gray-400">Case study content coming soon.</p>
              <div className="mt-8">
                <GlowingButton
                  href="/case-studies"
                  className="px-6 py-3 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] text-white"
                >
                  <span className="flex items-center justify-center gap-2">
                    Back to Case Studies
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 