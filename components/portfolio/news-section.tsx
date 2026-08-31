const newsItems = [
  {
    date: "2026.02",
    content: "Awarded 1st Place at Databricks x UW Hackathon with TerraCast, a county-level crop yield prediction system.",
  },
  {
    date: "2025.12",
    content: "Completed NFL Player Trajectory Prediction project and WatchDawg Seattle Crime Analytics Dashboard.",
  },
  {
    date: "2025.10",
    content: "Joined Roy Lab at University of Washington as Researcher, working on cognitive reserve modeling from neuroimaging data.",
  },
  {
    date: "2025.09",
    content: "Started M.S. in Data Science at University of Washington.",
  },
  {
    date: "2024.09",
    content: "Completed Research Intern at SNU VLDB Lab, Seoul National University.",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="bg-ink-800 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
          02 &nbsp;/&nbsp; News
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          What I&apos;ve been up to
        </h2>

        <ol className="relative mt-14 max-w-3xl">
          <div aria-hidden className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />
          {newsItems.map((item) => (
            <li key={item.date} className="relative pb-8 pl-8 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-[7px] size-2 -translate-x-1/2 rounded-full bg-accent"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-alt">
                {item.date}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                {item.content}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
