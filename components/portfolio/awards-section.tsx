interface Award {
  title: string
  period: string
  link?: string
}

const awards: Award[] = [
  {
    title: "1st place, databricks x uw hackathon",
    period: "feb 2026",
    link: "https://devpost.com/software/terracast",
  },
]

export function AwardsSection() {
  return (
    <>
      <h3>awards</h3>
      <ul>
        {awards.map((award) => (
          <li key={award.title}>
            {award.link ? (
              <a href={award.link} target="_blank" rel="noopener noreferrer">
                {award.title}
              </a>
            ) : (
              award.title
            )}
            <span className="muted">&nbsp;&nbsp;// {award.period}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
