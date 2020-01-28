// console.log('navbar');
import { toggle } from './ui.js';

console.log(NOMBRE);

const navbar = document.querySelector('#navbar');
const searchIcon = document.querySelector('#navbar-search');

const handleNavBar = toggle(navbar);
// const handleNavBar = changeClassName(navbar);

searchIcon.addEventListener('click', () => (
    handleNavBar('no-search', 'search'),
    console.log('click en search..')
  ));