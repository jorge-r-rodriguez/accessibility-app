// Class to create and position details poppups
export class PopoverDetails {
  constructor() {
    this.popover = document.getElementById("popover-details");
    this.btnClose = null;
  }

  open(data, triggerButton) {
    const triggerButtonRect = triggerButton.getBoundingClientRect();
    this.popover.classList.remove("hidden");
    this.popover.setAttribute("data-visible", "true");
    // this.popover.setAttribute("aria-hidden", "false");
    this.popover.innerHTML = `
      <header>
        <strong>Desglose de precios</strong>
        <button class="popover-details__close">
          <img src="/img/close.svg" aria-label="Cerrar ventana" alt="Cerrar">
        </button>
      </header>
      <section class="popover-details__content">
        <h3 class="popover-details__content-title">${data.description}<span>${data.numberOfdays} días</span></h3>
        <div class="popover-details__content-prices">
        <p class="popover-details__content-price">
          <span>Precio base:</span> <strong class="popover-details__content-price-base">${data.priceBase}€</strong> 
        </p>
        <p class="popover-details__content-price">
          <span>Impuestos:</span> <strong class="popover-details__content-price-tax">${data.taxes}€</strong> 
        </p>
        </div>
      </section>
      <footer>
        <span>Total:</span> <span class="popover-details__content-price-total">${data.total} €</span>
      </footer>
    `;

    this.btnClose = this.popover.querySelector(".popover-details__close");
    this.btnClose.addEventListener("click", () => this.close());

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });

    // Check for screen size and position the popup
    if (window.innerWidth <= 697) {
      // Mobile
      this.popover.style.position = "fixed";
      this.popover.style.top = 0;
      this.popover.style.left = 0;
    } else {
      // Desktop
      this.popover.style.position = "absolute";
      this.popover.style.top = `${triggerButtonRect.bottom + window.scrollY}px`;
      this.popover.style.left = `${
        triggerButtonRect.left + window.scrollX - 15
      }px`;
    }
    // Handle click outside the popover and Focus first element
    setTimeout(() => {
      document.body.addEventListener("click", this.handleOutsideClick);
      this.btnClose.focus(), 100;
    });
  }
  // Close the popover
  close() {
    this.popover.classList.add("hidden");
    this.popover.setAttribute("data-visible", "false");
    document.body.removeEventListener("click", this.handleOutsideClick);
  }
  // Handle click outside the popover
  handleOutsideClick = (event) => {
    if (!this.popover.contains(event.target)) {
      this.close();
    }
  };
}
