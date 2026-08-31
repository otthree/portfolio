import { ArrowUpRight } from "lucide-react"

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
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">
        Awards
      </h3>
      <div className="relative mt-8">
        <div aria-hidden className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200" />
        {awards.map((award) => (
          <div key={award.title} className="relative pb-8 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute left-0 top-[7px] size-2 -translate-x-1/2 rounded-full bg-accent-ink"
            />
            {award.link ? (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-1.5 text-lg font-semibold text-neutral-900 transition-colors hover:text-accent-ink"
              >
                {award.title}
                <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ) : (
              <p className="text-lg font-semibold text-neutral-900">{award.title}</p>
            )}
            <p className="mt-1 flex flex-wrap items-baseline gap-x-3 text-sm text-neutral-600">
              <span>{award.org}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                {award.date}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
