export function filterData(data, filters = {}) {
  return data.filter((d) => {
    let matchesCategory = true;
    let matchesDestination = true;
    let matchesAcommodation = true;
    let matchesPrice = true;

    matchesCategory =
      !filters.activity?.length || filters.activity.includes(d.activity);
    matchesDestination =
      !filters.destination?.length ||
      filters.destination.includes(d.destination);
    matchesAcommodation =
      !filters.accommodation?.length ||
      filters.accommodation.includes(d.accommodation);

    const productPrice = d.price;
    const minPriceFilter = filters.price ? filters.price.min : null;
    const maxPriceFilter = filters.price ? filters.price.max : null;

    if (minPriceFilter !== null && maxPriceFilter !== null) {
      matchesPrice =
        productPrice >= minPriceFilter && productPrice <= maxPriceFilter;
    } else if (minPriceFilter !== null) {
      matchesPrice = productPrice >= minPriceFilter;
    } else if (maxPriceFilter !== null) {
      matchesPrice = productPrice <= maxPriceFilter;
    }

    return (
      matchesCategory &&
      matchesDestination &&
      matchesAcommodation &&
      matchesPrice
    );
  });
}
