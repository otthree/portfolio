import { ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: "TerraCast -- Databricks x UW Hackathon (1st Place)",
    description:
      "Designed and led the end-to-end LightGBM modeling pipeline for county-level corn/soybean yield prediction. Applied domain-informed preprocessing including yield detrending to isolate weather effects from long-term agricultural trends. Integrated Databricks Genie for natural-language querying of predictions and data insights.",
    tags: ["LightGBM", "Databricks", "Feature Engineering", "EDA"],
    link: "https://devpost.com/software/terracast",
  },
  {
    title: "Lillasy - Personalized Skincare Recommendation Tool",
    description:
      "Built an interactive, ingredient-based recommendation tool that matches skincare products to user skin type/concerns and blends ingredient compatibility with real review signals. Includes a simple web UI and a reproducible pipeline with tests and CI; deployed via GitHub Pages.",
    tags: ["Python", "Recommendation Systems", "EDA", "CI/CD"],
    link: "https://lillasy.com",
  },
  {
    title: "NFL Player Trajectory Prediction - Framework Comparison",
    description:
      "Implemented structurally equivalent GRU-based encoder-decoder models in PyTorch and TensorFlow for NFL player trajectory prediction. Conducted rigorous comparative analysis revealing significant autoregressive inference divergence despite structural equivalence (PyTorch RMSE: 1.55 vs TensorFlow: 19.47 on validation set). Authored technical report contextualizing empirical findings with established literature on exposure bias and error accumulation.",
    tags: ["PyTorch", "TensorFlow", "Scikit-learn", "Kaggle", "Deep Learning"],
    link: "https://github.com/otthree/NFL-Prediction-Model-Comparison",
  },
  {
    title: "EY 2026 Open Science AI Challenge - Optimizing Clean Water Supply",
    description:
      "Built a target-specific modeling pipeline to predict water quality indicators (Total Alkalinity, Electrical Conductance, Dissolved Reactive Phosphorus) using multi-source geospatial and remote sensing data (Landsat, TerraClimate, ERA5, HydroRIVERS). Applied spatially-aware cross-validation (GroupKFold) and fold-safe preprocessing to minimize data leakage. Achieved leaderboard score of 0.4259.",
    tags: ["Python", "Geospatial", "Feature Engineering", "Remote Sensing", "XGBoost"],
    link: "https://github.com/whwan4570/EY2026-Optimizing-Clean-Water-Supply",
  },
  {
    title: "WatchDawg - Seattle Crime Analytics Dashboard",
    description:
      "Developed interactive web dashboard analyzing 17+ years of Seattle Police Department crime data (500K+ incidents) with real-time filtering and geospatial visualization capabilities. Engineered 11-stage data cleaning pipeline and memory-optimized architecture enabling stable deployment on resource-constrained environment (512MB RAM), reducing dataset noise by 35%. Deployed production application on Render with 99%+ uptime.",
    tags: ["EDA", "Data Visualization"],
    link: "https://watchdawg-app.onrender.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-ink-900 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
          04 &nbsp;/&nbsp; Projects
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Selected work
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-white/10 bg-ink-800 p-7 transition-colors hover:border-accent/45 hover:bg-ink-700"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug text-white transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-white/30 transition-colors group-hover:text-accent" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/55 line-clamp-4">
                {project.description}
              </p>
              <p className="mt-auto pt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-accent-alt/70">
                {project.tags.join("  \u00b7  ")}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
