document.addEventListener("DOMContentLoaded", () => {
    console.log("Script dédié à la page de contact chargé !");

    const toaster = document.querySelector("#toaster");

    const showToaster = (message, isSuccess) => {
        if (!toaster) return;

        toaster.textContent = message;
        toaster.classList.remove("hidden", "bg-green-600", "bg-red-600");
        toaster.classList.add(isSuccess ? "bg-green-600" : "bg-red-600");

        setTimeout(() => {
            toaster.classList.add("hidden");
        }, 2000);
    };

    // Exemple : gestion de la soumission de formulaire
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {

            e.preventDefault();

            const isValid = e.target.checkValidity();

            const formData = new FormData(e.target);

            if (isValid) {

                const body = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message')
                };

                const token = await grecaptcha.execute('6LfgdtctAAAAADGoEpqNmUogCQMxiBVLmjcD6gug', {action: 'submit'})

                const rep = await fetch('/api/recaptcha', {
                    method: 'POST', headers: {'g-recaptcha-response': token}, body: JSON.stringify(body)
                })

                const text = await rep.text()
                
                showToaster(text, rep.ok);

                e.target.reset();
            }
        });
    }
});
