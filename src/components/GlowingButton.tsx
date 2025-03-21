import { motion } from 'framer-motion';
import Link from 'next/link';

interface GlowingButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function GlowingButton({ children, href, variant = 'primary', className = '' }: GlowingButtonProps) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all rounded-lg group ${className}`}
    >
      {children}
    </Link>
  );
} 