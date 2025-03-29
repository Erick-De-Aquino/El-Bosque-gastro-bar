let contenedorMenu = document.querySelector(".contenedorMenu");
let checkMenu = document.getElementById("check-menu");
console.log(checkMenu.value);

contenedorMenu.addEventListener('click',()=>{
    checkMenu.checked = false;
})