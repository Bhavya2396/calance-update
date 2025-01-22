import { motion, AnimatePresence } from 'framer-motion'
import { SparklesIcon, BoltIcon, CheckIcon, CogIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Image from 'next/image'

const BrainCircuit = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const services = [
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions for business automation',
      icon: <SparklesIcon className="w-6 h-6" />,
      position: { top: '20%', left: '20%' }
    },
    {
      id: 'analytics',
      title: 'Data Analytics',
      description: 'Transform data into actionable insights',
      icon: <ChartBarIcon className="w-6 h-6" />,
      position: { top: '30%', right: '20%' }
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions',
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      position: { bottom: '30%', left: '25%' }
    },
    {
      id: 'automation',
      title: 'Process Automation',
      description: 'Streamline operations with RPA',
      icon: <CogIcon className="w-6 h-6" />,
      position: { bottom: '20%', right: '25%' }
    }
  ];

  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-[#0F172A]/95 to-[#1A2B44]/95 rounded-2xl border border-[#1A2B44] overflow-hidden backdrop-blur-xl p-6">
      {/* Main Illustration */}
      <div className="relative w-full h-full">
        <Image
          src="/images/illustrations/66473cc4ff64a4fad96a4329_Website-illustration-services@2x.png"
          alt="Services Illustration"
          fill
          className="object-contain opacity-50"
        />
        
        {/* Interactive Service Points */}
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="absolute z-20"
            style={service.position as any}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.button
              className={`relative group p-3 rounded-full ${
                activeService === service.id 
                  ? 'bg-[#FF6B2C]' 
                  : 'bg-[#1A2B44] hover:bg-[#FF6B2C]/20'
              } transition-colors duration-300`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`${
                activeService === service.id ? 'text-white' : 'text-[#FF6B2C]'
              }`}>
                {service.icon}
              </div>
              
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#FF6B2C]"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {/* Tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#1A2B44] rounded-lg p-3 shadow-lg">
                  <div className="text-sm font-bold text-white mb-1">{service.title}</div>
                  <div className="text-xs text-gray-400">{service.description}</div>
                </div>
              </div>
            </motion.button>
          </motion.div>
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full z-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {services.map((_, i) => (
            services.slice(i + 1).map((_, j) => (
              <motion.line
                key={`line-${i}-${j}`}
                x1={`${20 + (i * 20)}%`}
                y1={`${20 + (i * 15)}%`}
                x2={`${20 + ((j + i + 1) * 20)}%`}
                y2={`${20 + ((j + i + 1) * 15)}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: (i + j) * 0.5 }}
              />
            ))
          ))}
        </svg>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </div>

      {/* Active Service Details */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-6 right-6 bg-[#1A2B44]/80 backdrop-blur-sm rounded-xl p-4 border border-[#FF6B2C]/20"
          >
            {services.find(s => s.id === activeService) && (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#FF6B2C]/20">
                    {services.find(s => s.id === activeService)?.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {services.find(s => s.id === activeService)?.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {services.find(s => s.id === activeService)?.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  className="h-1 bg-gradient-to-r from-[#FF6B2C] to-[#3B82F6] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Overlay */}
      <div className="absolute top-6 right-6 flex gap-3">
        {[
          { label: "AI Models", value: "15+", icon: <SparklesIcon className="w-4 h-4" /> },
          { label: "Processing", value: "Real-time", icon: <BoltIcon className="w-4 h-4" /> },
          { label: "Accuracy", value: "99.9%", icon: <CheckIcon className="w-4 h-4" /> }
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-[#1A2B44]/30 rounded-xl p-2 border border-[#1A2B44]/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 + (i * 0.1) }}
          >
            <div className="flex items-center gap-2">
              <div className="text-[#FF6B2C]">{stat.icon}</div>
              <div>
                <div className="text-sm font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default BrainCircuit 