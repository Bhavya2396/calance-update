'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
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
  ShareIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  ScaleIcon,
  HeartIcon,
  BanknotesIcon,
  BoltIcon,
  PuzzlePieceIcon,
  CubeIcon,
  PlusCircleIcon,
  CpuChipIcon
} from '@heroicons/react/24/solid'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import ParticleBackground from '@/components/ParticleBackground'
import GlowingButton from '@/components/GlowingButton'
import TechStackIllustration from '@/components/TechStackIllustration'
import BrainCircuit from '@/components/BrainCircuit'
import Hero from '@/components/Hero'

// Add these type definitions at the top
type SolutionType = 'Custom Development' | 'Cloud Migration' | 'Security Implementation' | 'Data Analytics'
type ProjectScale = 'Small (1-3 months)' | 'Medium (3-6 months)' | 'Large (6-12 months)' | 'Enterprise (12+ months)'

interface AdditionalService {
  name: string
  price: string
  icon: React.ReactNode
  percentage: number
}

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

const aiServices = [
  {
    sector: "Legal",
    title: "AI-Powered Legal Solutions",
    description: "Streamline legal processes with intelligent document analysis, contract review, and case law research.",
    features: [
      "Automated Contract Analysis",
      "Legal Document Classification",
      "Compliance Monitoring",
      "Case Law Research Assistant"
    ],
    metrics: { accuracy: "99.2%", timeReduction: "75%" },
    icon: <ScaleIcon className="w-6 h-6" />
  },
  {
    sector: "Healthcare",
    title: "Healthcare Intelligence",
    description: "Enhance patient care and operational efficiency with advanced medical data analytics and automation.",
    features: [
      "Patient Data Analysis",
      "Medical Image Processing",
      "Clinical Decision Support",
      "Healthcare Workflow Automation"
    ],
    metrics: { accuracy: "99.8%", efficiency: "85%" },
    icon: <HeartIcon className="w-6 h-6" />
  },
  {
    sector: "Finance",
    title: "Financial AI Solutions",
    description: "Transform financial operations with intelligent analytics, risk assessment, and automated compliance.",
    features: [
      "Risk Analysis & Detection",
      "Automated Reporting",
      "Market Intelligence",
      "Fraud Prevention"
    ],
    metrics: { accuracy: "99.5%", riskReduction: "80%" },
    icon: <BanknotesIcon className="w-6 h-6" />
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
    title: "Apps & Automation",
    description: "Custom application development and process automation solutions that streamline operations and boost productivity. Our RPA solutions and custom integrations help reduce manual tasks and improve efficiency across your organization.",
    icon: <CodeBracketIcon className="w-6 h-6" />
  },
  {
    title: "Infrastructure Management",
    description: "Robust IT infrastructure solutions with 24/7 monitoring, maintenance, and optimization for maximum reliability. We ensure your systems are always available, secure, and performing at their peak.",
    icon: <ServerIcon className="w-6 h-6" />
  },
  {
    title: "Business Intelligence",
    description: "Data-driven insights and analytics solutions that help you make informed decisions and drive growth. Transform raw data into actionable insights with our advanced BI tools and dashboards.",
    icon: <ChartBarIcon className="w-6 h-6" />
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security solutions that protect your assets and ensure regulatory compliance. Our comprehensive security framework keeps your data safe and your business compliant.",
    icon: <ShieldCheckIcon className="w-6 h-6" />
  },
  {
    title: "Construction Software Integration",
    description: "Seamlessly connect your construction management tools with accounting and ERP systems. Our specialized integrations for Procore, Sage, and other construction software ensure smooth data flow and process automation.",
    icon: <CogIcon className="w-6 h-6" />
  },
  {
    title: "DevOps Services",
    description: "Streamline your development and operations with our comprehensive DevOps solutions. We implement CI/CD pipelines, containerization, and infrastructure as code to accelerate your delivery pipeline.",
    icon: <CommandLineIcon className="w-6 h-6" />
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
  },
  {
    quote: "Calance's expertise in system integration helped streamline our operations significantly.",
    fullQuote: "Calance's expertise in system integration and development helped streamline our operations significantly. Their team's deep understanding of our unique requirements and ability to deliver custom solutions has been invaluable to our digital transformation journey.",
    author: "Sarah Chen",
    role: "IT Director",
    company: "Verogen"
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

const successCases = [
  {
    title: "Digital Infrastructure Transformation",
    description: "Modernizing enterprise systems for enhanced efficiency and scalability.",
    metrics: [
      { label: 'Processing Time', value: '-65%', color: 'from-[#FF6B2C] to-[#FF8F2C]' },
      { label: 'System Uptime', value: '99.9%', color: 'from-[#3B82F6] to-[#60A5FA]' },
      { label: 'User Adoption', value: '+85%', color: 'from-[#FF6B2C] to-[#FF8F2C]' },
      { label: 'Cost Savings', value: '40%', color: 'from-[#3B82F6] to-[#60A5FA]' }
    ],
    testimonial: testimonials[1],
    companyLogo: "/images/illustrations/isuzu.webp",
    illustration: "/images/illustrations/API.png",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(255, 107, 44, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Cloud Migration Success",
    description: "Seamless transition to cloud infrastructure with zero downtime.",
    metrics: [
      { label: 'Migration Speed', value: '-40%', color: 'from-[#FF6B2C] to-[#FF8F2C]' },
      { label: 'Data Security', value: '100%', color: 'from-[#3B82F6] to-[#60A5FA]' },
      { label: 'Performance', value: '+120%', color: 'from-[#FF6B2C] to-[#FF8F2C]' },
      { label: 'Cost Reduction', value: '35%', color: 'from-[#3B82F6] to-[#60A5FA]' }
    ],
    testimonial: testimonials[0],
    companyLogo: "/images/illustrations/black and white PM Web logo.webp",
    illustration: "/images/illustrations/Application Development.mp4",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
  },
  {
    title: "System Integration Excellence",
    description: "Custom solutions for advanced genomic analysis workflows.",
    metrics: [
      { label: 'Analysis Speed', value: '-75%', color: 'from-[#FF6B2C] to-[#FF8F2C]' },
      { label: 'Data Accuracy', value: '99.9%', color: 'from-[#3B82F6] to-[#60A5FA]' },
      { label: 'Process Automation', value: '+90%', color: 'from-[#FF6B2C] to-[#FF8F2C]' },
      { label: 'Workflow Efficiency', value: '+85%', color: 'from-[#3B82F6] to-[#60A5FA]' }
    ],
    testimonial: testimonials[2],
    companyLogo: "/images/illustrations/Verogen.webp",
    illustration: "/images/illustrations/Ai Chip.png",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(255, 107, 44, 0.15) 0%, transparent 50%)"
  }
];

const technologyPartners = [
  {
    name: "CrowdStrike",
    description: "Endpoint Security",
    logo: "/images/illustrations/crowdstrike_endpoint-logo.webp",
    category: "Security"
  },
  {
    name: "UiPath",
    description: "RPA Solutions",
    logo: "/images/illustrations/ui-path--logo.webp",
    category: "Automation"
  },
  {
    name: "Xero",
    description: "Financial Solutions",
    logo: "/images/illustrations/xero.webp",
    category: "Finance"
  },
  {
    name: "Sage",
    description: "Business Management",
    logo: "/images/illustrations/sage-logo.webp",
    category: "Business"
  },
  {
    name: "KnowBe4",
    description: "Security Awareness",
    logo: "/images/illustrations/KnowBe4-Logo-Color-MD.webp",
    category: "Security"
  },
  {
    name: "Arctic Wolf",
    description: "Security Operations",
    logo: "/images/illustrations/ArcticWolf-logo.webp",
    category: "Security"
  }
];

const enterpriseClients = [
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

const transformationSteps = [
  {
    phase: 'Discovery & Assessment',
    duration: '2-3 weeks',
    icon: <ClipboardDocumentCheckIcon className="w-6 h-6" />,
    title: 'Comprehensive Analysis',
    description: 'In-depth analysis of your current systems, identification of pain points, and mapping of business requirements to technical solutions.',
    metrics: [
      { label: 'Systems Analyzed', value: '15+' },
      { label: 'Requirements Gathered', value: '100+' }
    ],
    color: 'from-[#FF6B2C] to-[#FF8F2C]'
  },
  {
    phase: 'Strategic Planning',
    duration: '3-4 weeks',
    icon: <ChartPieIcon className="w-6 h-6" />,
    title: 'Roadmap Development',
    description: 'Development of detailed implementation plan, resource allocation, risk mitigation strategies, and success metrics definition.',
    metrics: [
      { label: 'Success Metrics Defined', value: '25+' },
      { label: 'Risk Factors Addressed', value: '98%' }
    ],
    color: 'from-[#3B82F6] to-[#60A5FA]'
  },
  {
    phase: 'Implementation',
    duration: '8-12 weeks',
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    title: 'Solution Deployment',
    description: 'Systematic rollout of solutions with continuous testing, validation, and stakeholder communication throughout the process.',
    metrics: [
      { label: 'Deployment Success Rate', value: '99.9%' },
      { label: 'On-time Delivery', value: '95%' }
    ],
    color: 'from-[#FF6B2C] to-[#FF8F2C]'
  },
  {
    phase: 'Optimization',
    duration: 'Ongoing',
    icon: <ArrowPathIcon className="w-6 h-6" />,
    title: 'Continuous Enhancement',
    description: 'Regular performance monitoring, system updates, and proactive optimization based on usage patterns and emerging needs.',
    metrics: [
      { label: 'Performance Improvement', value: '+45%' },
      { label: 'System Uptime', value: '99.99%' }
    ],
    color: 'from-[#3B82F6] to-[#60A5FA]'
  }
];

const blogPosts = [
  {
    title: "The Future of Enterprise IT: Trends to Watch in 2024",
    excerpt: "Explore the emerging technologies and methodologies shaping enterprise IT landscape.",
    category: "Technology Trends",
    author: "John Smith",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "/images/illustrations/API.png",
    tags: ["Enterprise IT", "Digital Transformation", "Technology"]
  },
  {
    title: "Maximizing ROI with Custom Software Development",
    excerpt: "Learn how custom software solutions can drive business growth and improve operational efficiency.",
    category: "Software Development",
    author: "Sarah Johnson",
    date: "Mar 12, 2024",
    readTime: "4 min read",
    image: "/images/illustrations/Application Development.mp4",
    tags: ["Software Development", "ROI", "Business Growth"]
  },
  {
    title: "Cybersecurity Best Practices for Modern Enterprises",
    excerpt: "Essential security measures and strategies to protect your business in the digital age.",
    category: "Security",
    author: "Michael Chen",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    image: "/images/illustrations/Ai Chip.png",
    tags: ["Cybersecurity", "Enterprise Security", "Risk Management"]
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen bg-[#0A1A35] text-white overflow-x-hidden">
      <BrainCircuit className="opacity-5 mix-blend-lighten" />
      <Hero />
      
      {/* Rest of the page content */}
      <div className="relative z-10">
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#FF6B2C] rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1A35]/60 to-[#0A1A35]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Industry-Specific AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.sector}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#FF6B2C] rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckIcon className="w-4 h-4 text-[#FF6B2C] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex justify-between text-sm">
                      <span>Accuracy</span>
                      <span className="text-[#FF6B2C]">{service.metrics.accuracy}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
                >
                  <p className="text-lg mb-4">{testimonial.fullQuote}</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-300">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1A35]/60 to-[#0A1A35]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  Ready to transform your business with intelligent solutions? Let's discuss how we can help you achieve your goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPinIcon className="w-6 h-6 text-[#FF6B2C] mr-3" />
                    <span>123 Business Avenue, Suite 100, Los Angeles, CA 90001</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="w-6 h-6 text-[#FF6B2C] mr-3" />
                    <span>+1 (888) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-6 h-6 text-[#FF6B2C] mr-3" />
                    <span>contact@calanceus.com</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B2C]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B2C]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B2C]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#FF6B2C] text-white font-medium rounded-lg hover:bg-[#FF8F59] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
