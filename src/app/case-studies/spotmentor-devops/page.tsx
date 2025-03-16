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
  CircleStackIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import GlowingButton from '@/components/GlowingButton';

const technologies = [
  { name: "Jenkins DSL", category: "CI/CD" },
  { name: "Kops", category: "Infrastructure" },
  { name: "AWS", category: "Cloud" },
  { name: "EFK Stack", category: "Logging" },
  { name: "Git & GitHub", category: "Version Control" },
  { name: "SonarQube", category: "Code Quality" },
  { name: "Grafana", category: "Monitoring" },
  { name: "Prometheus", category: "Monitoring" }
];

const features = [
  {
    title: "CI/CD Pipeline",
    description: "Automated build and deployment pipeline with Jenkins DSL and GitOps techniques for application delivery.",
    metrics: {
      "Deploy Time": "-90%",
      "Success Rate": "99.9%",
      "Time Saved": "110min"
    }
  },
  {
    title: "Infrastructure as Code",
    description: "Kubernetes cluster setup on AWS using Kops with private subnet configuration for enhanced security.",
    metrics: {
      "Setup Time": "-80%",
      "Security": "100%",
      "Scalability": "Auto"
    }
  },
  {
    title: "Microservices Architecture",
    description: "Breaking down monolithic Flask application into microservices for better maintainability.",
    metrics: {
      "Dependencies": "-70%",
      "Modularity": "+90%",
      "Reliability": "High"
    }
  },
  {
    title: "Monitoring & Logging",
    description: "Comprehensive monitoring with EFK Stack, Grafana, Prometheus and Alerts Manager.",
    metrics: {
      "Visibility": "100%",
      "MTTR": "-85%",
      "Uptime": "99.9%"
    }
  }
];

const differentiators = [
  {
    title: "DevOps Culture",
    description: "Developers upskilled in operations"
  },
  {
    title: "Secure Infrastructure",
    description: "Private subnet with enhanced security"
  },
  {
    title: "Rapid Deployment",
    description: "From 2 hours to 10 minutes"
  },
  {
    title: "High Availability",
    description: "Reduced outages from 5-10/week to 0.1/week"
  },
  {
    title: "Cost Optimization",
    description: "Efficient resource utilization"
  },
  {
    title: "Team Empowerment",
    description: "Harmonious dev and ops collaboration"
  }
];

const results = [
  {
    metric: "0.1",
    label: "Outages/Week",
    description: "Down from 5-10/week"
  },
  {
    metric: "10min",
    label: "Deployment Time",
    description: "Down from 2 hours"
  },
  {
    metric: "100%",
    label: "Team Capability",
    description: "Full-stack operations"
  },
  {
    metric: "1.5mo",
    label: "Implementation",
    description: "Complete transformation"
  }
];

export default function SpotmentorDevOpsPage() {
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
                  Spotmentor
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-12"
              >
                Transforming an end-to-end HR technology LXP product with modern DevOps practices and microservices architecture
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <RocketLaunchIcon className="w-5 h-5" />
                  <span>Now part of Ernst & Young</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <ShieldCheckIcon className="w-5 h-5" />
                  <span>NLP-powered Platform</span>
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
                src="/images/illustrations/case-studies/spotmentor-devops/hero.svg"
                alt="Spotmentor DevOps"
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
                src="/images/illustrations/case-studies/spotmentor-devops/challenge.svg"
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
                  As a startup focused on rapid feature development, Spotmentor faced several operational challenges:
                </p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Limited resources for dedicated operations and security teams</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Increasing cyclical dependencies in Flask-based application</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Single server hosting causing monitoring and reliability issues</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Frequent service outages affecting client demonstrations</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-400">Time-consuming manual deployments with frequent releases</p>
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
              A comprehensive DevOps transformation focusing on automation, microservices architecture, and infrastructure modernization.
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
                src="/images/illustrations/case-studies/spotmentor-devops/solution.svg"
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
                  Modern DevOps infrastructure built with industry-leading tools and practices, implemented in phases over 1.5 months:
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
                src="/images/illustrations/case-studies/spotmentor-devops/results.svg"
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
              "The results were extraordinary. Server outages were minimized, deployment time was drastically reduced, and the team achieved harmonious development and operations."
            </blockquote>
            <p className="text-gray-500">- Spotmentor Engineering Team</p>
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
              Ready to Transform Your Development Process?
            </h2>
            <p className="text-gray-400 mb-8">
              Learn how our DevOps expertise can help you achieve faster, more reliable software delivery.
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