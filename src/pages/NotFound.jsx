import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '100vh', paddingTop: 100 }}>
      <h1 className="display-font" style={{ fontSize: '6rem', color: 'var(--color-primary)' }}>404</h1>
      <p className="mb-4">Cette page n'existe pas dans l'Empire Igwe.</p>
      <Link to="/" className="btn btn-brand">Retour à l'accueil</Link>
    </div>
  );
}
