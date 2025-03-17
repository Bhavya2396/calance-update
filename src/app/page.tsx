'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  SparklesIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  CheckIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  CodeBracketIcon,
  CircleStackIcon,
  HeartIcon,
  ServerIcon,
  ClockIcon,
  UserGroupIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'
import EndToEndSolution from '@/components/EndToEndSolution'
import MainHeader from '@/components/MainHeader'
import AISolutions from '@/components/sections/AISolutions'
import SolutionsOverview from '@/components/sections/SolutionsOverview'
import IntegrationTools from '@/components/sections/IntegrationTools'
import CTASection from '@/components/sections/CTASection'
import TechnologyPartners from '@/components/sections/TechnologyPartners'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      <MainHeader />
      
      {/* Main Content */}
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 flex items-center overflow-hidden">
        {/* Background Effects */}
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
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Content */}
          <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-4">
                <SparklesIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Enterprise Technology Solutions</span>
            </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]">
                  Innovative Technology
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 mb-6 max-w-lg">
                Empowering enterprises with cutting-edge solutions in AI, Cloud, Security, and Digital Transformation.
              </p>

              <div className="flex flex-wrap gap-4">
                <GlowingButton href="/contact">
                  Get Started
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </GlowingButton>
                <GlowingButton href="/solutions" variant="secondary">
                  Explore Solutions
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </GlowingButton>
              </div>
          </motion.div>

            {/* Hero Illustration */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square">
              <Image
                  src="/images/illustrations/home/hero.svg"
                  alt="Enterprise Technology Solutions"
                fill
                className="object-contain"
                  priority
                />
                    </div>
                                </motion.div>
                            </div>
                                </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
            Trusted by Industry Leaders
          </h2>
            <p className="text-gray-400 text-lg">
              Delivering enterprise solutions to leading organizations worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'Isuzu', image: '/images/illustrations/isuzu.webp' },
              { name: 'Crown Poly', image: '/images/clients/crownpoly.webp' },
              { name: 'Wellpath', image: '/images/clients/Wellpath (1).webp' },
              { name: 'Verogen', image: '/images/clients/Verogen (1).webp' },
              { name: 'Hollywood Presbyterian', image: '/images/clients/Hollywood Presbyterian (1).webp' },
              { name: 'Westview', image: '/images/clients/westview (1).webp' }
            ].map((client) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="aspect-[3/2] relative group"
              >
                <div className="absolute inset-0 bg-white rounded-lg border border-[#243B61] group-hover:border-[#3B82F6]/50 transition-all duration-300 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                      src={client.image}
                      alt={client.name}
                  fill
                      className="object-contain p-3 transition-all duration-300"
                      sizes="(max-width: 768px) 160px, (max-width: 1024px) 140px, 160px"
                      />
          </div>
        </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Solution Section */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <EndToEndSolution />
                        </div>
                          </div>

      {/* AI Solutions Section */}
        <AISolutions />

        {/* Solutions Overview */}
        <SolutionsOverview />

        {/* Technology Partners */}
        <TechnologyPartners />

        {/* Integration Tools Section */}
        <IntegrationTools />

        {/* Featured Case Studies */}
        <section className="py-24 relative overflow-hidden">
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
                            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-4">
                <SparklesIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Success Stories</span>
                        </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Featured Case Studies
            </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Explore how we've helped leading companies achieve their digital transformation goals
            </p>
                            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Enhanced Clinical Trials Platform',
                description: 'Implementation of an intelligent platform for automated complexity scoring and management of clinical trials, improving efficiency and accuracy.',
                image: '/images/illustrations/case-studies/clinical-trials/hero.svg',
                tags: ['Healthcare', 'AI/ML', 'Clinical Trials', 'Automation']
              },
              {
                title: 'DevOps Transformation for Spotmentor',
                description: 'Comprehensive DevOps implementation featuring automated CI/CD pipelines and infrastructure as code for enhanced development efficiency.',
                image: '/images/illustrations/case-studies/spotmentor-devops/hero.svg',
                tags: ['DevOps', 'AWS', 'Kubernetes', 'CI/CD']
              },
              {
                title: 'Secure FinTech Infrastructure',
                description: 'Implementation of a zero-trust architecture and GitOps pipeline for a leading fintech company, ensuring security compliance and automated deployments.',
                image: '/images/illustrations/case-studies/alpha-fortress/hero.svg',
                tags: ['FinTech', 'DevOps', 'Security', 'AWS']
              }
            ].map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#3B82F6] transition-colors h-full">
                  {/* Illustration */}
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-[#0A1628]/50 group-hover:bg-[#0A1628]/70 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent" />
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-[#0A1628] text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="absolute bottom-8 right-8">
                    <Link
                      href={`/case-studies`}
                      className="flex items-center text-sm font-medium text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

            {/* View All Case Studies Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-medium hover:opacity-90 transition-opacity"
              >
                View All Case Studies
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
                          </motion.div>
                          </div>
      </section>

      {/* CTA Section */}
        <CTASection />
        </div>
    </main>
  )
}