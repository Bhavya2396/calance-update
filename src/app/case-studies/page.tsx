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
  TagIcon
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

const caseStudies = [
  {
    id: 1,
    title: 'Construction Firm Achieves Real-Time Data Integration with RPA',
    description: 'Implementing RPA automation to bridge Procore construction management software with legacy ERP systems for seamless financial data transfer.',
    image: '/images/illustrations/case-studies/construction-rpa/hero.svg',
    metrics: {
      efficiency: '85%',
      errors: '-95%',
      roi: '12 months'
    },
    tags: ['RPA', 'Construction', 'Process Automation'],
    duration: '3 months',
    teamSize: '8 experts',
    category: 'integration',
    type: 'case-study',
    client: 'Construction Firm',
    featured: true
  },
  {
    id: 2,
    title: 'SharePoint Migration for Isuzu Motors',
    description: 'Upgrade of Isuzu\'s SharePoint sites from the 2013 version to the 2019 on-premises version with migration of select internal sites to SharePoint Online.',
    image: '/images/illustrations/case-studies/isuzu-sharepoint/hero.svg',
    metrics: {
      completion: '100%',
      downtime: 'Minimal',
      satisfaction: '98%'
    },
    tags: ['SharePoint Migration', 'On-premises', 'SharePoint Online'],
    duration: '6 months',
    teamSize: '10 experts',
    category: 'sharepoint',
    type: 'case-study',
    client: 'Isuzu Motors',
    featured: true
  },
  {
    id: 3,
    title: 'SharePoint Migration for Leading Commercial Bank',
    description: 'Amidst a merger, the client needed to migrate from one SharePoint Online tenant to another while maintaining business continuity.',
    image: '/images/illustrations/case-studies/bank-sharepoint/hero.svg',
    metrics: {
      uptime: '99.9%',
      data: '100%',
      timeline: 'On schedule'
    },
    tags: ['SharePoint Online', 'Tenant Migration', 'Banking'],
    duration: '4 months',
    teamSize: '12 experts',
    category: 'sharepoint',
    type: 'case-study',
    client: 'Commercial Bank'
  },
  {
    id: 4,
    title: 'SharePoint Migrations & Ongoing Support for Wellpath',
    description: 'After a SharePoint upgrade in 2017 did not meet expectations, Wellpath sought a new partner to elevate their SharePoint environment.',
    image: '/images/illustrations/case-studies/wellpath-sharepoint/hero.svg',
    metrics: {
      uptime: '99.9%',
      user: '+85%',
      support: '24/7'
    },
    tags: ['SharePoint', 'Healthcare', 'IT Support'],
    duration: 'Ongoing',
    teamSize: '14 experts',
    category: 'sharepoint',
    type: 'case-study',
    client: 'Wellpath'
  },
  {
    id: 5,
    title: 'Procore + PeopleSoft Integration - Harkins Builders',
    description: 'Seamless integration between Procore construction management software and PeopleSoft ERP system for real-time financial data synchronization.',
    image: '/images/illustrations/case-studies/harkins-procore/hero.svg',
    metrics: {
      automation: '95%',
      errors: '-90%',
      efficiency: '+75%'
    },
    tags: ['Construction Tech', 'ERP Integration', 'Automation'],
    duration: '4 months',
    teamSize: '8 experts',
    category: 'integration',
    type: 'case-study',
    client: 'Harkins Builders'
  },
  {
    id: 6,
    title: 'Procore + PeopleSoft - Boston Children\'s Hospital',
    description: 'Integration solution between Procore and PeopleSoft for Boston Children\'s Hospital construction management and financial systems.',
    image: '/images/illustrations/case-studies/bch-procore/hero.svg',
    metrics: {
      financial: '100%',
      manual: '-95%',
      reporting: 'Real-time'
    },
    tags: ['Healthcare', 'Construction', 'Systems Integration'],
    duration: '5 months',
    teamSize: '9 experts',
    category: 'integration',
    type: 'case-study',
    client: 'Boston Children\'s Hospital',
    featured: true
  },
  {
    id: 7,
    title: 'Procore + Xero Integration for Ascot Group',
    description: 'Soon after implementing Procore, Ascot found a lack of communication to their ERP system, Xero. As a result, three skilled employees spent hours manually transferring data between systems, creating inefficiencies and potential for errors.',
    image: '/images/illustrations/case-studies/procore-xero/hero.svg',
    metrics: {
      automation: '95%',
      manual: '-90%',
      efficiency: '+80%'
    },
    tags: ['Procore', 'Xero', 'Integration', 'Construction', 'ERP'],
    duration: '3 months',
    teamSize: '6 experts',
    category: 'integration',
    type: 'case-study',
    client: 'Ascot Group'
  },
  {
    id: 8,
    title: 'PMWeb + PeopleSoft Integration for Massport',
    description: 'Massport manually entered data into projects within PMWeb and PeopleSoft. They quickly learned that their data was not consistent when input into the systems, creating discrepancies in finances and vendor information.',
    image: '/images/illustrations/case-studies/pmweb-peoplesoft/hero.svg',
    metrics: {
      projects: '150+',
      sync: 'Real-time',
      accuracy: '100%'
    },
    tags: ['PMWeb', 'PeopleSoft', 'Integration', 'Infrastructure', 'Finance'],
    duration: '4 months',
    teamSize: '8 experts',
    category: 'integration',
    type: 'case-study',
    client: 'Massport'
  },
  {
    id: 9,
    title: 'App Development - Sentinel Hydrosolutions',
    description: 'Developing innovative mobile application for Sentinel Hydrosolutions to manage water systems remotely.',
    image: '/images/illustrations/case-studies/sentinel-app/hero.svg',
    metrics: {
      control: 'Remote',
      monitoring: '24/7',
      efficiency: '+85%'
    },
    tags: ['Mobile App', 'IoT', 'Water Management'],
    duration: '7 months',
    teamSize: '11 experts',
    category: 'app-dev',
    type: 'case-study',
    client: 'Sentinel Hydrosolutions'
  },
  {
    id: 10,
    title: 'Mobile App Development - Kubota',
    description: 'Creating mobile applications for Kubota to enhance field operations and customer engagement.',
    image: '/images/illustrations/case-studies/kubota-mobile/hero.svg',
    metrics: {
      operations: 'Field-ready',
      engagement: '+75%',
      support: 'Enhanced'
    },
    tags: ['Mobile Apps', 'Field Operations', 'Customer Engagement'],
    duration: '8 months',
    teamSize: '12 experts',
    category: 'app-dev',
    type: 'case-study',
    client: 'Kubota'
  },
  {
    id: 11,
    title: 'Cloud Backup Implementation - Westview',
    description: 'Implementing robust cloud backup solution for Westview to ensure data security and business continuity.',
    image: '/images/illustrations/case-studies/westview-backup/hero.svg',
    metrics: {
      recovery: 'Rapid',
      uptime: '99.99%',
      security: 'Enhanced'
    },
    tags: ['Cloud Backup', 'Data Security', 'Business Continuity'],
    duration: '2 months',
    teamSize: '4 experts',
    category: 'cloud',
    type: 'case-study',
    client: 'Westview'
  },
  {
    id: 12,
    title: 'After Hours Help Desk - Healthcare Partners',
    description: 'Providing 24/7 IT support services for healthcare professionals with critical response times.',
    image: '/images/illustrations/case-studies/healthcare-helpdesk/hero.svg',
    metrics: {
      response: '< 5min',
      resolution: '95%',
      satisfaction: '98%'
    },
    tags: ['Help Desk', 'Healthcare IT', 'Support'],
    duration: 'Ongoing',
    teamSize: '25 experts',
    category: 'cloud',
    type: 'case-study',
    client: 'Healthcare Partners'
  },
  {
    id: 13,
    title: 'AI-Powered Impact Analysis Platform for Finca Aura',
    description: 'Development of a scalable AI platform for impact pathway mapping and analysis, featuring automated data processing and advanced topic modeling.',
    image: '/images/illustrations/case-studies/finca-aura/hero.svg',
    metrics: {
      compute: 'AWS EKS',
      automation: '100%',
      analysis: 'Real-time'
    },
    tags: ['AI/ML', 'AWS', 'Apache Airflow', 'Data Analytics'],
    duration: '6 months',
    teamSize: '10 experts',
    category: 'ai',
    type: 'case-study',
    client: 'Finca Aura'
  },
  {
    id: 14,
    title: 'AI-Enhanced Clinical Trials Management Platform',
    description: 'Implementation of an intelligent platform for automated complexity scoring and management of clinical trials, improving efficiency and accuracy.',
    image: '/images/illustrations/case-studies/clinical-trials/hero.svg',
    metrics: {
      accuracy: '95%+',
      coverage: '100%',
      processing: 'Auto'
    },
    tags: ['Healthcare', 'AI/ML', 'Clinical Trials', 'Automation'],
    duration: '8 months',
    teamSize: '12 experts',
    category: 'ai',
    type: 'case-study',
    client: 'Healthcare Research Org'
  },
  {
    id: 15,
    title: 'Secure FinTech Infrastructure with Alpha Fortress',
    description: 'Implementation of a zero-trust architecture and GitOps pipeline for a leading fintech company, ensuring security compliance and automated deployments.',
    image: '/images/illustrations/case-studies/alpha-fortress/hero.svg',
    metrics: {
      security: '98/100',
      compliance: '100%',
      deployment: '-85%'
    },
    tags: ['FinTech', 'DevOps', 'Security', 'AWS'],
    duration: '5 months',
    teamSize: '8 experts',
    category: 'devops',
    type: 'case-study',
    client: 'Alpha Fortress'
  },
  {
    id: 16,
    title: 'DevOps Transformation for Spotmentor',
    description: 'Comprehensive DevOps implementation featuring automated CI/CD pipelines and infrastructure as code for enhanced development efficiency.',
    image: '/images/illustrations/case-studies/spotmentor-devops/hero.svg',
    metrics: {
      deployment: '-90%',
      success: '99.9%',
      setup: '-80%'
    },
    tags: ['DevOps', 'AWS', 'Kubernetes', 'CI/CD'],
    duration: '4 months',
    teamSize: '6 experts',
    category: 'devops',
    type: 'case-study',
    client: 'Spotmentor'
  }
]

const CaseStudyCard = ({ study }: { study: typeof caseStudies[0] }) => {
  const getStudyUrl = (id: number) => {
    const urlMap: { [key: number]: string } = {
      1: '/case-studies/construction-rpa',
      2: '/case-studies/isuzu-sharepoint',
      3: '/case-studies/bank-sharepoint',
      4: '/case-studies/wellpath-sharepoint',
      5: '/case-studies/harkins-procore',
      6: '/case-studies/bch-procore',
      7: '/case-studies/procore-xero',
      8: '/case-studies/pmweb-peoplesoft',
      9: '/case-studies/sentinel-app',
      10: '/case-studies/kubota-mobile',
      11: '/case-studies/westview-backup',
      12: '/case-studies/healthcare-helpdesk',
      13: '/case-studies/finca-aura',
      14: '/case-studies/clinical-trials',
      15: '/case-studies/alpha-fortress',
      16: '/case-studies/spotmentor-devops'
    }
    return urlMap[id] || '#'
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
              {tag}
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
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Filter case studies based on selected category and search term
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      {/* Add padding-top to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Success
                <span className="block bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>

              <p className="text-lg text-gray-400 mb-12">
                Explore how we've helped leading companies achieve their digital transformation goals with innovative solutions and measurable results.
              </p>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="relative w-full sm:w-96">
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#1A2B44]/50 border border-[#243B61] text-white placeholder-gray-400 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
        </section>

        {/* Categories */}
        <section className="py-8 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
                    {solutionCategories.map((category) => (
                <motion.button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                          selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white shadow-lg'
                            : 'bg-[#1A2B44] text-gray-300 hover:bg-[#243B61]'
                        }`}
                      >
                        {category.name}
                </motion.button>
                    ))}
                  </div>
                </div>
        </section>

            {/* Case Studies Grid */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} />
                          ))}
                        </div>
              ) : (
              <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <FunnelIcon className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
                    <p className="text-gray-400 mb-6">Try adjusting your filters or search term</p>
                    <button
                      onClick={() => {
                        setSelectedCategory('all')
                        setSearchTerm('')
                      }}
                    className="px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1A2B44]/60 backdrop-blur-md border border-[#243B61] rounded-3xl overflow-hidden">
              <div className="p-12 text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Business?
                  </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Our team of experts is ready to help you achieve your digital transformation goals with innovative solutions tailored to your needs.
                  </p>
                    <GlowingButton 
                      href="/contact" 
                  className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white"
                    >
                      <span className="flex items-center gap-2">
                    Schedule a Consultation
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </GlowingButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 