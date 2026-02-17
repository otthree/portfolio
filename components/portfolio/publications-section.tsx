import { FileText, Code, Globe } from "lucide-react"

interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  highlight?: string
  links: { label: string; href: string; icon: "paper" | "code" | "website" }[]
}

const publications: Publication[] = []

const iconMap = {
  paper: FileText,
  code: Code,
  website: Globe,
}

export function PublicationsSection() {
  return (
    <section id="publications">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        Publications
      </h2>
      <p className="mt-1 text-xs text-muted-foreground">
        {publications.length > 0 ? "* denotes equal contribution" : "Publications coming soon."}
      </p>
      <div className="mt-4 space-y-6">
        {publications.map((pub, index) => (
          <article key={index} className="group">
            <h3 className="text-sm font-medium text-foreground leading-snug">
              {pub.title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              {pub.authors}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="font-medium text-foreground/70">{pub.venue}</span>
              {" "}({pub.year})
              {pub.highlight && (
                <span className="ml-1.5 inline-flex items-center rounded-sm bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                  {pub.highlight}
                </span>
              )}
            </p>
            <div className="mt-2 flex items-center gap-3">
              {pub.links.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="size-3" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
