//Expandir enu
var btnexp = document.querySelector('#btn-exp')
var menuside = document.querySelector('.menu-lateral')
var contain = document.querySelector('.container')
let btnSair = document.getElementById("btn-sair");

btnexp.addEventListener('click', function(){
    menuside.classList.toggle('expandir')
})

btnexp.addEventListener('click', function(){
    contain.classList.toggle('afastar')
})

btnSair.addEventListener('click', () => {
        location.href = "login.html";  
});