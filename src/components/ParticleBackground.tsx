import { motion } from 'framer-motion';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient backgrounds */}
      <motion.div
        className="absolute -inset-[10px] opacity-50"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 60%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 left-[20%] w-[400px] h-[400px] rounded-full bg-blue-500/20"
        style={{ filter: 'blur(100px)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-[20%] w-[400px] h-[400px] rounded-full bg-purple-500/20"
        style={{ filter: 'blur(100px)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />
    </div>
  );
};

export default ParticleBackground; 