import React, { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

export default function PressBook() {
  useReveal();
  const [press, setPress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/press`)
      .then((res) => {
        if (!res.ok) throw new Error('Réponse invalide');
        return res.json();
      })
      .then((data) => {
        setPress(data);
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
            Press Book
          </h1>
          <p>Ressources presse & médias</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          {loading && <p className="text-center">Chargement...</p>}
          {error && <p className="text-center">Impossible de charger le press book pour le moment.</p>}

          {!loading && !error && press && (
            <>
              <div className="row g-4 mb-5">
                <div className="col-lg-6 reveal">
                  <h2 className="section-title">Kit Presse Officiel</h2>
                  <p>
                    Téléchargez le dossier de presse complet de Black-T Igwe : biographie, photos haute
                    résolution, discographie et coordonnées de contact pour toute demande média.
                  </p>
                  {press.pdf ? (
                    <a
                      href={`${API_URL}/storage/${press.pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-brand mt-3"
                    >
                      📄 Télécharger le Press Kit (PDF)
                    </a>
                  ) : (
                    <button className="btn btn-brand mt-3" disabled>
                      📄 Press Kit bientôt disponible
                    </button>
                  )}
                </div>
                <div className="col-lg-6 reveal">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
                    alt="Press kit"
                    className="img-fluid rounded-4 shadow"
                  />
                </div>
              </div>

              <h2 className="section-title mb-4 reveal">Galerie Photos HD</h2>
              <div className="row g-3 mb-5">
                {press.photos.length === 0 && <p>Aucune photo disponible pour l'instant.</p>}
                {press.photos.map((photo, i) => (
                  <div className="col-6 col-md-3 reveal" key={photo.id} style={{ transitionDelay: `${i * 0.08}s` }}>
                    <img
                      src={`${API_URL}/storage/${photo.image}`}
                      alt={`Press ${i + 1}`}
                      className="img-fluid rounded-3"
                      style={{ height: 180, objectFit: 'cover', width: '100%' }}
                    />
                  </div>
                ))}
              </div>

              <h2 className="section-title mb-4 reveal">Contact Presse</h2>
              <div className="card-brand p-4 reveal" style={{ maxWidth: 500 }}>
                <p className="mb-1"><strong style={{ color: '#fff' }}>Email :</strong> {press.contact_email || 'Non renseigné'}</p>
                <p className="mb-1"><strong style={{ color: '#fff' }}>Booking :</strong> {press.contact_booking_email || 'Non renseigné'}</p>
                <p className="mb-0"><strong style={{ color: '#fff' }}>Téléphone :</strong> {press.contact_telephone || 'Non renseigné'}</p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}