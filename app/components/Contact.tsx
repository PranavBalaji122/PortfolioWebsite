import { socialLinks } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-frame" aria-labelledby="contact-title">
      <SectionHeading number="04" label="Contact" title="Let&apos;s build something useful." />

      <div className="contact-grid">
        <p>
          I&apos;m interested in software engineering roles where reliable systems, applied AI, and
          thoughtful product work meet.
        </p>
        <a className="contact-email" href="mailto:pranavbalaji9276@gmail.com">
          pranavbalaji9276@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </div>

      <footer className="site-footer">
        <p className="mono-label">© 2026 Pranav Balaji</p>
        <div>
          <a href="/Pranav-Balaji-Resume.pdf" target="_blank" rel="noreferrer">
            Resume <span aria-hidden="true">↗</span>
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p className="mono-label">Next.js / Tailwind / Radix</p>
      </footer>
    </section>
  )
}
