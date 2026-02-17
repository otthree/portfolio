import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: "NFL Player Trajectory Prediction - Framework Comparison",
    description:
      "Implemented structurally equivalent GRU-based encoder-decoder models in PyTorch and TensorFlow for NFL player trajectory prediction. Conducted rigorous comparative analysis revealing significant autoregressive inference divergence despite structural equivalence (PyTorch RMSE: 1.55 vs TensorFlow: 19.47 on validation set). Authored technical report contextualizing empirical findings with established literature on exposure bias and error accumulation.",
    tags: ["PyTorch", "TensorFlow", "Scikit-learn", "Kaggle", "Deep Learning"],
    link: "https://github.com/otthree/NFL-Prediction-Model-Comparison",
  },
  {
    title: "WatchDawg - Seattle Crime Analytics Dashboard",
    description:
      "Developed interactive web dashboard analyzing 17+ years of Seattle Police Department crime data (500K+ incidents) with real-time filtering and geospatial visualization capabilities. Engineered 11-stage data cleaning pipeline and memory-optimized architecture enabling stable deployment on resource-constrained environment (512MB RAM), reducing dataset noise by 35%. Deployed production application on Render with 99%+ uptime.",
    tags: ["EDA", "Data Visualization"],
    link: "https://github.com/otthree/Watchdawg_app",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        Projects
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="size-3.5 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[10px] font-normal px-2 py-0.5 text-muted-foreground border-border"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
