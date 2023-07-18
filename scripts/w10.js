function buildNavigation(menu){
    menu.innerHTML = renderNav()

    const priNav = document.querySelector("#primaryNav");
    priNav.style.backgroundColor = "#4A4E69";
    const x = document.querySelector("#hamburgerBtn");
    x.style.backgroundColor = "transparent";
    x.style.border = "none";
    x.style.cursor = "pointer"
    x.addEventListener("mouseover", ()=>{x.style.opacity = ".7";})
    x.addEventListener("mouseout", ()=>{x.style.opacity = "1";})

    x.addEventListener("click", ()=>{
        priNav.classList.toggle("open");
        x.classList.toggle("open");
        
    })

}


function renderNav(){
    return `
    <button id="hamburgerBtn">
        <span><img src="../images/icons8-hamburguesa-40.png" alt="Hamburguesa icon by icons8.com"></span>
        <span><img src="../images/icons8-x-40.png" alt="x icon by icons8.com"></span>
    </button>
    <ul id="primaryNav">
        <li><a href="../index.html">Home</a></li>
        <li><a href="https://pokeapi.co/">Poke API</a></li>
        <li><a href="../week11-14/week11-14.html">Movie Night Planner - Site Plan</a></li>
        <li><a href="https://github.com/CarGuzRuth7">My Github</a></li>
        
    </ul>
   `
    
}
const menu = document.querySelector(".menu");
buildNavigation(menu)