const articles = [
    {
        slug: "premier-article",
        publishedAt: "2026-08-26",
        translations: {
            fr: {
                title: "Mon premier article",
                excerpt: "Résumé de mon premier article.",
                content: "Voici le contenu complet de mon article en français.",
            },
            en: {
                title: "My first article",
                excerpt: "Summary of my first article.",
                content: "Here is the full content of my article in English.",
            },
        },
    },
    {
        slug: "architecture-express-pug",
        publishedAt: "2026-08-26",
        translations: {
            fr: {
                title: "Architecture Express et Pug",
                excerpt: "Comment organiser un projet Express avec Pug.",
                content: "Dans cet article, nous allons organiser notre projet proprement.",
            },
            en: {
                title: "Express and Pug architecture",
                excerpt: "How to organize an Express project with Pug.",
                content: "In this article, we will organize our project properly.",
            },
        },
    },
];

module.exports = articles;
