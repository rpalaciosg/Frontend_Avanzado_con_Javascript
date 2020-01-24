// console.log('navbar');
import toggle from './ui.js';

const navbar = document.querySelector('#navbar');
const searchIcon = document.querySelector('#navbar-search');

const handleNavBar = toggle(navbar);

searchIcon.addEventListener('click', () => (
    handleNavBar('no-search', 'search'),
    console.log('click en search..')
  ));