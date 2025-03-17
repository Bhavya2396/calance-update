'use client'

import React from 'react'
import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const solutions = [
    { name: 'Apps & Automation', href: '/solutions/apps-automation' },
    { name: 'DevOps', href: '/solutions/devops' },
    { name: 'IT Services', href: '/solutions/it-services' },
    { name: 'Infrastructure', href: '/solutions/infrastructure' },
    { name: 'Security', href: '/solutions/security' },
    { name: 'Business Intelligence', href: '/solutions/business-intelligence' },
    { name: 'AI Solutions', href: '/solutions/ai-solutions' },
    { name: 'Microsoft Solutions', href: '/solutions/microsoft-solutions' },
    { name: 'Integrations', href: '/solutions/integrations' },
    { name: 'Construction', href: '/solutions/construction' },
    { name: 'Blockchain', href: '/solutions/blockchain' },
    { name: 'Staffing', href: '/solutions/staffing' }
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="bg-[#0A1628] border-t border-[#243B61]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-gray-400 text-sm">
              Empowering enterprises with innovative technology solutions for digital transformation.
            </p>
          </div>

          {/* Solutions */}
          <div className="col-span-2">
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {solutions.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@calanceus.com"
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  info@calanceus.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18582430824"
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  +1 (858) 243-0824
                </a>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  11622 El Camino Real, Suite 100<br />
                  San Diego, CA 92130<br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#243B61]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6">
              {company.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Calanceus. All rights reserved.
              </p>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 