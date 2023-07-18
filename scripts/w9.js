//
function getFavList(){
    const favList = document.querySelector(".fav-list");
    let favPokeList =  JSON.parse(localStorage.getItem("fav-list")) || [];
    favPokeList.forEach((item)=>{
    let img = document.createElement("img");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.forEach((del)=>{
        del.style.position = "absolute";
        del.style.right = "0";
        del.style.fontSize = "25px";
        del.style.cursor = "pointer";
        del.style.border = "none";
        del.style.backgroundColor = "transparent";
        del.addEventListener("mouseover", ()=>{
            del.style.color = "red";

        })
        del.addEventListener("mouseout", ()=>{
            del.style.color = "black";

        })
    });
    del.addEventListener("click",()=>{
        let idPokedex = item.id
        const index = favList.findIndex((poke) => poke.id === idPokedex);
        if (index !== -1) { //get specific index and from that specific list
            favList.splice(index, 1);
            window.localStorage.setItem("fav-list", JSON.stringify(favList));
           setTimeout(function(){
            window.location.reload();
         }, 1000);
         }
    });

    img.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`);
    favList.appendChild(deleteBtn)
    favList.appendChild(img);
    
});
}
getFavList()