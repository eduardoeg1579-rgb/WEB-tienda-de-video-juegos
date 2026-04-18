let cartCount = 0;
let modalShown = false;

// 1. Carrito y Modal
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;

        if (!modalShown) {
            document.getElementById('custom-modal').style.display = 'flex';
            modalShown = true;
        }

        const originalText = this.innerText;
        this.innerText = '¡LISTO!';
        this.style.backgroundColor = '#10b981';

        setTimeout(() => {
            this.innerText = originalText;
            this.style.backgroundColor = '';
        }, 800);
    });
});

// 2. Cerrar Modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('custom-modal').style.display = 'none';
});

// 3. Formulario
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
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
