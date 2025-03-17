'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { SparklesIcon } from '@heroicons/react/24/outline'
import GlowingButton from './GlowingButton'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
      }
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined' && !isMobile) {
        const { clientX, clientY } = e
        const moveX = (clientX - window.innerWidth / 2) * 0.01
        const moveY = (clientY - window.innerHeight / 2) * 0.01
        setMousePosition({ x: moveX, y: moveY })
      }
    }
    
    checkMobile()

    if (typeof window !== 'undefined') {
    window.addEventListener('resize', checkMobile)
      window.addEventListener('mousemove', handleMouseMove)
      return () => {
        window.removeEventListener('resize', checkMobile)
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isMobile])

  const y = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 200])
  const opacity = useTransform(scrollY, [0, 200], [1, isMobile ? 1 : 0])
  const scale = useTransform(scrollY, [0, 200], [1, isMobile ? 1 : 0.8])

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[80vh] flex flex-col justify-start overflow-hidden bg-[#0A1628] pt-32 lg:pt-40"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0A1628]/95 to-transparent" />
        <div className="absolute top-1/4 -left-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto lg:mx-0 space-y-5 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div 
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B2C]/10 to-blue-500/10 border border-[#FF6B2C]/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SparklesIcon className="w-4 h-4 text-[#FF6B2C]" />
          <span className="text-sm font-medium bg-gradient-to-r from-[#FF6B2C] to-blue-500 bg-clip-text text-transparent">
                Enterprise Technology Solutions
              </span>
            </motion.div>

        {/* Heading */}
        <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1]">
            <span className="text-white">Transform Your Business with </span>
            <span className="bg-gradient-to-r from-[#FF6B2C] via-[#FF8F2C] to-blue-500 bg-clip-text text-transparent">
              Digital Innovation
                </span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
            Comprehensive technology solutions to modernize your operations, enhance security, and accelerate growth with custom software development, cloud services, and digital transformation.
          </p>
        </motion.div>

        {/* CTA Buttons */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
        >
          <GlowingButton
              href="/services"
              className="px-6 py-3 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F2C] text-base font-medium shadow-lg shadow-[#FF6B2C]/20"
          >
            Explore Solutions
          </GlowingButton>
          <GlowingButton
            href="#contact"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-base font-medium border border-[#FF6B2C]/20 backdrop-blur-sm"
          >
            Get Started
          </GlowingButton>
        </motion.div>
      </motion.div>

        {/* Bottom Illustration */}
            <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ 
            transform: `perspective(2000px) rotateX(${mousePosition.y * 0.08}deg) rotateY(${mousePosition.x * 0.08}deg) translateZ(80px) rotate(-5deg)`
          }}
          className="relative -mt-8 lg:-mt-16 max-w-3xl mx-auto lg:ml-auto lg:mr-0"
        >
          <div className="relative w-full">
            {/* Glow Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 -bottom-4"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-[#FF6B2C]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-[#FF6B2C]/10 to-transparent rounded-3xl blur-2xl" />
            </motion.div>

            {/* Main Illustration */}
                      <motion.div
              className="relative z-10 transform-gpu"
              whileHover={{ scale: 1.02, translateY: -8, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/illustrations/freepik__adjust__15185.png"
                alt="Enterprise Technology Solutions"
                width={800}
                height={600}
                className="w-full h-auto object-contain transform-gpu -translate-y-4 scale-95 rotate-2"
                priority
              />
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.path
                d="M100,40 Q200,0 300,40 T500,40"
                stroke="url(#blue-gradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M50,80 Q150,40 250,80 T450,80"
                stroke="url(#blue-gradient-alt)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
              />
              <defs>
                <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="blue-gradient-alt" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Animated Dots */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping" />
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse delay-300" />
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce delay-700" />
          </div>
        </motion.div>
      </div>
    </div>
  )
} 