import React from 'react';
import useReveal from '../hooks/useReveal';

export default function PressBook() {
  useReveal();
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
          <div className="row g-4 mb-5">
            <div className="col-lg-6 reveal">
              <h2 className="section-title">Kit Presse Officiel</h2>
              <p>
                Téléchargez le dossier de presse complet de Black-T Igwe : biographie, photos haute
                résolution, discographie et coordonnées de contact pour toute demande média.
              </p>
              <button className="btn btn-brand mt-3">📄 Télécharger le Press Kit (PDF)</button>
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
            {[
              'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=500&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=500&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=500&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=500&auto=format&fit=crop',
            ].map((img, i) => (
              <div className="col-6 col-md-3 reveal" key={img} style={{ transitionDelay: `${i * 0.08}s` }}>
                <img src={img} alt={`Press ${i + 1}`} className="img-fluid rounded-3" style={{ height: 180, objectFit: 'cover', width: '100%' }} />
              </div>
            ))}
          </div>

          <h2 className="section-title mb-4 reveal">Contact Presse</h2>
          <div className="card-brand p-4 reveal" style={{ maxWidth: 500 }}>
            <p className="mb-1"><strong style={{ color: '#fff' }}>Email :</strong> press@blacktigwe.com</p>
            <p className="mb-1"><strong style={{ color: '#fff' }}>Booking :</strong> booking@blacktigwe.com</p>
            <p className="mb-0"><strong style={{ color: '#fff' }}>Téléphone :</strong> +228 XX XX XX XX</p>
          </div>
        </div>
      </section>
    </>
  );
}
