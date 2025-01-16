import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-calance-blue to-calance-darkBlue rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500" />
      <div className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-calance-blue to-calance-darkBlue text-white">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-calance-blue to-calance-darkBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg" />
      </div>
    </motion.div>
  );
} 