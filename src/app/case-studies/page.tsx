'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  ChartBarIcon, 
  RocketLaunchIcon, 
  SparklesIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  BuildingOffice2Icon,
  ServerIcon,
  CloudIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  FunnelIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  TagIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import GlowingButton from '@/components/GlowingButton'

// Define solution categories
const solutionCategories = [
  { id: 'all', name: 'All Categories' },
  { id: 'integration', name: 'System Integration' },
  { id: 'cloud', name: 'Cloud & Infrastructure' },
  { id: 'devops', name: 'DevOps & Automation' },
  { id: 'sharepoint', name: 'SharePoint Services' },
  { id: 'ai', name: 'AI & Analytics' },
  { id: 'security', name: 'Cybersecurity' },
  { id: 'app-dev', name: 'Application Development' }
]

// Define type categories
const typeCategories = [
  { id: 'all', name: 'All Types' },
  { id: 'case-study', name: 'Case Study' },
  { id: 'guide', name: 'Quick Guide' },
  { id: 'integration', name: 'Integration' },
  { id: 'video', name: 'Video' },
  { id: 'demo', name: 'Demo' }
]

interface Tag {
  label: string
  color: 'orange' | 'blue'
}

interface CaseStudy {
  id: string
  title: string
  description: string
  image: string
  href: string
  tags: Tag[]
  category: string
  featured: boolean
  duration?: string
  teamSize?: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'clinical-trials',
    title: 'AI-Enhanced Clinical Trials Platform',
    description: 'Revolutionizing healthcare research with AI-powered clinical trials management and data analysis.',
    image: '/images/illustrations/case-studies/clinical-trials/hero.svg',
    href: '/case-studies/clinical-trials',
    tags: [
      { label: 'Healthcare', color: 'orange' },
      { label: 'AI/ML', color: 'blue' }
    ],
    category: 'ai',
    featured: true,
    duration: '6 months',
    teamSize: '8 specialists'
  },
  {
    id: 'spotmentor-devops',
    title: 'DevOps Transformation for Spotmentor',
    description: 'Implementing modern cloud infrastructure and CI/CD pipelines for enhanced development efficiency.',
    image: '/images/illustrations/case-studies/spotmentor-devops/hero.svg',
    href: '/case-studies/spotmentor-devops',
    tags: [
      { label: 'DevOps', color: 'orange' },
      { label: 'AWS', color: 'blue' }
    ],
    category: 'devops',
    featured: true,
    duration: '4 months',
    teamSize: '5 specialists'
  },
  {
    id: 'alpha-fortress',
    title: 'Secure FinTech Infrastructure',
    description: 'Building a highly secure and compliant cloud infrastructure for financial services.',
    image: '/images/illustrations/case-studies/alpha-fortress/hero.svg',
    href: '/case-studies/alpha-fortress',
    tags: [
      { label: 'FinTech', color: 'orange' },
      { label: 'Security', color: 'blue' }
    ],
    category: 'security',
    featured: true,
    duration: '5 months',
    teamSize: '6 specialists'
  },
  {
    id: 'pmweb-peoplesoft',
    title: 'PeopleSoft Integration for PMWeb',
    description: 'Seamless integration between PMWeb construction management and PeopleSoft ERP systems.',
    image: '/images/illustrations/case-studies/pmweb-peoplesoft/hero.svg',
    href: '/case-studies/pmweb-peoplesoft',
    tags: [
      { label: 'Construction', color: 'orange' },
      { label: 'Integration', color: 'blue' }
    ],
    category: 'integration',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'procore-xero',
    title: 'Procore-Xero Integration',
    description: 'Automating financial data flow between Procore construction management and Xero accounting.',
    image: '/images/illustrations/case-studies/procore-xero/hero.svg',
    href: '/case-studies/procore-xero',
    tags: [
      { label: 'Construction', color: 'orange' },
      { label: 'Integration', color: 'blue' }
    ],
    category: 'integration',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'finca-aura',
    title: 'Finca Aura Digital Transformation',
    description: 'Modernizing agricultural operations with IoT sensors and real-time analytics dashboard.',
    image: '/images/illustrations/case-studies/finca-aura/hero.svg',
    href: '/case-studies/finca-aura',
    tags: [
      { label: 'Agriculture', color: 'orange' },
      { label: 'IoT', color: 'blue' }
    ],
    category: 'app-dev',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'isuzu-sharepoint',
    title: 'Isuzu SharePoint Modernization',
    description: 'Upgrading legacy SharePoint environment to modern SharePoint Online with enhanced collaboration features.',
    image: '/images/illustrations/case-studies/isuzu-sharepoint/hero.svg',
    href: '/case-studies/isuzu-sharepoint',
    tags: [
      { label: 'Automotive', color: 'orange' },
      { label: 'SharePoint', color: 'blue' }
    ],
    category: 'sharepoint',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'construction-rpa',
    title: 'Construction RPA Implementation',
    description: 'Automating repetitive construction documentation processes with Robotic Process Automation.',
    image: '/images/illustrations/case-studies/construction-rpa/hero.svg',
    href: '/case-studies/construction-rpa',
    tags: [
      { label: 'Construction', color: 'orange' },
      { label: 'Automation', color: 'blue' }
    ],
    category: 'devops',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'wellpath-sharepoint',
    title: 'Wellpath SharePoint Intranet',
    description: 'Creating a modern healthcare intranet with SharePoint Online for improved internal communications.',
    image: '/images/illustrations/case-studies/wellpath-sharepoint/hero.svg',
    href: '/case-studies/wellpath-sharepoint',
    tags: [
      { label: 'Healthcare', color: 'orange' },
      { label: 'SharePoint', color: 'blue' }
    ],
    category: 'sharepoint',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'bch-procore',
    title: 'BCH Procore Implementation',
    description: 'Streamlining construction project management with Procore implementation and custom integrations.',
    image: '/images/illustrations/case-studies/bch-procore/hero.svg',
    href: '/case-studies/bch-procore',
    tags: [
      { label: 'Construction', color: 'orange' },
      { label: 'Project Management', color: 'blue' }
    ],
    category: 'app-dev',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'harkins-procore',
    title: 'Harkins Procore Integration',
    description: 'Custom integration between Procore and enterprise systems for streamlined construction workflows.',
    image: '/images/illustrations/case-studies/harkins-procore/hero.svg',
    href: '/case-studies/harkins-procore',
    tags: [
      { label: 'Construction', color: 'orange' },
      { label: 'Integration', color: 'blue' }
    ],
    category: 'integration',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'bank-sharepoint',
    title: 'Banking SharePoint Portal',
    description: 'Secure document management and collaboration portal for financial services compliance.',
    image: '/images/illustrations/case-studies/bank-sharepoint/hero.svg',
    href: '/case-studies/bank-sharepoint',
    tags: [
      { label: 'Finance', color: 'orange' },
      { label: 'SharePoint', color: 'blue' }
    ],
    category: 'sharepoint',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'sentinel-app',
    title: 'Sentinel Security App',
    description: 'Mobile application for real-time security monitoring and incident response management.',
    image: '/images/illustrations/case-studies/sentinel-app/hero.svg',
    href: '/case-studies/sentinel-app',
    tags: [
      { label: 'Security', color: 'orange' },
      { label: 'Mobile', color: 'blue' }
    ],
    category: 'app-dev',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'kubota-mobile',
    title: 'Kubota Mobile Field Service',
    description: 'Mobile application for field service technicians with offline capabilities and real-time synchronization.',
    image: '/images/illustrations/case-studies/kubota-mobile/hero.svg',
    href: '/case-studies/kubota-mobile',
    tags: [
      { label: 'Manufacturing', color: 'orange' },
      { label: 'Mobile', color: 'blue' }
    ],
    category: 'app-dev',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'healthcare-helpdesk',
    title: 'Healthcare IT Helpdesk',
    description: 'Implementing a modern IT service management solution for a large healthcare provider.',
    image: '/images/illustrations/case-studies/healthcare-helpdesk/hero.svg',
    href: '/case-studies/healthcare-helpdesk',
    tags: [
      { label: 'Healthcare', color: 'orange' },
      { label: 'IT Services', color: 'blue' }
    ],
    category: 'cloud',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  },
  {
    id: 'westview-backup',
    title: 'Westview Cloud Backup Solution',
    description: 'Implementing a robust cloud backup and disaster recovery solution for critical business data.',
    image: '/images/illustrations/case-studies/westview-backup/hero.svg',
    href: '/case-studies/westview-backup',
    tags: [
      { label: 'Infrastructure', color: 'orange' },
      { label: 'Cloud', color: 'blue' }
    ],
    category: 'cloud',
    featured: false,
    duration: '3 months',
    teamSize: '4 specialists'
  }
]

const CaseStudyCard = ({ study }: { study: typeof caseStudies[0] }) => {
  const getStudyUrl = (id: string) => {
    return `/case-studies/${id}`
  }

  return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] rounded-2xl overflow-hidden hover:border-[#3B82F6] transition-colors"
    >
      <div className="relative aspect-[2/1]">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
          className="object-cover"
        />
                  </div>
                  <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{study.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag, index) => (
                        <span
              key={index}
              className="px-2 py-1 bg-[#243B61] text-xs text-gray-300 rounded-full"
                        >
              {tag.label}
                        </span>
                      ))}
                    </div>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        {study.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <UserGroupIcon className="w-4 h-4" />
                        {study.teamSize}
                      </div>
                  </div>

                    <GlowingButton
          href={getStudyUrl(study.id)}
          className="w-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Case Study
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </GlowingButton>
                  </div>
                </motion.div>
  )
}

export default function CaseStudies() {
  const [selectedSolution, setSelectedSolution] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter case studies based on selected solution and search query
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSolution = selectedSolution === 'all' || study.category === selectedSolution
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.tags.some(tag => tag.label.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesSolution && matchesSearch
  })

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
                <span className="text-sm font-medium">Success Stories</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Discover Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]">
                  Client Success Stories
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto"
              >
                Explore how we've helped businesses transform their operations with innovative solutions and measurable results.
              </motion.p>
            </div>

            {/* Filters */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#1A2B44] border border-[#243B61] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors"
                />
                <MagnifyingGlassIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

              {/* Solution Filter */}
              <div className="relative">
                <select
                  value={selectedSolution}
                  onChange={(e) => setSelectedSolution(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#1A2B44] border border-[#243B61] rounded-lg text-white appearance-none focus:outline-none focus:border-[#3B82F6] transition-colors"
                >
                    {solutionCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                    ))}
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                
              {/* Type Filter */}
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#1A2B44] border border-[#243B61] rounded-lg text-white appearance-none focus:outline-none focus:border-[#3B82F6] transition-colors"
                >
                    {typeCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                    ))}
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCaseStudies.map((study, index) => (
              <motion.div
                  key={study.title}
                initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a 
                    href={study.href}
                    className="block group h-full"
                  >
                    <div className="h-full bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] hover:border-[#3B82F6] transition-all duration-300">
                      {/* Illustration */}
                      <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-[#FF6B2C]/5 to-[#3B82F6]/5">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                          className="object-contain p-4"
                        />
                    </div>

                    {/* Content */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          {study.tags.map((tag, i) => (
                          <span
                              key={i}
                              className="px-2 py-1 text-xs font-medium rounded-md"
                              style={{
                                backgroundColor: tag.color === 'orange' ? 'rgba(255, 107, 44, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                color: tag.color === 'orange' ? '#FF6B2C' : '#3B82F6'
                              }}
                            >
                              {tag.label}
                          </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FF6B2C] transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {study.description}
                        </p>
                        <div className="flex items-center text-[#FF6B2C] font-medium group-hover:gap-2 transition-all">
                          Read Case Study
                          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                      </div>
                    </div>
                  </a>
              </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 