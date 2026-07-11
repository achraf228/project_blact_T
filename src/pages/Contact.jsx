import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import useReveal from '../hooks/useReveal';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  useReveal();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, { publicKey: PUBLIC_KEY })
      .then(() => {
        setSent(true);
        setSending(false);
      })
      .catch(() => {
        setError(true);
        setSending(false);
      });
  };

  return (
    <>
      <div className="page-hero">
        <div className="container reveal">
          <h1 className="display-font" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
            Contact
          </h1>
          <p>Une question, une demande de booking ? Écris-nous.</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 reveal">
              {sent ? (
                <div className="card-brand p-5 text-center">
                  <h3 className="mb-3">Merci ! 🙌</h3>
                  <p>Votre message a bien été envoyé. Nous reviendrons vers vous rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="mb-3 p-3" style={{ background: 'rgba(230,57,70,0.15)', border: '1px solid var(--color-primary)', borderRadius: 10, color: '#fff' }}>
                      Une erreur est survenue. Réessaie ou écris directement à l'adresse ci-contre.
                    </div>
                  )}
                  <div className="mb-3">
                    <input type="text" name="from_name" className="form-control form-control-brand" placeholder="Votre nom" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" name="from_email" className="form-control form-control-brand" placeholder="Votre email" required />
                  </div>
                  <div className="mb-3">
                    <select name="subject" className="form-select form-control-brand">
                      <option>Demande de booking</option>
                      <option>Demande presse</option>
                      <option>Question générale</option>
                      <option>Partenariat</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea name="message" className="form-control form-control-brand" rows="5" placeholder="Votre message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-brand w-100" disabled={sending}>
                    {sending ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </form>
              )}
            </div>
            <div className="col-lg-6 reveal">
              <div className="card-brand p-4 h-100">
                <h4 className="mb-4">Informations</h4>
                <p className="mb-3"><strong style={{ color: '#fff' }}>Email :</strong><br />contact@blacktigwe.com</p>
                <p className="mb-3"><strong style={{ color: '#fff' }}>Booking :</strong><br />booking@blacktigwe.com</p>
                <p className="mb-3"><strong style={{ color: '#fff' }}>Réseaux :</strong><br />@blacktigwe sur Instagram, TikTok & YouTube</p>
                <p className="mb-0"><strong style={{ color: '#fff' }}>Basé à :</strong><br />Lomé, Togo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}