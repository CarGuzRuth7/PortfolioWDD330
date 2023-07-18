//get and fetch API
async function fetchAPI(pokemonName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const product = await response.json();
    return product;
};

async function findPokemon(input){
    try{
        let info = await fetchAPI(input);
        let pokemon = document.querySelector(".pokemon-info");
        console.log(info)
        let name = info.name;
        let poquedex = info.id;
        let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.id}.png`
        let stats = info.stats.map((stat)=>{
            let pokeStatName = stat.stat.name;
            let basStat =stat.base_stat
            return `<li><b>${pokeStatName.toUpperCase()}:</b> ${basStat}</li>`;
        })
        let type = info.types.map((t)=>{return t.type.name})
        console.log(type)

        let p = document.querySelector(".pokemon-info")
        p.innerHTML = `<h2>${name.toUpperCase()}</h2>
        <img src="${img}" alt="image of ${name}">
        <p><b>Pokedex Num:</b> ${poquedex}</p>
        <p><b>Type:</b> ${type}</p>
        <hr>
        <ul>
        <li><h3>Stats</h3></li>
        ${stats.join("")}
        </ul>
        `;


    } catch(err){
        let pokemon = document.querySelector(".pokemon-info")
        pokemon.innerHTML = `<h2>Pokemon Not Found</h2>
        <img src="../images/pikachu-meme.jpg" alt="pikachu meme" width="60%">`;
        console.log(err.message);

        const button = document.querySelector("#searchBtn");
        button.addEventListener("click", (e)=>{
           const input = document.querySelector("#pokemonName").value;
            e.preventDefault();
           findPokemon(input);
        })
    }
}

const button = document.querySelector("#searchBtn");
button.addEventListener("click", (e)=>{
    const input = document.querySelector("#pokemonName").value;
     e.preventDefault();
    findPokemon(input);
})