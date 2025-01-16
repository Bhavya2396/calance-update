'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  CodeBracketIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  ServerIcon,
  CogIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckIcon,
  CommandLineIcon,
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
  BellAlertIcon,
  StarIcon,
  ChartPieIcon,
  GlobeAltIcon,
  CircleStackIcon,
  ArrowPathIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
  LinkIcon,
  ChatBubbleLeftRightIcon,
  ShareIcon
} from '@heroicons/react/24/solid'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import ParticleBackground from '@/components/ParticleBackground'
import GlowingButton from '@/components/GlowingButton'
import TechStackIllustration from '@/components/TechStackIllustration'

const steps = [
  {
    number: "1",
    title: "Modernize Your IT Infrastructure",
    description: "Embrace a digital transformation journey with a trusted IT managed service provider who can help you align your people, technology, operations, and solutions.",
    icon: <CommandLineIcon className="w-6 h-6" />,
    image: "/images/illustrations/modernize.png",
    codeSnippet: `// modernize.ts
await transform({
  align: ['people', 'technology'],
  operations: 'optimized',
  solutions: 'customized'
})`
  },
  {
    number: "2",
    title: "Your Success Drives Our Success",
    description: "We provide IT Solutions that we believe in to support your growth because we are not just another vendor. We're your partner — acting as an extension of your business.",
    icon: <ClipboardDocumentCheckIcon className="w-6 h-6" />,
    image: "/images/illustrations/success.png",
    codeSnippet: `// partnership.ts
const partnership = {
  type: 'strategic',
  focus: 'clientSuccess',
  approach: 'extension'
}`
  },
  {
    number: "3",
    title: "Automate. Integrate. Save Time.",
    description: "Build an end-to-end process that automates processes using robotic process automation and integrates all your applications to increase productivity.",
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    image: "/images/illustrations/automate.png",
    codeSnippet: `// automation.ts
implement({
  rpa: true,
  integration: 'end-to-end',
  goal: 'productivity'
})`
  }
];

const benefits = [
  {
    title: "Customized IT Solutions",
    description: "Get customized IT solutions and services that support your unique goals and business requirements.",
    icon: <CogIcon className="w-8 h-8" />
  },
  {
    title: "Expert Team",
    description: "Gain the capabilities you need with our team of knowledgeable IT experts who understand your business.",
    icon: <UserGroupIcon className="w-8 h-8" />
  },
  {
    title: "Sustainable Growth",
    description: "Develop sustainable IT strategies that are focused on long-term business growth and success.",
    icon: <ChartPieIcon className="w-8 h-8" />
  }
];

const integrations = [
  { name: 'Microsoft', logo: 'https://www.calanceus.com/wp-content/uploads/2023/05/microsoft-partner-network-partnership.png' },
  { name: 'Proofpoint', logo: 'https://www.calanceus.com/wp-content/uploads/2023/05/Proofpoint_R_Logo.png' },
  { name: 'UiPath', logo: 'https://www.calanceus.com/wp-content/uploads/2023/05/ui-path--logo.png' },
  { name: 'CrowdStrike', logo: 'https://www.calanceus.com/wp-content/uploads/2023/05/crowdstrike_endpoint-logo.png' },
  { name: 'KnowBe4', logo: 'https://www.calanceus.com/wp-content/uploads/2023/05/KnowBe4-Logo-Color-MD.png' },
  { name: 'Arctic Wolf', logo: 'https://www.calanceus.com/wp-content/uploads/2023/05/ArcticWolf-logo.png' }
];

const features = [
  {
    title: "Apps & Automation Services",
    description: "Develop custom apps, and implement DevOps services, Robotic Process Automation (RPA), APIs, Integration, and Application Performance Management (APM).",
    icon: <CodeBracketIcon className="w-6 h-6" />,
    image: "/images/illustrations/apps-automation.png"
  },
  {
    title: "Managed IT Infrastructure & Operations",
    description: "Manage your IT infrastructure regardless of where it is located — on-prem, private cloud, or public cloud.",
    icon: <CloudIcon className="w-6 h-6" />,
    image: "/images/illustrations/infrastructure.png"
  },
  {
    title: "Business Intelligence & Data Science",
    description: "Identify trends and insights to help you design and develop more targeted business strategies.",
    icon: <ChartBarIcon className="w-6 h-6" />,
    image: "/images/illustrations/business-intelligence.png"
  },
  {
    title: "Security Services",
    description: "Monitor cybersecurity threats in real time 24/7, provide training to your team with sophisticated phishing simulations.",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    image: "/images/illustrations/security.png"
  },
  {
    title: "Construction Software Integration",
    description: "Configure pre-built integrations that connect your construction project management application with your ERP and Account Systems.",
    icon: <CogIcon className="w-6 h-6" />,
    image: "/images/illustrations/integration.png"
  },
  {
    title: "DevOps Services",
    description: "Align your technology with your operations and set up automation within your infrastructure to streamline efforts across all your teams.",
    icon: <ServerIcon className="w-6 h-6" />,
    image: "/images/illustrations/devops.png"
  }
];

const testimonials = [
  {
    quote: "Calance provided great support for the document control system at Exposition Construction Authority.",
    fullQuote: "Calance provided great support for the document control system I worked with at Exposition Construction Authority. The team was very responsive to my requests and to resolving any problems that would come up with the system.",
    author: "Roselyn Lewis",
    role: "Project Manager",
    company: "LA Expo"
  },
  {
    quote: "Through the 20+ years of SharePoint support, Calance has provided effective business solutions.",
    fullQuote: "Calance implemented the first SharePoint system for Isuzu in 2000. Since that time, [they] have implemented several additional SharePoint instances to address Isuzu's document repository, collaboration, and workflow needs. Through the 20+ years of SharePoint support, Calance has provided effective business solutions through responsive support, custom development, and hosting services.",
    author: "Mike Milton",
    role: "MIS Director",
    company: "Isuzu"
  }
];

const integrationTools = [
  {
    name: "CrowdStrike",
    description: "Endpoint Security",
    logo: "/images/illustrations/crowdstrike_endpoint-logo.webp",
    link: "#crowdstrike"
  },
  {
    name: "UiPath",
    description: "RPA Solutions",
    logo: "/images/illustrations/ui-path--logo.webp",
    link: "#uipath"
  },
  {
    name: "Xero",
    description: "Financial Solutions",
    logo: "/images/illustrations/xero.webp",
    link: "#xero"
  },
  {
    name: "Sage",
    description: "Business Management",
    logo: "/images/illustrations/sage-logo.webp",
    link: "#sage"
  },
  {
    name: "KnowBe4",
    description: "Security Awareness",
    logo: "/images/illustrations/KnowBe4-Logo-Color-MD.webp",
    link: "#knowbe4"
  },
  {
    name: "Arctic Wolf",
    description: "Security Operations",
    logo: "/images/illustrations/ArcticWolf-logo.webp",
    link: "#arcticwolf"
  }
];

const clients = [
  { 
    name: "Procore", 
    logo: "/images/illustrations/black and white procore logo.webp",
    category: "Construction Technology"
  },
  { 
    name: "PM Web", 
    logo: "/images/illustrations/black and white PM Web logo.webp",
    category: "Project Management"
  },
  { 
    name: "Isuzu", 
    logo: "/images/illustrations/isuzu.webp",
    category: "Automotive"
  },
  { 
    name: "Verogen", 
    logo: "/images/illustrations/Verogen.webp",
    category: "Biotechnology"
  },
  { 
    name: "Wellpath", 
    logo: "/images/illustrations/Wellpath.webp",
    category: "Healthcare"
  },
  { 
    name: "Westview", 
    logo: "/images/illustrations/westview.webp",
    category: "Healthcare"
  }
];

const Illustration3D = {
  DevOps: 'https://raw.githubusercontent.com/isometric-tech/illustrations/main/devops.svg',
  Security: 'https://raw.githubusercontent.com/isometric-tech/illustrations/main/security.svg',
  Cloud: 'https://raw.githubusercontent.com/isometric-tech/illustrations/main/cloud.svg',
  Analytics: 'https://raw.githubusercontent.com/isometric-tech/illustrations/main/analytics.svg',
  HashiCorp: 'https://raw.githubusercontent.com/isometric-tech/illustrations/main/hashicorp.svg',
  Automation: 'https://raw.githubusercontent.com/isometric-tech/illustrations/main/automation.svg'
};

const monitoringStats = [
  {
    name: "API Endpoints",
    status: "passing",
    uptime: "99.99%",
    responseTime: "89ms",
    checks: [
      { time: "1m", value: 100 },
      { time: "5m", value: 100 },
      { time: "15m", value: 98 },
      { time: "1h", value: 100 },
      { time: "6h", value: 99 },
      { time: "1d", value: 99.9 }
    ]
  },
  {
    name: "Infrastructure",
    status: "passing",
    uptime: "99.95%",
    responseTime: "102ms",
    checks: [
      { time: "1m", value: 100 },
      { time: "5m", value: 100 },
      { time: "15m", value: 100 },
      { time: "1h", value: 99 },
      { time: "6h", value: 99.9 },
      { time: "1d", value: 99.95 }
    ]
  },
  {
    name: "Security Checks",
    status: "passing",
    uptime: "100%",
    responseTime: "45ms",
    checks: [
      { time: "1m", value: 100 },
      { time: "5m", value: 100 },
      { time: "15m", value: 100 },
      { time: "1h", value: 100 },
      { time: "6h", value: 100 },
      { time: "1d", value: 100 }
    ]
  }
];

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <main className="min-h-screen bg-[#0A1628]">
      {/* Main Content Sections */}
      {/* Hero Section */}
      <section id="intro" className="relative overflow-hidden bg-[#0A1628] pt-32 pb-20 sm:pt-40 sm:pb-32">
        <ParticleBackground />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-8"
            >
              <div className="space-y-6">
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-white">Building Tomorrow's</span>{' '}
                  <span className="bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] bg-clip-text text-transparent">
                    Digital Foundation
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-xl text-gray-400 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Transform your business with cutting-edge solutions tailored to your needs.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-4"
                >
                  <GlowingButton 
                    href="#solutions" 
                    className="bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C]"
                  >
                    Explore Solutions
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </GlowingButton>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - 3D Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <TechStackIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Our Solutions - Where Innovation Meets Implementation */}
      <section id="solutions" className="py-32 bg-[#0A1628] relative">
        <div className="absolute inset-0 bg-[#0F172A]" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-[#FF6B2C]/5 rounded-full blur-[120px]" />
        <div className="absolute left-0 bottom-1/4 w-1/2 h-1/2 bg-[#3B82F6]/5 rounded-full blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-6">
              <RocketLaunchIcon className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide">Enterprise Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Innovative Solutions for Digital Excellence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
              Delivering robust, scalable solutions that empower your business to thrive in the digital age. Our enterprise solutions are built on proven methodologies and industry best practices.
            </p>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              From initial consultation to ongoing support, we partner with you to ensure successful implementation and continuous improvement of your digital infrastructure.
            </p>
          </motion.div>

          {/* Implementation Journey */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white leading-tight">Your Digital Transformation Journey</h3>
              <div className="space-y-10">
                {[
                  { 
                    phase: 'Discovery', 
                    duration: '2-3 weeks', 
                    title: 'Comprehensive Assessment', 
                    description: 'In-depth analysis of your current systems, identification of pain points, and mapping of business requirements to technical solutions.' 
                  },
                  { 
                    phase: 'Planning', 
                    duration: '3-4 weeks', 
                    title: 'Strategic Roadmap', 
                    description: 'Development of detailed implementation plan, resource allocation, risk mitigation strategies, and success metrics definition.' 
                  },
                  { 
                    phase: 'Implementation', 
                    duration: '8-12 weeks', 
                    title: 'Solution Deployment', 
                    description: 'Systematic rollout of solutions with continuous testing, validation, and stakeholder communication throughout the process.' 
                  },
                  { 
                    phase: 'Optimization', 
                    duration: 'Ongoing', 
                    title: 'Continuous Improvement', 
                    description: 'Regular performance monitoring, system updates, and proactive optimization based on usage patterns and emerging needs.' 
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.phase}
                    className="relative pl-12 border-l-2 border-[#1A2B44] hover:border-[#FF6B2C]/50 transition-colors duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#0F172A] border-2 border-[#1A2B44] group-hover:border-[#FF6B2C] transition-colors duration-300" />
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#FF6B2C] font-medium tracking-wide">{step.phase}</span>
                      <span className="text-sm text-gray-500 tracking-wide">• {step.duration}</span>
                    </div>
                    <h4 className="text-white font-medium mb-3 tracking-wide">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative lg:sticky lg:top-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl p-10 border border-[#1A2B44] hover:border-[#FF6B2C]/20 transition-colors duration-300 shadow-xl">
                <div className="space-y-10">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-2xl font-bold text-white tracking-wide">Implementation Success Metrics</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-sm text-gray-400 tracking-wide">Real-time Data</span>
                    </div>
                  </div>

                  <div className="grid gap-8">
                    {[
                      { 
                        label: "Enterprise Projects Delivered", 
                        value: "200+", 
                        trend: "Growing portfolio", 
                        detail: "Across various industries"
                      },
                      { 
                        label: "Average Implementation Time", 
                        value: "12 weeks", 
                        trend: "Efficient delivery", 
                        detail: "With proven methodology"
                      },
                      { 
                        label: "Client Satisfaction Rate", 
                        value: "98%", 
                        trend: "Consistent quality", 
                        detail: "Based on client feedback"
                      }
                    ].map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        className="bg-[#0A1628]/80 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden border border-[#1A2B44] group hover:border-[#FF6B2C]/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/5 to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-400 tracking-wide">{metric.label}</span>
                          </div>
                          <div className="flex items-end gap-3 mb-2">
                            <span className="text-3xl font-bold text-white tracking-wide">{metric.value}</span>
                            <span className="text-sm text-[#10B981] mb-1.5 tracking-wide">{metric.trend}</span>
                          </div>
                          <p className="text-sm text-gray-500 tracking-wide">{metric.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Transition to Enterprise Solutions */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F2137] border border-white/5 text-white mb-8">
              <span className="text-sm">Ready to see our solutions in action?</span>
              <ArrowRightIcon className="w-4 h-4 text-[#FF6B2C]" />
            </div>
            <div className="flex justify-center gap-4">
              <GlowingButton 
                href="#enterprise" 
                className="bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C]"
              >
                Explore Enterprise Solutions
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </GlowingButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Enterprise Solutions */}
      <section id="enterprise" className="py-32 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/5 to-[#3B82F6]/5" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-[#FF6B2C]/5 rounded-full blur-[120px]" />
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#3B82F6]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="flex flex-col items-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B2C]/10 to-[#3B82F6]/10 border border-[#FF6B2C]/20 text-[#FF6B2C] mb-8">
              <CogIcon className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide">Enterprise Solutions</span>
              <div className="w-2 h-2 rounded-full bg-[#FF6B2C] animate-pulse" />
            </div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-8 text-center max-w-4xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Transforming Businesses Through Technology
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto text-center leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Discover how Calance's enterprise solutions can help your business achieve sustainable growth and success in the digital age.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                { label: "Years of Excellence", value: "20+" },
                { label: "Enterprise Clients", value: "500+" },
                { label: "Success Rate", value: "98%" },
                { label: "Team Experts", value: "150+" }
              ].map((stat, index) => (
                <div key={stat.label} className="flex flex-col items-center px-8 py-4 bg-[#0F172A]/50 backdrop-blur-sm rounded-xl border border-[#1A2B44] hover:border-[#FF6B2C]/20 transition-colors">
                  <span className="text-3xl font-bold text-white mb-2">{stat.value}</span>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Text Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-[#FF6B2C]/10 text-[#FF6B2C]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <GlowingButton href="#contact" className="bg-[#FF6B2C] hover:bg-[#FF8F2C]">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </GlowingButton>
                  </motion.div>
                </div>

                {/* Mock Component */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2C]/10 via-transparent to-[#3B82F6]/10 rounded-xl blur-xl" />
                  
                  {feature.title.includes('Apps & Automation') && (
                    <div className="bg-[#0F2137] rounded-lg p-6 border border-[#FF6B2C]/20 relative z-10">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-green-500"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-sm text-white font-medium">Pipeline Status</span>
                          </div>
                          <span className="text-sm text-gray-400">Last deploy: 5m ago</span>
                        </div>
                        <div className="space-y-3">
                          {[
                            { stage: 'Build', status: 'success', duration: '45s', progress: 100 },
                            { stage: 'Test', status: 'success', duration: '2m', progress: 100 },
                            { stage: 'Deploy', status: 'success', duration: '1m', progress: 100 }
                          ].map((stage, i) => (
                            <motion.div
                              key={stage.stage}
                              className="bg-[#0A1628] p-3 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <CheckIcon className="w-5 h-5 text-green-500" />
                                  <span className="text-white">{stage.stage}</span>
        </div>
                                <span className="text-sm text-gray-400">{stage.duration}</span>
                              </div>
                              <motion.div 
                                className="h-1 bg-[#1A2B44] rounded-full overflow-hidden"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                              >
                                <motion.div 
                                  className="h-full bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${stage.progress}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.2, duration: 1 }}
                                />
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-sm pt-2">
                          <motion.div 
                            className="flex items-center gap-2 text-[#FF6B2C] cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            <CommandLineIcon className="w-5 h-5" />
                            <span>View Logs</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2 text-[#FF6B2C] cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            <RocketLaunchIcon className="w-5 h-5" />
                            <span>Redeploy</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.title.includes('IT Infrastructure') && (
                    <div className="bg-[#0F2137] rounded-lg p-6 border border-[#FF6B2C]/20 relative z-10">
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { label: 'Server Health', value: '98%', icon: <ServerIcon className="w-5 h-5" />, trend: '+2%' },
                            { label: 'Network Speed', value: '1.2 Gbps', icon: <GlobeAltIcon className="w-5 h-5" />, trend: '+0.3 Gbps' },
                            { label: 'Storage Used', value: '45%', icon: <CircleStackIcon className="w-5 h-5" />, trend: '-5%' },
                            { label: 'Active Users', value: '1,234', icon: <UserGroupIcon className="w-5 h-5" />, trend: '+12%' }
                          ].map((metric, i) => (
                            <motion.div
                              key={metric.label}
                              className="bg-[#0A1628] p-4 rounded-lg"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="flex items-center gap-2 text-[#FF6B2C] mb-2">
                                {metric.icon}
                                <span className="text-sm">{metric.label}</span>
                              </div>
                              <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-white">{metric.value}</span>
                                <span className="text-xs text-green-500">{metric.trend}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="bg-[#0A1628] p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-white font-medium">System Load</span>
                            <div className="flex items-center gap-2">
                              <motion.div 
                                className="w-2 h-2 rounded-full bg-green-500"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <span className="text-sm text-gray-400">Optimal</span>
                            </div>
                          </div>
                          <div className="h-2 bg-[#1A2B44] rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]"
                              initial={{ width: 0 }}
                              whileInView={{ width: "45%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.title.includes('Business Intelligence') && (
                    <div className="bg-[#0F2137] rounded-lg p-6 border border-[#FF6B2C]/20 relative z-10">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-white font-medium">Revenue Analytics</h4>
                          <select className="bg-[#0A1628] text-gray-400 text-sm rounded-lg px-3 py-1.5 border border-gray-800">
                            <option>Last 6 months</option>
                          </select>
                        </div>
                        <div className="relative h-48">
                          <div className="absolute inset-0 flex items-end justify-between px-2">
                            {[65, 85, 75, 90, 70, 95].map((height, i) => (
                              <motion.div
                                key={i}
                                className="w-8 bg-gradient-to-t from-[#FF6B2C] to-[#3B82F6] rounded-t-lg"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${height}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1 }}
                              />
                            ))}
                          </div>
                          <div className="absolute inset-0 flex items-end">
                            <motion.div
                              className="w-full h-[1px] bg-[#FF6B2C]/50"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { label: 'Total Revenue', value: '$1.2M', trend: '+12%' },
                            { label: 'Avg. Order Value', value: '$2.5K', trend: '+8%' },
                            { label: 'Conversion Rate', value: '3.2%', trend: '+0.5%' }
                          ].map((metric, i) => (
                            <motion.div
                              key={metric.label}
                              className="bg-[#0A1628] p-3 rounded-lg"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
                              <div className="flex items-baseline gap-2">
                                <span className="text-lg font-bold text-white">{metric.value}</span>
                                <span className="text-xs text-green-500">{metric.trend}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.title.includes('Security') && (
                    <div className="bg-[#0F2137] rounded-lg p-6 border border-[#FF6B2C]/20 relative z-10">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <motion.div 
                              className="w-2 h-2 bg-green-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-green-500 text-sm font-medium">Security Status: Protected</span>
                          </div>
                          <span className="text-gray-400 text-sm">Last scan: 2 min ago</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { label: 'Threats Blocked', value: '1,234', trend: '+12%', color: 'from-red-500/20 to-red-600/20' },
                            { label: 'Security Score', value: '94/100', trend: '+5%', color: 'from-green-500/20 to-green-600/20' }
                          ].map((stat, i) => (
                            <motion.div
                              key={stat.label}
                              className="bg-[#0A1628] p-4 rounded-lg relative overflow-hidden"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20`} />
                              <div className="relative">
                                <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                                <div className="flex items-end gap-2">
                                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                                  <span className="text-green-500 text-sm">{stat.trend}</span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="bg-[#0A1628] p-4 rounded-lg">
                          <div className="text-sm text-gray-400 mb-3">Recent Activity</div>
                          <div className="space-y-2">
                            {[
                              { event: 'Malware attempt blocked', time: '2m ago', icon: <ShieldCheckIcon className="w-4 h-4" /> },
                              { event: 'System scan completed', time: '15m ago', icon: <CheckIcon className="w-4 h-4" /> },
                              { event: 'Firewall rules updated', time: '1h ago', icon: <CogIcon className="w-4 h-4" /> }
                            ].map((activity, i) => (
                              <motion.div
                                key={activity.event}
                                className="flex items-center justify-between"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-[#FF6B2C]">{activity.icon}</div>
                                  <span className="text-sm text-white">{activity.event}</span>
                                </div>
                                <span className="text-xs text-gray-400">{activity.time}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.title.includes('Construction Software Integration') && (
                    <div className="bg-[#0F2137] rounded-lg p-6 border border-[#FF6B2C]/20 relative z-10">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <motion.div 
                              className="w-2 h-2 bg-green-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-green-500 text-sm font-medium">Integration Active</span>
                          </div>
                          <select className="bg-[#0A1628] text-gray-400 text-sm rounded-lg px-3 py-1.5 border border-gray-800">
                            <option>Procore → Sage</option>
                            <option>Procore → QuickBooks</option>
                            <option>PlanGrid → Sage</option>
                          </select>
                        </div>

                        <div className="relative h-48">
                          <div className="absolute inset-0 flex items-center justify-between">
                            {/* Source System */}
                            <motion.div
                              className="w-32 p-3 bg-[#0A1628] rounded-lg border border-[#FF6B2C]/20"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                            >
                              <div className="text-center">
                                <div className="text-[#FF6B2C] text-sm mb-1">Source</div>
                                <div className="text-white font-medium">Procore</div>
                                <div className="text-xs text-gray-400 mt-1">Project Management</div>
                              </div>
                            </motion.div>

                            {/* Integration Flow */}
                            <div className="flex-1 mx-4 relative">
                              <motion.div
                                className="h-0.5 w-full bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                              />
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF6B2C]"
                                  initial={{ left: "0%" }}
                                  animate={{ left: "100%" }}
                                  transition={{
                                    duration: 2,
                                    delay: i * 0.6,
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                />
                              ))}
                            </div>

                            {/* Target System */}
                            <motion.div
                              className="w-32 p-3 bg-[#0A1628] rounded-lg border border-[#3B82F6]/20"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                            >
                              <div className="text-center">
                                <div className="text-[#3B82F6] text-sm mb-1">Target</div>
                                <div className="text-white font-medium">Sage</div>
                                <div className="text-xs text-gray-400 mt-1">Accounting</div>
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { label: 'Documents Synced', value: '2,547', icon: <ClipboardDocumentCheckIcon className="w-4 h-4" />, trend: '+123 today' },
                            { label: 'Success Rate', value: '99.9%', icon: <CheckIcon className="w-4 h-4" />, trend: '+0.2%' },
                            { label: 'Last Sync', value: '2m ago', icon: <ArrowPathIcon className="w-4 h-4" />, trend: 'Active' }
                          ].map((metric, i) => (
                            <motion.div
                              key={metric.label}
                              className="bg-[#0A1628] p-3 rounded-lg"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="flex items-center gap-2 text-[#FF6B2C] mb-1">
                                {metric.icon}
                                <span className="text-xs">{metric.label}</span>
                              </div>
                              <div className="text-white font-medium">{metric.value}</div>
                              <div className="text-xs text-gray-400 mt-1">{metric.trend}</div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="bg-[#0A1628] rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-3">Recent Activity</div>
                          <div className="space-y-2">
                            {[
                              { event: 'Invoice #1234 synced to Sage', time: '2m ago' },
                              { event: 'Project budget updated', time: '15m ago' },
                              { event: 'New vendor added to both systems', time: '1h ago' }
                            ].map((activity, i) => (
                              <motion.div
                                key={activity.event}
                                className="flex items-center justify-between"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C]" />
                                  <span className="text-sm text-white">{activity.event}</span>
                                </div>
                                <span className="text-xs text-gray-400">{activity.time}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.title.includes('DevOps') && (
                    <div className="bg-[#0F2137] rounded-lg p-6 border border-[#FF6B2C]/20 relative z-10">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <motion.div 
                              className="w-2 h-2 bg-green-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-green-500 text-sm font-medium">CI/CD Pipeline Active</span>
                          </div>
                          <span className="text-gray-400 text-sm">Last deploy: 5m ago</span>
                        </div>

                        <div className="space-y-4">
                          {[
                            { stage: 'Build', status: 'success', duration: '45s', steps: ['Install dependencies', 'Run tests', 'Build artifacts'] },
                            { stage: 'Test', status: 'success', duration: '2m', steps: ['Unit tests', 'Integration tests', 'E2E tests'] },
                            { stage: 'Deploy', status: 'success', duration: '1m', steps: ['Backup', 'Deploy', 'Health check'] }
                          ].map((stage, i) => (
                            <motion.div
                              key={stage.stage}
                              className="bg-[#0A1628] p-4 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                  <CheckIcon className="w-5 h-5 text-green-500" />
                                  <span className="text-white font-medium">{stage.stage}</span>
                                </div>
                                <span className="text-sm text-gray-400">{stage.duration}</span>
                              </div>
                              <div className="space-y-2">
                                {stage.steps.map((step, stepIndex) => (
                                  <motion.div
                                    key={step}
                                    className="flex items-center gap-2 text-sm text-gray-400"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (i * 0.1) + (stepIndex * 0.05) }}
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    {step}
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex justify-between items-center text-sm">
                          <motion.div 
                            className="flex items-center gap-2 text-[#FF6B2C] cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            <CommandLineIcon className="w-5 h-5" />
                            <span>View Pipeline</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2 text-[#FF6B2C] cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            <RocketLaunchIcon className="w-5 h-5" />
                            <span>Trigger Build</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Success Stories - Case Studies */}
      <section id="case-studies" className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/5 to-[#3B82F6]/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Success Metrics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.div 
                  className="inline-flex items-center gap-2 text-[#FF6B2C] mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <StarIcon className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Success Story</span>
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Transforming Document Control at{' '}
                  <span className="bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] bg-clip-text text-transparent">
                    LA Expo
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">
                  How we helped Exposition Construction Authority streamline their document management system and improve operational efficiency.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Processing Time', value: '-65%', color: 'from-[#FF6B2C] to-[#FF8F2C]' },
                  { label: 'System Uptime', value: '99.9%', color: 'from-[#3B82F6] to-[#60A5FA]' },
                  { label: 'User Adoption', value: '+85%', color: 'from-[#FF6B2C] to-[#FF8F2C]' },
                  { label: 'Cost Savings', value: '40%', color: 'from-[#3B82F6] to-[#60A5FA]' }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="bg-[#0F2137]/80 rounded-lg p-6 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <motion.div
                      className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${metric.color} rounded-full mt-4`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <motion.blockquote 
                className="relative bg-[#0F2137]/80 rounded-lg p-6 border-l-4 border-[#FF6B2C]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-lg text-gray-300 mb-4">{testimonials[0].fullQuote}</div>
                <footer className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] p-[2px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0F2137] flex items-center justify-center">
        <Image
                        src="/images/illustrations/calance-logo (3).webp"
                        alt="Calance Logo"
                        width={30}
                        height={30}
                        className="object-contain filter brightness-0 invert opacity-80"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[0].author}</div>
                    <div className="text-sm text-gray-400">{testimonials[0].role}</div>
                    <div className="text-sm text-[#FF6B2C]">{testimonials[0].company}</div>
                  </div>
      </footer>
              </motion.blockquote>

              <motion.button
                className="inline-flex items-center gap-2 text-[#FF6B2C] hover:text-[#FF8F2C] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <span className="font-medium">Read Full Case Study</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right Column - Interactive Timeline */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0F2137]/80 backdrop-blur-sm rounded-xl p-8 border border-[#FF6B2C]/10">
                {/* Project Timeline */}
                <div className="space-y-8">
                  {[
                    { 
                      phase: 'Discovery',
                      icon: <ClipboardDocumentCheckIcon className="w-6 h-6" />,
                      title: 'System Assessment',
                      description: 'Analyzed existing document control processes and identified key improvement areas.',
                      color: 'text-[#FF6B2C]',
                      duration: '2 weeks'
                    },
                    {
                      phase: 'Implementation',
                      icon: <CogIcon className="w-6 h-6" />,
                      title: 'System Configuration',
                      description: 'Customized and deployed the new document management solution.',
                      color: 'text-[#3B82F6]',
                      duration: '6 weeks'
                    },
                    {
                      phase: 'Training',
                      icon: <UserGroupIcon className="w-6 h-6" />,
                      title: 'User Onboarding',
                      description: 'Conducted comprehensive training sessions for all system users.',
                      color: 'text-[#FF6B2C]',
                      duration: '3 weeks'
                    },
                    {
                      phase: 'Optimization',
                      icon: <ChartBarIcon className="w-6 h-6" />,
                      title: 'Performance Tuning',
                      description: 'Optimized system performance based on usage patterns and feedback.',
                      color: 'text-[#3B82F6]',
                      duration: '4 weeks'
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={step.phase}
                      className="relative pl-8 border-l border-gray-800"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className={`absolute -left-3 w-6 h-6 rounded-full bg-[#0F2137] border-2 border-${step.color.split('-')[1]} flex items-center justify-center ${step.color}`}>
                        {step.icon}
        </div>
                      <div className="mb-1">
                        <span className={`text-sm font-medium ${step.color}`}>{step.phase}</span>
                        <span className="text-sm text-gray-400 ml-2">• {step.duration}</span>
                      </div>
                      <h4 className="text-white font-medium mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Results Summary */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-medium">Project Completion</h4>
                    <span className="text-[#FF6B2C]">100%</span>
                  </div>
                  <div className="h-2 bg-[#1A2B44] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Partners & Clients */}
      <section id="partners" className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0F2137]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF6B2C]/10 text-[#FF6B2C]">
                <StarIcon className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold text-white">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-400 max-w-2xl">
                Partnering with leading technology providers and serving diverse enterprises across industries
              </p>
            </motion.div>
          </div>

          {/* Trusted by Industry Leaders */}
          <motion.div 
            className="mt-32 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-transparent to-[#0F172A]" />
            
            <div className="relative">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-6">
                  <StarIcon className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wide">Our Partners & Clients</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Partnering with leading technology providers and serving diverse enterprises across industries
                </p>
              </motion.div>

              {/* Technology Partners */}
              <div className="space-y-16">
                <div className="space-y-8">
                  <motion.h3 
                    className="text-2xl font-bold text-white text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    Technology Partners
                  </motion.h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {[
                      { name: "CrowdStrike", logo: "/images/illustrations/crowdstrike_endpoint-logo.webp", category: "Endpoint Security" },
                      { name: "UiPath", logo: "/images/illustrations/ui-path--logo.webp", category: "RPA Solutions" },
                      { name: "Xero", logo: "/images/illustrations/xero.webp", category: "Financial Solutions" },
                      { name: "Sage", logo: "/images/illustrations/sage-logo.webp", category: "Business Management" },
                      { name: "KnowBe4", logo: "/images/illustrations/KnowBe4-Logo-Color-MD.webp", category: "Security Awareness" },
                      { name: "Arctic Wolf", logo: "/images/illustrations/ArcticWolf-logo.webp", category: "Security Operations" }
                    ].map((partner, index) => (
                      <motion.div
                        key={partner.name}
                        className="group relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="p-6 rounded-xl bg-[#0F172A]/80 backdrop-blur-sm border border-[#1A2B44] hover:border-[#FF6B2C]/20 transition-all duration-300">
                          <div className="aspect-[3/2] relative mb-4">
            <Image
                              src={partner.logo}
                              alt={partner.name}
                              fill
                              className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-400 group-hover:text-[#FF6B2C] transition-colors duration-300">
                              {partner.category}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enterprise Clients */}
                <div className="space-y-8">
                  <motion.h3 
                    className="text-2xl font-bold text-white text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    Enterprise Clients
                  </motion.h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {[
                      { name: "Procore", logo: "/images/illustrations/black and white procore logo.webp", category: "Construction Technology" },
                      { name: "PMWeb", logo: "/images/illustrations/black and white PM Web logo.webp", category: "Project Management" },
                      { name: "Isuzu", logo: "/images/illustrations/isuzu.webp", category: "Automotive" },
                      { name: "Verogen", logo: "/images/illustrations/Verogen.webp", category: "Biotechnology" },
                      { name: "Wellpath", logo: "/images/illustrations/Wellpath.webp", category: "Healthcare" },
                      { name: "Westview", logo: "/images/illustrations/westview.webp", category: "Healthcare" }
                    ].map((client, index) => (
                      <motion.div
                        key={client.name}
                        className="group relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="p-6 rounded-xl bg-[#0F172A]/80 backdrop-blur-sm border border-[#1A2B44] hover:border-[#FF6B2C]/20 transition-all duration-300">
                          <div className="aspect-[3/2] relative mb-4">
                            <Image
                              src={client.logo}
                              alt={client.name}
                              fill
                              className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
        </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-400 group-hover:text-[#FF6B2C] transition-colors duration-300">
                              {client.category}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-400 mb-6">
                  Join the growing list of businesses transforming their IT infrastructure
                </p>
                <GlowingButton href="#contact" className="bg-[#FF6B2C]">
                  Become a Partner
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </GlowingButton>
              </motion.div>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="mt-32">
            {/* Featured Case Studies */}
            <div className="space-y-16">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-6">
                  <StarIcon className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wide">Success Stories</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">Featured Case Studies</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Discover how we've helped leading organizations achieve their digital transformation goals
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "LA Expo Line",
                    category: "Document Management",
                    description: "Revolutionized document control processes for LA's major transit project, resulting in streamlined operations and significant cost savings.",
                    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
                    metrics: [
                      { value: "85%", label: "Process Efficiency" },
                      { value: "$2.5M", label: "Cost Savings" }
                    ],
                    color: "from-[#FF6B2C]"
                  },
                  {
                    title: "Isuzu Motors",
                    category: "IT Infrastructure",
                    description: "Two-decade partnership delivering continuous IT infrastructure improvements and digital transformation initiatives.",
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
                    metrics: [
                      { value: "99.9%", label: "System Uptime" },
                      { value: "280%", label: "ROI Achieved" }
                    ],
                    color: "from-[#3B82F6]"
                  },
                  {
                    title: "Verogen Inc",
                    category: "Cloud Migration",
                    description: "Seamless migration of critical systems to cloud infrastructure, enhancing scalability and security.",
                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
                    metrics: [
                      { value: "40%", label: "Cost Reduction" },
                      { value: "100%", label: "Data Security" }
                    ],
                    color: "from-[#FF6B2C]"
                  }
                ].map((study, index) => (
                  <motion.div
                    key={study.title}
                    className="group relative bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#1A2B44] hover:border-[#FF6B2C]/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative h-48 overflow-hidden">
          <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1A2B44]/80 backdrop-blur-sm text-white text-sm">
                        {study.category}
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF6B2C] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                        {study.description}
                      </p>

                      <div className="grid grid-cols-2 gap-6 py-6 border-y border-[#1A2B44]">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="space-y-1">
                            <div className={`text-2xl font-bold bg-gradient-to-r ${study.color} to-white bg-clip-text text-transparent`}>
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-400">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <motion.div 
                        className="flex items-center justify-between pt-6"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-2 text-[#FF6B2C] cursor-pointer group/link">
                          <span className="text-sm font-medium">View Case Study</span>
                          <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#1A2B44] flex items-center justify-center">
          <Image
                            src="/images/illustrations/Screenshot_2025-01-16_at_4.36.53_AM-removebg-preview.png"
                            alt="Calance Logo"
                            width={20}
                            height={20}
                            className="opacity-50 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Blog Section */}
            <div className="mt-32 relative">
              <div className="absolute inset-0 bg-[#0F172A] -skew-y-3 transform-gpu" />
              <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
              
              <div className="relative">
                <motion.div 
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-white mb-4">
                    <RocketLaunchIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Latest Insights</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">From Our Blog</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Stay updated with the latest trends and insights in technology and digital transformation
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "The Future of Cloud Computing",
                      description: "Explore emerging trends and technologies shaping the future of cloud infrastructure.",
                      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
                      category: "Cloud Technology",
                      date: "Jan 15, 2024",
                      readTime: "5 min read"
                    },
                    {
                      title: "Cybersecurity Best Practices",
                      description: "Essential security measures every enterprise should implement in 2024.",
                      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
                      category: "Security",
                      date: "Jan 10, 2024",
                      readTime: "4 min read"
                    },
                    {
                      title: "Digital Transformation Success",
                      description: "Key strategies for successful digital transformation in enterprise environments.",
                      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
                      category: "Enterprise",
                      date: "Jan 5, 2024",
                      readTime: "6 min read"
                    }
                  ].map((post, index) => (
                    <motion.div
                      key={post.title}
                      className="bg-[#0A1628] rounded-xl overflow-hidden border border-[#1A2B44] group hover:border-[#1A2B44]/80 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative h-48 overflow-hidden">
          <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1A2B44] text-white text-sm">
                          {post.category}
    </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B2C] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-[#1A2B44]">
                          <motion.div 
                            className="flex items-center gap-2 text-white"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-sm font-medium">Read Article</span>
                            <ArrowRightIcon className="w-4 h-4" />
                          </motion.div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center relative">
                  <button className="px-6 py-3 bg-[#1A2B44] text-white rounded-lg hover:bg-[#1A2B44]/80 transition-colors inline-flex items-center gap-2">
                    View All Articles
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          

            {/* Footer */}
            <section id="contact" className="py-32 bg-[#0A1628] relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/5 to-[#3B82F6]/5" />
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
                <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-[#FF6B2C]/5 rounded-full blur-[120px]" />
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#3B82F6]/5 rounded-full blur-[120px]" />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div 
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-6">
                    <EnvelopeIcon className="w-5 h-5" />
                    <span className="text-sm font-medium tracking-wide">Get in Touch</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Amazing Together</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Ready to transform your business? Reach out to us and discover how our expertise can drive your success.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Left Column - Contact Form */}
                  <motion.div
                    className="bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl p-10 border border-[#1A2B44] hover:border-[#FF6B2C]/20 transition-colors duration-300 shadow-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <form className="space-y-8">
                      <div className="space-y-6">
                        <div className="space-y-6">
                          <div>
                            <label htmlFor="name" className="block text-white font-medium mb-2 tracking-wide">Full Name</label>
                            <div className="relative">
                              <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="John Doe" 
                                className="w-full p-4 rounded-xl bg-[#1A2B44]/50 text-white border border-[#1A2B44] focus:border-[#FF6B2C]/50 focus:ring-2 focus:ring-[#FF6B2C]/20 transition-all placeholder:text-gray-500"
                              />
                              <UserIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-white font-medium mb-2 tracking-wide">Email Address</label>
                            <div className="relative">
                              <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="john@example.com" 
                                className="w-full p-4 rounded-xl bg-[#1A2B44]/50 text-white border border-[#1A2B44] focus:border-[#FF6B2C]/50 focus:ring-2 focus:ring-[#FF6B2C]/20 transition-all placeholder:text-gray-500"
                              />
                              <EnvelopeIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="message" className="block text-white font-medium mb-2 tracking-wide">Your Message</label>
                            <textarea 
                              id="message" 
                              name="message" 
                              placeholder="Tell us about your project..." 
                              rows={5} 
                              className="w-full p-4 rounded-xl bg-[#1A2B44]/50 text-white border border-[#1A2B44] focus:border-[#FF6B2C]/50 focus:ring-2 focus:ring-[#FF6B2C]/20 transition-all placeholder:text-gray-500 resize-none"
                            />
                          </div>
                        </div>
                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] text-white p-4 rounded-xl font-medium tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Send Message
                          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>

                  {/* Right Column - Contact Information */}
                  <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white tracking-wide">Our Office</h3>
                      <div className="grid gap-8">
                        <div className="flex items-start gap-6 group">
                          <div className="w-12 h-12 rounded-xl bg-[#1A2B44] flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 transition-transform">
                            <MapPinIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-2">Los Angeles</h4>
                            <p className="text-gray-400 leading-relaxed">
                              5000 Birch Street, West Tower, Suite 3000<br />
                              Newport Beach, CA 92660
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-6 group">
                          <div className="w-12 h-12 rounded-xl bg-[#1A2B44] flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 transition-transform">
                            <PhoneIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-2">Phone</h4>
                            <p className="text-gray-400">+1 (818) 206-7410</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-6 group">
                          <div className="w-12 h-12 rounded-xl bg-[#1A2B44] flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 transition-transform">
                            <EnvelopeIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-2">Email</h4>
                            <p className="text-gray-400">info@calance.com</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-[#1A2B44]">
                      <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">Connect With Us</h3>
                      <div className="flex gap-4">
                        {[
                          { icon: <LinkIcon className="w-5 h-5" />, label: "LinkedIn", href: "#" },
                          { icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />, label: "Twitter", href: "#" },
                          { icon: <ShareIcon className="w-5 h-5" />, label: "Social", href: "#" }
                        ].map((social) => (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            className="w-12 h-12 rounded-xl bg-[#1A2B44] flex items-center justify-center text-[#FF6B2C] hover:bg-[#FF6B2C] hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

// TypeScript interfaces
interface TypewriterTextProps {
  text: string;
  delay?: number;
}

// Helper Components
const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (delay) {
      const delayTimeout = setTimeout(() => {
        const interval = setInterval(() => {
          if (currentIndex < text.length) {
            setDisplayText(prev => prev + text[currentIndex]);
            setCurrentIndex(prev => prev + 1);
          } else {
            clearInterval(interval);
          }
        }, 50);

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(delayTimeout);
    }
  }, [text, currentIndex, delay]);

  return <div className="text-white">{displayText}</div>;
};
