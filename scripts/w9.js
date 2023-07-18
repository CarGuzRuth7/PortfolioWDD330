//
function getFavList(){
    const favList = document.querySelector(".fav-list");
    let favPokeList =  JSON.parse(localStorage.getItem("fav-list")) || [];
    favPokeList.forEach((item)=>{
    let div = document.createElement("div")
    let img = document.createElement("img");   
    let deleteBtn = document.createElement("button");
    div.style.width = "96px";
    div.style.display= "inline-block";
    div.style.position = "relative"
    deleteBtn.innerHTML = "X";
    deleteBtn.style.position = "absolute";
    deleteBtn.style.right = "0";
    deleteBtn.style.fontSize = "25px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.border = "none";
    deleteBtn.style.backgroundColor = "transparent";
    deleteBtn.classList.add("delete-pokemon")
    deleteBtn.setAttribute("data-id", item.id)
    img.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`);
    img.setAttribute("alt", "pokemon image");
    div.appendChild(deleteBtn)
    div.appendChild(img);
    favList.appendChild(div)
    
});
}
getFavList()
const deleteBtn = document.querySelectorAll(".delete-pokemon"); 
    deleteBtn.forEach((del)=>{
        del.addEventListener("mouseover", ()=>{del.style.color = "red";});
        del.addEventListener("mouseout", ()=>{del.style.color = "black";});
        del.addEventListener("click",()=>{
            let idPokedex = del.getAttribute("data-id");
            let favList = JSON.parse(localStorage.getItem("fav-list")) || [];
            const index = favList.findIndex((poke) => poke.id === idPokedex);
            if (index !== -1) { //get specific index and from that specific list
                favList.splice(index, 1);
                window.localStorage.setItem("fav-list", JSON.stringify(favList));
               setTimeout(function(){
                window.location.reload();
             }, 1000);
             }
        });
    });
    
