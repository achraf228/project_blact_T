# Black-T Igwe  Site Officiel

Site vitrine officiel de l'artiste togolais **Black-T Igwe** (Eric Yaw Otu) : biographie, discographie, actualités, événements, boutique, press kit et linktree des plateformes de streaming.

## À propos du projet

Black T Igwe, artiste togolais d'origine ghanéenne (Afrobeat, Afropop, RnB, Rap), a besoin d'une présence web centralisée pour ses fans, la presse et ses partenaires un point d'entrée unique remplaçant la dispersion sur les réseaux sociaux. Ce site couvre :

- **Biographie** : parcours de l'artiste, label (Wish Me Well Music), collaborations
- **Discographie** : albums, EP, mixtapes
- **Actualités** : clips, interviews, annonces
- **Événements** : dates de concerts et statut billetterie
- **Boutique** : merchandising (vitrine, sans paiement intégré pour l'instant)
- **Press Book** : kit presse, photos HD, contacts médias
- **Découvrir**  : page linktree vers les plateformes de streaming
- **Contact**  formulaire de booking/presse

## État d'avancement

Le site est fonctionnel et navigable de bout en bout, mais certains éléments sont volontairement des **placeholders** en attendant le contenu réel de l'artiste :

| Élément | État actuel | À faire |
|---|---|---|
| Images (albums, actus, portraits) | Fonctionnels | Remplacer par les vraies photos / pochettes |
| Liens réseaux sociaux (Footer) | Fonctionnel |   Déja propre    |
| Liens plateformes  | Fonctionnels | Déja propre |
| Boutique  bouton "Ajouter" | Sans effet | Pas de logique panier prévue tant que ce n'est pas confirmé comme besoin |
| Événements  bouton "Réserver" | Sans effet | À relier à une billetterie externe si besoin |

Rien de ce qui précède n'est un bug : c'est du contenu à fournir par l'artiste/l'équipe avant mise en production.

## Stack technique

- React 18 + React Router DOM 6
- Vite 8 (bundler) + `@vitejs/plugin-react` 6
- Bootstrap 5 
- `react-icons` (icônes de marque - Simple Icons)
- CSS personnalisé (`src/styles/global.css`) pour la palette, les animations 

## Structure du projet

```
project_blact_T/
├── src/
│   ├── components/   → Navbar, Footer
│   ├── pages/        → Home, Biographie, Discographie, Boutique,
│   │                    Actualites, Evenements, PressBook, Contact,
│   │                    Decouvrir (linktree), NotFound
│   ├── hooks/        → useReveal (animations au scroll)
│   ├── images/       → assets locaux (Bio.jpg, bg_blackt.jpg)
│   ├── styles/       → global.css (variables de couleur, animations)
│   ├── App.jsx       → routing + montage Navbar/Footer 
│   └── main.jsx       → point d'entrée
├── index.html
├── package.json
└── vite.config.js
```

## Installation

```bash
git clone <url-du-repo>
cd project_blact_T
npm install
npm run dev
```

Le site est disponible sur **http://localhost:5173**

## Build de production

```bash
npm run build
npm run preview
```
