//Get last modified
const update = new Date(document.lastModified)
document.querySelector("#last-update").textContent = 
`Last Update: ${update.getMonth()+1}/${update.getDate()}/${update.getFullYear()}   ${update.getHours()}:${update.getMinutes()}:${update.getSeconds()}`;

const date = new Date();
const year = date.getFullYear();
document.querySelector("#date").textContent = year;