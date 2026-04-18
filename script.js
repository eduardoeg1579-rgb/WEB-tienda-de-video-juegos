// Manejo del formulario con feedback visual
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('full-name').value;
    
    // Cambiar texto del botón temporalmente
    const btn = this.querySelector('.btn-submit');
    const originalText = btn.innerText;
    btn.innerText = 'ENVIANDO...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        alert('¡Excelente ' + user + '! Tu solicitud ha sido procesada.');
        btn.innerText = originalText;
        btn.style.opacity = '1';
        this.reset();
    }, 1000);
});

// Suavizar el scroll para los botones de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
