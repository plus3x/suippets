(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function accordion() {
  var accordionElement = (0, _jquery2.default)("[accordion]").not("pre [accordion]");
  var activeTitleClass = "accordion-title-active";

  accordionElement.each(function (index, element) {
    var accordionContent = (0, _jquery2.default)(element).find("[accordion-content]").first().hide();
    var accordionTitle = (0, _jquery2.default)(element).find("[accordion-title]").first();

    accordionTitle.on("click", function (event) {
      accordionTitle.toggleClass(activeTitleClass);
      accordionContent.slideToggle(100, "linear");
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
  var allDropdown = (0, _jquery2.default)("[dropdown]");
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
  var modalTargets = (0, _jquery2.default)("[modal-target]");
  var modalWrappers = (0, _jquery2.default)("[modal-wrapper]");
  var modalContent = (0, _jquery2.default)("[modal-content]");

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
  var allOffCanvasTarget = (0, _jquery2.default)("[offcanvas-target]");
  var allOffCanvasWrapper = (0, _jquery2.default)("[offcanvas-wrapper]");
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

// Mobile menu
(0, _jquery2.default)('.open-menu').on('click', function () {
  (0, _jquery2.default)('.sidebar').toggleClass('toggle-sidebar');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJhcHAvanMvY29tcG9uZW50cy9kcm9wZG93bi5qcyIsImFwcC9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvb2ZmY2FudmFzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFicy5qcyIsImFwcC9qcy9pbXBvcnRWaWV3LmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvdGFyZ2V0Vmlldy5qcyIsImFwcC9qcy91cmxWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7OztBQUVBLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixNQUFJLG1CQUFtQixzQkFBRyxhQUFILEVBQW1CLEdBQW5CLENBQXdCLGlCQUF4QixDQUF2QjtBQUNBLE1BQUksbUJBQW1CLHdCQUF2Qjs7QUFFQSxtQkFBaUIsSUFBakIsQ0FBc0IsVUFBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTJCO0FBQy9DLFFBQUksbUJBQW1CLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLHFCQUFuQixFQUEyQyxLQUEzQyxHQUFtRCxJQUFuRCxFQUF2QjtBQUNBLFFBQUksaUJBQWlCLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLG1CQUFuQixFQUF5QyxLQUF6QyxFQUFyQjs7QUFFQSxtQkFBZSxFQUFmLENBQW1CLE9BQW5CLEVBQTRCLFVBQVUsS0FBVixFQUFrQjtBQUM1QyxxQkFBZSxXQUFmLENBQTRCLGdCQUE1QjtBQUNBLHVCQUFpQixXQUFqQixDQUE4QixHQUE5QixFQUFtQyxRQUFuQztBQUNBLFlBQU0sZUFBTjtBQUNELEtBSkQ7QUFLRCxHQVREO0FBVUQ7O2tCQUVjLFM7Ozs7Ozs7OztBQ2xCZjs7Ozs7O0FBRUEsU0FBUyxRQUFULEdBQW9CO0FBQ2xCLE1BQUksY0FBYyxzQkFBRyxZQUFILENBQWxC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YyxXQUFkLENBQTBCLGdCQUExQjtBQUNBLENBRkQ7Ozs7Ozs7OztBQ2ZBOzs7Ozs7QUFFQSxJQUFNLGFBQWEsU0FBYixVQUFhLEdBQVc7QUFDNUIsTUFBSSxVQUFVLHNCQUFFLGVBQUYsQ0FBZDs7QUFFQSxVQUFRLElBQVIsQ0FBYyxVQUFFLEtBQUYsRUFBUyxPQUFULEVBQXNCO0FBQ2xDLFFBQUksV0FBVyxzQkFBRyxPQUFILENBQWY7QUFDQSxRQUFJLE9BQU8sU0FBUyxJQUFULENBQWUsYUFBZixDQUFYO0FBQ0EsUUFBSSxZQUFZLFNBQVMsSUFBVCxDQUFlLGNBQWYsQ0FBaEI7O0FBRUEsYUFBUyxFQUFULENBQWEsT0FBYixFQUFzQixZQUFNO0FBQzFCLDRCQUFHLFNBQUgsRUFBZSxJQUFmLENBQXFCLElBQXJCO0FBQ0QsS0FGRDtBQUdELEdBUkQ7QUFTRCxDQVpELEM7Ozs7Ozs7Ozs7a0JBY2UsVTs7Ozs7Ozs7O0FDMUJmOzs7Ozs7QUFFQSxJQUFNLFVBQVUsU0FBVixPQUFVLEdBQVc7QUFDekIsTUFBSSxVQUFVLE9BQU8sUUFBUCxDQUFnQixJQUE5Qjs7QUFFQSxNQUFJLFVBQVUsc0JBQUUsZUFBRixDQUFkOztBQUVBLFVBQVEsSUFBUixDQUFjLFVBQUUsS0FBRixFQUFTLE9BQVQsRUFBc0I7QUFDbEMsUUFBSSxPQUFPLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLE1BQW5CLENBQVg7QUFDQSxRQUFJLE9BQU8sc0JBQUcsT0FBSCxFQUFhLElBQWIsQ0FBbUIsYUFBbkIsQ0FBWDs7QUFFQSxRQUFLLFNBQVMsT0FBZCxFQUF3QjtBQUN0Qiw0QkFBRyxZQUFILEVBQWtCLElBQWxCLENBQXdCLElBQXhCO0FBQ0Q7QUFDRixHQVBEO0FBU0QsQ0FkRDs7a0JBZ0JlLE8iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZnVuY3Rpb24gYWNjb3JkaW9uKCkge1xyXG4gIHZhciBhY2NvcmRpb25FbGVtZW50ID0gJCggXCJbYWNjb3JkaW9uXVwiICkubm90KCBcInByZSBbYWNjb3JkaW9uXVwiICk7XHJcbiAgdmFyIGFjdGl2ZVRpdGxlQ2xhc3MgPSBcImFjY29yZGlvbi10aXRsZS1hY3RpdmVcIjtcclxuXHJcbiAgYWNjb3JkaW9uRWxlbWVudC5lYWNoKGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApIHtcclxuICAgIHZhciBhY2NvcmRpb25Db250ZW50ID0gJCggZWxlbWVudCApLmZpbmQoIFwiW2FjY29yZGlvbi1jb250ZW50XVwiICkuZmlyc3QoKS5oaWRlKCk7XHJcbiAgICB2YXIgYWNjb3JkaW9uVGl0bGUgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbYWNjb3JkaW9uLXRpdGxlXVwiICkuZmlyc3QoKTtcclxuXHJcbiAgICBhY2NvcmRpb25UaXRsZS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgIGFjY29yZGlvblRpdGxlLnRvZ2dsZUNsYXNzKCBhY3RpdmVUaXRsZUNsYXNzICk7XHJcbiAgICAgIGFjY29yZGlvbkNvbnRlbnQuc2xpZGVUb2dnbGUoIDEwMCwgXCJsaW5lYXJcIiApO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWNjb3JkaW9uO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5mdW5jdGlvbiBkcm9wZG93bigpIHtcclxuICB2YXIgYWxsRHJvcGRvd24gPSAkKCBcIltkcm9wZG93bl1cIiApO1xyXG4gIHZhciBhbGxEcm9wZG93bkNvbnRlbnQgPSBhbGxEcm9wZG93bi5maW5kKCBcIltkcm9wZG93bi1jb250ZW50XVwiICk7XHJcbiAgdmFyICRkb2N1bWVudCA9ICQoIGRvY3VtZW50ICk7XHJcbiAgdmFyIGV2ZW50VHlwZSA9IFwiY2xpY2tcIjtcclxuXHJcbiAgYWxsRHJvcGRvd24uZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XHJcbiAgICB2YXIgZHJvcGRvd25Db250ZW50ID0gJCggZWxlbWVudCApLmZpbmQoIFwiW2Ryb3Bkb3duLWNvbnRlbnRdXCIgKTtcclxuICAgIHZhciBkcm9wZG93blRhcmdldCA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIltkcm9wZG93bi10YXJnZXRdXCIgKTtcclxuXHJcbiAgICBkcm9wZG93bkNvbnRlbnQuYWRkQ2xhc3MoXCJkcm9wZG93bi1oaWRkZW5cIik7XHJcblxyXG4gICAgZHJvcGRvd25UYXJnZXQub24oIGV2ZW50VHlwZSwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgYWxsRHJvcGRvd25Db250ZW50Lm5vdCggZHJvcGRvd25Db250ZW50ICkucmVtb3ZlQ2xhc3MoIFwiZHJvcGRvd24tYWN0aXZhdGVkXCIgKS5hZGRDbGFzcyggXCJkcm9wZG93bi1oaWRkZW5cIiApO1xyXG4gICAgICBkcm9wZG93bkNvbnRlbnQudG9nZ2xlQ2xhc3MoIFwiZHJvcGRvd24tYWN0aXZhdGVkXCIgKS50b2dnbGVDbGFzcyggXCJkcm9wZG93bi1oaWRkZW5cIiApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGFsbERyb3Bkb3duQ29udGVudC5vbiggZXZlbnRUeXBlLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJGRvY3VtZW50Lm9uKCBldmVudFR5cGUsIGZ1bmN0aW9uKCkge1xyXG4gICAgYWxsRHJvcGRvd25Db250ZW50LnJlbW92ZUNsYXNzKCBcImRyb3Bkb3duLWFjdGl2YXRlZFwiICkuYWRkQ2xhc3MoIFwiZHJvcGRvd24taGlkZGVuXCIgKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJvcGRvd247XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmZ1bmN0aW9uIG1vZGFsKCkge1xyXG4gIHZhciBib2R5ID0gJCggXCJib2R5XCIgKTtcclxuICB2YXIgJHdpbmRvdyA9ICQoIHdpbmRvdyApO1xyXG4gIHZhciAkZG9jdW1lbnQgPSAkKCBkb2N1bWVudCAgKTtcclxuICB2YXIgbW9kYWxUYXJnZXRzID0gJCggXCJbbW9kYWwtdGFyZ2V0XVwiICk7XHJcbiAgdmFyIG1vZGFsV3JhcHBlcnMgPSAkKCBcIlttb2RhbC13cmFwcGVyXVwiICk7XHJcbiAgdmFyIG1vZGFsQ29udGVudCA9ICQoIFwiW21vZGFsLWNvbnRlbnRdXCIgKTtcclxuXHJcbiAgbW9kYWxXcmFwcGVycy5kZXRhY2goKS5hZGRDbGFzcyggXCJtb2RhbC1oaWRkZW5cIiApLmFwcGVuZFRvKCBcImh0bWxcIiApO1xyXG5cclxuICBmdW5jdGlvbiBvcGVuTW9kYWwoIG1vZGFsV3JhcHBlciApIHtcclxuICAgIG1vZGFsV3JhcHBlci5yZW1vdmVDbGFzcyggXCJtb2RhbC1oaWRkZW5cIiApLmFkZENsYXNzKCBcIm1vZGFsLWFjdGl2ZWRcIiApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKSB7XHJcbiAgICBtb2RhbFdyYXBwZXIuYWRkQ2xhc3MoIFwibW9kYWwtaGlkZGVuXCIgKS5yZW1vdmVDbGFzcyggXCJtb2RhbC1hY3RpdmVkXCIgKTtcclxuICAgICR3aW5kb3cub2ZmKCBcInNjcm9sbFwiICk7XHJcbiAgfVxyXG5cclxuICBtb2RhbFRhcmdldHMuZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gJCggZWxlbWVudCApO1xyXG4gICAgdmFyIHRhcmdldEluZGV4ID0gJCggZWxlbWVudCApLmF0dHIoIFwibW9kYWwtdGFyZ2V0XCIgKTtcclxuICAgIHZhciBtb2RhbFdyYXBwZXIgPSAkKCBcIlttb2RhbC13cmFwcGVyPVwiICsgdGFyZ2V0SW5kZXggKyBcIl1cIiApO1xyXG4gICAgdmFyIG1vZGFsQ2xvc2UgPSBtb2RhbFdyYXBwZXIuZmluZCggXCJbbW9kYWwtY2xvc2VdXCIgKTtcclxuICAgIHZhciBtb2RhbENvbnRlbnQgPSBtb2RhbFdyYXBwZXIuZmluZCggXCJbbW9kYWwtY29udGVudF1cIiApO1xyXG5cclxuICAgIHRhcmdldC5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgb3Blbk1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcclxuICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gJGRvY3VtZW50LnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgJHdpbmRvdy5vbiggXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCggdGhpcyApLnNjcm9sbFRvcCggc2Nyb2xsUG9zaXRpb24gKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbENvbnRlbnQub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsV3JhcHBlci5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsQ2xvc2Uub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGhpZGVNb2RhbCggbW9kYWxXcmFwcGVyICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkd2luZG93Lm9uKCBcImtleWRvd25cIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICBpZiAoIGV2ZW50LmtleUNvZGUgPT0gMjcgKSB7XHJcbiAgICAgICAgaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZnVuY3Rpb24gb2ZmY2FudmFzKCkge1xyXG4gIHZhciBhbGxPZmZDYW52YXNUYXJnZXQgPSAkKCBcIltvZmZjYW52YXMtdGFyZ2V0XVwiICk7XHJcbiAgdmFyIGFsbE9mZkNhbnZhc1dyYXBwZXIgPSAkKCBcIltvZmZjYW52YXMtd3JhcHBlcl1cIiApO1xyXG4gIHZhciAkd2luZG93ID0gJCggd2luZG93ICk7XHJcbiAgdmFyICRkb2N1bWVudCA9ICQoIGRvY3VtZW50ICk7XHJcblxyXG4gIGFsbE9mZkNhbnZhc1dyYXBwZXIuZGV0YWNoKCkuYWRkQ2xhc3MoXCJvZmZjYW52YXMtaGlkZGVuXCIpLmFwcGVuZFRvKFwiaHRtbFwiKTtcclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlT2ZmQ2FudmFzKCkge1xyXG4gICAgYWxsT2ZmQ2FudmFzV3JhcHBlci5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIikuYWRkQ2xhc3MoXCJvZmZjYW52YXMtaGlkZGVuXCIpO1xyXG4gICAgJHdpbmRvdy5vZmYoXCJzY3JvbGxcIik7XHJcbiAgfVxyXG5cclxuICBhbGxPZmZDYW52YXNUYXJnZXQuZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gJCggZWxlbWVudCApO1xyXG4gICAgdmFyIHRhcmdldEluZGV4ID0gdGFyZ2V0LmF0dHIoXCJvZmZjYW52YXMtdGFyZ2V0XCIpO1xyXG4gICAgdmFyIHdyYXBwZXIgPSAkKFwiW29mZmNhbnZhcy13cmFwcGVyPVwiICsgdGFyZ2V0SW5kZXggKyBcIl1cIik7XHJcbiAgICB2YXIgY29udGVudCA9IHdyYXBwZXIuZmluZChcIltvZmZjYW52YXMtY29udGVudF1cIik7XHJcblxyXG5cclxuICAgIHRhcmdldC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAkZG9jdW1lbnQuc2Nyb2xsVG9wKCk7XHJcbiAgICAgIHdyYXBwZXIudG9nZ2xlQ2xhc3MoXCJvZmZjYW52YXMtaGlkZGVuIG9mZmNhbnZhcy1hY3RpdmVcIik7XHJcblxyXG4gICAgICAkd2luZG93Lm9uKCBcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCB0aGlzICkuc2Nyb2xsVG9wKCBzY3JvbGxQb3NpdGlvbiApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRlbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd3JhcHBlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZW1vdmVPZmZDYW52YXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICR3aW5kb3cub24oIFwia2V5ZG93blwiLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgIGlmICggZXZlbnQua2V5Q29kZSA9PSAyNyApIHtcclxuICAgICAgICByZW1vdmVPZmZDYW52YXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvZmZjYW52YXM7XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmZ1bmN0aW9uIHRhYnMoKSB7XHJcbiAgdmFyIGFsbFRhYnMgPSAkKCBcIlt0YWJzXVwiICkubm90KCBcInByZSBbdGFic11cIiApO1xyXG4gIHZhciBhY3RpdmVUaXRsZUNsYXNzID0gXCJ0YWItdGl0bGUtYWN0aXZlXCI7XHJcblxyXG4gIGFsbFRhYnMuZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XHJcbiAgICB2YXIgdGFiV3JhcHBlciA9ICQoIGVsZW1lbnQgKTtcclxuICAgIHZhciB0YWJUaXRsZSA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIlt0YWItdGl0bGVdXCIgKTtcclxuICAgIHZhciB0YWJDb250ZW50ID0gJCggZWxlbWVudCApLmZpbmQoIFwiW3RhYi1jb250ZW50XVwiICk7XHJcbiAgICB2YXIgZmlyc3RJbmRleCA9IHRhYlRpdGxlLmZpcnN0KCkuYXR0ciggXCJ0YWItdGl0bGVcIiApO1xyXG5cclxuICAgIHRhYlRpdGxlLmZpcnN0KCkuYWRkQ2xhc3MoIGFjdGl2ZVRpdGxlQ2xhc3MgKTtcclxuICAgIHRhYkNvbnRlbnQuaGlkZSgpO1xyXG4gICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItY29udGVudD1cIiArIGZpcnN0SW5kZXggKyBcIl1cIiApLnNob3coKTtcclxuXHJcbiAgICB0YWJUaXRsZS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHRhYkluZGV4ID0gJCggdGhpcyApLmF0dHIoIFwidGFiLXRpdGxlXCIgKTtcclxuXHJcbiAgICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLWNvbnRlbnRdXCIgKS5oaWRlKCk7XHJcbiAgICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLWNvbnRlbnQ9XCIgKyB0YWJJbmRleCArIFwiXVwiICkuc2hvdygpO1xyXG4gICAgICB0YWJXcmFwcGVyLmZpbmQoIFwiW3RhYi10aXRsZV1cIiApLnJlbW92ZUNsYXNzKCBhY3RpdmVUaXRsZUNsYXNzICk7XHJcbiAgICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLXRpdGxlPVwiICsgdGFiSW5kZXggKyBcIl1cIiApLmFkZENsYXNzKCBhY3RpdmVUaXRsZUNsYXNzICk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFicztcclxuIiwiLyogSW5zZXJ0IFZpZXdcclxuXHJcbkBWaWV3IC0gZmlsZSBwYXRoXHJcbi4uLlxyXG48ZGl2IHZpZXc9XCJwYXRoL3RvL2ZpbGUuaHRtbFwiPiA8L2Rpdj5cclxuKi9cclxuXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNvbnN0IGltcG9ydFZpZXcgID0gZnVuY3Rpb24oKSB7XHJcbiAgbGV0IHZpZXdFbGVtZW50cyA9ICQoIFwiW3ZpZXddXCIgKTtcclxuXHJcbiAgdmlld0VsZW1lbnRzLmVhY2goIChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgbGV0ICRlbGVtZW50ID0gJCggZWxlbWVudCApO1xyXG4gICAgbGV0IHBhdGggPSAkZWxlbWVudC5hdHRyKCBcInZpZXdcIiApO1xyXG5cclxuICAgICRlbGVtZW50LmxvYWQoIHBhdGgsIChkYXRhLCBsb2cpID0+IHtcclxuICAgICAgaWYgKCBsb2cgPT09IFwiZXJyb3JcIiApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiU1UtRXJyb3I6IFwiICsgcGF0aCArIFwiIC0gTm90IGZvdW5kXCIgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbXBvcnRWaWV3O1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBpbXBvcnRWaWV3IGZyb20gXCIuL2ltcG9ydFZpZXcuanNcIjtcclxuaW1wb3J0IHRhcmdldFZpZXcgZnJvbSBcIi4vdGFyZ2V0Vmlldy5qc1wiO1xyXG5pbXBvcnQgdXJsVmlldyBmcm9tIFwiLi91cmxWaWV3LmpzXCI7XHJcblxyXG5pbXBvcnQgYWNjb3JkaW9uIGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzXCI7XHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsLmpzXCI7XHJcbmltcG9ydCB0YWJzIGZyb20gXCIuL2NvbXBvbmVudHMvdGFicy5qc1wiO1xyXG5pbXBvcnQgZHJvcGRvd24gZnJvbSBcIi4vY29tcG9uZW50cy9kcm9wZG93bi5qc1wiO1xyXG5pbXBvcnQgb2ZmY2FudmFzIGZyb20gXCIuL2NvbXBvbmVudHMvb2ZmY2FudmFzLmpzXCI7XHJcblxyXG4kKCgpID0+IHtcclxuICBpbXBvcnRWaWV3KCk7XHJcbiAgdGFyZ2V0VmlldygpO1xyXG4gIHVybFZpZXcoKTtcclxuXHJcbiAgLy8gQ29tcG9uZW50c1xyXG4gIGFjY29yZGlvbigpO1xyXG4gIGRyb3Bkb3duKCk7XHJcbiAgbW9kYWwoKTtcclxuICB0YWJzKCk7XHJcbiAgb2ZmY2FudmFzKCk7XHJcbn0pO1xyXG5cclxuLy8gTW9iaWxlIG1lbnVcclxuJCgnLm9wZW4tbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCgnLnNpZGViYXInKS50b2dnbGVDbGFzcygndG9nZ2xlLXNpZGViYXInKTtcclxufSkiLCIvKiBUYXJnZXQgdmlld1xyXG5cclxuQGluc2V0LXZpZXcgLSBmaWxlIHBhdGggdG8gaW5jbHVkZVxyXG5AaW4tY29udGFpbmVyIC0gaHRtbCBjb250YWluZXJcclxuLi4uXHJcbjxidXR0b24gaW5zZXJ0LXZpZXc9XCJwYXRoL3RvL2ZpbGUuaHRtbFwiIGluLWNvbnRhaW5lcj1cIi5jb250YWluZXJcIj5cclxuICBDbGljay1tZSFcclxuPC9idXR0b24+XHJcbiovXHJcblxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5jb25zdCB0YXJnZXRWaWV3ID0gZnVuY3Rpb24oKSB7XHJcbiAgbGV0IHRhcmdldHMgPSAkKFwiW2luc2VydC12aWV3XVwiKTtcclxuXHJcbiAgdGFyZ2V0cy5lYWNoKCAoIGluZGV4LCBlbGVtZW50ICkgPT4ge1xyXG4gICAgbGV0ICRlbGVtZW50ID0gJCggZWxlbWVudCApO1xyXG4gICAgbGV0IHZpZXcgPSAkZWxlbWVudC5hdHRyKCBcImluc2VydC12aWV3XCIgKTtcclxuICAgIGxldCBjb250YWluZXIgPSAkZWxlbWVudC5hdHRyKCBcImluLWNvbnRhaW5lclwiICk7XHJcblxyXG4gICAgJGVsZW1lbnQub24oIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAkKCBjb250YWluZXIgKS5sb2FkKCB2aWV3ICk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhcmdldFZpZXc7XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNvbnN0IHVybFZpZXcgPSBmdW5jdGlvbigpIHtcclxuICBsZXQgdXJsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cclxuICBsZXQgdGFyZ2V0cyA9ICQoXCJbaW5zZXJ0LXZpZXddXCIpO1xyXG5cclxuICB0YXJnZXRzLmVhY2goICggaW5kZXgsIGVsZW1lbnQgKSA9PiB7XHJcbiAgICBsZXQgaHJlZiA9ICQoIGVsZW1lbnQgKS5hdHRyKCBcImhyZWZcIiApO1xyXG4gICAgbGV0IHZpZXcgPSAkKCBlbGVtZW50ICkuYXR0ciggXCJpbnNlcnQtdmlld1wiICk7XHJcblxyXG4gICAgaWYgKCBocmVmID09PSB1cmxIYXNoICkge1xyXG4gICAgICAkKCBcIi5jb250YWluZXJcIiApLmxvYWQoIHZpZXcgKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cmxWaWV3O1xyXG4iXX0=
