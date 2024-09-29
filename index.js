let currentIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

document.getElementById("nextSlide").addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % totalSlides;
	updateSlidePosition();
});

document.getElementById("prevSlide").addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
	updateSlidePosition();
});

function updateSlidePosition() {
	const offset = -currentIndex * (100 + 151); // Adjust offset based on width and margin
	slides.style.transform = `translateX(${offset}%)`;
}
