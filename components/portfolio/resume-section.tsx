import { EducationSection } from "./education-section"
import { AwardsSection } from "./awards-section"
import { PublicationsSection } from "./publications-section"

export function ResumeSection() {
  return (
    <section id="resume" className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent-ink">
          03 &nbsp;/&nbsp; Résumé
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Experience &amp; Education
        </h2>

        <div className="mt-14 space-y-16">
          <EducationSection />
          <AwardsSection />
          <PublicationsSection />
        </div>
      </div>
    </section>
  )
}
