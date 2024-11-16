const navbar = document.querySelector('nav');

// Listen for scroll events
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {  // Adjust this value to control when the effect starts
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});