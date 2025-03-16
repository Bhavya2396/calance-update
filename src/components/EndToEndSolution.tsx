'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'

const steps = [
  {
    title: "Understanding Your Needs",
    description: "We take time to deeply understand your business challenges and objectives through comprehensive analysis and consultation",
    icon: <LightBulbIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/process/understanding.svg"
  },
  {
    title: "Creative Solutions",
    description: "Our experts design innovative, tailored solutions that perfectly align with your unique requirements and industry standards",
    icon: <PuzzlePieceIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/process/solutions.svg"
  },
  {
    title: "Seamless Delivery",
    description: "We implement solutions efficiently and provide ongoing support to ensure your continued success and growth",
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/process/delivery.svg"
  }
]

export default function EndToEndSolution() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#FF6B2C]/5" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(600px circle at 0% 0%, rgba(255, 107, 44, 0.1), transparent 70%)",
              "radial-gradient(600px circle at 100% 100%, rgba(255, 107, 44, 0.1), transparent 70%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#FF8F59]">
            Our Approach
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We believe in understanding your challenges deeply and delivering innovative solutions that drive real business value
          </p>
        </motion.div>
        
        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-[#FF6B2C]/50" />
              )}
              
              {/* Step Card */}
              <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#FF6B2C] transition-colors h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#FF6B2C]/10 text-white">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                
                {/* Illustration */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-[#0A1628]/50 group-hover:bg-[#0A1628]/70 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/10 to-transparent" />
                  <Image
                    src={step.illustration}
                    alt={step.title}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Description */}
                <p className="text-gray-400 flex-grow">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#FF6B2C]/10 to-[#FF8F59]/5 rounded-3xl p-12 border border-[#243B61]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Ready to Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#FF8F59]">
                  Business
                </span>
                ?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 mb-8"
              >
                Let's discuss how our approach can help solve your business challenges and drive growth.
              </motion.p>
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF6B2C] to-[#FF8F59] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
            
            {/* CTA Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] hidden lg:block"
            >
              <Image
                src="/images/illustrations/process/overview.svg"
                alt="Our Solution Process"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 