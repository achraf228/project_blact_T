import React, { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

function formatDate(isoDate) {
  const d = new Date(isoDate);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export default function Actualites() {
  useReveal();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/actualites`)
      .then((res) => {
        if (!res.ok) throw new Error('Réponse invalide');
        return res.json();
      })
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

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
          {loading && <p className="text-center">Chargement...</p>}
          {error && <p className="text-center">Impossible de charger les actualités pour le moment.</p>}
          {!loading && !error && news.length === 0 && (
            <p className="text-center">Aucune actualité publiée pour l'instant.</p>
          )}

          <div className="row g-4">
            {news.map((n, i) => (
              <div className="col-md-6 reveal" key={n.id} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="card-brand">
                  <div className="row g-0 h-100">
                    <div className="col-5 card-img-wrap">
                      {n.image ? (
                        <img
                          src={`${API_URL}/storage/${n.image}`}
                          alt={n.titre}
                          className="w-100 h-100"
                          style={{ objectFit: 'cover', minHeight: 180 }}
                        />
                      ) : (
                        <div className="w-100 h-100" style={{ minHeight: 180, background: 'var(--color-surface, #1a1a1a)' }} />
                      )}
                    </div>
                    <div className="col-7 p-4">
                      <p className="event-date mb-2">{formatDate(n.date)}</p>
                      <h5 className="mb-2">{n.titre}</h5>
                      <p style={{ fontSize: '0.92rem' }}>{n.extrait}</p>
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