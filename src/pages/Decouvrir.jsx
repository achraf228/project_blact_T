import React from 'react';
import { Link } from 'react-router-dom';
import { SiSpotify, SiApplemusic, SiYoutube, SiAudiomack, SiInstagram, SiTiktok } from 'react-icons/si';

const platforms = [
  { name: 'Spotify', cls: 'spotify', icon: <SiSpotify />, href: 'https://open.spotify.com' },
  { name: 'Apple Music', cls: 'applemusic', icon: <SiApplemusic />, href: 'https://music.apple.com' },
  { name: 'YouTube', cls: 'youtube', icon: <SiYoutube />, href: 'https://youtube.com' },
  { name: 'Audiomack', cls: 'audiomack', icon: <SiAudiomack />, href: 'https://audiomack.com' },
  { name: 'Instagram', cls: 'instagram', icon: <SiInstagram />, href: 'https://instagram.com' },
  { name: 'TikTok', cls: 'tiktok', icon: <SiTiktok />, href: 'https://tiktok.com' },
];

export default function Decouvrir() {
  return (
    <div className="linktree-page">
      <div className="linktree-card">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop"
          alt="Black-T Igwe"
          className="linktree-avatar"
        />
        <h2 className="display-font mb-1">BLACK-T IGWE</h2>
        <p className="mb-4">Écoute-moi sur ta plateforme préférée</p>

        {platforms.map((p, i) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-btn ${p.cls}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span>{p.icon}</span> {p.name}
          </a>
        ))}

        <Link to="/" className="btn btn-outline-brand mt-3">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}