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

    dropdownContent.hide();

    dropdownTarget.on(eventType, function (event) {
      event.stopPropagation();
      allDropdownContent.not(dropdownContent).hide();
      dropdownContent.fadeToggle(50, "linear");
    });
  });

  allDropdownContent.on(eventType, function (event) {
    event.stopPropagation();
  });

  $document.on(eventType, function () {
    allDropdownContent.fadeOut(200, "linear");
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
  var modalTargets = (0, _jquery2.default)("[modal-target]").not("pre [modal-target]");
  var modalWrappers = (0, _jquery2.default)("[modal-wrapper]").not("pre [modal-wrapper]");
  var modalContent = (0, _jquery2.default)("[modal-content]").not("pre [modal-content]");

  modalWrappers.detach().addClass("modal-hidden").appendTo("html");

  function openModal(modalWrapper) {
    modalWrapper.removeClass("modal-hidden").addClass("modal-actived");
    body.css({ "overflow-y": "hidden" });
  }

  function hideModal(modalWrapper) {
    modalWrapper.addClass("modal-hidden").removeClass("modal-actived");
    body.css({ "overflow-y": "scroll" });
  }

  modalTargets.each(function (index, element) {
    var target = (0, _jquery2.default)(element);
    var targetIndex = (0, _jquery2.default)(element).attr("modal-target");
    var modalWrapper = (0, _jquery2.default)("[modal-wrapper=" + targetIndex + "]");
    var modalClose = modalWrapper.find("[modal-close]");
    var modalContent = modalWrapper.find("[modal-content]");

    target.on("click", function () {
      openModal(modalWrapper);
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
      var scrollPosition = (0, _jquery2.default)(document).scrollTop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJhcHAvanMvY29tcG9uZW50cy9kcm9wZG93bi5qcyIsImFwcC9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvb2ZmY2FudmFzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFicy5qcyIsImFwcC9qcy9pbXBvcnRWaWV3LmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvdGFyZ2V0Vmlldy5qcyIsImFwcC9qcy91cmxWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7OztBQUVBLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixNQUFJLGNBQWMsS0FBbEI7QUFDQSxNQUFJLG1CQUFtQixzQkFBRyxhQUFILEVBQW1CLEdBQW5CLENBQXdCLGlCQUF4QixDQUF2QjtBQUNBLE1BQUksbUJBQW1CLHdCQUF2Qjs7QUFFQSxtQkFBaUIsSUFBakIsQ0FBc0IsVUFBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTJCO0FBQy9DLFFBQUksbUJBQW1CLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLHFCQUFuQixFQUEyQyxLQUEzQyxHQUFtRCxJQUFuRCxFQUF2QjtBQUNBLFFBQUksaUJBQWlCLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLG1CQUFuQixFQUF5QyxLQUF6QyxFQUFyQjs7QUFFQSxtQkFBZSxFQUFmLENBQW1CLE9BQW5CLEVBQTRCLFVBQVUsS0FBVixFQUFrQjtBQUM1QyxxQkFBZSxXQUFmLENBQTRCLGdCQUE1QjtBQUNBLHVCQUFpQixXQUFqQixDQUE4QixHQUE5QixFQUFtQyxRQUFuQztBQUNBLFlBQU0sZUFBTjtBQUNELEtBSkQ7QUFLRCxHQVREO0FBVUQ7O2tCQUVjLFM7Ozs7Ozs7OztBQ25CZjs7Ozs7O0FBRUEsU0FBUyxRQUFULEdBQW9CO0FBQ2xCLE1BQUks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Q0FBYyxVQUFFLEtBQUYsRUFBUyxPQUFULEVBQXNCO0FBQ2xDLFFBQUksV0FBVyxzQkFBRyxPQUFILENBQWY7QUFDQSxRQUFJLE9BQU8sU0FBUyxJQUFULENBQWUsYUFBZixDQUFYO0FBQ0EsUUFBSSxZQUFZLFNBQVMsSUFBVCxDQUFlLGNBQWYsQ0FBaEI7O0FBRUEsYUFBUyxFQUFULENBQWEsT0FBYixFQUFzQixZQUFNO0FBQzFCLDRCQUFHLFNBQUgsRUFBZSxJQUFmLENBQXFCLElBQXJCO0FBQ0QsS0FGRDtBQUdELEdBUkQ7QUFTRCxDQVpELEM7Ozs7Ozs7Ozs7a0JBY2UsVTs7Ozs7Ozs7O0FDMUJmOzs7Ozs7QUFFQSxJQUFNLFVBQVUsU0FBVixPQUFVLEdBQVc7QUFDekIsTUFBSSxVQUFVLE9BQU8sUUFBUCxDQUFnQixJQUE5Qjs7QUFFQSxNQUFJLFVBQVUsc0JBQUUsZUFBRixDQUFkOztBQUVBLFVBQVEsSUFBUixDQUFjLFVBQUUsS0FBRixFQUFTLE9BQVQsRUFBc0I7QUFDbEMsUUFBSSxPQUFPLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLE1BQW5CLENBQVg7QUFDQSxRQUFJLE9BQU8sc0JBQUcsT0FBSCxFQUFhLElBQWIsQ0FBbUIsYUFBbkIsQ0FBWDs7QUFFQSxRQUFLLFNBQVMsT0FBZCxFQUF3QjtBQUN0Qiw0QkFBRyxZQUFILEVBQWtCLElBQWxCLENBQXdCLElBQXhCO0FBQ0Q7QUFDRixHQVBEO0FBU0QsQ0FkRDs7a0JBZ0JlLE8iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5mdW5jdGlvbiBhY2NvcmRpb24oKSB7XG4gIHZhciBjb2xsYXBzYWJsZSA9IGZhbHNlO1xuICB2YXIgYWNjb3JkaW9uRWxlbWVudCA9ICQoIFwiW2FjY29yZGlvbl1cIiApLm5vdCggXCJwcmUgW2FjY29yZGlvbl1cIiApO1xuICB2YXIgYWN0aXZlVGl0bGVDbGFzcyA9IFwiYWNjb3JkaW9uLXRpdGxlLWFjdGl2ZVwiO1xuXG4gIGFjY29yZGlvbkVsZW1lbnQuZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XG4gICAgdmFyIGFjY29yZGlvbkNvbnRlbnQgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbYWNjb3JkaW9uLWNvbnRlbnRdXCIgKS5maXJzdCgpLmhpZGUoKTtcbiAgICB2YXIgYWNjb3JkaW9uVGl0bGUgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbYWNjb3JkaW9uLXRpdGxlXVwiICkuZmlyc3QoKTtcblxuICAgIGFjY29yZGlvblRpdGxlLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGFjY29yZGlvblRpdGxlLnRvZ2dsZUNsYXNzKCBhY3RpdmVUaXRsZUNsYXNzICk7XG4gICAgICBhY2NvcmRpb25Db250ZW50LnNsaWRlVG9nZ2xlKCAyMDAsIFwibGluZWFyXCIgKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFjY29yZGlvbjtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZnVuY3Rpb24gZHJvcGRvd24oKSB7XG4gIHZhciBhbGxEcm9wZG93biA9ICQoIFwiW2Ryb3Bkb3duXVwiICkubm90KCBcInByZSBbZHJvcGRvd25dXCIgKTtcbiAgdmFyIGFsbERyb3Bkb3duQ29udGVudCA9IGFsbERyb3Bkb3duLmZpbmQoIFwiW2Ryb3Bkb3duLWNvbnRlbnRdXCIgKTtcbiAgdmFyICRkb2N1bWVudCA9ICQoIGRvY3VtZW50ICk7XG4gIHZhciBldmVudFR5cGUgPSBcImNsaWNrXCI7XG5cbiAgYWxsRHJvcGRvd24uZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XG4gICAgdmFyIGRyb3Bkb3duQ29udGVudCA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIltkcm9wZG93bi1jb250ZW50XVwiICk7XG4gICAgdmFyIGRyb3Bkb3duVGFyZ2V0ID0gJCggZWxlbWVudCApLmZpbmQoIFwiW2Ryb3Bkb3duLXRhcmdldF1cIiApO1xuXG4gICAgZHJvcGRvd25Db250ZW50LmhpZGUoKTtcblxuICAgIGRyb3Bkb3duVGFyZ2V0Lm9uKCBldmVudFR5cGUsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgYWxsRHJvcGRvd25Db250ZW50Lm5vdCggZHJvcGRvd25Db250ZW50ICkuaGlkZSgpO1xuICAgICAgZHJvcGRvd25Db250ZW50LmZhZGVUb2dnbGUoIDUwLCBcImxpbmVhclwiICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGFsbERyb3Bkb3duQ29udGVudC5vbiggZXZlbnRUeXBlLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gICRkb2N1bWVudC5vbiggZXZlbnRUeXBlLCBmdW5jdGlvbigpIHtcbiAgICBhbGxEcm9wZG93bkNvbnRlbnQuZmFkZU91dCggMjAwLCBcImxpbmVhclwiICk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkcm9wZG93bjtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZnVuY3Rpb24gbW9kYWwoKSB7XG4gIHZhciBib2R5ID0gJCggXCJib2R5XCIgKTtcbiAgdmFyICR3aW5kb3cgPSAkKCB3aW5kb3cgKTtcbiAgdmFyIG1vZGFsVGFyZ2V0cyA9ICQoIFwiW21vZGFsLXRhcmdldF1cIiApLm5vdCggXCJwcmUgW21vZGFsLXRhcmdldF1cIiApO1xuICB2YXIgbW9kYWxXcmFwcGVycyA9ICQoIFwiW21vZGFsLXdyYXBwZXJdXCIgKS5ub3QoIFwicHJlIFttb2RhbC13cmFwcGVyXVwiICk7XG4gIHZhciBtb2RhbENvbnRlbnQgPSAkKCBcIlttb2RhbC1jb250ZW50XVwiICkubm90KCBcInByZSBbbW9kYWwtY29udGVudF1cIiApO1xuXG4gIG1vZGFsV3JhcHBlcnMuZGV0YWNoKCkuYWRkQ2xhc3MoIFwibW9kYWwtaGlkZGVuXCIgKS5hcHBlbmRUbyggXCJodG1sXCIgKTtcblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoIG1vZGFsV3JhcHBlciApIHtcbiAgICBtb2RhbFdyYXBwZXIucmVtb3ZlQ2xhc3MoXCJtb2RhbC1oaWRkZW5cIikuYWRkQ2xhc3MoXCJtb2RhbC1hY3RpdmVkXCIpO1xuICAgIGJvZHkuY3NzKHsgXCJvdmVyZmxvdy15XCI6IFwiaGlkZGVuXCIgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlTW9kYWwoIG1vZGFsV3JhcHBlciApIHtcbiAgICBtb2RhbFdyYXBwZXIuYWRkQ2xhc3MoXCJtb2RhbC1oaWRkZW5cIikucmVtb3ZlQ2xhc3MoXCJtb2RhbC1hY3RpdmVkXCIpO1xuICAgIGJvZHkuY3NzKHsgXCJvdmVyZmxvdy15XCI6IFwic2Nyb2xsXCIgfSk7XG4gIH1cblxuICBtb2RhbFRhcmdldHMuZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XG4gICAgdmFyIHRhcmdldCA9ICQoIGVsZW1lbnQgKTtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSAkKCBlbGVtZW50ICkuYXR0cihcIm1vZGFsLXRhcmdldFwiKTtcbiAgICB2YXIgbW9kYWxXcmFwcGVyID0gJCggXCJbbW9kYWwtd3JhcHBlcj1cIiArIHRhcmdldEluZGV4ICsgXCJdXCIgKTtcbiAgICB2YXIgbW9kYWxDbG9zZSA9IG1vZGFsV3JhcHBlci5maW5kKFwiW21vZGFsLWNsb3NlXVwiKTtcbiAgICB2YXIgbW9kYWxDb250ZW50ID0gbW9kYWxXcmFwcGVyLmZpbmQoIFwiW21vZGFsLWNvbnRlbnRdXCIgKTtcblxuICAgIHRhcmdldC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgb3Blbk1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcbiAgICB9KTtcblxuICAgIG1vZGFsQ29udGVudC5vbiggXCJjbGlja1wiLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIG1vZGFsV3JhcHBlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcbiAgICB9KTtcblxuICAgIG1vZGFsQ2xvc2Uub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGhpZGVNb2RhbCggbW9kYWxXcmFwcGVyICk7XG4gICAgfSk7XG5cbiAgICAkd2luZG93Lm9uKCBcImtleWRvd25cIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgaWYgKCBldmVudC5rZXlDb2RlID09IDI3ICkge1xuICAgICAgICBoaWRlTW9kYWwoIG1vZGFsV3JhcHBlciApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsO1xuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5mdW5jdGlvbiBvZmZjYW52YXMoKSB7XG4gIHZhciBhbGxPZmZDYW52YXNUYXJnZXQgPSAkKCBcIltvZmZjYW52YXMtdGFyZ2V0XVwiICkubm90KFwicHJlIFtvZmZjYW52YXMtdGFyZ2V0XVwiKTtcbiAgdmFyIGFsbE9mZkNhbnZhc1dyYXBwZXIgPSAkKCBcIltvZmZjYW52YXMtd3JhcHBlcl1cIiApLm5vdChcInByZSBbb2ZmY2FudmFzLXdyYXBwZXJdXCIpO1xuICB2YXIgJHdpbmRvdyA9ICQoIHdpbmRvdyApO1xuXG4gIGFsbE9mZkNhbnZhc1dyYXBwZXIuZGV0YWNoKCkuYWRkQ2xhc3MoXCJvZmZjYW52YXMtaGlkZGVuXCIpLmFwcGVuZFRvKFwiaHRtbFwiKTtcblxuICBmdW5jdGlvbiByZW1vdmVPZmZDYW52YXMoKSB7XG4gICAgYWxsT2ZmQ2FudmFzV3JhcHBlci5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIikuYWRkQ2xhc3MoXCJvZmZjYW52YXMtaGlkZGVuXCIpO1xuICAgICR3aW5kb3cub2ZmKFwic2Nyb2xsXCIpO1xuICB9XG5cbiAgYWxsT2ZmQ2FudmFzVGFyZ2V0LmVhY2goZnVuY3Rpb24oIGluZGV4LCBlbGVtZW50ICkge1xuICAgIHZhciB0YXJnZXQgPSAkKCBlbGVtZW50ICk7XG4gICAgdmFyIHRhcmdldEluZGV4ID0gdGFyZ2V0LmF0dHIoXCJvZmZjYW52YXMtdGFyZ2V0XCIpO1xuICAgIHZhciB3cmFwcGVyID0gJChcIltvZmZjYW52YXMtd3JhcHBlcj1cIiArIHRhcmdldEluZGV4ICsgXCJdXCIpO1xuICAgIHZhciBjb250ZW50ID0gd3JhcHBlci5maW5kKFwiW29mZmNhbnZhcy1jb250ZW50XVwiKTtcblxuXG4gICAgdGFyZ2V0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAkKCBkb2N1bWVudCApLnNjcm9sbFRvcCgpO1xuICAgICAgd3JhcHBlci50b2dnbGVDbGFzcyhcIm9mZmNhbnZhcy1oaWRkZW4gb2ZmY2FudmFzLWFjdGl2ZVwiKTtcblxuICAgICAgJHdpbmRvdy5vbiggXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoIHRoaXMgKS5zY3JvbGxUb3AoIHNjcm9sbFBvc2l0aW9uICk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHdyYXBwZXIub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHJlbW92ZU9mZkNhbnZhcygpO1xuICAgIH0pO1xuXG4gICAgJHdpbmRvdy5vbiggXCJrZXlkb3duXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGlmICggZXZlbnQua2V5Q29kZSA9PSAyNyApIHtcbiAgICAgICAgcmVtb3ZlT2ZmQ2FudmFzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2ZmY2FudmFzO1xuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5mdW5jdGlvbiB0YWJzKCkge1xuICB2YXIgYWxsVGFicyA9ICQoIFwiW3RhYnNdXCIgKS5ub3QoIFwicHJlIFt0YWJzXVwiICk7XG4gIHZhciBhY3RpdmVUaXRsZUNsYXNzID0gXCJ0YWItdGl0bGUtYWN0aXZlXCI7XG5cbiAgYWxsVGFicy5lYWNoKGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApIHtcbiAgICB2YXIgdGFiV3JhcHBlciA9ICQoIGVsZW1lbnQgKTtcbiAgICB2YXIgdGFiVGl0bGUgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbdGFiLXRpdGxlXVwiICk7XG4gICAgdmFyIHRhYkNvbnRlbnQgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbdGFiLWNvbnRlbnRdXCIgKTtcbiAgICB2YXIgZmlyc3RJbmRleCA9IHRhYlRpdGxlLmZpcnN0KCkuYXR0ciggXCJ0YWItdGl0bGVcIiApO1xuXG4gICAgdGFiVGl0bGUuZmlyc3QoKS5hZGRDbGFzcyggYWN0aXZlVGl0bGVDbGFzcyApO1xuICAgIHRhYkNvbnRlbnQuaGlkZSgpO1xuICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLWNvbnRlbnQ9XCIgKyBmaXJzdEluZGV4ICsgXCJdXCIgKS5zaG93KCk7XG5cbiAgICB0YWJUaXRsZS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0YWJJbmRleCA9ICQoIHRoaXMgKS5hdHRyKCBcInRhYi10aXRsZVwiICk7XG5cbiAgICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLWNvbnRlbnRdXCIgKS5oaWRlKCk7XG4gICAgICB0YWJXcmFwcGVyLmZpbmQoIFwiW3RhYi1jb250ZW50PVwiICsgdGFiSW5kZXggKyBcIl1cIiApLnNob3coKTtcbiAgICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLXRpdGxlXVwiICkucmVtb3ZlQ2xhc3MoIGFjdGl2ZVRpdGxlQ2xhc3MgKTtcbiAgICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLXRpdGxlPVwiICsgdGFiSW5kZXggKyBcIl1cIiApLmFkZENsYXNzKCBhY3RpdmVUaXRsZUNsYXNzICk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0YWJzO1xuIiwiLyogSW5zZXJ0IFZpZXdcblxuQFZpZXcgLSBmaWxlIHBhdGhcbi4uLlxuPGRpdiB2aWV3PVwicGF0aC90by9maWxlLmh0bWxcIj4gPC9kaXY+XG4qL1xuXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmNvbnN0IGltcG9ydFZpZXcgID0gZnVuY3Rpb24oKSB7XG4gIGxldCB2aWV3RWxlbWVudHMgPSAkKCBcIlt2aWV3XVwiICk7XG5cbiAgdmlld0VsZW1lbnRzLmVhY2goIChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgIGxldCAkZWxlbWVudCA9ICQoIGVsZW1lbnQgKTtcbiAgICBsZXQgcGF0aCA9ICRlbGVtZW50LmF0dHIoIFwidmlld1wiICk7XG5cbiAgICAkZWxlbWVudC5sb2FkKCBwYXRoLCAoZGF0YSwgbG9nKSA9PiB7XG4gICAgICBpZiAoIGxvZyA9PT0gXCJlcnJvclwiICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiU1UtRXJyb3I6IFwiICsgcGF0aCArIFwiIC0gTm90IGZvdW5kXCIgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbXBvcnRWaWV3O1xuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IGltcG9ydFZpZXcgZnJvbSBcIi4vaW1wb3J0Vmlldy5qc1wiO1xuaW1wb3J0IHRhcmdldFZpZXcgZnJvbSBcIi4vdGFyZ2V0Vmlldy5qc1wiO1xuaW1wb3J0IHVybFZpZXcgZnJvbSBcIi4vdXJsVmlldy5qc1wiO1xuXG5pbXBvcnQgYWNjb3JkaW9uIGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzXCI7XG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC5qc1wiO1xuaW1wb3J0IHRhYnMgZnJvbSBcIi4vY29tcG9uZW50cy90YWJzLmpzXCI7XG5pbXBvcnQgZHJvcGRvd24gZnJvbSBcIi4vY29tcG9uZW50cy9kcm9wZG93bi5qc1wiO1xuaW1wb3J0IG9mZmNhbnZhcyBmcm9tIFwiLi9jb21wb25lbnRzL29mZmNhbnZhcy5qc1wiO1xuXG4kKCAoKSA9PiB7XG4gIGltcG9ydFZpZXcoKTtcbiAgdGFyZ2V0VmlldygpO1xuICB1cmxWaWV3KCk7XG5cbiAgLy8gQ29tcG9uZW50c1xuICBhY2NvcmRpb24oKTtcbiAgZHJvcGRvd24oKTtcbiAgbW9kYWwoKTtcbiAgdGFicygpO1xuICBvZmZjYW52YXMoKTtcbn0pO1xuIiwiLyogVGFyZ2V0IHZpZXdcblxuQGluc2V0LXZpZXcgLSBmaWxlIHBhdGggdG8gaW5jbHVkZVxuQGluLWNvbnRhaW5lciAtIGh0bWwgY29udGFpbmVyXG4uLi5cbjxidXR0b24gaW5zZXJ0LXZpZXc9XCJwYXRoL3RvL2ZpbGUuaHRtbFwiIGluLWNvbnRhaW5lcj1cIi5jb250YWluZXJcIj5cbiAgQ2xpY2stbWUhXG48L2J1dHRvbj5cbiovXG5cbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuY29uc3QgdGFyZ2V0VmlldyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgdGFyZ2V0cyA9ICQoXCJbaW5zZXJ0LXZpZXddXCIpO1xuXG4gIHRhcmdldHMuZWFjaCggKCBpbmRleCwgZWxlbWVudCApID0+IHtcbiAgICBsZXQgJGVsZW1lbnQgPSAkKCBlbGVtZW50ICk7XG4gICAgbGV0IHZpZXcgPSAkZWxlbWVudC5hdHRyKCBcImluc2VydC12aWV3XCIgKTtcbiAgICBsZXQgY29udGFpbmVyID0gJGVsZW1lbnQuYXR0ciggXCJpbi1jb250YWluZXJcIiApO1xuXG4gICAgJGVsZW1lbnQub24oIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgJCggY29udGFpbmVyICkubG9hZCggdmlldyApO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhcmdldFZpZXc7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmNvbnN0IHVybFZpZXcgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHVybEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICBsZXQgdGFyZ2V0cyA9ICQoXCJbaW5zZXJ0LXZpZXddXCIpO1xuXG4gIHRhcmdldHMuZWFjaCggKCBpbmRleCwgZWxlbWVudCApID0+IHtcbiAgICBsZXQgaHJlZiA9ICQoIGVsZW1lbnQgKS5hdHRyKCBcImhyZWZcIiApO1xuICAgIGxldCB2aWV3ID0gJCggZWxlbWVudCApLmF0dHIoIFwiaW5zZXJ0LXZpZXdcIiApO1xuXG4gICAgaWYgKCBocmVmID09PSB1cmxIYXNoICkge1xuICAgICAgJCggXCIuY29udGFpbmVyXCIgKS5sb2FkKCB2aWV3ICk7XG4gICAgfVxuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJsVmlldztcbiJdfQ==
