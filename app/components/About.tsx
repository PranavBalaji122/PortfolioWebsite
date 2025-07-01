"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Science student at Purdue University with a strong focus on artificial
              intelligence and machine learning. My journey in tech has led me through various exciting projects and
              internships where I've applied cutting-edge technologies to solve real-world problems.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              From developing sports betting models with machine learning to creating full-stack applications, I love
              turning complex ideas into elegant solutions. I'm particularly interested in the intersection of AI and
              practical applications.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <GraduationCap className="text-blue-400" size={20} />
                <span>Bachelor's in Computer Science, Purdue University</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Calendar className="text-blue-400" size={20} />
                <span>Expected Graduation: May 2027</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="text-blue-400" size={20} />
                <span>West Lafayette, Indiana</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400">Purdue University</h4>
                  <p className="text-gray-300">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-400">Expected May 2027</p>
                </div>
                <div className="mt-6">
                  <h5 className="font-semibold text-white mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Python Programming",
                      "Data Science",
                      "C Programming",
                      "Discrete Mathematics",
                      "Linear Algebra",
                      "MATLAB Computing",
                    ].map((course) => (
                      <span key={course} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
