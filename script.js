let cartCount = 0;
let modalShown = false;
let inventory = {}; // Para rastrear stock por producto
let cartList = [];  // Para guardar los nombres

document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const maxStock = parseInt(this.getAttribute('data-max'));
        
        // Inicializar inventario si no existe
        if (!inventory[itemName]) inventory[itemName] = 0;

        // Validación de Aforo/Límite
        if (inventory[itemName] < maxStock) {
            inventory[itemName]++;
            cartCount++;
            cartList.push(itemName);
            
            // Actualizar UI
            document.getElementById('cart-count').innerText = cartCount;
            updateCartList();

            // Mostrar aviso de "No reservado" solo la primera vez
            if (!modalShown) {
                document.getElementById('custom-modal').style.display = 'flex';
                modalShown = true;
            }

            // Feedback visual del botón
            const originalText = this.innerText;
            this.innerText = '¡AGREGADO!';
            this.style.backgroundColor = '#10b981';
            setTimeout(() => {
                this.innerText = originalText;
                this.style.backgroundColor = '';
            }, 800);

        } else {
            alert(`Lo sentimos, el aforo máximo de ${itemName} es de ${maxStock} unidades.`);
        }
    });
});

// Función para mostrar nombres en el carrito
function updateCartList() {
    const listContainer = document.getElementById('cart-details');
    const listUl = document.getElementById('cart-items-list');
    listContainer.style.display = 'block';
    listUl.innerHTML = '';
    
    cartList.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `• ${item}`;
        listUl.appendChild(li);
    });
}

// Registro de Usuario
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const state = document.getElementById('reg-state').value;
    
    alert(`¡Bienvenido ${name}! Tu registro en el estado ${state} ha sido exitoso.`);
    this.reset();
});

// Cerrar Modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('custom-modal').style.display = 'none';
});
/* Barra de navegación estática en la parte superior */
#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2000;
    background: rgba(2, 6, 23, 0.9);
    backdrop-filter: blur(15px);
    border-bottom: 2px solid var(--primary);
}

/* Espacio para que el contenido no quede debajo de la barra fija */
body {
    padding-top: 85px;
}

/* Botones con estilo Pro (No planos) */
.btn-glow-pro, .btn-buy {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    border: none;
    color: white;
    padding: 14px 28px;
    border-radius: 12px;
    font-weight: 800;
    font-family: 'Orbitron';
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
    letter-spacing: 1px;
}

.btn-glow-pro:hover, .btn-buy:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.6);
    filter: brightness(1.1);
}

.btn-glow-pro:active {
    transform: translateY(1px);
}

/* Ocultar formulario inicialmente */
.hidden-form {
    display: none;
    flex-direction: column;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Inputs con estilo */
.input-group input, .input-group select {
    width: 100%;
    margin-bottom: 15px;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid var(--primary);
    padding: 12px;
    border-radius: 8px;
    color: white;
    outline: none;
}
