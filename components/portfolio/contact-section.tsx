import { Mail, Github, Linkedin, FileText } from "lucide-react"
import { Footer } from "./footer"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const socialLinks = [
  { icon: Github, href: "https://github.com/otthree", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dae-hyun-lee-1a9461254/", label: "LinkedIn" },
  { icon: FileText, href: `${basePath}/cv.pdf`, label: "CV" },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-ink-800 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
          05 &nbsp;/&nbsp; Say Hello
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let&apos;s talk research
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-serif text-lg leading-relaxed text-white/55">
          Always happy to discuss representation learning, causal inference, or clinical
          neuroscience, or to hear about a problem hiding in high-dimensional data.
        </p>

        <a
          href="mailto:dlee23@uw.edu"
          className="mt-10 inline-flex items-center gap-2.5 border border-accent bg-accent px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-900 transition-colors hover:bg-transparent hover:text-accent"
        >
          <Mail className="size-4" />
          dlee23@uw.edu
        </a>

        <div className="mt-10 flex items-center justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="text-white/50 transition-colors hover:text-accent"
            >
              <link.icon className="size-5" />
            </a>
          ))}
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </section>
  )
}
