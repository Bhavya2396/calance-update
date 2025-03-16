'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  BuildingOfficeIcon,
  ClockIcon,
  DocumentDuplicateIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import GlowingButton from '@/components/GlowingButton';

const features = [
  {
    title: "Real-Time Integration",
    description: "Seamless data flow between Procore and PeopleSoft",
    icon: ArrowsRightLeftIcon,
    metrics: {
      "Projects": "150+",
      "Budget": "$1.2B",
      "Sync": "Real-time"
    }
  },
  {
    title: "Financial Control",
    description: "Complete visibility of project costs and cash flows",
    icon: CurrencyDollarIcon,
    metrics: {
      "Accuracy": "100%",
      "Coverage": "Full",
      "Updates": "Instant"
    }
  },
  {
    title: "Automated Workflows",
    description: "Elimination of manual data entry and processing",
    icon: CogIcon,
    metrics: {
      "Entry": "Automated",
      "Error Rate": "0%",
      "Efficiency": "High"
    }
  },
  {
    title: "Project Management",
    description: "Enhanced project delivery and financial tracking",
    icon: BuildingOfficeIcon,
    metrics: {
      "Projects": "150+",
      "Scale": "Enterprise",
      "Control": "Complete"
    }
  }
];

const technologies = [
  {
    name: "Procore",
    category: "Project Management"
  },
  {
    name: "PeopleSoft",
    category: "Financial System"
  },
  {
    name: "Dimension",
    category: "Integration"
  },
  {
    name: "Cloud Platform",
    category: "Infrastructure"
  },
  {
    name: "APIs",
    category: "Integration"
  },
  {
    name: "Real-time Sync",
    category: "Features"
  }
];

const benefits = [
  {
    title: "Active Projects",
    description: "Projects managed simultaneously",
    metric: "150+",
    label: "Projects"
  },
  {
    title: "Project Value",
    description: "Major development project",
    metric: "$1.2B",
    label: "Budget"
  },
  {
    title: "Data Accuracy",
    description: "Elimination of manual errors",
    metric: "100%",
    label: "Accuracy"
  },
  {
    title: "Integration Points",
    description: "Comprehensive coverage",
    metric: "10+",
    label: "Points"
  }
];

export default function BostonChildrensPage() {
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
                Boston Children's Hospital streamlines project management and financial control with seamless system integration
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <BuildingOfficeIcon className="w-5 h-5" />
                  <span>Healthcare</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <CurrencyDollarIcon className="w-5 h-5" />
                  <span>Construction</span>
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
                src="/images/illustrations/case-studies/boston-childrens-procore/hero.svg"
                alt="Boston Children's Hospital Integration"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Context */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Client Overview</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Boston Children's Hospital, one of the largest pediatric healthcare centers in the United States, initiated major development projects to enhance their state-of-the-art care facilities and increase service capacity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
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
                src="/images/illustrations/case-studies/boston-childrens-procore/challenge.svg"
                alt="Integration Challenges"
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-gray-400 mb-6">
                Managing significantly larger development project budgets required a sophisticated system for cash flow projection and control.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Separate systems for project management and financials</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Manual data entry between Procore and PeopleSoft</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Need for real-time financial data in project management</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Complex integration requirements without heavy programming</p>
                </li>
              </ul>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Comprehensive integration solution connecting project management and financial systems
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
                <feature.icon className="w-12 h-12 text-[#3B82F6] mb-4" />
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
                src="/images/illustrations/case-studies/boston-childrens-procore/solution.svg"
                alt="Integration Architecture"
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
                  Cloud-based integration system connecting project management and financial platforms:
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

      {/* Testimonial */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2B44] p-12 rounded-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Client Testimonial</h2>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center">
                  <BuildingOfficeIcon className="w-6 h-6 text-[#3B82F6]" />
                </div>
              </div>
              <div>
                <blockquote className="text-xl text-gray-400 italic mb-4">
                  "The integration of ERP data enables us to effectively manage the cash flows of a $1.2B project in Procore."
                </blockquote>
                <p className="text-white font-semibold">Al Nover</p>
                <p className="text-gray-400">Facilities Finance & Contract Manager, Boston Children's Hospital</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact and Benefits */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Impact & Benefits</h2>
            <div className="flex justify-center mb-8">
              <Image
                src="/images/illustrations/case-studies/boston-childrens-procore/results.svg"
                alt="Impact and Benefits"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#3B82F6] mb-2">{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-gray-400 text-sm">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
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
              Ready to Streamline Your Project Management?
            </h2>
            <p className="text-gray-400 mb-8">
              Let our integration experts help you connect your systems and optimize your workflows
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