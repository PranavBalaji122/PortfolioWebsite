"use client"

import { motion } from "framer-motion"
import { Github, Calendar } from "lucide-react"

const projects = [
  {
    title: "Local Brain",
    period: "Nov 2025 – Dec 2025",
    description:
    "Built LocalBrain, a full-stack local “second brain” for AI agents that ingests data (Gmail/Slack/history) into a markdown vault and serves personalized context via custom agents + MCP",
    technologies: ["Python", "FastAPI", "Electron", "JavaScript", "Claude API", "MCP"],
    highlights: [
      "Built a local-first “personalization layer” that consolidates personal context from multiple connectors into a readable markdown vault that any AI app can query",
      
      "Designed an LLM-powered ingestion pipeline that converts raw updates into structured markdown, uses Levenshtein fuzzy matching, validates structure, and retries up to 3 times, while storing citation metadata in .json sidecars.",
    ],
    githubUrl: "https://github.com/braindead-dev/localbrain",
  },
  {
    title: "Sports Betting Models",
    period: "Jun 2025 – Aug 2025",
    description:
      "Engineered a Random Forest Regression model using scikit-learn on 8,000+ NBA player logs, predicting points, assists, and rebounds with 65% accuracy.",
    technologies: ["Python", "Pandas", "NumPy", "Odds API", "Scikit-Learn", "PostgreSQL"],
    highlights: [
      "Real-time data pipeline processing 1,200+ game odds per week",
      "Advanced feature engineering reducing MAE by 12%",
      "Live updates every 15 minutes with automated recommendations",
    ],
    githubUrl: "https://github.com/PranavBalaji122/betting",
  },
  {
    title: "AI/ML Movie Library",
    period: "Nov 2024 – Dec 2024",
    description:
      "Developed a full-stack web application that utilizes Django and React to deliver personalized movie recommendations through a custom machine learning model.",
    technologies: ["Python", "Docker", "Git", "React", "Django", "Scikit-Learn", "PostgreSQL"],
    highlights: [
      "Achieved Precision@20 score of 0.75 and Recall@20 of 0.6",
      "RESTful API with JWT authentication",
      "Database of 45,000 movies with efficient retrieval",
    ],
    githubUrl: "https://github.com/PranavBalaji122/Movie-Recomandation-App",
  },
  {
    title: "Portfolio Website",
    period: "Sep 2024 – Nov 2024",
    description:
      "Designed and developed a personal portfolio website utilizing Next.js and CSS, showcasing collections of projects.",
    technologies: ["React", "Next.js", "CSS", "JavaScript"],
    highlights: [
      "Responsive design with modern UI/UX",
      "Optimized performance and SEO",
      "Interactive project showcases",
    ],
    githubUrl: "https://github.com/PranavBalaji122/PortfolioWebsite",
  },
  {
    title: "Flappy Bird Game",
    period: "Nov 2022 – Jan 2023",
    description:
      "Developed a classic Flappy Bird clone using Java with custom graphics, physics engine, and scoring system.",
    technologies: ["Java", "Swing", "AWT", "Object-Oriented Programming"],
    highlights: [
      "Implemented collision detection and gravity physics for realistic bird movement",
      "Created dynamic pipe generation with randomized heights and spacing",
      "Built high-score tracking system with persistent data storage",
    ],
    githubUrl: "https://github.com/PranavBalaji122/flappy-bird",
  },
  {
    title: "Quebec Election Data Analysis",
    period: "Nov 2023 – Jan 2024",
    description:
      "Scraped and merged 14 different datasets on election polls and demographics to conduct comprehensive Quebec election analysis.",
    technologies: ["R", "Kaggle", "tidyverse", "ggplot2", "Statistical Modeling"],
    highlights: [
      "Analyzed factors like age, gender, ethnicity, region, income, and housing to predict voting patterns",
      "Used linear and logistic regression with KNN clustering achieving 82% accuracy across 27 political parties",
      "Focused on visual data presentation using tidyverse and ggplot2 for clearer insights",
    ],
    githubUrl: "https://github.com/PranavBalaji122/quebec-election",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex space-x-2">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors inline-flex"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} className="text-blue-400" />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4 text-gray-400">
                <Calendar size={14} />
                <span className="text-sm">{project.period}</span>
              </div>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-start space-x-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
