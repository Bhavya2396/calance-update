'use client'

import { motion } from 'framer-motion'
import { 
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  CpuChipIcon,
  CodeBracketIcon,
  CircleStackIcon,
  SparklesIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const features = [
  {
    title: "Custom App Development",
    description: "Build tailored mobile and web applications that perfectly align with your business needs and user expectations.",
    icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/apps-automation/custom-app-development.svg",
    metrics: { 
      "User Satisfaction": "98%",
      "Time to Market": "-40%",
      "ROI": "+250%"
    }
  },
  {
    title: "Process Automation",
    description: "Streamline your business operations with intelligent automation solutions that reduce manual work and increase efficiency.",
    icon: <CpuChipIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/apps-automation/process-automation.svg",
    metrics: {
      "Efficiency Gain": "+75%",
      "Error Reduction": "-90%",
      "Cost Savings": "60%"
    }
  },
  {
    title: "Integration & APIs",
    description: "Connect your systems and applications seamlessly with robust API integrations and middleware solutions.",
    icon: <CircleStackIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/apps-automation/integration-apis.svg",
    metrics: {
      "System Connectivity": "100%",
      "Data Accuracy": "99.9%",
      "API Response": "<100ms"
    }
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage the power of artificial intelligence and machine learning to make your applications smarter and more predictive.",
    icon: <SparklesIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/apps-automation/ai-ml.svg",
    metrics: {
      "Prediction Accuracy": "95%",
      "Process Automation": "+80%",
      "Decision Speed": "-70%"
    }
  }
]

const technologies = [
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "Next.js", category: "Web" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "GraphQL", category: "API" },
  { name: "REST", category: "API" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" }
]

const successMetrics = [
  {
    label: "App Performance",
    value: "+200%",
    description: "Faster response times"
  },
  {
    label: "Process Efficiency",
    value: "+85%",
    description: "Automation impact"
  },
  {
    label: "Integration Success",
    value: "99.9%",
    description: "System reliability"
  },
  {
    label: "Cost Reduction",
    value: "-65%",
    description: "Through automation"
  }
]

export default function AppsAutomation() {
  return (
    <main className="bg-[#0A1628] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#60A5FA]/10" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#8B5CF6] mb-6"
              >
                <CodeBracketIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Apps & Automation</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#60A5FA]">
                  {" "}Smart Solutions
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-xl mb-8"
              >
                Build powerful applications and automate your processes with cutting-edge technology solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="#contact" className="bg-gradient-to-r from-[#8B5CF6] to-[#60A5FA]">
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
                src="/images/illustrations/apps-automation/hero.svg"
                alt="Apps & Automation Hero"
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
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#8B5CF6]/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#8B5CF6]/10 to-[#60A5FA]/10 text-[#8B5CF6]">
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
                      <div className="text-xl font-bold text-[#8B5CF6]">{value}</div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#60A5FA]/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-gray-400">Cutting-edge technologies for modern solutions</p>
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
                <div className="text-sm text-[#8B5CF6]">{tech.category}</div>
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
            <p className="text-gray-400">Real results from our automation solutions</p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-[#60A5FA]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-8 border border-[#243B61]">
                  <div className="text-3xl font-bold text-[#8B5CF6] mb-2">{metric.value}</div>
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
          <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-[#60A5FA]/10 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold mb-6"
                >
                  Ready to Automate Your Business?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-400 mb-8"
                >
                  Let's discuss how our custom applications and automation solutions can transform your business operations.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlowingButton href="#contact" className="bg-gradient-to-r from-[#8B5CF6] to-[#60A5FA]">
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
                  src="/images/illustrations/apps-automation/cta.svg"
                  alt="Apps & Automation CTA"
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