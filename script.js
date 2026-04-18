// Manejo del carrito para Consolas y Periféricos
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.getAttribute('data-item');
        
        // Efecto visual en el botón al hacer clic
        this.innerText = '¡AÑADIDO!';
        this.style.backgroundColor = '#10b981'; // Color verde éxito
        
        setTimeout(() => {
            alert(item + ' ha sido añadido a tu carrito de compras.');
            this.innerText = 'Añadir al Carrito';
            this.style.backgroundColor = ''; // Vuelve al color original del CSS
        }, 300);
    });
});

// Manejo del formulario con feedback visual
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('full-name').value;
    
    const btn = this.querySelector('.btn-glow');
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

// Suavizar el scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
