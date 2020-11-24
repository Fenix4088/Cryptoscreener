import SortableTable from "../../js/components/sortableTable/index.js";

export default class Page {
  element;
  subElements = {};
  components = {};

  render() {
    const element = document.createElement("div");
    element.innerHTML = this.template;
    this.element = element.firstElementChild;

    this.subElements = this.getSubElements(this.element);

    this.initComponents();
    this.renderComponent();

    return this.element;
  }

  renderComponent() {
    Object.keys(this.components).forEach(component => {
      const root = this.subElements[component];
      const { element } = this.components[component];
      root.append(element);
    });
  }

  get template() {
    return `
    <div class="mainTablePage">
        <div class="table-wrapper" data-element="sortableTable">
        </div>
    </div>
        `;
  }

  initComponents() {
    const sortableTable = new SortableTable();

    this.saveComponents({ sortableTable });
  }

  saveComponents(componentsObj = {}) {
    Object.keys(componentsObj).forEach(component => {
      this.components[component] = componentsObj[component];
    });
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
