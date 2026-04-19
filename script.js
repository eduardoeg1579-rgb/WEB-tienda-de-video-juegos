let cartCount = 0;
let modalShown = false;
let inventory = {}; // Para el límite por artículo
let cartItems = []; // Para los nombres

// 1. Lógica del Carrito y Límites
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const maxAllowed = parseInt(this.getAttribute('data-max'));

        // Inicializar si no existe
        if (!inventory[itemName]) inventory[itemName] = 0;

        if (inventory[itemName] < maxAllowed) {
            inventory[itemName]++;
            cartCount++;
            cartItems.push(itemName);
            
            // Actualizar interfaz
            document.getElementById('cart-count').innerText = cartCount;
            updateCartUI();

            // Mostrar aviso de registro (solo una vez)
            if (!modalShown) {
                document.getElementById('custom-modal').style.display = 'flex';
                modalShown = true;
            }

            // Efecto visual en el botón
            const originalText = this.innerText;
            this.innerText = '¡AÑADIDO!';
            setTimeout(() => { this.innerText = originalText; }, 800);
        } else {
            alert(`Límite alcanzado: Solo puedes llevar un máximo de ${maxAllowed} unidades de ${itemName}.`);
        }
    });
});

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    const container = document.getElementById('cart-details');
    
    container.style.display = 'block';
    list.innerHTML = ''; // Limpiar
    
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.style.fontSize = '0.8rem';
        li.style.marginBottom = '5px';
        li.innerText = `• ${item}`;
        list.appendChild(li);
    });
}

// 2. Lógica para revelar Registro
const showRegBtn = document.getElementById('show-reg-btn');
const regInitial = document.getElementById('reg-initial-view');
const regForm = document.getElementById('registration-form');

if (showRegBtn) {
    showRegBtn.addEventListener('click', () => {
        regInitial.style.display = 'none';
        regForm.style.display = 'flex';
        document.getElementById('reg-title').innerText = 'Completa tus Datos';
    });
}

// 3. Cerrar Modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('custom-modal').style.display = 'none';
});

// 4. Smooth Scroll para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
