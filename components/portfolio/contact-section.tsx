import { Footer } from "./footer"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const links = [
  { label: "email", href: "mailto:dlee23@uw.edu" },
  { label: "github", href: "https://github.com/otthree" },
  { label: "linkedin", href: "https://www.linkedin.com/in/dae-hyun-lee-1a9461254/" },
  { label: "resume", href: `${basePath}/resume.pdf` },
]

export function ContactSection() {
  return (
    <section id="contact">
      <h2>contact</h2>
      <p>
        Always happy to discuss representation learning, causal inference, or clinical
        neuroscience, or to hear about a problem hiding in high-dimensional data.
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <Footer />
    </section>
  )
}
