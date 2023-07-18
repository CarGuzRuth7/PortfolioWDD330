let URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; //${pokemonIndex}.png"

//get and fetch API
async function fetchAPI(pokemonIndex){
    const response = await fetch(URL + `${pokemonIndex}.png`);
    const product = await response.json();
    return product;
};

function displayPokeImg(){
    //random num between 1-150
    let random = Math.floor(Math.random() * (1010 - 1) + 1);
    const imgList = document.querySelector(".pokeImg");
    let templateLst = `<img data-id="${random}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random}.png" alt="Pokemon Id ${random}">
    <img data-id="${random-3}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random-3}.png" alt="Pokemon Id ${random-3}">
    <img data-id="${random+1}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random+1}.png" alt="Pokemon Id ${random+1}">
    <img data-id="${random+5}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random+5}.png" alt="Pokemon Id ${random+5}">
    <img data-id="${random-9}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random-9}.png" alt="Pokemon Id ${random-9}">
    `;
    imgList.innerHTML = templateLst;

};

function addToFavList(id){
    let favList =  JSON.parse(localStorage.getItem("fav-list")) || [];
    console.log(favList)
    const index = favList.findIndex((item)=> item === id);
   // console.log(index)
    if ( index === -1) {
        favList.push({id:id});
        window.localStorage.setItem("fav-list", JSON.stringify(favList));
    }
};


displayPokeImg()
const imgList = document.querySelectorAll(".pokeImg img");
console.log(imgList)
imgList.forEach((img)=>{
    img.addEventListener("click",()=>{
        let id= img.getAttribute("data-id");
        addToFavList(id);
        setTimeout(function(){
            window.location.reload();
         }, 500);
    });
});

const favList = document.querySelector(".fav-list");
let favPokeList =  JSON.parse(localStorage.getItem("fav-list")) || [];
favPokeList.forEach((item)=>{
    let img = document.createElement("img");
    img.setAttribute("src", URL + item.id + ".png");
    favList.appendChild(img);
});

let refresh = document.querySelector("#refresh");
refresh.addEventListener("click", ()=>{
    window.location.reload()
})
refresh.style.backgroundColor = "#4A4E69";
refresh.style.color = "#f2e9e4";
refresh.style.padding = ".5rem";
refresh.style.marginTop = "1rem";
refresh.style.cursor = "pointer";
