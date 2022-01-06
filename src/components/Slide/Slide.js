import getTemplate from "./SlideTemplate";
import getTemplateMenu from "./SlideMenuTemplate";
import "./Slide.scss";

export default class Slide {
	constructor(data) {
		this.parent = data.parent;
		this.id = data.slide.id;
		this.name = data.slide.name;
		this.content = data.slide.content;
		this.image = data.slide.image;
	}
	render(el) {
		const newSlide = document.createElement("div");
		//this.parent.sliderListEl.append(newSlide);

		newSlide.classList.add("slide");
		//newSlide.dataset.id = this.id;
		el.appendChild(newSlide);
		newSlide.outerHTML = getTemplate(this);

		this.renderSlideMenu();
		//this.catchEl();
		this.activateEl();
	}

	renderSlideMenu() {
		//const menu = document.createElement("div");
		//this.parent.menuListEl.append(menu);
		//menu.outerHTML = getTemplateMenu(this);
		//___const SlideMenu = document.createElement("div");
		//this.SlideMenu.outerHTML = getTemplateMenu(this);
		//SlideMenu.outerHTML = getTemplateMenu(this);
		//___this.parent.menuListEl.append(SlideMenu);
		//SlideMenu.classList.add("slide");
		//___SlideMenu.dataset.id = this.id;
		//this.menuListEl.append(SlideMenu);
	}
	catchEl() {
		//this.menuEl = this.parent.menuListEl.querySelector(`[href='#${this.id}']`);
	}
	activateEl() {
		//this.menuEl.onclick = (e) => {
		//e.preventDefault();
		//this.parent.displaySlide(this);
	}
	//}
}
