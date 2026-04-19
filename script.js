let cartCount = 0;
let modalShown = false;
let cartItems = [];
let inventory = {};

// 1. Lógica de añadir al carrito
document.querySelectorAll('.btn-buy').forEach(button => {
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

            // Animación del botón
            const originalText = this.innerText;
            this.innerText = '¡LISTO!';
            this.style.background = '#10b981';
            setTimeout(() => { 
                this.innerText = originalText; 
                this.style.background = '';
            }, 800);
        } else {
            alert(`Lo sentimos, el límite para ${itemName} es de ${maxAllowed} unidades.`);
        }
    });
});

// 2. Lógica para eliminar del carrito
function removeItem(index) {
    const itemName = cartItems[index];
    inventory[itemName]--;
    cartItems.splice(index, 1);
    cartCount--;
    updateCartUI();
}

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
            li.innerHTML = `
                <span>${item}</span>
                <button class="remove-btn" onclick="removeItem(${index})">Eliminar</button>
            `;
            list.appendChild(li);
        });
    }
}

// 3. Mostrar/Ocultar Carrito al hacer clic en el icono
document.getElementById('cart-icon').addEventListener('click', () => {
    const cart = document.getElementById('cart-details');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
});

// 4. Modales de Registro
const regModal = document.getElementById('registration-modal');
const openRegBtn = document.getElementById('open-reg-btn');
const mainRegBtn = document.getElementById('main-reg-btn');
const closeReg = document.getElementById('close-reg');

const toggleReg = (show) => regModal.style.display = show ? 'flex' : 'none';

openRegBtn.addEventListener('click', (e) => { e.preventDefault(); toggleReg(true); });
mainRegBtn.addEventListener('click', () => toggleReg(true));
closeReg.addEventListener('click', () => toggleReg(false));

// 5. Cerrar avisos
document.getElementById('close-notice').addEventListener('click', () => {
    document.getElementById('custom-modal').style.display = 'none';
});

// 6. Envío de formularios (Simulación)
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert(`¡Bienvenido ${document.getElementById('reg-name').value}! Registro completado.`);
    toggleReg(false);
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensaje enviado. Nos contactaremos pronto.');
    this.reset();
});
