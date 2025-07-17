# Graille Zone

Graille Zone est une application vitrine moderne développée avec Next.js et TypeScript. Elle met en avant un concept de street food à Cestas, spécialisé dans les burgers, tacos et sandwiches faits maison.

## Fonctionnalités

- Site statique et performant avec Next.js 14
- Interface responsive mobile-first
- Galerie d’images dynamique avec zoom en modal
- Avis clients stylisés type Google Reviews
- Accessibilité renforcée (contrastes, polices, structure)
- SEO optimisé (balises méta, OpenGraph, sitemap)
- Design CSS personnalisé sans Tailwind
- Intégration de `react-icons` pour les réseaux sociaux et UI

## Technologies utilisées

- Next.js 14 (App Router)
- TypeScript
- CSS Modules
- React Icons
- Google Fonts (Geist Sans & Geist Mono)

## Structure du projet

```
/app              → Pages, routing et layout
/components       → Composants UI réutilisables
/public/images    → Fichiers statiques (menus, galerie, logo)
/styles           → Fichiers CSS globaux et modules
```

## Installation

Cloner le dépôt puis installer les dépendances :

```bash
git clone https://github.com/Aghiles-Belkalem/graille-zone.git
cd graille-zone
npm install
```

## Lancement local

```bash
npm run dev
```

Accès local : http://localhost:3000

## Déploiement

Ce projet est prêt pour un déploiement gratuit sur [Vercel](https://vercel.com/) :

1. Lier le repo à Vercel
2. Déploiement automatique sur chaque push dans la branche `main`

## SEO et accessibilité

- HTML sémantique avec balises structurées
- Title et meta description personnalisés par page
- OpenGraph pour réseaux sociaux
- Sitemaps et favicons intégrés
- Performant et conforme Lighthouse

## Licence

Ce projet est sous licence MIT.

