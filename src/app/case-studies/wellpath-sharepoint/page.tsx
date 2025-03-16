'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CloudArrowUpIcon,
  ArrowRightIcon,
  ServerIcon,
  UserGroupIcon,
  CogIcon,
  ArrowPathIcon,
  DocumentDuplicateIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import GlowingButton from '@/components/GlowingButton';

const features = [
  {
    title: "Multi-Version Migration",
    description: "Seamless migration across SharePoint 2010, 2013, and 2019",
    icon: ArrowPathIcon,
    metrics: {
      "Versions": "3",
      "Users": "10,000+",
      "Timeline": "7 Years"
    }
  },
  {
    title: "Custom Solutions",
    description: "Tailored SharePoint development for HR and performance management",
    icon: CogIcon,
    metrics: {
      "Tools": "Multiple",
      "Coverage": "Enterprise",
      "Integration": "Full"
    }
  },
  {
    title: "User Management",
    description: "Supporting 10,000+ users across remote locations nationwide",
    icon: UserGroupIcon,
    metrics: {
      "Users": "10,000+",
      "Locations": "Multiple",
      "Access": "Remote"
    }
  },
  {
    title: "Workflow Integration",
    description: "Custom workflows and third-party solution integration",
    icon: CommandLineIcon,
    metrics: {
      "Workflows": "Custom",
      "Integration": "3rd Party",
      "Scope": "Full"
    }
  }
];

const technologies = [
  {
    name: "SharePoint 2019",
    category: "Platform"
  },
  {
    name: "SharePoint 2013",
    category: "Migration"
  },
  {
    name: "Custom Workflows",
    category: "Automation"
  },
  {
    name: "HR Tools",
    category: "Solutions"
  },
  {
    name: "Performance System",
    category: "Applications"
  },
  {
    name: "3rd Party Integration",
    category: "Integration"
  }
];

const benefits = [
  {
    title: "Successful Migrations",
    description: "Three successful SharePoint upgrades",
    metric: "3",
    label: "Migrations"
  },
  {
    title: "User Base",
    description: "Supporting nationwide remote workforce",
    metric: "10k+",
    label: "Users"
  },
  {
    title: "Custom Solutions",
    description: "HR and performance management tools",
    metric: "100%",
    label: "Coverage"
  },
  {
    title: "Partnership Length",
    description: "Years of continuous support",
    metric: "7+",
    label: "Years"
  }
];

export default function WellpathSharePointPage() {
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
                <ServerIcon className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Case Study
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
              >
                SharePoint Migration &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                  Enterprise Support
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-12"
              >
                Wellpath's journey through multiple SharePoint versions with seamless user experience and custom solutions
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <ServerIcon className="w-5 h-5" />
                  <span>SharePoint</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B44] text-gray-400">
                  <UserGroupIcon className="w-5 h-5" />
                  <span>Enterprise</span>
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
                src="/images/illustrations/case-studies/wellpath-sharepoint/hero.svg"
                alt="Wellpath SharePoint Migration"
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
              Wellpath, the premier provider of localized, high-quality, compassionate care to vulnerable patients in challenging clinical environments, relies heavily on SharePoint for collaboration and reporting across their nationwide network of 10,000+ users.
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
                src="/images/illustrations/case-studies/wellpath-sharepoint/challenge.svg"
                alt="SharePoint Migration Challenges"
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
                After an unsuccessful SharePoint upgrade in 2017, Wellpath needed a reliable partner to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Support rapid internal growth and expanding SharePoint needs</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Manage complex migrations across multiple SharePoint versions</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Maintain custom solutions and integrations during migrations</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                  <p className="text-gray-400">Support remote users across multiple locations nationwide</p>
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
              Comprehensive SharePoint migration and support solution tailored for enterprise needs
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
                src="/images/illustrations/case-studies/wellpath-sharepoint/solution.svg"
                alt="SharePoint Architecture"
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
                  Enterprise-grade SharePoint implementation with custom solutions and integrations:
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
                  <UserGroupIcon className="w-6 h-6 text-[#3B82F6]" />
                </div>
              </div>
              <div>
                <blockquote className="text-xl text-gray-400 italic mb-4">
                  "Calance provided great support for our migrations!"
                </blockquote>
                <p className="text-white font-semibold">Joel Jensen</p>
                <p className="text-gray-400">VP-IT, Wellpath</p>
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
                src="/images/illustrations/case-studies/wellpath-sharepoint/results.svg"
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
              Ready to Transform Your SharePoint Environment?
            </h2>
            <p className="text-gray-400 mb-8">
              Let our SharePoint experts help you achieve a seamless migration and ongoing support
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