import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'
import Header from '@/components/Header'

export default function KubotaMobileCase() {
  return (
    <main className="bg-[#0A1628] min-h-screen">
      <Header />
      
      <div className="page-content">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
                Kubota Mobile Web Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Transforming Kubota's web presence with modern, responsive design and enhanced mobile capabilities
              </p>
            </div>
            <div className="mt-12">
              <Image
                src="/images/illustrations/case-studies/kubota-mobile/hero.svg"
                alt="Mobile Web Services"
                width={500}
                height={400}
                priority
                className="w-full max-w-3xl mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Client Context */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Client Context</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-6">
                  Kubota, a leading manufacturer of construction and agricultural equipment, needed to modernize their web presence to better serve their mobile users. With increasing mobile traffic and evolving user expectations, they required a comprehensive mobile-first solution.
                </p>
                <p className="text-gray-300">
                  The challenge was to create a seamless, responsive experience across all devices while maintaining high performance and accessibility standards.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Key Requirements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Responsive design for all device sizes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Optimized performance for mobile networks
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Enhanced user experience and navigation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Integration with existing backend systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-300 mb-6">
                  We implemented a comprehensive mobile-first solution using modern web technologies and best practices:
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-white text-sm">1</span>
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">Responsive Framework</h4>
                      <p>Built with React and modern CSS for seamless adaptation across devices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-white text-sm">2</span>
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">API Integration</h4>
                      <p>RESTful and GraphQL APIs for efficient data handling</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-white text-sm">3</span>
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">Performance Optimization</h4>
                      <p>Implemented lazy loading, caching, and image optimization</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/illustrations/case-studies/kubota-mobile/solution.svg"
                  alt="Technical Architecture"
                  width={500}
                  height={400}
                  priority
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Impact & Results</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/illustrations/case-studies/kubota-mobile/results.svg"
                  alt="Results and Benefits"
                  width={500}
                  height={400}
                  priority
                  className="w-full"
                />
              </div>
              <div>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">95% Performance Score</h4>
                      <p className="text-gray-300">Achieved excellent performance metrics across all devices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">60% Increase in Mobile Traffic</h4>
                      <p className="text-gray-300">Significant growth in mobile user engagement</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">45% Higher User Engagement</h4>
                      <p className="text-gray-300">Improved user interaction and session duration</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Mobile Experience?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let us help you create a modern, responsive web solution that delights your users and drives business growth.
            </p>
            <GlowingButton href="/contact">
              Schedule a Consultation
            </GlowingButton>
          </div>
        </section>
      </div>
    </main>
  )
} 