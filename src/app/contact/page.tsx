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
  GlobeAltIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Header from '@/components/Header'

type ContactMethod = {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
  subValue?: string;
  color: string;
  bgColor: string;
  hoverBgColor: string;
  isExternal?: boolean;
}

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

  const contactMethods: ContactMethod[] = [
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
      icon: ClockIcon,
      title: 'Business Hours',
      value: 'Monday - Friday',
      subValue: '9:00 AM - 6:00 PM PST',
      color: 'text-[#8B5CF6]',
      bgColor: 'bg-[#8B5CF6]/10',
      hoverBgColor: 'group-hover:bg-[#8B5CF6]/20'
    }
  ]

  const locations = [
    {
      title: 'Anaheim, CA - HQ',
      address: [
        '888 S. Disneyland Drive',
        'Suite 500',
        'Anaheim, CA 92802'
      ],
      color: 'text-[#FF6B2C]',
      bgColor: 'bg-[#FF6B2C]/10',
      hoverBgColor: 'group-hover:bg-[#FF6B2C]/20',
      href: 'https://maps.google.com/?q=888+S+Disneyland+Drive+Suite+500+Anaheim+CA+92802'
    },
    {
      title: 'Dallas, TX',
      address: [
        '1431 Greenway Dr.',
        'Suite 500',
        'Irving, TX 75038'
      ],
      color: 'text-[#3B82F6]',
      bgColor: 'bg-[#3B82F6]/10',
      hoverBgColor: 'group-hover:bg-[#3B82F6]/20',
      href: 'https://maps.google.com/?q=1431+Greenway+Dr+Suite+500+Irving+TX+75038'
    },
    {
      title: 'Atlanta, GA',
      address: [
        '200 Ashford Center North',
        'Suite 300',
        'Atlanta, GA 30338'
      ],
      color: 'text-[#FF6B2C]',
      bgColor: 'bg-[#FF6B2C]/10',
      hoverBgColor: 'group-hover:bg-[#FF6B2C]/20',
      href: 'https://maps.google.com/?q=200+Ashford+Center+North+Suite+300+Atlanta+GA+30338'
    },
    {
      title: 'Mission Viejo, CA',
      address: [
        '26440 La Alameda',
        'Suite 300',
        'Mission Viejo, CA 92691'
      ],
      color: 'text-[#3B82F6]',
      bgColor: 'bg-[#3B82F6]/10',
      hoverBgColor: 'group-hover:bg-[#3B82F6]/20',
      href: 'https://maps.google.com/?q=26440+La+Alameda+Suite+300+Mission+Viejo+CA+92691'
    },
    {
      title: 'Boulder, CO',
      address: [
        '6684 Gunpark Drive',
        'Suite 200',
        'Boulder, CO 80301'
      ],
      color: 'text-[#FF6B2C]',
      bgColor: 'bg-[#FF6B2C]/10',
      hoverBgColor: 'group-hover:bg-[#FF6B2C]/20',
      href: 'https://maps.google.com/?q=6684+Gunpark+Drive+Suite+200+Boulder+CO+80301'
    },
    {
      title: 'Development Center',
      address: [
        'Unit 4, 2nd Floor, Tower 1',
        'Tata Intellion Park, Mikado IT/ITeS SEZ',
        'Sector 59, Gurugram 122005',
        'Haryana, India'
      ],
      color: 'text-[#3B82F6]',
      bgColor: 'bg-[#3B82F6]/10',
      hoverBgColor: 'group-hover:bg-[#3B82F6]/20',
      href: 'https://maps.google.com/?q=Tata+Intellion+Park+Sector+59+Gurugram+122005+Haryana+India'
    },
    {
      title: 'Corporate Office',
      address: [
        '201 Greenwood Plaza',
        'Greenwood City, Sector 45',
        'Gurugram 122003',
        'Haryana, India'
      ],
      color: 'text-[#FF6B2C]',
      bgColor: 'bg-[#FF6B2C]/10',
      hoverBgColor: 'group-hover:bg-[#FF6B2C]/20',
      href: 'https://maps.google.com/?q=201+Greenwood+Plaza+Greenwood+City+Sector+45+Gurugram+122003+Haryana+India'
    }
  ]

  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/10 via-[#3B82F6]/10 to-transparent" />
            <motion.div 
              className="absolute inset-0"
              animate={{ 
                background: [
                  "radial-gradient(1000px circle at 0% 0%, rgba(255, 107, 44, 0.15), transparent 50%)",
                  "radial-gradient(1000px circle at 100% 100%, rgba(59, 130, 246, 0.15), transparent 50%)",
                  "radial-gradient(1000px circle at 100% 0%, rgba(255, 107, 44, 0.15), transparent 50%)",
                  "radial-gradient(1000px circle at 0% 100%, rgba(59, 130, 246, 0.15), transparent 50%)"
                ]
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B2C]/10 to-[#3B82F6]/10 border border-[#FF6B2C]/20 backdrop-blur-sm mb-6">
                  <SparklesIcon className="w-5 h-5 text-[#FF6B2C]" />
                  <span className="text-sm font-medium bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] bg-clip-text text-transparent">Global Presence</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Connect With Our{' '}
                  <span className="relative">
                    <span className="relative z-10 text-white">
                      Global Offices
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B2C]/20 to-[#3B82F6]/20 blur-xl" />
                  </span>
                </h1>
                
                <p className="text-lg text-gray-400 mb-10">
                  With offices across North America and India, we're positioned to serve clients worldwide with local expertise and global capabilities.
                </p>
              </motion.div>
            </div>

            {/* Globe Illustration with Office Locations */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="aspect-[4/3] relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/illustrations/contact/globe.svg"
                    alt="Global Presence"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* Office Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {locations.map((location, index) => (
                <motion.div
                  key={location.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#3B82F6] transition-all duration-300 h-full hover:bg-[#1A2B44]/70">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${location.bgColor} ${location.hoverBgColor} transition-colors`}>
                          <MapPinIcon className={`w-6 h-6 ${location.color}`} />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-2 group-hover:text-[#3B82F6] transition-colors">{location.title}</h3>
                          {location.address.map((line, i) => (
                            <p key={i} className="text-gray-400 text-sm leading-relaxed">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Ready to transform your business? Our team is here to help you navigate your digital transformation journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.isExternal ? '_blank' : undefined}
                          rel={method.isExternal ? 'noopener noreferrer' : undefined}
                          className="block h-full"
                        >
                      <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#3B82F6] transition-all duration-300 h-full hover:bg-[#1A2B44]/70">
                        <div className="flex flex-col items-center text-center gap-4">
                          <div className={`p-4 rounded-lg ${method.bgColor} ${method.hoverBgColor} transition-colors`}>
                            <method.icon className={`w-6 h-6 ${method.color}`} />
                              </div>
                              <div>
                            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#3B82F6] transition-colors">{method.title}</h3>
                            <p className={`${method.color} text-base mb-1`}>{method.value}</p>
                                {method.subValue && (
                                  <p className="text-gray-400 text-sm">{method.subValue}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </a>
                      ) : (
                    <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className={`p-4 rounded-lg ${method.bgColor} ${method.hoverBgColor} transition-colors`}>
                          <method.icon className={`w-6 h-6 ${method.color}`} />
                            </div>
                            <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{method.title}</h3>
                          <p className={`${method.color} text-base mb-1`}>{method.value}</p>
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

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
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
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#FF6B2C] to-[#FF6B2C] hover:to-[#FF8F2C] text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center group"
                    >
                      Send Message
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
} 