import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#team', label: 'Team' },
  { href: '#blog', label: 'Blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top${scrolled ? ' scrolled' : ''}`} id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <i className="fa-solid fa-paw"></i>Pawtrail
        </a>
        <button
          className="navbar-toggler"
          type="button"
          style={{ border: 'none' }}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <i className="fa-solid fa-bars" style={{ color: 'var(--navy)' }}></i>
        </button>
        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navMenu">
          <ul className="navbar-nav mx-auto">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#appointment" className="btn btn-pawtrail d-none d-lg-inline-block">
            Book a Visit
          </a>
        </div>
      </div>
    </nav>
  );
}
