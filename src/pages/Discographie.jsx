import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

const albums = [
  {
    title: 'Igwe Empire',
    year: '2025',
    type: 'Album',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Rue & Royaume',
    year: '2024',
    type: 'Album',
    cover: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Black Flame',
    year: '2023',
    type: 'EP',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Naissance d\'un Roi',
    year: '2022',
    type: 'Mixtape',
    cover: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Discographie() {
  useReveal();
  return (
    <>
      <div className="page-hero">
        <div className="container reveal">
          <h1 className="display-font" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
            Discographie
          </h1>
          <p>Tous les sons de l'Empire Igwe</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="row g-4">
            {albums.map((a, i) => (
              <div className="col-md-6 col-lg-3 reveal" key={a.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="card-brand">
                  <div className="card-img-wrap">
                    <span className="card-badge">{a.type}</span>
                    <img src={a.cover} alt={a.title} className="w-100" style={{ height: 260, objectFit: 'cover' }} />
                  </div>
                  <div className="p-4">
                    <h5 className="mb-1">{a.title}</h5>
                    <p className="mb-3">{a.year}</p>
                    <Link to="/decouvrir" className="btn btn-outline-brand btn-sm w-100">
                      Écouter
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}