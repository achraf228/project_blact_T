import React, { useEffect, useState } from 'react';
import { SiSpotify, SiApplemusic, SiYoutube, SiAudiomack } from 'react-icons/si';
import useReveal from '../hooks/useReveal';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

const platformIcons = [
  { key: 'spotify_url', label: 'Spotify', Icon: SiSpotify },
  { key: 'applemusic_url', label: 'Apple Music', Icon: SiApplemusic },
  { key: 'youtube_url', label: 'YouTube', Icon: SiYoutube },
  { key: 'audiomack_url', label: 'Audiomack', Icon: SiAudiomack },
];

export default function Discographie() {
  useReveal();
  const [musiques, setMusiques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/musiques`)
      .then((res) => {
        if (!res.ok) throw new Error('Réponse invalide');
        return res.json();
      })
      .then((data) => {
        setMusiques(data);
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
            Discographie
          </h1>
          <p>Tous les sons de l'Empire Igwe</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          {loading && <p className="text-center">Chargement...</p>}
          {error && <p className="text-center">Impossible de charger la discographie pour le moment.</p>}
          {!loading && !error && musiques.length === 0 && (
            <p className="text-center">Aucune musique publiée pour l'instant.</p>
          )}

          <div className="row g-4">
            {musiques.map((m, i) => (
              <div className="col-md-6 col-lg-3 reveal" key={m.id} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="card-brand">
                  <div className="card-img-wrap">
                    <span className="card-badge">{m.type}</span>
                    {m.cover ? (
                      <img
                        src={`${API_URL}/storage/${m.cover}`}
                        alt={m.titre}
                        className="w-100"
                        style={{ height: 260, objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="w-100" style={{ height: 260, background: 'var(--color-surface, #1a1a1a)' }} />
                    )}
                  </div>
                  <div className="p-4">
                    <h5 className="mb-1">{m.titre}</h5>
                    <p className="mb-3">{m.annee}</p>
                    <div className="d-flex justify-content-center gap-3" style={{ fontSize: '1.4rem' }}>
                      {platformIcons
                        .filter(({ key }) => m[key])
                        .map(({ key, label, Icon }) => (
                          <a
                            key={key}
                            href={m[key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Écouter ${m.titre} sur ${label}`}
                            className="link-btn"
                          >
                            <Icon />
                          </a>
                        ))}
                      {platformIcons.every(({ key }) => !m[key]) && (
                        <span className="text-muted" style={{ fontSize: '0.85rem' }}>Bientôt disponible</span>
                      )}
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