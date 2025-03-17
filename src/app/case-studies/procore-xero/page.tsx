'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'

export default function ProcoreXeroCaseStudy() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/10 via-[#3B82F6]/10 to-transparent" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link 
                  href="/case-studies" 
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                  <span>Back to Case Studies</span>
                </Link>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Procore-Xero Integration
                </h1>
                
                <p className="text-lg text-gray-400 mb-10">
                  Streamlining financial workflows between construction management and accounting systems
                </p>
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-lg">
                This case study is coming soon. Please check back later for more details.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] text-white font-medium rounded-lg"
              >
                <span>Contact Us</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 