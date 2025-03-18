'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function AISolutions() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(600px circle at 0% 0%, rgba(255, 107, 44, 0.1), transparent 70%)",
              "radial-gradient(600px circle at 100% 100%, rgba(59, 130, 246, 0.1), transparent 70%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              AI-Powered Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 mb-8"
            >
              Transform your business with our cutting-edge AI solutions. From predictive analytics to intelligent automation, we help you harness the power of artificial intelligence.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <a 
                href="/solutions/ai-solutions"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Explore AI Solutions
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>

          {/* Illustration */}
          <div className="mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/illustrations/home/ai-solutions.svg"
                alt="AI Solutions"
                width={600}
                height={600}
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 