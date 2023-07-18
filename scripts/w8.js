function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
function setLocalStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
}
const commentBtn = document.querySelector("#commtBtn");
commentBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addCommentToStorage();
});
  
function addCommentToStorage(){
    const comment = document.querySelector("#comment").value;
    const username = document.querySelector("#username").value;
    const inputDate = document.querySelector("#formDateSend");
    const notice = document.querySelector(".notice");
    let d = new Date()
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let date = `${months[d.getMonth()]}, ${d.getDate()} ${d.getFullYear()}`
  
    let reviewLst = getLocalStorage("reviews") || [];
    if(!username == "" || !comment == ""){
      reviewLst.push({comment: comment, name: username, date: inputDate.value = date})
      setLocalStorage("reviews", reviewLst);
      notice.innerHTML = `<p style="color: green;">Your Review was added</p>`;
      setTimeout(function(){
        window.location.reload();
     }, 1000);
    }
    else{
        console.log("comment not added")
        notice.innerHTML = `<p style="color: red;">There was an error and the comment was not added</p>`
    }
}
  
//SHOW REVIEWS ON SCREEN
const reviews = document.querySelector(".reviews");
let commentList = getLocalStorage("reviews") || [];
console.log(commentList);
if (commentList.length === 0) {
    // message to display when there is no user comments yet
    const noCommentsMessage = `<p>No comments yet</p>`;
    reviews.innerHTML = noCommentsMessage;
}
commentList.forEach((item) => {
    let div = document.createElement("div");
    let name = document.createElement("h4");
    let comment = document.createElement("p");
    name.innerHTML = `💬 ${item.name} (${item.date})`;
    comment.innerHTML = item.comment;
    div.style.backgroundColor = "#fefae0";
    div.style.marginTop = ".5rem";
    div.style.padding = ".3rem 1rem";
    div.style.textAlign = "start";
    div.style.border = "2px solid #d0d0d0";
    div.appendChild(name);
    div.appendChild(comment);
    reviews.appendChild(div);
  
});