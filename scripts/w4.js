const button = document.querySelector("#clickme");
button.style.backgroundColor = "#4A4E69";
button.style.color = "#f2e9e4";
button.style.padding = ".5rem";
button.style.cursor = "pointer";
button.addEventListener("click", ()=>{
    let num = Number(window.localStorage.getItem("total-clicked"));
    num = num + 1;
    localStorage.setItem("total-clicked", num);
   
    setTimeout(function(){
        window.location.reload();
     }, 1000);

});

const total = document.querySelector("#results");

if(total){
    let numTotal = localStorage.getItem("total-clicked") ;
    total.insertAdjacentHTML("afterbegin", numTotal)
    
}
let img = document.querySelector(".kitties[alt='kitty']")
img.addEventListener("mouseover",()=>{
    img.src = "../images/loading.jpg"
    setTimeout(function(){
        img.src = "../images/boo.jpg"
     }, 5000);
})
img.addEventListener("mouseout",()=>{
    img.src = "../images/nezu.jpg"
})
