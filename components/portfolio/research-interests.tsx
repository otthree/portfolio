import { Badge } from "@/components/ui/badge"

const interests = [
  "Deep Learning",
  "Machine Learning",
  "Multimodal Data Analysis",
  "Embedding Optimization",
]

export function ResearchInterests() {
  return (
    <section id="research">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        Research Interests
      </h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {interests.map((interest) => (
          <Badge
            key={interest}
            variant="secondary"
            className="text-xs font-normal px-3 py-1 bg-secondary text-secondary-foreground"
          >
            {interest}
          </Badge>
        ))}
      </div>
    </section>
  )
}
