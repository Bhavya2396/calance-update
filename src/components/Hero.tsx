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
  ClockIcon
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
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.8])
  
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
    // Calculate if popup should appear above or below based on position
    const angle = index * (2 * Math.PI / 9)
    const y = Math.sin(angle)
    setPopupPosition(y > 0 ? 'top' : 'bottom')
    setActiveService(index)
  }

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 107, 44, 0.1) 0%, transparent 25%)`,
            transition: 'background-position 0.3s ease-out'
          }}
        >
          <div className="absolute inset-0 backdrop-blur-[100px]" />
        </div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B2C]/10 to-[#3B82F6]/10 border border-[#FF6B2C]/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SparklesIcon className="w-5 h-5 text-[#FF6B2C]" />
              <span className="text-sm font-medium bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] bg-clip-text text-transparent">
                Enterprise Technology Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
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
                className="text-xl text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Comprehensive technology solutions that drive innovation and growth across your enterprise
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <GlowingButton
                href="#solutions"
                className="bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] px-8 py-4 text-lg"
              >
                Explore Solutions
              </GlowingButton>
              <GlowingButton
                href="#contact"
                className="bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 border-2 border-[#3B82F6]/20 hover:border-[#3B82F6]/40 px-8 py-4 text-lg"
              >
                Get Started
              </GlowingButton>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Service Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-square"
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

              {/* Service Icons */}
              {services.map((service, index) => {
                const angle = index * (2 * Math.PI / 9)
                const x = 50 + Math.cos(angle) * 40
                const y = 50 + Math.sin(angle) * 40
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: `${y}%`,
                      left: `${x}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: activeService === index ? 20 : 10
                    }}
                    onMouseEnter={() => handleServiceHover(index)}
                    onMouseLeave={() => setActiveService(null)}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} p-0.5 cursor-pointer relative group`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-full h-full rounded-xl bg-[#0A1628] flex items-center justify-center text-white p-2.5">
                        {service.icon}
                      </div>

                      {/* Service Dashboard Popup */}
                      <AnimatePresence>
                        {activeService === index && (
                          <motion.div
                            className={`absolute ${popupPosition === 'top' ? 'bottom-[120%]' : 'top-[120%]'} left-1/2 transform -translate-x-1/2 bg-[#0F172A] rounded-lg border border-[#1A2B44] shadow-2xl w-[240px] z-30`}
                            initial={{ opacity: 0, y: popupPosition === 'top' ? 20 : -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
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
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                )
              })}

              {/* Optimized Central Particle System */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 cursor-pointer"
                onClick={() => setShowCentralDashboard(true)}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative w-full h-full">
                  {/* Core */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B2C] via-[#3B82F6] to-[#10B981] opacity-20 blur-lg animate-pulse" />
                  
                  {/* Static Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/5" />
                  <div className="absolute inset-0 rounded-full border border-white/10 scale-75" />
                  <div className="absolute inset-0 rounded-full border border-white/15 scale-50" />
                  
                  {/* Minimal Rotating Particles */}
                  <div className="absolute inset-0 animate-spin-slow">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-white/40"
                        style={{
                          transform: `rotate(${i * 90}deg) translateX(${32}px)`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Central Dashboard Modal */}
      <AnimatePresence>
        {showCentralDashboard && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCentralDashboard(false)}
            />
            
            {/* Modal */}
            <motion.div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-6xl max-h-[85vh] bg-[#0F172A] rounded-2xl border border-[#1A2B44] shadow-2xl overflow-hidden z-[101]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {/* Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none" />

              {/* Content */}
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-[#1A2B44]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Enterprise Solutions Dashboard</h2>
                      <p className="text-gray-400">Comprehensive overview of our integrated technology solutions</p>
                    </div>
                    <button
                      onClick={() => setShowCentralDashboard(false)}
                      className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Dashboard Grid */}
                <div className="flex-1 overflow-auto p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#1A2B44]/50 rounded-xl border border-[#1A2B44] overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {/* Service Header */}
                        <div className={`p-4 bg-gradient-to-r ${service.color}/10`}>
                          <div className="flex items-start gap-3">
                            <div className={`p-2.5 rounded-lg bg-gradient-to-r ${service.color}/20`}>
                              {service.icon}
                            </div>
                            <div>
                              <h3 className="text-white font-medium">{service.label}</h3>
                              <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                            </div>
                          </div>
                        </div>

                        {/* Stats Overview */}
                        <div className="p-4 space-y-4">
                          {/* Quick Stats */}
                          <div className="grid grid-cols-3 gap-2">
                            {Object.entries(service.stats).map(([key, value]) => (
                              <div key={key} className="text-center p-2 bg-[#243B61]/30 rounded-lg">
                                <div className="text-xs text-gray-400">{key}</div>
                                <div className="text-sm font-medium text-white mt-1">{value}</div>
                              </div>
                            ))}
                          </div>

                          {/* Metrics */}
                          <div className="space-y-2">
                            {service.metrics.map((metric, i) => (
                              <div key={i} className="flex items-center justify-between p-2 bg-[#243B61]/30 rounded-lg">
                                <div>
                                  <div className="text-xs text-gray-400">{metric.label}</div>
                                  <div className="text-sm font-medium text-white">{metric.value}</div>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full ${metric.trend.startsWith('+') ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                  {metric.trend}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Connected Services */}
                        <div className="p-4 border-t border-[#1A2B44] bg-[#1A2B44]/30">
                          <div className="text-xs text-gray-400 mb-2">Connected Services</div>
                          <div className="flex flex-wrap gap-2">
                            {service.connections.map((connIndex) => (
                              <div
                                key={connIndex}
                                className={`px-2 py-1 rounded-lg text-xs bg-gradient-to-r ${services[connIndex].color}/10 text-white`}
                              >
                                {services[connIndex].label}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-[#1A2B44] bg-[#1A2B44]/30">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-gray-400">All Systems Operational</span>
                      </div>
                      <div className="text-sm text-gray-400">Last updated: Just now</div>
                    </div>
                    <div className="flex gap-4">
                      <button className="px-4 py-2 bg-[#243B61] text-white rounded-lg text-sm hover:bg-[#2D4875] transition-colors">
                        View Full Analytics
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] text-white rounded-lg text-sm hover:opacity-90 transition-opacity">
                        Configure Services
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