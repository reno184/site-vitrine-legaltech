# Elements remarquables

- stretchy menu avec view transition api

Quand vous lancez un serveur Node.js avec la commande standard node server.js :
Node charge l'intégralité du code JavaScript (server.js, les routes, les middlewares) en mémoire vive.
Si vous modifiez du code backend (par exemple en ajoutant une nouvelle route comme app.get("/contact")), Node.js ne prend pas en compte votre modification tant que le processus Node reste actif.
Sans outil automatique, vous devriez manuellement faire CTRL + C dans votre terminal pour stopper le serveur, puis retaper node server.js.

Le rôle de Nodemon
Nodemon automatise cette tâche pénible : il surveille vos fichiers backend et relance node server.js automatiquement dès que vous modifiez le serveur.

- Vite s'occupe de transformer vos fichiers frontend (src/ \rightarrow public/). Aucun redémarrage serveur n'est nécessaire pour que le navigateur voie ces changements.

- Nodemon ne sert qu'à relancer server.js lorsque vous touchez à la logique serveur (nouvelles routes Express, modification des imports Node, etc.).

- C'est pourquoi on demande à Nodemon d'ignorer public/ et src/ : ces fichiers n'ont aucun impact sur le processus Node.

Le dossier src/ est réservé aux fichiers sources qui doivent être compilés ou transformés par un outil (comme Vite ou Tailwind pour le CSS/JS).
favicon.ico et robots.txt sont des fichiers bruts / statiques qui n'ont besoin d'aucune compilation.

# ⚡ Boilerplate Vite + Pug

Un boilerplate simple et moderne pour démarrer rapidement un site vitrine avec **Vite** et **Pug**.

Un site basé sur **Node.js** est surtout utile pour un **blog**, un futur site de e-commerce par exemple couplé à headless Shopify, ou un site avec beaucoup de contenus mis à jour régulièrement.  
Pour un site vitrine très simple, rarement modifié, il est souvent préférable d’utiliser un **générateur de pages HTML statiques**, plus léger, plus simple à héberger et généralement très performant.

## 🚀 Rôle de Vite et du build

Dans cette architecture, les pages ne sont pas générées en fichiers HTML statiques au moment du build.

Le serveur **Express** rend les templates **Pug** dynamiquement à chaque requête via `server.js`.

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
