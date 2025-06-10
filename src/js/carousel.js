export function initCarousel() {
	const slides = document.querySelector(".carousel__slides");
	const totalSlides = document.querySelectorAll(".carousel__slide").length;
	const dotsContainer = document.querySelector(".carousel__dots");
	let currentIndex = 0;

	// Set accessibility attributes on slides container
	slides.setAttribute("role", "region");
	slides.setAttribute("aria-live", "polite");
	slides.setAttribute("aria-label", "Carrusel de promociones");

	// Generate dots based on the number of slides
	for (let i = 0; i < totalSlides; i++) {
		const dot = document.createElement("button");
		dot.classList.add("carousel__dot");
		dot.dataset.slideTo = i;
		dotsContainer.appendChild(dot);
		dot.addEventListener("click", () => {
			showSlide(i);
			resetAutoSlide(); // Reset auto-slide on dot click
		});
	}

	// Function to show the slide based on the index
	function showSlide(index) {
		if (index < 0) index = totalSlides - 1;
		if (index >= totalSlides) index = 0;
		slides.style.transform = `translateX(-${index * 100}%)`;
		currentIndex = index;
		updateDots();
		updateAriaHidden();
	}

	// Function to update the active dot
	function updateDots() {
		const dots = document.querySelectorAll(".carousel__dot");
		dots.forEach((dot) => dot.classList.remove("carousel__dot--active"));
		dots[currentIndex].classList.add("carousel__dot--active");
	}

	// Function to update aria-hidden on slides
	function updateAriaHidden() {
		const slidesAll = document.querySelectorAll(".carousel__slide");
		slidesAll.forEach((slide, i) => {
			slide.setAttribute("aria-hidden", i !== currentIndex);
		});
	}

	// Init first dot and aria-hidden
	updateDots();
	updateAriaHidden();

	// Add event listeners to the navigation buttons
	document
		.querySelector(".carousel__nav--prev")
		.addEventListener("click", () => {
			showSlide(currentIndex - 1);
			resetAutoSlide(); // Reset auto-slide on manual click
		});

	document
		.querySelector(".carousel__nav--next")
		.addEventListener("click", () => {
			showSlide(currentIndex + 1);
			resetAutoSlide(); // Reset auto-slide on manual click
		});

	// Auto slide functionality
	let autoSlide = setInterval(() => {
		showSlide(currentIndex + 1);
	}, 10000);

	// Function to reset auto slide
	function resetAutoSlide() {
		clearInterval(autoSlide);
		autoSlide = setInterval(() => {
			showSlide(currentIndex + 1);
		}, 10000);
	}

	// Touch swipe support
	let touchStartX = 0;
	let touchEndX = 0;

	slides.addEventListener("touchstart", (e) => {
		touchStartX = e.changedTouches[0].screenX;
	});

	slides.addEventListener("touchend", (e) => {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipeGesture();
	});

	function handleSwipeGesture() {
		const swipeThreshold = 50;

		if (touchEndX < touchStartX - swipeThreshold) {
			// Swipe izquierda → siguiente slide
			showSlide(currentIndex + 1);
			resetAutoSlide();
		} else if (touchEndX > touchStartX + swipeThreshold) {
			// Swipe derecha → slide anterior
			showSlide(currentIndex - 1);
			resetAutoSlide();
		}
	}

}
