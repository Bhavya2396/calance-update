'use client'

import { motion } from 'framer-motion'
import { 
  CommandLineIcon,
  ArrowRightIcon,
  CubeTransparentIcon,
  CodeBracketIcon,
  ServerIcon,
  ChartBarIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const features = [
  {
    title: "Continuous Integration",
    description: "Automate your build, test, and deployment pipeline for faster and more reliable software delivery.",
    icon: <CodeBracketIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/devops/continuous-integration.svg",
    metrics: { 
      "Deployment Speed": "+300%",
      "Build Success": "99.9%",
      "Time Savings": "60hrs/week"
    }
  },
  {
    title: "Container Orchestration",
    description: "Scale and manage containerized applications with Kubernetes and Docker for optimal performance.",
    icon: <CubeTransparentIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/devops/container-orchestration.svg",
    metrics: {
      "Resource Usage": "-40%",
      "Scalability": "Auto",
      "Uptime": "99.99%"
    }
  },
  {
    title: "Infrastructure as Code",
    description: "Define and provision infrastructure using code for consistent and repeatable deployments.",
    icon: <ServerIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/devops/infrastructure-as-code.svg",
    metrics: {
      "Provisioning Time": "-80%",
      "Config Accuracy": "100%",
      "Cost Savings": "50%"
    }
  },
  {
    title: "Monitoring & Logging",
    description: "Gain real-time insights into your applications with comprehensive monitoring and logging solutions.",
    icon: <ChartBarIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/devops/monitoring.svg",
    metrics: {
      "Issue Detection": "Real-time",
      "MTTR": "-70%",
      "Alert Accuracy": "99.9%"
    }
  }
]

const technologies = [
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Docker", category: "Containers" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "Terraform", category: "IaC" },
  { name: "Ansible", category: "Automation" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "ELK Stack", category: "Logging" },
  { name: "GitLab", category: "DevOps Platform" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Helm", category: "Package Manager" },
  { name: "ArgoCD", category: "GitOps" }
]

const successMetrics = [
  {
    label: "Deployment Frequency",
    value: "+800%",
    description: "More frequent releases"
  },
  {
    label: "Recovery Time",
    value: "-75%",
    description: "Faster incident resolution"
  },
  {
    label: "Change Success",
    value: "99.9%",
    description: "Successful deployments"
  },
  {
    label: "Lead Time",
    value: "-85%",
    description: "From commit to deploy"
  }
]

export default function DevOps() {
  return (
    <main className="bg-[#0A1628] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
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
                <CommandLineIcon className="w-5 h-5" />
                <span className="text-sm font-medium">DevOps Solutions</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Accelerate Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#22C55E]">
                  {" "}Development Pipeline
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-xl mb-8"
              >
                Streamline your software delivery with automated workflows, containerization, and infrastructure as code.
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
                src="/images/illustrations/devops/hero.svg"
                alt="DevOps Hero"
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
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#F59E0B]/10 to-[#22C55E]/10 text-[#F59E0B]">
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 to-[#22C55E]/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">DevOps Technology Stack</h2>
            <p className="text-gray-400">Industry-leading DevOps tools and platforms</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">DevOps Metrics</h2>
            <p className="text-gray-400">Real results from our DevOps implementations</p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/10 to-[#22C55E]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-8 border border-[#243B61]">
                  <div className="text-3xl font-bold text-[#F59E0B] mb-2">{metric.value}</div>
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
          <div className="bg-gradient-to-r from-[#F59E0B]/10 to-[#22C55E]/10 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold mb-6"
                >
                  Ready to Transform Your Development Pipeline?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-400 mb-8"
                >
                  Let's discuss how our DevOps solutions can help you deliver software faster and more reliably.
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
                  src="/images/illustrations/devops/cta.svg"
                  alt="DevOps CTA"
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