import { projects } from "../data/portfolio"
import ProjectAccordion from "./ProjectAccordion"
import SectionHeading from "./SectionHeading"

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.tier === "featured")

  return (
    <section
      id="projects"
      className="content-section section-frame projects-section"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        number="02"
        label="Projects"
        title="Things I&apos;ve shipped."
        description="A small set of systems with a clear problem, technical depth, and evidence behind the result."
      />

      <ProjectAccordion projects={featuredProjects} />
    </section>
  )
}
