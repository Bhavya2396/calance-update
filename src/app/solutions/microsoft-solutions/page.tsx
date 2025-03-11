'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, CloudIcon, CommandLineIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    name: 'Microsoft 365',
    description: 'Comprehensive cloud-based productivity suite including Teams, Office apps, and enterprise email.',
    icon: <Image src="/images/illustrations/microsoft/m365.svg" alt="Microsoft 365" width={40} height={40} />,
    metrics: [
      { label: 'Productivity Increase', value: '+75%' },
      { label: 'Communication Efficiency', value: '+60%' },
    ],
    benefits: [
      'Real-time collaboration',
      'Enterprise email and calendar',
      'Teams communication',
      'Cloud storage',
    ]
  },
  {
    name: 'SharePoint',
    description: 'Enterprise content management and collaboration platform for secure document sharing and workflows.',
    icon: <Image src="/images/illustrations/microsoft/sharepoint.svg" alt="SharePoint" width={40} height={40} />,
    metrics: [
      { label: 'Document Access Time', value: '-50%' },
      { label: 'Team Collaboration', value: '+80%' },
    ],
    benefits: [
      'Document management',
      'Team sites',
      'Workflow automation',
      'Intranet portals',
    ]
  },
  {
    name: 'Dynamics 365',
    description: 'Business applications suite for ERP, CRM, and intelligent business processes.',
    icon: <Image src="/images/illustrations/microsoft/dynamics.svg" alt="Dynamics 365" width={40} height={40} />,
    metrics: [
      { label: 'Process Automation', value: '+90%' },
      { label: 'Customer Insights', value: '+70%' },
    ],
    benefits: [
      'Business Central ERP',
      'Customer engagement',
      'Financial management',
      'Supply chain optimization',
    ]
  },
  {
    name: 'Azure Services',
    description: 'Cloud computing platform for building, deploying, and managing applications and services.',
    icon: <CloudIcon className="w-10 h-10 text-[#0078D4]" />,
    metrics: [
      { label: 'Infrastructure Cost', value: '-40%' },
      { label: 'Deployment Speed', value: '+200%' },
    ],
    benefits: [
      'Cloud infrastructure',
      'App services',
      'Data analytics',
      'AI/ML capabilities',
    ]
  }
]

const caseStudies = [
  {
    title: 'Enterprise Digital Transformation',
    description: 'How we helped a large enterprise modernize their workplace with Microsoft 365 and SharePoint.',
    metrics: [
      { label: 'Productivity Gain', value: '+65%' },
      { label: 'Cost Savings', value: '$2M/year' },
    ],
    image: '/images/illustrations/case-studies/microsoft-transformation.svg'
  },
  {
    title: 'Business Process Automation',
    description: 'Implementing Dynamics 365 to streamline operations and improve customer engagement.',
    metrics: [
      { label: 'Process Efficiency', value: '+80%' },
      { label: 'Customer Satisfaction', value: '+45%' },
    ],
    image: '/images/illustrations/case-studies/dynamics-automation.svg'
  }
]

export default function MicrosoftSolutions() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00A4EF]/10 to-[#0078D4]/10 border border-[#00A4EF]/20 backdrop-blur-sm mb-6"
            >
              <CommandLineIcon className="w-4 h-4 text-[#00A4EF]" />
              <span className="text-sm font-medium bg-gradient-to-r from-[#00A4EF] to-[#0078D4] bg-clip-text text-transparent">
                Microsoft Solutions Partner
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
            >
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] to-[#0078D4]">
                Microsoft
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              Leverage the power of Microsoft's enterprise solutions to enhance productivity,
              streamline operations, and accelerate your digital transformation journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-w-4xl mx-auto"
            >
              <Image
                src="/images/illustrations/microsoft/hero.svg"
                alt="Microsoft Solutions"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#00A4EF]/20 transition-all duration-300">
                  <div className="mb-6">{feature.icon}</div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {feature.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {feature.metrics.map(({ label, value }) => (
                      <div key={label} className="bg-[#0A1628] rounded-xl p-4">
                        <div className="text-xl font-bold text-[#00A4EF]">{value}</div>
                        <div className="text-sm text-gray-400">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2">
                    {feature.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="px-3 py-1 text-sm rounded-full text-gray-400 bg-[#0A1628]"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Success Stories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#00A4EF]/20 transition-all duration-300">
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {study.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {study.metrics.map(({ label, value }) => (
                      <div key={label} className="bg-[#0A1628] rounded-xl p-4">
                        <div className="text-xl font-bold text-[#00A4EF]">{value}</div>
                        <div className="text-sm text-gray-400">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A4EF]/5 to-[#0078D4]/5" />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4EF] to-[#0078D4]">
                Transform
              </span>
              {' '}Your Workplace?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how Microsoft solutions can help you achieve your business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#00A4EF] to-[#0078D4] text-white font-semibold hover:shadow-lg hover:shadow-[#00A4EF]/20 transition-all duration-300 hover:scale-105"
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