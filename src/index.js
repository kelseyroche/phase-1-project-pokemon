document.addEventListener("DOMContentLoaded", () => {
    //callbacks
    const pokemonContainer = document.getElementById("pokemon-container");
    const pokemonForm = document.getElementById("pokemon-form");
  
    //fetch pokemon info
    function loadPokemon() {
      fetch("http://localhost:3000/pokemon")
        .then(response => response.json())
        .then(data => {
          data.forEach(pokemon => renderPokemon(pokemon));
        });
    }
  
    //render the pokemon
    function renderPokemon(pokemon) {
      const pokemonCard = document.createElement("div");
      pokemonCard.className = "pokemon-card";
  
      pokemonCard.innerHTML = `
        <img src="${pokemon.imageUrl}" alt="${pokemon.name}" class="pokemon-image">
        <h3>${pokemon.name}</h3>
        <p>Type: ${pokemon.type}</p>
        <p>Attack Move: ${pokemon.popularAttackMove}</p>
        <p>Defense Move: ${pokemon.popularDefendingMove}</p>
      `;
      pokemonContainer.appendChild(pokemonCard);
    }
  
    //form code
    pokemonForm.addEventListener("submit", event => {
      event.preventDefault();
      
      const newPokemon = {
        name: event.target.name.value,
        type: event.target.type.value,
        popularAttackMove: event.target.attackMove.value,
        popularDefendingMove: event.target.defendMove.value,
        imageUrl: event.target.imageUrl.value
      };
  
      renderPokemon(newPokemon);
      event.target.reset();
    });
  
    loadPokemon();
  });
  