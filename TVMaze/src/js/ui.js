// const data = [1,2,3,4];

// const multiplicar = value => item => item * value;

// const multiplicarPor2 = multiplicar(2);
// const multiplicarPor5 = multiplicar(5);

// const result = data.map(multiplicarPor5);

// console.log(result); // me devuelve el resultado del array multiplicado x 2


// const logo = document.querySelector('#navbar .navbar-log');


const toggle = elemento => (removeClass, addClass) =>{
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
};

export default toggle;

// const handleLogClassName = toggle(logo);



// setTimeout( () => handleNavBar('no-search', 'search'), 1000);

// handleLogClassName('', 'test-class');