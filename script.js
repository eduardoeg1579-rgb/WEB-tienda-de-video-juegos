let cartCount = 0;
let modalShown = false;
let cartItems = [];
let inventory = {};

// Unificar botones de compra (Consolas y Periféricos)
function initBuyButtons() {
    const allBtns = document.querySelectorAll('.btn-buy, .btn-mini');
    allBtns.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const maxAllowed = parseInt(this.getAttribute('data-max'));

            if (!inventory[itemName]) inventory[itemName] = 0;

            if (inventory[itemName] < maxAllowed) {
                inventory[itemName]++;
                cartCount++;
                cartItems.push(itemName);
                updateCartUI();

                if (!modalShown) {
                    document.getElementById('custom-modal').style.display = 'flex';
                    modalShown = true;
                }
            } else {
                alert(`Límite de stock: Máximo ${maxAllowed} unidades para ${itemName}.`);
            }
        });
    });
}

// Eliminar del carrito
window.removeItem = function(index) {
    const itemName = cartItems[index];
    inventory[itemName]--;
    cartItems.splice(index, 1);
    cartCount--;
    updateCartUI();
};

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    const countDisplay = document.getElementById('cart-count');
    const msg = document.getElementById('empty-cart-msg');
    
    countDisplay.innerText = cartCount;
    list.innerHTML = '';

    if (cartItems.length === 0) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
        cartItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'cart-item-row';
            li.innerHTML = `<span>${item}</span><button class="remove-btn" onclick="removeItem(${index})">x</button>`;
            list.appendChild(li);
        });
    }
}

// Icono Carrito
document.getElementById('cart-icon').addEventListener('click', () => {
    const cart = document.getElementById('cart-details');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
});

// Lógica Modales Registro
const regModal = document.getElementById('registration-modal');
const toggleReg = (show) => regModal.style.display = show ? 'flex' : 'none';

document.getElementById('open-reg-btn').addEventListener('click', (e) => { e.preventDefault(); toggleReg(true); });
document.getElementById('main-reg-btn').addEventListener('click', () => toggleReg(true));
document.getElementById('close-reg').addEventListener('click', () => toggleReg(false));
document.getElementById('close-notice').addEventListener('click', () => document.getElementById('custom-modal').style.display = 'none');

// Formularios
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Registro exitoso!');
    toggleReg(false);
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-pro');
    btn.innerText = 'ENVIANDO...';
    setTimeout(() => {
        alert('Ticket enviado con éxito.');
        btn.innerText = 'Enviar Ticket';
        this.reset();
    }, 1500);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

initBuyButtons();
