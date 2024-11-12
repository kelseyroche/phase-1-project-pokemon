document.addEventListener("DOMContentLoaded", () => {
    //callbacks
    const pokemonContainer = document.getElementById("pokemon-container");
    const pokemonForm = document.getElementById("pokemon-form");
  
    //fetch pokemon info
    function loadPokemon() {
      fetch("http://localhost:3500/pokemon")
        .then(response => response.json())
        .then(data => {
          data.forEach(pokemon => renderPokemon(pokemon));
        });
    }
  
    //render the pokemon
    function renderPokemon(pokemon) {
      const pokemonCard = document.createElement("div");
      pokemonCard.className = "pokemon-card";
      pokemonCard.addEventListener('click' , () => handleClick(pokemon));
      pokemonCard.innerHTML = `
        <img src="${pokemon.imageUrl}" alt="${pokemon.name}" class="pokemon-image">
        
      `;
      pokemonContainer.appendChild(pokemonCard);
      
    }
  //click event 
  function handleClick(pokemon){
    

    }
  
    //click event code
    

    //form code
    pokemonForm.addEventListener("submit", event => {
      event.preventDefault();
      
      const newPokemon = {
        name: event.target.name.value,
        type: event.target.type.value,
        ability: event.target.attackMove.value,
        imageUrl: event.target.imageUrl.value
      };
  
      renderPokemon(newPokemon);
      event.target.reset();
    });
  
    loadPokemon();
  });
  