import "./styles.css";
import "./content.js";
import { about } from "./about.js";
import { home } from "./content.js";
import { cookies } from "./cookies.js";

let navButtons = document.querySelectorAll("button");

navButtons[0].addEventListener("click", () => {
	home();
})
navButtons[1].addEventListener("click", () => {
	about();
})
navButtons[2].addEventListener("click", () => {
	cookies();
})