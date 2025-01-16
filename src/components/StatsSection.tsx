import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function StatItem({ value, label, suffix = '', duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalDuration = duration * 1000;
      const incrementTime = totalDuration / end;

      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(counter);
      }, incrementTime);

      return () => clearInterval(counter);
    }
  }, [value, duration, isInView]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold text-calance-blue mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatItem value={20} label="Years of Experience" suffix="+" />
          <StatItem value={500} label="Projects Delivered" suffix="+" />
          <StatItem value={98} label="Client Satisfaction" suffix="%" />
          <StatItem value={24} label="Support Coverage" suffix="/7" />
        </div>
      </div>
    </section>
  );
} 