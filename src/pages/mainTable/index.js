export default class Page {
  element;
  subElements = {};
  constructor(match) {
    this.match = match;
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = this.template;
    this.element = element.firstElementChild;

    this.subElements = this.getSubElements(this.element);
    console.log(this.subElements);

    return this.element;
  }

  get template() {
    return `
        <div class="filter-menu">
        <div class="filter-menu__group ">
            <a class="filter-menu__link filter-menu__group-item" href="/itemPage" data-element="watchlistBtn">
                <span class="filter-menu__link-icon">
                    <i class="fas fa-eye"></i>
                </span>
                <div>Watchlist</div> 
            </a>
            <div class="filter-menu__group-item filter-menu__group-item--line">|</div>
            <a class="filter-menu__link filter-menu__group-item" href="/" data-element="cryptocurrenciesBtn">
                <div>Cryptocurrencies</div>
            </a>
        </div>
        <div class="filter-menu__group filter-menu__filters">
            <div class="filter-menu__select-wrapper">
                <span class="filter-menu__select-name">Show rows</span>
                <select class="filter-menu__select" data-element="showRowsSelect">
                    <option value="">100</option>
                    <option value="">50</option>
                    <option value="">20</option>
                </select>
            </div>
            <button class="filter-menu__filters-btn" data-element="filtersBtn">
                <i class="fas fa-sliders-h"></i>
                <span>Filters</span>
            </button>
        </div>
    </div>
        
        `;
  }

  getSubElements(element) {
    const subElements = element.querySelectorAll("[data-element]");
    return [...subElements].reduce((acc, next) => {
      acc[next.dataset.element] = next;
      return acc;
    }, {});

  }

  destroy() {
    console.log("Destroy page mainTable");
  }
}
