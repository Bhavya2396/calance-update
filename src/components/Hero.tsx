'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import GlowingButton from './GlowingButton'
import { 
  SparklesIcon, 
  CodeBracketIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  ServerIcon,
  CircleStackIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  ClockIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const services = [
  { 
    icon: <CodeBracketIcon className="w-full h-full" />, 
    label: 'Development', 
    color: 'from-[#FF6B2C] to-[#FF8F2C]',
    description: 'Custom Software Solutions',
    connections: [1, 4, 7],
    stats: {
      projects: 142,
      completion: '98%',
      satisfaction: '4.9/5'
    },
    metrics: [
      { label: 'Active Projects', value: 28, trend: '+12%' },
      { label: 'Code Quality', value: '98%', trend: '+5%' },
      { label: 'On-time Delivery', value: '96%', trend: '+3%' }
    ]
  },
  { 
    icon: <CloudIcon className="w-full h-full" />, 
    label: 'Cloud', 
    color: 'from-[#3B82F6] to-[#60A5FA]',
    description: 'Scalable Infrastructure',
    connections: [2, 5, 8],
    stats: {
      uptime: '99.99%',
      servers: 1250,
      savings: '45%'
    },
    metrics: [
      { label: 'Server Uptime', value: '99.99%', trend: '+0.01%' },
      { label: 'Response Time', value: '42ms', trend: '-15%' },
      { label: 'Cost Savings', value: '45%', trend: '+8%' }
    ]
  },
  { 
    icon: <ShieldCheckIcon className="w-full h-full" />, 
    label: 'Security', 
    color: 'from-[#10B981] to-[#34D399]',
    description: 'Enterprise Protection',
    connections: [0, 3, 6],
    stats: {
      threats: '100k+',
      prevention: '99.9%',
      compliance: '100%'
    },
    metrics: [
      { label: 'Threats Blocked', value: '99.9%', trend: '+0.1%' },
      { label: 'Compliance Score', value: '100%', trend: '0%' },
      { label: 'Response Time', value: '< 5min', trend: '-25%' }
    ]
  },
  { 
    icon: <CogIcon className="w-full h-full" />, 
    label: 'Automation', 
    color: 'from-[#FF6B2C] to-[#FF8F2C]',
    description: 'Process Optimization',
    connections: [1, 4, 7],
    stats: {
      processes: 578,
      savings: '250k',
      efficiency: '+85%'
    },
    metrics: [
      { label: 'Time Saved', value: '1.2k hrs', trend: '+15%' },
      { label: 'Success Rate', value: '99.5%', trend: '+2.5%' },
      { label: 'ROI', value: '285%', trend: '+45%' }
    ]
  },
  { 
    icon: <ChartBarIcon className="w-full h-full" />, 
    label: 'Analytics', 
    color: 'from-[#3B82F6] to-[#60A5FA]',
    description: 'Data Intelligence',
    connections: [2, 5, 8],
    stats: {
      data: '15PB',
      insights: '45k',
      accuracy: '99.9%'
    },
    metrics: [
      { label: 'Data Processed', value: '15 PB', trend: '+25%' },
      { label: 'Accuracy', value: '99.9%', trend: '+0.4%' },
      { label: 'Insights Generated', value: '45k', trend: '+18%' }
    ]
  },
  { 
    icon: <RocketLaunchIcon className="w-full h-full" />, 
    label: 'DevOps', 
    color: 'from-[#10B981] to-[#34D399]',
    description: 'Continuous Delivery',
    connections: [0, 3, 6],
    stats: {
      deployments: '5k+',
      automation: '95%',
      uptime: '99.9%'
    },
    metrics: [
      { label: 'Deploy Frequency', value: '142/day', trend: '+28%' },
      { label: 'Success Rate', value: '99.8%', trend: '+0.5%' },
      { label: 'Lead Time', value: '45min', trend: '-35%' }
    ]
  },
  { 
    icon: <CommandLineIcon className="w-full h-full" />, 
    label: 'Integration', 
    color: 'from-[#FF6B2C] to-[#FF8F2C]',
    description: 'Seamless Connectivity',
    connections: [1, 4, 7],
    stats: {
      apis: '250+',
      requests: '1M+',
      latency: '<50ms'
    },
    metrics: [
      { label: 'API Uptime', value: '99.99%', trend: '+0.01%' },
      { label: 'Response Time', value: '45ms', trend: '-12%' },
      { label: 'Success Rate', value: '99.9%', trend: '+0.2%' }
    ]
  },
  { 
    icon: <ServerIcon className="w-full h-full" />, 
    label: 'Infrastructure', 
    color: 'from-[#3B82F6] to-[#60A5FA]',
    description: 'Robust Systems',
    connections: [2, 5, 8],
    stats: {
      servers: '5k+',
      availability: '99.99%',
      efficiency: '92%'
    },
    metrics: [
      { label: 'Server Health', value: '99.9%', trend: '+0.5%' },
      { label: 'Resource Usage', value: '78%', trend: '-8%' },
      { label: 'Cost Efficiency', value: '92%', trend: '+12%' }
    ]
  },
  { 
    icon: <CircleStackIcon className="w-full h-full" />, 
    label: 'Database', 
    color: 'from-[#10B981] to-[#34D399]',
    description: 'Data Management',
    connections: [0, 3, 6],
    stats: {
      storage: '25PB',
      queries: '1B+',
      optimization: '85%'
    },
    metrics: [
      { label: 'Query Speed', value: '12ms', trend: '-25%' },
      { label: 'Data Growth', value: '+2.5TB', trend: '+15%' },
      { label: 'Optimization', value: '85%', trend: '+10%' }
    ]
  }
]

const MetricCard = ({ label, value, trend }: { label: string, value: string | number, trend: string }) => {
  const isPositive = trend.startsWith('+')
  return (
    <motion.div
      className="bg-[#1A2B44]/50 rounded-lg p-2.5 flex items-center justify-between"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-400">{label}</div>
        <div className="text-sm font-semibold text-white mt-0.5">{value.toString()}</div>
      </div>
      <div className="flex flex-col items-end ml-3">
        <motion.span 
          className={`text-xs px-1.5 py-0.5 rounded-full ${isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          {trend}
        </motion.span>
        <div className="w-16 h-1 bg-[#243B61] rounded-full mt-1.5 overflow-hidden">
          <motion.div 
            className={`h-full rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
            initial={{ width: 0 }}
            animate={{ width: isPositive ? '80%' : '60%' }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const y = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 200])
  const opacity = useTransform(scrollY, [0, 200], [1, isMobile ? 1 : 0])
  const scale = useTransform(scrollY, [0, 200], [1, isMobile ? 1 : 0.8])
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeService, setActiveService] = useState<number | null>(null)
  const [popupPosition, setPopupPosition] = useState<'top' | 'bottom'>('bottom')
  const [showCentralDashboard, setShowCentralDashboard] = useState(false)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleServiceHover = (index: number) => {
    const angle = index * (2 * Math.PI / 9)
    const y = Math.sin(angle)
    setPopupPosition(y > 0 ? 'top' : 'bottom')
    setActiveService(index)
  }

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-[#0A1628] px-4 sm:px-6 py-24 sm:py-32"
    >
      {/* Dynamic Background - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(600px circle at 30% 30%, rgba(255, 107, 44, 0.15), transparent 70%)",
              "radial-gradient(600px circle at 70% 70%, rgba(59, 130, 246, 0.15), transparent 70%)",
              "radial-gradient(600px circle at 30% 70%, rgba(255, 107, 44, 0.15), transparent 70%)",
              "radial-gradient(600px circle at 70% 30%, rgba(59, 130, 246, 0.15), transparent 70%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div 
          className="absolute inset-0 hidden sm:block" 
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 107, 44, 0.1) 0%, transparent 25%)`,
            transition: 'background-position 0.3s ease-out'
          }}
        >
          <div className="absolute inset-0 backdrop-blur-[100px]" />
        </div>
      </div>

      {/* Mobile-only background */}
      <div className="absolute inset-0 overflow-hidden sm:hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(300px circle at 50% 30%, rgba(255, 107, 44, 0.15), transparent 70%)",
              "radial-gradient(300px circle at 50% 70%, rgba(59, 130, 246, 0.15), transparent 70%)",
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Main content */}
      <motion.div
        style={isMobile ? {} : { y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col"
      >
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          {/* Text Content for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 pt-20 pb-6 px-4"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B2C]/10 to-[#3B82F6]/10 border border-[#FF6B2C]/20"
            >
              <SparklesIcon className="w-3.5 h-3.5 text-[#FF6B2C]" />
              <span className="text-xs font-medium bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] bg-clip-text text-transparent">
                Enterprise Technology Solutions
              </span>
            </motion.div>

            {/* Heading for Mobile */}
            <div className="space-y-3">
              <motion.h1 
                className="text-3xl font-bold leading-tight px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white">Transform Your</span>{' '}
                <span className="bg-gradient-to-r from-[#FF6B2C] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Digital Future
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-sm text-gray-400 max-w-[280px] mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Comprehensive technology solutions that drive innovation and growth across your enterprise
              </motion.p>
            </div>
          </motion.div>

          {/* Interactive Service Network for Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-square max-w-[280px] mx-auto w-full mb-6"
          >
            {/* Service Icons */}
            {services.map((service, index) => (
                  <motion.div
                    key={index}
                className="absolute w-14 h-14 rounded-xl bg-[#0F2137] border border-white/10 flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
                    style={{
                  top: `${Math.sin((index * 2 * Math.PI) / services.length) * 40 + 50}%`,
                  left: `${Math.cos((index * 2 * Math.PI) / services.length) * 40 + 50}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveService(index)}
              >
                <div className="w-6 h-6 text-[#FF6B2C]">
                        {service.icon}
                      </div>
              </motion.div>
            ))}

            {/* Central Icon */}
                                            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 cursor-pointer"
              onClick={() => setShowCentralDashboard(true)}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B2C] via-[#3B82F6] to-[#10B981] opacity-20 blur-lg animate-pulse" />
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <RocketLaunchIcon className="w-8 h-8 text-[#FF6B2C]" />
                                  </div>
                                </div>
                              </motion.div>
                    </motion.div>

          {/* CTA Buttons */}
              <motion.div 
            className="flex flex-col gap-3 px-4 pb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlowingButton
              href="#solutions"
              className="w-full bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] px-4 py-3 text-sm"
            >
              Explore Solutions
            </GlowingButton>
            <GlowingButton
              href="#contact"
              className="w-full bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 border-2 border-[#3B82F6]/20 hover:border-[#3B82F6]/40 px-4 py-3 text-sm"
            >
              Get Started
            </GlowingButton>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-6 sm:space-y-8 mt-16 sm:mt-20"
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B2C]/10 to-[#3B82F6]/10 border border-[#FF6B2C]/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6B2C]" />
                <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] bg-clip-text text-transparent">
                  Enterprise Technology Solutions
                </span>
              </motion.div>

              {/* Heading */}
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-white">Transform Your</span>{' '}
                  <span className="bg-gradient-to-r from-[#FF6B2C] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                    Digital Future
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Comprehensive technology solutions that drive innovation and growth across your enterprise
                </motion.p>
              </div>
            </motion.div>

            {/* Right Column - Interactive Service Network */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square max-w-[500px] mx-auto lg:mx-0 w-full"
            >
              {/* Service Network */}
              <div className="relative w-full h-full">
                {/* Neural Network Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* Background connection lines */}
                  {services.map((service, i) => 
                    service.connections.map((targetIndex) => (
                      <motion.line
                        key={`${i}-${targetIndex}-bg`}
                        x1={`${50 + Math.cos(i * (2 * Math.PI / 9)) * 40}%`}
                        y1={`${50 + Math.sin(i * (2 * Math.PI / 9)) * 40}%`}
                        x2={`${50 + Math.cos(targetIndex * (2 * Math.PI / 9)) * 40}%`}
                        y2={`${50 + Math.sin(targetIndex * (2 * Math.PI / 9)) * 40}%`}
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                    ))
                  )}
                  
                  {/* Active connection lines */}
                  {activeService !== null && services[activeService].connections.map((targetIndex) => (
                    <g key={`${activeService}-${targetIndex}`}>
                      <motion.line
                        x1={`${50 + Math.cos(activeService * (2 * Math.PI / 9)) * 40}%`}
                        y1={`${50 + Math.sin(activeService * (2 * Math.PI / 9)) * 40}%`}
                        x2={`${50 + Math.cos(targetIndex * (2 * Math.PI / 9)) * 40}%`}
                        y2={`${50 + Math.sin(targetIndex * (2 * Math.PI / 9)) * 40}%`}
                        stroke={`url(#gradient-${activeService})`}
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.8 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.circle
                        r="2"
                        fill="white"
                        initial={{
                          x: 50 + Math.cos(activeService * (2 * Math.PI / 9)) * 40,
                          y: 50 + Math.sin(activeService * (2 * Math.PI / 9)) * 40
                        }}
                        animate={{
                          x: [
                            50 + Math.cos(activeService * (2 * Math.PI / 9)) * 40,
                            50 + Math.cos(targetIndex * (2 * Math.PI / 9)) * 40
                          ],
                          y: [
                            50 + Math.sin(activeService * (2 * Math.PI / 9)) * 40,
                            50 + Math.sin(targetIndex * (2 * Math.PI / 9)) * 40
                          ]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </g>
                  ))}
                  <defs>
                    {services.map((service, index) => {
                      const [fromColor, toColor] = service.color
                        .split(' ')
                        .filter(part => part.startsWith('from-') || part.startsWith('to-'))
                        .map(part => part.replace('from-', '').replace('to-', '').replace('[', '').replace(']', ''))
                      return (
                        <linearGradient
                          key={`gradient-${index}`}
                          id={`gradient-${index}`}
                          gradientTransform="rotate(90)"
                        >
                          <stop offset="0%" stopColor={`#${fromColor}`} />
                          <stop offset="100%" stopColor={`#${toColor}`} />
                        </linearGradient>
                      )
                    })}
                  </defs>
                </svg>

                {/* Service Icons - Adjust size for mobile */}
                {services.map((service, index) => {
                  const angle = index * (2 * Math.PI / 9)
                  const x = 50 + Math.cos(angle) * (window.innerWidth < 640 ? 35 : 40)
                  const y = 50 + Math.sin(angle) * (window.innerWidth < 640 ? 35 : 40)
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        top: `${y}%`,
                        left: `${x}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: activeService === index ? 50 : 10
                      }}
                      onMouseEnter={() => handleServiceHover(index)}
                      onMouseLeave={() => setActiveService(null)}
                    >
                      <motion.div
                        className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${service.color} p-0.5 cursor-pointer relative group`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-full h-full rounded-xl bg-[#0A1628] flex items-center justify-center text-white p-2">
                          {service.icon}
                        </div>

                        {/* Service Dashboard Popup */}
                        <AnimatePresence>
                          {activeService === index && (
                            <div className="fixed inset-0 z-[1000] pointer-events-none">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                  className={`w-[240px] sm:w-[280px] bg-[#0F172A] rounded-lg border border-[#1A2B44] shadow-2xl pointer-events-auto`}
                                  initial={{ opacity: 0, y: popupPosition === 'top' ? 20 : -20, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  transition={{ duration: 0.2 }}
                                  style={{ 
                                    position: 'absolute',
                                    left: `${x}%`,
                                    top: popupPosition === 'top' ? `${y - 80}%` : `${y + 20}%`,
                                    transform: 'translate(-50%, -50%)',
                                    willChange: 'transform'
                                  }}
                                >
                                  {/* Content Container */}
                                  <div className="relative divide-y divide-[#1A2B44]">
                                    {/* Header Section */}
                                    <div className={`p-2.5 bg-gradient-to-br ${service.color}/5`}>
                                      <div className="flex items-center justify-between mb-1.5">
                                        <h3 className="text-white font-medium text-sm">{service.label}</h3>
                                        <div className="flex items-center gap-1.5">
                                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                          <span className="text-[10px] text-gray-400">Live</span>
                                        </div>
                                      </div>
                                      <p className="text-[11px] text-gray-300 leading-snug">{service.description}</p>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="p-2.5 bg-[#1A2B44]/20">
                                      <div className="grid grid-cols-3 gap-1">
                                        {Object.entries(service.stats).map(([key, value], i) => (
                                          <div
                                            key={key}
                                            className="bg-[#0F172A] rounded p-1.5 text-center"
                                          >
                                            <div className="text-[10px] text-gray-400 mb-0.5 truncate">{key}</div>
                                            <div className="text-xs font-medium text-white truncate">{value}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="p-2.5 space-y-2 bg-[#1A2B44]/10">
                                      {service.metrics.map((metric, i) => (
                                        <div
                                          key={i}
                                          className="bg-[#0F172A] rounded p-2"
                                        >
                                          <div className="flex items-center justify-between mb-1">
                                            <span className="text-[11px] font-medium text-white truncate flex-1">{metric.label}</span>
                                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ml-1 ${metric.trend.startsWith('+') ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                              {metric.trend}
                                            </span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                            <div className="text-sm font-semibold text-white">{metric.value}</div>
                                            <div className={`flex-1 h-1 rounded-full bg-gradient-to-r ${service.color}/20`}>
                                              <motion.div
                                                className={`h-full rounded-full bg-gradient-to-r ${service.color}`}
                                                initial={{ width: 0 }}
                                                animate={{ width: metric.trend.startsWith('+') ? '75%' : '45%' }}
                                                transition={{ duration: 0.5 }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Connected Services */}
                                    <div className="p-2.5 bg-[#1A2B44]/20">
                                      <div className="text-[10px] font-medium text-gray-400 mb-1.5">Connected Services</div>
                                      <div className="flex flex-wrap gap-1">
                                        {service.connections.map((connIndex) => (
                                          <div
                                            key={connIndex}
                                            className={`px-1.5 py-0.5 rounded bg-[#0F172A] text-[10px] text-white flex items-center gap-1 border border-[#1A2B44]`}
                                          >
                                            <div className="w-2.5 h-2.5 opacity-75">
                                              {services[connIndex].icon}
                                            </div>
                                            <span className="truncate">{services[connIndex].label}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="p-2.5 flex gap-1.5 bg-[#1A2B44]/20">
                                      <button 
                                        className="flex-1 px-2 py-1.5 bg-[#243B61] hover:bg-[#2D4875] rounded text-[10px] text-white font-medium flex items-center justify-center gap-1 transition-colors"
                                      >
                                        <ChartBarIcon className="w-3 h-3" />
                                        Analytics
                                      </button>
                                      <button 
                                        className={`flex-1 px-2 py-1.5 rounded text-[10px] text-white font-medium flex items-center justify-center gap-1 bg-gradient-to-r ${service.color} hover:opacity-90 transition-opacity`}
                                      >
                                        <CogIcon className="w-3 h-3" />
                                        Configure
                                      </button>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            </div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Buttons - Shared between layouts but styled differently */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <GlowingButton
            href="#solutions"
            className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
          >
            Explore Solutions
          </GlowingButton>
          <GlowingButton
            href="#contact"
            className="w-full sm:w-auto bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 border-2 border-[#3B82F6]/20 hover:border-[#3B82F6]/40 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
          >
            Get Started
          </GlowingButton>
        </motion.div>
      </motion.div>

      {/* Central Dashboard Modal */}
      <AnimatePresence>
        {showCentralDashboard && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCentralDashboard(false)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95vw] sm:w-[90vw] max-w-6xl h-[85vh] sm:h-[80vh] bg-[#0F172A] rounded-xl border border-[#1A2B44] shadow-2xl overflow-hidden z-[101]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="relative h-full flex flex-col">
                {/* Modal Header */}
                <div className="p-4 sm:p-6 border-b border-[#1A2B44]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Enterprise Solutions</h2>
                      <p className="text-sm text-gray-400">Overview of our integrated solutions</p>
                    </div>
                    <button
                      onClick={() => setShowCentralDashboard(false)}
                      className="p-1.5 sm:p-2 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                      className="p-4 rounded-xl bg-[#1A2B44]/30 border border-[#1A2B44] hover:border-[#FF6B2C]/20 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0F2137] border border-white/10 flex items-center justify-center">
                          <div className="w-5 h-5 text-[#FF6B2C]">{service.icon}</div>
                            </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white mb-1">{service.label}</h3>
                          <p className="text-sm text-gray-400 mb-3">{service.description}</p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                            {Object.entries(service.stats).map(([key, value]) => (
                              <div key={key} className="p-2 rounded-lg bg-black/20">
                                <div className="text-gray-400 capitalize text-xs">{key}</div>
                                <div className="text-white font-medium truncate">{value}</div>
                              </div>
                            ))}
                          </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>

                {/* Modal Footer */}
                <div className="p-4 sm:p-6 border-t border-[#1A2B44] bg-[#1A2B44]/30">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-gray-400">All Systems Operational</span>
                      </div>
                      <div className="text-sm text-gray-400">Last updated: Just now</div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <button className="px-4 py-2 bg-[#243B61] text-white rounded-lg text-sm hover:bg-[#2D4875] transition-colors w-full sm:w-auto">
                        View Analytics
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] text-white rounded-lg text-sm hover:opacity-90 transition-opacity w-full sm:w-auto">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 