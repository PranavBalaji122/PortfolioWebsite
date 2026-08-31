export default function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string
  label: string
  title: string
  description?: string
}) {
  const headingId = `${label.toLowerCase().replaceAll(" ", "-")}-title`

  return (
    <header className="section-heading">
      <div className="section-index mono-label">
        <span>{number}</span>
        <i aria-hidden="true" />
        <span>{label}</span>
      </div>
      <div className="section-title-row">
        <h2 id={headingId}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  )
}
