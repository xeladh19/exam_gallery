import "./GalleryList.scss";
import DB from "../../core/DB";
import Slide from "../Slide/Slide";
import getTemplate from "./GalleryListTemplate";

export default class GalleryList {
	constructor(data) {
		DB.setApiURL(data.url);
		this.el = document.querySelector(data.el);

		this.slides = []; //On place les données chargée ci dessous dans ce tableau vide
		this.loadSlides(); //On charge les données des images pour hydrater this.image

		this.slidesTotal = null;
		this.slidesdepart = 0;
		this.sliderListEl = null;

		this.duree = 1500;
	}

	async loadSlides() {
		const slides = await DB.findAll();
		slides.forEach((slide) => {
			this.slides.push(new Slide({ parent: this, slide }));
		});
		this.render();
	}
	/**
	 * Rendu de GalleryList
	 */
	render() {
		/**
		 * On place le template de la gallery dans #app
		 */
		this.el.innerHTML = getTemplate();
		/**
		 * Activation des éléments intéractifs
		 */
		this.activerBtns();
		this.renderSlide();
		this.renderSlideMenu();
		this.slidesTotal = this.slides.length;
		this.activateMenu();
	}

	//	this.ulEl = this.el.querySelector(".slides ul");
	//	this.menuEl = this.el.querySelector("ul.slides");

	renderSlide() {
		this.sliderListEl = this.el.querySelector("div.slides ul");
		this.slides.forEach((slide) => {
			slide.render(this.sliderListEl);
		});
	}
	renderSlideMenu() {
		this.menuListEl = this.el.querySelector("ul.slides ");
		//this.slides.forEach((slide) => {
		//slide.renderSlideMenu();
		//});

		//Activation du bouton menu
	}

	activateMenu() {
		this.el.querySelectorAll(".navBtn").forEach((btn) => {
			btn.onclick = (e) => {
				e.preventDefault();
				this.displaySlide();
			};
		});
	}

	activerBtns() {
		this.slider = this.el.querySelector(".slides ul ");
		this.slidesdepart = 0;
		this.el.querySelector(".next").addEventListener("click", () => {
			this.slideNext();
		});

		this.el.querySelector(".previous").addEventListener("click", () => {
			this.slidePrevious();
		});
	}

	slideNext() {
		this.slidesdepart === this.slidesTotal - 1
			? (this.slidesdepart = 0)
			: this.slidesdepart++;

		this.displaySlide();
	}
	slidePrevious() {
		this.slidesdepart === 0
			? (this.slidesdepart = this.slidesTotal - 1)
			: this.slidesdepart--;
		this.displaySlide();
	}

	// BOUTON PLAY ----------
	play() {
		!this.timer
			? (this.timer = setInterval(() => {
					this.slideNext();
			  }, this.duree))
			: this.stop();
	}
	stop() {
		clearInterval(this.timer);
		this.timer = null;
	}
	displaySlide() {
		this.sliderListEl.style.left = "-" + this.slidesdepart + "00%";
	}
}
