# site-vitrine-legaltech

> Important des containers actifs peuvent tourner en tâche de fond occuppant le port 3000, donc bienpenser à arrêter les containers actifs avant de lancer cette application qui tourne sans docker

# Elements remarquables

- stretchy menu avec view transition api

# ⚡ Boilerplate Vite + Pug

Un boilerplate simple et moderne pour démarrer rapidement un site vitrine avec **Vite** et **Pug**.

Un site basé sur **Node.js** est surtout utile pour un **blog**, un futur site de e-commerce par exemple couplé à headless Shopify, ou un site avec beaucoup de contenus mis à jour régulièrement.  
Pour un site vitrine très simple, rarement modifié, il est souvent préférable d’utiliser un **générateur de pages HTML statiques**, plus léger, plus simple à héberger et généralement très performant.

## 🚀 Rôle de Vite et du build

Dans cette architecture, les pages ne sont pas générées en fichiers HTML statiques au moment du build.

Le serveur **Express** rend les templates **Pug** dynamiquement à chaque requête via `index.js`.

Le build sert principalement à préparer les assets publics :

- compiler le CSS Tailwind depuis `src/styles/style.css` vers `public/styles/style.css`
- servir le JavaScript depuis `public/scripts/main.js`
- préparer les fichiers statiques utilisés par Express

En production, le site est lancé avec :

```bash
 npm start
 ```

## 🧩 Templates avec Pug

Le projet utilise **Pug** pour structurer les pages HTML de manière claire et concise.

c'est le server nodeJs qui gère l'affichage des ficheirs PUG

``app.set("view engine", "pug");``

## ✨ Transitions de pages

La **Web Transition API** remplace Barba.js pour gérer les transitions entre les pages de façon plus native et moderne.

## 🛠️ Technologies utilisées

- ⚡ Vite
- 🐶 Pug
- 🎨 Tailwind CSS
- 🌐 i18n
- 🌐 Web Transition API

## 📁 Objectif du projet

Ce boilerplate sert de base pour créer rapidement un site vitrine propre, léger et facile à maintenir.

> [!IMPORTANT]
> Pense simplement à définir ton vrai domaine en production :
>
> ```bash
> SITE_URL=https://ton-vrai-domaine.com npm start
> ```
