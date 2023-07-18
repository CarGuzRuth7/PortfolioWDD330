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

    section.classList.add("alert-list");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "x";
  
    //iterate though alerts.json
    data.forEach((poke) => {
      const message = document.createElement("p");
      const img = document.createElement("img");

      message.innerHTML = poke.tag;
      message.style.backgroundColor = poke.color;

      img.innerHTML = poke.img;

      const template = `<h1>Wait! This lovely ${poke.name} wants to say HI</h1>
      ${img}
      ${message}`;
      list.push(template)
     
    });

    let randomp = list[Math.floor(Math.random() * list.length)];
    section.appendChild(closeBtn);
    section.appendChild(randomp);
    setTimeout(() => {
      main.appendChild(section);
    }, 1000);
  
    closeBtn.addEventListener("click", () => {
      section.style.display = "none";
    });

}
fetchAlertJson()
