import { HeroSection } from "@/components/portfolio/hero-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"

export default function HomePage() {
  return (
    <main className="w">
      <HeroSection />
      <hr />
      <ResumeSection />
      <hr />
      <ProjectsSection />
      <hr />
      <ContactSection />
    </main>
  )
}
