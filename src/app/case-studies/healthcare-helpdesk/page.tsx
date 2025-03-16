'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import GlowingButton from '@/components/GlowingButton'

export default function HealthcareHelpdeskCaseStudy() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              24/7 Healthcare IT
              <span className="block bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                Help Desk Support
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              Delivering round-the-clock IT support that aligns with healthcare providers' unique culture and requirements
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-w-4xl mx-auto aspect-[2/1] h-[400px]"
            >
              <Image
                src="/images/illustrations/case-studies/healthcare-helpdesk/hero.svg"
                alt="Healthcare Help Desk Support"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Context */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Client Context</h2>
            <div className="text-gray-400 space-y-4">
              <p>
                A leading healthcare provider needed a reliable IT support solution that could handle their complex technical environment while maintaining high standards of service. Their requirements included:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>24/7 support coverage for critical healthcare systems</li>
                <li>Deep understanding of healthcare-specific applications and workflows</li>
                <li>Rapid response times for urgent medical situations</li>
                <li>HIPAA compliance and security awareness</li>
                <li>Cultural alignment with healthcare professionals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
            
            <div className="mb-8">
              <div className="relative w-full aspect-[2/1] h-[400px]">
                <Image
                  src="/images/illustrations/case-studies/healthcare-helpdesk/solution.svg"
                  alt="Multi-tiered Support Structure"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="text-gray-400 space-y-4">
                <p>
                  We implemented a comprehensive IT help desk solution specifically designed for healthcare environments:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Dedicated 24/7 support team with healthcare IT expertise</li>
                  <li>Multi-tiered support structure with specialized knowledge at each level</li>
                  <li>Custom ticketing system integrated with healthcare workflows</li>
                  <li>HIPAA-compliant communication and documentation processes</li>
                  <li>Proactive monitoring and issue prevention</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Impact & Results</h2>
            
            <div className="relative w-full aspect-[2/1] h-[400px]">
              <Image
                src="/images/illustrations/case-studies/healthcare-helpdesk/results.svg"
                alt="Support Performance Metrics"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-gray-400 space-y-4">
              <p>The implementation delivered significant improvements in IT support quality and efficiency:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Average response time reduced to less than 5 minutes</li>
                <li>95% first-call resolution rate</li>
                <li>98% user satisfaction rating</li>
                <li>Improved system uptime and reliability</li>
                <li>Enhanced compliance with healthcare regulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A2B44]/60 backdrop-blur-md border border-[#243B61] rounded-3xl overflow-hidden">
            <div className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your IT Support?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Let us help you implement a healthcare-focused IT help desk that delivers exceptional support while maintaining compliance and security.
              </p>
              <GlowingButton 
                href="/contact" 
                className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white"
              >
                <span className="flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </GlowingButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 