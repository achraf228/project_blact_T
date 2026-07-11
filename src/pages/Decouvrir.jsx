import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SiSpotify, SiApplemusic, SiYoutube, SiAudiomack, SiInstagram, SiTiktok } from 'react-icons/si';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

const platforms = [
  { name: 'Spotify', cls: 'spotify', icon: <SiSpotify />, href: 'https://open.spotify.com/artist/2or7RJX45QsMkwIaeIOiSw' },
  { name: 'Apple Music', cls: 'applemusic', icon: <SiApplemusic />, href: 'https://music.apple.com/us/artist/black-t-igwe/1492686530' },
  { name: 'YouTube', cls: 'youtube', icon: <SiYoutube />, href: 'https://www.youtube.com/blacktigwe' },
  { name: 'Audiomack', cls: 'audiomack', icon: <SiAudiomack />, href: 'https://audiomack.com/blacktigwe' },
  { name: 'Instagram', cls: 'instagram', icon: <SiInstagram />, href: 'https://www.instagram.com/blacktigwe/' },
  { name: 'TikTok', cls: 'tiktok', icon: <SiTiktok />, href: 'https://www.tiktok.com/@blacktigwe' },
];

export default function Decouvrir() {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/press`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.photos && data.photos.length > 0) {
          setAvatar(`${API_URL}/storage/${data.photos[0].image}`);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="linktree-page">
      <div className="linktree-card">
        {avatar ? (
          <img src={avatar} alt="Black-T Igwe" className="linktree-avatar" />
        ) : (
          <div
            className="linktree-avatar d-flex align-items-center justify-content-center"
            style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', fontSize: '0.75rem' }}
          >
            Photo à venir
          </div>
        )}
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