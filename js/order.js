document.addEventListener('DOMContentLoaded', function() {
    const orderList = document.getElementById('order-list');
    
    // Obtener el pedido de localStorage
    const currentOrder = JSON.parse(localStorage.getItem('order')) || [];
    
    if (currentOrder.length === 0) {
        orderList.innerHTML = '<p>No has seleccionado ningún plato todavía.</p>';
    } else {
        let html = '<ul>';
        let total = 0;
        
        currentOrder.forEach(item => {
            html += `
                <li>
                    <span class="dish-name">${item.name}</span>
                    <span class="dish-price">$${item.price}</span>
                </li>
            `;
            total += parseFloat(item.price);
        });
        
        html += `</ul><div class="order-total">Total: $${total.toFixed(2)}</div>`;
        orderList.innerHTML = html;
    }
    
    // Opcional: Botón para limpiar el pedido
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Limpiar pedido';
    clearButton.addEventListener('click', function() {
        localStorage.removeItem('order');
        orderList.innerHTML = '<p>Tu pedido ha sido limpiado.</p>';
    });
    orderList.appendChild(clearButton);
});

let contenedorMenu = document.querySelector(".menu-container");
let checkMenu = document.getElementById("check-menu");
function guardarMenu(){
    checkMenu.checked = false;
}
/*
contenedorMenu.addEventListener('click',()=>{
    guardarMenu()
});
*/