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
