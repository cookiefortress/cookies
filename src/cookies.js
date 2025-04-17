let cookies = function() {
	let content = document.querySelector("div#content");
	content.innerHTML = "";
	let header = document.createElement("h1");
	header.textContent = "cookies... cookiiiies!";
	content.appendChild(header);
	let slogan = document.createElement("aside");
	slogan.textContent = "we make the best cookies in the world... so you don't have to!";
	content.appendChild(slogan);
	let hr = document.createElement("hr");
	hr.style.width = "90%";
	hr.style.color = "black";
	content.appendChild(hr);
}

export { cookies };