'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, CommandLineIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const solutions = [
  {
    id: 'microsoft-solutions',
    title: 'Microsoft Solutions',
    description: 'Comprehensive Microsoft services including Microsoft 365, SharePoint, and Dynamics 365 Business Central ERP.',
    image: '/images/illustrations/microsoft/hero.svg',
    color: '#00A4EF',
    metrics: [
      { label: 'Productivity Gain', value: '+75%' },
      { label: 'ROI', value: '+180%' },
    ],
    features: ['Microsoft 365', 'SharePoint', 'Dynamics 365', 'Azure Services'],
  },
  {
    id: 'integrations',
    title: 'Enterprise Integration',
    description: 'Connect your systems seamlessly with our enterprise-grade integration platform.',
    image: '/images/illustrations/integrations/hero.svg',
    color: '#3B82F6',
    metrics: [
      { label: 'API Response Time', value: '-65%' },
      { label: 'Integration Success', value: '99.9%' },
    ],
    features: ['API Integration', 'Data Sync', 'Cloud Connect', 'Workflow Automation'],
  },
  {
    id: 'construction',
    title: 'Construction Tech',
    description: 'Modernize construction operations with digital solutions and real-time insights.',
    image: '/images/illustrations/construction/hero.svg',
    color: '#F59E0B',
    metrics: [
      { label: 'Project Efficiency', value: '+45%' },
      { label: 'Cost Reduction', value: '-30%' },
    ],
    features: ['Project Planning', 'Site Monitoring', 'Resource Management', 'Safety Compliance'],
  },
  {
    id: 'infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Build scalable and secure cloud infrastructure for your enterprise needs.',
    image: '/images/illustrations/infrastructure/hero.svg',
    color: '#10B981',
    metrics: [
      { label: 'Server Uptime', value: '99.99%' },
      { label: 'Cost Savings', value: '60%' },
    ],
    features: ['Cloud Migration', 'DevOps', 'Security', 'Monitoring'],
  },
  {
    id: 'apps-automation',
    title: 'Apps & Automation',
    description: 'Custom applications and RPA solutions to streamline your business processes.',
    image: '/images/illustrations/apps/hero.svg',
    color: '#8B5CF6',
    metrics: [
      { label: 'Process Speed', value: '+200%' },
      { label: 'Manual Work', value: '-85%' },
    ],
    features: ['Custom Apps', 'RPA', 'Process Automation', 'Integration'],
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Comprehensive cybersecurity services to protect your business and ensure compliance.',
    image: '/images/illustrations/security/hero.svg',
    color: '#EC4899',
    metrics: [
      { label: 'Threat Detection', value: '99.9%' },
      { label: 'Response Time', value: '-75%' },
    ],
    features: ['Cybersecurity', 'Compliance', 'Data Protection', 'Security Training'],
  },
  {
    id: 'ai-solutions',
    title: 'AI & Analytics',
    description: 'Advanced AI solutions including Generative AI and Business Intelligence.',
    image: '/images/illustrations/ai/hero.svg',
    color: '#6366F1',
    metrics: [
      { label: 'Accuracy', value: '98.5%' },
      { label: 'Efficiency', value: '+150%' },
    ],
    features: ['Generative AI', 'Machine Learning', 'Data Science', 'Analytics'],
  },
  {
    id: 'it-services',
    title: 'IT Services',
    description: 'Comprehensive IT support and helpdesk services for your organization.',
    image: '/images/illustrations/it-services/hero.svg',
    color: '#2DD4BF',
    metrics: [
      { label: 'Resolution Time', value: '-70%' },
      { label: 'User Satisfaction', value: '98%' },
    ],
    features: ['IT Helpdesk', '24/7 Support', 'System Maintenance', 'User Training'],
  },
  {
    id: 'staffing',
    title: 'Staffing Solutions',
    description: 'Expert IT staffing and talent services to build your dream team.',
    image: '/images/illustrations/staffing/hero.svg',
    color: '#9333EA',
    metrics: [
      { label: 'Placement Success', value: '95%' },
      { label: 'Time to Hire', value: '-60%' },
    ],
    features: ['IT Staffing', 'Talent Search', 'Team Augmentation', 'Skill Assessment'],
  },
  {
    id: 'devops',
    title: 'DevOps Solutions',
    description: 'Streamline your development and operations with modern DevOps practices.',
    image: '/images/illustrations/devops/hero.svg',
    color: '#F97316',
    metrics: [
      { label: 'Deployment Time', value: '-75%' },
      { label: 'System Uptime', value: '99.9%' },
    ],
    features: ['CI/CD Pipeline', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring'],
  }
]

const categories = [
  { id: 'all', name: 'All Solutions' },
  { id: 'microsoft', name: 'Microsoft Solutions', solutions: ['microsoft-solutions'] },
  { id: 'cloud', name: 'Cloud & Infrastructure', solutions: ['infrastructure', 'integrations', 'security', 'devops'] },
  { id: 'ai', name: 'AI & Analytics', solutions: ['ai-solutions'] },
  { id: 'industry', name: 'Industry Solutions', solutions: ['construction'] },
  { id: 'apps', name: 'Apps & Automation', solutions: ['apps-automation'] },
  { id: 'services', name: 'IT Services', solutions: ['it-services', 'staffing'] },
]

export default function Solutions() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 border border-[#3B82F6]/20 backdrop-blur-sm mb-6"
            >
              <CommandLineIcon className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
            >
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                Business
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-12"
            >
              Comprehensive enterprise solutions powered by cutting-edge technology.
              From cloud infrastructure to AI, we deliver innovation at scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-6 py-2 rounded-full bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] hover:border-[#3B82F6]/20 transition-all duration-300 text-gray-400 hover:text-white"
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={`/solutions/${solution.id}`}>
                  <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#3B82F6]/20 transition-all duration-300 h-full hover:bg-[#1A2B44]/70">
                    {/* Solution Icon */}
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br" style={{ backgroundColor: `${solution.color}20` }} />
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-contain p-6"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-300 group-hover:text-gray-200">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {solution.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {solution.metrics.map(({ label, value }) => (
                        <div key={label} className="bg-[#0A1628] rounded-xl p-4 group-hover:scale-105 transition-transform duration-300">
                          <div className="text-xl font-bold" style={{ color: solution.color }}>{value}</div>
                          <div className="text-sm text-gray-400">{label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-sm rounded-full text-gray-400 bg-[#0A1628] group-hover:text-gray-300 group-hover:bg-[#0A1628]/80 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-6 right-6 p-2 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRightIcon className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-[#10B981]/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                Transform
              </span>
              {' '}Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white font-semibold hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 