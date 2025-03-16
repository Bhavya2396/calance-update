'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CloudArrowUpIcon,
  ServerIcon,
  ArrowRightIcon,
  UserGroupIcon,
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

const timeline = [
  {
    year: "2000",
    milestone: "Initial SharePoint Implementation",
    description: "First SharePoint system implementation for Isuzu"
  },
  {
    year: "2000-2023",
    milestone: "Continuous Support & Evolution",
    description: "Multiple SharePoint instances implemented for document repository, collaboration, and workflow needs"
  },
  {
    year: "2023",
    milestone: "Major Migration Project",
    description: "Migration from SharePoint 2013 to SharePoint 2019 & SharePoint Online"
  }
];

const services = [
  {
    title: "SharePoint Migration",
    description: "Upgrade from 2013 to 2019 on-premises and SharePoint Online",
    icon: CloudArrowUpIcon
  },
  {
    title: "Custom Development",
    description: "Tailored solutions focusing on cost-effectiveness using out-of-the-box functionality",
    icon: DocumentDuplicateIcon
  },
  {
    title: "Workflow Implementation",
    description: "Business process automation and collaboration workflows",
    icon: ArrowsRightLeftIcon
  },
  {
    title: "Technical Support",
    description: "Comprehensive support for both internal and external users",
    icon: UserGroupIcon
  }
];

const migrationScope = [
  {
    title: "On-Premises Migration",
    description: "External user sites migrated to SharePoint 2019",
    icon: ServerIcon
  },
  {
    title: "Cloud Migration",
    description: "Internal user sites moved to SharePoint Online",
    icon: CloudArrowUpIcon
  },
  {
    title: "Third-Party Tool Support",
    description: "Expertise provided for division-specific migration tools",
    icon: CircleStackIcon
  },
  {
    title: "Continuous Maintenance",
    description: "Ongoing support and system optimization",
    icon: ChartPieIcon
  }
];

export default function IsuzuSharePointPage() {
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
                <CloudArrowUpIcon className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Case Study
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
              >
                SharePoint Migration for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
                  Isuzu Motors
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-12"
              >
                A 20+ year partnership delivering comprehensive SharePoint solutions for document management, collaboration, and workflow automation
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
                  <CloudArrowUpIcon className="w-5 h-5" />
                  <span>Migration</span>
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
                src="/images/illustrations/case-studies/isuzu-sharepoint/hero.svg"
                alt="Isuzu SharePoint Migration"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
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
              Isuzu Motors, a leading manufacturer of commercial trucks in the US and Canada, operates multiple offices across the United States. The company relies on numerous SharePoint sites for both internal and external purposes, with Calance serving as their full-service IT provider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#3B82F6] to-[#10B981]" />
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="bg-[#1A2B44] p-6 rounded-xl">
                        <div className="text-[#3B82F6] font-bold mb-2">{item.year}</div>
                        <h3 className="text-white font-semibold mb-2">{item.milestone}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#3B82F6]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Services</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our long-term partnership with Isuzu encompasses a wide range of SharePoint services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44] p-6 rounded-xl"
              >
                <service.icon className="w-12 h-12 text-[#3B82F6] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Scope */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Migration Scope</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Strategic approach to upgrading SharePoint infrastructure while maintaining business continuity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationScope.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44] p-6 rounded-xl"
              >
                <item.icon className="w-12 h-12 text-[#3B82F6] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
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
            <blockquote className="text-xl italic text-gray-400 max-w-3xl mx-auto mb-8">
              "Calance implemented the first SharePoint system for Isuzu in 2000. Since that time, [they] have implemented several additional SharePoint instances to address Isuzu's document repository, collaboration, and workflow needs. Through the 20+ years of SharePoint support, Calance has provided effective business solutions through responsive support, custom development, and hosting services."
            </blockquote>
            <p className="text-white font-semibold">Mike Milton</p>
            <p className="text-gray-400">Director Isuzu MIS</p>
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
              Need Help With Your SharePoint Migration?
            </h2>
            <p className="text-gray-400 mb-8">
              Let our team of experts help you modernize your SharePoint infrastructure
            </p>
            <GlowingButton href="/contact">
              Let's Talk
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </GlowingButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 