// Validación simple y efecto de scroll suave adicional si se requiere
document.getElementById('contact-form').addEventListener('submit', function(e) {
    alert('¡Gracias por tu mensaje! Validaciones requeridas completadas.');
});

// Ejemplo de transición por JS para el Navbar al hacer scroll
window.onscroll = function() {
    const nav = document.querySelector('#navbar');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(44, 62, 80, 0.9)';
    } else {
        nav.style.background = '#2c3e50';
    }
};
