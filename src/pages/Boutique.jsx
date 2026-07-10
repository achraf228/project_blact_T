import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

const categories = ['Tout', 'Albums', 'T-shirts', 'Casquettes', 'Pulls'];

const products = [
  { name: 'Album - Igwe Empire (CD)', cat: 'Albums', price: '15€', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop' },
  { name: 'Album - Rue & Royaume (Vinyle)', cat: 'Albums', price: '25€', img: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=600&auto=format&fit=crop' },
  { name: 'T-shirt Igwe Logo', cat: 'T-shirts', price: '29€', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop' },
  { name: 'T-shirt Black Flame', cat: 'T-shirts', price: '32€', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop' },
  { name: 'Casquette Empire', cat: 'Casquettes', price: '24€', img: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=600&auto=format&fit=crop' },
  { name: 'Casquette Black-T', cat: 'Casquettes', price: '22€', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop' },
  { name: 'Pull Igwe Royal', cat: 'Pulls', price: '49€', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop' },
  { name: 'Pull Capuche Empire', cat: 'Pulls', price: '54€', img: 'https://images.unsplash.com/photo-1542406775-fe1aff67afba?q=80&w=600&auto=format&fit=crop' },
];

export default function Boutique() {
  useReveal();
  const [active, setActive] = useState('Tout');

  const filtered = active === 'Tout' ? products : products.filter((p) => p.cat === active);

  return (
    <>
      <div className="page-hero">
        <div className="container reveal">
          <h1 className="display-font" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
            Boutique
          </h1>
          <p>Affiche ton soutien à l'Empire Igwe</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 reveal">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={active === c ? 'btn btn-brand btn-sm' : 'btn btn-outline-brand btn-sm'}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {filtered.map((p, i) => (
              <div className="col-sm-6 col-lg-3 reveal" key={p.name} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="card-brand">
                  <div className="card-img-wrap">
                    <img src={p.img} alt={p.name} className="w-100" style={{ height: 220, objectFit: 'cover' }} />
                  </div>
                  <div className="p-3">
                    <p className="mb-1" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                      {p.cat}
                    </p>
                    <h6 className="mb-2">{p.name}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="price-tag">{p.price}</span>
                      <button className="btn btn-brand btn-sm">Ajouter</button>
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
