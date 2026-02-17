const education = [
  {
    degree: "M.S. in Data Science (Expected)",
    school: "University of Washington",
    location: "Seattle, WA",
    period: "Sep 2025 – Mar 2027",
  },
  {
    degree: "B.A. in Mathematics",
    school: "University of Washington",
    location: "Seattle, WA",
    period: "Sep 2019 – Mar 2025",
  },
]

const experience = [
  {
    role: "Researcher",
    org: "Roy Lab, University of Washington",
    period: "Oct 2025 – Current",
    details: [
      "Designing deep learning frameworks to operationalize cognitive reserve from multimodal neuroimaging data, addressing the fundamental challenge of quantifying latent cognitive resilience from observable clinical markers",
      "Conducting systematic literature review of cognitive reserve measurement methodologies, critically evaluating statistical approaches and implementing baseline models (linear regression, XGBoost) for benchmarking",
      "Training 3D convolutional neural networks on ADNI dataset (4,508 subjects with structural MRI and 127 clinical features) for three-way Alzheimer's disease classification (CN/MCI/AD), optimizing model architecture for diagnostic accuracy",
    ],
  },
  {
    role: "Research Intern",
    org: "SNU VLDB Lab, Seoul National University",
    period: "Jun 2024 – Sep 2024",
    details: [
      "Proposed and validated a z-score-based dimension reduction technique for embedding vectors, supported by mathematical formulation and statistical analysis",
      "Achieved 96% dimensionality reduction (1536→64 dimensions) while preserving 95%+ similarity accuracy, improving K-NN query efficiency",
      "Integrated algorithm into HNSW indexing system and conducted performance benchmarking using OpenAI embedding datasets (100K+ vectors)",
      "Authored internal technical reports including statistical analysis and algorithmic benchmarking",
    ],
  },
]

export function EducationSection() {
  return (
    <section id="experience" className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Education
        </h2>
        <div className="mt-4 space-y-4">
          {education.map((item, index) => (
            <div key={index} className="flex gap-4 text-sm">
              <span className="shrink-0 w-[7.5rem] font-mono text-xs text-muted-foreground pt-0.5">
                {item.period}
              </span>
              <div>
                <p className="font-medium text-foreground text-sm">{item.degree}</p>
                <p className="text-xs text-muted-foreground">{item.school}{item.location ? `, ${item.location}` : ""}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Experience
        </h2>
        <div className="mt-4 space-y-4">
          {experience.map((item, index) => (
            <div key={index} className="flex gap-4 text-sm">
              <span className="shrink-0 w-[7.5rem] font-mono text-xs text-muted-foreground pt-0.5">
                {item.period}
              </span>
              <div>
                <p className="font-medium text-foreground text-sm">{item.role}</p>
                <p className="text-xs text-muted-foreground">{item.org}</p>
                {item.details?.length ? (
                  <ul className="mt-1.5 space-y-1 text-xs text-muted-foreground list-disc list-inside">
                    {item.details.map((d, i) => (
                      <li key={i} className="leading-relaxed">{d}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
