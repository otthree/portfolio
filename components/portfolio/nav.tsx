"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "News", href: "#news" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("about")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-background"
      )}
    >
      <nav className="mx-auto max-w-2xl px-6 py-3" aria-label="Main navigation">
        <ul className="flex items-center gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-1.5 text-xs transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-foreground font-medium bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
