// public/scripts/contact.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script dédié à la page de contact chargé !");

    // Exemple : gestion de la soumission de formulaire
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            // Logique de validation ou d'envoi AJAX
        });
    }
});
