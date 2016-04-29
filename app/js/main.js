import $ from "jquery";
import importView from "./importView.js";
import targetView from "./targetView.js";
import urlView from "./urlView.js";

import accordion from "./components/accordion.js";
import modal from "./components/modal.js";
import tabs from "./components/tabs.js";
import dropdown from "./components/dropdown.js";
import offcanvas from "./components/offcanvas.js";

$( () => {
  importView();
  targetView();
  urlView();

  // Components
  accordion();
  dropdown();
  modal();
  tabs();
  offcanvas();
});
