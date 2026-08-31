import { skillGroups } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

export default function Skills() {
  return (
    <section id="about" className="content-section section-frame" aria-labelledby="skills-title">
      <SectionHeading number="03" label="Skills" title="Skills." />

      <div className="skills-catalog" aria-label="Technical skills">
        {skillGroups.map((group) => (
          <section className="skills-catalog-group" key={group.title}>
            <h3 className="mono-label">{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
