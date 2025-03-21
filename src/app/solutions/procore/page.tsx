'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  CubeTransparentIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ArrowsRightLeftIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const integrations = [
  {
    title: "IFS Integration",
    description: "Seamlessly connect Procore with IFS for streamlined construction management and enterprise resource planning.",
    icon: <BuildingOfficeIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/procore/ifs.svg",
    link: "https://marketplace.procore.com/apps/ifs-by-calance",
    metrics: { 
      "Data Sync": "Real-time",
      "Accuracy": "99.9%",
      "Time Saved": "40hrs/week"
    }
  },
  {
    title: "NetSuite Integration",
    description: "Integrate Procore with NetSuite for comprehensive financial management and project accounting.",
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/procore/netsuite.svg",
    link: "https://marketplace.procore.com/apps/netsuite-by-calance",
    metrics: {
      "Processing": "Automated",
      "Efficiency": "+80%",
      "Accuracy": "99.99%"
    }
  },
  {
    title: "PeopleSoft Integration",
    description: "Connect Procore with PeopleSoft for unified HR, finance, and project management workflows.",
    icon: <ArrowsRightLeftIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/procore/peoplesoft.svg",
    link: "https://marketplace.procore.com/apps/peoplesoft-by-calance-1776b1d5-8767-4dd6-83ca-b3a4d16b5a28",
    metrics: {
      "Data Flow": "Bi-directional",
      "Integration": "Seamless",
      "Time Saved": "30hrs/week"
    }
  },
  {
    title: "JD Edwards Integration",
    description: "Streamline operations by connecting Procore with JD Edwards EnterpriseOne.",
    icon: <CubeTransparentIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/procore/jdedwards.svg",
    link: "https://marketplace.procore.com/apps/jd-edwards-integrations-by-calance",
    metrics: {
      "Sync Speed": "Real-time",
      "Accuracy": "100%",
      "ROI": "+200%"
    }
  }
]

const additionalTools = [
  { 
    name: "COINS Financials",
    description: "Financial integration with COINS",
    link: "https://marketplace.procore.com/apps/coins-financials-by-calance"
  },
  { 
    name: "Sage 300 Insurance",
    description: "Insurance management integration",
    link: "https://marketplace.procore.com/apps/sage-300-insurance-by-calance-0ba2b2ea-4eb2-4af6-89cc-1d7d480f5c53"
  },
  { 
    name: "CMIC Financials",
    description: "Financial management solution",
    link: "https://marketplace.procore.com/apps/cmic-financials-by-calance"
  },
  { 
    name: "Nexus Integration",
    description: "Vendor management solution",
    link: "https://marketplace.procore.com/apps/nexus-by-calance"
  }
]

const benefits = [
  {
    label: "Time Savings",
    value: "+70%",
    description: "Reduced manual work"
  },
  {
    label: "Data Accuracy",
    value: "99.9%",
    description: "Automated syncing"
  },
  {
    label: "ROI",
    value: "+150%",
    description: "Average return"
  },
  {
    label: "Efficiency",
    value: "+85%",
    description: "Process improvement"
  }
]

export default function ProcoreTools() {
  return (
    <main className="bg-[#0A1628] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 to-[#22C55E]/10" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#F59E0B] mb-6"
              >
                <BuildingOfficeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Procore Integrations</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Enhance Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#22C55E]">
                  {" "}Procore Experience
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-xl mb-8"
              >
                Powerful integrations that connect Procore with your essential business systems for seamless operations.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="#contact" className="bg-gradient-to-r from-[#F59E0B] to-[#22C55E]">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
                
                <GlowingButton href="#integrations" className="bg-[#1A2B44] hover:bg-[#243B61]">
                  View Integrations
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] hidden lg:block"
            >
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

      {/* Integrations Grid */}
      <section id="integrations" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <motion.a
                href={integration.link}
                target="_blank"
                rel="noopener noreferrer"
                key={integration.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#F59E0B]/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#F59E0B]/10 to-[#22C55E]/10 text-[#F59E0B]">
                    {integration.icon}
                  </div>
                  <h3 className="text-xl font-bold">{integration.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">
                  {integration.description}
                </p>

                <div className="relative h-[200px] mb-6">
                  <Image
                    src={integration.illustration}
                    alt={integration.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(integration.metrics).map(([label, value]) => (
                    <div key={label} className="bg-[#0A1628] rounded-xl p-4 transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="text-xl font-bold text-[#F59E0B]">{value}</div>
                      <div className="text-sm text-gray-400">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Tools */}
      <section className="py-20 bg-[#0F172A] relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 to-[#22C55E]/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">More Integration Tools</h2>
            <p className="text-gray-400">Additional solutions to enhance your Procore experience</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalTools.map((tool, index) => (
              <motion.a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 text-center group hover:bg-[#243B61] transition-colors"
              >
                <div className="text-lg font-medium text-white mb-2">{tool.name}</div>
                <div className="text-sm text-[#F59E0B]">{tool.description}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Integration Benefits</h2>
            <p className="text-gray-400">Real results from our Procore integrations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/10 to-[#22C55E]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-8 border border-[#243B61]">
                  <div className="text-3xl font-bold text-[#F59E0B] mb-2">{benefit.value}</div>
                  <div className="text-lg font-medium text-white mb-2">{benefit.label}</div>
                  <div className="text-sm text-gray-400">{benefit.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F59E0B]/10 to-[#22C55E]/10 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold mb-4 text-white"
                >
                  Ready to Enhance Your Procore Experience?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-400 mb-8"
                >
                  Let's discuss how our Procore integrations can streamline your construction management workflows.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlowingButton href="#contact" className="bg-gradient-to-r from-[#F59E0B] to-[#22C55E]">
                    Get Started
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </GlowingButton>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] hidden lg:block"
              >
                <Image
                  src="/images/illustrations/procore/cta.svg"
                  alt="Procore CTA"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 