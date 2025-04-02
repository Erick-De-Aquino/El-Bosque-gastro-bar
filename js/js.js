let contenedorMenu = document.querySelector(".contenedorMenu");
let checkMenu = document.getElementById("check-menu");
//let idedntificador = document.getElementById('prueba')


/*
funcion que guarda el menu desplegable al tocar cualquer 
parte de la pantalla
*/
function guardarMenu(){
    checkMenu.checked = false;
}
contenedorMenu.addEventListener('click',()=>{
    guardarMenu()
})

/**
 funcion para cambiar color de fondo del link del menu
 desplegable en eel que se esta actualmente
 
function identifica(){
    if (checkMenu.checked==false){
        idedntificador.classList.add('aqui');
    }
}
*/

/************************************************************************/
/******************************CRRITO************************************/
/************************************************************************/
// Inicializamos el carrito recuperándolo del localStorage o creando un array vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Seleccionamos todos los elementos que representan un producto
const platos = document.querySelectorAll('.contenido');

platos.forEach(function(plato) {
  plato.addEventListener('click', function() {
    // Obtenemos el nombre del plato
    const nombrePlato = this.querySelector('.nombreDesc .nombre p').textContent;
    
    // Obtenemos el precio y lo convertimos en número
    let precioTexto = this.querySelector('.precio p').textContent;
    precioTexto = precioTexto.replace('€', '').trim().replace(',', '.');
    const precio = parseFloat(precioTexto);

    // Comprobamos si el producto ya está en el carrito (se podría utilizar un identificador único, yo he utilizado el nombre)
    const productoExistente = carrito.find(item => item.nombre === nombrePlato);

    if (productoExistente) {
      // Si el producto ya está en el carrito aumentamos su cantidad
      productoExistente.cantidad++;
    } else {
      // Si el producto no se encuentra en el carrito, lo añadimos con cantidad 1
      carrito.push({
        nombre: nombrePlato,
        precio: precio,
        cantidad: 1
      });
    }
    
    // Actualizamos el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log("Carrito actualizado:", carrito);
  });
});


