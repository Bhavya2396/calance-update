'use client'

import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon,
  ArrowRightIcon,
  LockClosedIcon,
  ServerIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const features = [
  {
    title: "Network Security",
    description: "Protect your network infrastructure with advanced firewalls, intrusion detection, and threat prevention systems.",
    icon: <ServerIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/security/network-security.svg",
    metrics: {
      "Threat Detection": "99.9%",
      "Response Time": "<1min",
      "Network Uptime": "99.99%"
    }
  },
  {
    title: "Data Protection",
    description: "Secure sensitive data with military-grade encryption, secure storage, and comprehensive backup solutions.",
    icon: <LockClosedIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/security/data-protection.svg",
    metrics: {
      "Data Encrypted": "100%",
      "Recovery Time": "-85%",
      "Breach Prevention": "99.9%"
    }
  },
  {
    title: "Access Control",
    description: "Implement robust authentication and authorization with role-based access control and multi-factor authentication.",
    icon: <UserGroupIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/security/access-control.svg",
    metrics: {
      "Access Security": "100%",
      "Auth Success": "99.9%",
      "Policy Compliance": "100%"
    }
  },
  {
    title: "Compliance & Auditing",
    description: "Meet industry standards with comprehensive compliance monitoring, regular audits, and detailed reporting.",
    icon: <ClipboardDocumentCheckIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/security/compliance-auditing.svg",
    metrics: {
      "Standards Met": "100%",
      "Audit Coverage": "100%",
      "Report Accuracy": "99.9%"
    }
  }
]

const technologies = [
  { name: "Firewall", category: "Network" },
  { name: "IDS/IPS", category: "Network" },
  { name: "AES-256", category: "Encryption" },
  { name: "RSA", category: "Encryption" },
  { name: "OAuth 2.0", category: "Authentication" },
  { name: "SAML", category: "Authentication" },
  { name: "SIEM", category: "Monitoring" },
  { name: "EDR", category: "Monitoring" },
  { name: "ISO 27001", category: "Compliance" },
  { name: "SOC 2", category: "Compliance" },
  { name: "Zero Trust", category: "Architecture" },
  { name: "Blockchain", category: "Architecture" }
]

const successMetrics = [
  {
    label: "Security Score",
    value: "98%",
    description: "Industry benchmark"
  },
  {
    label: "Threat Prevention",
    value: "99.9%",
    description: "Attack mitigation"
  },
  {
    label: "Data Protection",
    value: "100%",
    description: "Encryption coverage"
  },
  {
    label: "Compliance",
    value: "100%",
    description: "Standards met"
  }
]

export default function Security() {
  return (
    <main className="bg-[#0A1628] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444]/10 to-[#3B82F6]/10" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#EF4444] mb-6"
              >
                <ShieldCheckIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Security Solutions</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Enterprise-Grade
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-[#3B82F6]">
                  {" "}Security
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-xl mb-8"
              >
                Protect your business with comprehensive security solutions that safeguard your data, networks, and users.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="#contact" className="bg-gradient-to-r from-[#EF4444] to-[#3B82F6]">
                  Get Protected
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
                
                <GlowingButton href="#features" className="bg-[#1A2B44] hover:bg-[#243B61]">
                  Explore Features
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
                    src="/images/illustrations/security/hero.svg"
                alt="Security Hero"
                    fill
                    className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#EF4444]/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#EF4444]/10 to-[#3B82F6]/10 text-[#EF4444]">
                      {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>

                <p className="text-gray-400 mb-6">
                  {feature.description}
                </p>

                <div className="relative h-[200px] mb-6">
                    <Image
                    src={feature.illustration}
                      alt={feature.title}
                      fill
                    className="object-contain"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(feature.metrics).map(([label, value]) => (
                      <div key={label} className="bg-[#0A1628] rounded-xl p-4 transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="text-xl font-bold text-[#EF4444]">{value}</div>
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
      <section className="py-20 bg-[#0F172A] relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444]/5 to-[#3B82F6]/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Security Technology Stack</h2>
            <p className="text-gray-400">Enterprise-grade security technologies and standards</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 text-center group hover:bg-[#243B61] transition-colors"
              >
                  <div className="text-lg font-medium text-white mb-2">{tech.name}</div>
                <div className="text-sm text-[#EF4444]">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Security Metrics</h2>
            <p className="text-gray-400">Real results from our security implementations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#EF4444]/10 to-[#3B82F6]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-8 border border-[#243B61]">
                  <div className="text-3xl font-bold text-[#EF4444] mb-2">{metric.value}</div>
                  <div className="text-lg font-medium text-white mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#EF4444]/10 to-[#3B82F6]/10 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold mb-6 text-white"
                >
                  Ready to Secure Your Business?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-400 mb-8"
                >
                  Let's discuss how our comprehensive security solutions can protect your organization from evolving threats.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlowingButton href="#contact" className="bg-gradient-to-r from-[#EF4444] to-[#3B82F6]">
                    Get Protected
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
                  src="/images/illustrations/security/cta.svg"
                  alt="Security CTA"
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