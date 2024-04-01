// we set the activation for the command "search"
let search = document.querySelector('.search-box');
// activate the class for html elements
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
} 


let navbar = document.querySelector('.navbar');
// no me sale la activacion del menu responsivo, analizar si lo vas a quitar desde el html y el css
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
} 





// have to verfy
function submitform() {
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;


}

