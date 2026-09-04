interface Project {
  title: string
  link: string
}

const projects: Project[] = [
  {
    title: "CarePilot, Evidence-aware Healthcare Facility Referral Copilot",
    link: "https://github.com/HumfDev/CarePilot",
  },
  {
    title: "TerraCast, Databricks x UW Hackathon (1st Place)",
    link: "https://github.com/HumfDev/TerraCast",
  },
  {
    title: "Lillasy, Personalized Skincare Recommendation Tool",
    link: "https://github.com/JungmoonHa/Data515_SmartSkincare",
  },
  {
    title: "NFL Player Trajectory Prediction, Framework Comparison",
    link: "https://github.com/whwan4570/NFL-Prediction-Model-Comparison",
  },
  {
    title: "EY 2026 Open Science AI Challenge, Optimizing Clean Water Supply",
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
    </section>
  )
}
