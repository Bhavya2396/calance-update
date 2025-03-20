'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  BuildingOffice2Icon,
  ArrowPathIcon,
  CubeIcon,
  ChartBarIcon,
  CodeBracketIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import GlowingButton from '@/components/GlowingButton'
import Header from '@/components/Header'

// Define Procore tools with their details
const procoreTools = [
  {
    id: 'ifs',
    title: 'IFS by Calance',
    description: 'Seamlessly integrate IFS ERP with Procore, enabling real-time data synchronization for enhanced project management and financial oversight.',
    image: '/images/illustrations/procore-tools/ifs.svg',
    link: 'https://marketplace.procore.com/apps/ifs-by-calance',
    color: '#4F46E5',
    icon: <ArrowPathIcon className="w-6 h-6" />,
    features: [
      'Bi-directional data transfer',
      'Automated invoice synchronization',
      'Real-time budget updates',
      'Document linking between systems'
    ]
  },
  {
    id: 'netsuite',
    title: 'NetSuite by Calance',
    description: 'Unify your NetSuite financial data with Procore project information to streamline operations and improve decision-making.',
    image: '/images/illustrations/procore-tools/netsuite.svg',
    link: 'https://marketplace.procore.com/apps/netsuite-by-calance',
    color: '#0891B2',
    icon: <ChartBarIcon className="w-6 h-6" />,
    features: [
      'Custom field mapping',
      'Cost code synchronization',
      'Commitment management',
      'Automated financial reporting'
    ]
  },
  {
    id: 'nexus',
    title: 'Nexus by Calance',
    description: 'Connect Procore with your Nexus systems for streamlined accounts payable processes and improved vendor management.',
    image: '/images/illustrations/procore-tools/nexus.svg',
    link: 'https://marketplace.procore.com/apps/nexus-by-calance',
    color: '#10B981',
    icon: <DocumentArrowDownIcon className="w-6 h-6" />,
    features: [
      'Invoice automation',
      'Approval workflow integration',
      'Vendor compliance tracking',
      'Document management'
    ]
  },
  {
    id: 'peoplesoft',
    title: 'PeopleSoft by Calance',
    description: 'Integrate PeopleSoft with Procore to unify HR, finance, and project management data for complete operational visibility.',
    image: '/images/illustrations/procore-tools/peoplesoft.svg',
    link: 'https://marketplace.procore.com/apps/peoplesoft-by-calance-1776b1d5-8767-4dd6-83ca-b3a4d16b5a28',
    color: '#F97316',
    icon: <BuildingOffice2Icon className="w-6 h-6" />,
    features: [
      'Employee data synchronization',
      'Cost allocation',
      'Financial reconciliation',
      'Comprehensive reporting'
    ]
  },
  {
    id: 'coins',
    title: 'COINS Financials by Calance',
    description: 'Connect COINS financial systems with Procore for seamless data flow between your construction projects and accounting.',
    image: '/images/illustrations/procore-tools/coins.svg',
    link: 'https://marketplace.procore.com/apps/coins-financials-by-calance',
    color: '#EC4899',
    icon: <CubeIcon className="w-6 h-6" />,
    features: [
      'Job cost tracking',
      'Subcontractor management',
      'Purchase order integration',
      'Budget-to-actual comparison'
    ]
  },
  {
    id: 'jd-edwards',
    title: 'JD Edwards Integrations',
    description: 'Integrate JD Edwards ERP with Procore to eliminate double entry and ensure data accuracy across systems.',
    image: '/images/illustrations/procore-tools/jd-edwards.svg',
    link: 'https://marketplace.procore.com/apps/jd-edwards-integrations-by-calance',
    color: '#8B5CF6',
    icon: <CodeBracketIcon className="w-6 h-6" />,
    features: [
      'Automated data synchronization',
      'Cost code mapping',
      'Change order management',
      'Contract integration'
    ]
  },
  {
    id: 'sage-300',
    title: 'Sage 300 Insurance',
    description: 'Connect Sage 300 with Procore to streamline insurance certificate management and compliance tracking.',
    image: '/images/illustrations/procore-tools/sage-300.svg',
    link: 'https://marketplace.procore.com/apps/sage-300-insurance-by-calance-0ba2b2ea-4eb2-4af6-89cc-1d7d480f5c53',
    color: '#0EA5E9',
    icon: <DocumentArrowDownIcon className="w-6 h-6" />,
    features: [
      'Certificate tracking',
      'Compliance monitoring',
      'Vendor qualification',
      'Risk management'
    ]
  },
  {
    id: 'cmic',
    title: 'CMiC Financials by Calance',
    description: 'Integrate CMiC with Procore for comprehensive financial management and project control in one unified system.',
    image: '/images/illustrations/procore-tools/cmic.svg',
    link: 'https://marketplace.procore.com/apps/cmic-financials-by-calance',
    color: '#F59E0B',
    icon: <ChartBarIcon className="w-6 h-6" />,
    features: [
      'Financial data sync',
      'Project forecasting',
      'Cash flow management',
      'Centralized reporting'
    ]
  }
]

// Define benefits of using Calance Procore integrations
const benefits = [
  {
    title: 'Automated Data Flow',
    description: 'Eliminate manual data entry and ensure consistency across all your systems.',
    icon: <ArrowPathIcon className="w-6 h-6" />,
    color: '#FF6B2C'
  },
  {
    title: 'Real-Time Visibility',
    description: 'Access up-to-date information across all platforms for better decision-making.',
    icon: <ChartBarIcon className="w-6 h-6" />,
    color: '#3B82F6'
  },
  {
    title: 'Increased Efficiency',
    description: 'Save time and reduce errors with streamlined workflows and processes.',
    icon: <CubeIcon className="w-6 h-6" />,
    color: '#10B981'
  },
  {
    title: 'Enhanced Collaboration',
    description: 'Improve teamwork between office and field by connecting critical systems.',
    icon: <BuildingOffice2Icon className="w-6 h-6" />,
    color: '#8B5CF6'
  }
]

export default function ProcoreTools() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
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
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-6"
              >
                <CubeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Procore Integrations</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
              >
                Seamless Procore
                <span className="text-white"> Integrations</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-8"
              >
                Connect your critical business systems with Procore using Calance's suite of powerful integration tools designed for construction professionals.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="#tools" className="bg-[#FF6B2C]">
                  Explore Tools
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
                
                <GlowingButton href="/contact" className="bg-[#1A2B44] hover:bg-[#243B61]">
                  Contact Us
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] sm:h-[500px] hidden lg:block"
            >
              <Image
                src="/images/illustrations/procore-tools/hero.svg"
                alt="Procore Integrations"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Integration Benefits
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Why construction companies choose Calance's Procore integrations to streamline their operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-8 border border-[#243B61] hover:border-[#3B82F6]/20 transition-all group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-[#1A2B44] to-[#243B61] text-white mb-4" style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Procore Tools Grid */}
      <section id="tools" className="py-20 bg-[#0F172A] relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/5 to-[#3B82F6]/5" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Procore Integration Suite
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Powerful tools designed to connect your critical business systems with Procore
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
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#243B61] hover:border-opacity-50 transition-all group h-full"
              >
                {/* Tool Illustration */}
                <div className="relative h-48 bg-gradient-to-br from-[#1A2B44] to-[#0A1628] overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundColor: tool.color }} />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      width={200}
                      height={150}
                      className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${tool.color}20`, color: tool.color }}>
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    {tool.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-[#FF6B2C]">•</span>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Install/Learn More Button */}
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Install on Procore
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Procore Certified Badge Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#FF6B2C]/10 to-[#3B82F6]/10 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Procore Certified Partner
                </h2>
                
                <p className="text-lg text-gray-400 mb-8">
                  As a certified Procore partner, Calance has developed a suite of integrations that meet Procore's stringent quality standards. Our tools are continuously updated to ensure compatibility with the latest Procore features.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <GlowingButton href="https://marketplace.procore.com/search_results?query=calance" className="bg-[#FF6B2C]">
                    View on Procore Marketplace
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </GlowingButton>
                  
                  <GlowingButton href="/contact" className="bg-[#1A2B44] hover:bg-[#243B61]">
                    Schedule a Demo
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </GlowingButton>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[300px] hidden lg:block"
              >
                <Image
                  src="/images/illustrations/procore-tools/certified-badge.svg"
                  alt="Procore Certified Partner"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Streamline Your Construction Workflows?
            </h2>
            
            <p className="text-lg text-gray-400 mb-8">
              Contact our team to learn how Calance's Procore integrations can transform your construction operations.
            </p>
            
            <GlowingButton href="/contact" className="bg-[#FF6B2C] px-8 py-3 text-lg">
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </GlowingButton>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 