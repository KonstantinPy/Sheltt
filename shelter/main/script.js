const burger = document.querySelector('.burger_menu');
const burgerMenu = document.querySelector('.header_nav');
const logo = document.querySelector('.header_logo');
const bodyHidden = document.body;
const navList = document.querySelectorAll('.header_link');
const header = document.querySelector('.header');
const overlay = document.querySelector('overlay')



function toggleMenu() {
    burger.classList.toggle('open');
    burgerMenu.classList.toggle('open');
    logo.classList.toggle('open');
    bodyHidden.classList.toggle('open');
    navList.classList.toggle('open');
    overlay.classList.toggle('overlay');
    header.classList.toggle('open');

}

function addEventListeners() {
    burger.addEventListener('click', toggleMenu);
    div.addEventListener('click', toggleMenu);
    navList.forEach((el, index) => {
      el.addEventListener('click', toggleMenu)
      });
  }
  
  addEventListeners();
