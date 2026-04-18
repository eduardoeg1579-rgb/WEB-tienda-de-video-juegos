let cartCount = 0;
let modalShown = false;

// 1. Lógica de "Añadir al Carrito" y Modal
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
        // Incrementar contador
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;

        // Mostrar aviso la primera vez
        if (!modalShown) {
            document.getElementById('custom-modal').style.display = 'flex';
            modalShown = true;
        }

        // Feedback visual en el botón
        const originalText = this.innerText;
        this.innerText = '¡AÑADIDO!';
        this.style.backgroundColor = '#10b981';

        setTimeout(() => {
            this.innerText = originalText;
            this.style.backgroundColor = '';
        }, 800);
    });
});

// 2. Cerrar el Modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('custom-modal').style.display = 'none';
});

// 3. Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('full-name').value;
    const btn = this.querySelector('button');
    
    btn.innerText = 'ENVIANDO...';
    
    setTimeout(() => {
        alert('¡Excelente ' + user + '! Tu solicitud ha sido procesada.');
        btn.innerText = 'Enviar Mensaje';
        this.reset();
    }, 1000);
});

// 4. Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
