import { motion } from 'framer-motion';
import { RocketLaunchIcon, CloudIcon, CogIcon, ChartPieIcon, DevicePhoneMobileIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const TechStackIllustration = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Base Platform */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[60px] bg-gradient-to-r from-[#FF6B2C]/20 to-[#3B82F6]/20 rounded-[30px] blur-sm"
      />

      {/* Main Stack Elements */}
      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
        {/* Cloud Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[320px] h-[80px] bg-[#0F2137] rounded-xl border border-[#3B82F6]/20 flex items-center justify-center gap-4 relative group hover:border-[#3B82F6]/40 transition-colors"
        >
          <CloudIcon className="w-8 h-8 text-[#3B82F6]" />
          <span className="text-white/80">Cloud Infrastructure</span>
          <motion.div
            className="absolute -right-4 -top-4 w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Security Layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-[280px] h-[80px] bg-[#0F2137] rounded-xl border border-[#FF6B2C]/20 flex items-center justify-center gap-4 relative group hover:border-[#FF6B2C]/40 transition-colors"
        >
          <ShieldCheckIcon className="w-8 h-8 text-[#FF6B2C]" />
          <span className="text-white/80">Security Services</span>
          <motion.div
            className="absolute -left-4 -top-4 w-8 h-8 rounded-lg bg-[#FF6B2C]/10 flex items-center justify-center"
            animate={{
              y: [0, -6, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-[#FF6B2C] animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Analytics Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-[240px] h-[80px] bg-[#0F2137] rounded-xl border border-[#3B82F6]/20 flex items-center justify-center gap-4 relative group hover:border-[#3B82F6]/40 transition-colors"
        >
          <ChartPieIcon className="w-8 h-8 text-[#3B82F6]" />
          <span className="text-white/80">Analytics</span>
          <motion.div
            className="absolute -right-4 -bottom-4 w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center"
            animate={{
              y: [0, 8, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Mobile Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-[200px] h-[80px] bg-[#0F2137] rounded-xl border border-[#FF8F2C]/20 flex items-center justify-center gap-4 relative group hover:border-[#FF8F2C]/40 transition-colors"
        >
          <DevicePhoneMobileIcon className="w-8 h-8 text-[#FF8F2C]" />
          <span className="text-white/80">Mobile</span>
          <motion.div
            className="absolute -left-4 -bottom-4 w-8 h-8 rounded-lg bg-[#FF8F2C]/10 flex items-center justify-center"
            animate={{
              y: [0, 6, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-[#FF8F2C] animate-pulse" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full rounded-xl bg-[#FF6B2C]/10 backdrop-blur-sm border border-[#FF6B2C]/20 flex items-center justify-center">
          <RocketLaunchIcon className="w-8 h-8 text-[#FF6B2C]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 w-16 h-16"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full rounded-xl bg-[#3B82F6]/10 backdrop-blur-sm border border-[#3B82F6]/20 flex items-center justify-center">
          <CogIcon className="w-8 h-8 text-[#3B82F6]" />
        </div>
      </motion.div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        <motion.path
          d="M100 200 Q 200 250, 300 200"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M400 300 Q 300 350, 200 300"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FF8F2C" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TechStackIllustration; 