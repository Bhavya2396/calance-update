'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SparklesIcon,
  GlobeAmericasIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  HeartIcon,
  BuildingOffice2Icon,
  ArrowRightIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'

export default function About() {
  const milestones = [
    {
      year: 2003,
      title: 'Vision Takes Shape',
      description: 'Founded by Amit Govil with a vision to elevate IT services beyond traditional outsourcing, focusing on sophisticated consulting and system integration.',
      icon: LightBulbIcon
    },
    {
      year: 2005,
      title: 'Global Expansion',
      description: 'Expanded operations to India, establishing a strong global presence and building a foundation for comprehensive service delivery.',
      icon: GlobeAmericasIcon
    },
    {
      year: 2010,
      title: 'North American Growth',
      description: 'Extended services to Canada, strengthening North American presence and diversifying our client portfolio.',
      icon: BuildingOffice2Icon
    },
    {
      year: 2015,
      title: 'Digital Evolution',
      description: 'Launched comprehensive digital transformation solutions, embracing cloud technologies and advanced analytics.',
      icon: CloudIcon
    },
    {
      year: 2022,
      title: 'DTS Group Integration',
      description: 'Joined the DTS Group, enhancing our global reach and expanding our service capabilities across new markets.',
      icon: RocketLaunchIcon
    }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Driving technological advancement through creative solutions and cutting-edge technologies like Generative AI.',
      icon: LightBulbIcon,
      color: 'text-[#FF6B2C]',
      gradient: 'from-[#FF6B2C]/10 to-transparent'
    },
    {
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project through expert talent and disciplined execution.',
      icon: ChartBarIcon,
      color: 'text-[#3B82F6]',
      gradient: 'from-[#3B82F6]/10 to-transparent'
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparent practices and ethical business conduct in all our relationships.',
      icon: ShieldCheckIcon,
      color: 'text-[#FF6B2C]',
      gradient: 'from-[#FF6B2C]/10 to-transparent'
    },
    {
      title: 'Partnership',
      description: 'Creating lasting client alliances through mutual success and collaborative growth.',
      icon: UserGroupIcon,
      color: 'text-[#3B82F6]',
      gradient: 'from-[#3B82F6]/10 to-transparent'
    }
  ]

  const stats = [
    { value: '20+', label: 'Years of Excellence' },
    { value: '1000+', label: 'Team Members' },
    { value: '16', label: 'Global Offices' },
    { value: '500+', label: 'Clients Worldwide' }
  ]

  const services = [
    {
      title: 'AI & Analytics',
      description: 'Generative AI, Business Intelligence, and Data Science solutions',
      icon: BriefcaseIcon,
      color: 'text-[#FF6B2C]'
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Modern cloud solutions and infrastructure management',
      icon: CloudIcon,
      color: 'text-[#3B82F6]'
    },
    {
      title: 'Security & Compliance',
      description: 'Comprehensive cybersecurity and compliance services',
      icon: ShieldCheckIcon,
      color: 'text-[#FF6B2C]'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation and modernization',
      icon: RocketLaunchIcon,
      color: 'text-[#3B82F6]'
    }
  ]

  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      <div className="pt-16">
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
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-6">
                  <SparklesIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">Our Story</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Transforming Businesses Through{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]">
                    Technology
                  </span>
                </h1>
                
                <p className="text-lg text-gray-400 mb-6">
                  The name Calance, derived from "Customer Alliance," reflects our foundational belief in building strong partnerships for mutual success. Since 2003, we've been at the forefront of digital transformation, helping businesses adapt and thrive in an ever-evolving technological landscape.
                </p>

                <p className="text-lg text-gray-400 mb-8">
                  Today, as part of the DTS Group, we continue to empower organizations with innovative solutions in AI, Cloud, Security, and Digital Transformation across the United States, Canada, and India.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#3B82F6]/50 transition-all duration-300"
                    >
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Hero Illustration */}
              <motion.div 
                className="relative lg:h-[600px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/illustrations/about/hero.svg"
                  alt="Global Presence"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Comprehensive Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We offer a wide range of services designed to help businesses navigate their digital transformation journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#3B82F6]/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${service.color}/10 to-transparent flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Our Core Values
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Our values shape everything we do, from how we develop solutions to how we serve our clients and support our team members.
                </p>

                <div className="grid gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61]"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${value.gradient}`}>
                          <value.icon className={`w-6 h-6 ${value.color}`} />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                          <p className="text-gray-400">{value.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Values Illustration */}
              <motion.div 
                className="relative lg:h-[600px] hidden lg:block"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/illustrations/about/values.svg"
                  alt="Our Values"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From our founding to today, we've continuously evolved to meet the changing needs of businesses in the digital age.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#FF6B2C] to-[#3B82F6]" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#3B82F6]/50 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${
                            index % 2 === 0 ? 'from-[#FF6B2C]/10' : 'from-[#3B82F6]/10'
                          } to-transparent`}>
                            <milestone.icon className={`w-5 h-5 ${
                              index % 2 === 0 ? 'text-[#FF6B2C]' : 'text-[#3B82F6]'
                            }`} />
                          </div>
                          <div className={`text-xl font-bold ${
                            index % 2 === 0 ? 'text-[#FF6B2C]' : 'text-[#3B82F6]'
                          }`}>{milestone.year}</div>
                        </div>
                        <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                      index % 2 === 0 ? 'bg-[#FF6B2C]' : 'bg-[#3B82F6]'
                    }`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have already transformed their operations with our innovative solutions. Let's create lasting success together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
} 