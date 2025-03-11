'use client'

import { motion } from 'framer-motion'
import { 
  CommandLineIcon,
  ArrowRightIcon,
  ComputerDesktopIcon,
  ServerIcon,
  AcademicCapIcon,
  ClockIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const features = [
  {
    title: "IT Helpdesk",
    description: "Comprehensive technical support and issue resolution with rapid response times and expert assistance.",
    icon: <ComputerDesktopIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/it-services/helpdesk.svg",
    metrics: {
      "Response Time": "< 15min",
      "Resolution Rate": "95%",
      "User Satisfaction": "98%"
    }
  },
  {
    title: "System Maintenance",
    description: "Proactive monitoring and maintenance of your IT infrastructure to prevent issues and optimize performance.",
    icon: <ServerIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/it-services/maintenance.svg",
    metrics: {
      "System Uptime": "99.9%",
      "Issues Prevented": "+80%",
      "Cost Savings": "40%"
    }
  },
  {
    title: "User Training",
    description: "Comprehensive training programs to enhance user productivity and technology adoption across your organization.",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/it-services/training.svg",
    metrics: {
      "User Proficiency": "+75%",
      "Support Tickets": "-60%",
      "Productivity": "+45%"
    }
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support ensuring your business operations run smoothly at all times.",
    icon: <ClockIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/it-services/hero.svg",
    metrics: {
      "Availability": "24/7",
      "SLA Compliance": "99.5%",
      "Response Rate": "100%"
    }
  }
]

const technologies = [
  { name: "ServiceNow", category: "ITSM" },
  { name: "Jira Service Desk", category: "Helpdesk" },
  { name: "Microsoft Teams", category: "Collaboration" },
  { name: "Zendesk", category: "Support" },
  { name: "Freshdesk", category: "Helpdesk" },
  { name: "Nagios", category: "Monitoring" },
  { name: "SolarWinds", category: "Management" },
  { name: "Splunk", category: "Analytics" },
  { name: "VMware", category: "Virtualization" },
  { name: "Active Directory", category: "Identity" },
  { name: "SCCM", category: "Management" },
  { name: "Intune", category: "MDM" }
]

const successMetrics = [
  {
    label: "Response Time",
    value: "-70%",
    description: "Faster issue resolution"
  },
  {
    label: "System Uptime",
    value: "99.9%",
    description: "Reliable service delivery"
  },
  {
    label: "User Satisfaction",
    value: "98%",
    description: "Happy end users"
  },
  {
    label: "Cost Efficiency",
    value: "+45%",
    description: "Improved ROI"
  }
]

export default function ITServices() {
  return (
    <main className="bg-[#0A1628] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/10 to-[#14B8A6]/10" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#2DD4BF] mb-6"
              >
                <CommandLineIcon className="w-5 h-5" />
                <span className="text-sm font-medium">IT Services & Support</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Empower Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6]">
                  {" "}Business Growth
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-xl mb-8"
              >
                Comprehensive IT services and support to keep your business running smoothly.
                From helpdesk to system maintenance, we've got you covered 24/7.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="#contact" className="bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6]">
                  Get Started
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
                src="/images/illustrations/it-services/hero.svg"
                alt="IT Services Hero"
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
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#2DD4BF]/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#2DD4BF]/10 to-[#14B8A6]/10 text-[#2DD4BF]">
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
                      <div className="text-xl font-bold text-[#2DD4BF]">{value}</div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-[#14B8A6]/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-gray-400">Industry-leading IT service management tools</p>
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
                <div className="text-sm text-[#2DD4BF]">{tech.category}</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Metrics</h2>
            <p className="text-gray-400">Real results from our IT service implementations</p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/10 to-[#14B8A6]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-8 border border-[#243B61]">
                  <div className="text-3xl font-bold text-[#2DD4BF] mb-2">{metric.value}</div>
                  <div className="text-lg font-medium text-white mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/10 to-[#14B8A6]/10" />
          {/* Animated Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2DD4BF]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#14B8A6]/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
                  Ready to Transform Your IT Support?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-400 mb-8"
                >
                  Let's discuss how our IT services can help you achieve your business goals with reliable and efficient support.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlowingButton href="#contact" className="bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6]">
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
                  src="/images/illustrations/it-services/cta.svg"
                  alt="IT Services CTA"
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