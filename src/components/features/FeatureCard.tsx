import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Metric {
  [key: string]: string
}

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  metrics: Record<string, string>
  index: number
}

export default function FeatureCard({ title, description, icon, metrics, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#7C3AED]/20 transition-colors group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-r from-[#7C3AED]/10 to-[#3B82F6]/10 text-[#7C3AED]">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        {description}
      </p>
      
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(metrics).map(([label, value]) => (
          <div key={label} className="bg-[#0A1628] rounded-xl p-4">
            <div className="text-xl font-bold text-[#7C3AED]">{value}</div>
            <div className="text-sm text-gray-400">{label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
} 