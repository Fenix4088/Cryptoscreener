import fetchJson from "../../utils/fetch-json.js";

export default class SortableTable {
  element;
  subElements = {};
  constructor() {
    this.render();
  }

  async render() {
    const element = document.createElement("div");
    element.innerHTML = this.template;
    this.element = element;

    this.subElements = this.getSubElements(this.element);

    const { data } = await this.getTableData();

    this.addTableRows(data);

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
        <!--//!Hidden filter list-->
        <div class="filters hidden" data-element="filteList">
                    <ul class="filters__list">
                        <li class="filters__list-item">
                            <button class="filters__list-btn">
                                <svg class="filters__list-btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px" viewBox="0 0 24 24" >
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>All Cryptocurrencies</span>
                            </button>
                        </li>
                        <li class="filters__list-item">
                            <button class="filters__list-btn">
                                <svg class="filters__list-btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px" viewBox="0 0 24 24" >
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>Market Cap</span>
                            </button>
                        </li>
                        <li class="filters__list-item">
                            <button class="filters__list-btn">
                                <svg class="filters__list-btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px" viewBox="0 0 24 24" >
                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>Price</span>
                            </button>
                        </li>
                        <li class="filters__list-item"> 
                            <button class="filters__list-btn">
                                <svg class="filters__list-btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px" viewBox="0 0 24 24" >
                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>% Change</span>
                            </button>
                        </li>
                        <li class="filters__list-item">
                            <button class="filters__list-btn">
                                <svg class="filters__list-btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px" viewBox="0 0 24 24" >
                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>Volume</span>
                            </button>
                        </li>
                        <li class="filters__list-item">
                            <button class="filters__list-btn">
                            <svg class="filters__list-btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px" viewBox="0 0 24 24" >
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                                <span>Circulating Supply</span>
                            </button>
                        </li>
                        <li class="filters__list-item">
                            <button class="filters__list-btn">
                                <span>Mineble</span>
                            </button>
                        </li>
                    </ul>
                </div>
            <!--// //!Hidden filter list-->
            <!--//! Table-->
            <table class="currency-table" data-element="mainTable">
                ${this.getTableHead()}
                <tbody class="currency-table__body" data-element="tableBody">

                </tbody>
            </table>
            <!--//! //Table-->

            `;
  }

  getTableHead() {
    return `
      <thead class="currency-table__head">
      <tr class="table-row">
          <th></th>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>
              <span class="currency-table__head-headerData-title">Market Cap</span>
              <i class="fas fa-info-circle"></i>
          </th>
          <th>
              <span class="currency-table__head-headerData-title">Volume 24h</span>
              <i class="fas fa-info-circle"></i>
          </th>
          <th>
              <span class="currency-table__head-headerData-title">Circulating Supply</span>
              <i class="fas fa-info-circle"></i>
          </th>
      </tr>
  </thead>
      `;
  }

  addTableRows(data = []) {
    const { tableBody } = this.subElements;
    const result = data
      .map(item => {
        return this.createRow(item);
      })
      .join("");

    tableBody.innerHTML = result;
  }

  createRow(element) {
    return `
      <tr class="table-row">
        <td class="table-cell">
            <i class="far fa-eye fa-eye-table"></i>
        </td>
        <td class="table-cell">${element.rank}</td>
        <td class="table-cell currency-table__body-name">
        <a href="/itemPage?${element.symbol.toLowerCase()}">
                <img class="currency-logo" src="./img/icons/cryptocurrency-icons/${element.symbol.toLowerCase()}.png" alt="N/A">
                <span class="currency-table__name">${this.formatName(element.id)}</span>
                <span class="currency-table__symbol">${element.symbol}</span>
        </a>
        </td>
        <td class="table-cell currency-table__price">$${this.formatNumber(element.priceUsd)}</td>
        <td class="table-cell currency-table__week-percent">
            <div class="table-arrow ${+element.changePercent24Hr < 0 ? "down" : ""}">
                <i class="fas fa-caret-up"></i>
                <span class="table-percents">${this.formatNumber(element.changePercent24Hr)}%</span>
            </div>
        </td>
        <td class="table-cell currency-table__cap">$${this.formatNumber(element.marketCapUsd)}</td>
        <td class="table-cell currency-table__vol">
            <span class="currency-table__vol-fiat">$${this.formatNumber(element.vwap24Hr)}</span>
        </td>
        <td class="table-cell currency-table__circulating-supply">
            <div class="currency-table__supply-crypto">${this.formatNumber(element.supply)} ${
      element.symbol
    }</div>
            ${this.getSupplyLine(element.maxSupply, element.supply)}

        </td>
    </tr>
      `;
  }

  formatName(str = "") {
    if (str.length) {
      return str.replace(/^[a-z]/, str => str.toUpperCase());
    }
  }

  formatNumber(number) {
    const newNumber = (+number).toFixed(2);
    return (+newNumber).toLocaleString("en-US");
  }

  getSupplyLine(maxSupply, supply) {
    if (maxSupply) {
      return `
        <div class="currency-table__supply-line">
            <div class="currency-table__supply-line-inner" style='width: ${this.getLineHeight(
              maxSupply,
              supply
            )}'></div>
        </div>
        `;
    } else {
      return ``;
    }
  }

  getLineHeight(maxSupply, supply) {
    if (maxSupply) {
      return (parseInt(supply) * 160) / parseInt(maxSupply) + "px";
    }
  }

  getSubElements(element) {
    const subElements = element.querySelectorAll("[data-element]");
    return [...subElements].reduce((acc, next) => {
      acc[next.dataset.element] = next;
      return acc;
    }, {});
  }

  async getTableData() {
    return await fetchJson("https://api.coincap.io/v2/assets");
  }
}
