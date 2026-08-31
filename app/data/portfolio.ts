export type ExperienceItem = {
  id: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  proof: string[]
  technologies: string[]
}

export type ProjectLink = {
  label: string
  href: string
}

export type ProjectItem = {
  id: string
  title: string
  eyebrow: string
  tier: "featured" | "archive"
  summary: string
  proof: string[]
  technologies: string[]
  links: ProjectLink[]
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type SocialLink = {
  label: string
  href: string
}

export const navigation: { label: string; href: string; newTab?: boolean }[] = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/PranavBalaji122" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pranav-balaji1321" },
  { label: "Email", href: "mailto:pranavbalaji9276@gmail.com" },
]

export const experiences: ExperienceItem[] = [
  {
    id: "chewy",
    company: "Chewy",
    role: "Software Engineer Intern",
    period: "Jun - Aug 2026",
    location: "Boston, MA",
    summary:
      "Cloud platform migration and AI-assisted incident response for systems supporting thousands of customer-service agents.",
    proof: [
      "Led a Java/Spring Boot application migration from AWS ECS to EKS, redesigning backend, frontend, API-gateway, and deployment configuration for 5,000+ Chewy agents while cutting costs by $100K per year.",
      "Built and validated Docker/EKS CI/CD workflows for a phased cutover across 18 environments with zero downtime.",
      "Engineered an AI on-call agent that monitors Slack incidents and inspects code and logs, reducing root-cause response time from 2 hours to 5 minutes and saving 10+ hours per week.",
    ],
    technologies: ["Java", "Spring Boot", "AWS", "EKS", "Docker", "CI/CD", "Applied AI"],
  },
  {
    id: "staples",
    company: "Staples Inc.",
    role: "Software Engineer Intern",
    period: "Jun - Aug 2025",
    location: "Boston, MA",
    summary:
      "Developer tooling, analytics, and release-management modernization across large-scale internal systems.",
    proof: [
      "Built an AI Jenkins agent that diagnosed 60+ daily pipeline failures from build logs and stack traces, cutting troubleshooting time by 60% and saving 5+ engineering hours per week.",
      "Developed a RAG analytics chatbot over 1M+ live database rows that generated dashboards and reports, saving 2+ hours per reporting cycle.",
      "Migrated release management for 100+ microservices from JSP to React and Spring Boot, modernizing the deployment workflow for release engineers.",
    ],
    technologies: ["React", "Spring Boot", "Jenkins", "RAG", "SQL", "Microservices"],
  },
  {
    id: "iit",
    company: "Indian Institute of Technology",
    role: "Research Intern",
    period: "Jun - Aug 2024",
    location: "Mumbai, IN",
    summary:
      "Statistical research and automated data processing for large-scale national wage survey analysis.",
    proof: [
      "Built an R/dplyr pipeline to clean and process 20K+ wage survey records for statistical analysis.",
      "Created four ggplot visualizations and automated reporting workflows, reducing manual analysis time by 30%.",
    ],
    technologies: ["R", "dplyr", "ggplot2", "Regression", "Data pipelines"],
  },
]

export const projects: ProjectItem[] = [
  {
    id: "localbrain",
    title: "LocalBrain",
    eyebrow: "01 / Personal context infrastructure",
    tier: "featured",
    summary:
      "A local-first second brain that gives AI agents durable, inspectable context from a user's own data.",
    proof: [
      "Stores 5,000+ user data points in a human-readable local knowledge base.",
      "Serves context across 1,000+ documents with 90%+ retrieval accuracy and sub-2-second query response times.",
      "Normalizes data from 3+ connector sources, including Gmail and Slack, with automatic ten-minute synchronization.",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "Electron", "MCP", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/braindead-dev/localbrain" }],
  },
  {
    id: "chipcount",
    title: "ChipCount",
    eyebrow: "02 / Full-stack product",
    tier: "featured",
    summary:
      "A deployed poker settlement product that turns cash-ins and cash-outs into clear, shareable payment flows.",
    proof: [
      "Supports authentication, profiles, persistent game tracking, leaderboards, and spectator-friendly share links.",
      "Uses a two-pointer settlement algorithm to minimize the transactions required to balance a game.",
      "Offers a private, account-free quick-game mode with URL-backed state and interactive balance visualizations.",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Zod", "Recharts"],
    links: [
      { label: "Live product", href: "https://chipcount.pranavbalaji.org" },
      { label: "GitHub", href: "https://github.com/PranavBalaji122/chipCount" },
    ],
  },
  {
    id: "betting",
    title: "Sports Betting Models",
    eyebrow: "03 / Applied machine learning",
    tier: "featured",
    summary:
      "A real-time NBA player-prop pipeline that combines historical performance, injuries, and market odds.",
    proof: [
      "Trained Random Forest regression models on 8,000+ player logs to predict points, assists, and rebounds with 65% accuracy.",
      "Processes 1,200+ weekly odds, 100+ daily injury updates, and live player data through PostgreSQL-backed pipelines.",
      "Reduced mean absolute error by 12% over baseline with player-consistency feature engineering.",
    ],
    technologies: ["Python", "Pandas", "scikit-learn", "PostgreSQL", "The Odds API"],
    links: [{ label: "GitHub", href: "https://github.com/PranavBalaji122/betting" }],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "Java", "Go", "C++", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "FastAPI", "Spring Boot", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    title: "Data / AI",
    skills: ["PyTorch", "RAG", "LLM workflows", "scikit-learn", "Pandas"],
  },
  {
    title: "Cloud / infrastructure",
    skills: ["AWS", "EKS", "Docker", "Jenkins", "CI/CD", "Microservices"],
  },
]
