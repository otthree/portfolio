const newsItems = [
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
    <section id="news">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        News
      </h2>
      <ul className="mt-4 space-y-3">
        {newsItems.map((item, index) => (
          <li key={index} className="flex gap-4 text-sm">
            <span className="shrink-0 w-[5.5rem] font-mono text-xs text-muted-foreground pt-0.5">
              {item.date}
            </span>
            <span className="text-foreground/85 leading-relaxed">
              {item.content}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
