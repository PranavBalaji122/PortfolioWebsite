"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "HTML/CSS", "SQL", "MATLAB", "R", "Dart", "Groovy"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Spring Boot", "Flutter", "Angular", "Node.js", "Django", "Fast-API", "Material-UI", "Jenkins"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Docker", "Postman API", "Android Studio", "AWS", "Google Cloud", "VS Code", "Eclipse", "Jira"],
  },
  {
    title: "Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib", "scikit-learn", "dplyr", "tidyverse", "ggplot2"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-blue-500/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
