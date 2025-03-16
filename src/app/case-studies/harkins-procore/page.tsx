'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon, 
  ArrowRightIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentDuplicateIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline';
import GlowingButton from '@/components/GlowingButton';

const technologies = [
  { name: "Procore API", category: "Integration" },
  { name: "PeopleSoft API", category: "Integration" },
  { name: "ETL Pipeline", category: "Data Flow" },
  { name: "Real-time Sync", category: "Processing" },
  { name: "Error Handling", category: "Reliability" },
  { name: "Data Validation", category: "Quality" },
  { name: "Monitoring", category: "Operations" },
  { name: "Reporting", category: "Analytics" }
];

const features = [
  {
    title: "Automated Data Sync",
    description: "Real-time synchronization between Procore and PeopleSoft systems.",
    metrics: {
      "Speed": "Real-time",
      "Accuracy": "100%",
      "Coverage": "Complete"
    }
  },
  {
    title: "Financial Control",
    description: "Automated cost tracking and financial data management across systems.",
    metrics: {
      "Processing": "Instant",
      "Validation": "Auto",
      "Tracking": "Real-time"
    }
  },
  {
    title: "Error Prevention",
    description: "Built-in validation and error prevention mechanisms.",
    metrics: {
      "Reduction": "90%",
      "Accuracy": "99.9%",
      "Validation": "100%"
    }
  },
  {
    title: "Process Automation",
    description: "End-to-end automation of data transfer and reconciliation.",
    metrics: {
      "Manual": "0%",
      "Automated": "100%",
      "Time": "-75%"
    }
  }
];

const benefits = [
  {
    metric: "95%",
    label: "Automation",
    description: "Of data transfer processes"
  },
  {
    metric: "-90%",
    label: "Errors",
    description: "In data processing"
  },
  {
    metric: "+75%",
    label: "Efficiency",
    description: "In operations"
  },
  {
    metric: "100%",
    label: "Coverage",
    description: "Of financial data"
  }
];

export default function HarkinsProcore() {
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
                <BuildingOfficeIcon className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Case Study
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
              >
                Procore + PeopleSoft{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                  Integration
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-12"
              >
                Harkins Builders achieves seamless integration between Procore and PeopleSoft for real-time financial data synchronization
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <BuildingOfficeIcon className="w-5 h-5" />
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
                src="/images/illustrations/case-studies/harkins-procore/hero.svg"
                alt="Harkins Procore Integration"
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
                src="/images/illustrations/case-studies/harkins-procore/challenge.svg"
                alt="Integration Challenges"
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
                  Harkins Builders faced several challenges in managing their construction and financial data:
                </p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Manual data entry between systems</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Delayed financial reporting</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Data inconsistencies and errors</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Resource-intensive reconciliation</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Limited real-time visibility</p>
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
              A comprehensive integration solution that automates data flow between Procore and PeopleSoft.
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
                src="/images/illustrations/case-studies/harkins-procore/solution.svg"
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
                  Enterprise-grade integration solution with real-time processing capabilities:
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
                src="/images/illustrations/case-studies/harkins-procore/results.svg"
                alt="Results and Benefits"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((result, index) => (
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
              "The integration solution has transformed our financial operations, providing real-time data synchronization and eliminating manual processes."
            </blockquote>
            <p className="text-gray-500">- Harkins Builders Leadership</p>
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
              Ready to Streamline Your Systems?
            </h2>
            <p className="text-gray-400 mb-8">
              Learn how our integration expertise can help you achieve seamless data synchronization.
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