const navbar = document.querySelector('#navbar');

function toggle(elemento) {
  return function (removeClass, addClass) {
    navbar.classList.remove(removeClass);
    navbar.classList.add(addClass);
  };
}

setTimeout( () => handleNavBar('no-search', 'search'), 1000);