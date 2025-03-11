'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B2C] via-[#FF8F5C] to-[#FF6B2C] opacity-10" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-[#FF6B2C] mb-6">
              <RocketLaunchIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Get Started Today</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                Business
              </span>
              ?
            </h2>
            
            <p className="text-lg text-white/80 mb-8">
              Let's discuss how our technology solutions can help you achieve your business goals and drive innovation across your organization.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <GlowingButton href="/contact" className="px-8 bg-white text-[#FF6B2C] hover:bg-white/90">
                Schedule a Consultation
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </GlowingButton>
              <GlowingButton href="/solutions" variant="secondary" className="px-8 border-white/20 text-white hover:bg-white/10">
                View All Solutions
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </GlowingButton>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/30 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/10">
                    <EnvelopeIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                </div>
                <a href="mailto:contact@calance.com" className="text-white/80 hover:text-white transition-colors text-sm">
                  contact@calance.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/30 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/10">
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                </div>
                <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              <Image
                src="/images/illustrations/home/transform.svg"
                alt="Transform Your Business"
                fill
                className="object-contain brightness-110"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 