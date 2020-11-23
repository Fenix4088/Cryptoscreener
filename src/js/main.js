import "../css/main.css";
import "../scss/main.scss";

import Router from "./router/index.js";

const router = Router.instance();
router
  .addRoute(/^$/, "mainTable")
  .addRoute(/^itemPage(\/[\w()-]+)?$/, "itemPage")
  .addRoute(/^404\/?$/, "error404")
  .setNotFoundPagePath("error404")
  .listen();
