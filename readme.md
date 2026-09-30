# site-vitrine-legaltech

> Important des containers actifs peuvent tourner en tâche de fond occuppant le port 3000, donc bien penser à arrêter les containers actifs avant de lancer cette application qui tourne sans docker

Site en nodejs, hébergé dans firebase Cloud-function/hosting

### Lancer scripts

---

Pour surveiller avec watcher index.js et les fichiers .pug

```bash
npm run serve
```

Pour compiler avec un watcher css et js

```bash
npm run build
```

Déploiement

```bash
firebase deploy --only functions,hosting:targetA
```

# Elements remarquables, leads

- stretchy menu avec view transition api
- Vite passer un argument a process.env dans package.json VITE_DEV=true
- Web transition API


> [!IMPORTANT]
> Pense simplement à définir ton vrai domaine en production :
>
> ```bash
> SITE_URL=https://ton-vrai-domaine.com npm start
> ```
