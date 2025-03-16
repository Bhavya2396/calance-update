'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  ArrowPathIcon,
  CurrencyDollarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import GlowingButton from '@/components/GlowingButton'

export default function ProforeXeroCase() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      {/* Add padding-top to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center mb-8"
              >
                <Image
                  src="/images/illustrations/case-studies/procore-xero/hero.svg"
                  alt="Procore + Xero Integration"
                  width={800}
                  height={400}
                  className="rounded-2xl"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Procore + Xero Integration
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-400 mt-4">
                  for Ascot Group
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
              >
                Automated integration solution eliminating manual data transfer between Procore construction management software and Xero accounting system.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap justify-center gap-6 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <span>3 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserGroupIcon className="w-5 h-5" />
                  <span>6 experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <BuildingOffice2Icon className="w-5 h-5" />
                  <span>Ascot Group</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Context */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Client Context</h2>
              <p className="text-gray-400 mb-6">
                Soon after implementing Procore for construction management, Ascot Group encountered a significant challenge: the lack of integration with their accounting system, Xero. This disconnect resulted in three skilled employees dedicating substantial time to manually transferring data between systems, leading to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li>Time-consuming manual data entry processes</li>
                <li>Increased risk of human error in financial data transfer</li>
                <li>Delayed financial reporting and project updates</li>
                <li>Inefficient use of skilled workforce resources</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Our Solution</h2>
              <p className="text-gray-400 mb-6">
                We developed a custom integration solution that seamlessly connects Procore and Xero, enabling automated data synchronization and eliminating manual intervention. Key features include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Automated Synchronization</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Real-time data transfer between systems</li>
                    <li>Automated matching of cost codes and accounts</li>
                    <li>Bidirectional sync of financial transactions</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Validation & Control</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Data validation before synchronization</li>
                    <li>Error handling and notification system</li>
                    <li>Audit trail of all synchronized data</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Results & Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-[#243B55] rounded-xl p-6">
                  <ArrowPathIcon className="w-8 h-8 text-[#3B82F6] mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-400">Process Automation</div>
                </div>
                <div className="bg-[#243B55] rounded-xl p-6">
                  <ChartBarIcon className="w-8 h-8 text-[#10B981] mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">+80%</div>
                  <div className="text-gray-400">Efficiency Gain</div>
                </div>
                <div className="bg-[#243B55] rounded-xl p-6">
                  <CurrencyDollarIcon className="w-8 h-8 text-[#3B82F6] mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">-90%</div>
                  <div className="text-gray-400">Manual Work</div>
                </div>
              </div>
              <div className="text-gray-400">
                <p className="mb-4">The integration solution has transformed Ascot Group's operations by:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Eliminating manual data entry and associated errors</li>
                  <li>Freeing up skilled staff for higher-value tasks</li>
                  <li>Providing real-time financial visibility across systems</li>
                  <li>Reducing month-end closing time by 75%</li>
                </ul>
              </div>
            </motion.div>
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
                  Ready to Automate Your Systems?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Learn how we can help you integrate your construction management and financial systems for improved efficiency and accuracy.
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
      </div>
    </main>
  )
} 