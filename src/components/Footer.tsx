'use client'

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Logo and Description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-6">
            <Image
              src="/images/illustrations/Screenshot_2025-01-16_at_4.36.53_AM-removebg-preview.png"
              alt="Calance Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-gray-400 text-sm sm:text-base max-w-xs">
              Empowering businesses with innovative technology solutions for over two decades.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {['facebook', 'twitter', 'linkedin', 'github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5" aria-hidden="true">
                      <use href={`/images/icons/sprite.svg#${social}`} />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-white font-semibold mb-4 sm:mb-6">Solutions</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                'Apps & Automation',
                'IT Infrastructure',
                'Business Intelligence',
                'Security Services'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-white font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                'About Us',
                'Case Studies',
                'Partners',
                'Careers'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-white font-semibold mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-400">
              <li>
                <div className="flex items-start gap-2">
                  <MapPinIcon className="w-5 h-5 text-[#FF6B2C] flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Los Angeles<br />5000 N. Parkway Calabasas, Suite 316, Calabasas, CA 91302</span>
                </div>
              </li>
              <li>
                <a href="tel:+18182067410" className="hover:text-white transition-colors flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-[#FF6B2C]" />
                  <span className="text-sm sm:text-base">+1 (818) 206-7410</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@calance.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <EnvelopeIcon className="w-5 h-5 text-[#FF6B2C]" />
                  <span className="text-sm sm:text-base">info@calance.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 Calance. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 