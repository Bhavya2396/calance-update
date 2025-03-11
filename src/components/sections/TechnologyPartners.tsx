'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const partners = [
  {
    name: 'Microsoft Silver Partner',
    logo: '/images/illustrations/microsoft-partner-network-partnership (2).webp',
    category: 'Cloud'
  },
  {
    name: 'AWS Partner',
    logo: '/images/illustrations/partner select tier light.webp',
    category: 'Cloud'
  },
  {
    name: 'Proofpoint',
    logo: '/images/illustrations/Proofpoint_R_Logo.png',
    category: 'Security'
  },
  {
    name: 'Neenopal',
    logo: '/images/illustrations/Neenopal_logo.webp',
    category: 'Data Science'
  },
  {
    name: 'CrowdStrike',
    logo: '/images/illustrations/crowdstrike_endpoint-logo.webp',
    category: 'Security'
  },
  {
    name: 'UiPath',
    logo: '/images/illustrations/ui-path--logo.webp',
    category: 'Automation'
  },
  {
    name: 'Xero',
    logo: '/images/illustrations/xero.webp',
    category: 'Business'
  },
  {
    name: 'Sage',
    logo: '/images/illustrations/sage-logo.webp',
    category: 'Business'
  },
  {
    name: 'KnowBe4',
    logo: '/images/illustrations/KnowBe4-Logo-Color-MD.webp',
    category: 'Security'
  },
  {
    name: 'Arctic Wolf',
    logo: '/images/illustrations/ArcticWolf-logo.webp',
    category: 'Security'
  },
  {
    name: 'Procore',
    logo: '/images/illustrations/black and white procore logo.webp',
    category: 'Construction'
  },
  {
    name: 'PM Web',
    logo: '/images/illustrations/black and white PM Web logo.webp',
    category: 'Construction'
  }
]

export default function TechnologyPartners() {
  // Split partners into two rows
  const firstRow = partners.slice(0, 6)
  const secondRow = partners.slice(6)

  return (
    <section className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-4">
            <CodeBracketIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Technology Partners</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Powered by Industry Leaders
          </h2>
          <p className="text-gray-400 text-lg">
            Leveraging cutting-edge technologies from trusted partners
          </p>
        </motion.div>
        
        {/* Partner Logos Grid */}
        <div className="space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {firstRow.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-[3/2] relative group"
              >
                <div className="absolute inset-0 bg-white rounded-lg border border-[#243B61] group-hover:border-[#3B82F6]/50 transition-all duration-300 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain p-3 transition-all duration-300"
                      sizes="(max-width: 768px) 160px, (max-width: 1024px) 140px, 160px"
                      priority={index < 4}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {secondRow.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 6) * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-[3/2] relative group"
              >
                <div className="absolute inset-0 bg-white rounded-lg border border-[#243B61] group-hover:border-[#3B82F6]/50 transition-all duration-300 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain p-3 transition-all duration-300"
                      sizes="(max-width: 768px) 160px, (max-width: 1024px) 140px, 160px"
                      priority={index < 4}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 