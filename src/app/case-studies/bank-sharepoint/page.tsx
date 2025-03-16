'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CloudArrowUpIcon, 
  ArrowRightIcon,
  CloudIcon,
  ArrowPathIcon,
  ChartBarIcon,
  ClockIcon,
  ServerIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CircleStackIcon,
  DocumentDuplicateIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import GlowingButton from '@/components/GlowingButton';

const technologies = [
  { name: "SharePoint Online", category: "Platform" },
  { name: "ShareGate", category: "Migration Tool" },
  { name: "PowerShell", category: "Automation" },
  { name: "Azure AD", category: "Identity" },
  { name: "Microsoft 365", category: "Suite" },
  { name: "Power Automate", category: "Workflow" },
  { name: "Power BI", category: "Analytics" },
  { name: "Teams", category: "Collaboration" }
];

const features = [
  {
    title: "Zero-Downtime Migration",
    description: "Seamless tenant-to-tenant migration with no business disruption during merger.",
    metrics: {
      "Uptime": "99.9%",
      "Data": "100%",
      "Timeline": "4 months"
    }
  },
  {
    title: "Content Migration",
    description: "Complete migration of document libraries, sites, workflows, and custom solutions.",
    metrics: {
      "Sites": "200+",
      "Data": "15TB+",
      "Success": "100%"
    }
  },
  {
    title: "User Management",
    description: "Automated user mapping and permission management across tenants.",
    metrics: {
      "Users": "5000+",
      "Groups": "100+",
      "Mapping": "Auto"
    }
  }
];

const benefits = [
  {
    title: "Business Continuity",
    description: "Maintained uninterrupted access to critical business documents and workflows throughout the migration.",
    metric: "99.9%",
    metricLabel: "Uptime"
  },
  {
    title: "Data Integrity",
    description: "Ensured complete and accurate transfer of all content, metadata, and permissions.",
    metric: "100%",
    metricLabel: "Data Fidelity"
  },
  {
    title: "User Experience",
    description: "Minimized disruption to end users with automated profile and permission mapping.",
    metric: "< 1hr",
    metricLabel: "User Downtime"
  },
  {
    title: "Timeline",
    description: "Completed the migration ahead of schedule despite the complex merger requirements.",
    metric: "4 mo",
    metricLabel: "Duration"
  }
];

export default function CaseStudy() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                SharePoint Migration for
                <span className="block bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Leading Commercial Bank
                </span>
              </h1>

              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Seamless tenant-to-tenant SharePoint migration during a major bank merger, ensuring business continuity and complete data transfer with zero downtime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-w-4xl mx-auto"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                <Image
                  src="/images/illustrations/case-studies/bank-sharepoint/hero.svg"
                  alt="Bank SharePoint Migration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Context */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Client Context</h2>
            <p className="text-gray-400 mb-6">
              During a significant merger between two commercial banks, our client faced the challenge of consolidating SharePoint environments while maintaining business operations. With over 5,000 users, 200+ sites, and 15TB+ of critical business data, the migration needed to be executed with zero disruption to daily operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <UserGroupIcon className="w-8 h-8 text-[#3B82F6]" />
                <div>
                  <div className="text-lg font-bold text-white">5,000+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <DocumentDuplicateIcon className="w-8 h-8 text-[#3B82F6]" />
                <div>
                  <div className="text-lg font-bold text-white">200+</div>
                  <div className="text-sm text-gray-400">SharePoint Sites</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CircleStackIcon className="w-8 h-8 text-[#3B82F6]" />
                <div>
                  <div className="text-lg font-bold text-white">15TB+</div>
                  <div className="text-sm text-gray-400">Business Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  The merger required a complex SharePoint tenant-to-tenant migration with several critical challenges:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Maintaining business continuity during the migration</li>
                  <li>Preserving all content, metadata, and permissions</li>
                  <li>Managing user identity mapping between tenants</li>
                  <li>Migrating custom solutions and workflows</li>
                  <li>Meeting strict financial industry compliance requirements</li>
                  <li>Completing the migration within merger timeline</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/illustrations/case-studies/bank-sharepoint/challenge.svg"
                alt="SharePoint Migration Challenges"
                width={500}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(feature.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-[#3B82F6]">{value}</div>
                      <div className="text-xs text-gray-400">{key}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/illustrations/case-studies/bank-sharepoint/solution.svg"
                alt="Technical Architecture"
                width={500}
                height={400}
                priority
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Technical Architecture</h2>
              <div className="space-y-6">
                <p className="text-gray-400">
                  Our solution leveraged enterprise-grade technologies and best practices to ensure a successful migration:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      <div>
                        <div className="text-white font-medium">{tech.name}</div>
                        <div className="text-gray-400 text-xs">{tech.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A2B44] to-[#243B61] rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-6">Client Testimonial</h2>
                <blockquote className="text-gray-300 text-lg italic mb-6">
                  "The SharePoint migration was a critical component of our merger. The team's expertise and methodical approach ensured zero disruption to our operations. The seamless transition exceeded our expectations."
                </blockquote>
                <div>
                  <div className="text-white font-medium">VP of Technology</div>
                  <div className="text-gray-400">Leading Commercial Bank</div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center">
                  <span className="text-3xl text-white">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Benefits */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Impact & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative">
              <Image
                src="/images/illustrations/case-studies/bank-sharepoint/results.svg"
                alt="Results and Benefits"
                width={500}
                height={400}
                priority
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1A2B44]/50 backdrop-blur-sm border border-[#243B61] rounded-xl p-6"
                >
                  <div className="text-2xl font-bold text-[#3B82F6] mb-2">{benefit.metric}</div>
                  <div className="text-sm text-gray-400 mb-2">{benefit.metricLabel}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#1A2B44] to-[#0A1628]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A2B44]/60 backdrop-blur-md border border-[#243B61] rounded-3xl overflow-hidden">
            <div className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your SharePoint Environment?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you're planning a migration, merger, or modernization, our team of experts is ready to help you achieve a seamless transition.
              </p>
              <GlowingButton 
                href="/contact" 
                className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white"
              >
                <span className="flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </GlowingButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 