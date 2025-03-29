let contenedorMenu = document.querySelector(".contenedorMenu");
let checkMenu = document.getElementById("check-menu");



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

