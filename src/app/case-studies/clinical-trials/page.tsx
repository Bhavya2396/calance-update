'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BeakerIcon, 
  ArrowRightIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CloudIcon,
  ClockIcon,
  ServerIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CircleStackIcon,
  UserGroupIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import GlowingButton from '@/components/GlowingButton';

const technologies = [
  { name: "AI/ML Models", category: "Core Processing" },
  { name: "Cloud Infrastructure", category: "Platform" },
  { name: "Document Analysis", category: "Intelligence" },
  { name: "Data Analytics", category: "Insights" },
  { name: "Secure Storage", category: "Data Management" },
  { name: "API Integration", category: "Connectivity" },
  { name: "Automated Workflow", category: "Process" },
  { name: "Reporting Tools", category: "Analytics" }
];

const features = [
  {
    title: "Automated Complexity Scoring",
    description: "System calculates complexity scores for patients, sites, and studies with user-defined parameters.",
    metrics: {
      "Accuracy": "95%+",
      "Processing": "Auto",
      "Coverage": "100%"
    }
  },
  {
    title: "Feedback & Collaboration",
    description: "Interactive feedback mechanism for score adjustment and team collaboration within the platform.",
    metrics: {
      "User Input": "Real-time",
      "Sharing": "Instant",
      "Access": "Centralized"
    }
  },
  {
    title: "Report Generation",
    description: "Automated creation of comprehensive reports with graphs, analytics, and justifications.",
    metrics: {
      "Format": "Multiple",
      "Generation": "Instant",
      "Integration": "Full"
    }
  },
  {
    title: "Document Management",
    description: "Secure storage and retrieval of all study documents with integrated library system.",
    metrics: {
      "Storage": "Cloud",
      "Retrieval": "<2s",
      "Security": "Enterprise"
    }
  }
];

const differentiators = [
  {
    title: "AI-Powered Analysis",
    description: "Advanced ML algorithms"
  },
  {
    title: "Real-time Processing",
    description: "Instant document analysis"
  },
  {
    title: "Collaborative Platform",
    description: "Team-wide access & input"
  },
  {
    title: "Regulatory Compliance",
    description: "Industry standard adherence"
  },
  {
    title: "Data Security",
    description: "Enterprise-grade protection"
  },
  {
    title: "Scalable Architecture",
    description: "Handles multiple studies"
  }
];

const results = [
  {
    metric: "50%",
    label: "Processing Time",
    description: "Reduction in document processing"
  },
  {
    metric: "95%",
    label: "Accuracy Rate",
    description: "In data extraction"
  },
  {
    metric: "100%",
    label: "Compliance",
    description: "With industry standards"
  },
  {
    metric: "1.5",
    label: "Month Timeline",
    description: "For implementation"
  }
];

export default function ClinicalTrialsIDPPage() {
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
                  Clinical Trials Case Study
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
              >
                Intelligent Document{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                  Processing
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-12"
              >
                Transforming clinical trial complexity assessment with AI-powered document processing
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <DocumentTextIcon className="w-5 h-5" />
                  <span>AI-Powered Analysis</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <BeakerIcon className="w-5 h-5" />
                  <span>Clinical Intelligence</span>
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
                src="/images/illustrations/case-studies/clinical-trials-idp/hero.svg"
                alt="Clinical Trials IDP"
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
                src="/images/illustrations/case-studies/clinical-trials-idp/challenge.svg"
                alt="Clinical Trial Challenges"
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
                  The Global Clinical Intelligence team needed a sophisticated solution to assess operational complexity in clinical trials:
                </p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Complex assessment of study design and patient diversity</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Time-consuming manual document processing</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Need for accurate performance metric comparison</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Managing diverse regulatory requirements</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Efficient resource allocation and risk management</p>
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
              A comprehensive platform for intelligent document processing and clinical trial complexity assessment.
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
                src="/images/illustrations/case-studies/clinical-trials-idp/solution.svg"
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
                  Advanced AI-powered platform built for clinical trial document processing and analysis:
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
                src="/images/illustrations/case-studies/clinical-trials-idp/results.svg"
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
              "The Clinical Trial Scoring Solution has revolutionized our ability to assess and manage trial complexity. The automated analysis and reporting have significantly improved our operational efficiency."
            </blockquote>
            <p className="text-gray-500">- Global Clinical Intelligence Team</p>
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
              Ready to Transform Your Clinical Trial Operations?
            </h2>
            <p className="text-gray-400 mb-8">
              Learn how our intelligent document processing solution can streamline your clinical trial assessments.
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