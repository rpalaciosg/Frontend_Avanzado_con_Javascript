// console.log('navbar');
import { toggle } from './ui.js';

const navbar = document.querySelector('#navbar');
const searchIcon = document.querySelector('#navbar-search');
const closeIcon = document.querySelector('#navbar-close');

// const handleNavBar = changeClassName(navbar);
const handleNavBar = toggle(navbar);

searchIcon.addEventListener('click', () => (
    handleNavBar('no-search', 'search'),
    console.log('click en search..')
  ));


  closeIcon.addEventListener('click', () => {
    toggle(navbar)('search','no-search'); // funciona igual la linea de abajo
    // handleNavBar('search','no-search');
    
  });

