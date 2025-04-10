
document.addEventListener('DOMContentLoaded', function() {
    const orderList = document.getElementById('order-list');
    
    // Obtener el pedido de localStorage
    const currentOrder = JSON.parse(localStorage.getItem('order')) || [];
    
    function actualizar() {
        let html = '<ul>';
        let total = 0;
        
        currentOrder.forEach((item,index) => {
            html += `
                <li data-name="${item.name}" data-index="${index}">
                    <button class="borrar" data-index="${index}"><p>+</p></button>
                    <span class="dish-name">${item.name}</span>
                    <span class="dish-price">€ ${item.price}</span>
                </li>
            `;
            total += parseFloat(item.price);
        });
        
        html += `</ul><div class="order-total">Total: € ${total.toFixed(2)}</div>`;
        orderList.innerHTML = html;

        const clearButton = document.createElement('button');
        clearButton.classList.add('btnLimpia')
        clearButton.textContent = ' Order clair ';
        

        clearButton.addEventListener('click', function() {
            localStorage.removeItem('order');
            orderList.innerHTML = '<p>Votre commande a été réglée.</p>';
        });
        orderList.appendChild(clearButton);

        const btnBorrar = document.querySelectorAll('.borrar')
        btnBorrar.forEach(btn => {
            btn.addEventListener('click',function(){
                const menuItem = this.closest('li');
                const dishIndex =  menuItem.getAttribute('data-index')
                Borrar(dishIndex);
            });
        });
    }


    function Borrar(dishIndex){
        
        const claveStorage = 'order';
        const jsonString = localStorage.getItem(claveStorage);
        
        const productos = JSON.parse(jsonString);
                
        productos.splice(dishIndex,1)
        
        //const productoActualizado = productos.filter(p => p.name !== dishName);

        localStorage.setItem(claveStorage, JSON.stringify(productos));
        //alert(`'${dishName}' eliminado correctamente`)
                
        location.reload()
        
    }

    if (currentOrder.length === 0) {
        orderList.innerHTML = '<p>Vous n´avez selectionné aucun plat.</p>';
    } else {
        actualizar()
    }
    
});


let contenedorMenu = document.querySelector(".menu-container");
let checkMenu = document.getElementById("check-menu");
function guardarMenu(){
    checkMenu.checked = false;
}
