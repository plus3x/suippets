import $ from "jquery-slim";
import expander from "./components/expander.js";
import modal from "./components/modal.js";
import tabs from "./components/tabs.js";
import dropdown from "./components/dropdown.js";
import offcanvas from "./components/offcanvas.js";
import alertmsg from "./components/alertmsg.js";
import syntax from "./syntax.js";

$( () => {
  expander();
  dropdown.init();
  modal.init();
  tabs();
  offcanvas.init();
  alertmsg.init();
});

// Mobile menu
$( ".open-menu" ).on( "click", function() {
  $( ".sidebar" ).toggleClass( "toggle-sidebar" );
});

syntax();
