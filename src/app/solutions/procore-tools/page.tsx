'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  ArrowRightIcon,
  CubeTransparentIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon,
  DocumentDuplicateIcon,
  ServerIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const integrationCategories = [
  {
    title: "ERP Systems",
    description: "Enterprise-grade integrations for seamless data flow between Procore and your ERP system",
    tools: ["IFS Integration", "NetSuite Integration", "JD Edwards Integration"]
  },
  {
    title: "Financial Management",
    description: "Specialized financial integrations for automated cost tracking and reporting",
    tools: ["COINS Financials", "CMIC Financials"]
  },
  {
    title: "Specialized Solutions",
    description: "Purpose-built integrations for specific business needs",
    tools: ["PeopleSoft Integration", "Sage 300 Insurance", "Nexus Integration"]
  }
]

const allTools = [
  {
    title: "IFS Integration",
    description: "Enterprise-grade integration between Procore and IFS, enabling automated two-way data synchronization for construction management and ERP processes.",
    icon: <BuildingOfficeIcon className="w-6 h-6" />,
    logo: "/images/logos/procore-tools/ifs.png",
    illustration: "/images/illustrations/procore/ifs.svg",
    link: "https://marketplace.procore.com/apps/ifs-by-calance",
    category: "ERP Systems",
    features: [
      "Two-way automated synchronization",
      "Real-time project data exchange",
      "Customizable workflow automation",
      "Financial controls and compliance"
    ]
  },
  {
    title: "NetSuite Integration",
    description: "Seamless connection between Procore and NetSuite that eliminates double data entry and maintains accounting control. Synchronizes project financials, commitments, and change orders.",
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    logo: "/images/logos/procore-tools/netsuite.png",
    illustration: "/images/illustrations/procore/netsuite.svg",
    link: "https://marketplace.procore.com/apps/netsuite-by-calance",
    category: "ERP Systems",
    features: [
      "Automated financial data sync",
      "Real-time cost tracking",
      "Change order management",
      "Vendor payment processing"
    ]
  },
  {
    title: "PeopleSoft Integration",
    description: "Comprehensive integration solution that connects Procore with PeopleSoft for unified HR, finance, and project management. Ensures data consistency across systems while maintaining security and compliance standards.",
    icon: <ArrowsRightLeftIcon className="w-6 h-6" />,
    logo: "/images/logos/procore-tools/peoplesoft.png",
    illustration: "/images/illustrations/procore/peoplesoft.svg",
    link: "https://marketplace.procore.com/apps/peoplesoft-by-calance-1776b1d5-8767-4dd6-83ca-b3a4d16b5a28",
    category: "Specialized Solutions",
    features: [
      "HR data synchronization",
      "Financial controls integration",
      "Project cost management",
      "Compliance tracking"
    ]
  },
  {
    title: "JD Edwards Integration",
    description: "Reliable, automated integration between Procore and JD Edwards EnterpriseOne that enables real-time data exchange. Streamlines project financials, contract management, and resource planning across both systems.",
    icon: <ServerIcon className="w-6 h-6" />,
    logo: "/images/logos/procore-tools/jdedwards.png",
    illustration: "/images/illustrations/procore/jdedwards.svg",
    link: "https://marketplace.procore.com/apps/jd-edwards-integrations-by-calance",
    category: "ERP Systems",
    features: [
      "Automated data synchronization",
      "Contract management",
      "Resource planning integration",
      "Financial reporting"
    ]
  },
  {
    title: "COINS Financials",
    description: "Two-way integration between Procore and COINS that streamlines financial processes. Enables automated, two-way integration with pre-built solutions that can be customized to meet specific business needs.",
    icon: <ChartBarIcon className="w-6 h-6" />,
    logo: "/images/logos/procore-tools/coins.png",
    illustration: "/images/illustrations/procore/coins.svg",
    link: "https://marketplace.procore.com/apps/coins-financials-by-calance",
    category: "Financial Management",
    features: [
      "Automated cost tracking",
      "Budget management",
      "Financial reporting",
      "Document synchronization"
    ]
  },
  {
    title: "Sage 300 Insurance",
    description: "Specialized integration that connects Procore with Sage Insurance for comprehensive compliance management. Eliminates data silos between project management and insurance software while adhering to compliance standards.",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    logo: "/images/logos/procore-tools/sage300.png",
    illustration: "/images/illustrations/procore/sage.svg",
    link: "https://marketplace.procore.com/apps/sage-300-insurance-by-calance-0ba2b2ea-4eb2-4af6-89cc-1d7d480f5c53",
    category: "Specialized Solutions",
    features: [
      "Insurance certificate tracking",
      "Compliance monitoring",
      "Policy management",
      "Automated notifications"
    ]
  },
  {
    title: "CMIC Financials",
    description: "Comprehensive financial integration between Procore and CMIC that enables automated cost tracking and financial reporting. Ensures data consistency across both systems.",
    icon: <BuildingLibraryIcon className="w-6 h-6" />,
    logo: "/images/logos/procore-tools/cmic.png",
    illustration: "/images/illustrations/procore/cmic.svg",
    link: "https://marketplace.procore.com/apps/cmic-financials-by-calance",
    category: "Financial Management",
    features: [
      "Cost code synchronization",
      "Budget tracking",
      "Change order management",
      "Financial reporting"
    ]
  },
  {
    title: "Nexus Integration",
    description: "Streamlined integration for vendor management and accounts payable processes between Procore and Nexus. Automates vendor onboarding, payment processing, and compliance tracking.",
    icon: <DocumentDuplicateIcon className="w-6 h-6" />,
    logo: "/images/logos/procore-tools/nexus.png",
    illustration: "/images/illustrations/procore/nexus.svg",
    link: "https://marketplace.procore.com/apps/nexus-by-calance",
    category: "Specialized Solutions",
    features: [
      "Vendor management",
      "Payment processing",
      "Compliance tracking",
      "Document management"
    ]
  }
]

const whyCalance = {
  title: "Why Choose Calance",
  description: "With years of experience in construction technology integration, we deliver reliable solutions that help you focus on what matters most - building things.",
  points: [
    "Proven track record with enterprise clients",
    "Dimension integration framework for seamless connectivity",
    "Deep understanding of construction industry needs",
    "Expertise in compliance and security requirements"
  ]
}

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState(integrationCategories[0].title)
  const [selectedTool, setSelectedTool] = useState(allTools[0].title)
  
  const categoryTools = allTools.filter(tool => 
    integrationCategories.find(cat => 
      cat.title === selectedCategory && cat.tools.includes(tool.title)
    )
  )
  const currentTool = allTools.find(tool => tool.title === selectedTool)

  return (
    <main className="bg-[#111827] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-emerald-500/10" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-orange-500 mb-6"
              >
                <BuildingOfficeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Enterprise Integrations</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Transform Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">
                  {" "}Construction Workflow
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-xl mb-8"
              >
                Enterprise-grade integrations that connect Procore with your critical business systems, eliminating data silos and streamlining operations.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="#tools" className="bg-gradient-to-r from-orange-500 to-emerald-500">
                  View Integrations
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
                
                <GlowingButton href="#contact" className="bg-slate-800 hover:bg-slate-700">
                  Schedule Demo
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

      {/* Tools Section */}
      <section id="tools" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Selector */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrationCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => {
                    setSelectedCategory(category.title)
                    setSelectedTool(allTools.find(tool => 
                      category.tools.includes(tool.title)
                    )?.title || '')
                  }}
                  className={`p-6 rounded-xl text-left transition-colors ${
                    selectedCategory === category.title
                      ? 'bg-gradient-to-r from-orange-500/20 to-emerald-500/20 border-orange-500'
                      : 'bg-slate-800 hover:bg-slate-700'
                  } border border-slate-700`}
                >
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-slate-400 text-sm">{category.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Tool Selector */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex gap-4 min-w-max p-2">
              {categoryTools.map((tool) => (
                <button
                  key={tool.title}
                  onClick={() => setSelectedTool(tool.title)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedTool === tool.title
                      ? 'bg-gradient-to-r from-orange-500 to-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 relative">
                      <Image
                        src={tool.logo}
                        alt={tool.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>{tool.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Tool Display */}
          {currentTool && (
            <motion.div
              key={currentTool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-emerald-500/10 text-orange-500 w-16 h-16 relative">
                    <Image
                      src={currentTool.logo}
                      alt={currentTool.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">{currentTool.title}</h3>
                </div>

                <p className="text-slate-400 text-lg mb-8">
                  {currentTool.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentTool.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-400">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={currentTool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-emerald-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Learn More
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="relative h-[400px] bg-slate-800/50 rounded-xl overflow-hidden">
                {currentTool && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={currentTool.illustration}
                      alt={currentTool.title}
                      className="max-w-full max-h-full p-4 object-contain"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        console.error('Image load error details:', {
                          tool: currentTool.title,
                          path: currentTool.illustration,
                          naturalWidth: img.naturalWidth,
                          naturalHeight: img.naturalHeight,
                          currentSrc: img.currentSrc,
                          complete: img.complete,
                          error: e
                        });
                        
                        // Create fallback content
                        const fallback = document.createElement('div');
                        fallback.className = 'flex flex-col items-center justify-center text-slate-500 p-4';
                        fallback.innerHTML = `
                          <svg class="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p>Unable to load illustration</p>
                          <p class="text-sm mt-2">${currentTool.illustration}</p>
                        `;
                        
                        // Replace the image with fallback
                        img.style.display = 'none';
                        img.parentElement?.appendChild(fallback);
                        
                        // Try to fetch the SVG directly to get more error details
                        fetch(currentTool.illustration)
                          .then(response => {
                            if (!response.ok) {
                              throw new Error(`HTTP error! status: ${response.status}`);
                            }
                            return response.text();
                          })
                          .then(text => {
                            console.log('SVG content loaded successfully');
                          })
                          .catch(error => {
                            console.error('Fetch error:', error);
                          });
                      }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Integration Benefits Section */}
      <section className="py-20 bg-slate-900/50 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-emerald-500/5" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Integration Benefits</h2>
            <p className="text-xl text-gray-400">Unlock the full potential of your construction management workflow</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-emerald-500/10 text-orange-500 mb-6 inline-block">
                <ArrowsRightLeftIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Synchronization</h3>
              <p className="text-slate-400">Automated two-way data flow ensures your systems are always in sync, eliminating manual data entry and reducing errors.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-emerald-500/10 text-orange-500 mb-6 inline-block">
                <ChartBarIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enhanced Reporting</h3>
              <p className="text-slate-400">Comprehensive reporting capabilities with real-time data access across all integrated systems for better decision making.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-emerald-500/10 text-orange-500 mb-6 inline-block">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Compliance & Security</h3>
              <p className="text-slate-400">Enterprise-grade security measures and compliance tracking ensure your data is protected and regulations are met.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-emerald-500/10 text-orange-500 mb-6 inline-block">
                <CurrencyDollarIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cost Control</h3>
              <p className="text-slate-400">Improved financial visibility and control with automated cost tracking and budget management across systems.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-emerald-500/10 text-orange-500 mb-6 inline-block">
                <DocumentDuplicateIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Document Management</h3>
              <p className="text-slate-400">Centralized document control ensures all project documentation is synchronized and easily accessible.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-emerald-500/10 text-orange-500 mb-6 inline-block">
                <BuildingOfficeIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Workflow Automation</h3>
              <p className="text-slate-400">Streamlined processes with automated workflows reduce manual intervention and increase operational efficiency.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Calance Section */}
      <section className="py-20 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{whyCalance.title}</h2>
              <p className="text-slate-400 text-lg mb-8">{whyCalance.description}</p>
              <ul className="space-y-4">
                {whyCalance.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-gradient-to-r from-orange-500 to-emerald-500">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] hidden lg:block"
            >
              <Image
                src="/images/illustrations/procore/why-calance.svg"
                alt="Why Choose Calance"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500/10 to-emerald-500/10 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                Ready to Streamline Your Construction Workflow?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-slate-400 mb-8"
              >
                Let's discuss how our enterprise-grade integrations can transform your construction management process.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
              >
                <GlowingButton href="#contact" className="bg-gradient-to-r from-orange-500 to-emerald-500">
                  Schedule a Demo
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
                
                <GlowingButton href="#tools" className="bg-slate-800 hover:bg-slate-700">
                  Explore Integrations
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 