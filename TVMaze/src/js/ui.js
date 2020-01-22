const navbar = document.querySelector('#navbar');

const toggle = elemento => (removeClass, addClass) =>{
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
};

const handleNavBar = toggle(navbar);

setTimeout( () => handleNavBar('no-search', 'search'), 1000);