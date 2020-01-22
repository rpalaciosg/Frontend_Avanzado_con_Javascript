const navbar = document.querySelector('#navbar');

function toggle(elemento) {
  return function (removeClass, addClass) {
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
  };
}

const handleNavBar = toolbar(navbar);

setTimeout( () => handleNavBar('no-search', 'search'), 1000);