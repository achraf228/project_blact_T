import React, { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
const MONTHS = ['JANV', 'FÉVR', 'MARS', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DÉC'];

function formatDate(isoDate) {
  const d = new Date(isoDate);
  const day = String(d.getDate()).padStart(2, '0');
  return `${day} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export default function Evenements() {
  useReveal();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/evenements`)
      .then((res) => {
        if (!res.ok) throw new Error('Réponse invalide');
        return res.json();
      })
      .then((data) => {
        setEvents(data);
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
            Événements
          </h1>
          <p>Retrouve Black-T Igwe sur scène</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          {loading && <p className="text-center">Chargement...</p>}
          {error && <p className="text-center">Impossible de charger les événements pour le moment.</p>}
          {!loading && !error && events.length === 0 && (
            <p className="text-center">Aucun événement prévu pour l'instant.</p>
          )}

          <div className="d-flex flex-column gap-3">
            {events.map((e, i) => (
              <div
                className="event-card reveal d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"
                key={e.id}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div>
                  <p className="event-date mb-1">{formatDate(e.date)}</p>
                  <h5 className="mb-1">{e.salle}</h5>
                  <p className="mb-0">{e.ville}</p>
                </div>
                <div className="text-md-end">
                  <span
                    className="badge mb-2 d-inline-block"
                    style={{
                      backgroundColor:
                        e.statut === 'Complet' ? '#6C757D' : e.statut === 'Bientôt' ? '#F4B400' : '#E63946',
                      color: e.statut === 'Bientôt' ? '#121212' : '#fff',
                    }}
                  >
                    {e.statut}
                  </span>
                  <br />
                  {e.statut === 'Complet' ? (
                    <button className="btn btn-outline-brand btn-sm" disabled>
                      Indisponible
                    </button>
                  ) : e.billeterie_url ? (
                    <a href={e.billeterie_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-brand btn-sm">
                      Réserver
                    </a>
                  ) : (
                    <button className="btn btn-outline-brand btn-sm" disabled>
                      Bientôt
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}