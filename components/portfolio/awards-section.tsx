interface Award {
  title: string
  period: string
  note?: string
  link?: string
}

const awards: Award[] = [
  {
    title: "nairr pilot allocation (project admin)",
    period: "aug 2026",
    note: "awarded 5,000 gpu hours on psc bridges-2, with hugging face and weights & biases support",
    link: "https://submit-nairr.xras.org/current-projects?_requestNumber=NAIRR260107",
  },
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
            {award.note ? (
              <ul>
                <li>{award.note}</li>
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  )
}
