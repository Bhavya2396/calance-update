'use client'

import { motion } from 'framer-motion'
import { 
  BoltIcon,
  ArrowRightIcon,
  CpuChipIcon,
  ChartBarIcon,
  LightBulbIcon,
  BeakerIcon,
  CircleStackIcon,
  CommandLineIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const features = [
  {
    title: "Machine Learning",
    description: "Build and deploy custom machine learning models for predictive analytics and pattern recognition.",
    icon: <CpuChipIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/ai-solutions/machine-learning.svg",
    metrics: { 
      "Model Accuracy": "95%",
      "Training Speed": "+300%",
      "Inference Time": "50ms"
    }
  },
  {
    title: "Natural Language Processing",
    description: "Process and analyze text data with advanced NLP models for understanding and generation.",
    icon: <LightBulbIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/ai-solutions/nlp.svg",
    metrics: {
      "Language Support": "100+",
      "Accuracy": "92%",
      "Response Time": "100ms"
    }
  },
  {
    title: "Computer Vision",
    description: "Implement vision AI solutions for image recognition, object detection, and visual analysis.",
    icon: <BeakerIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/ai-solutions/computer-vision.svg",
    metrics: {
      "Detection Rate": "98%",
      "Processing Speed": "30fps",
      "Precision": "96%"
    }
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into existing systems and workflows.",
    icon: <CircleStackIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/ai-solutions/ai-integration.svg",
    metrics: {
      "API Latency": "50ms",
      "Success Rate": "99.9%",
      "Scale Factor": "10x"
    }
  }
]

const technologies = [
  { name: "TensorFlow", category: "ML Framework" },
  { name: "PyTorch", category: "ML Framework" },
  { name: "Scikit-learn", category: "ML Library" },
  { name: "BERT", category: "NLP Model" },
  { name: "GPT", category: "NLP Model" },
  { name: "OpenCV", category: "Vision Library" },
  { name: "Keras", category: "ML Framework" },
  { name: "Hugging Face", category: "AI Platform" },
  { name: "CUDA", category: "GPU Computing" },
  { name: "MLflow", category: "ML Ops" },
  { name: "Kubeflow", category: "ML Ops" },
  { name: "Ray", category: "Distributed ML" }
]

const successMetrics = [
  {
    value: "95%",
    label: "Model Accuracy",
    description: "Average accuracy across deployed AI models"
  },
  {
    value: "10x",
    label: "Processing Speed",
    description: "Faster data processing with AI optimization"
  },
  {
    value: "99.9%",
    label: "System Uptime",
    description: "Reliable AI infrastructure availability"
  },
  {
    value: "60%",
    label: "Cost Reduction",
    description: "Reduced operational costs through AI automation"
  }
]

export default function AISolutions() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-[#3B82F6]/20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold mb-6"
              >
                Advanced{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                  AI Solutions
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-8"
              >
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver intelligent systems that drive innovation.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="/contact">
                  Get Started
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </GlowingButton>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative lg:h-[600px]"
            >
              <Image
                src="/images/illustrations/ai-solutions/hero.svg"
                alt="AI Solutions Hero"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                AI Capabilities
              </span>
            </h2>
            <p className="text-gray-400">Unlock the power of AI with our advanced solutions</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#7C3AED]/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#7C3AED]/10 to-[#3B82F6]/10 text-[#7C3AED]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">
                  {feature.description}
                </p>
                
                <div className="relative h-40 mb-6">
                  <Image
                    src={feature.illustration}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(feature.metrics).map(([label, value]) => (
                    <div key={label} className="bg-[#0A1628] rounded-xl p-4">
                      <div className="text-xl font-bold text-[#7C3AED]">{value}</div>
                      <div className="text-sm text-gray-400">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-20 bg-[#0F172A] relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#3B82F6]/5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              AI Technology{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                Stack
              </span>
            </h2>
            <p className="text-gray-400">State-of-the-art AI frameworks and tools</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#3B82F6]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-6 border border-[#243B61] group-hover:border-[#7C3AED]/20 transition-colors text-center">
                  <div className="font-medium text-white mb-2">{tech.name}</div>
                  <div className="text-sm text-[#7C3AED]">{tech.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Metrics */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              AI Performance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                Metrics
              </span>
            </h2>
            <p className="text-gray-400">Measurable impact of our AI solutions</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 rounded-xl p-6 border border-[#243B61] hover:border-[#7C3AED]/20 transition-colors"
              >
                <div className="text-3xl font-bold text-[#7C3AED] mb-2">{metric.value}</div>
                <div className="text-lg font-medium text-white mb-2">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-[#3B82F6]/20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                  Transform
                </span>
                {" "}Your Business?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 mb-8"
              >
                Start your AI journey today and unlock new possibilities for growth and innovation.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <GlowingButton href="/contact">
                  Contact Us
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </GlowingButton>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative lg:h-[400px]"
            >
              <Image
                src="/images/illustrations/ai-solutions/cta.svg"
                alt="AI Solutions CTA"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 