let addToy = false;
let url = "http://localhost:3000/toys"
let toyCollection = document.querySelector("div#toy-collection")

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


fetch(url)
.then(res => res.json())
.then(data => data.forEach(console.log(data.name))) 

function addToys() {

let div = document.createElement("div")
div.className = "card" 
let h2 = document.createElement("h2")
h2.innerText = "...data.name"
let img = document.createElement("img")
img.src = "...data.image"
img.className = "toy-avatar"
let p = document.createElement("p")
p.innerText = "...data.likes"
let createButton = document.createElement("button")
createButton.className = "like-btn"
createButton.innerText = "Like"

div.append(h2, img, p, createButton)

toyCollection.append(div)


}

addToys()


