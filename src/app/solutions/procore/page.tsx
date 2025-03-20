'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  WrenchIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import GlowingButton from '@/components/GlowingButton'

// Define Procore integration tools
const procoreTools = [
  {
    id: 'ifs',
    title: 'IFS by Calance',
    description: 'Connect Procore with IFS, a leading enterprise asset management system. This integration provides real-time synchronization of project data, cost codes, budgets, commitments, and actual costs.',
    benefits: ['Real-time data synchronization', 'Automated financial workflows', 'Enhanced reporting'],
    marketplaceUrl: 'https://marketplace.procore.com/apps/ifs-by-calance',
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    color: '#3B82F6'
  },
  {
    id: 'netsuite',
    title: 'NetSuite by Calance',
    description: 'Seamlessly connect Procore with NetSuite ERP system. Transfer project data, cost codes, budgets, commitments, change orders, and actual costs in real-time.',
    benefits: ['Unified project data', 'Streamlined invoicing', 'Improved financial visibility'],
    marketplaceUrl: 'https://marketplace.procore.com/apps/netsuite-by-calance',
    icon: <DocumentTextIcon className="w-6 h-6" />,
    color: '#10B981'
  },
  {
    id: 'nexus',
    title: 'Nexus by Calance',
    description: 'Integrate Procore with Nexus accounts payable automation platform. Streamline the payment process for construction projects with real-time data synchronization.',
    benefits: ['Automated payment processing', 'Reduced manual entry', 'Enhanced audit trails'],
    marketplaceUrl: 'https://marketplace.procore.com/apps/nexus-by-calance',
    icon: <ArrowPathIcon className="w-6 h-6" />,
    color: '#F59E0B'
  },
  {
    id: 'peoplesoft',
    title: 'PeopleSoft by Calance',
    description: 'Connect Procore with Oracle PeopleSoft for seamless integration of project data, budgets, and financial information. Keep both systems in sync automatically.',
    benefits: ['Automated data exchange', 'Streamlined project accounting', 'Enhanced compliance'],
    marketplaceUrl: 'https://marketplace.procore.com/apps/peoplesoft-by-calance-1776b1d5-8767-4dd6-83ca-b3a4d16b5a28',
    icon: <BuildingOffice2Icon className="w-6 h-6" />,
    color: '#8B5CF6'
  },
  {
    id: 'coins',
    title: 'COINS Financials by Calance',
    description: 'Integrate Procore with COINS construction software for real-time financial data synchronization. Keep project financials accurate across both platforms.',
    benefits: ['Synchronized financial data', 'Reduced double entry', 'Improved reporting accuracy'],
    marketplaceUrl: 'https://marketplace.procore.com/apps/coins-financials-by-calance',
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    color: '#EC4899'
  },
  {
    id: 'jd-edwards',
    title: 'JD Edwards Integrations by Calance',
    description: 'Connect Procore with Oracle JD Edwards EnterpriseOne. Synchronize project data, cost codes, budgets, and actual costs between both systems.',
    benefits: ['Bi-directional data sync', 'Streamlined project setup', 'Enhanced financial control'],
    marketplaceUrl: 'https://marketplace.procore.com/apps/jd-edwards-integrations-by-calance',
    icon: <WrenchIcon className="w-6 h-6" />,
    color: '#6366F1'
  },
  {
    id: 'sage300',
    title: 'Sage 300 Insurance by Calance',
    description: 'Integrate Procore with Sage 300 CRE for seamless insurance certificate management. Track insurance compliance across all your projects.',
    benefits: ['Automated compliance tracking', 'Reduced risk exposure', 'Streamlined certificate management'],
    marketplaceUrl: 'https://marketplace.procore.com/apps/sage-300-insurance-by-calance-0ba2b2ea-4eb2-4af6-89cc-1d7d480f5c53',
    icon: <BriefcaseIcon className="w-6 h-6" />,
    color: '#60A5FA'
  },
  {
    id: 'cmic',
    title: 'CMiC Financials by Calance',
    description: 'Connect Procore with CMiC construction management software. Synchronize project data, cost codes, budgets, and actuals between both systems.',
    benefits: ['Real-time financial updates', 'Elimination of double entry', 'Enhanced data accuracy'],
    marketplaceUrl: 'https://marketplace.procore.com/apps/cmic-financials-by-calance',
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    color: '#EF4444'
  }
]

export default function ProcoreSolutions() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2B44] to-[#0A1628]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44]/70 border border-[#243B61] text-[#FF6B2C] mb-6">
                <BuildingOffice2Icon className="w-5 h-5" />
                <span className="text-sm font-medium">Procore Integrations</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Enterprise-Grade{' '}
                <span className="text-white">
                  Procore Tools
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 mb-8">
                Seamlessly connect Procore with your enterprise systems to streamline construction management, enhance data accuracy, and improve financial control.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <GlowingButton
                  href="https://marketplace.procore.com/search_results?query=calance"
                  isExternal
                  className="px-6 py-3 bg-[#FF6B2C] text-white"
                >
                  <span className="flex items-center gap-2">
                    View Procore Marketplace
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </span>
                </GlowingButton>
                
                <GlowingButton
                  href="/contact"
                  className="px-6 py-3 bg-white text-[#FF6B2C]"
                >
                  <span className="flex items-center gap-2">
                    Request a Demo
                    <ArrowRightIcon className="w-5 h-5" />
                  </span>
                </GlowingButton>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] relative">
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
      
      {/* Integration Process Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Procore Integration Process
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We follow a structured approach to ensure seamless integration between Procore and your enterprise systems, delivering reliable and efficient data flow.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[16/7] relative rounded-lg overflow-hidden">
              <Image 
                src="/images/illustrations/procore/integration-process.svg"
                alt="Procore Integration Process"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Tools Grid Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Procore Integration Tools
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive suite of Procore integration tools designed to connect with your enterprise systems and streamline your construction management processes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procoreTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <a 
                  href={tool.marketplaceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-8 border border-[#243B61] hover:border-[color:var(--hover-color)] hover:bg-[#1A2B44]/70 transition-all duration-300 h-full"
                  style={{ '--hover-color': `${tool.color}40` } as React.CSSProperties}
                >
                  {/* Tool Icon */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${tool.color}20`, color: tool.color }}
                  >
                    {tool.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: tool.color }}
                  >
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {tool.description}
                  </p>
                  
                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {tool.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tool.color }}></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#243B61] group-hover:border-[color:var(--hover-color)] transition-colors duration-300">
                    <span className="text-sm font-medium" style={{ color: tool.color }}>View in Marketplace</span>
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" style={{ color: tool.color }} />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Benefits of Our Procore Integrations
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our enterprise-grade Procore integrations deliver significant value to construction companies by streamlining processes and enhancing data accuracy.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[2/1] relative rounded-lg overflow-hidden">
              <Image 
                src="/images/illustrations/procore/benefits.svg"
                alt="Procore Integration Benefits"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2C]/20 to-[#3B82F6]/20" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-[#1A2B44]/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-[#243B61]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Connect Your Systems?
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Contact our team to learn more about our Procore integration solutions and how they can benefit your construction projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <GlowingButton
                    href="/contact"
                    className="px-6 py-3 bg-[#FF6B2C] text-white"
                  >
                    <span className="flex items-center gap-2">
                      Contact Us
                      <ArrowRightIcon className="w-5 h-5" />
                    </span>
                  </GlowingButton>
                  
                  <GlowingButton
                    href="https://marketplace.procore.com/search_results?query=calance"
                    isExternal
                    className="px-6 py-3 bg-white text-[#FF6B2C]"
                  >
                    <span className="flex items-center gap-2">
                      Browse Marketplace
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </span>
                  </GlowingButton>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 rounded-full bg-[#FF6B2C]/20 blur-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BuildingOffice2Icon className="w-24 h-24 md:w-32 md:h-32 text-[#FF6B2C]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 