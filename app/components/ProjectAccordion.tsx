"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { ProjectItem } from "../data/portfolio"

export default function ProjectAccordion({ projects }: { projects: ProjectItem[] }) {
  return (
    <Accordion className="project-accordion" type="single" collapsible defaultValue="localbrain">
      {projects.map((project) => (
        <AccordionItem className="project-item" value={project.id} key={project.id}>
          <AccordionTrigger className="project-trigger">
            <span className="project-number mono-label">{project.eyebrow.slice(0, 2)}</span>
            <span className="project-primary">
              <span className="mono-label">{project.eyebrow.slice(5)}</span>
              <strong>{project.title}</strong>
            </span>
            <span className="project-summary">{project.summary}</span>
          </AccordionTrigger>
          <AccordionContent className="project-content">
            <div className="project-content-grid">
              <div>
                <p className="mono-label">Signals</p>
                <ul>
                  {project.proof.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="project-meta">
                <p className="mono-label">Stack</p>
                <div className="tag-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
