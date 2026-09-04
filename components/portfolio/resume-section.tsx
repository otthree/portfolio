import { EducationSection } from "./education-section"
import { AwardsSection } from "./awards-section"
import { PublicationsSection } from "./publications-section"

export function ResumeSection() {
  return (
    <section id="experience">
      <h2>experience</h2>
      <EducationSection />
      <AwardsSection />
      <PublicationsSection />
    </section>
  )
}
