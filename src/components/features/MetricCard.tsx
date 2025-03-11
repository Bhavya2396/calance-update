import { motion } from 'framer-motion'

interface MetricCardProps {
  value: string
  label: string
  description: string
  index: number
}

export default function MetricCard({ value, label, description, index }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#1A2B44]/50 rounded-xl p-6 border border-[#243B61] hover:border-[#7C3AED]/20 transition-colors"
    >
      <div className="text-3xl font-bold text-[#7C3AED] mb-2">{value}</div>
      <div className="text-lg font-medium text-white mb-2">{label}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </motion.div>
  )
} 