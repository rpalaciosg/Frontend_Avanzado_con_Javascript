// const data = [1,2,3,4];

// const multiplicar = value => item => item * value;

// const multiplicarPor2 = multiplicar(2);
// const multiplicarPor5 = multiplicar(5);

// const result = data.map(multiplicarPor5);

// console.log(result); // me devuelve el resultado del array multiplicado x 2

const navbar = document.querySelector('#navbar');
const logo = document.querySelector('#navbar .navbar-log');
const searchIcon = document.querySelector('#navbar-search');

const toggle = elemento => (removeClass, addClass) =>{
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
};

const handleNavBar = toggle(navbar);

const handleLogClassName = toggle(logo);

searchIcon.addEventListener('click', () => (
  handleNavBar('no-search', 'search'),
  console.log('click en search..')
));

// setTimeout( () => handleNavBar('no-search', 'search'), 1000);

// handleLogClassName('', 'test-class');