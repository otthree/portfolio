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
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">
        Publications
      </h3>
      {publications.length === 0 ? (
        <p className="mt-8 font-serif text-base italic text-neutral-500">
          Publications coming soon.
        </p>
      ) : (
        <div className="relative mt-8">
          <div aria-hidden className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200" />
          {publications.map((pub) => (
            <article key={pub.title} className="relative pb-8 pl-8 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-[7px] size-2 -translate-x-1/2 rounded-full bg-accent-ink"
              />
              <h4 className="text-lg font-semibold leading-snug text-neutral-900">
                {pub.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">{pub.authors}</p>
              <p className="mt-1 text-sm text-neutral-600">
                <span className="font-medium text-neutral-800">{pub.venue}</span> ({pub.year})
                {pub.highlight && (
                  <span className="ml-2 inline-flex items-center rounded-sm bg-accent-ink/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-ink">
                    {pub.highlight}
                  </span>
                )}
              </p>
              <div className="mt-3 flex items-center gap-4">
                {pub.links.map((link) => {
                  const Icon = iconMap[link.icon]
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-accent-ink"
                    >
                      <Icon className="size-3.5" />
                      <span>{link.label}</span>
                    </a>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      )}
      {publications.length > 0 && (
        <p className="mt-4 text-xs text-neutral-500">* denotes equal contribution</p>
      )}
    </div>
  )
}
