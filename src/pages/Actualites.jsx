import React from 'react';
import useReveal from '../hooks/useReveal';

const news = [
  { title: 'Nouveau clip "Royaume" disponible', date: '15 Juin 2026', img: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=700&auto=format&fit=crop', excerpt: "Le clip officiel du single « Royaume » est désormais en ligne sur YouTube." },
  { title: 'Black-T Igwe en interview exclusive', date: '02 Juin 2026', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=700&auto=format&fit=crop', excerpt: "Retour sur son parcours et ses projets à venir dans une interview sans filtre." },
  { title: 'Annonce de la tournée 2026', date: '20 Mai 2026', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=700&auto=format&fit=crop', excerpt: "Black-T Igwe annonce 10 dates à travers le pays pour sa première tournée." },
  { title: 'Collaboration surprise en préparation', date: '03 Mai 2026', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=700&auto=format&fit=crop', excerpt: "Un featuring très attendu serait actuellement en cours d'enregistrement." },
];

export default function Actualites() {
  useReveal();
  return (
    <>
      <div className="page-hero">
        <div className="container reveal">
          <h1 className="display-font" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
            Actualités
          </h1>
          <p>Toute l'actu de Black-T Igwe</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="row g-4">
            {news.map((n, i) => (
              <div className="col-md-6 reveal" key={n.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="card-brand">
                  <div className="row g-0 h-100">
                    <div className="col-5 card-img-wrap">
                      <img src={n.img} alt={n.title} className="w-100 h-100" style={{ objectFit: 'cover', minHeight: 180 }} />
                    </div>
                    <div className="col-7 p-4">
                      <p className="event-date mb-2">{n.date}</p>
                      <h5 className="mb-2">{n.title}</h5>
                      <p style={{ fontSize: '0.92rem' }}>{n.excerpt}</p>
                    </div>
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
