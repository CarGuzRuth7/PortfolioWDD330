//Pke API
let URL = "https://pokeapi.co/api/v2/pokedex/";

//get and fetch API
async function fetchAPI(name){
    const response = await fetch(URL + `${name}`)
    const product = await response.json();
    return product;
}
//Get the URL parameter through the anchor link in main page
function getParam(param){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const game = urlParams.get(param)
    return game
}
//display results in the HTML
async function gameDetails(gameName){
    const game = await fetchAPI(gameName);
    const div = document.querySelector("#region-details");
    let regionName = game.name;
    let pokemonEntries = game.pokemon_entries.map((item)=>{ 
        let pokemon = item.pokemon_species.name
        return `<li>${pokemon}</li>`})
   // console.log(pokemonEntries)    

    const template = `<h2>${regionName.toUpperCase()} POKEDEX</h2>
    <ul>
        ${pokemonEntries.join("")}
    </ul>`;

    div.innerHTML = template
}
/**---------------------------------------------------- */

const gameName = getParam("game");
gameDetails(gameName)
