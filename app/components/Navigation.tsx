"use client"

import { useEffect, useState } from "react"
import { navigation } from "../data/portfolio"

function NavigationLink({
  item,
  onNavigate,
}: {
  item: (typeof navigation)[number]
  onNavigate?: () => void
}) {
  return (
    <a
      href={item.href}
      onClick={onNavigate}
      target={item.newTab ? "_blank" : undefined}
      rel={item.newTab ? "noreferrer" : undefined}
    >
      {item.label}
    </a>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [])

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Pranav Balaji, back to top">
          PB<span aria-hidden="true">/</span>
        </a>

        <nav className="header-links" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavigationLink key={item.label} item={item} />
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
          <span className="menu-glyph" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>

        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Mobile navigation"
          data-open={isOpen}
        >
          {navigation.map((item, index) => (
            <div className="mobile-navigation-row" key={item.label}>
              <span aria-hidden="true">0{index + 1}</span>
              <NavigationLink item={item} onNavigate={() => setIsOpen(false)} />
            </div>
          ))}
        </nav>
      </header>

    </>
  )
}
