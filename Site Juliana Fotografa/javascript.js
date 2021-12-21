let btn = document.getElementById('button');
let nav = document.getElementsByTagName('ul')[0];
let menu = document.getElementById('menu-icon');

btn.addEventListener('click', function(){
  nav.classList.toggle('active');
  menu.classList.toggle('active');

});