'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section id="contact-methods" className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/10 to-[#3B82F6]/10" />
            <motion.div 
              className="absolute inset-0"
              animate={{ 
                background: [
                  "radial-gradient(600px circle at 30% 30%, rgba(255, 107, 44, 0.15), transparent 70%)",
                  "radial-gradient(600px circle at 70% 70%, rgba(59, 130, 246, 0.15), transparent 70%)",
                  "radial-gradient(600px circle at 30% 70%, rgba(255, 107, 44, 0.15), transparent 70%)",
                  "radial-gradient(600px circle at 70% 30%, rgba(59, 130, 246, 0.15), transparent 70%)"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 lg:col-span-3"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-4">
                  <SparklesIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">Get in Touch</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Let's Start Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]">
                    Digital Journey
                  </span>
                </h1>
                
                <p className="text-lg text-gray-400 mb-6 max-w-xl">
                  Ready to transform your business? Our team is here to help you navigate your digital transformation journey.
                </p>

                {/* Contact Methods Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {/* Email */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-4 border border-[#243B61] group-hover:border-[#FF6B2C] transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-[#FF6B2C]/10 group-hover:bg-[#FF6B2C]/20 transition-colors">
                          <EnvelopeIcon className="w-5 h-5 text-[#FF6B2C]" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm mb-0.5">Email Us</h3>
                          <a href="mailto:contact@calance.com" className="text-[#FF6B2C] hover:text-[#FF6B2C]/80 transition-colors text-sm">
                            contact@calance.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-4 border border-[#243B61] group-hover:border-[#3B82F6] transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-[#3B82F6]/10 group-hover:bg-[#3B82F6]/20 transition-colors">
                          <PhoneIcon className="w-5 h-5 text-[#3B82F6]" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm mb-0.5">Call Us</h3>
                          <a href="tel:+1234567890" className="text-[#3B82F6] hover:text-[#3B82F6]/80 transition-colors text-sm">
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-4 border border-[#243B61] group-hover:border-[#FF6B2C] transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-[#FF6B2C]/10 group-hover:bg-[#FF6B2C]/20 transition-colors">
                          <MapPinIcon className="w-5 h-5 text-[#FF6B2C]" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm mb-0.5">Visit Us</h3>
                          <p className="text-gray-400 text-sm">
                            123 Business Ave, Suite 100<br />
                            San Francisco, CA 94107
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Chat */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-4 border border-[#243B61] group-hover:border-[#3B82F6] transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-[#3B82F6]/10 group-hover:bg-[#3B82F6]/20 transition-colors">
                          <ChatBubbleLeftRightIcon className="w-5 h-5 text-[#3B82F6]" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm mb-0.5">Live Chat</h3>
                          <button className="text-[#3B82F6] hover:text-[#3B82F6]/80 transition-colors text-sm">
                            Start a conversation
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Schedule Meeting Button */}
                <motion.a 
                  href="#send-message"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] text-white font-medium hover:opacity-90 transition-all text-sm"
                >
                  <CalendarDaysIcon className="w-4 h-4" />
                  Schedule a Meeting
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </motion.a>
              </motion.div>

              {/* Hero Illustration */}
              <motion.div 
                className="relative lg:h-[500px] lg:col-span-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/illustrations/contact/hero.svg"
                  alt="Contact Us"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="send-message" className="py-16 relative overflow-hidden">
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
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Form Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="text-left mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-base text-gray-400">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61]"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-1.5 text-sm">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0A1628] border border-[#243B61] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B2C] transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-1.5 text-sm">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0A1628] border border-[#243B61] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B2C] transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-1.5 text-sm">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0A1628] border border-[#243B61] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B2C] transition-colors"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-1.5 text-sm">Company</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#0A1628] border border-[#243B61] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B2C] transition-colors"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-white font-medium mb-1.5 text-sm">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full h-28 bg-[#0A1628] border border-[#243B61] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B2C] transition-colors resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] text-white font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    Send Message
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </motion.button>
                </form>
              </motion.div>

              {/* Form Illustration */}
              <motion.div 
                className="relative lg:h-[500px] hidden lg:block lg:col-span-2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/illustrations/contact/form.svg"
                  alt="Contact Form"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 