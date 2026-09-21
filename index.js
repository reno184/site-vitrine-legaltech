const express = require("express");
const path = require("path");
const i18n = require("i18n");
const articles = require("./data/articles");

const app = express();
const PORT = process.env.PORT || 3000;

const supportedLocales = ["fr", "en"];
const defaultLocale = "fr";
const siteUrl = process.env.SITE_URL || "https://ton-domaine.com";

i18n.configure({
    locales: supportedLocales,
    defaultLocale,
    directory: path.join(__dirname, "locales"),
    objectNotation: true,
    autoReload: true,
    updateFiles: false,
    syncFiles: false,
});

// Dossier des fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// i18n middleware
app.use(i18n.init);

// Détection de la langue depuis l'URL
app.use((req, res, next) => {
    const firstSegment = req.path.split("/")[1];
    const locale = supportedLocales.includes(firstSegment) ? firstSegment : defaultLocale;

    req.setLocale(locale);

    res.locals.locale = locale;
    res.locals.__ = res.__.bind(req);
    res.locals.languages = supportedLocales;
    res.locals.defaultLang = defaultLocale;
    res.locals.siteUrl = siteUrl;

    const pathWithoutLocale = req.path.replace(new RegExp(`^/${locale}`), "") || "";
    res.locals.localizedPath = pathWithoutLocale;

    next();
});

// Configuration de Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Redirection de la racine vers la langue par défaut
app.get("/", (req, res) => {
    res.redirect(`/${defaultLocale}`);
});

// Routes
app.get("/:locale", (req, res) => {
    if (!supportedLocales.includes(req.params.locale)) {
        return res.status(404).send("Page introuvable");
    }

    res.render("pages/index", {
        title: res.__("site.title"),
    });
});

app.get("/:locale/about", (req, res) => {
    if (!supportedLocales.includes(req.params.locale)) {
        return res.status(404).send("Page introuvable");
    }

    res.render("pages/about", {
        title: res.__("nav.about"),
    });
});

app.get("/:locale/contact", (req, res) => {
    if (!supportedLocales.includes(req.params.locale)) {
        return res.status(404).send("Page introuvable");
    }

    res.render("pages/contact", {
        title: res.__("nav.contact"),
    });
});

app.get("/:locale/articles", (req, res) => {
    if (!supportedLocales.includes(req.params.locale)) {
        return res.status(404).send("Page introuvable");
    }

    const locale = res.locals.locale;

    const localizedArticles = articles.map((article) => ({
        slug: article.slug,
        publishedAt: article.publishedAt,
        ...article.translations[locale],
    }));

    res.render("pages/articles", {
        title: res.__("nav.articles"),
        articles: localizedArticles,
    });
});

app.get("/:locale/articles/:slug", (req, res) => {
    if (!supportedLocales.includes(req.params.locale)) {
        return res.status(404).send("Page introuvable");
    }

    const locale = res.locals.locale;

    const article = articles.find((item) => item.slug === req.params.slug);

    if (!article || !article.translations[locale]) {
        return res.status(404).send("Article introuvable");
    }

    res.render("pages/article", {
        title: article.translations[locale].title,
        article: {
            slug: article.slug,
            publishedAt: article.publishedAt,
            ...article.translations[locale],
        },
    });
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
