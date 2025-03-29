let body = document.getElementById("body");
let checkMenu = document.getElementById("check-menu");
console.log(checkMenu.value);

body.addEventListener('click',()=>{
    checkMenu.checked = false;
})