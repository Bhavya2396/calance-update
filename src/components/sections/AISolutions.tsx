'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  CpuChipIcon,
  ChartBarIcon,
  LightBulbIcon,
  BeakerIcon,
  SparklesIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: "Machine Learning",
    icon: <CpuChipIcon className="w-6 h-6" />,
    description: "Predictive models that learn and adapt"
  },
  {
    title: "Natural Language",
    icon: <LightBulbIcon className="w-6 h-6" />,
    description: "Understand and process human language"
  },
  {
    title: "Computer Vision",
    icon: <BeakerIcon className="w-6 h-6" />,
    description: "See and interpret visual information"
  },
  {
    title: "Analytics",
    icon: <ChartBarIcon className="w-6 h-6" />,
    description: "Turn data into actionable insights"
  }
]

export default function AISolutions() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-[#3B82F6]/20" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(600px circle at 0% 0%, rgba(124, 58, 237, 0.1), transparent 70%)",
              "radial-gradient(600px circle at 100% 100%, rgba(59, 130, 246, 0.1), transparent 70%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#7C3AED] mb-4">
            <SparklesIcon className="w-5 h-5" />
            <span className="text-sm font-medium">AI Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Transform with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
              Intelligent AI
            </span>
          </h2>
        </motion.div>

        {/* Mobile Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square mb-12 lg:hidden"
        >
          <Image
            src="/images/illustrations/ai-solutions/hero.svg"
            alt="AI Solutions"
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#7C3AED]/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-[#7C3AED]/10 to-[#3B82F6]/10 text-[#7C3AED]">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                href="/solutions/ai-solutions"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Explore AI Solutions
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Desktop Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-12 lg:mt-0 hidden lg:block order-1 lg:order-2"
          >
            <div className="relative aspect-square">
              <Image
                src="/images/illustrations/ai-solutions/hero.svg"
                alt="AI Solutions"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 