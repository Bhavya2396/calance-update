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
  SparklesIcon,
  ClockIcon,
  GlobeAltIcon,
  CheckCircleIcon
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      value: 'info@calanceus.com',
      href: 'mailto:info@calanceus.com',
      color: 'text-[#FF6B2C]',
      bgColor: 'bg-[#FF6B2C]/10',
      hoverBgColor: 'group-hover:bg-[#FF6B2C]/20',
      isExternal: false
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      value: '+1 (858) 243-0824',
      href: 'tel:+18582430824',
      color: 'text-[#3B82F6]',
      bgColor: 'bg-[#3B82F6]/10',
      hoverBgColor: 'group-hover:bg-[#3B82F6]/20',
      isExternal: false
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      value: '11622 El Camino Real, Suite 100',
      subValue: 'San Diego, CA 92130',
      href: 'https://maps.google.com/?q=11622+El+Camino+Real+Suite+100+San+Diego+CA+92130',
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
      hoverBgColor: 'group-hover:bg-[#10B981]/20',
      isExternal: true
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      value: 'Monday - Friday',
      subValue: '9:00 AM - 6:00 PM PST',
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10',
      hoverBgColor: 'group-hover:bg-[#8B5CF6]/20'
    }
  ]

  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
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
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-4"
              >
                <SparklesIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Get in Touch</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Let's Start Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]">
                  Digital Journey
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto"
              >
                Ready to transform your business? Our team is here to help you navigate your digital transformation journey with innovative solutions tailored to your needs.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative z-10"
              >
                {/* Contact Methods Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.isExternal ? '_blank' : undefined}
                          rel={method.isExternal ? 'noopener noreferrer' : undefined}
                          className="block h-full"
                        >
                          <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-4 border border-[#243B61] hover:border-[#3B82F6] transition-all duration-300 h-full">
                            <div className="flex gap-4">
                              <div className={`p-2.5 rounded-lg ${method.bgColor} ${method.hoverBgColor} transition-colors`}>
                                <method.icon className={`w-5 h-5 ${method.color}`} />
                              </div>
                              <div>
                                <h3 className="text-white font-semibold text-sm mb-1">{method.title}</h3>
                                <p className={`${method.color} text-sm mb-0.5`}>{method.value}</p>
                                {method.subValue && (
                                  <p className="text-gray-400 text-sm">{method.subValue}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-4 border border-[#243B61] transition-all duration-300 h-full">
                          <div className="flex gap-4">
                            <div className={`p-2.5 rounded-lg ${method.bgColor} ${method.hoverBgColor} transition-colors`}>
                              <method.icon className={`w-5 h-5 ${method.color}`} />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-sm mb-1">{method.title}</h3>
                              <p className={`${method.color} text-sm mb-0.5`}>{method.value}</p>
                              {method.subValue && (
                                <p className="text-gray-400 text-sm">{method.subValue}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Illustration */}
                <div className="relative h-64 lg:h-80">
                  <Image
                    src="/images/illustrations/contact/contact-illustration.svg"
                    alt="Contact Illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative z-10"
              >
                <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#243B61]">
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#0A1628] border border-[#243B61] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                          placeholder="Your name"
                          required
                          disabled={isSubmitting || isSubmitted}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#0A1628] border border-[#243B61] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                          placeholder="your@email.com"
                          required
                          disabled={isSubmitting || isSubmitted}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#0A1628] border border-[#243B61] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                          placeholder="Your phone number"
                          disabled={isSubmitting || isSubmitted}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#0A1628] border border-[#243B61] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                          placeholder="Your company name"
                          disabled={isSubmitting || isSubmitted}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2.5 bg-[#0A1628] border border-[#243B61] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                        placeholder="How can we help you?"
                        required
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className={`w-full px-6 py-3 bg-gradient-to-r from-[#FF6B2C] to-[#FF6B2C] hover:to-[#FF8F2C] text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center group ${
                        (isSubmitting || isSubmitted) ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                      disabled={isSubmitting || isSubmitted}
                      whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircleIcon className="w-5 h-5 mr-2" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 