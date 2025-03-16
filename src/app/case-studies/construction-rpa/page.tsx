'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CogIcon, 
  ArrowRightIcon,
  CloudArrowUpIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  ClockIcon,
  DocumentDuplicateIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CircleStackIcon,
  ArrowsRightLeftIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import GlowingButton from '@/components/GlowingButton';

const technologies = [
  { name: "RPA Bots", category: "Automation" },
  { name: "Real-time ETL", category: "Integration" },
  { name: "Data Warehouse", category: "Storage" },
  { name: "Analytics Engine", category: "Intelligence" },
  { name: "API Gateway", category: "Connectivity" },
  { name: "Monitoring Suite", category: "Operations" },
  { name: "Security Layer", category: "Protection" },
  { name: "Reporting Tools", category: "Visualization" }
];

const features = [
  {
    title: "Automated Data Collection",
    description: "RPA bots that automatically gather data from multiple construction management systems in real-time.",
    metrics: {
      "Speed": "24/7",
      "Accuracy": "99.9%",
      "Coverage": "100%"
    }
  },
  {
    title: "Smart Integration",
    description: "Intelligent ETL processes that transform and standardize data from diverse sources.",
    metrics: {
      "Sources": "Multiple",
      "Format": "Unified",
      "Updates": "Real-time"
    }
  },
  {
    title: "Advanced Analytics",
    description: "Comprehensive analytics dashboard providing actionable insights for project management.",
    metrics: {
      "Metrics": "25+",
      "Reports": "Custom",
      "Updates": "Live"
    }
  },
  {
    title: "Secure Operations",
    description: "Enterprise-grade security ensuring data protection and compliance throughout the pipeline.",
    metrics: {
      "Security": "256-bit",
      "Compliance": "Full",
      "Access": "Role-based"
    }
  }
];

const differentiators = [
  {
    title: "Real-time Integration",
    description: "Instant data synchronization"
  },
  {
    title: "Automated Workflows",
    description: "Zero manual intervention"
  },
  {
    title: "Custom Analytics",
    description: "Tailored insights delivery"
  },
  {
    title: "Scalable Architecture",
    description: "Handles growing workloads"
  },
  {
    title: "Robust Security",
    description: "Enterprise-grade protection"
  },
  {
    title: "Easy Deployment",
    description: "Quick implementation"
  }
];

const results = [
  {
    metric: "85%",
    label: "Time Saved",
    description: "In data processing"
  },
  {
    metric: "99.9%",
    label: "Accuracy",
    description: "In data integration"
  },
  {
    metric: "100%",
    label: "Coverage",
    description: "Of data sources"
  },
  {
    metric: "2",
    label: "Weeks",
    description: "Implementation time"
  }
];

export default function ConstructionRPAPage() {
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
                <CogIcon className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Case Study
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
              >
                Real-Time Data Integration{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                  RPA Solution
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-12"
              >
                Automated data integration solution for a leading construction firm, enabling real-time insights and decision-making
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <BuildingOffice2Icon className="w-5 h-5" />
                  <span>Construction</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <ArrowsRightLeftIcon className="w-5 h-5" />
                  <span>Integration</span>
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
                src="/images/illustrations/case-studies/construction-rpa/hero.svg"
                alt="Construction RPA Solution"
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
                src="/images/illustrations/case-studies/construction-rpa/challenge.svg"
                alt="Construction Data Challenges"
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
                  The construction firm faced several critical challenges in their data management:
                </p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Manual data collection from multiple systems</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Inconsistent data formats and standards</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Delayed reporting and decision-making</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Limited real-time visibility into operations</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Resource-intensive data processing</p>
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
              A comprehensive RPA solution that automates data collection and integration across multiple systems.
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
                src="/images/illustrations/case-studies/construction-rpa/solution.svg"
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
                  Modern RPA solution built with scalability and real-time processing capabilities:
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
                src="/images/illustrations/case-studies/construction-rpa/results.svg"
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
              "The RPA solution has transformed our data management processes, providing real-time insights that enable faster and more informed decision-making."
            </blockquote>
            <p className="text-gray-500">- Construction Firm CTO</p>
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
              Ready to Automate Your Data Integration?
            </h2>
            <p className="text-gray-400 mb-8">
              Learn how our RPA expertise can help you achieve real-time data integration and insights.
            </p>
            <GlowingButton href="/contact">
              Schedule a Consultation
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </GlowingButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 