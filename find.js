const fetch = require("node-fetch");

async function getPokemons(namePokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200').then((response) => {
        return response.json();
    }).then(function(pokemons){
        const resultFilter = pokemons.results.find(({name}) =>  name === namePokemon)
        console.log(resultFilter)
    })
    .catch(function(err) {
        console.error(err);
    });

}

async function getPokemonsAwait(namePokemon) {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        const pokemons = await response.json()
        const resultFilter = pokemons.results.find(({name}) =>  name === namePokemon)
        console.log(resultFilter)
    } catch (error) {
        console.error(error)   
    }
}

getPokemonsAwait('surskit')