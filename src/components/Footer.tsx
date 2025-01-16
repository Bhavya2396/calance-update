'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <Image
              src="/images/illustrations/Screenshot_2025-01-16_at_4.36.53_AM-removebg-preview.png"
              alt="Calance Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-gray-400 text-sm">
              A GROUP COMPANY OF DTS CORPORATION, JAPAN
            </p>
            <p className="text-gray-400 text-sm">
              Transforming businesses through innovative IT solutions for over 20 years
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: "🌐", href: "#" },
                { icon: "🌐", href: "#" },
                { icon: "🌐", href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF6B2C]/10 hover:text-[#FF6B2C] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              {[
                'Apps & Automation',
                'IT Infrastructure',
                'Business Intelligence',
                'Security Services'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                'About Us',
                'Case Studies',
                'Partners',
                'Careers'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <div className="flex items-start gap-2">
                  <MapPinIcon className="w-5 h-5 text-[#FF6B2C] flex-shrink-0 mt-1" />
                  <span>Los Angeles<br />5000 N. Parkway Calabasas, Suite 316, Calabasas, CA 91302</span>
                </div>
              </li>
              <li>
                <a href="tel:+18182067410" className="hover:text-white transition-colors flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-[#FF6B2C]" />
                  <span>+1 (818) 206-7410</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@calance.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <EnvelopeIcon className="w-5 h-5 text-[#FF6B2C]" />
                  <span>info@calance.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Calance. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 