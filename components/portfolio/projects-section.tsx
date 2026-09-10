interface Project {
  title: string
  link: string
}

const projects: Project[] = [
  {
    title: "CarePilot, LLM Agent for Real-time Hospital Referral",
    link: "https://github.com/HumfDev/CarePilot",
  },
  {
    title: "TerraCast, ML-based Crop Yield Forecasting on Databricks (1st Place, Hackathon)",
    link: "https://github.com/HumfDev/TerraCast",
  },
  {
    title: "Smart Skincare, KNN Recommendation Engine",
    link: "https://github.com/JungmoonHa/Data515_SmartSkincare",
  },
  {
    title: "EY 2026 Clean Water Challenge, Geospatial ML for Water Quality Prediction",
    link: "https://github.com/whwan4570/EY2026-Optimizing-Clean-Water-Supply",
  },
  {
    title: "WatchDawg, Seattle Crime Analytics Dashboard",
    link: "https://github.com/whwan4570/Watchdawg_app",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects">
      <h2>projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="muted mt-4 mb-0">and some private repositories...</p>
    </section>
  )
}
