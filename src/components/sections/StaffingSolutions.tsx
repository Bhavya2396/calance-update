'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  UserGroupIcon,
  ArrowRightIcon,
  UserPlusIcon,
  AcademicCapIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: "IT Talent Search",
    description: "Find the perfect IT professionals with our comprehensive talent search and matching platform.",
    icon: <UserPlusIcon className="w-6 h-6" />
  },
  {
    title: "Team Augmentation",
    description: "Scale your development teams quickly with skilled professionals who integrate seamlessly.",
    icon: <UserGroupIcon className="w-6 h-6" />
  },
  {
    title: "Skill Assessment",
    description: "Comprehensive technical assessment and vetting process to ensure top-quality talent.",
    icon: <AcademicCapIcon className="w-6 h-6" />
  },
  {
    title: "Managed Teams",
    description: "End-to-end team management and support for seamless project execution.",
    icon: <BuildingOfficeIcon className="w-6 h-6" />
  }
]

export default function StaffingSolutions() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9333EA]/20 to-[#C084FC]/20" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(600px circle at 0% 0%, rgba(147, 51, 234, 0.1), transparent 70%)",
              "radial-gradient(600px circle at 100% 100%, rgba(192, 132, 252, 0.1), transparent 70%)",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#9333EA] mb-4">
            <UserGroupIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Staffing Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
              Dream Team
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
            src="/images/illustrations/staffing/hero.svg"
            alt="Staffing Solutions"
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
                  className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#9333EA]/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-[#9333EA]/10 to-[#C084FC]/10 text-[#9333EA]">
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
                href="/solutions/staffing"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#9333EA] to-[#C084FC] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Find Talent
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
                src="/images/illustrations/staffing/hero.svg"
                alt="Staffing Solutions"
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