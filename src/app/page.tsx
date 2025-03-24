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
  PhoneIcon,
  BuildingOfficeIcon,
  ArrowsRightLeftIcon,
  CpuChipIcon,
  BeakerIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'
import EndToEndSolution from '@/components/EndToEndSolution'
import AISolutions from '@/components/sections/AISolutions'
import SolutionsOverview from '@/components/sections/SolutionsOverview'
import IntegrationTools from '@/components/sections/IntegrationTools'
import CTASection from '@/components/sections/CTASection'
import TechnologyPartners from '@/components/sections/TechnologyPartners'
import Link from 'next/link'
import StaffingSolutions from '@/components/sections/StaffingSolutions'

export default function Home() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      {/* Main Content */}
      <div className="pt-16 sm:pt-12">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/20 to-[#3B82F6]/20" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              background: [
                "radial-gradient(1000px circle at 70% 20%, rgba(255, 107, 44, 0.15), transparent 80%)",
                "radial-gradient(800px circle at 30% 70%, rgba(59, 130, 246, 0.15), transparent 70%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C]">
                  <SparklesIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">Enterprise Solutions</span>
                </div>
                <div className="h-[2px] w-12 bg-[#FF6B2C]" />
              </div>
              
              {/* Mobile Illustration */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] mb-8 lg:hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/10 to-[#3B82F6]/10 rounded-3xl" />
                <Image
                  src="/images/illustrations/hero-enterprise.svg"
                  alt="Enterprise Technology Solutions"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
                Transform Your Business
                <span className="block mt-2 text-[#FF6B2C]">
                  With Innovation
                </span>
              </h1>
              
              <div className="max-w-xl">
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Empowering enterprises with cutting-edge solutions in Cloud Infrastructure, Security, and Digital Transformation.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <GlowingButton href="/contact" className="bg-[#FF6B2C] hover:bg-[#FF6B2C]/90">
                    Get Started
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </GlowingButton>
                  <GlowingButton href="/solutions" variant="secondary" className="bg-[#1A2B44] hover:bg-[#243B61] border border-[#FF6B2C]/20">
                    Explore Solutions
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </GlowingButton>
                </div>
              </div>
            </motion.div>

            {/* Desktop Hero Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative hidden lg:block order-1 lg:order-2"
            >
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/10 to-[#3B82F6]/10 rounded-3xl" />
                <Image
                  src="/images/illustrations/hero-enterprise.svg"
                  alt="Enterprise Technology Solutions"
                  fill
                  className="object-contain p-8"
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

      {/* Our Approach Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0A1628]" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              background: [
                "radial-gradient(600px circle at 0% 0%, rgba(255, 107, 44, 0.1), transparent 70%)",
                "radial-gradient(600px circle at 100% 100%, rgba(255, 107, 44, 0.05), transparent 70%)",
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
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
              <RocketLaunchIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Transforming Businesses Through{" "}
              <span className="text-[#FF6B2C]">Technology Excellence</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We deliver end-to-end solutions that drive innovation and growth across your organization
            </p>
          </motion.div>

          {/* Mobile Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square mb-12 lg:hidden"
          >
            <Image
              src="/images/illustrations/approach/hero.svg"
              alt="Our Approach"
              fill
              className="object-contain"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                {/* Timeline line with reduced width and more subtle gradient */}
                <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF6B2C]/40 to-[#FF6B2C]/10" />
                {[
                  {
                    icon: <LightBulbIcon className="w-6 h-6" />,
                    title: "Discovery & Strategy",
                    description: "We analyze your needs and develop a comprehensive roadmap for digital transformation",
                  },
                  {
                    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
                    title: "Custom Development",
                    description: "Our experts build tailored solutions using cutting-edge technologies",
                  },
                  {
                    icon: <ArrowsRightLeftIcon className="w-6 h-6" />,
                    title: "Integration & Deployment",
                    description: "Seamless integration with your existing systems and efficient deployment",
                  },
                  {
                    icon: <ChartBarIcon className="w-6 h-6" />,
                    title: "Optimization & Growth",
                    description: "Continuous improvement and scaling of solutions to match your growth",
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-12 pb-8 last:pb-0"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#1A2B44] border border-[#FF6B2C]/20 text-[#FF6B2C]">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#FF6B2C]/20 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Learn More About Our Approach
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Desktop Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square hidden lg:block"
            >
              <Image
                src="/images/illustrations/approach/hero.svg"
                alt="Our Approach"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Procore Tools Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-emerald-500/10" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-emerald-500 mb-4">
              <BuildingOfficeIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Construction Technology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Procore Integrations
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Connect your critical business systems with Procore to streamline construction management workflows
            </p>
          </motion.div>

          {/* Mobile Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square mb-12 lg:hidden"
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-96 h-24 z-10">
              <Image
                src="/images/illustrations/procore.png"
                alt="Procore Logo"
                fill
                className="object-contain"
              />
            </div>
            <Image
              src="/images/illustrations/procore/hero.svg"
              alt="Procore Integrations"
              fill
              className="object-contain"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-2 lg:order-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <ServerIcon className="w-8 h-8 text-emerald-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">ERP Systems</h3>
                  <p className="text-gray-400">Seamless integration with leading ERP solutions</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <ChartBarIcon className="w-8 h-8 text-emerald-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Financial Management</h3>
                  <p className="text-gray-400">Automated cost tracking and reporting</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <ShieldCheckIcon className="w-8 h-8 text-emerald-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Compliance</h3>
                  <p className="text-gray-400">Insurance and regulatory compliance tracking</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <ArrowsRightLeftIcon className="w-8 h-8 text-emerald-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Data Sync</h3>
                  <p className="text-gray-400">Real-time two-way data synchronization</p>
                </div>
              </div>

              <Link 
                href="/solutions/procore-tools"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
              >
                Explore Integrations
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Desktop Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square hidden lg:block order-1 lg:order-2"
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-96 h-24 z-10">
                <Image
                  src="/images/illustrations/procore.png"
                  alt="Procore Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <Image
                src="/images/illustrations/procore/hero.svg"
                alt="Procore Integrations"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <SolutionsOverview />

      {/* AI Solutions Section */}
      <AISolutions />

      {/* Technology Partners */}
      <TechnologyPartners />

      {/* Enterprise Integration Solutions Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#10B981]/20" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#3B82F6] mb-4">
              <ArrowsRightLeftIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Enterprise Integration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Enterprise{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                Integration Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Connect, synchronize, and automate your business systems with our enterprise-grade integration platform
            </p>
          </motion.div>

          {/* Mobile Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square mb-12 lg:hidden"
          >
            <Image
              src="/images/illustrations/integrations/hero.svg"
              alt="Enterprise Integration Solutions"
              fill
              className="object-contain"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#3B82F6]/20 transition-colors">
                  <CloudIcon className="w-8 h-8 text-[#3B82F6] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">API Integration</h3>
                  <p className="text-gray-400">Connect and orchestrate APIs across your enterprise ecosystem</p>
                </div>
                <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#3B82F6]/20 transition-colors">
                  <ArrowsRightLeftIcon className="w-8 h-8 text-[#3B82F6] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Data Synchronization</h3>
                  <p className="text-gray-400">Real-time data sync with intelligent conflict resolution</p>
                </div>
                <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#3B82F6]/20 transition-colors">
                  <ServerIcon className="w-8 h-8 text-[#3B82F6] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Cloud Connectivity</h3>
                  <p className="text-gray-400">Seamless integration with major cloud platforms</p>
                </div>
                <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#3B82F6]/20 transition-colors">
                  <CogIcon className="w-8 h-8 text-[#3B82F6] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Workflow Automation</h3>
                  <p className="text-gray-400">Design and deploy automated business processes</p>
                </div>
              </div>

              <Link 
                href="/solutions/integrations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Explore Integration Solutions
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Desktop Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square hidden lg:block"
            >
              <Image
                src="/images/illustrations/integrations/hero.svg"
                alt="Enterprise Integration Solutions"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

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
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity"
              >
                View All Case Studies
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
                          </motion.div>
                          </div>
      </section>

      {/* Staffing Solutions Section */}
      <StaffingSolutions />

      {/* CTA Section */}
        <CTASection />
        </div>
    </main>
  )
}