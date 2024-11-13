
    //callbacks
    const pokemonURL= "http://localhost:3500/pokemon";
    const pokemonContainer = document.getElementById('pokemon-container');
    const pokemonForm = document.getElementById('pokemon-form');
  
    //fetch pokemon info
    function getAllPokemon() {
      return fetch(pokemonURL).then(response => {
        return response.json()
      })
    }
    const displayPokemons = () => {
      getAllPokemon().then(pokemonArr =>{
        pokemonArr.forEach(renderPokemon)
        handleClick(pokemonArr[0])
      })

    }
  
    //render the pokemon
    function renderPokemon(pokemon) {
      const pokemonImage = document.createElement('img');
      pokemonImage.src= pokemon.image;
      pokemonContainer.appendChild(pokemonImage);
      pokemonImage.addEventListener('click', () => handleClick(pokemon))
    }

  //click event 
function handleClick(pokemon) {
  const detailImage = el('detail-image');
  
  detailImage.src = pokemon.image;
  el('detail-name').textContent = pokemon.name;
  el('detail-type').textContent = pokemon.type;
  el('detail-ability').textContent = pokemon.ability;

  // mouseover event to change to alternate image
  detailImage.addEventListener('mouseover', () => {
    detailImage.src = pokemon.altImage; 
  });

  // mouseout event to revert to main image
  detailImage.addEventListener('mouseout', () => {
    detailImage.src = pokemon.image;
  });
}

  
    //form code
    pokemonForm.addEventListener("submit", event => {
      event.preventDefault();
      
      const newPokemon = {
        name: event.target.name.value,
        type: event.target.type.value,
        ability: event.target.ability.value,
        image: event.target.image.value
      };
  
      renderPokemon(newPokemon);
      event.target.reset();
    });
    function el(id){
      return document.getElementById(id);
    }
  
    const main= () => {
      displayPokemons()
    }
  getAllPokemon()
  
  main()