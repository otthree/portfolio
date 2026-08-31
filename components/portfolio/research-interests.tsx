const interests = [
  "Deep Learning",
  "Machine Learning",
  "Multimodal Data Analysis",
  "Embedding Optimization",
]

export function ResearchInterests() {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
        Research Interests
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {interests.map((interest) => (
          <li
            key={interest}
            className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-[13px] text-white/70"
          >
            {interest}
          </li>
        ))}
      </ul>
    </div>
  )
}
