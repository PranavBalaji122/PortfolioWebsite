"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { ExperienceItem } from "../data/portfolio"

export default function ExperienceAccordion({ experiences }: { experiences: ExperienceItem[] }) {
  return (
    <Accordion className="editorial-accordion" type="single" collapsible defaultValue="chewy">
      {experiences.map((experience) => (
        <AccordionItem className="editorial-item" value={experience.id} key={experience.id}>
          <AccordionTrigger className="editorial-trigger">
            <span className="editorial-period mono-label">{experience.period}</span>
            <span className="editorial-primary">
              <strong>{experience.company}</strong>
              <small>{experience.role}</small>
            </span>
            <span className="editorial-summary">{experience.summary}</span>
            <span className="editorial-location mono-label">{experience.location}</span>
          </AccordionTrigger>
          <AccordionContent className="editorial-content">
            <div className="editorial-content-grid">
              <ul>
                {experience.proof.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tag-list" aria-label={`${experience.company} technologies`}>
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
