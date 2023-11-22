"use strict";

// ******************************* CONSTANTES *******************************

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const leftArrow     = document.querySelector(".arrow_left");
const rightArrow    = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");



// ******************************* VARIABLES *******************************

let index = 0;
let currentSlide = 0;
let allDots;

// ******************************* FONCTIONS *******************************

function goLeft() {
  index      = (index + slides.length - 1) % slides.length;
  updateImage();
  updateDot();
}

function goRight() {
  index      = (index + 1 ) % slides.length;
  updateImage();
  updateDot();
}

function updateDot() {
  const dotElements = document.querySelectorAll(".dot");
  
  dotElements.forEach(dot => {
    dot.classList.remove("dot_selected");
  });
  
  dotElements[index].classList.add("dot_selected");
}

function updateImage() {
  const imageElement = document.querySelector(".banner-img");
  const image = slides[index].image;
  imageElement.src = "./assets/images/slideshow/" + image;
}


function setArrows() {
  leftArrow.addEventListener("click", goLeft);
  rightArrow.addEventListener("click", goRight);
}

function setDots() {
  slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    
    if (index === 0) {
      dot.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dot);
  });
}

// ******************************* CODE PRINCIPAL *******************************

setArrows();
setDots();






