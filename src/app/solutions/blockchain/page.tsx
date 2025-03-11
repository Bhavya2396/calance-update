'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRightIcon, CubeTransparentIcon } from '@heroicons/react/24/solid'

const features = [
  {
    title: 'Smart Contracts',
    description: 'Automate and enforce business agreements with secure, self-executing smart contracts.',
    icon: '/images/illustrations/blockchain/smart-contracts.svg',
    metrics: [
      { label: 'Processing Time', value: '-85%' },
      { label: 'Cost Savings', value: '+60%' },
    ]
  },
  {
    title: 'DeFi Solutions',
    description: 'Implement decentralized financial systems for secure, transparent transactions.',
    icon: '/images/illustrations/blockchain/defi.svg',
    metrics: [
      { label: 'Transaction Speed', value: '+500%' },
      { label: 'Security Level', value: '99.99%' },
    ]
  },
  {
    title: 'Supply Chain',
    description: 'Track and verify products throughout the supply chain with immutable records.',
    icon: '/images/illustrations/blockchain/supply-chain.svg',
    metrics: [
      { label: 'Traceability', value: '100%' },
      { label: 'Efficiency', value: '+75%' },
    ]
  },
  {
    title: 'Asset Tracking',
    description: 'Manage and track digital assets with blockchain-based verification systems.',
    icon: '/images/illustrations/blockchain/asset-tracking.svg',
    metrics: [
      { label: 'Accuracy', value: '99.9%' },
      { label: 'Transparency', value: '100%' },
    ]
  }
]

const technologies = [
  'Ethereum',
  'Hyperledger',
  'Solidity',
  'Smart Contracts',
  'Web3.js',
  'IPFS',
  'Consensus Protocols',
  'Cryptography',
  'Digital Signatures',
  'Distributed Ledger'
]

const successMetrics = [
  {
    metric: '500%',
    label: 'Faster Transactions'
  },
  {
    metric: '99.99%',
    label: 'Security Level'
  },
  {
    metric: '100%',
    label: 'Transparency'
  },
  {
    metric: '-70%',
    label: 'Cost Reduction'
  }
]

export default function BlockchainSolution() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#9333EA]/10 to-[#9333EA]/10 border border-[#9333EA]/20 backdrop-blur-sm mb-6"
              >
                <CubeTransparentIcon className="w-4 h-4 text-[#9333EA]" />
                <span className="text-sm font-medium text-[#9333EA]">
                  Blockchain Solutions
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
              >
                Enterprise Blockchain Solutions
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-12"
              >
                Transform your business with secure, transparent, and efficient blockchain solutions. From smart contracts to supply chain management, we deliver enterprise-grade blockchain implementations.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/illustrations/blockchain/hero.svg"
                  alt="Blockchain Solutions"
                  fill
                  className="object-contain"
                />
              </div>
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
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#9333EA]/20 transition-all duration-300"
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA]/10" />
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {feature.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {feature.metrics.map(({ label, value }) => (
                    <div key={label} className="bg-[#0A1628] rounded-xl p-4">
                      <div className="text-xl font-bold text-[#9333EA]">{value}</div>
                      <div className="text-sm text-gray-400">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Technologies & Frameworks
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-2 rounded-full bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] text-gray-400"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA]/5 to-[#9333EA]/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Success Metrics
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map(({ metric, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] text-center"
              >
                <div className="text-4xl font-bold text-[#9333EA] mb-2">{metric}</div>
                <div className="text-gray-400">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our blockchain solutions can revolutionize your business operations.
            </p>
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-[#9333EA] text-white font-semibold hover:bg-[#9333EA]/90 transition-all duration-300 hover:scale-105">
              Schedule a Demo
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 