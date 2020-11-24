(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mainTable-index-js"],{

/***/ "./src/js/components/sortableTable/index.js":
/*!**************************************************!*\
  !*** ./src/js/components/sortableTable/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SortableTable; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SortableTable = /*#__PURE__*/function () {\n  function SortableTable() {\n    _classCallCheck(this, SortableTable);\n\n    this.element = void 0;\n    this.subElements = {};\n    this.render();\n  }\n\n  _createClass(SortableTable, [{\n    key: \"render\",\n    value: function render() {\n      var element = document.createElement(\"div\");\n      element.innerHTML = this.template;\n      this.element = element.firstElementChild;\n      this.subElements = this.getSubElements(this.element);\n      return this.element;\n    }\n  }, {\n    key: \"getSubElements\",\n    value: function getSubElements(element) {\n      var subElements = element.querySelectorAll(\"[data-element]\");\n      return _toConsumableArray(subElements).reduce(function (acc, next) {\n        acc[next.dataset.element] = next;\n        return acc;\n      }, {});\n    }\n  }, {\n    key: \"template\",\n    get: function get() {\n      return \"\\n            <div class=\\\"filter-menu\\\">\\n            <div class=\\\"filter-menu__group \\\">\\n                <a class=\\\"filter-menu__link filter-menu__group-item\\\" href=\\\"/itemPage\\\" data-element=\\\"watchlistBtn\\\">\\n                    <span class=\\\"filter-menu__link-icon\\\">\\n                        <i class=\\\"fas fa-eye\\\"></i>\\n                    </span>\\n                    <div>Watchlist</div> \\n                </a>\\n                <div class=\\\"filter-menu__group-item filter-menu__group-item--line\\\">|</div>\\n                <a class=\\\"filter-menu__link filter-menu__group-item\\\" href=\\\"/\\\" data-element=\\\"cryptocurrenciesBtn\\\">\\n                    <div>Cryptocurrencies</div>\\n                </a>\\n            </div>\\n            <div class=\\\"filter-menu__group filter-menu__filters\\\">\\n                <div class=\\\"filter-menu__select-wrapper\\\">\\n                    <span class=\\\"filter-menu__select-name\\\">Show rows</span>\\n                    <select class=\\\"filter-menu__select\\\" data-element=\\\"showRowsSelect\\\">\\n                        <option value=\\\"\\\">100</option>\\n                        <option value=\\\"\\\">50</option>\\n                        <option value=\\\"\\\">20</option>\\n                    </select>\\n                </div>\\n                <button class=\\\"filter-menu__filters-btn\\\" data-element=\\\"filtersBtn\\\">\\n                    <i class=\\\"fas fa-sliders-h\\\"></i>\\n                    <span>Filters</span>\\n                </button>\\n            </div>\\n        </div>\\n            \\n            \";\n    }\n  }]);\n\n  return SortableTable;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9zb3J0YWJsZVRhYmxlL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc29ydGFibGVUYWJsZS9pbmRleC5qcz82ZjRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRhYmxlVGFibGUge1xyXG4gIGVsZW1lbnQ7XHJcbiAgc3ViRWxlbWVudHMgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZTtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgdGhpcy5zdWJFbGVtZW50cyA9IHRoaXMuZ2V0U3ViRWxlbWVudHModGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1tZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbWVudV9fZ3JvdXAgXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZpbHRlci1tZW51X19saW5rIGZpbHRlci1tZW51X19ncm91cC1pdGVtXCIgaHJlZj1cIi9pdGVtUGFnZVwiIGRhdGEtZWxlbWVudD1cIndhdGNobGlzdEJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsdGVyLW1lbnVfX2xpbmstaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+V2F0Y2hsaXN0PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1tZW51X19ncm91cC1pdGVtIGZpbHRlci1tZW51X19ncm91cC1pdGVtLS1saW5lXCI+fDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmaWx0ZXItbWVudV9fbGluayBmaWx0ZXItbWVudV9fZ3JvdXAtaXRlbVwiIGhyZWY9XCIvXCIgZGF0YS1lbGVtZW50PVwiY3J5cHRvY3VycmVuY2llc0J0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q3J5cHRvY3VycmVuY2llczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1tZW51X19ncm91cCBmaWx0ZXItbWVudV9fZmlsdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1tZW51X19zZWxlY3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsdGVyLW1lbnVfX3NlbGVjdC1uYW1lXCI+U2hvdyByb3dzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmaWx0ZXItbWVudV9fc2VsZWN0XCIgZGF0YS1lbGVtZW50PVwic2hvd1Jvd3NTZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjEwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjIwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmaWx0ZXItbWVudV9fZmlsdGVycy1idG5cIiBkYXRhLWVsZW1lbnQ9XCJmaWx0ZXJzQnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2xpZGVycy1oXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkZpbHRlcnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3ViRWxlbWVudHMoZWxlbWVudCkge1xyXG4gICAgY29uc3Qgc3ViRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1lbGVtZW50XVwiKTtcclxuICAgIHJldHVybiBbLi4uc3ViRWxlbWVudHNdLnJlZHVjZSgoYWNjLCBuZXh0KSA9PiB7XHJcbiAgICAgIGFjY1tuZXh0LmRhdGFzZXQuZWxlbWVudF0gPSBuZXh0O1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF4Q0E7QUFDQTtBQStCQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/components/sortableTable/index.js\n");

/***/ }),

/***/ "./src/pages/mainTable/index.js":
/*!**************************************!*\
  !*** ./src/pages/mainTable/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _js_components_sortableTable_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/components/sortableTable/index.js */ \"./src/js/components/sortableTable/index.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Page = /*#__PURE__*/function () {\n  function Page() {\n    _classCallCheck(this, Page);\n\n    this.element = void 0;\n    this.subElements = {};\n    this.components = {};\n  }\n\n  _createClass(Page, [{\n    key: \"render\",\n    value: function render() {\n      var element = document.createElement(\"div\");\n      element.innerHTML = this.template;\n      this.element = element.firstElementChild;\n      this.subElements = this.getSubElements(this.element);\n      this.initComponents();\n      this.renderComponent();\n      return this.element;\n    }\n  }, {\n    key: \"renderComponent\",\n    value: function renderComponent() {\n      var _this = this;\n\n      Object.keys(this.components).forEach(function (component) {\n        var root = _this.subElements[component];\n        var element = _this.components[component].element;\n        root.append(element);\n      });\n    }\n  }, {\n    key: \"initComponents\",\n    value: function initComponents() {\n      var sortableTable = new _js_components_sortableTable_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      this.saveComponents({\n        sortableTable: sortableTable\n      });\n    }\n  }, {\n    key: \"saveComponents\",\n    value: function saveComponents() {\n      var _this2 = this;\n\n      var componentsObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      Object.keys(componentsObj).forEach(function (component) {\n        _this2.components[component] = componentsObj[component];\n      });\n    }\n  }, {\n    key: \"getSubElements\",\n    value: function getSubElements(element) {\n      var subElements = element.querySelectorAll(\"[data-element]\");\n      return _toConsumableArray(subElements).reduce(function (acc, next) {\n        acc[next.dataset.element] = next;\n        return acc;\n      }, {});\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      console.log(\"Destroy page mainTable\");\n    }\n  }, {\n    key: \"template\",\n    get: function get() {\n      return \"\\n    <div class=\\\"mainTablePage\\\">\\n        <div class=\\\"table-wrapper\\\" data-element=\\\"sortableTable\\\">\\n        </div>\\n    </div>\\n        \";\n    }\n  }]);\n\n  return Page;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWFpblRhYmxlL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL21haW5UYWJsZS9pbmRleC5qcz8wZDAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb3J0YWJsZVRhYmxlIGZyb20gXCIuLi8uLi9qcy9jb21wb25lbnRzL3NvcnRhYmxlVGFibGUvaW5kZXguanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGVsZW1lbnQ7XHJcbiAgc3ViRWxlbWVudHMgPSB7fTtcclxuICBjb21wb25lbnRzID0ge307XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICB0aGlzLnN1YkVsZW1lbnRzID0gdGhpcy5nZXRTdWJFbGVtZW50cyh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcclxuICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbXBvbmVudCgpIHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuY29tcG9uZW50cykuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICBjb25zdCByb290ID0gdGhpcy5zdWJFbGVtZW50c1tjb21wb25lbnRdO1xyXG4gICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRdO1xyXG4gICAgICByb290LmFwcGVuZChlbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJtYWluVGFibGVQYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIiBkYXRhLWVsZW1lbnQ9XCJzb3J0YWJsZVRhYmxlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gIH1cclxuXHJcbiAgaW5pdENvbXBvbmVudHMoKSB7XHJcbiAgICBjb25zdCBzb3J0YWJsZVRhYmxlID0gbmV3IFNvcnRhYmxlVGFibGUoKTtcclxuXHJcbiAgICB0aGlzLnNhdmVDb21wb25lbnRzKHsgc29ydGFibGVUYWJsZSB9KTtcclxuICB9XHJcblxyXG4gIHNhdmVDb21wb25lbnRzKGNvbXBvbmVudHNPYmogPSB7fSkge1xyXG4gICAgT2JqZWN0LmtleXMoY29tcG9uZW50c09iaikuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50XSA9IGNvbXBvbmVudHNPYmpbY29tcG9uZW50XTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3ViRWxlbWVudHMoZWxlbWVudCkge1xyXG4gICAgY29uc3Qgc3ViRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1lbGVtZW50XVwiKTtcclxuICAgIHJldHVybiBbLi4uc3ViRWxlbWVudHNdLnJlZHVjZSgoYWNjLCBuZXh0KSA9PiB7XHJcbiAgICAgIGFjY1tuZXh0LmRhdGFzZXQuZWxlbWVudF0gPSBuZXh0O1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRGVzdHJveSBwYWdlIG1haW5UYWJsZVwiKTtcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQVdBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBL0JBO0FBQ0E7QUFNQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/mainTable/index.js\n");

/***/ })

}]);