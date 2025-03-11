'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon,
  ArrowRightIcon,
  PresentationChartLineIcon,
  CubeIcon,
  CloudIcon,
  DocumentChartBarIcon,
  CheckIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const features = [
  {
    title: "Data Analytics & Visualization",
    description: "Transform raw data into actionable insights with powerful analytics and interactive visualizations.",
    icon: <ChartBarIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/business-intelligence/data-analytics.svg",
    metrics: { 
      "Decision Speed": "+200%",
      "Data Accuracy": "99.9%",
      "Time Savings": "40hrs/week"
    }
  },
  {
    title: "Predictive Analytics",
    description: "Leverage machine learning and AI to forecast trends and make data-driven predictions.",
    icon: <PresentationChartLineIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/business-intelligence/predictive-analytics.svg",
    metrics: {
      "Forecast Accuracy": "95%",
      "Cost Savings": "45%",
      "ROI": "+300%"
    }
  },
  {
    title: "Interactive Dashboards",
    description: "Create customizable, real-time dashboards for monitoring KPIs and business metrics.",
    icon: <DocumentChartBarIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/business-intelligence/interactive-dashboards.svg",
    metrics: {
      "User Adoption": "+150%",
      "Report Time": "-80%",
      "Data Freshness": "Real-time"
    }
  },
  {
    title: "Data Integration",
    description: "Connect and unify data from multiple sources for comprehensive business analysis.",
    icon: <CloudIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/business-intelligence/data-integration.svg",
    metrics: {
      "Data Sources": "50+",
      "Processing Time": "-70%",
      "Data Quality": "99.9%"
    }
  }
]

const technologies = [
  { name: "Tableau", category: "Visualization" },
  { name: "Power BI", category: "Analytics" },
  { name: "Python", category: "Data Science" },
  { name: "R", category: "Statistics" },
  { name: "TensorFlow", category: "Machine Learning" },
  { name: "Apache Spark", category: "Big Data" },
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "Databricks", category: "Analytics" },
  { name: "Looker", category: "BI Platform" },
  { name: "Alteryx", category: "Data Prep" },
  { name: "SAS", category: "Analytics" },
  { name: "Qlik", category: "Visualization" }
]

const successMetrics = [
  {
    label: "Data Processing Speed",
    value: "+500%",
    description: "Faster data processing and analysis"
  },
  {
    label: "Cost Reduction",
    value: "45%",
    description: "Reduced operational costs"
  },
  {
    label: "Decision Time",
    value: "-70%",
    description: "Faster data-driven decisions"
  },
  {
    label: "ROI",
    value: "300%",
    description: "Return on BI investment"
  }
]

export default function BusinessIntelligence() {
  return (
    <main className="bg-[#0A1628] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1A2B44] text-[#7C3AED] mb-6"
              >
                <ChartBarIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Business Intelligence</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Transform Data into
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                  {" "}Actionable Insights
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-xl mb-8"
              >
                Unlock the power of your data with advanced analytics, interactive visualizations, and predictive insights.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="#contact" className="bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                  Start Your Journey
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
                
                <GlowingButton href="#features" className="bg-[#1A2B44] hover:bg-[#243B61]">
                  Explore Features
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] hidden lg:block"
            >
              <Image
                src="/images/illustrations/business-intelligence/hero.svg"
                alt="Business Intelligence Hero"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                <div className="relative h-[200px] mb-6">
                  <Image
                    src={feature.illustration}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(feature.metrics).map(([label, value]) => (
                    <div key={label} className="bg-[#0A1628] rounded-xl p-4 transform hover:-translate-y-1 transition-transform duration-300">
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

      {/* Technologies */}
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-gray-400">Leading BI and analytics platforms</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#1A2B44]/50 rounded-xl p-6 text-center group hover:bg-[#243B61] transition-colors"
              >
                <div className="text-lg font-medium text-white mb-2">{tech.name}</div>
                <div className="text-sm text-[#7C3AED]">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Metrics</h2>
            <p className="text-gray-400">Real results from our BI implementations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#3B82F6]/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-[#1A2B44]/80 rounded-xl p-6 backdrop-blur-sm border border-[#243B61] group-hover:border-[#7C3AED]/20 transition-colors">
                  {/* Circular Progress */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-[#1A2B44] stroke-current"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-[#7C3AED] stroke-current"
                        strokeWidth="8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                        style={{
                          strokeDasharray: "264, 264",
                          strokeDashoffset: 264 - (parseInt(metric.value) / 100) * 264,
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-2xl font-bold text-[#7C3AED]">{metric.value}</div>
                    </div>
                  </div>
                  
                  <div className="text-lg font-medium text-white mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#3B82F6]/10 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold mb-6"
                >
                  Ready to Transform Your Data Strategy?
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-400 mb-8"
                >
                  Let's discuss how our BI solutions can help you make better data-driven decisions.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlowingButton href="#contact" className="bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                    Get Started
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </GlowingButton>
                </motion.div>
              </div>
              
              {/* CTA Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] hidden lg:block"
              >
                <Image
                  src="/images/illustrations/business-intelligence/cta.svg"
                  alt="Business Intelligence CTA"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 