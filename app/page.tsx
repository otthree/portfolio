import { Nav } from "@/components/portfolio/nav"
import { ProfileSection } from "@/components/portfolio/profile-section"
import { ResearchInterests } from "@/components/portfolio/research-interests"
import { NewsSection } from "@/components/portfolio/news-section"
import { PublicationsSection } from "@/components/portfolio/publications-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { Footer } from "@/components/portfolio/footer"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-12 space-y-10">
        <ProfileSection />
        <Separator />
        <ResearchInterests />
        <Separator />
        <NewsSection />
        <Separator />
        <PublicationsSection />
        <Separator />
        <ProjectsSection />
        <Separator />
        <EducationSection />
      </main>
      <div className="mx-auto max-w-2xl px-6">
        <Footer />
      </div>
    </>
  )
}
