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
  .then(function (data) {
    data.forEach(function (toyObj) {
      addToys(toyObj)
    })
  })

function addToys(toyObj) {

  let div = document.createElement("div")
  div.className = "card"
  let h2 = document.createElement("h2")
  h2.innerHTML = toyObj.name
  let img = document.createElement("img")
  img.src = toyObj.image
  img.className = "toy-avatar"
  let p = document.createElement("p")
  p.innerText = toyObj.likes
  let likeButton = document.createElement("button")
  likeButton.className = "like-btn"
  likeButton.innerText = "Like"

  div.append(h2, img, p, likeButton)

  toyCollection.append(div)


}

let createToyForm = document.querySelector(".add-toy-form");

createToyForm.addEventListener("submit", evt => {
  evt.preventDefault();
  let input1 = evt.target.name.value;
  let input2 = evt.target.image.value;
  fetch(url, {
    method: 'POST',
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },

    body: JSON.stringify({
      "name": `${input1}`,
      "image": `${input2}`,
      "likes": 0
    })
  })
    .then(res => res.json())
    .then(function (createdToys){
      addToys(createdToys)
    })
})