(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function accordion() {
  var collapsable = false;
  var accordionElement = (0, _jquery2.default)("[accordion]").not("pre [accordion]");
  var activeTitleClass = "accordion-title-active";

  accordionElement.each(function (index, element) {
    var accordionContent = (0, _jquery2.default)(element).find("[accordion-content]").first().hide();
    var accordionTitle = (0, _jquery2.default)(element).find("[accordion-title]").first();

    accordionTitle.on("click", function (event) {
      accordionTitle.toggleClass(activeTitleClass);
      accordionContent.slideToggle(200, "linear");
      event.stopPropagation();
    });
  });
};

exports.default = accordion;

},{"jquery":"jquery"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dropdown() {
  var allDropdown = (0, _jquery2.default)("[dropdown]").not("pre [dropdown]");
  var allDropdownContent = allDropdown.find("[dropdown-content]");
  var $document = (0, _jquery2.default)(document);
  var eventType = "click";

  allDropdown.each(function (index, element) {
    var dropdownContent = (0, _jquery2.default)(element).find("[dropdown-content]");
    var dropdownTarget = (0, _jquery2.default)(element).find("[dropdown-target]");

    dropdownContent.addClass("dropdown-hidden");

    dropdownTarget.on(eventType, function (event) {
      event.stopPropagation();
      allDropdownContent.not(dropdownContent).removeClass("dropdown-activated").addClass("dropdown-hidden");
      dropdownContent.toggleClass("dropdown-activated").toggleClass("dropdown-hidden");
    });
  });

  allDropdownContent.on(eventType, function (event) {
    event.stopPropagation();
  });

  $document.on(eventType, function () {
    allDropdownContent.removeClass("dropdown-activated").addClass("dropdown-hidden");
  });
}

exports.default = dropdown;

},{"jquery":"jquery"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function modal() {
  var body = (0, _jquery2.default)("body");
  var $window = (0, _jquery2.default)(window);
  var $document = (0, _jquery2.default)(document);
  var modalTargets = (0, _jquery2.default)("[modal-target]").not("pre [modal-target]");
  var modalWrappers = (0, _jquery2.default)("[modal-wrapper]").not("pre [modal-wrapper]");
  var modalContent = (0, _jquery2.default)("[modal-content]").not("pre [modal-content]");

  modalWrappers.detach().addClass("modal-hidden").appendTo("html");

  function openModal(modalWrapper) {
    modalWrapper.removeClass("modal-hidden").addClass("modal-actived");
  }

  function hideModal(modalWrapper) {
    modalWrapper.addClass("modal-hidden").removeClass("modal-actived");
    $window.off("scroll");
  }

  modalTargets.each(function (index, element) {
    var target = (0, _jquery2.default)(element);
    var targetIndex = (0, _jquery2.default)(element).attr("modal-target");
    var modalWrapper = (0, _jquery2.default)("[modal-wrapper=" + targetIndex + "]");
    var modalClose = modalWrapper.find("[modal-close]");
    var modalContent = modalWrapper.find("[modal-content]");

    target.on("click", function () {
      openModal(modalWrapper);
      var scrollPosition = $document.scrollTop();

      $window.on("scroll", function () {
        (0, _jquery2.default)(this).scrollTop(scrollPosition);
      });
    });

    modalContent.on("click", function (event) {
      event.stopPropagation();
    });

    modalWrapper.on("click", function () {
      hideModal(modalWrapper);
    });

    modalClose.on("click", function () {
      hideModal(modalWrapper);
    });

    $window.on("keydown", function (event) {
      if (event.keyCode == 27) {
        hideModal(modalWrapper);
      }
    });
  });
};

exports.default = modal;

},{"jquery":"jquery"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function offcanvas() {
  var allOffCanvasTarget = (0, _jquery2.default)("[offcanvas-target]").not("pre [offcanvas-target]");
  var allOffCanvasWrapper = (0, _jquery2.default)("[offcanvas-wrapper]").not("pre [offcanvas-wrapper]");
  var $window = (0, _jquery2.default)(window);
  var $document = (0, _jquery2.default)(document);

  allOffCanvasWrapper.detach().addClass("offcanvas-hidden").appendTo("html");

  function removeOffCanvas() {
    allOffCanvasWrapper.removeClass("offcanvas-active").addClass("offcanvas-hidden");
    $window.off("scroll");
  }

  allOffCanvasTarget.each(function (index, element) {
    var target = (0, _jquery2.default)(element);
    var targetIndex = target.attr("offcanvas-target");
    var wrapper = (0, _jquery2.default)("[offcanvas-wrapper=" + targetIndex + "]");
    var content = wrapper.find("[offcanvas-content]");

    target.on("click", function () {
      var scrollPosition = $document.scrollTop();
      wrapper.toggleClass("offcanvas-hidden offcanvas-active");

      $window.on("scroll", function () {
        (0, _jquery2.default)(this).scrollTop(scrollPosition);
      });
    });

    content.on("click", function (event) {
      event.stopPropagation();
    });

    wrapper.on("click", function () {
      removeOffCanvas();
    });

    $window.on("keydown", function (event) {
      if (event.keyCode == 27) {
        removeOffCanvas();
      }
    });
  });
};

exports.default = offcanvas;

},{"jquery":"jquery"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tabs() {
  var allTabs = (0, _jquery2.default)("[tabs]").not("pre [tabs]");
  var activeTitleClass = "tab-title-active";

  allTabs.each(function (index, element) {
    var tabWrapper = (0, _jquery2.default)(element);
    var tabTitle = (0, _jquery2.default)(element).find("[tab-title]");
    var tabContent = (0, _jquery2.default)(element).find("[tab-content]");
    var firstIndex = tabTitle.first().attr("tab-title");

    tabTitle.first().addClass(activeTitleClass);
    tabContent.hide();
    tabWrapper.find("[tab-content=" + firstIndex + "]").show();

    tabTitle.on("click", function () {
      var tabIndex = (0, _jquery2.default)(this).attr("tab-title");

      tabWrapper.find("[tab-content]").hide();
      tabWrapper.find("[tab-content=" + tabIndex + "]").show();
      tabWrapper.find("[tab-title]").removeClass(activeTitleClass);
      tabWrapper.find("[tab-title=" + tabIndex + "]").addClass(activeTitleClass);
    });
  });
}

exports.default = tabs;

},{"jquery":"jquery"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var importView = function importView() {
  var viewElements = (0, _jquery2.default)("[view]");

  viewElements.each(function (index, element) {
    var $element = (0, _jquery2.default)(element);
    var path = $element.attr("view");

    $element.load(path, function (data, log) {
      if (log === "error") {
        throw new Error("SU-Error: " + path + " - Not found");
      }
    });
  });
}; /* Insert View
   
   @View - file path
   ...
   <div view="path/to/file.html"> </div>
   */

exports.default = importView;

},{"jquery":"jquery"}],7:[function(require,module,exports){
"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _importView = require("./importView.js");

var _importView2 = _interopRequireDefault(_importView);

var _targetView = require("./targetView.js");

var _targetView2 = _interopRequireDefault(_targetView);

var _urlView = require("./urlView.js");

var _urlView2 = _interopRequireDefault(_urlView);

var _accordion = require("./components/accordion.js");

var _accordion2 = _interopRequireDefault(_accordion);

var _modal = require("./components/modal.js");

var _modal2 = _interopRequireDefault(_modal);

var _tabs = require("./components/tabs.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _dropdown = require("./components/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _offcanvas = require("./components/offcanvas.js");

var _offcanvas2 = _interopRequireDefault(_offcanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(function () {
  (0, _importView2.default)();
  (0, _targetView2.default)();
  (0, _urlView2.default)();

  // Components
  (0, _accordion2.default)();
  (0, _dropdown2.default)();
  (0, _modal2.default)();
  (0, _tabs2.default)();
  (0, _offcanvas2.default)();
});

},{"./components/accordion.js":1,"./components/dropdown.js":2,"./components/modal.js":3,"./components/offcanvas.js":4,"./components/tabs.js":5,"./importView.js":6,"./targetView.js":8,"./urlView.js":9,"jquery":"jquery"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var targetView = function targetView() {
  var targets = (0, _jquery2.default)("[insert-view]");

  targets.each(function (index, element) {
    var $element = (0, _jquery2.default)(element);
    var view = $element.attr("insert-view");
    var container = $element.attr("in-container");

    $element.on("click", function () {
      (0, _jquery2.default)(container).load(view);
    });
  });
}; /* Target view
   
   @inset-view - file path to include
   @in-container - html container
   ...
   <button insert-view="path/to/file.html" in-container=".container">
     Click-me!
   </button>
   */

exports.default = targetView;

},{"jquery":"jquery"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var urlView = function urlView() {
  var urlHash = window.location.hash;

  var targets = (0, _jquery2.default)("[insert-view]");

  targets.each(function (index, element) {
    var href = (0, _jquery2.default)(element).attr("href");
    var view = (0, _jquery2.default)(element).attr("insert-view");

    if (href === urlHash) {
      (0, _jquery2.default)(".container").load(view);
    }
  });
};

exports.default = urlView;

},{"jquery":"jquery"}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJhcHAvanMvY29tcG9uZW50cy9kcm9wZG93bi5qcyIsImFwcC9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvb2ZmY2FudmFzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFicy5qcyIsImFwcC9qcy9pbXBvcnRWaWV3LmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvdGFyZ2V0Vmlldy5qcyIsImFwcC9qcy91cmxWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7OztBQUVBLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixNQUFJLGNBQWMsS0FBbEI7QUFDQSxNQUFJLG1CQUFtQixzQkFBRyxhQUFILEVBQW1CLEdBQW5CLENBQXdCLGlCQUF4QixDQUF2QjtBQUNBLE1BQUksbUJBQW1CLHdCQUF2Qjs7QUFFQSxtQkFBaUIsSUFBakIsQ0FBc0IsVUFBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTJCO0FBQy9DLFFBQUksbUJBQW1CLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLHFCQUFuQixFQUEyQyxLQUEzQyxHQUFtRCxJQUFuRCxFQUF2QjtBQUNBLFFBQUksaUJBQWlCLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLG1CQUFuQixFQUF5QyxLQUF6QyxFQUFyQjs7QUFFQSxtQkFBZSxFQUFmLENBQW1CLE9BQW5CLEVBQTRCLFVBQVUsS0FBVixFQUFrQjtBQUM1QyxxQkFBZSxXQUFmLENBQTRCLGdCQUE1QjtBQUNBLHVCQUFpQixXQUFqQixDQUE4QixHQUE5QixFQUFtQyxRQUFuQztBQUNBLFlBQU0sZUFBTjtBQUNELEtBSkQ7QUFLRCxHQVREO0FBVUQ7O2tCQUVjLFM7Ozs7Ozs7OztBQ25CZjs7Ozs7O0FBRUEsU0FBUyxRQUFULEdBQW9CO0FBQ2xCLE1BQUks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bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5mdW5jdGlvbiBhY2NvcmRpb24oKSB7XHJcbiAgdmFyIGNvbGxhcHNhYmxlID0gZmFsc2U7XHJcbiAgdmFyIGFjY29yZGlvbkVsZW1lbnQgPSAkKCBcIlthY2NvcmRpb25dXCIgKS5ub3QoIFwicHJlIFthY2NvcmRpb25dXCIgKTtcclxuICB2YXIgYWN0aXZlVGl0bGVDbGFzcyA9IFwiYWNjb3JkaW9uLXRpdGxlLWFjdGl2ZVwiO1xyXG5cclxuICBhY2NvcmRpb25FbGVtZW50LmVhY2goZnVuY3Rpb24oIGluZGV4LCBlbGVtZW50ICkge1xyXG4gICAgdmFyIGFjY29yZGlvbkNvbnRlbnQgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbYWNjb3JkaW9uLWNvbnRlbnRdXCIgKS5maXJzdCgpLmhpZGUoKTtcclxuICAgIHZhciBhY2NvcmRpb25UaXRsZSA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIlthY2NvcmRpb24tdGl0bGVdXCIgKS5maXJzdCgpO1xyXG5cclxuICAgIGFjY29yZGlvblRpdGxlLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgICAgYWNjb3JkaW9uVGl0bGUudG9nZ2xlQ2xhc3MoIGFjdGl2ZVRpdGxlQ2xhc3MgKTtcclxuICAgICAgYWNjb3JkaW9uQ29udGVudC5zbGlkZVRvZ2dsZSggMjAwLCBcImxpbmVhclwiICk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvcmRpb247XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmZ1bmN0aW9uIGRyb3Bkb3duKCkge1xyXG4gIHZhciBhbGxEcm9wZG93biA9ICQoIFwiW2Ryb3Bkb3duXVwiICkubm90KCBcInByZSBbZHJvcGRvd25dXCIgKTtcclxuICB2YXIgYWxsRHJvcGRvd25Db250ZW50ID0gYWxsRHJvcGRvd24uZmluZCggXCJbZHJvcGRvd24tY29udGVudF1cIiApO1xyXG4gIHZhciAkZG9jdW1lbnQgPSAkKCBkb2N1bWVudCApO1xyXG4gIHZhciBldmVudFR5cGUgPSBcImNsaWNrXCI7XHJcblxyXG4gIGFsbERyb3Bkb3duLmVhY2goZnVuY3Rpb24oIGluZGV4LCBlbGVtZW50ICkge1xyXG4gICAgdmFyIGRyb3Bkb3duQ29udGVudCA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIltkcm9wZG93bi1jb250ZW50XVwiICk7XHJcbiAgICB2YXIgZHJvcGRvd25UYXJnZXQgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbZHJvcGRvd24tdGFyZ2V0XVwiICk7XHJcblxyXG4gICAgZHJvcGRvd25Db250ZW50LmFkZENsYXNzKFwiZHJvcGRvd24taGlkZGVuXCIpO1xyXG5cclxuICAgIGRyb3Bkb3duVGFyZ2V0Lm9uKCBldmVudFR5cGUsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGFsbERyb3Bkb3duQ29udGVudC5ub3QoIGRyb3Bkb3duQ29udGVudCApLnJlbW92ZUNsYXNzKCBcImRyb3Bkb3duLWFjdGl2YXRlZFwiICkuYWRkQ2xhc3MoIFwiZHJvcGRvd24taGlkZGVuXCIgKTtcclxuICAgICAgZHJvcGRvd25Db250ZW50LnRvZ2dsZUNsYXNzKCBcImRyb3Bkb3duLWFjdGl2YXRlZFwiICkudG9nZ2xlQ2xhc3MoIFwiZHJvcGRvd24taGlkZGVuXCIgKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBhbGxEcm9wZG93bkNvbnRlbnQub24oIGV2ZW50VHlwZSwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gICRkb2N1bWVudC5vbiggZXZlbnRUeXBlLCBmdW5jdGlvbigpIHtcclxuICAgIGFsbERyb3Bkb3duQ29udGVudC5yZW1vdmVDbGFzcyggXCJkcm9wZG93bi1hY3RpdmF0ZWRcIiApLmFkZENsYXNzKCBcImRyb3Bkb3duLWhpZGRlblwiICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyb3Bkb3duO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5mdW5jdGlvbiBtb2RhbCgpIHtcclxuICB2YXIgYm9keSA9ICQoIFwiYm9keVwiICk7XHJcbiAgdmFyICR3aW5kb3cgPSAkKCB3aW5kb3cgKTtcclxuICB2YXIgJGRvY3VtZW50ID0gJCggZG9jdW1lbnQgICk7XHJcbiAgdmFyIG1vZGFsVGFyZ2V0cyA9ICQoIFwiW21vZGFsLXRhcmdldF1cIiApLm5vdCggXCJwcmUgW21vZGFsLXRhcmdldF1cIiApO1xyXG4gIHZhciBtb2RhbFdyYXBwZXJzID0gJCggXCJbbW9kYWwtd3JhcHBlcl1cIiApLm5vdCggXCJwcmUgW21vZGFsLXdyYXBwZXJdXCIgKTtcclxuICB2YXIgbW9kYWxDb250ZW50ID0gJCggXCJbbW9kYWwtY29udGVudF1cIiApLm5vdCggXCJwcmUgW21vZGFsLWNvbnRlbnRdXCIgKTtcclxuXHJcbiAgbW9kYWxXcmFwcGVycy5kZXRhY2goKS5hZGRDbGFzcyggXCJtb2RhbC1oaWRkZW5cIiApLmFwcGVuZFRvKCBcImh0bWxcIiApO1xyXG5cclxuICBmdW5jdGlvbiBvcGVuTW9kYWwoIG1vZGFsV3JhcHBlciApIHtcclxuICAgIG1vZGFsV3JhcHBlci5yZW1vdmVDbGFzcyggXCJtb2RhbC1oaWRkZW5cIiApLmFkZENsYXNzKCBcIm1vZGFsLWFjdGl2ZWRcIiApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKSB7XHJcbiAgICBtb2RhbFdyYXBwZXIuYWRkQ2xhc3MoIFwibW9kYWwtaGlkZGVuXCIgKS5yZW1vdmVDbGFzcyggXCJtb2RhbC1hY3RpdmVkXCIgKTtcclxuICAgICR3aW5kb3cub2ZmKCBcInNjcm9sbFwiICk7XHJcbiAgfVxyXG5cclxuICBtb2RhbFRhcmdldHMuZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gJCggZWxlbWVudCApO1xyXG4gICAgdmFyIHRhcmdldEluZGV4ID0gJCggZWxlbWVudCApLmF0dHIoIFwibW9kYWwtdGFyZ2V0XCIgKTtcclxuICAgIHZhciBtb2RhbFdyYXBwZXIgPSAkKCBcIlttb2RhbC13cmFwcGVyPVwiICsgdGFyZ2V0SW5kZXggKyBcIl1cIiApO1xyXG4gICAgdmFyIG1vZGFsQ2xvc2UgPSBtb2RhbFdyYXBwZXIuZmluZCggXCJbbW9kYWwtY2xvc2VdXCIgKTtcclxuICAgIHZhciBtb2RhbENvbnRlbnQgPSBtb2RhbFdyYXBwZXIuZmluZCggXCJbbW9kYWwtY29udGVudF1cIiApO1xyXG5cclxuICAgIHRhcmdldC5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgb3Blbk1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcclxuICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gJGRvY3VtZW50LnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgJHdpbmRvdy5vbiggXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCggdGhpcyApLnNjcm9sbFRvcCggc2Nyb2xsUG9zaXRpb24gKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbENvbnRlbnQub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsV3JhcHBlci5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsQ2xvc2Uub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGhpZGVNb2RhbCggbW9kYWxXcmFwcGVyICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkd2luZG93Lm9uKCBcImtleWRvd25cIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICBpZiAoIGV2ZW50LmtleUNvZGUgPT0gMjcgKSB7XHJcbiAgICAgICAgaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZnVuY3Rpb24gb2ZmY2FudmFzKCkge1xyXG4gIHZhciBhbGxPZmZDYW52YXNUYXJnZXQgPSAkKCBcIltvZmZjYW52YXMtdGFyZ2V0XVwiICkubm90KFwicHJlIFtvZmZjYW52YXMtdGFyZ2V0XVwiKTtcclxuICB2YXIgYWxsT2ZmQ2FudmFzV3JhcHBlciA9ICQoIFwiW29mZmNhbnZhcy13cmFwcGVyXVwiICkubm90KFwicHJlIFtvZmZjYW52YXMtd3JhcHBlcl1cIik7XHJcbiAgdmFyICR3aW5kb3cgPSAkKCB3aW5kb3cgKTtcclxuICB2YXIgJGRvY3VtZW50ID0gJCggZG9jdW1lbnQgKTtcclxuXHJcbiAgYWxsT2ZmQ2FudmFzV3JhcHBlci5kZXRhY2goKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1oaWRkZW5cIikuYXBwZW5kVG8oXCJodG1sXCIpO1xyXG5cclxuICBmdW5jdGlvbiByZW1vdmVPZmZDYW52YXMoKSB7XHJcbiAgICBhbGxPZmZDYW52YXNXcmFwcGVyLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1oaWRkZW5cIik7XHJcbiAgICAkd2luZG93Lm9mZihcInNjcm9sbFwiKTtcclxuICB9XHJcblxyXG4gIGFsbE9mZkNhbnZhc1RhcmdldC5lYWNoKGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApIHtcclxuICAgIHZhciB0YXJnZXQgPSAkKCBlbGVtZW50ICk7XHJcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSB0YXJnZXQuYXR0cihcIm9mZmNhbnZhcy10YXJnZXRcIik7XHJcbiAgICB2YXIgd3JhcHBlciA9ICQoXCJbb2ZmY2FudmFzLXdyYXBwZXI9XCIgKyB0YXJnZXRJbmRleCArIFwiXVwiKTtcclxuICAgIHZhciBjb250ZW50ID0gd3JhcHBlci5maW5kKFwiW29mZmNhbnZhcy1jb250ZW50XVwiKTtcclxuXHJcblxyXG4gICAgdGFyZ2V0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICRkb2N1bWVudC5zY3JvbGxUb3AoKTtcclxuICAgICAgd3JhcHBlci50b2dnbGVDbGFzcyhcIm9mZmNhbnZhcy1oaWRkZW4gb2ZmY2FudmFzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICR3aW5kb3cub24oIFwic2Nyb2xsXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoIHRoaXMgKS5zY3JvbGxUb3AoIHNjcm9sbFBvc2l0aW9uICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3cmFwcGVyLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJlbW92ZU9mZkNhbnZhcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHdpbmRvdy5vbiggXCJrZXlkb3duXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgICAgaWYgKCBldmVudC5rZXlDb2RlID09IDI3ICkge1xyXG4gICAgICAgIHJlbW92ZU9mZkNhbnZhcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9mZmNhbnZhcztcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZnVuY3Rpb24gdGFicygpIHtcclxuICB2YXIgYWxsVGFicyA9ICQoIFwiW3RhYnNdXCIgKS5ub3QoIFwicHJlIFt0YWJzXVwiICk7XHJcbiAgdmFyIGFjdGl2ZVRpdGxlQ2xhc3MgPSBcInRhYi10aXRsZS1hY3RpdmVcIjtcclxuXHJcbiAgYWxsVGFicy5lYWNoKGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApIHtcclxuICAgIHZhciB0YWJXcmFwcGVyID0gJCggZWxlbWVudCApO1xyXG4gICAgdmFyIHRhYlRpdGxlID0gJCggZWxlbWVudCApLmZpbmQoIFwiW3RhYi10aXRsZV1cIiApO1xyXG4gICAgdmFyIHRhYkNvbnRlbnQgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbdGFiLWNvbnRlbnRdXCIgKTtcclxuICAgIHZhciBmaXJzdEluZGV4ID0gdGFiVGl0bGUuZmlyc3QoKS5hdHRyKCBcInRhYi10aXRsZVwiICk7XHJcblxyXG4gICAgdGFiVGl0bGUuZmlyc3QoKS5hZGRDbGFzcyggYWN0aXZlVGl0bGVDbGFzcyApO1xyXG4gICAgdGFiQ29udGVudC5oaWRlKCk7XHJcbiAgICB0YWJXcmFwcGVyLmZpbmQoIFwiW3RhYi1jb250ZW50PVwiICsgZmlyc3RJbmRleCArIFwiXVwiICkuc2hvdygpO1xyXG5cclxuICAgIHRhYlRpdGxlLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdGFiSW5kZXggPSAkKCB0aGlzICkuYXR0ciggXCJ0YWItdGl0bGVcIiApO1xyXG5cclxuICAgICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItY29udGVudF1cIiApLmhpZGUoKTtcclxuICAgICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItY29udGVudD1cIiArIHRhYkluZGV4ICsgXCJdXCIgKS5zaG93KCk7XHJcbiAgICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLXRpdGxlXVwiICkucmVtb3ZlQ2xhc3MoIGFjdGl2ZVRpdGxlQ2xhc3MgKTtcclxuICAgICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItdGl0bGU9XCIgKyB0YWJJbmRleCArIFwiXVwiICkuYWRkQ2xhc3MoIGFjdGl2ZVRpdGxlQ2xhc3MgKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWJzO1xyXG4iLCIvKiBJbnNlcnQgVmlld1xyXG5cclxuQFZpZXcgLSBmaWxlIHBhdGhcclxuLi4uXHJcbjxkaXYgdmlldz1cInBhdGgvdG8vZmlsZS5odG1sXCI+IDwvZGl2PlxyXG4qL1xyXG5cclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuY29uc3QgaW1wb3J0VmlldyAgPSBmdW5jdGlvbigpIHtcclxuICBsZXQgdmlld0VsZW1lbnRzID0gJCggXCJbdmlld11cIiApO1xyXG5cclxuICB2aWV3RWxlbWVudHMuZWFjaCggKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICBsZXQgJGVsZW1lbnQgPSAkKCBlbGVtZW50ICk7XHJcbiAgICBsZXQgcGF0aCA9ICRlbGVtZW50LmF0dHIoIFwidmlld1wiICk7XHJcblxyXG4gICAgJGVsZW1lbnQubG9hZCggcGF0aCwgKGRhdGEsIGxvZykgPT4ge1xyXG4gICAgICBpZiAoIGxvZyA9PT0gXCJlcnJvclwiICkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvciggXCJTVS1FcnJvcjogXCIgKyBwYXRoICsgXCIgLSBOb3QgZm91bmRcIiApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGltcG9ydFZpZXc7XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IGltcG9ydFZpZXcgZnJvbSBcIi4vaW1wb3J0Vmlldy5qc1wiO1xyXG5pbXBvcnQgdGFyZ2V0VmlldyBmcm9tIFwiLi90YXJnZXRWaWV3LmpzXCI7XHJcbmltcG9ydCB1cmxWaWV3IGZyb20gXCIuL3VybFZpZXcuanNcIjtcclxuXHJcbmltcG9ydCBhY2NvcmRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb24uanNcIjtcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWwuanNcIjtcclxuaW1wb3J0IHRhYnMgZnJvbSBcIi4vY29tcG9uZW50cy90YWJzLmpzXCI7XHJcbmltcG9ydCBkcm9wZG93biBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duLmpzXCI7XHJcbmltcG9ydCBvZmZjYW52YXMgZnJvbSBcIi4vY29tcG9uZW50cy9vZmZjYW52YXMuanNcIjtcclxuXHJcbiQoICgpID0+IHtcclxuICBpbXBvcnRWaWV3KCk7XHJcbiAgdGFyZ2V0VmlldygpO1xyXG4gIHVybFZpZXcoKTtcclxuXHJcbiAgLy8gQ29tcG9uZW50c1xyXG4gIGFjY29yZGlvbigpO1xyXG4gIGRyb3Bkb3duKCk7XHJcbiAgbW9kYWwoKTtcclxuICB0YWJzKCk7XHJcbiAgb2ZmY2FudmFzKCk7XHJcbn0pO1xyXG4iLCIvKiBUYXJnZXQgdmlld1xyXG5cclxuQGluc2V0LXZpZXcgLSBmaWxlIHBhdGggdG8gaW5jbHVkZVxyXG5AaW4tY29udGFpbmVyIC0gaHRtbCBjb250YWluZXJcclxuLi4uXHJcbjxidXR0b24gaW5zZXJ0LXZpZXc9XCJwYXRoL3RvL2ZpbGUuaHRtbFwiIGluLWNvbnRhaW5lcj1cIi5jb250YWluZXJcIj5cclxuICBDbGljay1tZSFcclxuPC9idXR0b24+XHJcbiovXHJcblxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5jb25zdCB0YXJnZXRWaWV3ID0gZnVuY3Rpb24oKSB7XHJcbiAgbGV0IHRhcmdldHMgPSAkKFwiW2luc2VydC12aWV3XVwiKTtcclxuXHJcbiAgdGFyZ2V0cy5lYWNoKCAoIGluZGV4LCBlbGVtZW50ICkgPT4ge1xyXG4gICAgbGV0ICRlbGVtZW50ID0gJCggZWxlbWVudCApO1xyXG4gICAgbGV0IHZpZXcgPSAkZWxlbWVudC5hdHRyKCBcImluc2VydC12aWV3XCIgKTtcclxuICAgIGxldCBjb250YWluZXIgPSAkZWxlbWVudC5hdHRyKCBcImluLWNvbnRhaW5lclwiICk7XHJcblxyXG4gICAgJGVsZW1lbnQub24oIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAkKCBjb250YWluZXIgKS5sb2FkKCB2aWV3ICk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhcmdldFZpZXc7XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNvbnN0IHVybFZpZXcgPSBmdW5jdGlvbigpIHtcclxuICBsZXQgdXJsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cclxuICBsZXQgdGFyZ2V0cyA9ICQoXCJbaW5zZXJ0LXZpZXddXCIpO1xyXG5cclxuICB0YXJnZXRzLmVhY2goICggaW5kZXgsIGVsZW1lbnQgKSA9PiB7XHJcbiAgICBsZXQgaHJlZiA9ICQoIGVsZW1lbnQgKS5hdHRyKCBcImhyZWZcIiApO1xyXG4gICAgbGV0IHZpZXcgPSAkKCBlbGVtZW50ICkuYXR0ciggXCJpbnNlcnQtdmlld1wiICk7XHJcblxyXG4gICAgaWYgKCBocmVmID09PSB1cmxIYXNoICkge1xyXG4gICAgICAkKCBcIi5jb250YWluZXJcIiApLmxvYWQoIHZpZXcgKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cmxWaWV3O1xyXG4iXX0=
