'use client'

import { motion } from 'framer-motion'
import { 
  ServerIcon,
  ArrowRightIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CircleStackIcon,
  ChartBarIcon,
  CommandLineIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const features = [
  {
    title: "Cloud Infrastructure",
    description: "Design and implement scalable cloud infrastructure solutions across major platforms.",
    icon: <CloudIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/infrastructure/cloud-infrastructure.svg",
    metrics: { 
      "Scalability": "+400%",
      "Cost Savings": "50%",
      "Deployment Speed": "+200%"
    }
  },
  {
    title: "Network Security",
    description: "Implement robust security measures to protect your infrastructure and data.",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/infrastructure/network-security.svg",
    metrics: {
      "Threat Prevention": "99.9%",
      "Compliance": "100%",
      "Response Time": "-80%"
    }
  },
  {
    title: "Server Management",
    description: "Optimize server performance and reliability with comprehensive management solutions.",
    icon: <ServerIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/infrastructure/server-management.svg",
    metrics: {
      "Uptime": "99.99%",
      "Resource Usage": "-40%",
      "MTTR": "-75%"
    }
  },
  {
    title: "Data Center Solutions",
    description: "Modern data center design and management for optimal performance and efficiency.",
    icon: <CircleStackIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/infrastructure/data-center.svg",
    metrics: {
      "Power Efficiency": "+60%",
      "Density": "+200%",
      "Cooling Cost": "-45%"
    }
  }
]

const technologies = [
  { name: "AWS", category: "Cloud Platform" },
  { name: "Azure", category: "Cloud Platform" },
  { name: "GCP", category: "Cloud Platform" },
  { name: "VMware", category: "Virtualization" },
  { name: "Cisco", category: "Networking" },
  { name: "Dell EMC", category: "Storage" },
  { name: "HPE", category: "Servers" },
  { name: "Nutanix", category: "HCI" },
  { name: "Palo Alto", category: "Security" },
  { name: "NetApp", category: "Storage" },
  { name: "Fortinet", category: "Security" },
  { name: "Pure Storage", category: "Storage" }
]

const successMetrics = [
  {
    label: "Infrastructure Cost",
    value: "-50%",
    description: "Reduced infrastructure expenses"
  },
  {
    label: "System Uptime",
    value: "99.99%",
    description: "Improved service availability"
  },
  {
    label: "Deployment Time",
    value: "-70%",
    description: "Faster resource provisioning"
  },
  {
    label: "Energy Efficiency",
    value: "+60%",
    description: "Reduced power consumption"
  }
]

export default function Infrastructure() {
  return (
    <main className="bg-[#0A1628] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-[#10B981]/10" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-4 top-1/4 w-72 h-72 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -right-4 top-1/2 w-72 h-72 bg-[#10B981]/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#3B82F6] mb-6"
              >
                <ServerIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Infrastructure Solutions</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Build Reliable
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                  {" "}Modern Infrastructure
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-xl mb-8"
              >
                Design and implement scalable, secure, and efficient infrastructure solutions for your business needs.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="#contact" className="bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                  Start Your Project
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
                
                <GlowingButton href="#features" className="bg-[#1A2B44] hover:bg-[#243B61]">
                  Explore Features
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
              </motion.div>
            </div>

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative lg:h-[600px] hidden lg:block"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/illustrations/infrastructure/hero.svg"
                    alt="Infrastructure Illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-lg shadow-lg"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-gradient-to-r from-[#10B981] to-[#3B82F6] rounded-full shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid with Visual Flow */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B82F6]/5 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Infrastructure
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                {" "}Features
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive infrastructure solutions to power your digital transformation
            </p>
          </motion.div>

          {/* Features with Illustrations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Connection Lines */}
                {index < features.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#3B82F6]/50 to-[#10B981]/50" />
                )}
                
                <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#3B82F6]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/5 group">
                  {/* Feature Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 text-[#3B82F6]">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>

                  {/* Feature Illustration */}
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={feature.illustration}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(feature.metrics).map(([label, value]) => (
                      <div key={label} className="bg-[#0A1628] rounded-xl p-4 transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-xl font-bold text-[#3B82F6]">{value}</div>
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

      {/* Technologies Section */}
      <section className="py-20 bg-[#0F172A] relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-[#10B981]/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Infrastructure
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                {" "}Technology Stack
              </span>
            </h2>
            <p className="text-gray-400">Industry-leading infrastructure and cloud technologies</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] group-hover:border-[#3B82F6]/20 transition-colors text-center">
                  <div className="font-medium text-white mb-2">{tech.name}</div>
                  <div className="text-sm text-[#3B82F6]">{tech.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics with Visual Charts */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Metrics</h2>
            <p className="text-gray-400">Real results from our infrastructure implementations</p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-[#1A2B44]/80 rounded-xl p-6 backdrop-blur-sm border border-[#243B61] group-hover:border-[#3B82F6]/20 transition-colors">
                  {/* Circular Progress */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-[#1A2B44] stroke-current"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-[#3B82F6] stroke-current"
                        strokeWidth="8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                        style={{
                          strokeDasharray: "264, 264",
                          strokeDashoffset: 264 - (parseInt(metric.value) / 100) * 264,
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-2xl font-bold text-[#3B82F6]">{metric.value}</div>
                    </div>
                  </div>
                  
                  <div className="text-lg font-medium text-white mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-[#10B981]/10" />
          {/* Animated Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#10B981]/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#1A2B44]/50 rounded-3xl p-12 backdrop-blur-xl border border-[#243B61]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold mb-6"
                >
                  Ready to Modernize Your Infrastructure?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-400 mb-8"
                >
                  Let's discuss how our infrastructure solutions can help you build a more reliable and efficient foundation.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlowingButton href="#contact" className="bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                    Get Started
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </GlowingButton>
                </motion.div>
              </div>
              
              {/* CTA Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] hidden lg:block"
              >
                <Image
                  src="/images/illustrations/infrastructure/cta.svg"
                  alt="Infrastructure CTA"
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