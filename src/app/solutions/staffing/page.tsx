'use client'

import { motion } from 'framer-motion'
import { 
  UserGroupIcon,
  ArrowRightIcon,
  UserPlusIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  ClockIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import GlowingButton from '@/components/GlowingButton'

const features = [
  {
    title: "IT Talent Search",
    description: "Find the perfect IT professionals with our comprehensive talent search and matching platform.",
    icon: <UserPlusIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/staffing/talent-search.svg",
    metrics: { 
      "Match Rate": "95%",
      "Time to Hire": "-60%",
      "Retention": "92%"
    }
  },
  {
    title: "Team Augmentation",
    description: "Scale your development teams quickly with skilled professionals who integrate seamlessly.",
    icon: <UserGroupIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/staffing/team-augmentation.svg",
    metrics: {
      "Team Scaling": "2-4 weeks",
      "Performance": "95%",
      "Client Satisfaction": "98%"
    }
  },
  {
    title: "Skill Assessment",
    description: "Comprehensive technical assessment and vetting process to ensure top-quality talent.",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/staffing/skill-assessment.svg",
    metrics: {
      "Success Rate": "98%",
      "Skill Match": "95%",
      "Quality Score": "9.2/10"
    }
  },
  {
    title: "Managed Teams",
    description: "End-to-end team management and support for seamless project execution.",
    icon: <BuildingOfficeIcon className="w-6 h-6" />,
    illustration: "/images/illustrations/staffing/managed-teams.svg",
    metrics: {
      "Project Success": "97%",
      "Team Efficiency": "+75%",
      "Cost Savings": "35%"
    }
  }
]

const technologies = [
  "Full Stack Development",
  "Cloud & DevOps",
  "Data Science & AI",
  "Mobile Development",
  "UI/UX Design",
  "QA & Testing",
  "Project Management",
  "Business Analysis"
]

const successMetrics = [
  {
    metric: "95%",
    label: "Placement Success Rate"
  },
  {
    metric: "48hrs",
    label: "Average Response Time"
  },
  {
    metric: "92%",
    label: "Long-term Retention"
  },
  {
    metric: "4.9/5",
    label: "Client Satisfaction"
  }
]

export default function Staffing() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold mb-6"
              >
                Expert{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
                  IT Staffing
                </span>{" "}
                Solutions
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-xl mb-8"
              >
                Build high-performing teams with our expert IT staffing solutions. From talent search to team management, we deliver the right expertise for your success.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <GlowingButton href="#contact" className="bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
                  Find Talent
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
                
                <GlowingButton href="#features" className="bg-[#1A2B44] hover:bg-[#243B61]">
                  Our Services
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] hidden lg:block"
            >
              <Image
                src="/images/illustrations/staffing/hero.svg"
                alt="IT Staffing Solutions"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61] hover:border-[#9333EA]/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#9333EA]/10 to-[#C084FC]/10 text-[#9333EA]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">
                  {feature.description}
                </p>

                <div className="relative h-[200px] mb-6">
                  <Image
                    src={feature.illustration}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(feature.metrics).map(([label, value]) => (
                    <div key={label} className="bg-[#0A1628] rounded-xl p-4 transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="text-xl font-bold text-[#9333EA]">{value}</div>
                      <div className="text-sm text-gray-400">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Expertise{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
                We Provide
              </span>
            </h2>
            <p className="text-gray-400">Top talent across all major technology domains</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-xl p-4 text-center border border-[#243B61] hover:border-[#9333EA]/20 transition-all duration-300"
              >
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
                Track Record
              </span>
            </h2>
            <p className="text-gray-400">Proven success in IT staffing and talent solutions</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
                  {item.metric}
                </div>
                <div className="text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA]/10 to-[#C084FC]/5"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-0"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
                  Build Your Team
                </span>
                ?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Get in touch with our staffing experts and discover how we can help you build the perfect team for your needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[#9333EA]/10 to-[#C084FC]/10">
                    <ClockIcon className="w-6 h-6 text-[#9333EA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Quick Response</h3>
                    <p className="text-gray-400">48-hour response guarantee</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[#9333EA]/10 to-[#C084FC]/10">
                    <UserGroupIcon className="w-6 h-6 text-[#9333EA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Matching</h3>
                    <p className="text-gray-400">95% success rate in first match</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A2B44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#243B61]"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#0A1628] rounded-lg border border-[#243B61] focus:border-[#9333EA] focus:ring-1 focus:ring-[#9333EA] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#0A1628] rounded-lg border border-[#243B61] focus:border-[#9333EA] focus:ring-1 focus:ring-[#9333EA] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium mb-2">
                    Requirements
                  </label>
                  <textarea
                    id="requirements"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0A1628] rounded-lg border border-[#243B61] focus:border-[#9333EA] focus:ring-1 focus:ring-[#9333EA] transition-colors"
                    placeholder="Tell us about your team requirements"
                  />
                </div>
                <GlowingButton href="#contact" className="w-full bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </GlowingButton>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 