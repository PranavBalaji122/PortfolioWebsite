import { experiences } from "../data/portfolio"
import ExperienceAccordion from "./ExperienceAccordion"
import SectionHeading from "./SectionHeading"

export default function Experience() {
  return (
    <section id="work" className="content-section section-frame" aria-labelledby="work-title">
      <SectionHeading
        number="01"
        label="Work"
        title="Experience."
        description="Infrastructure, developer tooling, and AI systems measured by the work they changed."
      />
      <ExperienceAccordion experiences={experiences} />
    </section>
  )
}
