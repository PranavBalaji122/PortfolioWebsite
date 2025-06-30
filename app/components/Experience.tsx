"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "AI Engineer Intern",
    company: "Staples",
    location: "Boston, MA",
    period: "Jun 2025 – Aug 2025",
    description: "Incoming Software Engineering Intern Summer 2025 (AI Intern)",
    isUpcoming: true,
  },
  {
    title: "Software Developer Intern",
    company: "Indian Institute of Technology Bombay",
    location: "Bombay, IN",
    period: "July 2024 – Aug 2024",
    description: [
      "Developed a custom data processing workflow using R programming language and the dplyr library, enabling efficient analysis of large-scale wage data from the National Survey of the Government of India (over 20,000 individuals)",
      "Created and applied advanced statistical models using R to identify key factors influencing 5% wage distribution",
      "Designed and implemented a customized data visualization toolkit using ggplot, generating 4 comprehensive charts and graphs",
      "Wrote a detailed report summarizing the analysis, presenting key findings, and provided recommendations",
    ],
  },
  {
    title: "Robotics Mentor / Lead Programmer",
    company: "First Robotics #15089",
    location: "Boston, MA",
    period: "October 2021 – Jan 2024",
    description: [
      "Designed and implemented advanced odometry programs using Java, enhancing autonomous robot functions by 80%",
      "Engineered and coded presentation to educate over 75 students from 7th to 10th grade on the four pillars of OOP",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-10 top-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900"></div>

              <div
                className={`bg-gradient-to-br ${exp.isUpcoming ? "from-green-500/20 to-blue-500/20" : "from-purple-500/20 to-pink-500/20"} rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300`}
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-purple-400 mb-2">{exp.company}</h4>
                  </div>
                  {exp.isUpcoming && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">
                      Upcoming
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {Array.isArray(exp.description) ? (
                  <ul className="space-y-2 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300">{exp.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
