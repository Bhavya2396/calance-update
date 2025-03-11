'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  ArrowPathIcon,
  CpuChipIcon,
  CircleStackIcon,
  ChartBarIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'

const steps = [
  {
    title: "Data Collection",
    description: "Seamlessly gather data from multiple sources with our intelligent collection systems",
    icon: <CircleStackIcon className="w-6 h-6" />,
    metrics: {
      "Data Sources": "50+",
      "Real-time": "Yes",
      "Accuracy": "99.9%"
    }
  },
  {
    title: "Processing & Analysis",
    description: "Process and analyze data using advanced AI and machine learning algorithms",
    icon: <CpuChipIcon className="w-6 h-6" />,
    metrics: {
      "Processing Speed": "10ms",
      "Scalability": "∞",
      "Automation": "100%"
    }
  },
  {
    title: "Insights & Actions",
    description: "Generate actionable insights and automate responses based on analysis",
    icon: <ChartBarIcon className="w-6 h-6" />,
    metrics: {
      "Success Rate": "95%",
      "Response Time": "<1s",
      "ROI": "+300%"
    }
  }
]

export default function EndToEndSolution() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#FF6B2C]/5" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            End-to-End Solution
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive solution covers every aspect of your business needs, from data collection to actionable insights
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
              <div className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#FF6B2C] transition-colors">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#FF6B2C]/10 text-white">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {step.description}
                </p>
                
                {/* Illustration */}
                <div className="relative h-40">
                  <Image
                    src={`/images/illustrations/end-to-end/step-${index + 1}.svg`}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#FF6B2C]/10 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Ready to Start Your{" "}
                <span className="text-white">
                  Digital Transformation
                </span>
                ?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 mb-8"
              >
                Let's discuss how our end-to-end solution can help transform your business operations.
              </motion.p>
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity"
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
                src="/images/illustrations/end-to-end.svg"
                alt="End-to-End Solution"
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