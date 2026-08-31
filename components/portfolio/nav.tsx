"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Résumé", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Say Hello", href: "#contact" },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-ink-900/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-full overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden"
        aria-label="Main navigation"
      >
        <ul className="mx-auto flex w-max items-center gap-0.5 py-4 sm:gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "block whitespace-nowrap px-2 py-1.5 text-xs transition-colors sm:px-3 sm:text-[13px]",
                  activeSection === item.href.slice(1)
                    ? "text-accent"
                    : "text-white/55 hover:text-white"
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
