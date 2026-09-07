// public/scripts/main.js

// 1. Au chargement de la NOUVELLE page (avant le rendu de la transition)
const direction = sessionStorage.getItem('nav-direction');
if (direction) {
    document.documentElement.setAttribute('data-direction', direction);
    sessionStorage.removeItem('nav-direction'); // On nettoie
}

// 2. Écoute des clics sur l'ANCIENNE page
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const activeLink = document.querySelector('.active-nav');

    if (!activeLink) return;

    const currentIndex = parseInt(activeLink.getAttribute('data-index'));

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetIndex = parseInt(link.getAttribute('data-index'));

            // Calcul de la direction
            if (targetIndex > currentIndex) {
                sessionStorage.setItem('nav-direction', 'right');
            } else if (targetIndex < currentIndex) {
                sessionStorage.setItem('nav-direction', 'left');
            }
        });
    });
});
