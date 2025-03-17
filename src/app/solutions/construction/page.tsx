'use client'

import { motion } from 'framer-motion'
import { 
  BuildingOffice2Icon,
  ArrowRightIcon,
  ClipboardDocumentListIcon,
  VideoCameraIcon,
  CubeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const features = [
  {
    title: "Project Planning",
    description: "Streamline construction projects with comprehensive planning tools, Gantt charts, and resource allocation.",
    icon: <ClipboardDocumentListIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/construction/project-planning.svg",
    metrics: {
      "On-Time": "95%",
      "Budget Accuracy": "98%",
      "Resource Utilization": "85%"
    }
  },
  {
    title: "Site Monitoring",
    description: "Real-time monitoring of construction sites with advanced cameras, sensors, and environmental tracking.",
    icon: <VideoCameraIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/construction/site-monitoring.svg",
    metrics: {
      "Site Coverage": "100%",
      "Alert Response": "<2min",
      "Uptime": "99.9%"
    }
  },
  {
    title: "Resource Management",
    description: "Efficiently manage construction materials, equipment, and workforce with intelligent tracking systems.",
    icon: <CubeIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/construction/resource-management.svg",
    metrics: {
      "Inventory Accuracy": "99%",
      "Equipment Usage": "+40%",
      "Cost Savings": "25%"
    }
  },
  {
    title: "Safety Compliance",
    description: "Ensure workplace safety and regulatory compliance with automated checks and real-time monitoring.",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/construction/safety-compliance.svg",
    metrics: {
      "Safety Score": "100%",
      "Incident Rate": "-85%",
      "Compliance": "100%"
    }
  }
]

const technologies = [
  { name: "BIM", category: "Design" },
  { name: "AutoCAD", category: "Design" },
  { name: "Procore", category: "Management" },
  { name: "PlanGrid", category: "Management" },
  { name: "IoT Sensors", category: "Monitoring" },
  { name: "CCTV", category: "Monitoring" },
  { name: "RFID", category: "Tracking" },
  { name: "GPS", category: "Tracking" },
  { name: "OSHA", category: "Safety" },
  { name: "ISO 45001", category: "Safety" },
  { name: "Green Build", category: "Sustainability" },
  { name: "LEED", category: "Sustainability" }
]

const successMetrics = [
  {
    label: "Project Success",
    value: "95%",
    description: "On-time completion"
  },
  {
    label: "Cost Efficiency",
    value: "+30%",
    description: "Budget optimization"
  },
  {
    label: "Safety Rating",
    value: "100%",
    description: "OSHA compliance"
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    description: "Project delivery"
  }
]

export default function Construction() {
  return (
    <main className="bg-[#0A1628] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 to-[#3B82F6]/10" />
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
                <BuildingOffice2Icon className="w-5 h-5" />
                <span className="text-sm font-medium">Construction Solutions</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Smart Construction
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#3B82F6]">
                  {" "}Management
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-xl mb-8"
              >
                Transform your construction projects with intelligent planning, monitoring, and management solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="#contact" className="bg-gradient-to-r from-[#F59E0B] to-[#3B82F6]">
                  Start Building
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
                src="/images/illustrations/construction/hero.svg"
                alt="Construction Hero"
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
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#F59E0B]/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#F59E0B]/10 to-[#3B82F6]/10 text-[#F59E0B]">
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
                      <div className="text-xl font-bold text-[#F59E0B]">{value}</div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 to-[#3B82F6]/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Construction Stack</h2>
            <p className="text-gray-400">Industry-leading construction technologies and standards</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#1A2B44]/50 rounded-xl p-6 text-center group hover:bg-[#243B61] transition-colors"
              >
                <div className="text-lg font-medium text-white mb-2">{tech.name}</div>
                <div className="text-sm text-[#F59E0B]">{tech.category}</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Project Metrics</h2>
            <p className="text-gray-400">Real-world construction success statistics</p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/10 to-[#3B82F6]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-[#1A2B44]/80 rounded-xl p-6 backdrop-blur-sm border border-[#243B61] group-hover:border-[#F59E0B]/20 transition-colors">
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
                        className="text-[#F59E0B] stroke-current"
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
                      <div className="text-2xl font-bold text-[#F59E0B]">{metric.value}</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F59E0B]/10 to-[#3B82F6]/10 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold mb-6"
                >
                  Ready to Transform Your Construction Projects?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-400 mb-8"
                >
                  Let's discuss how our smart construction solutions can optimize your projects and improve efficiency.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlowingButton href="#contact" className="bg-gradient-to-r from-[#F59E0B] to-[#3B82F6]">
                    Start Building
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
                  src="/images/illustrations/construction/cta.svg"
                  alt="Construction CTA"
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