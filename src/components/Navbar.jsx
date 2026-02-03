import { useState } from 'react'
import { siteData } from '../data'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo" onClick={handleClose}>
          <span className="logo-mark">MW</span>
          <span className="logo-text">Matheesha</span>
        </a>

        <nav className="nav-links">
          {siteData.navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-links">
          {siteData.navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleClose}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
