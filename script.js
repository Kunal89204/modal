let images = document.querySelectorAll(".image"); //querySelectorAll("") should be used for selecting all the elements with same class / id and not the container
let modal = document.getElementById("modal");

let modalImage = document.getElementById("modal-image");
let imageDesp = document.getElementById("description");

//array of descriptions / paragraphs that need to be added
const descriptions = [
  "Warrior under the dark night ready for the battle on the moutains",
  "Eagle enjoys its flight in the early morning surrounded with mist",
  "Entry into a new world with spaceship floating and dinosaurs around.",
  "Night light of a city in Japan",
];

// forEach(first arg: indiviual element, index: the index starting from 0)
descriptions.forEach((desp, index) => {
  images[index].addEventListener("click", () => {
    modalImage.src = images[index].src; //targeted the images with index
    imageDesp.innerHTML = desp; //set the image description into the paragraph
  });
});
