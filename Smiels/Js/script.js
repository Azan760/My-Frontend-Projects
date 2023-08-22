
let menu = document.getElementById('menu');
let menu_close = document.getElementById('menu-close');
let sidebar = document.getElementById('sidebar');
let close = document.querySelectorAll('.close');

   menu.addEventListener('click',() => {
      menu.classList.toggle('fa-bars');
      for (const iterator of close) {
         iterator.classList.toggle('close');
   }
});

menu_close.addEventListener('click',() => {
   menu.classList.toggle('fa-bars');
   for (const iterator of close) {
        iterator.classList.toggle('close');
   }
});





