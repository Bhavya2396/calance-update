'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
  CloudIcon, 
  CircleStackIcon,
  CheckIcon 
} from '@heroicons/react/24/solid'
import Image from 'next/image'

const categories = [
  {
    title: "Cloud Services",
    platforms: [
      {
        name: "AWS",
        features: ["EC2", "Lambda", "S3", "RDS"],
        icon: <CloudIcon className="w-6 h-6" />
      },
      {
        name: "Azure",
        features: ["VM", "Functions", "Cognitive Services", "DevOps"],
        icon: <CloudIcon className="w-6 h-6" />
      }
    ],
    image: "/images/illustrations/home/cloud-services.svg"
  },
  {
    title: "Enterprise Solutions",
    platforms: [
      {
        name: "Salesforce",
        features: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Analytics"],
        icon: <CircleStackIcon className="w-6 h-6" />
      },
      {
        name: "SAP",
        features: ["S/4HANA", "Business One", "SuccessFactors", "Ariba"],
        icon: <CircleStackIcon className="w-6 h-6" />
      }
    ],
    image: "/images/illustrations/home/enterprise-solutions.svg"
  }
]

export default function IntegrationTools() {
  return (
    <section className="py-16 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-3">
            <CloudIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Integration Platforms</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Connect with Leading Platforms
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Seamlessly integrate your business with industry-leading cloud and enterprise platforms
          </p>
        </motion.div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#FF6B2C] transition-colors">
                {/* Category Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {category.title}
                </h3>

                {/* Illustration */}
                <div className="relative h-32 mb-6">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Platforms */}
                <div className="space-y-4">
                  {category.platforms.map((platform) => (
                    <div key={platform.name} className="bg-[#0A1628]/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-[#FF6B2C]/10 text-white">
                          {platform.icon}
                        </div>
                        <h4 className="text-lg font-bold text-white">{platform.name}</h4>
                      </div>
                      <ul className="grid grid-cols-2 gap-2">
                        {platform.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-400">
                            <CheckIcon className="w-4 h-4 text-[#FF6B2C] mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a 
            href="/solutions/integrations"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Explore All Integrations
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
} 