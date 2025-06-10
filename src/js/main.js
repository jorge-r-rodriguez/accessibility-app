import { data } from "./data.js";
import { initCarousel } from "./carousel.js";
import { Card } from "./components/Card.js";
import { filterData } from "./filterData.js";
import { getSelectedValues } from "./helpers/helpers.js";

// Get elements from the DOM
const cardsContainer = document.getElementById("cards-container");
const filtersForm = document.getElementById("form-filters");
const navToggleButton = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
const filtersToogleButton = document.querySelector(".filters-toogle-button");
const filters = document.querySelector(".filters-wrapper");
const closeFiltersButton = document.getElementById("close-bilters-button");

// Function to change visibility of elements.
function toogleVisibility(element, triggerElement) {
  const isVisible = element.getAttribute("data-visible") === "true";
  element.setAttribute("data-visible", !isVisible);
  triggerElement.setAttribute("aria-expanded", !isVisible);
}

// Nav toogle functionality
navToggleButton.addEventListener("click", () => {
  toogleVisibility(navLinks, navToggleButton);
});

// Filters toogle functionality
filtersToogleButton.addEventListener("click", () => {
  toogleVisibility(filters, filtersToogleButton);
});
closeFiltersButton.addEventListener("click", () => {
  toogleVisibility(filters, closeFiltersButton);
});

// Render cards function
// This function takes an object with filters and renders the cards that match the filters
function renderCards(filters = {}) {
  cardsContainer.innerHTML = "";
  const dataFiltered = filterData(data, filters);

  dataFiltered.forEach((data) => {
    const card = new Card(data);
    cardsContainer.appendChild(card.render());
  });
}

// Add event listener to the form to get values from checkboxes and inputs then render cards with the filters options
filtersForm.addEventListener("change", (e) => {
  const form = e.currentTarget;
  const activitySelected = getSelectedValues(form, "activity");
  const accommodationSelected = getSelectedValues(form, "accommodation");
  const destinationSelected = getSelectedValues(form, "destination");

  // Get price values
  const minPriceInput = document.getElementById("minPrice");
  const maxPriceInput = document.getElementById("maxPrice");
  const minPrice = minPriceInput ? parseFloat(minPriceInput.value) : null;
  const maxPrice = maxPriceInput ? parseFloat(maxPriceInput.value) : null;

  const filters = {
    activity: activitySelected,
    accommodation: accommodationSelected,
    destination: destinationSelected,
    price: {
      min: isNaN(minPrice) ? null : minPrice,
      max: isNaN(maxPrice) ? null : maxPrice,
    },
  };

  renderCards(filters);
});

// Initialize carousel and render cards
initCarousel();
renderCards();
