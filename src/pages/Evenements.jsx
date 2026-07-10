import React from 'react';
import useReveal from '../hooks/useReveal';

const events = [
  { date: '12 JUIL 2026', city: 'Paris, France', venue: 'Le Trabendo', status: 'Billets disponibles' },
  { date: '26 JUIL 2026', city: 'Lyon, France', venue: 'Le Transbordeur', status: 'Billets disponibles' },
  { date: '09 AOÛT 2026', city: 'Lomé, Togo', venue: 'Centre Culturel', status: 'Bientôt' },
  { date: '23 AOÛT 2026', city: 'Abidjan, Côte d\'Ivoire', venue: 'Palais de la Culture', status: 'Bientôt' },
  { date: '06 SEPT 2026', city: 'Bruxelles, Belgique', venue: 'AB Club', status: 'Complet' },
];

export default function Evenements() {
  useReveal();
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
          <div className="d-flex flex-column gap-3">
            {events.map((e, i) => (
              <div
                className="event-card reveal d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"
                key={e.city + e.date}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div>
                  <p className="event-date mb-1">{e.date}</p>
                  <h5 className="mb-1">{e.venue}</h5>
                  <p className="mb-0">{e.city}</p>
                </div>
                <div className="text-md-end">
                  <span
                    className="badge mb-2 d-inline-block"
                    style={{
                      backgroundColor:
                        e.status === 'Complet' ? '#6C757D' : e.status === 'Bientôt' ? '#F4B400' : '#E63946',
                      color: e.status === 'Bientôt' ? '#121212' : '#fff',
                    }}
                  >
                    {e.status}
                  </span>
                  <br />
                  <button
                    className="btn btn-outline-brand btn-sm"
                    disabled={e.status === 'Complet'}
                  >
                    {e.status === 'Complet' ? 'Indisponible' : 'Réserver'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
