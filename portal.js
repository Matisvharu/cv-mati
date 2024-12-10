// Efecto de desplazamiento en el encabezado
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('nav-show');
    } else {
        header.classList.remove('nav-show');
    }
});

// Funcionalidad de menú hamburguesa para dispositivos móviles
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-bar li');

    hamburger.addEventListener('click', () => {
        // Alterna la clase de activación del menú y del icono hamburguesa
        navbar.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');

        // Añade un efecto de desvanecimiento en los enlaces del menú
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
};
navSlide();

// JavaScript para cambiar tema
const themeToggleButton = document.getElementById('theme-toggle');

if (themeToggleButton) { // Verifica si el botón existe
    themeToggleButton.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme', isDarkTheme);
        themeToggleButton.textContent = isDarkTheme ? 'Tema Claro' : 'Cambiar Tema';
    });
}
