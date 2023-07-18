async function fetchAlertJson(){
      //read alert.json file
  const response = await fetch("../json/pokehello.json");
  if (response.ok) {
    let data = await response.json();
  
    displayResults(data);
  } else {
    throw new Error("Bad Response");
  }

}


function displayResults(data){
    const main = document.querySelector("main");
    const section = document.createElement("section");
    const closeBtn = document.createElement("button");
    const list = [];
    let colorLst = ["#ffe62d", "#7cbeb3"];

    section.classList.add("alert-list");
    section.style.maxWidth = "400px"
    section.style.transform = "translateX(-200%)";
    section.style.transition = "1s ease-in-out";
    section.style.padding = "2rem";
    section.style.position = "fixed";;
    section.style.zIndex = "2";
    section.style.left = "30%";
    section.style.right = "30%";

    section.style.bottom = "20%";
    section.style.borderRadius = "8px";
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "X";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "5px";
    closeBtn.style.top = "5px";
    closeBtn.style.border = "none";
    closeBtn.style.fontWeight = "bold"
    closeBtn.style.backgroundColor = "transparent";
    closeBtn.addEventListener("mouseover", ()=>{
        closeBtn.style.color = "red";
        setTimeout(() => {
            closeBtn.style.color = "black";

          }, 1000);
    })
  
    //iterate though alerts.json
    data.forEach((poke) => {

      const template = `<h2>Wait! This lovely ${poke.name} wants to say HI</h2>
      <img src="${poke.img}">
      <p><b>${poke.tag}</b></p>`;
      list.push(template)

    });

    let randomp = list[Math.floor(Math.random() * list.length)];
    let randomColor = colorLst[Math.floor(Math.random() * colorLst.length)];
    section.style.backgroundColor = randomColor
    section.appendChild(closeBtn);
    section.insertAdjacentHTML("beforeend",  randomp);
    main.appendChild(section);
    setTimeout(() => {
     
      section.style.transform = "translateX(0)";
    }, 1000);
  
    closeBtn.addEventListener("click", () => {
      section.style.display = "none";
    });

}
fetchAlertJson()
