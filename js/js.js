let contenedorMenu = document.querySelector(".contenedorMenu");
let checkMenu = document.getElementById("check-menu");
let idedntificador = document.getElementById('prueba')


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
 */
function identifica(){
    if (checkMenu.checked==false){
        idedntificador.classList.add('aqui');
    }
}