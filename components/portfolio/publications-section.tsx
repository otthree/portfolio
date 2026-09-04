interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  highlight?: string
  links: { label: string; href: string }[]
}

const publications: Publication[] = []

export function PublicationsSection() {
  return (
    <>
      <h3>publications</h3>
      {publications.length === 0 ? (
        <p className="muted mb-0">coming soon.</p>
      ) : (
        <ul>
          {publications.map((pub) => (
            <li key={pub.title}>
              {pub.title}
              <br />
              <span className="muted">
                {pub.authors} &middot; {pub.venue} ({pub.year})
                {pub.highlight ? ` · ${pub.highlight}` : ""}
              </span>
              {pub.links.length > 0 && (
                <>
                  <br />
                  {pub.links.map((link, i) => (
                    <span key={link.label}>
                      {i > 0 ? " · " : ""}
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </span>
                  ))}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
