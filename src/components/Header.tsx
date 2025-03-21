'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRightIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'

type SearchResult = {
  title: string;
  type: 'case-study' | 'solution' | 'partner' | 'tool' | 'page';
  url: string;
  keywords: string[];
  description?: string;
};

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // Comprehensive search data
  const searchData: SearchResult[] = [
    // Solutions
    { 
      title: 'Apps & Automation',
      type: 'solution',
      url: '/solutions/apps-automation',
      keywords: ['automation', 'applications', 'software development', 'digital transformation', 'enterprise apps'],
      description: 'Custom application development and automation solutions for enterprises'
    },
    { 
      title: 'DevOps Solutions',
      type: 'solution',
      url: '/solutions/devops',
      keywords: ['ci/cd', 'automation', 'kubernetes', 'docker', 'infrastructure as code', 'devsecops'],
      description: 'End-to-end DevOps implementation and automation'
    },
    {
      title: 'IT Services',
      type: 'solution',
      url: '/solutions/it-services',
      keywords: ['managed services', 'it support', 'infrastructure', 'help desk', 'technical support'],
      description: 'Comprehensive IT services and support for enterprises'
    },
    {
      title: 'Infrastructure Solutions',
      type: 'solution',
      url: '/solutions/infrastructure',
      keywords: ['cloud', 'networking', 'servers', 'storage', 'data center', 'infrastructure management'],
      description: 'Enterprise infrastructure solutions and management'
    },
    {
      title: 'Security Solutions',
      type: 'solution',
      url: '/solutions/security',
      keywords: ['cybersecurity', 'network security', 'data protection', 'compliance', 'security assessment'],
      description: 'Enterprise security solutions and cybersecurity services'
    },
    {
      title: 'Business Intelligence',
      type: 'solution',
      url: '/solutions/business-intelligence',
      keywords: ['analytics', 'data visualization', 'reporting', 'dashboards', 'insights'],
      description: 'Business intelligence and analytics solutions'
    },
    { 
      title: 'AI Solutions',
      type: 'solution',
      url: '/solutions/ai',
      keywords: ['artificial intelligence', 'machine learning', 'automation', 'data analytics', 'predictive analysis'],
      description: 'Enterprise AI solutions for automation and intelligent decision making'
    },
    {
      title: 'Microsoft Solutions',
      type: 'solution',
      url: '/solutions/microsoft-solutions',
      keywords: ['microsoft', 'azure', 'office 365', 'sharepoint', 'dynamics', 'power platform'],
      description: 'Microsoft technology solutions and implementations'
    },
    {
      title: 'Enterprise Integration',
      type: 'solution',
      url: '/solutions/integrations',
      keywords: ['api integration', 'data sync', 'erp', 'system integration', 'workflow automation'],
      description: 'Connect and synchronize your enterprise systems'
    },
    {
      title: 'Construction Solutions',
      type: 'solution',
      url: '/solutions/construction',
      keywords: ['construction', 'procore', 'project management', 'construction tech', 'building'],
      description: 'Technology solutions for the construction industry'
    },
    {
      title: 'Blockchain Solutions',
      type: 'solution',
      url: '/solutions/blockchain',
      keywords: ['blockchain', 'smart contracts', 'web3', 'cryptocurrency', 'distributed ledger'],
      description: 'Enterprise blockchain solutions and implementations'
    },
    {
      title: 'Staffing Solutions',
      type: 'solution',
      url: '/solutions/staffing',
      keywords: ['it staffing', 'talent search', 'recruitment', 'team augmentation', 'managed teams'],
      description: 'IT staffing and talent solutions for enterprises'
    },

    // Case Studies
    {
      title: 'AI-Enhanced Clinical Trials Platform',
      type: 'case-study',
      url: '/case-studies/clinical-trials',
      keywords: ['healthcare', 'ai/ml', 'clinical trials', 'automation', 'medical'],
      description: 'Intelligent platform for automated complexity scoring in clinical trials'
    },
    {
      title: 'DevOps Transformation for Spotmentor',
      type: 'case-study',
      url: '/case-studies/spotmentor-devops',
      keywords: ['devops', 'aws', 'kubernetes', 'ci/cd', 'automation'],
      description: 'Comprehensive DevOps implementation with automated pipelines'
    },
    {
      title: 'Secure FinTech Infrastructure',
      type: 'case-study',
      url: '/case-studies/alpha-fortress',
      keywords: ['fintech', 'security', 'devops', 'aws', 'zero-trust'],
      description: 'Zero-trust architecture implementation for fintech'
    },
    {
      title: 'Construction Management Platform',
      type: 'case-study',
      url: '/case-studies/construction-platform',
      keywords: ['construction', 'procore', 'project management', 'integration'],
      description: 'Integrated construction management platform implementation'
    },

    // Tools & Products
    {
      title: 'Procore Integration Tools',
      type: 'tool',
      url: '/solutions/procore-tools',
      keywords: ['procore', 'construction', 'erp', 'integration', 'automation'],
      description: 'Enterprise-grade Procore integration solutions'
    },
    {
      title: 'Automation Tools',
      type: 'tool',
      url: '/tools/automation',
      keywords: ['rpa', 'workflow', 'business process', 'automation', 'integration'],
      description: 'Business process automation tools and solutions'
    },

    // Company Pages
    {
      title: 'About Us',
      type: 'page',
      url: '/about',
      keywords: ['company', 'team', 'mission', 'values', 'expertise'],
      description: 'Learn about our company and mission'
    },
    {
      title: 'Case Studies',
      type: 'page',
      url: '/case-studies',
      keywords: ['portfolio', 'projects', 'success stories', 'implementations'],
      description: 'Explore our successful client implementations'
    },
    {
      title: 'Careers',
      type: 'page',
      url: '/careers',
      keywords: ['jobs', 'opportunities', 'employment', 'work', 'positions'],
      description: 'Join our team of technology experts'
    },
    {
      title: 'Contact',
      type: 'page',
      url: '/contact',
      keywords: ['contact', 'support', 'sales', 'inquiry', 'help'],
      description: 'Get in touch with our team'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingDown = prevScrollPos < currentScrollPos
      const isScrolledPastThreshold = currentScrollPos > 10

      if (!isMobileMenuOpen) {
        setVisible(!isScrollingDown || !isScrolledPastThreshold)
      }
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isMobileMenuOpen])

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Enhanced search logic
    const searchTerms = query.toLowerCase().split(' ');
    const filtered = searchData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
      const keywordMatch = item.keywords.some(keyword =>
        searchTerms.some(term => keyword.toLowerCase().includes(term))
      );
      const descriptionMatch = item.description?.toLowerCase().includes(query.toLowerCase());
      
      return titleMatch || keywordMatch || descriptionMatch;
    });

    // Sort results by relevance
    const sortedResults = filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const queryLower = query.toLowerCase();
      
      // Exact matches first
      if (aTitle === queryLower && bTitle !== queryLower) return -1;
      if (bTitle === queryLower && aTitle !== queryLower) return 1;
      
      // Starts with query next
      if (aTitle.startsWith(queryLower) && !bTitle.startsWith(queryLower)) return -1;
      if (bTitle.startsWith(queryLower) && !aTitle.startsWith(queryLower)) return 1;
      
      return 0;
    });

    setSearchResults(sortedResults.slice(0, 8)); // Limit to top 8 results
  };

  const navigationLinks = [
    { href: '/solutions', label: 'Solutions' },
    { href: '/about', label: 'About Us' },
    { href: '/case-studies', label: 'Case Studies' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] bg-[#0A1628]/80 backdrop-blur-sm border-b border-[#243B61] transition-all duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center relative z-[101]">
              <Image
                src="/images/illustrations/Screenshot_2025-01-16_at_4.36.53_AM-removebg-preview.png"
                alt="Calance"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </a>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Search Bar */}
              <div ref={searchRef} className="relative">
                <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-48'}`}>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      onFocus={() => setIsSearchOpen(true)}
                      className="w-full bg-[#1A2B44] text-sm text-white placeholder-gray-400 rounded-lg pl-8 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-[#FF6B2C]"
                    />
                    <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    {searchQuery && (
                      <button
                        onClick={() => handleSearch('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                      >
                        <XMarkIcon className="w-4 h-4 text-gray-400 hover:text-white" />
                      </button>
                    )}
                  </div>
                </div>
                {/* Search Results Dropdown */}
                <AnimatePresence>
                  {isSearchOpen && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-80 bg-[#1A2B44] border border-[#243B61] rounded-lg shadow-lg overflow-hidden"
                    >
                      {searchResults.map((result, index) => (
                        <a
                          key={index}
                          href={result.url}
                          className="block px-4 py-3 hover:bg-[#243B61] transition-colors"
                          onClick={() => setIsSearchOpen(false)}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="font-medium text-white">{result.title}</span>
                              <span className="ml-2 text-xs text-[#FF6B2C] capitalize">({result.type})</span>
                              {result.description && (
                                <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                                  {result.description}
                                </p>
                              )}
                            </div>
                            <ArrowRightIcon className="w-4 h-4 text-gray-400 mt-1 group-hover:text-white" />
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {navigationLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="/contact" 
                className="inline-flex items-center px-4 py-2 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Contact
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden relative z-[101] p-2 rounded-lg bg-[#1A2B44] text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  className="absolute top-2 left-0 right-0 h-0.5 bg-current rounded-full"
                  variants={{
                    open: { rotate: 45, y: 6 },
                    closed: { rotate: 0, y: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute top-4 left-0 right-0 h-0.5 bg-current rounded-full"
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute top-6 left-0 right-0 h-0.5 bg-current rounded-full"
                  variants={{
                    open: { rotate: -45, y: -6 },
                    closed: { rotate: 0, y: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[99] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={toggleMobileMenu}
            />
            
            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.3
              }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-[#0A1628] border-l border-[#243B61]"
            >
              <motion.div 
                className="h-full px-4 py-6 overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="space-y-6">
                  {navigationLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className="block text-lg text-gray-300 hover:text-white transition-colors font-medium py-3"
                        onClick={toggleMobileMenu}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <a 
                      href="/contact" 
                      className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#FF6B2C] text-white font-medium hover:opacity-90 transition-opacity text-lg"
                      onClick={toggleMobileMenu}
                    >
                      Contact
                      <ArrowRightIcon className="w-5 h-5" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  )
} 