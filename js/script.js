document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de añadir
    const addButtons = document.querySelectorAll('.add-to-order');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el elemento padre (el ítem del menú)
            const menuItem = this.closest('.menu-item');
            console.log(menuItem);
            
            // Obtener los datos del plato
            const dishName = menuItem.getAttribute('data-name');
            const dishPrice = menuItem.getAttribute('data-price');
            
            // Guardar en localStorage
            addToOrder(dishName, dishPrice);
            
            // Opcional: Feedback visual
            this.textContent = '¡Añadido!';
            setTimeout(() => {
                this.textContent = 'Añadir a mi pedido';
            }, 1000);
        });
    });
    
    // Función para añadir platos al pedido
    function addToOrder(name, price) {
        // Obtener el pedido actual de localStorage
        let currentOrder = JSON.parse(localStorage.getItem('order')) || [];
        
        // Añadir el nuevo plato
        currentOrder.push({ name, price });
        
        // Guardar de nuevo en localStorage
        localStorage.setItem('order', JSON.stringify(currentOrder));
    }
});

let contenedorMenu = document.querySelector(".contenedorMenu");
let checkMenu = document.getElementById("check-menu");
function guardarMenu(){
    checkMenu.checked = false;
}
/*
contenedorMenu.addEventListener('click',()=>{
    guardarMenu()
});
*/