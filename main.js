window.addEventListener("scroll", () => {
	const textDivs = document.querySelectorAll(".textDiv");
	const viewportHeight = window.innerHeight;
	const quarterHeight = viewportHeight / 4;
	const centerY = window.scrollY + viewportHeight / 2;

	textDivs.forEach((div) => {
		const rect = div.getBoundingClientRect();
		const divCenterY = rect.top + rect.height / 2;

		const distanceFromCenter = Math.abs(divCenterY - viewportHeight / 2);

		let opacity;
		let weight;
		let size;

		if (divCenterY < quarterHeight) {
			opacity = divCenterY / quarterHeight;
		}

		else if (divCenterY > viewportHeight - quarterHeight) {
			opacity = (viewportHeight - divCenterY) / quarterHeight;
			weight = (viewportHeight - divCenterY) / quarterHeight;
		}

		else {
			opacity = 1;
			weight = 100;
		}

		opacity = Math.max(0, Math.min(1, opacity));
		weight = opacity * 900;
		size = opacity + 3;
		div.style.opacity = opacity;
		div.style.fontWeight = weight;
		div.style.fontSize = size + "vw";
	});
});

window.dispatchEvent(new Event("scroll"));
