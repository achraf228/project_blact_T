import React, { useEffect, useMemo, useState } from 'react';
import useReveal from '../hooks/useReveal';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

function formatPrice(prix) {
  return `${new Intl.NumberFormat('fr-FR').format(prix)} FCFA`;
}

export default function Boutique() {
  useReveal();
  const [active, setActive] = useState('Tout');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/produits`)
      .then((res) => {
        if (!res.ok) throw new Error('Réponse invalide');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const categories = useMemo(
    () => ['Tout', ...Array.from(new Set(products.map((p) => p.categorie)))],
    [products]
  );

  const filtered = active === 'Tout' ? products : products.filter((p) => p.categorie === active);

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
          {loading && <p className="text-center">Chargement...</p>}
          {error && <p className="text-center">Impossible de charger la boutique pour le moment.</p>}

          {!loading && !error && (
            <>
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

              {filtered.length === 0 && <p className="text-center">Aucun produit pour l'instant.</p>}

              <div className="row g-4">
                {filtered.map((p, i) => (
                  <div className="col-sm-6 col-lg-3 reveal" key={p.id} style={{ transitionDelay: `${i * 0.07}s` }}>
                    <div className="card-brand">
                      <div className="card-img-wrap">
                        {p.image ? (
                          <img
                            src={`${API_URL}/storage/${p.image}`}
                            alt={p.nom}
                            className="w-100"
                            style={{ height: 220, objectFit: 'cover' }}
                          />
                        ) : (
                          <div className="w-100" style={{ height: 220, background: 'var(--color-surface, #1a1a1a)' }} />
                        )}
                      </div>
                      <div className="p-3">
                        <p className="mb-1" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                          {p.categorie}
                        </p>
                        <h6 className="mb-2">{p.nom}</h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="price-tag">{formatPrice(p.prix)}</span>
                          <button className="btn btn-brand btn-sm">Ajouter</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}