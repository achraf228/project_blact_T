# Black-T Igwe — Site Officiel

Site vitrine React + Bootstrap pour l'artiste Black-T Igwe.

## 🚀 Installation

```bash
# 1. Dézippez le projet puis placez-vous dedans
cd black-t-igwe

# 2. Installez les dépendances
npm install

# 3. Lancez le serveur de développement
npm run dev
```

Le site sera disponible sur **http://localhost:5173**

## 📦 Build de production

```bash
npm run build
npm run preview
```

## 🗂️ Structure du projet

```
black-t-igwe/
├── src/
│   ├── components/   → Navbar, Footer
│   ├── pages/        → Accueil, Biographie, Discographie, Boutique,
│   │                    Actualités, Événements, Press Book, Contact, Découvrir (linktree)
│   ├── hooks/         → useReveal (animations au scroll)
│   ├── styles/        → global.css (palette, animations)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Personnalisation

- **Couleurs** : modifiez les variables CSS dans `src/styles/global.css` (`:root`)
- **Images** : remplacez les URLs Unsplash par les vraies photos de l'artiste dans chaque page (`src/pages/*.jsx`)
- **Liens des plateformes musicales** : `src/pages/Decouvrir.jsx` (tableau `platforms`)
- **Liens réseaux sociaux du footer** : `src/components/Footer.jsx`
- **Produits boutique** : `src/pages/Boutique.jsx` (tableau `products`)
- **Événements / dates de concert** : `src/pages/Evenements.jsx`

## 🛠️ Stack technique

- React 18 + React Router DOM
- Vite (bundler)
- Bootstrap 5 (grille, composants, responsive)
- CSS personnalisé pour les animations (fade-in, hover, pulse, scroll-reveal)

## 📝 Notes

- La page "Découvrir ma musique" (`/decouvrir`) est un linktree intégré avec les liens Spotify, Apple Music, YouTube, Audiomack, Instagram et TikTok — à remplacer par les vrais liens de l'artiste.
- Le formulaire de contact est statique côté front (pas d'envoi réel d'email) — branchez-le sur un service comme EmailJS, Formspree ou votre propre backend.
- Pensez à remplacer les images Unsplash par les vraies photos / pochettes d'album de Black-T Igwe pour la mise en production.
