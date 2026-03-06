interface Award {
  title: string
  org: string
  date: string
  link?: string
}

const awards: Award[] = [
  {
    title: "1st Place — Databricks x UW Hackathon",
    org: "University of Washington",
    date: "2026. 02",
    link: "https://devpost.com/software/terracast",
  },
]

export function AwardsSection() {
  return (
    <section id="awards">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        Awards
      </h2>
      <div className="mt-4 space-y-3">
        {awards.map((award, index) => (
          <div key={index} className="flex gap-4 text-sm">
            <span className="shrink-0 w-[7.5rem] font-mono text-xs text-muted-foreground pt-0.5">
              {award.date}
            </span>
            <div>
              {award.link ? (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground text-sm hover:text-primary transition-colors"
                >
                  {award.title}
                </a>
              ) : (
                <p className="font-medium text-foreground text-sm">{award.title}</p>
              )}
              <p className="text-xs text-muted-foreground">{award.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
