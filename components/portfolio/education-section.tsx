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
    role: "Research Assistant",
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
    <>
      <div>
        <h3 className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          Experience
        </h3>
        <div className="relative mt-8">
          <div aria-hidden className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200" />
          {experience.map((item) => (
            <div key={item.role + item.period} className="relative pb-10 pl-8 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-[7px] size-2 -translate-x-1/2 rounded-full bg-accent-ink"
              />
              <p className="text-lg font-semibold text-neutral-900">{item.role}</p>
              <p className="mt-1 flex flex-wrap items-baseline gap-x-3 text-sm text-neutral-600">
                <span>{item.org}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                  {item.period}
                </span>
              </p>
              <ul className="mt-4 space-y-2">
                {item.details.map((d) => (
                  <li key={d} className="relative pl-5 text-sm leading-relaxed text-neutral-600">
                    <span
                      aria-hidden
                      className="absolute left-0 top-[9px] size-1 rounded-full bg-accent-ink"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          Education
        </h3>
        <div className="relative mt-8">
          <div aria-hidden className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200" />
          {education.map((item) => (
            <div key={item.degree} className="relative pb-8 pl-8 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-[7px] size-2 -translate-x-1/2 rounded-full bg-accent-ink"
              />
              <p className="text-lg font-semibold text-neutral-900">{item.degree}</p>
              <p className="mt-1 flex flex-wrap items-baseline gap-x-3 text-sm text-neutral-600">
                <span>{item.school}, {item.location}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                  {item.period}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
