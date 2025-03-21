'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1222] to-[#1A2B44]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(800px circle at 0% 0%, rgba(26, 43, 68, 0.15), transparent 70%)",
              "radial-gradient(800px circle at 100% 100%, rgba(11, 18, 34, 0.1), transparent 70%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1222] text-[#3B82F6] mb-4">
                <EnvelopeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">
                  Transform Your Business?
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Let's discuss how we can help you achieve your digital transformation goals with our enterprise solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-[#0B1222] backdrop-blur-sm rounded-xl p-6 border border-[#1A2B44] hover:border-[#3B82F6]/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-xl bg-[#1A2B44] text-[#3B82F6]">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white">Email Us</h3>
                  <Link 
                    href="mailto:connect@calance.com"
                    className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
                  >
                    connect@calance.com
                  </Link>
                </div>
              </div>

              <div className="bg-[#0B1222] backdrop-blur-sm rounded-xl p-6 border border-[#1A2B44] hover:border-[#3B82F6]/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-xl bg-[#1A2B44] text-[#3B82F6]">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white">Visit Us</h3>
                  <address className="text-[#3B82F6] not-italic text-center">
                    Anaheim, CA - HQ<br/>
                    888 S. Disneyland Drive<br/>
                    Suite 500<br/>
                    Anaheim, CA 92802
                  </address>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#3B82F6] text-white font-medium hover:bg-[#60A5FA] transition-colors"
              >
                Schedule a Consultation
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative aspect-square">
              <Image
                src="/images/illustrations/hero-enterprise.svg"
                alt="Digital Transformation"
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