'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CommandLineIcon, 
  ArrowRightIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  ClockIcon,
  ServerIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CircleStackIcon,
  LockClosedIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import GlowingButton from '@/components/GlowingButton';

const technologies = [
  { name: "AWS EKS", category: "Container Orchestration" },
  { name: "Terraform", category: "Infrastructure as Code" },
  { name: "GitLab CI/CD", category: "Pipeline" },
  { name: "Vault", category: "Secrets Management" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "ELK Stack", category: "Logging" },
  { name: "Istio", category: "Service Mesh" },
  { name: "ArgoCD", category: "GitOps" }
];

const features = [
  {
    title: "Secure Infrastructure",
    description: "Zero-trust architecture with end-to-end encryption and automated secret rotation for fintech compliance.",
    metrics: {
      "Compliance": "100%",
      "Security Score": "98/100",
      "Vulnerabilities": "0"
    }
  },
  {
    title: "GitOps Pipeline",
    description: "Automated CI/CD with GitLab and ArgoCD ensuring consistent deployments across environments.",
    metrics: {
      "Deploy Time": "-85%",
      "Success Rate": "99.9%",
      "Recovery": "Auto"
    }
  },
  {
    title: "Microservices Platform",
    description: "Cloud-native architecture with service mesh for enhanced security and observability.",
    metrics: {
      "Latency": "-60%",
      "Scalability": "Auto",
      "Reliability": "99.99%"
    }
  },
  {
    title: "Observability Stack",
    description: "Comprehensive monitoring and logging with real-time alerts and financial transaction tracing.",
    metrics: {
      "MTTR": "-75%",
      "Coverage": "100%",
      "Insights": "Real-time"
    }
  }
];

const differentiators = [
  {
    title: "Financial Compliance",
    description: "SOC2 and PCI DSS compliant"
  },
  {
    title: "Zero Trust Security",
    description: "End-to-end encryption & auth"
  },
  {
    title: "High Performance",
    description: "Sub-second transaction processing"
  },
  {
    title: "Global Scale",
    description: "Multi-region active-active setup"
  },
  {
    title: "Cost Efficiency",
    description: "40% reduction in cloud costs"
  },
  {
    title: "Automated Recovery",
    description: "Self-healing infrastructure"
  }
];

const results = [
  {
    metric: "99.99%",
    label: "Platform Uptime",
    description: "Financial-grade reliability"
  },
  {
    metric: "40%",
    label: "Cost Reduction",
    description: "Through optimization"
  },
  {
    metric: "<1s",
    label: "Transaction Time",
    description: "End-to-end processing"
  },
  {
    metric: "0",
    label: "Security Incidents",
    description: "Since implementation"
  }
];

export default function AlphaFortressPage() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 border border-[#3B82F6]/20 backdrop-blur-sm mb-6"
              >
                <CommandLineIcon className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  DevOps Case Study
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
              >
                DevOps Implementation for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                  Alpha Fortress
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-12"
              >
                Building a secure, scalable, and compliant DevOps platform for modern fintech operations
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <LockClosedIcon className="w-5 h-5" />
                  <span>SOC2 Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <CurrencyDollarIcon className="w-5 h-5" />
                  <span>Fintech Platform</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative h-[500px]"
            >
              <Image
                src="/images/illustrations/case-studies/alpha-fortress/hero.svg"
                alt="Alpha Fortress DevOps"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <Image
                src="/images/illustrations/case-studies/alpha-fortress/challenge.svg"
                alt="DevOps Challenges"
                fill
                className="object-contain"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-gray-400 mb-6">
                  Alpha Fortress needed a robust DevOps implementation that could meet stringent fintech requirements:
                </p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Ensuring compliance with financial regulations and security standards</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Maintaining high availability for critical financial transactions</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Implementing secure and automated deployment processes</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Scaling infrastructure efficiently while controlling costs</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Managing sensitive financial data with strict security controls</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Solution</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              A comprehensive DevOps platform built for security, scalability, and financial compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44] p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(feature.metrics).map(([key, value], i) => (
                    <div key={i}>
                      <div className="text-sm text-gray-400">{key}</div>
                      <div className="text-lg font-semibold text-[#3B82F6]">{value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <Image
                src="/images/illustrations/case-studies/alpha-fortress/solution.svg"
                alt="Technical Architecture"
                fill
                className="object-contain"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Technical Architecture</h2>
                <p className="text-gray-400 mb-8">
                  Enterprise-grade DevOps infrastructure built with security and compliance at its core:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="bg-[#1A2B44] p-4 rounded-lg">
                      <div className="text-[#3B82F6] text-sm mb-1">{tech.category}</div>
                      <div className="text-white font-semibold">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Results & Impact</h2>
            <div className="flex justify-center mb-8">
              <Image
                src="/images/illustrations/case-studies/alpha-fortress/results.svg"
                alt="Results and Benefits"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#3B82F6] mb-2">{result.metric}</div>
                <div className="text-white font-semibold mb-2">{result.label}</div>
                <div className="text-gray-400 text-sm">{result.description}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <blockquote className="text-xl italic text-gray-400 max-w-3xl mx-auto mb-4">
              "The DevOps implementation has transformed our ability to deliver secure, reliable financial services. We've achieved unprecedented levels of automation while maintaining the highest security standards."
            </blockquote>
            <p className="text-gray-500">- Alpha Fortress Engineering Team</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Financial Platform?
            </h2>
            <p className="text-gray-400 mb-8">
              Learn how our DevOps expertise can help you achieve secure, compliant, and efficient operations.
            </p>
            <GlowingButton href="/contact">
              Contact Us Today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </GlowingButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 