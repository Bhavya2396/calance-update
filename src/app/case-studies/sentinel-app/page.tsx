'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CloudArrowUpIcon,
  ArrowRightIcon,
  BoltIcon,
  ChartBarIcon,
  WrenchIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  BellAlertIcon,
  CommandLineIcon,
  ServerIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import GlowingButton from '@/components/GlowingButton';

const technologies = [
  { name: "MVC.Net", category: "Backend" },
  { name: "AngularJS", category: "Frontend" },
  { name: "Bootstrap", category: "UI Framework" },
  { name: "AWS EC2", category: "Cloud Infrastructure" },
  { name: "IoT Integration", category: "Device Communication" },
  { name: "RESTful API", category: "Integration" },
  { name: "AWS Monitoring", category: "DevOps" },
  { name: "SMS Gateway", category: "Notifications" }
];

const features = [
  {
    title: "IoT Device Integration",
    description: "Seamless communication with leak detection devices through custom API gateway.",
    metrics: {
      "Uploads": "600K+",
      "Daily": "24/7",
      "Devices": "Growing"
    }
  },
  {
    title: "Real-time Monitoring",
    description: "Instant alerts and notifications for leak detection with email and SMS support.",
    metrics: {
      "Response": "Real-time",
      "Uptime": "99.9%",
      "Alerts": "Instant"
    }
  },
  {
    title: "Remote Control",
    description: "Complete device management with remote commands and parameter configuration.",
    metrics: {
      "Control": "Remote",
      "Access": "Secure",
      "Commands": "Multiple"
    }
  }
];

const benefits = [
  {
    title: "API Performance",
    description: "Handles over 600,000 device data uploads daily with room for scaling.",
    metric: "600K+",
    metricLabel: "Daily Uploads"
  },
  {
    title: "Development Speed",
    description: "Rapid Application Development approach enabled quick iterations and deployment.",
    metric: "RAD",
    metricLabel: "Methodology"
  },
  {
    title: "System Reliability",
    description: "Robust AWS infrastructure ensures consistent device communication.",
    metric: "99.9%",
    metricLabel: "Uptime"
  },
  {
    title: "User Experience",
    description: "Intuitive interface for device registration and management.",
    metric: "24/7",
    metricLabel: "Accessibility"
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
                Leak Detection Application for
                <span className="block bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Sentinel Hydrosolutions
                </span>
              </h1>

              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Building a sophisticated IoT device management platform for water leak detection systems with real-time monitoring and control capabilities.
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
                  src="/images/illustrations/case-studies/sentinel-hydrosolutions/hero.svg"
                  alt="Sentinel Hydrosolutions IoT Platform"
                  fill
                  className="object-cover"
                  priority
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
              Sentinel Hydrosolutions is a California-based company specializing in water control, filtration, and conservation devices. Their Leak Detection System (LDS) monitors water flow and provides alerts for leaking pipes or fixtures in both residential and commercial buildings. The company needed a robust web application to interface with their sophisticated IoT devices and manage the complex algorithms that detect water leaks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <DevicePhoneMobileIcon className="w-8 h-8 text-[#3B82F6]" />
                <div>
                  <div className="text-lg font-bold text-white">600K+</div>
                  <div className="text-sm text-gray-400">Daily Uploads</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CloudIcon className="w-8 h-8 text-[#3B82F6]" />
                <div>
                  <div className="text-lg font-bold text-white">AWS</div>
                  <div className="text-sm text-gray-400">Cloud Platform</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BellAlertIcon className="w-8 h-8 text-[#3B82F6]" />
                <div>
                  <div className="text-lg font-bold text-white">Real-time</div>
                  <div className="text-sm text-gray-400">Alert System</div>
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
                  Sentinel Hydrosolutions faced several critical challenges with their existing system:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Loss of direct device communication due to third-party vendor changes</li>
                  <li>Inconsistent data collection strategies</li>
                  <li>Lack of historical data storage for IoT devices</li>
                  <li>No infrastructure for hosting API or application</li>
                  <li>Need for real-time monitoring and alerts</li>
                  <li>Requirement for remote device control capabilities</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/illustrations/case-studies/sentinel-hydrosolutions/challenge.svg"
                alt="IoT Integration Challenges"
                width={500}
                height={400}
                className="w-full h-auto"
                priority
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
                src="/images/illustrations/case-studies/sentinel-hydrosolutions/solution.svg"
                alt="Technical Architecture"
                width={500}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Technical Architecture</h2>
              <div className="space-y-6">
                <p className="text-gray-400">
                  Our solution leveraged modern technologies and cloud infrastructure to build a scalable and reliable platform:
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
                  "Calance's ability to analyze our needs and engage in meaningful discussions about our system's intended use was invaluable. They didn't just follow specifications; they helped us build a better solution."
                </blockquote>
                <div>
                  <div className="text-white font-medium">Technical Director</div>
                  <div className="text-gray-400">Sentinel Hydrosolutions</div>
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
                src="/images/illustrations/case-studies/sentinel-hydrosolutions/results.svg"
                alt="Results and Benefits"
                width={500}
                height={400}
                className="w-full h-auto"
                priority
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
                Ready to Build Your IoT Solution?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you need a custom IoT platform, real-time monitoring system, or enterprise application, our team of experts is ready to help.
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