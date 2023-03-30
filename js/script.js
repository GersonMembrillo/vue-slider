/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/

const { createApp } = Vue;

createApp({
	data() {
		return {
			activeIndex: 0,
			autoscroll: null,
			slides: [
				{
					image: 'img/01.webp',
					title: "Marvel's Spiderman Miles Morale",
					text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
				},
				{
					image: 'img/02.webp',
					title: 'The last of us - Part 1',
					text: 'Set in the post-apocalyptic United States, follow the story of survivors Joel and Ellie as they work together to survive their westward journey across what remains of the country to find a possible cure for the modern plague that has nearly decimated the entire human race.',
				},
				{
					image: 'img/03.webp',
					title: 'Fortnite',
					text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
				},
				{
					image: 'img/04.webp',
					title: 'Stray',
					text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
				},
				{
					image: 'img/05.webp',
					title: 'Horizon: Forbidden West',
					text: 'Horizon Forbidden West continues the story of Aloy, a young hunter of the Nora tribe and a clone of the Old World scientist Elisabet Sobeck, as she leads a band of companions on a quest to the arcane frontier known as the Forbidden West.',
				},
			],
		};
	},
	methods: {
		nextSlide() {
			this.activeIndex++;
			if (this.activeIndex > this.slides.length - 1) {
				this.activeIndex = 0;
			}
		},
		prevSlide() {
			this.activeIndex--;
			if (this.activeIndex < 0) {
				this.activeIndex = this.slides.length - 1;
			}
		},
		changeSlide(slideIndex) {
			this.activeIndex = slideIndex;
		},
	},
}).mount('#app');

// const sliders = document.querySelector('.slideContainer');
// const thumbnails = document.querySelector('.thumbContainer');

// let currentImage = 0;
// let slides = '';
// let thumbs = '';
// for (let i = 0; i < images.length; i++) {
// 	slides += `<div class="slide">
// 	<img src="${images[i]}" alt="game-${i}">
// </div>`;
// 	thumbs += `<div class="thumb">
// 	<img src="${images[i]}" alt="game-${i}">
// </div>`;
// }

// sliders.innerHTML += slides;
// thumbnails.innerHTML += thumbs;

// document.querySelectorAll('.slide')[currentImage].classList.add('active');
// document.querySelectorAll('.thumb')[currentImage].classList.add('inner-border');

// const down = document.querySelector('.down');
// const up = document.querySelector('.up');

// down.addEventListener('click', goDown);

// function goDown() {
// 	document.querySelectorAll('.slide')[currentImage].classList.remove('active');
// 	document.querySelectorAll('.thumb')[currentImage].classList.remove('inner-border');
// 	if (currentImage === images.length - 1 && currentImage === images.length - 1) {
// 		currentImage = 0;
// 	} else {
// 		currentImage++;
// 	}
// 	document.querySelectorAll('.slide')[currentImage].classList.add('active');
// 	document.querySelectorAll('.thumb')[currentImage].classList.add('inner-border');
// }

// up.addEventListener('click', goUp);

// function goUp() {
// 	document.querySelectorAll('.slide')[currentImage].classList.remove('active');
// 	document.querySelectorAll('.thumb')[currentImage].classList.remove('inner-border');
// 	if (currentImage === 0 && currentImage === 0) {
// 		currentImage = images.length - 1;
// 	} else {
// 		currentImage--;
// 	}
// 	document.querySelectorAll('.slide')[currentImage].classList.add('active');
// 	document.querySelectorAll('.thumb')[currentImage].classList.add('inner-border');
// }
