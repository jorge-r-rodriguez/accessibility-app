import { PopoverDetails } from "./PopoverDetails.js";
// Class to create cards and render them

export class Card {
  constructor(data) {
    this.data = data;
    this.popover = new PopoverDetails();
  }

  render() {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${this.data.image}" alt="${this.data.title}" class="card__image">
      <span class="card__tag">${this.data.activity}</span>
      <header class="card__header">
        <p class="card__description">${this.data.description}<span>${this.data.numberOfdays} días</span></p>
        <h3 class="card__title">${this.data.title}</h3>
      </header>
      <footer class="card__footer">
        <span class="card__price">
          <div>
          <p class="card__price-label">Desde</p>
          <strong class="card__price-amount">${this.data.price} €</strong>
          </div>
          
          <button class="card__see-details"><span>Ver details </span><img src="/img/chevron-down.svg" class="card__see-details-icon"></button>
        </span>
        <button class="card__button-reserve">Reservar</button>
      </footer>
    `;

    const buttonDetails = card.querySelector(".card__see-details");

    buttonDetails.addEventListener("click", () => {
      this.popover.open(this.data, buttonDetails);
    });

    return card;
  }
}
