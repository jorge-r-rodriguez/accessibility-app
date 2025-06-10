export function initCarousel() {
  const slides = document.querySelector(".carousel__slides");
  const totalSlides = document.querySelectorAll(".carousel__slide").length;
  const dotsContainer = document.querySelector(".carousel__dots");
  let currentIndex = 0;

  // Generate dots based on the number of slides
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.classList.add("carousel__dot");
    dot.dataset.slideTo = i;
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  }
  // Function to show the slide based on the index
  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    updateDots();
  }

  // Function to update the active dot
  function updateDots() {
    const dots = document.querySelectorAll(".carousel__dot");
    dots.forEach((dot) => dot.classList.remove("carousel__dot--active"));
    dots[currentIndex].classList.add("carousel__dot--active");
  }

  // Init first dot
  updateDots();

  // Add event listeners to the navigation buttons
  document
    .querySelector(".carousel__nav--prev")
    .addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });

  document
    .querySelector(".carousel__nav--next")
    .addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });

  // Auto slide functionality
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 10000);
}
