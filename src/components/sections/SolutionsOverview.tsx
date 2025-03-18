'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const solutions = [
  {
    title: "Infrastructure",
    description: "Build a robust and scalable foundation with our cutting-edge infrastructure solutions.",
    image: "/images/illustrations/home/infrastructure.svg",
    color: "#3B82F6",
    href: "/solutions/infrastructure"
  },
  {
    title: "Security",
    description: "Protect your digital assets with our comprehensive security solutions and best practices.",
    image: "/images/illustrations/home/security.svg",
    color: "#EF4444",
    href: "/solutions/security"
  },
  {
    title: "Apps & Automation",
    description: "Streamline operations with custom applications and intelligent automation solutions.",
    image: "/images/illustrations/home/apps-automation.svg",
    color: "#8B5CF6",
    href: "/solutions/apps-automation"
  },
  {
    title: "Business Intelligence",
    description: "Make data-driven decisions with advanced analytics and visualization tools.",
    image: "/images/illustrations/home/business-intelligence.svg",
    color: "#7C3AED",
    href: "/solutions/business-intelligence"
  },
  {
    title: "DevOps",
    description: "Accelerate delivery with modern DevOps practices and tools integration.",
    image: "/images/illustrations/home/devops.svg",
    color: "#F59E0B",
    href: "/solutions/devops"
  },
  {
    title: "Construction",
    description: "Digital solutions for modern construction project management and execution.",
    image: "/images/illustrations/home/construction.svg",
    color: "#EF4444",
    href: "/solutions/construction"
  }
]

export default function SolutionsOverview() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-lg text-gray-400">
            Comprehensive solutions designed to transform and modernize your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] p-8 hover:border-transparent transition-colors duration-300 overflow-hidden">
                {/* Hover Effect Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" 
                  style={{ 
                    backgroundColor: solution.color
                  }} 
                />
                
                {/* Solution Image */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-[#0A1628]/50">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3" style={{ color: solution.color }}>
                  {solution.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {solution.description}
                </p>
                
                {/* Learn More Button */}
                <div className="absolute bottom-8 right-8">
                  <a 
                    href={solution.href}
                    className="flex items-center text-sm font-medium text-[#FF6B2C] hover:text-[#FF8F59] transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 