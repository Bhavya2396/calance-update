'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  DocumentTextIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  ArrowTrendingUpIcon,
  CloudArrowUpIcon,
  SparklesIcon,
  BeakerIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  CogIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import WordCloud from '@/components/WordCloud'
import SentimentChart from '@/components/SentimentChart'
import SalesPredictionChart from '@/components/SalesPredictionChart'
import BrainCircuit from '@/components/BrainCircuit'
import DocumentProcessor from '@/components/DocumentProcessor'

// Updated color scheme constants
const COLORS = {
  primary: {
    start: '#FF6B2C',
    end: '#FF8F59',
    shadow: 'rgba(255, 107, 44, 0.2)'
  },
  tools: {
    document: {
      start: '#3B82F6',
      end: '#60A5FA',
      shadow: 'rgba(59, 130, 246, 0.2)'
    },
    topics: {
      start: '#8B5CF6',
      end: '#A78BFA',
      shadow: 'rgba(139, 92, 246, 0.2)'
    },
    sentiment: {
      start: '#10B981',
      end: '#34D399',
      shadow: 'rgba(16, 185, 129, 0.2)'
    },
    prediction: {
      start: '#F97316',
      end: '#FB923C',
      shadow: 'rgba(249, 115, 22, 0.2)'
    }
  }
}

// Updated mock data for better visualization
const mockWordCloudData = [
  { text: 'Innovation', value: 64 },
  { text: 'Technology', value: 58 },
  { text: 'Artificial Intelligence', value: 52 },
  { text: 'Machine Learning', value: 48 },
  { text: 'Digital Transformation', value: 44 },
  { text: 'Automation', value: 42 },
  { text: 'Analytics', value: 38 },
  { text: 'Cloud Computing', value: 36 },
  { text: 'Data Science', value: 34 },
  { text: 'Neural Networks', value: 32 },
  { text: 'Deep Learning', value: 30 },
  { text: 'Robotics', value: 28 },
  { text: 'Big Data', value: 26 },
  { text: 'IoT', value: 24 },
  { text: 'Blockchain', value: 22 },
]

const mockSentimentData = {
  positive: 65,
  negative: 15,
  neutral: 20,
  emotions: {
    joy: 45,
    sadness: 10,
    anger: 5,
    fear: 15,
    surprise: 25
  }
}

const mockSalesPredictions = {
  timeRange: 12,
  baselinePredictions: Array.from({ length: 12 }, (_, i) => 50 + Math.sin(i / 2) * 10 + Math.random() * 5),
  optimisticPredictions: Array.from({ length: 12 }, (_, i) => 65 + Math.sin(i / 2) * 10 + Math.random() * 5),
  pessimisticPredictions: Array.from({ length: 12 }, (_, i) => 35 + Math.sin(i / 2) * 10 + Math.random() * 5)
}

interface DocumentProcessorProps {
  onAnalyze: (result: any) => void
}

interface Word {
  text: string
  value: number
}

interface WordCloudProps {
  words: Word[]
}

interface Sentiment {
  positive: number
  negative: number
  neutral: number
  emotions: {
    joy: number
    sadness: number
    anger: number
    fear: number
    surprise: number
  }
}

interface SentimentChartProps {
  sentiment: Sentiment
}

interface SalesPredictionChartProps {
  timeRange: number
  baselinePredictions: number[]
  optimisticPredictions: number[]
  pessimisticPredictions: number[]
}

type ToolId = 'document' | 'topics' | 'sentiment' | 'prediction'

interface BaseTool {
  id: ToolId
  label: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

interface DocumentTool extends BaseTool {
  id: 'document'
  component: React.ComponentType<DocumentProcessorProps>
}

interface TopicsTool extends BaseTool {
  id: 'topics'
  component: React.ComponentType<WordCloudProps>
}

interface SentimentTool extends BaseTool {
  id: 'sentiment'
  component: React.ComponentType<SentimentChartProps>
}

interface PredictionTool extends BaseTool {
  id: 'prediction'
  component: React.ComponentType<SalesPredictionChartProps>
}

type Tool = DocumentTool | TopicsTool | SentimentTool | PredictionTool

// Updated tools array with consistent icon styling
const tools: Tool[] = [
  {
    id: 'document',
    label: 'Document Intelligence',
    description: 'Extract key insights from documents using advanced AI analysis',
    icon: DocumentMagnifyingGlassIcon,
    component: DocumentProcessor
  },
  {
    id: 'topics',
    label: 'Topic Analysis',
    description: 'Uncover hidden patterns and themes in your content',
    icon: SparklesIcon,
    component: WordCloud
  },
  {
    id: 'sentiment',
    label: 'Sentiment Analysis',
    description: 'Understand emotional context and customer sentiment',
    icon: ChartBarIcon,
    component: SentimentChart
  },
  {
    id: 'prediction',
    label: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions',
    icon: ArrowTrendingUpIcon,
    component: SalesPredictionChart
  }
]

const journeySteps = [
  {
    id: 1,
    title: 'Discovery & Assessment',
    description: 'We analyze your current processes and identify opportunities for AI integration.',
    icon: LightBulbIcon,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Strategy Development',
    description: 'Create a tailored roadmap for implementing AI solutions in your business.',
    icon: PresentationChartLineIcon,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 3,
    title: 'Implementation',
    description: 'Seamlessly integrate AI tools and train your team for optimal usage.',
    icon: CogIcon,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Continuous Improvement',
    description: 'Monitor performance and iterate based on real-world results.',
    icon: RocketLaunchIcon,
    color: 'from-green-500 to-emerald-500'
  }
]

// Define component-specific props
interface ComponentProps {
  document: DocumentProcessorProps;
  topics: WordCloudProps;
  sentiment: SentimentChartProps;
  prediction: SalesPredictionChartProps;
}

export default function AISolutions() {
  const [activeSection, setActiveSection] = useState<ToolId | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const mainContentRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Handle tool selection
  const handleToolClick = (toolId: ToolId) => {
    setActiveSection(toolId)
    // Scroll to top of content when tool is selected
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Get props for each component type with proper return types
  const getDocumentProps = (): DocumentProcessorProps => ({
    onAnalyze: handleAnalysisComplete
  });

  const getTopicsProps = (): WordCloudProps => ({
    words: [
      { text: 'AI', value: 100 },
      { text: 'Machine Learning', value: 80 },
      { text: 'Neural Networks', value: 75 },
      { text: 'Deep Learning', value: 70 },
      { text: 'Data Science', value: 65 },
      { text: 'Automation', value: 60 },
      { text: 'Analytics', value: 55 },
      { text: 'Big Data', value: 50 },
      { text: 'Algorithms', value: 45 },
      { text: 'Innovation', value: 40 }
    ]
  });

  const getSentimentProps = (): SentimentChartProps => ({
    sentiment: {
      positive: 65,
      negative: 15,
      neutral: 20,
      emotions: {
        joy: 40,
        sadness: 10,
        anger: 5,
        fear: 15,
        surprise: 30
      }
    }
  });

  const getPredictionProps = (): SalesPredictionChartProps => ({
    timeRange: 12,
    baselinePredictions: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
    optimisticPredictions: Array.from({ length: 12 }, () => Math.floor(Math.random() * 150)),
    pessimisticPredictions: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50))
  });

  // Render the active component with proper props
  const renderActiveComponent = () => {
    if (!activeSection) return null;
    const tool = tools.find(t => t.id === activeSection);
    if (!tool) return null;

    const containerClass = "w-full h-full flex items-center justify-center p-4";

    switch (tool.id) {
      case 'document':
        return (
          <div className={containerClass}>
            <DocumentProcessor {...getDocumentProps()} />
          </div>
        );
      case 'topics':
        return (
          <div className={containerClass}>
            <WordCloud {...getTopicsProps()} />
          </div>
        );
      case 'sentiment':
        return (
          <div className={containerClass}>
            <SentimentChart {...getSentimentProps()} />
          </div>
        );
      case 'prediction':
        return (
          <div className={containerClass}>
            <SalesPredictionChart {...getPredictionProps()} />
          </div>
        );
    }
  };

  const handleAnalysisComplete = (result: any) => {
    setIsProcessing(false)
  }

  return (
    <div className="min-h-screen bg-[#0A1A35] relative">
      {/* Background Circuit with reduced opacity and navy tint */}
      <BrainCircuit className="fixed inset-0 z-0 opacity-5 pointer-events-none mix-blend-lighten" />

      {/* Hero Section with navy gradient */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center px-3 sm:px-6 lg:px-8 
          border-b border-white/5 bg-gradient-to-b from-[#0A1A35]/80 via-[#0A1A35]/60 to-[#0A1A35]/40"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center px-3 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r 
                from-[#FF6B2C]/10 to-[#FF8F59]/10 text-white border border-[#FF6B2C]/20 mb-4 sm:mb-8"
            >
              <SparklesIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#FF6B2C] mr-1.5 sm:mr-2" />
              <span className="text-xs sm:text-base font-medium text-[#FF6B2C]">Enterprise AI Solutions</span>
            </motion.div>

            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Transform Your Business with{' '}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#FF8F59]">
                  Intelligent AI
                </span>
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to drive innovation, efficiency, and growth in your enterprise.
            </p>

            <div className="flex flex-col gap-3 w-full sm:w-auto max-w-sm mx-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 rounded-xl bg-[#FF6B2C] hover:bg-[#FF8F59] 
                  text-white font-semibold text-base transition-colors duration-200"
                onClick={() => setActiveSection('document')}
              >
                Explore Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 rounded-xl bg-[#0A1A35] text-white font-semibold text-base
                  border border-white/10 hover:bg-white/5 transition-colors duration-200"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* AI Tools Section with navy background */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Content Container with navy tint */}
        <div className="relative z-10 rounded-xl border border-white/10 bg-[#0A1A35]/60 backdrop-blur-md p-4 sm:p-6">
          {/* Section Header - Larger text for mobile */}
          <motion.div
            className="text-center mb-6 sm:mb-8"
            animate={{ 
              scale: activeSection ? [1, 0.98] : [0.98, 1],
              opacity: activeSection ? 0.8 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6B2C]/10 border border-[#FF6B2C]/20 mb-4"
            >
              <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6B2C]" />
              <span className="text-sm sm:text-base font-medium text-[#FF6B2C]">
                AI-Powered Solutions
              </span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              Intelligent Tools for Your Business
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Leverage our suite of AI tools to extract insights, analyze sentiment, and predict trends
            </p>
          </motion.div>

          {/* Tools Navigation - Larger text and spacing for mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {tools.map((tool) => (
                  <motion.button
                    key={tool.id}
                onClick={() => handleToolClick(tool.id)}
                className={`relative p-3 sm:p-4 rounded-lg border transition-all ${
                  activeSection === tool.id
                    ? 'bg-[#FF6B2C]/10 border-[#FF6B2C]/20'
                    : 'bg-black/40 border-white/10 hover:border-white/20 hover:bg-black/50'
                }`}
                whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                  <div className={`p-2 sm:p-2.5 rounded-lg ${
                    activeSection === tool.id ? 'text-[#FF6B2C]' : 'text-white'
                  }`}>
                    <tool.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base mb-1">{tool.label}</div>
                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 px-1">{tool.description}</p>
                  </div>
                </div>
                  </motion.button>
                ))}
              </div>

          {/* Active Component Container with navy tint */}
              <AnimatePresence mode="wait">
            {activeSection && (
                  <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                className="rounded-lg border border-white/10 bg-[#0A1A35]/80 backdrop-blur-md p-4 sm:p-6"
              >
                {/* Component Header - Larger text for mobile */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      {tools.find(t => t.id === activeSection)?.label}
                          </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      {tools.find(t => t.id === activeSection)?.description}
                    </p>
                              </div>
                            </div>

                {/* Active Component - Adjusted height and padding for mobile */}
                <div className={`
                  ${activeSection === 'document' ? 'h-[400px] sm:h-[450px] lg:h-[500px]' : 
                    activeSection === 'topics' ? 'h-[350px] sm:h-[400px] lg:h-[450px]' :
                    activeSection === 'sentiment' ? 'h-[450px] sm:h-[500px] lg:h-[550px]' :
                    'h-[400px] sm:h-[450px] lg:h-[500px]'}
                  overflow-y-auto overflow-x-hidden relative
                `}>
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    {renderActiveComponent()}
                              </div>
                        </div>
                      </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State - Larger text for mobile */}
          {!activeSection && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
              className="text-center py-8 sm:py-12"
            >
              <p className="text-base sm:text-lg text-gray-400">
                Select a tool above to get started
              </p>
                  </motion.div>
                )}
        </div>
        </div>

      {/* Features Section with navy gradient */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5
        bg-gradient-to-b from-[#0A1A35]/80 via-[#0A1A35]/60 to-[#0A1A35]/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Why Choose Our AI Solutions
              <motion.span 
                className="block h-1 w-20 mx-auto mt-4 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F59]"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
              />
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Empower your business with cutting-edge AI technology that delivers real results.
            </p>
              </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: LightBulbIcon,
                title: 'Smart Automation',
                description: 'Automate repetitive tasks and workflows with intelligent AI systems.'
              },
              {
                icon: ChartBarIcon,
                title: 'Advanced Analytics',
                description: 'Gain deep insights from your data with powerful analytical tools.'
              },
              {
                icon: UserGroupIcon,
                title: 'Enhanced Collaboration',
                description: 'Improve team productivity with AI-powered collaboration features.'
              }
            ].map((feature, index) => (
                <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl backdrop-blur-sm border border-white/10 
                  bg-gradient-to-br from-black/40 to-black/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl 
                  bg-gradient-to-r from-[#FF6B2C] to-[#FF8F59] mb-4 shadow-lg shadow-orange-500/20">
                  <feature.icon className="w-6 h-6 text-white" />
                  </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section with navy gradient */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5
        bg-gradient-to-b from-[#0A1A35]/80 via-[#0A1A35]/60 to-[#0A1A35]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Your AI Journey?
                <motion.span 
                  className="block h-1 w-20 mt-4 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F59]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Get in touch with our team of AI experts to discuss how we can help transform your business.
              </p>
              <div className="space-y-4">
                <motion.a 
                  href="tel:+15551234567"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 4 }}
                >
                  <PhoneIcon className="w-6 h-6 mr-3 text-[#FF6B2C]" />
                  <span>+1 (555) 123-4567</span>
                </motion.a>
                <motion.a 
                  href="mailto:contact@aicompany.com"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 4 }}
                >
                  <EnvelopeIcon className="w-6 h-6 mr-3 text-[#FF6B2C]" />
                  <span>contact@aicompany.com</span>
                </motion.a>
                </div>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A1A35]/80 rounded-2xl backdrop-blur-sm border border-white/10 p-8
                shadow-xl shadow-[#0A1A35]/40"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white 
                      focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:border-transparent
                      transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white 
                      focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:border-transparent
                      transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white 
                      focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:border-transparent
                      transition-all duration-300 resize-none"
                    placeholder="Tell us about your project"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255, 107, 44, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6B2C] to-[#FF8F59] 
                    text-white font-semibold text-lg shadow-lg shadow-orange-500/20"
                >
                  Send Message
                </motion.button>
              </form>
              </motion.div>
            </div>
        </div>
      </section>
    </div>
  )
} 