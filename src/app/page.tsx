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
  // Add state management
  const [selectedSolution, setSelectedSolution] = useState<SolutionType | null>(null)
  const [selectedScale, setSelectedScale] = useState<ProjectScale | null>(null)
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set())

  // Base prices for different solution types
  const solutionBasePrices: Record<SolutionType, number> = {
    'Custom Development': 100000,
    'Cloud Migration': 80000,
    'Security Implementation': 120000,
    'Data Analytics': 90000
  }

  // Scale multipliers
  const scaleMultipliers: Record<ProjectScale, number> = {
    'Small (1-3 months)': 1,
    'Medium (3-6 months)': 2.5,
    'Large (6-12 months)': 5,
    'Enterprise (12+ months)': 10
  }

  // Additional services configuration
  const additionalServices: AdditionalService[] = [
    { name: '24/7 Support', price: '+15%', icon: <PhoneIcon className="w-4 h-4" />, percentage: 15 },
    { name: 'DevOps Integration', price: '+20%', icon: <CpuChipIcon className="w-4 h-4" />, percentage: 20 },
    { name: 'AI/ML Implementation', price: '+25%', icon: <CommandLineIcon className="w-4 h-4" />, percentage: 25 },
    { name: 'Security Hardening', price: '+15%', icon: <ShieldCheckIcon className="w-4 h-4" />, percentage: 15 }
  ]

  // Calculate base price
  const baseSolutionPrice = selectedSolution ? solutionBasePrices[selectedSolution] : 0
  const scaleMultiplier = selectedScale ? scaleMultipliers[selectedScale] : 0
  const scaledBasePrice = baseSolutionPrice * scaleMultiplier

  // Calculate additional services cost
  const additionalServicesTotal = additionalServices.reduce((total, service) => {
    if (selectedServices.has(service.name)) {
      return total + (scaledBasePrice * (service.percentage / 100))
    }
    return total
  }, 0)

  // Calculate optimization discount (10% if more than 2 services selected)
  const optimizationDiscount = selectedServices.size >= 2 ? (scaledBasePrice + additionalServicesTotal) * 0.1 : 0

  // Calculate total
  const totalEstimate = scaledBasePrice + additionalServicesTotal - optimizationDiscount

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount)
  }

  // Handle service toggle
  const toggleService = (serviceName: string) => {
    const newServices = new Set(selectedServices)
    if (newServices.has(serviceName)) {
      newServices.delete(serviceName)
    } else {
      newServices.add(serviceName)
    }
    setSelectedServices(newServices)
  }

  const [currentCase, setCurrentCase] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <main className="bg-[#0A1628] text-white min-h-screen">
      <Hero />
      {/* Main Content Sections */}
      {/* AI Services Section */}
      <section id="ai-services" className="py-12 sm:py-24 bg-[#0A1628] relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/10 to-[#3B82F6]/10" />
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              background: [
                "radial-gradient(300px circle at 30% 30%, rgba(255, 107, 44, 0.15), transparent 70%)",
                "radial-gradient(300px circle at 70% 70%, rgba(59, 130, 246, 0.15), transparent 70%)",
                "radial-gradient(300px circle at 30% 70%, rgba(255, 107, 44, 0.15), transparent 70%)",
                "radial-gradient(300px circle at 70% 30%, rgba(59, 130, 246, 0.15), transparent 70%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-8 sm:mb-16"
                  initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-4">
              <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">AI-Powered Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Intelligent Solutions for Every Industry</h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Harness the power of AI to transform your industry with our specialized solutions
            </p>
          </motion.div>

          {/* Central Illustration */}
          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              className="relative aspect-[16/9]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/illustrations/66473cc4ff64a4fad96a4329_Website-illustration-services@2x.png"
                alt="AI Services Illustration"
                fill
                className="object-contain"
              />
              
              {/* Interactive Elements */}
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.sector}
                  className="absolute"
                  style={{ 
                    top: index === 0 ? "15%" : index === 1 ? "50%" : "75%",
                    left: index === 0 ? "20%" : index === 1 ? "85%" : "30%",
                    zIndex: 20
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Pulsing Circle */}
                  <motion.div
                    className={`absolute -inset-3 rounded-full bg-gradient-to-r ${
                      index === 1 ? 'from-[#3B82F6] to-[#60A5FA]' : 'from-[#FF6B2C] to-[#FF8F2C]'
                    } opacity-20`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.1, 0.2]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Icon Container */}
                  <motion.div
                    className={`relative w-6 h-6 rounded-full bg-gradient-to-r ${
                      index === 1 ? 'from-[#3B82F6] to-[#60A5FA]' : 'from-[#FF6B2C] to-[#FF8F2C]'
                    } p-0.5 cursor-pointer group`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-full h-full rounded-full bg-[#0A1628] flex items-center justify-center text-white">
                      {service.icon}
                    </div>

                    {/* Popup Card */}
                    <div
                      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                      style={{
                        perspective: "1000px"
                      }}
                    >
                      <motion.div
                        initial={{ rotateX: -15, scale: 0.95 }}
                        whileHover={{ rotateX: 0, scale: 1 }}
                        className="w-80 bg-[#0F172A]/95 backdrop-blur-xl rounded-xl p-6 border border-[#1A2B44] shadow-2xl"
                      >
                        <div className="flex flex-col gap-3">
                          <div className="p-2 rounded-lg bg-[#1A2B44] text-[#FF6B2C] w-fit">
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-400 mb-3">{service.description}</p>
                            
                            {/* Features */}
                            <div className="space-y-1.5 mb-3">
                              {service.features.map((feature, i) => (
                                <motion.div
                                  key={feature}
                                  className="flex items-center gap-2 text-xs text-gray-400"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <CheckIcon className="w-3 h-3 text-[#FF6B2C]" />
                                  {feature}
                                </motion.div>
                              ))}
                            </div>

                            {/* Metrics */}
                            <div className="flex gap-3">
                              {Object.entries(service.metrics).map(([key, value]) => (
                                <div key={key} className="bg-[#1A2B44] px-2 py-1.5 rounded-lg">
                                  <div className="text-xs font-bold text-white">{value}</div>
                                  <div className="text-[10px] text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Label */}
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                    >
                      <span className="text-xs text-white font-medium px-2 py-1 rounded-full bg-[#1A2B44]/80 backdrop-blur-sm">
                        {service.sector} AI
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Floating Particles */}
              {[...Array(12)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]"
                  style={{
                    top: `${10 + Math.random() * 80}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlowingButton href="/ai-solutions" className="bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]">
              Explore AI Solutions
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </GlowingButton>
                </motion.div>
        </div>
      </section>

      {/* 2. Our Solutions - Where Innovation Meets Implementation */}
      <section id="solutions" className="py-16 sm:py-32 bg-[#0A1628] relative">
        <div className="absolute inset-0 bg-[#0F172A]" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-[#FF6B2C]/5 rounded-full blur-[120px]" />
        <div className="absolute left-0 bottom-1/4 w-1/2 h-1/2 bg-[#3B82F6]/5 rounded-full blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-6">
              <RocketLaunchIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">Enterprise Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Innovative Solutions for Digital Excellence
            </h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
              Delivering robust, scalable solutions that empower your business to thrive in the digital age. Our enterprise solutions are built on proven methodologies and industry best practices.
            </p>
          </motion.div>

          {/* Implementation Journey Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20 items-start mb-16 sm:mb-32">
            {/* Left Column - Timeline */}
            <motion.div
              className="space-y-8 sm:space-y-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">Your Digital Transformation Journey</h3>
              <div className="space-y-8 sm:space-y-16 relative">
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#FF6B2C] via-[#3B82F6] to-[#FF6B2C] opacity-20" />
                
                {transformationSteps.map((step, index) => (
                  <motion.div
                    key={step.phase}
                    className="relative pl-16 sm:pl-24 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    {/* Timeline Node */}
                    <motion.div 
                      className={`absolute left-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${step.color} p-0.5 cursor-pointer`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-full h-full rounded-full bg-[#0A1628] flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="bg-[#0F2137]/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#1A2B44] group-hover:border-[#FF6B2C]/20 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${step.color} font-medium tracking-wide text-sm sm:text-base`}>
                          {step.phase}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 tracking-wide">• {step.duration}</span>
                    </div>
                      
                      <h4 className="text-white font-medium mb-3 tracking-wide text-base sm:text-lg">{step.title}</h4>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.description}</p>

                      {/* Progress Line */}
                      <motion.div
                        className={`h-1 bg-gradient-to-r ${step.color} rounded-full mt-6`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Implementation Success Metrics */}
            <motion.div
              className="relative lg:sticky lg:top-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0F172A]/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-[#1A2B44] hover:border-[#FF6B2C]/20 transition-colors duration-300 shadow-xl">
                <div className="space-y-6 sm:space-y-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Implementation Success Metrics</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-xs sm:text-sm text-gray-400 tracking-wide">Real-time Data</span>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:gap-8">
                    {[
                      { 
                        label: "Enterprise Projects Delivered", 
                        value: "200+", 
                        trend: "Growing portfolio", 
                        detail: "Across various industries",
                        icon: <RocketLaunchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      },
                      { 
                        label: "Average Implementation Time", 
                        value: "12 weeks", 
                        trend: "Efficient delivery", 
                        detail: "With proven methodology",
                        icon: <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      },
                      { 
                        label: "Client Satisfaction Rate", 
                        value: "98%", 
                        trend: "Consistent quality", 
                        detail: "Based on client feedback",
                        icon: <StarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      }
                    ].map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        className="bg-[#0A1628]/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 relative overflow-hidden border border-[#1A2B44] group hover:border-[#FF6B2C]/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/5 to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-[#1A2B44] text-[#FF6B2C]">
                              {metric.icon}
                            </div>
                            <span className="text-xs sm:text-sm text-gray-400 tracking-wide">{metric.label}</span>
                          </div>
                          <div className="flex items-end gap-3 mb-2">
                            <span className="text-2xl sm:text-3xl font-bold text-white tracking-wide">{metric.value}</span>
                            <span className="text-xs sm:text-sm text-[#10B981] mb-1.5 tracking-wide">{metric.trend}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500 tracking-wide">{metric.detail}</p>
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
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#0F2137] border border-white/5 text-white mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm">Ready to see our solutions in action?</span>
              <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF6B2C]" />
            </div>
            <div className="flex justify-center gap-4">
              <GlowingButton 
                href="#enterprise" 
                className="bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] text-sm sm:text-base"
              >
                Explore Enterprise Solutions
                <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </GlowingButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Enterprise Solutions */}
      <section id="enterprise" className="bg-[#0A1628] relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br opacity-20"
            animate={{ 
              background: [
                "radial-gradient(circle at 30% 30%, rgba(255, 107, 44, 0.15), transparent 70%)",
                "radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.15), transparent 70%)",
                "radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.15), transparent 70%)",
                "radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.15), transparent 70%)"
              ]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div 
            className="py-4 sm:py-8 flex flex-col items-center mb-8 sm:mb-12"
            ref={targetRef}
            style={{
              opacity,
              scale,
            }}
          >
            <div className="inline-flex items-center justify-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#FF6B2C]/10 to-[#3B82F6]/10 border border-[#FF6B2C]/20 text-[#FF6B2C] mb-4">
              <CogIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">Enterprise Solutions</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF6B2C] animate-pulse" />
            </div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 text-center max-w-4xl leading-tight px-4"
            >
              Transforming Businesses Through Technology
            </motion.h2>
          </motion.div>

          {/* Solutions Grid */}
          <div className="space-y-16 sm:space-y-32">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="py-8 sm:py-16"
              >
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.5 }}
              >
                {/* Text Content */}
                  <motion.div 
                    className="space-y-6 sm:space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div 
                          className="p-2 sm:p-3 rounded-lg bg-[#FF6B2C]/10 text-[#FF6B2C]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {feature.icon}
                    </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                      <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                      
                      {/* Additional Information */}
                      <div className="space-y-4 border-l-2 border-[#FF6B2C]/20 pl-4">
                        {feature.title.includes('Apps & Automation') && (
                          <>
                            <h4 className="text-sm sm:text-base text-white font-medium">Key Features:</h4>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                              <li>• Custom Application Development with modern tech stack</li>
                              <li>• Robotic Process Automation (RPA) implementation</li>
                              <li>• API Integration & Middleware Solutions</li>
                              <li>• Legacy System Modernization</li>
                            </ul>
                          </>
                        )}
                        {feature.title.includes('Infrastructure') && (
                          <>
                            <h4 className="text-sm sm:text-base text-white font-medium">Services Include:</h4>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                              <li>• Cloud Infrastructure Management</li>
                              <li>• 24/7 System Monitoring & Support</li>
                              <li>• Disaster Recovery & Backup Solutions</li>
                              <li>• Network Security & Performance Optimization</li>
                            </ul>
                          </>
                        )}
                        {feature.title.includes('Business Intelligence') && (
                          <>
                            <h4 className="text-sm sm:text-base text-white font-medium">Analytics Solutions:</h4>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                              <li>• Real-time Data Analytics & Visualization</li>
                              <li>• Predictive Analytics & Machine Learning</li>
                              <li>• Custom Dashboard Development</li>
                              <li>• Data Integration & ETL Services</li>
                            </ul>
                          </>
                        )}
                        {feature.title.includes('Security') && (
                          <>
                            <h4 className="text-sm sm:text-base text-white font-medium">Security Framework:</h4>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                              <li>• Advanced Threat Protection</li>
                              <li>• Compliance Management (HIPAA, SOC2, ISO)</li>
                              <li>• Security Audits & Vulnerability Assessment</li>
                              <li>• Incident Response & Recovery</li>
                            </ul>
                          </>
                        )}
                        {feature.title.includes('Construction Software') && (
                          <>
                            <h4 className="text-sm sm:text-base text-white font-medium">Integration Capabilities:</h4>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                              <li>• Procore & Sage Integration Solutions</li>
                              <li>• Document Management System Integration</li>
                              <li>• Cost Control & Budget Tracking</li>
                              <li>• Project Management Tools Integration</li>
                            </ul>
                          </>
                        )}
                        {feature.title.includes('DevOps') && (
                          <>
                            <h4 className="text-sm sm:text-base text-white font-medium">DevOps Solutions:</h4>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                              <li>• CI/CD Pipeline Implementation</li>
                              <li>• Container Orchestration (Kubernetes)</li>
                              <li>• Infrastructure as Code (IaC)</li>
                              <li>• Microservices Architecture</li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                    
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                      <GlowingButton href="#contact" className="bg-[#FF6B2C] hover:bg-[#FF8F2C] text-sm sm:text-base">
                      Learn More
                        <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </GlowingButton>
                  </motion.div>
                  </motion.div>

                  {/* Visual Component */}
                <motion.div 
                    className="relative aspect-[4/3] w-full"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Feature specific components */}
                  {feature.title.includes('Apps & Automation') && (
                      <div className="bg-[#0F2137] rounded-2xl p-6 border border-[#FF6B2C]/20 h-full overflow-hidden">
                        <div className="h-full flex flex-col gap-4">
                          {/* Header */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                            <motion.div 
                                className="w-1.5 h-1.5 rounded-full bg-green-500"
                              animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                              <span className="text-xs font-medium text-white">CI/CD Pipeline</span>
                          </div>
                            <select className="bg-[#0A1628] text-xs text-white rounded-lg px-2 py-1 border border-[#1A2B44]">
                              <option>Production</option>
                              <option>Staging</option>
                              <option>Development</option>
                            </select>
                        </div>

                          {/* Pipeline Visualization */}
                          <div className="flex-1 bg-[#0A1628] rounded-xl p-4">
                            <div className="relative h-full">
                              {/* Flow Line */}
                              <svg className="w-full h-full">
                                <defs>
                                  <linearGradient id="flow-line" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#FF6B2C" />
                                    <stop offset="100%" stopColor="#3B82F6" />
                                  </linearGradient>
                                </defs>
                                <motion.path
                                  d="M 50,100 C 100,100 150,50 200,50 S 300,100 350,100"
                                  fill="none"
                                  stroke="url(#flow-line)"
                                  strokeWidth="2"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                              </svg>

                              {/* Data Flow Animation */}
                              {[0, 1, 2].map((i) => (
                                <motion.div 
                                  key={i}
                                  className="absolute top-[98px] left-[50px] w-2 h-2 rounded-full bg-[#FF6B2C]"
                                  animate={{
                                    x: [0, 300],
                                    y: [0, -50, 0],
                                  }}
                                  transition={{
                                    duration: 3,
                                    delay: i * 1,
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                />
                              ))}

                              {/* Process Nodes */}
                              {[
                                { x: 50, y: 100, label: 'Build' },
                                { x: 200, y: 50, label: 'Test' },
                                { x: 350, y: 100, label: 'Deploy' }
                              ].map((node, i) => (
                            <motion.div
                                  key={node.label}
                                  className="absolute"
                                  style={{ left: node.x - 16, top: node.y - 16 }}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: i * 0.2 }}
                                >
                              <motion.div 
                                    className="w-8 h-8 rounded-xl bg-[#0F2137] border border-[#FF6B2C]/20 flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]" />
                              </motion.div>
                                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">
                                    {node.label}
                                  </div>
                            </motion.div>
                          ))}
                        </div>
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { label: 'Builds', value: '12', trend: '+3' },
                              { label: 'Success Rate', value: '99.9%', trend: '+0.1%' },
                              { label: 'Avg Duration', value: '4m', trend: '-30s' }
                            ].map((metric, i) => (
                          <motion.div 
                                key={metric.label}
                                className="bg-[#0A1628] p-3 rounded-xl"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="text-sm font-bold text-white mb-1">{metric.value}</div>
                                <div className="text-xs text-gray-400 mb-0.5">{metric.label}</div>
                                <div className="text-xs text-green-500">{metric.trend}</div>
                          </motion.div>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                    {feature.title.includes('Infrastructure') && (
                      <div className="bg-[#0F2137] rounded-2xl p-6 border border-[#3B82F6]/20 h-full overflow-hidden">
                        <div className="h-full flex flex-col gap-4">
                          {/* Header */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <motion.div 
                                className="w-1.5 h-1.5 rounded-full bg-green-500"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                              <span className="text-xs font-medium text-white">Infrastructure Status</span>
                            </div>
                            <select className="bg-[#0A1628] text-xs text-white rounded-lg px-2 py-1 border border-[#1A2B44]">
                              <option>All Regions</option>
                              <option>US West</option>
                              <option>US East</option>
                              <option>Europe</option>
                            </select>
                          </div>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: 'Server Health', value: '98%', trend: '+2%', icon: <ServerIcon className="w-3 h-3" /> },
                              { label: 'Network Speed', value: '1.2 Gbps', trend: '+0.1 Gbps', icon: <GlobeAltIcon className="w-3 h-3" /> },
                              { label: 'Storage Used', value: '45%', trend: '-5%', icon: <CircleStackIcon className="w-3 h-3" /> },
                              { label: 'Active Users', value: '1,234', trend: '+12%', icon: <UserGroupIcon className="w-3 h-3" /> }
                          ].map((metric, i) => (
                            <motion.div
                              key={metric.label}
                                className="bg-[#0A1628] p-3 rounded-xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              >
                                <div className="flex flex-col">
                                  <div className="text-[#3B82F6] mb-2">{metric.icon}</div>
                                  <div>
                              <div className="flex items-baseline gap-2">
                                      <span className="text-sm font-bold text-white">{metric.value}</span>
                                <span className="text-xs text-green-500">{metric.trend}</span>
                                    </div>
                                    <div className="text-xs text-gray-400">{metric.label}</div>
                                  </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                          {/* System Load Graph */}
                          <div className="flex-1 bg-[#0A1628] p-4 rounded-xl">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs font-medium text-white">System Load</span>
                            <div className="flex items-center gap-2">
                              <motion.div 
                                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                                animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                              />
                                <span className="text-xs text-gray-400">Real-time</span>
                            </div>
                          </div>
                            <div className="relative h-[80px]">
                            <motion.div 
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                              >
                                <svg className="w-full h-full">
                                  <defs>
                                    <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                                      <stop offset="0%" stopColor="#FF6B2C" />
                                      <stop offset="100%" stopColor="#3B82F6" />
                                    </linearGradient>
                                  </defs>
                                  <motion.path
                                    d="M0 40 Q 20 35, 40 38 T 80 32 T 120 36 T 160 30 T 200 34 T 240 28"
                                    fill="none"
                                    stroke="url(#line-gradient)"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2 }}
                                  />
                                </svg>
                                
                                {/* Data points */}
                                {[30, 35, 32, 36, 30, 34, 28].map((point, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-[#3B82F6] rounded-full"
                                    style={{
                                      left: `${(i * 40)}px`,
                                      top: `${point}px`
                                    }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.5 }}
                                  />
                                ))}
                              </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                    {/* Other feature components */}
                  {feature.title.includes('Business Intelligence') && (
                      <div className="bg-[#0F2137] rounded-2xl p-6 border border-[#FF6B2C]/20 h-full overflow-hidden">
                        <div className="h-full flex flex-col gap-4">
                          {/* Header */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <motion.div
                                className="w-1.5 h-1.5 rounded-full bg-green-500"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                              <span className="text-xs font-medium text-white">Analytics Dashboard</span>
                          </div>
                            <select className="bg-[#0A1628] text-xs text-white rounded-lg px-3 py-1.5 border border-[#1A2B44]">
                              <option>Last 6 Months</option>
                              <option>Last Year</option>
                              <option>All Time</option>
                            </select>
                          </div>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { label: 'Revenue', value: '$1.2M', trend: '+12%', icon: <CurrencyDollarIcon className="w-3 h-3" /> },
                              { label: 'Users', value: '50K', trend: '+8%', icon: <UserGroupIcon className="w-3 h-3" /> },
                              { label: 'Conversion', value: '3.2%', trend: '+0.5%', icon: <ArrowTrendingUpIcon className="w-3 h-3" /> }
                          ].map((metric, i) => (
                            <motion.div
                              key={metric.label}
                                className="bg-[#0A1628] p-3 rounded-xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex flex-col">
                                  <div className="text-[#FF6B2C] mb-2">{metric.icon}</div>
                                  <div>
                              <div className="flex items-baseline gap-2">
                                      <span className="text-sm font-bold text-white">{metric.value}</span>
                                <span className="text-xs text-green-500">{metric.trend}</span>
                                    </div>
                                    <div className="text-xs text-gray-400">{metric.label}</div>
                                  </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                          {/* Chart */}
                          <div className="flex-1 bg-[#0A1628] p-4 rounded-xl flex flex-col">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs font-medium text-white">Revenue Growth</span>
                              <div className="flex items-center gap-2">
                                <motion.div 
                                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="text-xs text-gray-400">Live</span>
                              </div>
                            </div>
                            <div className="flex-1 relative">
                              <div className="absolute inset-0 flex flex-col">
                                <div className="flex-1 flex items-end justify-between gap-2">
                                  {[65, 85, 75, 90, 70, 95, 80].map((height, i) => (
                                    <motion.div
                                      key={i}
                                      className="w-full bg-gradient-to-t from-[#FF6B2C] to-[#3B82F6] rounded-t-lg relative group"
                                      initial={{ height: 0 }}
                                      whileInView={{ height: `${height}%` }}
                                      transition={{ delay: i * 0.1, duration: 1 }}
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      <motion.div
                                        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-[#0A1628] text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: i * 0.1 + 0.5 }}
                                      >
                                        {height}%
                                      </motion.div>
                                    </motion.div>
                                  ))}
                                </div>
                                <div className="h-[1px] bg-[#1A2B44] mt-0" />
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {feature.title.includes('Security') && (
                      <div className="bg-[#0F2137] rounded-2xl p-6 border border-[#3B82F6]/20 h-full overflow-hidden">
                        <div className="h-full flex flex-col gap-4">
                          {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                            <motion.div 
                                className="w-1.5 h-1.5 rounded-full bg-green-500"
                              animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                              <span className="text-xs font-medium text-white">Security Center</span>
                          </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-[#3B82F6]">Protected</span>
                              <ShieldCheckIcon className="w-3 h-3 text-[#3B82F6]" />
                        </div>
                          </div>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: 'Threats Blocked', value: '1,234', trend: '+12 today', icon: <ShieldCheckIcon className="w-3 h-3" /> },
                              { label: 'Security Score', value: '94/100', trend: '+2 pts', icon: <CheckIcon className="w-3 h-3" /> }
                            ].map((metric, i) => (
                            <motion.div
                                key={metric.label}
                                className="bg-[#0A1628] p-3 rounded-xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex flex-col">
                                  <div className="text-[#3B82F6] mb-2">{metric.icon}</div>
                                  <div>
                                    <div className="flex items-baseline gap-2">
                                      <span className="text-sm font-bold text-white">{metric.value}</span>
                                      <span className="text-xs text-green-500">{metric.trend}</span>
                                    </div>
                                    <div className="text-xs text-gray-400">{metric.label}</div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                          {/* Activity Feed */}
                          <div className="flex-1 bg-[#0A1628] p-4 rounded-xl">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs font-medium text-white">Recent Activity</span>
                              <div className="flex items-center gap-2">
                                <motion.div 
                                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="text-xs text-gray-400">Live</span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              {[
                                { event: 'Malware Blocked', time: '2m ago', type: 'threat' },
                                { event: 'System Scan Complete', time: '15m ago', type: 'info' },
                                { event: 'Firewall Updated', time: '1h ago', type: 'success' }
                            ].map((activity, i) => (
                              <motion.div
                                key={activity.event}
                                  className="flex items-center justify-between bg-[#0F2137] p-3 rounded-xl"
                                  initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${
                                      activity.type === 'threat' ? 'bg-red-500' :
                                      activity.type === 'success' ? 'bg-green-500' :
                                      'bg-blue-500'
                                    }`} />
                                    <span className="text-xs text-white">{activity.event}</span>
                                </div>
                                <span className="text-xs text-gray-400">{activity.time}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                    {feature.title.includes('Construction Software') && (
                      <div className="bg-[#0F2137] rounded-2xl p-6 border border-[#FF6B2C]/20 h-full overflow-hidden">
                        <div className="h-full flex flex-col gap-4">
                          {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                            <motion.div 
                                className="w-1.5 h-1.5 rounded-full bg-green-500"
                              animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                              <span className="text-xs font-medium text-white">Integration Status</span>
                          </div>
                            <select className="bg-[#0A1628] text-xs text-white rounded-lg px-3 py-1.5 border border-[#1A2B44]">
                            <option>Procore → Sage</option>
                              <option>PlanGrid → QuickBooks</option>
                              <option>Procore → CMiC</option>
                          </select>
                        </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: 'Documents Synced', value: '2,547', trend: '+123', icon: <ClipboardDocumentCheckIcon className="w-3 h-3" /> },
                              { label: 'Success Rate', value: '99.9%', trend: '+0.2%', icon: <CheckIcon className="w-3 h-3" /> }
                            ].map((metric, i) => (
                              <motion.div
                                key={metric.label}
                                className="bg-[#0A1628] p-3 rounded-xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="flex flex-col">
                                  <div className="text-[#FF6B2C] mb-2">{metric.icon}</div>
                                  <div>
                                    <div className="flex items-baseline gap-2">
                                      <span className="text-sm font-bold text-white">{metric.value}</span>
                                      <span className="text-xs text-green-500">{metric.trend}</span>
                                    </div>
                                    <div className="text-xs text-gray-400">{metric.label}</div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Data Flow */}
                          <div className="flex-1 bg-[#0A1628] p-4 rounded-xl">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs font-medium text-white">Data Flow</span>
                              <div className="flex items-center gap-2">
                                <motion.div 
                                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="text-xs text-gray-400">Live</span>
                              </div>
                            </div>
                            <div className="relative flex-1">
                          <div className="absolute inset-0 flex items-center justify-between">
                            <motion.div
                                  className="w-24 p-2 bg-[#0F2137] rounded-lg border border-[#FF6B2C]/20"
                                  initial={{ opacity: 0, x: -5 }}
                              whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3 }}
                            >
                              <div className="text-center">
                                    <div className="text-[#FF6B2C] text-xs">Source</div>
                                    <div className="text-white text-sm font-medium">Procore</div>
                                    <div className="text-xs text-gray-400">Project Management</div>
                              </div>
                            </motion.div>

                            <div className="flex-1 mx-4 relative">
                              <motion.div
                                className="h-0.5 w-full bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.5 }}
                              />
                                  {[0, 1].map((i) => (
                                <motion.div
                                  key={i}
                                      className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF6B2C]"
                                  initial={{ left: "0%" }}
                                  animate={{ left: "100%" }}
                                  transition={{
                                        duration: 1.2,
                                        delay: i * 0.4,
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                />
                              ))}
                            </div>

                            <motion.div
                                  className="w-24 p-2 bg-[#0F2137] rounded-lg border border-[#3B82F6]/20"
                                  initial={{ opacity: 0, x: 5 }}
                              whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3 }}
                            >
                              <div className="text-center">
                                    <div className="text-[#3B82F6] text-xs">Target</div>
                                    <div className="text-white text-sm font-medium">Sage</div>
                                    <div className="text-xs text-gray-400">Accounting</div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                        </div>

                          {/* Activity Feed */}
                          <div className="bg-[#0A1628] p-4 rounded-xl">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs font-medium text-white">Recent Activity</span>
                              <span className="text-xs text-gray-400">Last 24h</span>
                            </div>
                            <div className="space-y-3">
                              {[
                                { event: 'Invoice #1234 synced', time: '2m ago', type: 'success' },
                                { event: 'Project budget updated', time: '15m ago', type: 'info' },
                                { event: 'New vendor added', time: '1h ago', type: 'success' }
                            ].map((activity, i) => (
                              <motion.div
                                key={activity.event}
                                  className="flex items-center justify-between bg-[#0F2137] p-3 rounded-xl"
                                  initial={{ opacity: 0, x: -5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: i * 0.1 }}
                              >
                                <div className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${
                                      activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                                    }`} />
                                    <span className="text-xs text-white">{activity.event}</span>
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
                      <div className="bg-[#0F2137] rounded-2xl p-6 border border-[#3B82F6]/20 h-full overflow-hidden">
                        <div className="h-full flex flex-col gap-4">
                          {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                            <motion.div 
                                className="w-1.5 h-1.5 rounded-full bg-green-500"
                              animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                              <span className="text-xs font-medium text-white">DevOps Dashboard</span>
                          </div>
                            <select className="bg-[#0A1628] text-xs text-white rounded-lg px-3 py-1.5 border border-[#1A2B44]">
                              <option>Production</option>
                              <option>Staging</option>
                              <option>Development</option>
                            </select>
                        </div>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: 'Deployment Frequency', value: '12/day', trend: '+3', icon: <RocketLaunchIcon className="w-3 h-3" /> },
                              { label: 'Lead Time', value: '45m', trend: '-15m', icon: <ClockIcon className="w-3 h-3" /> },
                              { label: 'Success Rate', value: '99.5%', trend: '+0.5%', icon: <CheckIcon className="w-3 h-3" /> },
                              { label: 'Recovery Time', value: '10m', trend: '-5m', icon: <ArrowPathIcon className="w-3 h-3" /> }
                            ].map((metric, i) => (
                            <motion.div
                                key={metric.label}
                                className="bg-[#0A1628] p-3 rounded-xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex flex-col">
                                  <div className="text-[#3B82F6] mb-2">{metric.icon}</div>
                                  <div>
                                    <div className="flex items-baseline gap-2">
                                      <span className="text-sm font-bold text-white">{metric.value}</span>
                                      <span className="text-xs text-green-500">{metric.trend}</span>
                                </div>
                                    <div className="text-xs text-gray-400">{metric.label}</div>
                              </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                          {/* Pipeline Health */}
                          <div className="flex-1 bg-[#0A1628] p-4 rounded-xl">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs font-medium text-white">Pipeline Health</span>
                              <div className="flex items-center gap-2">
                          <motion.div 
                                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="text-xs text-gray-400">Last 24h</span>
                              </div>
                            </div>
                            <div className="space-y-4">
                              {[
                                { stage: 'Code Quality', score: 95 },
                                { stage: 'Test Coverage', score: 88 },
                                { stage: 'Security Scan', score: 92 },
                                { stage: 'Performance', score: 90 }
                              ].map((item, i) => (
                          <motion.div 
                                  key={item.stage}
                                  className="space-y-2"
                                  initial={{ opacity: 0, x: -5 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: i * 0.1 }}
                                >
                                  <div className="flex justify-between">
                                    <span className="text-xs text-gray-400">{item.stage}</span>
                                    <span className="text-xs text-white">{item.score}%</span>
                                  </div>
                                  <div className="h-2 bg-[#1A2B44] rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${item.score}%` }}
                                      transition={{ duration: 0.5, delay: i * 0.1 }}
                                    />
                                  </div>
                          </motion.div>
                              ))}
                            </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Success Stories - Case Studies */}
      <section id="case-studies" className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{ background: successCases[currentCase].bgPattern }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Title and Navigation */}
          <div className="mb-16 space-y-8">
                              <div className="text-center">
                              <motion.div
                className="inline-flex items-center gap-2 text-[#FF6B2C] mb-4"
                initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
              >
                <StarIcon className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Success Stories</span>
                            </motion.div>
              <motion.h2 
                className="text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Client Success Stories
              </motion.h2>
                                </div>

            {/* Enhanced Navigation */}
            <div className="flex justify-center overflow-x-auto px-4 -mx-4 sm:px-0 sm:mx-0">
              <div className="inline-flex p-1.5 gap-1 sm:gap-2 bg-[#0F2137]/80 rounded-2xl backdrop-blur-sm">
                {successCases.map((caseStudy, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 ${
                      currentCase === index 
                        ? 'bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] text-white shadow-lg' 
                        : 'hover:bg-[#162942] text-gray-400 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 relative rounded-lg overflow-hidden bg-white/5 p-1.5">
                      <Image
                        src={caseStudy.companyLogo}
                        alt={caseStudy.testimonial.company}
                        fill
                        className="object-contain"
                      />
                          </div>
                    <span className="text-sm sm:text-base font-medium whitespace-nowrap">{caseStudy.testimonial.company}</span>
                  </motion.button>
                                ))}
                        </div>
                        </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12">
              {/* Left Column - Success */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
            >
              <div>
                <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
                  key={currentCase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {successCases[currentCase].title}
                </motion.h2>
                <motion.p 
                    className="text-base sm:text-lg text-gray-400"
                  key={`desc-${currentCase}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {successCases[currentCase].description}
                </motion.p>
              </div>

              {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {successCases[currentCase].metrics.map((metric, index) => (
                  <motion.div
                    key={`${currentCase}-${metric.label}`}
                      className="bg-[#0F2137]/80 rounded-lg p-4 sm:p-6 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <motion.div
                        className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-1 sm:mb-2`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {metric.value}
                    </motion.div>
                      <div className="text-xs sm:text-sm text-gray-400">{metric.label}</div>
                    <motion.div
                        className={`h-1 bg-gradient-to-r ${metric.color} rounded-full mt-2 sm:mt-4`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <motion.blockquote 
                  className="relative bg-[#0F2137]/50 rounded-xl p-4 sm:p-6"
                key={`quote-${currentCase}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                  <div className="text-base sm:text-lg text-gray-300 mb-4">
                  {successCases[currentCase].testimonial.fullQuote}
                </div>
                  <footer className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] p-[2px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0F2137] flex items-center justify-center">
        <Image
                        src="/images/illustrations/calance-logo (3).webp"
                        alt="Calance Logo"
                          width={24}
                          height={24}
                        className="object-contain filter brightness-0 invert opacity-80"
                      />
                    </div>
                  </div>
                  <div>
                      <div className="text-sm sm:text-base font-semibold text-white">{successCases[currentCase].testimonial.author}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{successCases[currentCase].testimonial.role}</div>
                      <div className="text-xs sm:text-sm text-[#FF6B2C]">{successCases[currentCase].testimonial.company}</div>
                  </div>
      </footer>
              </motion.blockquote>

              <motion.button
                  className="inline-flex items-center gap-2 text-[#FF6B2C] hover:text-[#FF8F2C] transition-colors group text-sm sm:text-base"
                whileHover={{ x: 5 }}
                type="button"
              >
                <span className="font-medium">Read Full Case Study</span>
                  <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right Column - Illustration */}
            <motion.div
                className="relative lg:sticky lg:top-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#0F2137]/80">
                {successCases[currentCase].illustration.endsWith('.mp4') ? (
                  <video
                    src={successCases[currentCase].illustration}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    src={successCases[currentCase].illustration}
                    alt={successCases[currentCase].title}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60" />
                </div>

              {/* Company Logo */}
                    <motion.div
                  className="absolute -bottom-4 sm:-bottom-6 right-4 sm:right-6 bg-[#0F2137] rounded-lg p-3 sm:p-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={`logo-${currentCase}`}
              >
                <Image
                  src={successCases[currentCase].companyLogo}
                  alt={`${successCases[currentCase].testimonial.company} logo`}
                    width={100}
                    height={35}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Partners & Clients */}
      <section id="clients" className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2137] to-[#0A1628]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 text-[#FF6B2C] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <StarIcon className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Enterprise Clients</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
                  Trusted by Industry Leaders
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
            >
              Join the growing list of businesses transforming their IT infrastructure
            </motion.p>
                </div>

          {/* Enterprise Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {enterpriseClients.map((client, index) => (
                      <motion.div
                        key={client.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-4"
                      >
                <div className="group relative w-full aspect-[3/2] bg-[#0F2137]/80 rounded-xl p-6 flex items-center justify-center overflow-hidden hover:bg-[#162942] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/5 to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Image
                              src={client.logo}
                              alt={client.name}
                    width={120}
                    height={60}
                              className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
        </div>
                          <div className="text-center">
                  <div className="text-sm font-medium text-white">{client.name}</div>
                  <div className="text-xs text-gray-400">{client.category}</div>
                        </div>
                      </motion.div>
                    ))}
              </div>

              {/* CTA Section */}
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
            <div className="inline-flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white mb-8">
                  Join the growing list of businesses transforming their IT infrastructure
                      </h3>
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                  Become a Partner
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
                    </div>
      </section>

      {/* 6. Blog Section */}
      <section id="blog" className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/5 to-[#3B82F6]/5" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
              <motion.div 
            className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-6">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide">Latest Insights</span>
                </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay Ahead with Our Latest Blogs</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover insights, trends, and best practices in technology and digital transformation
                </p>
              </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                className="bg-[#0F172A]/80 rounded-xl overflow-hidden border border-[#1A2B44] hover:border-[#FF6B2C]/20 transition-colors duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  {post.image.endsWith('.mp4') ? (
                    <video
                      src={post.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
          <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#FF6B2C]/10 text-[#FF6B2C] backdrop-blur-sm">
                      {post.category}
                    </span>
                      </div>
                    </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF6B2C] transition-colors duration-300 line-clamp-2">
                    {post.title}
                      </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs text-gray-400 bg-[#1A2B44] px-2 py-1 rounded-md"
                      >
                        #{tag}
                      </span>
                        ))}
                      </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#1A2B44]">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#1A2B44] flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-[#FF6B2C]" />
                        </div>
                      <div>
                        <div className="text-sm font-medium text-white">{post.author}</div>
                        <div className="text-xs text-gray-400">{post.date}</div>
                    </div>
                    </div>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
            </div>

                {/* Call-to-action */}
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <motion.button
                    className="w-full bg-[#1A2B44] text-white p-3 rounded-xl font-medium tracking-wide hover:bg-[#FF6B2C] transition-colors flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  </div>
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
                    <motion.div
            className="mt-12 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Articles
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
                          </motion.div>
                          </div>
      </section>

      {/* Price Estimator Section */}
      <section id="estimate" className="relative py-16 sm:py-32 bg-[#0A1628] overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/5 to-[#3B82F6]/5" />
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              background: [
                "radial-gradient(400px circle at 0% 0%, rgba(255, 107, 44, 0.1), transparent 50%)",
                "radial-gradient(400px circle at 100% 100%, rgba(59, 130, 246, 0.1), transparent 50%)"
              ]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
              </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#FF6B2C] mb-4">
                <CurrencyDollarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium tracking-wide">Instant Pricing</span>
                  </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Solution Price Estimator
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                Get an instant estimate for your custom solution. Adjust parameters to see real-time cost updates.
                  </p>
                </motion.div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Estimator Controls */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-[#243B61] p-6 sm:p-8 space-y-6 sm:space-y-8 hover:border-[#FF6B2C]/50 transition-colors shadow-xl hover:shadow-2xl hover:shadow-[#FF6B2C]/5"
                  >
                          <div>
                <label className="block text-sm font-medium text-gray-300 mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B2C]/10 flex items-center justify-center mr-3">
                    <CodeBracketIcon className="w-5 h-5 text-[#FF6B2C]" />
                            </div>
                  Solution Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(solutionBasePrices).map((type) => (
                    <motion.button
                      key={type}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedSolution(type as SolutionType)}
                      className={`px-4 py-4 rounded-xl text-sm font-medium transition-all
                        ${selectedSolution === type 
                          ? 'bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] border-transparent shadow-lg shadow-[#FF6B2C]/20' 
                          : 'border border-[#243B61] hover:border-transparent'}
                        text-white hover:shadow-lg hover:shadow-[#FF6B2C]/20
                        relative overflow-hidden group`}
                    >
                      <span className="relative z-10">{type}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                          </div>
              </div>

                          <div>
                <label className="block text-sm font-medium text-gray-300 mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center mr-3">
                    <ChartBarIcon className="w-5 h-5 text-[#3B82F6]" />
                            </div>
                  Project Scale
                </label>
                <div className="space-y-3">
                  {Object.keys(scaleMultipliers).map((scale) => (
                    <motion.button
                      key={scale}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedScale(scale as ProjectScale)}
                      className={`w-full px-5 py-4 rounded-xl text-sm font-medium transition-all
                        ${selectedScale === scale
                          ? 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] border-transparent shadow-lg shadow-[#3B82F6]/20'
                          : 'border border-[#243B61] hover:border-transparent'}
                        text-white hover:shadow-lg hover:shadow-[#3B82F6]/20
                        flex items-center justify-between group`}
                    >
                      <span className="flex items-center">
                        <span className={`w-2 h-2 rounded-full ${selectedScale === scale ? 'bg-white' : 'bg-[#3B82F6]'} mr-3 group-hover:bg-white`} />
                        {scale}
                      </span>
                      <span className={`${selectedScale === scale ? 'text-white' : 'text-gray-400'} group-hover:text-white font-medium`}>
                        {scale.includes('Small') ? '$20k - $50k' :
                         scale.includes('Medium') ? '$50k - $150k' :
                         scale.includes('Large') ? '$150k - $500k' :
                         '$500k+'}
                      </span>
                    </motion.button>
                  ))}
                          </div>
              </div>

                          <div>
                <label className="block text-sm font-medium text-gray-300 mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B2C]/10 flex items-center justify-center mr-3">
                    <PuzzlePieceIcon className="w-5 h-5 text-[#FF6B2C]" />
                  </div>
                  Additional Services
                </label>
                <div className="space-y-3">
                  {additionalServices.map((service) => (
                    <label
                      key={service.name}
                      className={`flex items-center justify-between p-4 rounded-xl 
                        ${selectedServices.has(service.name) 
                          ? 'bg-[#243B61] border-[#FF6B2C] shadow-lg shadow-[#FF6B2C]/10' 
                          : 'border-[#243B61]'}
                        border hover:bg-[#243B61]/50 transition-all cursor-pointer group`}
                    >
                      <div className="flex items-center">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedServices.has(service.name)}
                            onChange={() => toggleService(service.name)}
                            className="form-checkbox h-4 w-4 rounded border-[#243B61] text-[#FF6B2C] focus:ring-[#FF6B2C] bg-transparent"
                          />
                          {selectedServices.has(service.name) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-2 -right-2 w-3 h-3 bg-[#FF6B2C] rounded-full"
                            />
                          )}
                          </div>
                        <span className="ml-4 text-sm text-white group-hover:text-white/90 flex items-center">
                          <span className="w-6 h-6 rounded-lg bg-[#FF6B2C]/10 flex items-center justify-center mr-2">
                            {service.icon}
                          </span>
                          {service.name}
                        </span>
                        </div>
                      <span className="text-sm text-[#FF6B2C] font-medium group-hover:text-white/90">{service.price}</span>
                    </label>
                  ))}
                      </div>
              </div>
                  </motion.div>

            {/* Estimate Summary */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2 lg:sticky lg:top-6 space-y-6"
            >
              <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-3xl border border-[#243B61] p-8 hover:border-[#FF6B2C]/50 transition-colors shadow-xl hover:shadow-2xl hover:shadow-[#FF6B2C]/5">
                <h3 className="text-2xl font-semibold text-white mb-8">
                  Investment Summary
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-[#243B61]/20 hover:bg-[#243B61]/30 transition-colors group">
                    <span className="text-gray-400 flex items-center group-hover:text-white/90 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#FF6B2C]/10 flex items-center justify-center mr-3">
                        <CubeIcon className="w-5 h-5 text-[#FF6B2C]" />
                          </div>
                      Base Solution
                    </span>
                    <span className="text-white font-medium">{formatCurrency(scaledBasePrice)}</span>
                          </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-[#243B61]/20 hover:bg-[#243B61]/30 transition-colors group">
                    <span className="text-gray-400 flex items-center group-hover:text-white/90 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center mr-3">
                        <PlusCircleIcon className="w-5 h-5 text-[#3B82F6]" />
                        </div>
                      Additional Services
                    </span>
                    <span className="text-white font-medium">{formatCurrency(additionalServicesTotal)}</span>
                          </div>
                  {optimizationDiscount > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex justify-between items-center p-4 rounded-xl bg-[#243B61]/20 hover:bg-[#243B61]/30 transition-colors group"
                    >
                      <span className="text-gray-400 flex items-center group-hover:text-white/90 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mr-3">
                          <SparklesIcon className="w-5 h-5 text-green-400" />
                          </div>
                        Optimization Discount
                      </span>
                      <span className="text-green-400 font-medium">-{formatCurrency(optimizationDiscount)}</span>
                    </motion.div>
                  )}
                  <div className="h-px bg-[#243B61]" />
                  <div className="flex justify-between items-center p-6 rounded-xl bg-gradient-to-r from-[#FF6B2C]/10 to-[#FF8F2C]/10 border border-[#FF6B2C]/20">
                    <span className="text-lg text-white font-medium">Total Estimate</span>
                    <motion.span 
                      key={totalEstimate}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] font-bold"
                    >
                      {formatCurrency(totalEstimate)}
                    </motion.span>
                        </div>
                          </div>

                <div className="space-y-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-[#FF6B2C]/20 transition-all flex items-center justify-center gap-2 group"
                  >
                    Request Detailed Proposal
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 border border-[#243B61] text-white font-medium rounded-xl hover:bg-[#243B61] transition-colors flex items-center justify-center gap-2"
                  >
                    Schedule Consultation
                    <ClockIcon className="w-5 h-5" />
                  </motion.button>
                          </div>
                        </div>

              <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-3xl border border-[#243B61] p-8 hover:border-[#FF6B2C]/50 transition-colors shadow-xl hover:shadow-2xl hover:shadow-[#FF6B2C]/5">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-white" />
                      </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Satisfaction Guaranteed</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Our estimates include a comprehensive solution design, dedicated team, and guaranteed delivery milestones.
                    </p>
                    </div>
                      </div>
                    </div>
                  </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
