import { Nav } from "@/components/portfolio/nav"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ProfileSection } from "@/components/portfolio/profile-section"
import { NewsSection } from "@/components/portfolio/news-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ProfileSection />
        <NewsSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  )
}
