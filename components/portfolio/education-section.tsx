interface Experience {
  role: string
  org: string
  period: string
  note: string
  link?: string
}

const experience: Experience[] = [
  {
    role: "student fellow",
    org: "databricks",
    period: "may 2026 – present",
    note: "1 of 39 selected from 5,000+ applicants",
    link: "https://www.databricks.com/blog/announcing-databricks-student-fellows",
  },
  {
    role: "research assistant",
    org: "roy lab",
    period: "oct 2025 – present",
    note: "improving segmentation and classification performance with deep learning on neuroimaging",
  },
  {
    role: "research intern",
    org: "snu vldb lab, seoul national university",
    period: "jun 2024 – sep 2024",
    note: "training-free dimension selection for faster vector search: 1,536 to 64 dims, 95% top-k overlap",
  },
]

const education = [
  {
    degree: "m.s. data science",
    school: "university of washington",
    period: "sep 2025 – mar 2027",
  },
  {
    degree: "b.a. mathematics",
    school: "university of washington",
    period: "sep 2019 – mar 2025",
  },
]

export function EducationSection() {
  return (
    <>
      <ul>
        {experience.map((item) => (
          <li key={item.role + item.period}>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.role} @ {item.org}
              </a>
            ) : (
              `${item.role} @ ${item.org}`
            )}
            <span className="muted">&nbsp;&nbsp;// {item.period}</span>
            <ul>
              <li>{item.note}</li>
            </ul>
          </li>
        ))}
      </ul>

      <h3>education</h3>
      <ul>
        {education.map((item) => (
          <li key={item.degree}>
            {item.degree} @ {item.school}
            <span className="muted">&nbsp;&nbsp;// {item.period}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
