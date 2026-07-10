import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import bgImage from '../images/bg_blackt.jpg';
import bioImage from '../images/Bio.jpg';

const albums = [
  { title: 'Igwe Empire', year: '2025', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop' },
  { title: 'Rue & Royaume', year: '2024', cover: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=600&auto=format&fit=crop' },
  { title: 'Black Flame', year: '2023', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop' },
];

const news = [
  { title: 'Nouveau clip disponible', date: '15 Juin 2026', img: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=600&auto=format&fit=crop' },
  { title: 'Black-T Igwe en interview', date: '02 Juin 2026', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop' },
  { title: 'Annonce tournée 2026', date: '20 Mai 2026', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop' },
];

export default function Home() {
  useReveal();

  return (
    <>
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="hero-subtitle">Artiste • Chanteur • Performer</p>
          <h1 className="display-font">
            BLACK-T <span className="accent">IGWE</span>
          </h1>
          <p className="mx-auto mb-4" style={{ maxWidth: 560, color: '#fff', opacity: 0.85 }}>
            Une voix, une énergie, une légende en construction. Plonge dans l'univers musical de Black-T Igwe.
          </p>
          <Link to="/decouvrir" className="btn btn-brand btn-hero">
            🎧 Découvrir ma musique
          </Link>
        </div>
        <div className="scroll-indicator text-white">
          <span style={{ fontSize: '1.8rem' }}>⌄</span>
        </div>
      </section>

      {/* A propos rapide */}
      <section className="section section-dark">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal">
              <img
                src={bioImage}
                alt="Black-T Igwe"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-lg-6 reveal">
              <h2 className="section-title">Qui est Black-T Igwe ?</h2>
              <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                Black T Igwe, de son vrai nom Eric Yaw Otu, est un artiste togolais d&apos;origine ghanéenne,
                né à Obuasi au Ghana. Chanteur, auteur-compositeur-interprète, arrangeur musical, beatmaker
                et entrepreneur culturel, il évolue dans les genres Afrobeat, Afropop, RnB et Rap.
              </p>
              <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                Passionné de musique dès son plus jeune âge, il se forme en ingénierie musicale de manière
                autodidacte avant de poursuivre son apprentissage entre le Ghana et le Togo. Installé à Lomé
                depuis la fin des années 1990, il développe progressivement sa carrière artistique tout en
                s&apos;imposant comme producteur musical.
              </p>
              <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                Sa notoriété débute avec la sortie de son premier single à succès « Alonmé Mano » en 2004.
                Au fil des années, il multiplie les productions et les collaborations avec plusieurs artistes
                d&apos;Afrique de l&apos;Ouest, notamment King Mensah, Bisa Kdei, Kelvyn Boy, Mink&apos;s, Vano Baby et Zeynab.
              </p>
              <Link to="/biographie" className="btn btn-outline-brand mt-3">
                Lire la biographie
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discographie preview */}
      <section className="section section-darker">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h2 className="section-title center">Derniers Albums</h2>
            <p>Les sons qui font vibrer la rue</p>
          </div>
          <div className="row g-4">
            {albums.map((a, i) => (
              <div className="col-md-4 reveal" key={a.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="card-brand">
                  <div className="card-img-wrap">
                    <span className="card-badge">{a.year}</span>
                    <img src={a.cover} alt={a.title} className="w-100" style={{ height: 260, objectFit: 'cover' }} />
                  </div>
                  <div className="p-4">
                    <h4 className="mb-1">{a.title}</h4>
                    <p className="mb-0">Album • {a.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 reveal">
            <Link to="/discographie" className="btn btn-brand">
              Voir toute la discographie
            </Link>
          </div>
        </div>
      </section>

      {/* Actualités preview */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h2 className="section-title center">Actualités</h2>
            <p>Reste connecté à l'univers de Black-T Igwe</p>
          </div>
          <div className="row g-4">
            {news.map((n, i) => (
              <div className="col-md-4 reveal" key={n.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="card-brand">
                  <div className="card-img-wrap">
                    <img src={n.img} alt={n.title} className="w-100" style={{ height: 200, objectFit: 'cover' }} />
                  </div>
                  <div className="p-4">
                    <p className="event-date mb-2">{n.date}</p>
                    <h5>{n.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 reveal">
            <Link to="/actualites" className="btn btn-outline-brand">
              Toutes les actualités
            </Link>
          </div>
        </div>
      </section>

      {/* CTA boutique */}
      <section
        className="section text-center"
        style={{
          background: 'linear-gradient(135deg, #1E1E1E 0%, #121212 100%)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container reveal">
          <h2 className="section-title center mb-3">La Boutique Officielle</h2>
          <p className="mb-4" style={{ maxWidth: 600, margin: '0 auto' }}>
            Albums, T-shirts, casquettes, pulls... Affiche ton soutien à l'Empire Igwe.
          </p>
          <Link to="/boutique" className="btn btn-brand">
            Accéder à la boutique
          </Link>
        </div>
      </section>
    </>
  );
}
