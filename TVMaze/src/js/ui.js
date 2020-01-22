const navbar = document.querySelector('#navbar');

const handleNavBar = (removeClass, addClass) => {
  navbar.classList.remove(removeClass);
  navbar.classList.add(addClass);
};

setTimeout( () => handleNavBar('no-search', 'search'), 1000);