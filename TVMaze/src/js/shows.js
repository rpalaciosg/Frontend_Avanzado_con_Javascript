const templateShow = (principal) => {
  return `
    <div class="card ${principal ? 'principal' : 'secondary close'}">
    <header class="card-header">
      <h2>First movie</h2>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png">
      </div>
      <div class="card-content-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloribus, ab nam, ea quod nihil maxime soluta tempore, quo pariatur explicabo beatae possimus expedita sunt nulla aspernatur! Harum, itaque, quia.
        </p>
        <div class="rating-container">
          <button class="icon">
            <i class="fas fa-star"></i>
          </button>
          <button class="icon">
            <i class="far fa-star"></i>
          </button>
          <button class="icon">
            <i class="far fa-star"></i>
          </button>
        </div>
      </div>
    </div>
  </div>  
  `;
};

//shows es un array
const renderShows = (element, shows) => {
  const htmlShows = shows.map((show) => templateShow(true)).join('');
  console.log(htmlShows);
  element.innerHTML = htmlShows;
};

const renderShowsDOM = text =>{
    const mainSection = document.querySelector('main');
    renderShows(mainSection, [1,2,3,4])
};

renderShowsDOM();

export { renderShowsDOM };