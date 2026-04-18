// Manejo del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    const user = document.getElementById('full-name').value;
    alert('¡Excelente ' + user + '! Tu solicitud ha sido enviada al gremio de soporte.');
    this.reset(); // Limpia el formulario
});

// Efecto de Navbar al hacer Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('#navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(30, 41, 59, 0.95)';
        nav.style.height = '70px';
    } else {
        nav.style.background = '#1e293b';
        nav.style.height = '80px';
    }
});
