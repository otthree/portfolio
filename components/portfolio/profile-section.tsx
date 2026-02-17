import Image from "next/image"
import { Mail, Github, Linkedin, FileText } from "lucide-react"

const socialLinks = [
  { icon: Mail, href: "mailto:dlee23@uw.edu", label: "Email" },
  { icon: Github, href: "https://github.com/otthree", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dae-hyun-lee-1a9461254/", label: "LinkedIn" },
  { icon: FileText, href: "/cv.pdf", label: "CV" },
]

export function ProfileSection() {
  return (
    <section id="about" className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      <div className="shrink-0">
        <Image
          src="/images/dhlee.JPG"
          alt="Profile photo"
          width={180}
          height={180}
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Dae Hyun Lee
        </h1>
        <p className="mt-1 text-base text-muted-foreground">
          M.S. Student in Data Science
        </p>
        <p className="mt-0.5 text-sm text-muted-foreground">
          University of Washington, Seattle, WA
        </p>
        <p className="mt-0.5 text-sm text-muted-foreground">
          dlee23@uw.edu
        </p>

        <p className="mt-5 text-sm leading-relaxed text-foreground/85">
          I am a graduate student in Data Science at the University of Washington,
          working as a Researcher at Roy Lab. My research focuses on designing deep
          learning frameworks to operationalize cognitive reserve from multimodal
          neuroimaging data, addressing the fundamental challenge of quantifying
          latent cognitive resilience from observable clinical markers.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/85">
          I received my B.A. in Mathematics from the University of Washington in 2025.
          I previously interned at SNU VLDB Lab, Seoul National University, where I
          proposed and validated a z-score-based dimension reduction technique for
          embedding vectors, achieving 96% dimensionality reduction while preserving
          95%+ similarity accuracy.
        </p>

        <div className="mt-5 flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <link.icon className="size-3.5" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
