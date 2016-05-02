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
      accordionContent.slideToggle(200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJhcHAvanMvY29tcG9uZW50cy9kcm9wZG93bi5qcyIsImFwcC9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvb2ZmY2FudmFzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFicy5qcyIsImFwcC9qcy9pbXBvcnRWaWV3LmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvdGFyZ2V0Vmlldy5qcyIsImFwcC9qcy91cmxWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7OztBQUVBLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixNQUFJLG1CQUFtQixzQkFBRyxhQUFILEVBQW1CLEdBQW5CLENBQXdCLGlCQUF4QixDQUF2QjtBQUNBLE1BQUksbUJBQW1CLHdCQUF2Qjs7QUFFQSxtQkFBaUIsSUFBakIsQ0FBc0IsVUFBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTJCO0FBQy9DLFFBQUksbUJBQW1CLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLHFCQUFuQixFQUEyQyxLQUEzQyxHQUFtRCxJQUFuRCxFQUF2QjtBQUNBLFFBQUksaUJBQWlCLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLG1CQUFuQixFQUF5QyxLQUF6QyxFQUFyQjs7QUFFQSxtQkFBZSxFQUFmLENBQW1CLE9BQW5CLEVBQTRCLFVBQVUsS0FBVixFQUFrQjtBQUM1QyxxQkFBZSxXQUFmLENBQTRCLGdCQUE1QjtBQUNBLHVCQUFpQixXQUFqQixDQUE4QixHQUE5QjtBQUNBLFlBQU0sZUFBTjtBQUNELEtBSkQ7QUFLRCxHQVREO0FBVUQ7O2tCQUVjLFM7Ozs7Ozs7OztBQ2xCZjs7Ozs7O0FBRUEsU0FBUyxRQUFULEdBQW9CO0FBQ2xCLE1BQUksY0FBYyxzQkFBRyxZQUFILEVBQWtCLEdBQWxCLENBQXVC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Q2xDLFFBQUksV0FBVyxzQkFBRyxPQUFILENBQWY7QUFDQSxRQUFJLE9BQU8sU0FBUyxJQUFULENBQWUsYUFBZixDQUFYO0FBQ0EsUUFBSSxZQUFZLFNBQVMsSUFBVCxDQUFlLGNBQWYsQ0FBaEI7O0FBRUEsYUFBUyxFQUFULENBQWEsT0FBYixFQUFzQixZQUFNO0FBQzFCLDRCQUFHLFNBQUgsRUFBZSxJQUFmLENBQXFCLElBQXJCO0FBQ0QsS0FGRDtBQUdELEdBUkQ7QUFTRCxDQVpELEM7Ozs7Ozs7Ozs7a0JBY2UsVTs7Ozs7Ozs7O0FDMUJmOzs7Ozs7QUFFQSxJQUFNLFVBQVUsU0FBVixPQUFVLEdBQVc7QUFDekIsTUFBSSxVQUFVLE9BQU8sUUFBUCxDQUFnQixJQUE5Qjs7QUFFQSxNQUFJLFVBQVUsc0JBQUUsZUFBRixDQUFkOztBQUVBLFVBQVEsSUFBUixDQUFjLFVBQUUsS0FBRixFQUFTLE9BQVQsRUFBc0I7QUFDbEMsUUFBSSxPQUFPLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLE1BQW5CLENBQVg7QUFDQSxRQUFJLE9BQU8sc0JBQUcsT0FBSCxFQUFhLElBQWIsQ0FBbUIsYUFBbkIsQ0FBWDs7QUFFQSxRQUFLLFNBQVMsT0FBZCxFQUF3QjtBQUN0Qiw0QkFBRyxZQUFILEVBQWtCLElBQWxCLENBQXdCLElBQXhCO0FBQ0Q7QUFDRixHQVBEO0FBU0QsQ0FkRDs7a0JBZ0JlLE8iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5mdW5jdGlvbiBhY2NvcmRpb24oKSB7XG4gIHZhciBhY2NvcmRpb25FbGVtZW50ID0gJCggXCJbYWNjb3JkaW9uXVwiICkubm90KCBcInByZSBbYWNjb3JkaW9uXVwiICk7XG4gIHZhciBhY3RpdmVUaXRsZUNsYXNzID0gXCJhY2NvcmRpb24tdGl0bGUtYWN0aXZlXCI7XG5cbiAgYWNjb3JkaW9uRWxlbWVudC5lYWNoKGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApIHtcbiAgICB2YXIgYWNjb3JkaW9uQ29udGVudCA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIlthY2NvcmRpb24tY29udGVudF1cIiApLmZpcnN0KCkuaGlkZSgpO1xuICAgIHZhciBhY2NvcmRpb25UaXRsZSA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIlthY2NvcmRpb24tdGl0bGVdXCIgKS5maXJzdCgpO1xuXG4gICAgYWNjb3JkaW9uVGl0bGUub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgYWNjb3JkaW9uVGl0bGUudG9nZ2xlQ2xhc3MoIGFjdGl2ZVRpdGxlQ2xhc3MgKTtcbiAgICAgIGFjY29yZGlvbkNvbnRlbnQuc2xpZGVUb2dnbGUoIDIwMCApO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWNjb3JkaW9uO1xuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5mdW5jdGlvbiBkcm9wZG93bigpIHtcbiAgdmFyIGFsbERyb3Bkb3duID0gJCggXCJbZHJvcGRvd25dXCIgKS5ub3QoIFwicHJlIFtkcm9wZG93bl1cIiApO1xuICB2YXIgYWxsRHJvcGRvd25Db250ZW50ID0gYWxsRHJvcGRvd24uZmluZCggXCJbZHJvcGRvd24tY29udGVudF1cIiApO1xuICB2YXIgJGRvY3VtZW50ID0gJCggZG9jdW1lbnQgKTtcbiAgdmFyIGV2ZW50VHlwZSA9IFwiY2xpY2tcIjtcblxuICBhbGxEcm9wZG93bi5lYWNoKGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApIHtcbiAgICB2YXIgZHJvcGRvd25Db250ZW50ID0gJCggZWxlbWVudCApLmZpbmQoIFwiW2Ryb3Bkb3duLWNvbnRlbnRdXCIgKTtcbiAgICB2YXIgZHJvcGRvd25UYXJnZXQgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbZHJvcGRvd24tdGFyZ2V0XVwiICk7XG5cbiAgICBkcm9wZG93bkNvbnRlbnQuaGlkZSgpO1xuXG4gICAgZHJvcGRvd25UYXJnZXQub24oIGV2ZW50VHlwZSwgZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBhbGxEcm9wZG93bkNvbnRlbnQubm90KCBkcm9wZG93bkNvbnRlbnQgKS5oaWRlKCk7XG4gICAgICBkcm9wZG93bkNvbnRlbnQuZmFkZVRvZ2dsZSggNTAsIFwibGluZWFyXCIgKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgYWxsRHJvcGRvd25Db250ZW50Lm9uKCBldmVudFR5cGUsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgJGRvY3VtZW50Lm9uKCBldmVudFR5cGUsIGZ1bmN0aW9uKCkge1xuICAgIGFsbERyb3Bkb3duQ29udGVudC5mYWRlT3V0KCAyMDAsIFwibGluZWFyXCIgKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3Bkb3duO1xuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5mdW5jdGlvbiBtb2RhbCgpIHtcbiAgdmFyIGJvZHkgPSAkKCBcImJvZHlcIiApO1xuICB2YXIgJHdpbmRvdyA9ICQoIHdpbmRvdyApO1xuICB2YXIgbW9kYWxUYXJnZXRzID0gJCggXCJbbW9kYWwtdGFyZ2V0XVwiICkubm90KCBcInByZSBbbW9kYWwtdGFyZ2V0XVwiICk7XG4gIHZhciBtb2RhbFdyYXBwZXJzID0gJCggXCJbbW9kYWwtd3JhcHBlcl1cIiApLm5vdCggXCJwcmUgW21vZGFsLXdyYXBwZXJdXCIgKTtcbiAgdmFyIG1vZGFsQ29udGVudCA9ICQoIFwiW21vZGFsLWNvbnRlbnRdXCIgKS5ub3QoIFwicHJlIFttb2RhbC1jb250ZW50XVwiICk7XG5cbiAgbW9kYWxXcmFwcGVycy5kZXRhY2goKS5hZGRDbGFzcyggXCJtb2RhbC1oaWRkZW5cIiApLmFwcGVuZFRvKCBcImh0bWxcIiApO1xuXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCggbW9kYWxXcmFwcGVyICkge1xuICAgIG1vZGFsV3JhcHBlci5yZW1vdmVDbGFzcyhcIm1vZGFsLWhpZGRlblwiKS5hZGRDbGFzcyhcIm1vZGFsLWFjdGl2ZWRcIik7XG4gICAgYm9keS5jc3MoeyBcIm92ZXJmbG93LXlcIjogXCJoaWRkZW5cIiB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVNb2RhbCggbW9kYWxXcmFwcGVyICkge1xuICAgIG1vZGFsV3JhcHBlci5hZGRDbGFzcyhcIm1vZGFsLWhpZGRlblwiKS5yZW1vdmVDbGFzcyhcIm1vZGFsLWFjdGl2ZWRcIik7XG4gICAgYm9keS5jc3MoeyBcIm92ZXJmbG93LXlcIjogXCJzY3JvbGxcIiB9KTtcbiAgfVxuXG4gIG1vZGFsVGFyZ2V0cy5lYWNoKGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApIHtcbiAgICB2YXIgdGFyZ2V0ID0gJCggZWxlbWVudCApO1xuICAgIHZhciB0YXJnZXRJbmRleCA9ICQoIGVsZW1lbnQgKS5hdHRyKFwibW9kYWwtdGFyZ2V0XCIpO1xuICAgIHZhciBtb2RhbFdyYXBwZXIgPSAkKCBcIlttb2RhbC13cmFwcGVyPVwiICsgdGFyZ2V0SW5kZXggKyBcIl1cIiApO1xuICAgIHZhciBtb2RhbENsb3NlID0gbW9kYWxXcmFwcGVyLmZpbmQoXCJbbW9kYWwtY2xvc2VdXCIpO1xuICAgIHZhciBtb2RhbENvbnRlbnQgPSBtb2RhbFdyYXBwZXIuZmluZCggXCJbbW9kYWwtY29udGVudF1cIiApO1xuXG4gICAgdGFyZ2V0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBvcGVuTW9kYWwoIG1vZGFsV3JhcHBlciApO1xuICAgIH0pO1xuXG4gICAgbW9kYWxDb250ZW50Lm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgbW9kYWxXcmFwcGVyLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBoaWRlTW9kYWwoIG1vZGFsV3JhcHBlciApO1xuICAgIH0pO1xuXG4gICAgbW9kYWxDbG9zZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcbiAgICB9KTtcblxuICAgICR3aW5kb3cub24oIFwia2V5ZG93blwiLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICBpZiAoIGV2ZW50LmtleUNvZGUgPT0gMjcgKSB7XG4gICAgICAgIGhpZGVNb2RhbCggbW9kYWxXcmFwcGVyICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWw7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmZ1bmN0aW9uIG9mZmNhbnZhcygpIHtcbiAgdmFyIGFsbE9mZkNhbnZhc1RhcmdldCA9ICQoIFwiW29mZmNhbnZhcy10YXJnZXRdXCIgKS5ub3QoXCJwcmUgW29mZmNhbnZhcy10YXJnZXRdXCIpO1xuICB2YXIgYWxsT2ZmQ2FudmFzV3JhcHBlciA9ICQoIFwiW29mZmNhbnZhcy13cmFwcGVyXVwiICkubm90KFwicHJlIFtvZmZjYW52YXMtd3JhcHBlcl1cIik7XG4gIHZhciAkd2luZG93ID0gJCggd2luZG93ICk7XG5cbiAgYWxsT2ZmQ2FudmFzV3JhcHBlci5kZXRhY2goKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1oaWRkZW5cIikuYXBwZW5kVG8oXCJodG1sXCIpO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZU9mZkNhbnZhcygpIHtcbiAgICBhbGxPZmZDYW52YXNXcmFwcGVyLnJlbW92ZUNsYXNzKFwib2ZmY2FudmFzLWFjdGl2ZVwiKS5hZGRDbGFzcyhcIm9mZmNhbnZhcy1oaWRkZW5cIik7XG4gICAgJHdpbmRvdy5vZmYoXCJzY3JvbGxcIik7XG4gIH1cblxuICBhbGxPZmZDYW52YXNUYXJnZXQuZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XG4gICAgdmFyIHRhcmdldCA9ICQoIGVsZW1lbnQgKTtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSB0YXJnZXQuYXR0cihcIm9mZmNhbnZhcy10YXJnZXRcIik7XG4gICAgdmFyIHdyYXBwZXIgPSAkKFwiW29mZmNhbnZhcy13cmFwcGVyPVwiICsgdGFyZ2V0SW5kZXggKyBcIl1cIik7XG4gICAgdmFyIGNvbnRlbnQgPSB3cmFwcGVyLmZpbmQoXCJbb2ZmY2FudmFzLWNvbnRlbnRdXCIpO1xuXG5cbiAgICB0YXJnZXQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICQoIGRvY3VtZW50ICkuc2Nyb2xsVG9wKCk7XG4gICAgICB3cmFwcGVyLnRvZ2dsZUNsYXNzKFwib2ZmY2FudmFzLWhpZGRlbiBvZmZjYW52YXMtYWN0aXZlXCIpO1xuXG4gICAgICAkd2luZG93Lm9uKCBcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCggdGhpcyApLnNjcm9sbFRvcCggc2Nyb2xsUG9zaXRpb24gKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29udGVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgd3JhcHBlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcmVtb3ZlT2ZmQ2FudmFzKCk7XG4gICAgfSk7XG5cbiAgICAkd2luZG93Lm9uKCBcImtleWRvd25cIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgaWYgKCBldmVudC5rZXlDb2RlID09IDI3ICkge1xuICAgICAgICByZW1vdmVPZmZDYW52YXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvZmZjYW52YXM7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmZ1bmN0aW9uIHRhYnMoKSB7XG4gIHZhciBhbGxUYWJzID0gJCggXCJbdGFic11cIiApLm5vdCggXCJwcmUgW3RhYnNdXCIgKTtcbiAgdmFyIGFjdGl2ZVRpdGxlQ2xhc3MgPSBcInRhYi10aXRsZS1hY3RpdmVcIjtcblxuICBhbGxUYWJzLmVhY2goZnVuY3Rpb24oIGluZGV4LCBlbGVtZW50ICkge1xuICAgIHZhciB0YWJXcmFwcGVyID0gJCggZWxlbWVudCApO1xuICAgIHZhciB0YWJUaXRsZSA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIlt0YWItdGl0bGVdXCIgKTtcbiAgICB2YXIgdGFiQ29udGVudCA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIlt0YWItY29udGVudF1cIiApO1xuICAgIHZhciBmaXJzdEluZGV4ID0gdGFiVGl0bGUuZmlyc3QoKS5hdHRyKCBcInRhYi10aXRsZVwiICk7XG5cbiAgICB0YWJUaXRsZS5maXJzdCgpLmFkZENsYXNzKCBhY3RpdmVUaXRsZUNsYXNzICk7XG4gICAgdGFiQ29udGVudC5oaWRlKCk7XG4gICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItY29udGVudD1cIiArIGZpcnN0SW5kZXggKyBcIl1cIiApLnNob3coKTtcblxuICAgIHRhYlRpdGxlLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRhYkluZGV4ID0gJCggdGhpcyApLmF0dHIoIFwidGFiLXRpdGxlXCIgKTtcblxuICAgICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItY29udGVudF1cIiApLmhpZGUoKTtcbiAgICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLWNvbnRlbnQ9XCIgKyB0YWJJbmRleCArIFwiXVwiICkuc2hvdygpO1xuICAgICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItdGl0bGVdXCIgKS5yZW1vdmVDbGFzcyggYWN0aXZlVGl0bGVDbGFzcyApO1xuICAgICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItdGl0bGU9XCIgKyB0YWJJbmRleCArIFwiXVwiICkuYWRkQ2xhc3MoIGFjdGl2ZVRpdGxlQ2xhc3MgKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhYnM7XG4iLCIvKiBJbnNlcnQgVmlld1xuXG5AVmlldyAtIGZpbGUgcGF0aFxuLi4uXG48ZGl2IHZpZXc9XCJwYXRoL3RvL2ZpbGUuaHRtbFwiPiA8L2Rpdj5cbiovXG5cbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuY29uc3QgaW1wb3J0VmlldyAgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHZpZXdFbGVtZW50cyA9ICQoIFwiW3ZpZXddXCIgKTtcblxuICB2aWV3RWxlbWVudHMuZWFjaCggKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgbGV0ICRlbGVtZW50ID0gJCggZWxlbWVudCApO1xuICAgIGxldCBwYXRoID0gJGVsZW1lbnQuYXR0ciggXCJ2aWV3XCIgKTtcblxuICAgICRlbGVtZW50LmxvYWQoIHBhdGgsIChkYXRhLCBsb2cpID0+IHtcbiAgICAgIGlmICggbG9nID09PSBcImVycm9yXCIgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciggXCJTVS1FcnJvcjogXCIgKyBwYXRoICsgXCIgLSBOb3QgZm91bmRcIiApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGltcG9ydFZpZXc7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgaW1wb3J0VmlldyBmcm9tIFwiLi9pbXBvcnRWaWV3LmpzXCI7XG5pbXBvcnQgdGFyZ2V0VmlldyBmcm9tIFwiLi90YXJnZXRWaWV3LmpzXCI7XG5pbXBvcnQgdXJsVmlldyBmcm9tIFwiLi91cmxWaWV3LmpzXCI7XG5cbmltcG9ydCBhY2NvcmRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb24uanNcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsLmpzXCI7XG5pbXBvcnQgdGFicyBmcm9tIFwiLi9jb21wb25lbnRzL3RhYnMuanNcIjtcbmltcG9ydCBkcm9wZG93biBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duLmpzXCI7XG5pbXBvcnQgb2ZmY2FudmFzIGZyb20gXCIuL2NvbXBvbmVudHMvb2ZmY2FudmFzLmpzXCI7XG5cbiQoICgpID0+IHtcbiAgaW1wb3J0VmlldygpO1xuICB0YXJnZXRWaWV3KCk7XG4gIHVybFZpZXcoKTtcblxuICAvLyBDb21wb25lbnRzXG4gIGFjY29yZGlvbigpO1xuICBkcm9wZG93bigpO1xuICBtb2RhbCgpO1xuICB0YWJzKCk7XG4gIG9mZmNhbnZhcygpO1xufSk7XG4iLCIvKiBUYXJnZXQgdmlld1xuXG5AaW5zZXQtdmlldyAtIGZpbGUgcGF0aCB0byBpbmNsdWRlXG5AaW4tY29udGFpbmVyIC0gaHRtbCBjb250YWluZXJcbi4uLlxuPGJ1dHRvbiBpbnNlcnQtdmlldz1cInBhdGgvdG8vZmlsZS5odG1sXCIgaW4tY29udGFpbmVyPVwiLmNvbnRhaW5lclwiPlxuICBDbGljay1tZSFcbjwvYnV0dG9uPlxuKi9cblxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5jb25zdCB0YXJnZXRWaWV3ID0gZnVuY3Rpb24oKSB7XG4gIGxldCB0YXJnZXRzID0gJChcIltpbnNlcnQtdmlld11cIik7XG5cbiAgdGFyZ2V0cy5lYWNoKCAoIGluZGV4LCBlbGVtZW50ICkgPT4ge1xuICAgIGxldCAkZWxlbWVudCA9ICQoIGVsZW1lbnQgKTtcbiAgICBsZXQgdmlldyA9ICRlbGVtZW50LmF0dHIoIFwiaW5zZXJ0LXZpZXdcIiApO1xuICAgIGxldCBjb250YWluZXIgPSAkZWxlbWVudC5hdHRyKCBcImluLWNvbnRhaW5lclwiICk7XG5cbiAgICAkZWxlbWVudC5vbiggXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAkKCBjb250YWluZXIgKS5sb2FkKCB2aWV3ICk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFyZ2V0VmlldztcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuY29uc3QgdXJsVmlldyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgdXJsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gIGxldCB0YXJnZXRzID0gJChcIltpbnNlcnQtdmlld11cIik7XG5cbiAgdGFyZ2V0cy5lYWNoKCAoIGluZGV4LCBlbGVtZW50ICkgPT4ge1xuICAgIGxldCBocmVmID0gJCggZWxlbWVudCApLmF0dHIoIFwiaHJlZlwiICk7XG4gICAgbGV0IHZpZXcgPSAkKCBlbGVtZW50ICkuYXR0ciggXCJpbnNlcnQtdmlld1wiICk7XG5cbiAgICBpZiAoIGhyZWYgPT09IHVybEhhc2ggKSB7XG4gICAgICAkKCBcIi5jb250YWluZXJcIiApLmxvYWQoIHZpZXcgKTtcbiAgICB9XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmxWaWV3O1xuIl19
