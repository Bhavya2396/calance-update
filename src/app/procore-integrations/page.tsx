'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRightIcon, 
  BuildingOffice2Icon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  CubeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CircleStackIcon
} from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import GlowingButton from '@/components/GlowingButton'

// Define all Procore integrations
const procoreIntegrations = [
  {
    id: 'ifs',
    title: 'IFS by Calance',
    description: 'Seamlessly integrate Procore with IFS ERP to synchronize project data, financials, and documents.',
    imageUrl: '/images/illustrations/procore/ifs.svg',
    marketplaceUrl: 'https://marketplace.procore.com/apps/ifs-by-calance',
    features: [
      'Bidirectional data synchronization',
      'Real-time financial updates',
      'Automated document transfer',
      'Custom field mapping'
    ],
    benefits: [
      { title: 'Time Saved', value: '75%' },
      { title: 'Data Accuracy', value: '99.9%' }
    ],
    icon: CircleStackIcon
  },
  {
    id: 'netsuite',
    title: 'NetSuite by Calance',
    description: 'Connect Procore with NetSuite for seamless financial data exchange and project cost tracking.',
    imageUrl: '/images/illustrations/procore/ifs.svg', // Reusing illustration
    marketplaceUrl: 'https://marketplace.procore.com/apps/netsuite-by-calance',
    features: [
      'Automated cost code synchronization',
      'Real-time budget updates',
      'Invoice matching',
      'Financial reporting'
    ],
    benefits: [
      { title: 'Manual Entry Reduction', value: '85%' },
      { title: 'Reporting Time', value: '-65%' }
    ],
    icon: CurrencyDollarIcon
  },
  {
    id: 'nexus',
    title: 'Nexus by Calance',
    description: 'Streamline AP automation by connecting Procore with Nexus for invoice processing and payment management.',
    imageUrl: '/images/illustrations/procore/ifs.svg', // Reusing illustration
    marketplaceUrl: 'https://marketplace.procore.com/apps/nexus-by-calance',
    features: [
      'Automated invoice processing',
      'Payment workflow integration',
      'Document matching',
      'Approval routing'
    ],
    benefits: [
      { title: 'Invoice Processing', value: '-80%' },
      { title: 'Payment Time', value: '-70%' }
    ],
    icon: DocumentTextIcon
  },
  {
    id: 'peoplesoft',
    title: 'PeopleSoft by Calance',
    description: 'Integrate Procore with PeopleSoft to manage labor, projects, and financial data across systems.',
    imageUrl: '/images/illustrations/procore/ifs.svg', // Reusing illustration
    marketplaceUrl: 'https://marketplace.procore.com/apps/peoplesoft-by-calance-1776b1d5-8767-4dd6-83ca-b3a4d16b5a28',
    features: [
      'Labor resource synchronization',
      'Project structure mapping',
      'Cost control automation',
      'Financial reconciliation'
    ],
    benefits: [
      { title: 'Resource Allocation', value: '+60%' },
      { title: 'Data Entry', value: '-75%' }
    ],
    icon: BuildingOffice2Icon
  },
  {
    id: 'coins',
    title: 'COINS Financials by Calance',
    description: 'Connect Procore with COINS financial system for comprehensive construction financial management.',
    imageUrl: '/images/illustrations/procore/ifs.svg', // Reusing illustration
    marketplaceUrl: 'https://marketplace.procore.com/apps/coins-financials-by-calance',
    features: [
      'Budget synchronization',
      'Cost code mapping',
      'Change order processing',
      'Financial reporting'
    ],
    benefits: [
      { title: 'Financial Visibility', value: '+90%' },
      { title: 'Reconciliation Time', value: '-65%' }
    ],
    icon: ChartBarIcon
  },
  {
    id: 'jd-edwards',
    title: 'JD Edwards Integrations by Calance',
    description: 'Integrate Procore with JD Edwards EnterpriseOne for comprehensive project and financial management.',
    imageUrl: '/images/illustrations/procore/ifs.svg', // Reusing illustration
    marketplaceUrl: 'https://marketplace.procore.com/apps/jd-edwards-integrations-by-calance',
    features: [
      'Automated data synchronization',
      'Financial consolidation',
      'Project structure alignment',
      'Document management'
    ],
    benefits: [
      { title: 'Processing Time', value: '-70%' },
      { title: 'Data Accuracy', value: '+95%' }
    ],
    icon: ArrowsRightLeftIcon
  },
  {
    id: 'sage-300',
    title: 'Sage 300 Insurance by Calance',
    description: 'Connect Procore with Sage 300 CRE for insurance certificate tracking and compliance.',
    imageUrl: '/images/illustrations/procore/ifs.svg', // Reusing illustration
    marketplaceUrl: 'https://marketplace.procore.com/apps/sage-300-insurance-by-calance-0ba2b2ea-4eb2-4af6-89cc-1d7d480f5c53',
    features: [
      'Insurance certificate tracking',
      'Compliance monitoring',
      'Automated notifications',
      'Risk assessment'
    ],
    benefits: [
      { title: 'Compliance Rate', value: '+98%' },
      { title: 'Manual Tracking', value: '-85%' }
    ],
    icon: CheckCircleIcon
  },
  {
    id: 'cmic',
    title: 'CMIC Financials by Calance',
    description: 'Integrate Procore with CMiC for comprehensive project financial management and reporting.',
    imageUrl: '/images/illustrations/procore/ifs.svg', // Reusing illustration
    marketplaceUrl: 'https://marketplace.procore.com/apps/cmic-financials-by-calance',
    features: [
      'Bidirectional data exchange',
      'Automated financial reporting',
      'Cost code synchronization',
      'Project budget alignment'
    ],
    benefits: [
      { title: 'Reporting Efficiency', value: '+80%' },
      { title: 'Financial Accuracy', value: '+95%' }
    ],
    icon: CubeIcon
  }
]

export default function ProcoreIntegrations() {
  const [activeIntegration, setActiveIntegration] = useState(procoreIntegrations[0].id)

  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B2C]/10 via-[#FF8F5C]/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44]/80 text-[#FF6B2C] mb-6">
                <CubeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Procore Marketplace Apps</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Powerful Procore <span className="text-white">Integrations</span> for Construction Excellence
              </h1>
              
              <p className="text-lg text-gray-400 mb-10">
                Calance delivers seamless connectivity between Procore and your essential business systems, 
                streamlining operations and enhancing productivity across your construction projects.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <GlowingButton 
                  href="https://marketplace.procore.com/search_results?query=calance" 
                  className="bg-[#FF6B2C] text-white"
                  external
                >
                  Explore All Integrations
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
                
                <GlowingButton href="/contact" className="bg-transparent border border-gray-600 text-white hover:border-[#FF6B2C]/50">
                  Request a Demo
                </GlowingButton>
              </div>
            </motion.div>
            
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square relative">
                <Image 
                  src="/images/illustrations/procore/hero.svg"
                  alt="Procore Integrations"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Our Integrations */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Choose Calance Procore Integrations?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our specialized integrations solve the most challenging construction data management problems with elegant, reliable solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Seamless Connectivity",
                description: "Bidirectional data flow ensures your systems stay in perfect sync without manual intervention.",
                icon: ArrowsRightLeftIcon
              },
              {
                title: "Industry Expertise",
                description: "Built by construction technology experts who understand your business processes and needs.",
                icon: BuildingOffice2Icon
              },
              {
                title: "Robust & Reliable",
                description: "Enterprise-grade solutions designed for high availability and data integrity.",
                icon: CheckCircleIcon
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#FF6B2C]/30 transition-all"
              >
                <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#FF6B2C]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Procore Integrations */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B2C]/10 to-[#FF8F59]/10 border border-[#FF6B2C]/20 backdrop-blur-sm mb-6">
              <Image
                src="/images/illustrations/procore/procore-marketplace.svg"
                alt="Procore Marketplace"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm font-medium text-[#FF6B2C]">
                Official Procore Marketplace Partner
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Procore Integration Suite
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Connect Procore with your essential business systems for streamlined operations and enhanced data visibility.
            </p>
          </motion.div>
          
          {/* Integration selector tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {procoreIntegrations.map((integration) => (
              <motion.button
                key={integration.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeIntegration === integration.id
                    ? 'bg-[#FF6B2C] text-white'
                    : 'bg-[#1A2B44]/50 text-gray-400 hover:text-white hover:bg-[#1A2B44]'
                }`}
                onClick={() => setActiveIntegration(integration.id)}
              >
                {integration.title}
              </motion.button>
            ))}
          </div>
          
          {/* Active integration details */}
          {procoreIntegrations.map((integration) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeIntegration === integration.id ? 1 : 0,
                display: activeIntegration === integration.id ? 'block' : 'none'
              }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Integration Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-xl flex items-center justify-center mr-4">
                    <integration.icon className="w-6 h-6 text-[#FF6B2C]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{integration.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-8">
                  {integration.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {integration.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {integration.benefits.map((benefit) => (
                    <div key={benefit.title} className="bg-[#1A2B44]/50 rounded-xl p-4">
                      <div className="text-xl font-bold text-[#FF6B2C]">{benefit.value}</div>
                      <div className="text-sm text-gray-400">{benefit.title}</div>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={integration.marketplaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Install on Procore</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
              
              {/* Integration Illustration */}
              <div className="relative">
                <div className="aspect-square relative">
                  <Image 
                    src={integration.imageUrl}
                    alt={integration.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B2C]/10 via-[#FF8F5C]/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2B44]/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#243B61] text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Streamline Your Construction Operations?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Contact our team to learn how Calance's Procore integrations can transform your workflow, 
              reduce manual data entry, and give you real-time visibility across all your systems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <GlowingButton href="/contact" className="bg-[#FF6B2C] text-white">
                Request a Consultation
              </GlowingButton>
              
              <a 
                href="https://marketplace.procore.com/search_results?query=calance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all"
              >
                <span>View All Integrations</span>
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 