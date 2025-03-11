import { motion } from 'framer-motion'

interface TechnologyCardProps {
  name: string
  category: string
  index: number
}

export default function TechnologyCard({ name, category, index }: TechnologyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-[#1A2B44]/50 rounded-xl p-6 text-center group hover:bg-[#243B61] transition-colors"
    >
      <div className="text-lg font-medium text-white mb-2">{name}</div>
      <div className="text-sm text-[#10B981]">{category}</div>
    </motion.div>
  )
} 