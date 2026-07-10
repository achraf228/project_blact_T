import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/biographie', label: 'Biographie' },
  { to: '/discographie', label: 'Discographie' },
  { to: '/boutique', label: 'Boutique' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/evenements', label: 'Événements' },
  { to: '/press-book', label: 'Press Book' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-brand-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <NavLink to="/" className="navbar-brand brand-logo">
          BLACK-T <span>IGWE</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
