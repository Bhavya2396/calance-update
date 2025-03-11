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
    image: '/images/illustrations/case-studies/construction-rpa.svg',
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
    client: 'Midwest Construction Firm',
    featured: true
  },
  {
    id: 2,
    title: 'SharePoint Migration for Isuzu Motors',
    description: 'Upgrade of Isuzu\'s SharePoint sites from the 2013 version to the 2019 on-premises version with migration of select internal sites to SharePoint Online.',
    image: '/images/illustrations/case-studies/sharepoint-migration.svg',
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
    image: '/images/illustrations/case-studies/bank-sharepoint.svg',
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
    title: 'Intelligent Document Processing for Clinical Trials',
    description: 'We developed a solution that assesses the operational complexity of clinical trials by extracting data from protocols and analyzing their complexity.',
    image: '/images/illustrations/case-studies/clinical-trials.svg',
    metrics: {
      accuracy: '95%',
      time: '-75%',
      cost: '-60%'
    },
    tags: ['AI/ML', 'Healthcare', 'Document Processing'],
    duration: '5 months',
    teamSize: '9 experts',
    category: 'ai',
    type: 'case-study',
    client: 'Healthcare Organization'
  },
  {
    id: 5,
    title: 'Customizing AI for Impact: FINCA\'s Automated Research Assistant',
    description: 'Evaluating poverty interventions traditionally involved time-consuming and expensive research methods. We developed an automated research assistant to revolutionize this process.',
    image: '/images/illustrations/case-studies/finca-ai.svg',
    metrics: {
      research: '-80%',
      insights: '+200%',
      accessibility: '24/7'
    },
    tags: ['AI Research', 'Poverty Intervention', 'Automation'],
    duration: '8 months',
    teamSize: '11 experts',
    category: 'ai',
    type: 'case-study',
    client: 'FINCA',
    featured: true
  },
  {
    id: 6,
    title: 'SharePoint Migrations & Ongoing Support for Wellpath',
    description: 'After a SharePoint upgrade in 2017 did not meet expectations, Wellpath sought a new partner to elevate their SharePoint environment.',
    image: '/images/illustrations/case-studies/wellpath-sharepoint.svg',
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
    id: 7,
    title: 'Procore + PeopleSoft Integration - Harkins Builders',
    description: 'Seamless integration between Procore construction management software and PeopleSoft ERP system for real-time financial data synchronization.',
    image: '/images/illustrations/case-studies/procore-peoplesoft.svg',
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
    id: 8,
    title: 'Procore + PeopleSoft - Boston Children\'s Hospital',
    description: 'Integration solution between Procore and PeopleSoft for Boston Children\'s Hospital construction management and financial systems.',
    image: '/images/illustrations/case-studies/bch-integration.svg',
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
    id: 9,
    title: 'Procore + Xero Integration - Ascot Group',
    description: 'Connecting Procore construction management platform with Xero accounting software for streamlined financial processes.',
    image: '/images/illustrations/case-studies/ascot-integration.svg',
    metrics: {
      accounting: 'Automated',
      manual: '-90%',
      accuracy: '99.9%'
    },
    tags: ['Construction', 'Accounting', 'Integration'],
    duration: '3 months',
    teamSize: '6 experts',
    category: 'integration',
    type: 'case-study',
    client: 'Ascot Group'
  },
  {
    id: 10,
    title: 'PMWeb + PeopleSoft Integration - Massport',
    description: 'Integrating PMWeb project management software with PeopleSoft ERP system for Massport\'s infrastructure projects.',
    image: '/images/illustrations/case-studies/massport-integration.svg',
    metrics: {
      projects: 'Centralized',
      reporting: 'Automated',
      visibility: '100%'
    },
    tags: ['Project Management', 'ERP Integration', 'Infrastructure'],
    duration: '6 months',
    teamSize: '10 experts',
    category: 'integration',
    type: 'integration',
    client: 'Massport'
  },
  {
    id: 11,
    title: 'DevOps Implementation - Spotmentor',
    description: 'Implementing DevOps practices and toolchain to accelerate software delivery and improve quality for Spotmentor.',
    image: '/images/illustrations/case-studies/spotmentor-devops.svg',
    metrics: {
      deployment: '10x faster',
      quality: '+75%',
      collaboration: 'Enhanced'
    },
    tags: ['DevOps', 'CI/CD', 'Software Delivery'],
    duration: '4 months',
    teamSize: '7 experts',
    category: 'devops',
    type: 'case-study',
    client: 'Spotmentor'
  },
  {
    id: 12,
    title: 'DevOps Implementation for Alpha Fortress',
    description: 'DevOps implementation in Fintech environment to improve security, reliability, and deployment frequency.',
    image: '/images/illustrations/case-studies/alpha-fortress-devops.svg',
    metrics: {
      deployment: 'Daily',
      security: 'Enhanced',
      reliability: '99.99%'
    },
    tags: ['DevOps', 'Fintech', 'Security'],
    duration: '5 months',
    teamSize: '8 experts',
    category: 'devops',
    type: 'case-study',
    client: 'Alpha Fortress'
  },
  {
    id: 13,
    title: 'DevOps Implementation for Cloud Migration',
    description: 'Implementing DevOps principles and practices to facilitate a smooth migration to cloud infrastructure.',
    image: '/images/illustrations/case-studies/cloud-devops.svg',
    metrics: {
      migration: 'Seamless',
      downtime: 'Zero',
      operations: 'Automated'
    },
    tags: ['DevOps', 'Cloud Migration', 'Automation'],
    duration: '7 months',
    teamSize: '12 experts',
    category: 'devops',
    type: 'case-study',
    client: 'Enterprise Client'
  },
  {
    id: 14,
    title: 'DevOps Implementation - Kubota',
    description: 'Transforming development and operations processes for Kubota with modern DevOps practices and tooling.',
    image: '/images/illustrations/case-studies/kubota-devops.svg',
    metrics: {
      delivery: '5x faster',
      quality: '+80%',
      collaboration: 'Unified'
    },
    tags: ['DevOps', 'Manufacturing', 'Process Automation'],
    duration: '6 months',
    teamSize: '9 experts',
    category: 'devops',
    type: 'case-study',
    client: 'Kubota'
  },
  {
    id: 15,
    title: 'SharePoint Implementation - LA Expo',
    description: 'Implementing SharePoint solution for LA Expo to manage documents, workflows, and collaboration.',
    image: '/images/illustrations/case-studies/la-expo-sharepoint.svg',
    metrics: {
      collaboration: 'Enhanced',
      processes: 'Streamlined',
      accessibility: '24/7'
    },
    tags: ['SharePoint', 'Document Management', 'Collaboration'],
    duration: '3 months',
    teamSize: '5 experts',
    category: 'sharepoint',
    type: 'case-study',
    client: 'LA Expo'
  },
  {
    id: 16,
    title: 'SharePoint Migration - Valley National Bank',
    description: 'Migrating Valley National Bank\'s SharePoint environment to enhance security, performance, and user experience.',
    image: '/images/illustrations/case-studies/valley-sharepoint.svg',
    metrics: {
      security: 'Enhanced',
      performance: '+90%',
      user: 'Improved'
    },
    tags: ['SharePoint', 'Banking', 'Migration'],
    duration: '4 months',
    teamSize: '8 experts',
    category: 'sharepoint',
    type: 'case-study',
    client: 'Valley National Bank'
  },
  {
    id: 17,
    title: 'App Development - Sentinel Hydrosolutions',
    description: 'Developing innovative mobile application for Sentinel Hydrosolutions to manage water systems remotely.',
    image: '/images/illustrations/case-studies/sentinel-app.svg',
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
    id: 18,
    title: 'Mobile App Development - Kubota',
    description: 'Creating mobile applications for Kubota to enhance field operations and customer engagement.',
    image: '/images/illustrations/case-studies/kubota-mobile.svg',
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
    id: 19,
    title: 'Cloud Backup Implementation - Westview',
    description: 'Implementing robust cloud backup solution for Westview to ensure data security and business continuity.',
    image: '/images/illustrations/case-studies/westview-backup.svg',
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
    id: 20,
    title: 'After Hours Help Desk - Healthcare Partners',
    description: 'Providing 24/7 IT support services for healthcare professionals with critical response times.',
    image: '/images/illustrations/case-studies/healthcare-helpdesk.svg',
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
  }
]

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Filter case studies based on selected category, type, and search term
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory
    const matchesType = selectedType === 'all' || study.type === selectedType
    const matchesSearch = searchTerm === '' || 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesType && matchesSearch
  })

  // Get featured case studies
  const featuredCaseStudies = caseStudies.filter(study => study.featured)

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
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B2C]/10 to-blue-500/10 border border-[#FF6B2C]/20 backdrop-blur-sm mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SparklesIcon className="w-4 h-4 text-[#FF6B2C]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#FF6B2C] to-blue-500 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transforming Businesses Through
                <span className="block bg-gradient-to-r from-[#FF6B2C] to-blue-500 bg-clip-text text-transparent">
                  Digital Innovation
                </span>
              </h1>

              <p className="text-lg text-gray-400 mb-8">
                Explore how we've helped leading companies achieve their digital transformation goals with innovative solutions and measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section id="featured-studies" className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                <span className="bg-gradient-to-r from-[#FF6B2C] to-blue-500 bg-clip-text text-transparent">
                  Featured
                </span> Case Studies
              </h2>
              <GlowingButton
                href="#all-studies"
                className="text-sm px-4 py-2 bg-[#1A2B44] text-white"
              >
                <span className="flex items-center">
                  View All
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </span>
              </GlowingButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl border border-[#243B61] overflow-hidden group hover:border-[#FF6B2C]/60 transition-all hover:shadow-lg hover:shadow-[#FF6B2C]/10"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute top-0 right-0 z-10 m-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FF6B2C] text-white">
                        Featured
                      </span>
                    </div>
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent opacity-60"></div>
                    
                    {/* Client Logo Overlay */}
                    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-white border border-white/20">
                      {study.client}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {solutionCategories.find(cat => cat.id === study.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF6B2C] transition-colors">{study.title}</h3>
                    <p className="text-gray-400 mb-4">{study.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs bg-[#FF6B2C]/10 text-[#FF6B2C] border border-[#FF6B2C]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-[#FF6B2C]">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Project Details */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      {study.duration && (
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        {study.duration}
                      </div>
                      )}
                      {study.teamSize && (
                      <div className="flex items-center gap-2">
                        <UserGroupIcon className="w-4 h-4" />
                        {study.teamSize}
                      </div>
                      )}
                  </div>

                  {/* Action Button */}
                    <GlowingButton
                      href={`/case-studies/${study.id}`}
                      className="w-full bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] text-white group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Case Study
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </GlowingButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section id="all-studies" className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Explore Our
                <span className="ml-2 bg-gradient-to-r from-[#FF6B2C] to-blue-500 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-[#1A2B44]/50 border border-[#243B61] text-white placeholder-gray-400 rounded-lg py-2 pl-10 pr-4 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#FF6B2C]/50"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="mb-8">
              <div className="flex flex-col gap-4">
                {/* Solution Categories */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <TagIcon className="w-4 h-4" />
                    Filter by Solution
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {solutionCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedCategory === category.id
                            ? 'bg-[#FF6B2C] text-white'
                            : 'bg-[#1A2B44] text-gray-300 hover:bg-[#243B61]'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Type Categories */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <DocumentTextIcon className="w-4 h-4" />
                    Filter by Type
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {typeCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedType(category.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedType === category.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-[#1A2B44] text-gray-300 hover:bg-[#243B61]'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="mb-6 text-sm text-gray-400">
              Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.length > 0 ? (
                filteredCaseStudies.map((study, index) => (
              <motion.div
                    key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl border border-[#243B61] overflow-hidden group hover:border-[#FF6B2C]/50 transition-all hover:shadow-lg hover:shadow-[#FF6B2C]/5"
              >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent opacity-60"></div>
                      
                      {/* Client Badge */}
                      {study.client && (
                        <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-white border border-white/20">
                          {study.client}
                        </div>
                      )}
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500/20 text-blue-400 backdrop-blur-sm">
                          {typeCategories.find(t => t.id === study.type)?.name}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#FF6B2C]/10 text-[#FF6B2C] border border-[#FF6B2C]/20">
                          {solutionCategories.find(cat => cat.id === study.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF6B2C] transition-colors">{study.title}</h3>
                      <p className="text-gray-400 mb-4">{study.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs bg-[#1A2B44] text-gray-300 border border-[#243B61]"
              >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      {Object.entries(study.metrics || {}).length > 0 && (
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-xl font-bold text-[#FF6B2C]">{value}</div>
                              <div className="text-xs text-gray-400 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Project Details */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        {study.duration && (
                          <div className="flex items-center gap-2">
                            <ClockIcon className="w-4 h-4" />
                            {study.duration}
                          </div>
                        )}
                        {study.teamSize && (
                          <div className="flex items-center gap-2">
                            <UserGroupIcon className="w-4 h-4" />
                            {study.teamSize}
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      <GlowingButton
                        href={`/case-studies/${study.id}`}
                        className="w-full bg-[#1A2B44] hover:bg-[#243B61] text-white group"
                      >
                        <span className="flex items-center justify-center gap-2">
                          {study.type === 'guide' ? 'Read Guide' : study.type === 'integration' ? 'View Integration' : 'View Case Study'}
                          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </GlowingButton>
                    </div>
              </motion.div>
                ))
              ) : (
                <div className="col-span-full flex items-center justify-center py-12">
                  <div className="text-center">
                    <FunnelIcon className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
                    <p className="text-gray-400 mb-6">Try adjusting your filters or search term</p>
                    <button
                      onClick={() => {
                        setSelectedCategory('all')
                        setSelectedType('all')
                        setSearchTerm('')
                      }}
                      className="px-4 py-2 bg-[#FF6B2C] text-white rounded-lg hover:bg-[#FF8F2C] transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-24 relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1A2B44]/60 backdrop-blur-md border border-[#243B61] rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Our team of experts is ready to help you achieve your digital transformation goals with innovative solutions tailored to your needs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <GlowingButton 
                      href="/contact" 
                      className="bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] text-white"
                    >
                      <span className="flex items-center gap-2">
                        Get Started
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </GlowingButton>
                    <GlowingButton 
                      href="/solutions" 
                      className="bg-[#243B61] text-white"
                    >
                      <span className="flex items-center gap-2">
                        Explore Solutions
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </GlowingButton>
                  </div>
                </div>
                <div className="relative h-64 md:h-full min-h-[320px] overflow-hidden rounded-xl">
                  <Image
                    src="/images/illustrations/cta-transform.svg"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 