let navbar_toggler = document.getElementById("navbar-toggler");
let nav = document.getElementById("nav");
let Close = document.getElementById('close');
navbar_toggler.addEventListener('click',function(e) {

    nav.classList.toggle('nav2');

})

Close.addEventListener('click',function(e) {

    nav.classList.toggle('nav2');
})