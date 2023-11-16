"use strict";

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

let leftArrow = document.querySelector(".arrow_left");
let rightArrow = document.querySelector(".arrow_right");
let dots = document.querySelectorAll(".dot");

leftArrow.addEventListener("click", () => {
	console.log("Left arrow clicked!");
})

rightArrow.addEventListener("click", () => {
	console.log("Right arrow clicked!");
})

const dotsContainer = document.querySelector(".dots");


slides.forEach((slide, index) => {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	
	if (index === 0) {
		dot.classList.add("dot_selected");
	}
	
	dot.addEventListener("click", () => {
		console.log(`Go to slide ${index + 1}`);
	});
	
	dotsContainer.appendChild(dot);
});
