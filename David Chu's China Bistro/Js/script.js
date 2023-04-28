//  LOAD FILES....

window.addEventListener('load', function() {
    document.getElementById('soinner').style.display = 'block';
  });
  
  // Hide the loading image once the content has finished loading
  window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('spinner').style.display = 'none';
  });


// apply spinner img on nav link

const link = document.querySelectorAll('.nav-link'); // Replace 'a' with the selector for your link
const loading = document.getElementById('spinner');

link.forEach((element) => {
     element.addEventListener('click', function() {
        loading.style.display = 'block';
      });
})

window.addEventListener('load', function() {
    loading.style.display = 'none';
  });


//  apply spinner on menu img

const menu = document.querySelectorAll('.menus'); // Replace 'a' with the selector for your link

menu.forEach((element) => {
     element.addEventListener('click', function() {
        loading.style.display = 'block';
      });
})

window.addEventListener('load', function() {
    loading.style.display = 'none';
  });












  
  