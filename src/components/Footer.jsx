import React from 'react';
import { Link } from 'react-router-dom';
import { SiInstagram, SiYoutube, SiSpotify, SiTiktok } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <h3 className="brand-logo mb-3">
          BLACK-T <span style={{ color: 'var(--color-primary)' }}>IGWE</span>
        </h3>
        <p className="mb-4">L'artiste qui fait vibrer la nouvelle génération.</p>

        <div className="mb-4">
          <a href="#" className="social-icon" aria-label="Instagram"><SiInstagram /></a>
          <a href="#" className="social-icon" aria-label="YouTube"><SiYoutube /></a>
          <a href="#" className="social-icon" aria-label="Spotify"><SiSpotify /></a>
          <a href="#" className="social-icon" aria-label="TikTok"><SiTiktok /></a>
        </div>

        <div className="mb-4 d-flex flex-wrap justify-content-center gap-3">
          <Link to="/" className="nav-link p-0">Accueil</Link>
          <Link to="/biographie" className="nav-link p-0">Biographie</Link>
          <Link to="/boutique" className="nav-link p-0">Boutique</Link>
          <Link to="/press-book" className="nav-link p-0">Press Book</Link>
          <Link to="/contact" className="nav-link p-0">Contact</Link>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        <p className="mb-0" style={{ fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Black-T Igwe. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}