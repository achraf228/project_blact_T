import React from 'react';
import useReveal from '../hooks/useReveal';
import bioImage from '../images/Bio.jpg';

export default function Biographie() {
  useReveal();
  return (
    <>
      <div className="page-hero">
        <div className="container reveal">
          <h1 className="display-font" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
            Biographie
          </h1>
          <p>L'histoire derrière l'Empire Igwe</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 reveal">
              <img
                src={bioImage}
                alt="Black-T Igwe portrait"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-lg-7 reveal">
              <h2 className="section-title">Le parcours d'un roi</h2>
              <p>
                Black T Igwe, de son vrai nom Eric Yaw Otu, est un artiste togolais d&apos;origine ghanéenne, né à Obuasi au Ghana.
                Chanteur, auteur-compositeur-interprète, arrangeur musical, beatmaker et entrepreneur culturel,
                il évolue dans les genres Afrobeat, Afropop, RnB et Rap.
              </p>
              <p>
                Passionné de musique dès son plus jeune âge, il se forme en ingénierie musicale de manière autodidacte
                avant de poursuivre son apprentissage entre le Ghana et le Togo. Installé à Lomé depuis la fin des années 1990,
                il développe progressivement sa carrière artistique tout en s&apos;imposant comme producteur musical.
              </p>
              <p>
                Sa notoriété débute avec la sortie de son premier single à succès « Alonmé Mano » en 2004.
                Au fil des années, il multiplie les productions et les collaborations avec plusieurs artistes d&apos;Afrique de l&apos;Ouest,
                notamment King Mensah, Bisa Kdei, Kelvyn Boy, Mink&apos;s, Vano Baby et Zeynab.
              </p>
              <p>
                En parallèle de sa carrière de chanteur, Black T Igwe fonde son propre label, Wish Me Well Music (WMWM),
                anciennement Black Music Production, ainsi que le collectif Chronos One Family, contribuant à l&apos;émergence de nombreux talents.
                En 2022, il rejoint le label ghanéen KEFA Entertainment, marquant une nouvelle étape dans son parcours professionnel.
              </p>
              <p>
                Reconnu pour sa polyvalence et son engagement dans le développement de la musique togolaise,
                Black T Igwe s&apos;est produit sur plusieurs grandes scènes en Afrique et en Europe et a reçu diverses distinctions
                pour sa contribution à l&apos;industrie musicale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-darker">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { num: '5+', label: "Années de carrière" },
              { num: '20M+', label: 'Streams cumulés' },
              { num: '3', label: 'Albums sortis' },
              { num: '50+', label: 'Concerts joués' },
            ].map((stat, i) => (
              <div className="col-6 col-md-3 reveal" key={stat.label} style={{ transitionDelay: `${i * 0.1}s` }}>
                <h2 className="display-font" style={{ fontSize: '3rem', color: 'var(--color-accent)' }}>
                  {stat.num}
                </h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
