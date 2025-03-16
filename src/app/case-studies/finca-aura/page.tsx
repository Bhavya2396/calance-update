'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BeakerIcon,
  ArrowRightIcon,
  CloudArrowUpIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  CircleStackIcon,
  CommandLineIcon,
  CpuChipIcon,
  DocumentChartBarIcon,
  LightBulbIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import GlowingButton from '@/components/GlowingButton';

const features = [
  {
    title: "Scalable Computing Infrastructure",
    description: "Built on Amazon EKS with Apache Airflow for automated processes",
    icon: CloudArrowUpIcon,
    metrics: {
      "Platform": "AWS EKS",
      "Automation": "Airflow",
      "Scaling": "Dynamic"
    }
  },
  {
    title: "Dynamic Data Library",
    description: "Intelligent document retrieval and storage from multiple sources",
    icon: DocumentMagnifyingGlassIcon,
    metrics: {
      "Sources": "Multiple",
      "Storage": "Cloud",
      "Access": "Real-time"
    }
  },
  {
    title: "Advanced Topic Modeling",
    description: "LLM-powered impact pathway mapping with flexible model selection",
    icon: CpuChipIcon,
    metrics: {
      "Models": "Multiple",
      "Analysis": "Real-time",
      "Mapping": "Dynamic"
    }
  },
  {
    title: "Interactive Curation",
    description: "Researcher-driven data library and impact pathway customization",
    icon: DocumentChartBarIcon,
    metrics: {
      "Control": "Full",
      "Updates": "Real-time",
      "Flexibility": "High"
    }
  }
];

const technologies = [
  {
    name: "Amazon EKS",
    category: "Infrastructure"
  },
  {
    name: "Apache Airflow",
    category: "Automation"
  },
  {
    name: "LLM APIs",
    category: "AI Models"
  },
  {
    name: "Topic Modeling",
    category: "Analysis"
  },
  {
    name: "Document Processing",
    category: "Data Pipeline"
  },
  {
    name: "Real-time Analytics",
    category: "Intelligence"
  }
];

const benefits = [
  {
    title: "Enhanced Efficiency",
    description: "Rapid access and analysis of relevant literature",
    metric: "10x",
    label: "Faster Research"
  },
  {
    title: "Improved Decision-Making",
    description: "Clear insights for better-informed intervention choices",
    metric: "100%",
    label: "Data-Driven"
  },
  {
    title: "Resource Optimization",
    description: "Focus on most promising poverty solutions",
    metric: "85%",
    label: "Resource Efficiency"
  },
  {
    title: "Broader Impact",
    description: "Enhanced reach and effectiveness of interventions",
    metric: "2x",
    label: "Impact Scale"
  }
];

export default function FincaAuraPage() {
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
                <BeakerIcon className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Case Study
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
              >
                Customizing AI for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                  Social Impact
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-12"
              >
                FINCA's Automated Research Assistant (AuRA) - Accelerating poverty intervention research through AI-powered analysis
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <CpuChipIcon className="w-5 h-5" />
                  <span>AI Solution</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <DocumentChartBarIcon className="w-5 h-5" />
                  <span>Research</span>
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
                src="/images/illustrations/case-studies/finca-aura/hero.svg"
                alt="FINCA AuRA AI Solution"
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
            <h2 className="text-3xl font-bold text-white mb-4">Client Context</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              FINCA International, dedicated to ending poverty, needed a more efficient and accurate approach to validating innovative poverty solutions. The goal was to ensure resources were allocated to the most impactful initiatives through data-driven decision making.
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
                src="/images/illustrations/case-studies/finca-aura/challenge.svg"
                alt="Research Challenges"
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
                Traditional evaluation of poverty interventions faced several critical challenges:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Time-consuming manual literature review</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Labor-intensive data extraction</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Complex impact pathway construction</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Risk of errors and biases</p>
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
              AuRA combines cutting-edge AI technologies with intuitive research tools
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
                src="/images/illustrations/case-studies/finca-aura/solution.svg"
                alt="AuRA Architecture"
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
                  Built with scalability and flexibility in mind, leveraging modern cloud and AI technologies:
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

      {/* Case Example */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2B44] p-12 rounded-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Case Example: Women's Economic Empowerment</h2>
            <p className="text-gray-400 mb-8">
              In a recent study on women's economic empowerment, AuRA helped evaluate various interventions for enhancing financial inclusion in rural areas. The system:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <LightBulbIcon className="w-6 h-6 text-[#3B82F6]" />
                <p className="text-gray-400">Rapidly compiled comprehensive research data</p>
              </li>
              <li className="flex items-start gap-3">
                <ChartBarIcon className="w-6 h-6 text-[#3B82F6]" />
                <p className="text-gray-400">Created detailed impact pathway maps</p>
              </li>
              <li className="flex items-start gap-3">
                <DocumentChartBarIcon className="w-6 h-6 text-[#3B82F6]" />
                <p className="text-gray-400">Identified most promising interventions</p>
              </li>
              <li className="flex items-start gap-3">
                <UserGroupIcon className="w-6 h-6 text-[#3B82F6]" />
                <p className="text-gray-400">Enabled swift implementation of effective solutions</p>
              </li>
            </ul>
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
                src="/images/illustrations/case-studies/finca-aura/results.svg"
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
              Ready to Transform Your Research Process?
            </h2>
            <p className="text-gray-400 mb-8">
              Learn how our AI expertise can help you achieve faster, more accurate research insights
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