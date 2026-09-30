// public/scripts/contact.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script dédié à la page de contact chargé !");

    // Exemple : gestion de la soumission de formulaire
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault()
            const isValid = e.target.checkValidity();
            const formData = new FormData(e.target);
            if (isValid) {
                const body = {
                    email: formData.get('email')
                }
                alert(body.email)
                e.target.reset()
            }
        });
    }
});
