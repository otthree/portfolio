import { Mail, Github, Linkedin, FileText, ChevronDown } from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const socialLinks = [
  { icon: Mail, href: "mailto:dlee23@uw.edu", label: "Email" },
  { icon: Github, href: "https://github.com/otthree", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dae-hyun-lee-1a9461254/", label: "LinkedIn" },
  { icon: FileText, href: `${basePath}/cv.pdf`, label: "CV" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink-800 px-6 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(17,173,181,0.16),transparent_62%)]"
      />

      <div className="relative">
        <h1 className="text-[clamp(2.75rem,9vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
          Hello, I&apos;m Dae Hyun.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-serif text-lg leading-relaxed text-white/55 sm:text-xl">
          M.S. student in Data Science at the University of Washington, researching
          deep learning for neuroimaging and cognitive aging.
        </p>

        <div className="mx-auto mt-10 h-px w-24 bg-white/15" />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
            Let&apos;s connect
          </span>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="text-white/60 transition-colors hover:text-accent"
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-accent"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll down</span>
        <ChevronDown className="size-4 animate-nudge" />
      </a>
    </section>
  )
}
