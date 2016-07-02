(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquerySlim = require("jquery-slim");

var _jquerySlim2 = _interopRequireDefault(_jquerySlim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function alert() {
  var AlertCloses = (0, _jquerySlim2.default)('[alert-close]');

  AlertCloses.each(function (index, element) {
    var close = (0, _jquerySlim2.default)(element);

    close.on("click", function () {
      close.parent().addClass('alert-remove');
      setTimeout(function () {
        close.parent().hide();
      }, 200);
    });
  });
}

exports.default = alert;

},{"jquery-slim":"jquery-slim"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquerySlim = require("jquery-slim");

var _jquerySlim2 = _interopRequireDefault(_jquerySlim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dropdown() {
  var allDropdown = (0, _jquerySlim2.default)("[dropdown]");
  var allDropdownContent = allDropdown.find("[dropdown-content]");
  var $document = (0, _jquerySlim2.default)(document);
  var eventType = "click";

  allDropdown.each(function (index, element) {
    var dropdownContent = (0, _jquerySlim2.default)(element).find("[dropdown-content]");
    var dropdownTarget = (0, _jquerySlim2.default)(element).find("[dropdown-target]");

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

},{"jquery-slim":"jquery-slim"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquerySlim = require("jquery-slim");

var _jquerySlim2 = _interopRequireDefault(_jquerySlim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function expander() {
  var expanderElement = (0, _jquerySlim2.default)("[expander]");
  var activeTitleClass = "expander-title-active";

  expanderElement.each(function (index, element) {
    var expanderContent = (0, _jquerySlim2.default)(element).find("[expander-content]").first().hide();
    var expanderTitle = (0, _jquerySlim2.default)(element).find("[expander-title]").first();

    expanderTitle.on("click", function (event) {
      expanderTitle.toggleClass(activeTitleClass);
      expanderContent.toggle();
      event.stopPropagation();
    });
  });
};

exports.default = expander;

},{"jquery-slim":"jquery-slim"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquerySlim = require("jquery-slim");

var _jquerySlim2 = _interopRequireDefault(_jquerySlim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function modal() {
  var body = (0, _jquerySlim2.default)("body");
  var $window = (0, _jquerySlim2.default)(window);
  var $document = (0, _jquerySlim2.default)(document);
  var modalTargets = (0, _jquerySlim2.default)("[modal-target]");
  var modalWrappers = (0, _jquerySlim2.default)("[modal-wrapper]");
  var modalContent = (0, _jquerySlim2.default)("[modal-content]");

  modalWrappers.detach().addClass("modal-hidden").appendTo("html");

  function openModal(modalWrapper) {
    modalWrapper.removeClass("modal-hidden").addClass("modal-actived");
  }

  function hideModal(modalWrapper) {
    modalWrapper.addClass("modal-hidden").removeClass("modal-actived");
    $window.off("scroll");
  }

  modalTargets.each(function (index, element) {
    var target = (0, _jquerySlim2.default)(element);
    var targetIndex = (0, _jquerySlim2.default)(element).attr("modal-target");
    var modalWrapper = (0, _jquerySlim2.default)("[modal-wrapper=" + targetIndex + "]");
    var modalClose = modalWrapper.find("[modal-close]");
    var modalContent = modalWrapper.find("[modal-content]");

    target.on("click", function () {
      openModal(modalWrapper);
      var scrollPosition = $document.scrollTop();

      $window.on("scroll", function () {
        (0, _jquerySlim2.default)(this).scrollTop(scrollPosition);
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

},{"jquery-slim":"jquery-slim"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquerySlim = require("jquery-slim");

var _jquerySlim2 = _interopRequireDefault(_jquerySlim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function offcanvas() {
  var allOffCanvasTarget = (0, _jquerySlim2.default)("[offcanvas-target]");
  var allOffCanvasWrapper = (0, _jquerySlim2.default)("[offcanvas-wrapper]");
  var $window = (0, _jquerySlim2.default)(window);
  var $document = (0, _jquerySlim2.default)(document);

  allOffCanvasWrapper.detach().addClass("offcanvas-hidden").appendTo("html");

  function removeOffCanvas() {
    allOffCanvasWrapper.removeClass("offcanvas-active").addClass("offcanvas-hidden");
    $window.off("scroll");
  }

  allOffCanvasTarget.each(function (index, element) {
    var target = (0, _jquerySlim2.default)(element);
    var targetIndex = target.attr("offcanvas-target");
    var wrapper = (0, _jquerySlim2.default)("[offcanvas-wrapper=" + targetIndex + "]");
    var content = wrapper.find("[offcanvas-content]");

    target.on("click", function () {
      var scrollPosition = $document.scrollTop();
      wrapper.toggleClass("offcanvas-hidden offcanvas-active");

      $window.on("scroll", function () {
        (0, _jquerySlim2.default)(this).scrollTop(scrollPosition);
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

},{"jquery-slim":"jquery-slim"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquerySlim = require("jquery-slim");

var _jquerySlim2 = _interopRequireDefault(_jquerySlim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tabs() {
  var allTabs = (0, _jquerySlim2.default)("[tabs]");
  var activeTitleClass = "tab-title-active";

  allTabs.each(function (index, element) {
    var tabWrapper = (0, _jquerySlim2.default)(element);
    var tabTitle = (0, _jquerySlim2.default)(element).find("[tab-title]");
    var tabContent = (0, _jquerySlim2.default)(element).find("[tab-content]");
    var firstIndex = tabTitle.first().attr("tab-title");

    tabTitle.first().addClass(activeTitleClass);
    tabContent.hide();
    tabWrapper.find("[tab-content=" + firstIndex + "]").show();

    tabTitle.on("click", function () {
      var tabIndex = (0, _jquerySlim2.default)(this).attr("tab-title");

      tabWrapper.find("[tab-content]").hide();
      tabWrapper.find("[tab-content=" + tabIndex + "]").show();
      tabWrapper.find("[tab-title]").removeClass(activeTitleClass);
      tabWrapper.find("[tab-title=" + tabIndex + "]").addClass(activeTitleClass);
    });
  });
}

exports.default = tabs;

},{"jquery-slim":"jquery-slim"}],7:[function(require,module,exports){
"use strict";

var _jquerySlim = require("jquery-slim");

var _jquerySlim2 = _interopRequireDefault(_jquerySlim);

var _expander = require("./components/expander.js");

var _expander2 = _interopRequireDefault(_expander);

var _modal = require("./components/modal.js");

var _modal2 = _interopRequireDefault(_modal);

var _tabs = require("./components/tabs.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _dropdown = require("./components/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _offcanvas = require("./components/offcanvas.js");

var _offcanvas2 = _interopRequireDefault(_offcanvas);

var _alert = require("./components/alert.js");

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
(0, _jquerySlim2.default)(function () {
	(0, _expander2.default)();
	(0, _dropdown2.default)();
	(0, _modal2.default)();
	(0, _tabs2.default)();
	(0, _offcanvas2.default)();
	(0, _alert2.default)();
});

// Mobile menu
(0, _jquerySlim2.default)('.open-menu').on('click', function () {
	(0, _jquerySlim2.default)('.sidebar').toggleClass('toggle-sidebar');
});

},{"./components/alert.js":1,"./components/dropdown.js":2,"./components/expander.js":3,"./components/modal.js":4,"./components/offcanvas.js":5,"./components/tabs.js":6,"jquery-slim":"jquery-slim"}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29tcG9uZW50cy9hbGVydC5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZXhwYW5kZXIuanMiLCJhcHAvanMvY29tcG9uZW50cy9tb2RhbC5qcyIsImFwcC9qcy9jb21wb25lbnRzL29mZmNhbnZhcy5qcyIsImFwcC9qcy9jb21wb25lbnRzL3RhYnMuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7Ozs7QUFFQSxTQUFTLEtBQVQsR0FBZ0I7QUFDZCxNQUFJLGNBQWMsMEJBQUUsZUFBRixDQUFsQjs7QUFFQSxjQUFZLElBQVosQ0FBaUIsVUFBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTBCO0FBQ3pDLFFBQUksUUFBUSwwQkFBRSxPQUFGLENBQVo7O0FBRUEsVUFBTSxFQUFOLENBQVMsT0FBVCxFQUFrQixZQUFVO0FBQzFCLFlBQU0sTUFBTixHQUFlLFFBQWYsQ0FBd0IsY0FBeEI7QUFDQSxpQkFBVyxZQUFVO0FBQ25CLGNBQU0sTUFBTixHQUFlLElBQWY7QUFDRCxPQUZELEVBRUcsR0FGSDtBQUdELEtBTEQ7QUFNRCxHQVREO0FBVUQ7O2tCQUVjLEs7Ozs7Ozs7OztBQ2pCZjs7Ozs7O0FBRUEsU0FBUyxRQUFULEdBQW9CO0FBQ2xCLE1BQUksY0FBYywwQkFBRyxZQUFILENBQWxCO0FBQ0EsTUFBSSxxQkFBcUIsWUFBWSxJQUFaLENBQWtCLG9CQUFsQixDQUF6QjtBQUNBLE1BQUksWUFBWSwwQkFBRyxRQUFILENBQWhCO0FBQ0EsTUFBSSxZQUFZLE9BQWhCOztBQUVBLGNBQVksSUFBWixDQUFpQixVQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMkI7QUFDMUMsUUFBSSxrQkFBa0IsMEJBQUcsT0FBSCxFQUFhLElBQWIsQ0FBbUIsb0JBQW5CLENBQXRCO0FBQ0Es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U0FBUyxLQUFULEdBQWlCLElBQWpCLENBQXVCLFdBQXZCLENBQWpCOztBQUVBLGFBQVMsS0FBVCxHQUFpQixRQUFqQixDQUEyQixnQkFBM0I7QUFDQSxlQUFXLElBQVg7QUFDQSxlQUFXLElBQVgsQ0FBaUIsa0JBQWtCLFVBQWxCLEdBQStCLEdBQWhELEVBQXNELElBQXREOztBQUVBLGFBQVMsRUFBVCxDQUFhLE9BQWIsRUFBc0IsWUFBVztBQUMvQixVQUFJLFdBQVcsMEJBQUcsSUFBSCxFQUFVLElBQVYsQ0FBZ0IsV0FBaEIsQ0FBZjs7QUFFQSxpQkFBVyxJQUFYLENBQWlCLGVBQWpCLEVBQW1DLElBQW5DO0FBQ0EsaUJBQVcsSUFBWCxDQUFpQixrQkFBa0IsUUFBbEIsR0FBNkIsR0FBOUMsRUFBb0QsSUFBcEQ7QUFDQSxpQkFBVyxJQUFYLENBQWlCLGFBQWpCLEVBQWlDLFdBQWpDLENBQThDLGdCQUE5QztBQUNBLGlCQUFXLElBQVgsQ0FBaUIsZ0JBQWdCLFFBQWhCLEdBQTJCLEdBQTVDLEVBQWtELFFBQWxELENBQTRELGdCQUE1RDtBQUNELEtBUEQ7QUFRRCxHQWxCRDtBQW1CRDs7a0JBRWMsSTs7Ozs7QUMzQmY7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7QUFHQSwwQkFBRSxZQUFNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQRDs7O0FBVUEsMEJBQUUsWUFBRixFQUFnQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFVO0FBQ3JDLDJCQUFFLFVBQUYsRUFBYyxXQUFkLENBQTBCLGdCQUExQjtBQUNBLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeS1zbGltXCI7XG5cbmZ1bmN0aW9uIGFsZXJ0KCl7XG4gIHZhciBBbGVydENsb3NlcyA9ICQoJ1thbGVydC1jbG9zZV0nKTtcblxuICBBbGVydENsb3Nlcy5lYWNoKGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApe1xuICAgIHZhciBjbG9zZSA9ICQoZWxlbWVudCk7XG5cbiAgICBjbG9zZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICBjbG9zZS5wYXJlbnQoKS5hZGRDbGFzcygnYWxlcnQtcmVtb3ZlJyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGNsb3NlLnBhcmVudCgpLmhpZGUoKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGVydDsiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5LXNsaW1cIjtcclxuXHJcbmZ1bmN0aW9uIGRyb3Bkb3duKCkge1xyXG4gIHZhciBhbGxEcm9wZG93biA9ICQoIFwiW2Ryb3Bkb3duXVwiICk7XHJcbiAgdmFyIGFsbERyb3Bkb3duQ29udGVudCA9IGFsbERyb3Bkb3duLmZpbmQoIFwiW2Ryb3Bkb3duLWNvbnRlbnRdXCIgKTtcclxuICB2YXIgJGRvY3VtZW50ID0gJCggZG9jdW1lbnQgKTtcclxuICB2YXIgZXZlbnRUeXBlID0gXCJjbGlja1wiO1xyXG5cclxuICBhbGxEcm9wZG93bi5lYWNoKGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApIHtcclxuICAgIHZhciBkcm9wZG93bkNvbnRlbnQgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbZHJvcGRvd24tY29udGVudF1cIiApO1xyXG4gICAgdmFyIGRyb3Bkb3duVGFyZ2V0ID0gJCggZWxlbWVudCApLmZpbmQoIFwiW2Ryb3Bkb3duLXRhcmdldF1cIiApO1xyXG5cclxuICAgIGRyb3Bkb3duQ29udGVudC5hZGRDbGFzcyhcImRyb3Bkb3duLWhpZGRlblwiKTtcclxuXHJcbiAgICBkcm9wZG93blRhcmdldC5vbiggZXZlbnRUeXBlLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBhbGxEcm9wZG93bkNvbnRlbnQubm90KCBkcm9wZG93bkNvbnRlbnQgKS5yZW1vdmVDbGFzcyggXCJkcm9wZG93bi1hY3RpdmF0ZWRcIiApLmFkZENsYXNzKCBcImRyb3Bkb3duLWhpZGRlblwiICk7XHJcbiAgICAgIGRyb3Bkb3duQ29udGVudC50b2dnbGVDbGFzcyggXCJkcm9wZG93bi1hY3RpdmF0ZWRcIiApLnRvZ2dsZUNsYXNzKCBcImRyb3Bkb3duLWhpZGRlblwiICk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgYWxsRHJvcGRvd25Db250ZW50Lm9uKCBldmVudFR5cGUsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG5cclxuICAkZG9jdW1lbnQub24oIGV2ZW50VHlwZSwgZnVuY3Rpb24oKSB7XHJcbiAgICBhbGxEcm9wZG93bkNvbnRlbnQucmVtb3ZlQ2xhc3MoIFwiZHJvcGRvd24tYWN0aXZhdGVkXCIgKS5hZGRDbGFzcyggXCJkcm9wZG93bi1oaWRkZW5cIiApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcm9wZG93bjtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeS1zbGltXCI7XHJcblxyXG5mdW5jdGlvbiBleHBhbmRlcigpIHtcclxuICB2YXIgZXhwYW5kZXJFbGVtZW50ID0gJCggXCJbZXhwYW5kZXJdXCIgKTtcclxuICB2YXIgYWN0aXZlVGl0bGVDbGFzcyA9IFwiZXhwYW5kZXItdGl0bGUtYWN0aXZlXCI7XHJcblxyXG4gIGV4cGFuZGVyRWxlbWVudC5lYWNoKGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApIHtcclxuICAgIHZhciBleHBhbmRlckNvbnRlbnQgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbZXhwYW5kZXItY29udGVudF1cIiApLmZpcnN0KCkuaGlkZSgpO1xyXG4gICAgdmFyIGV4cGFuZGVyVGl0bGUgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbZXhwYW5kZXItdGl0bGVdXCIgKS5maXJzdCgpO1xyXG5cclxuICAgIGV4cGFuZGVyVGl0bGUub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICBleHBhbmRlclRpdGxlLnRvZ2dsZUNsYXNzKCBhY3RpdmVUaXRsZUNsYXNzICk7XHJcbiAgICAgIGV4cGFuZGVyQ29udGVudC50b2dnbGUoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cGFuZGVyO1xyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5LXNsaW1cIjtcclxuXHJcbmZ1bmN0aW9uIG1vZGFsKCkge1xyXG4gIHZhciBib2R5ID0gJCggXCJib2R5XCIgKTtcclxuICB2YXIgJHdpbmRvdyA9ICQoIHdpbmRvdyApO1xyXG4gIHZhciAkZG9jdW1lbnQgPSAkKCBkb2N1bWVudCAgKTtcclxuICB2YXIgbW9kYWxUYXJnZXRzID0gJCggXCJbbW9kYWwtdGFyZ2V0XVwiICk7XHJcbiAgdmFyIG1vZGFsV3JhcHBlcnMgPSAkKCBcIlttb2RhbC13cmFwcGVyXVwiICk7XHJcbiAgdmFyIG1vZGFsQ29udGVudCA9ICQoIFwiW21vZGFsLWNvbnRlbnRdXCIgKTtcclxuXHJcbiAgbW9kYWxXcmFwcGVycy5kZXRhY2goKS5hZGRDbGFzcyggXCJtb2RhbC1oaWRkZW5cIiApLmFwcGVuZFRvKCBcImh0bWxcIiApO1xyXG5cclxuICBmdW5jdGlvbiBvcGVuTW9kYWwoIG1vZGFsV3JhcHBlciApIHtcclxuICAgIG1vZGFsV3JhcHBlci5yZW1vdmVDbGFzcyggXCJtb2RhbC1oaWRkZW5cIiApLmFkZENsYXNzKCBcIm1vZGFsLWFjdGl2ZWRcIiApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKSB7XHJcbiAgICBtb2RhbFdyYXBwZXIuYWRkQ2xhc3MoIFwibW9kYWwtaGlkZGVuXCIgKS5yZW1vdmVDbGFzcyggXCJtb2RhbC1hY3RpdmVkXCIgKTtcclxuICAgICR3aW5kb3cub2ZmKCBcInNjcm9sbFwiICk7XHJcbiAgfVxyXG5cclxuICBtb2RhbFRhcmdldHMuZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gJCggZWxlbWVudCApO1xyXG4gICAgdmFyIHRhcmdldEluZGV4ID0gJCggZWxlbWVudCApLmF0dHIoIFwibW9kYWwtdGFyZ2V0XCIgKTtcclxuICAgIHZhciBtb2RhbFdyYXBwZXIgPSAkKCBcIlttb2RhbC13cmFwcGVyPVwiICsgdGFyZ2V0SW5kZXggKyBcIl1cIiApO1xyXG4gICAgdmFyIG1vZGFsQ2xvc2UgPSBtb2RhbFdyYXBwZXIuZmluZCggXCJbbW9kYWwtY2xvc2VdXCIgKTtcclxuICAgIHZhciBtb2RhbENvbnRlbnQgPSBtb2RhbFdyYXBwZXIuZmluZCggXCJbbW9kYWwtY29udGVudF1cIiApO1xyXG5cclxuICAgIHRhcmdldC5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgb3Blbk1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcclxuICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gJGRvY3VtZW50LnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgJHdpbmRvdy5vbiggXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCggdGhpcyApLnNjcm9sbFRvcCggc2Nyb2xsUG9zaXRpb24gKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbENvbnRlbnQub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsV3JhcHBlci5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsQ2xvc2Uub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGhpZGVNb2RhbCggbW9kYWxXcmFwcGVyICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkd2luZG93Lm9uKCBcImtleWRvd25cIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICBpZiAoIGV2ZW50LmtleUNvZGUgPT0gMjcgKSB7XHJcbiAgICAgICAgaGlkZU1vZGFsKCBtb2RhbFdyYXBwZXIgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeS1zbGltXCI7XHJcblxyXG5mdW5jdGlvbiBvZmZjYW52YXMoKSB7XHJcbiAgdmFyIGFsbE9mZkNhbnZhc1RhcmdldCA9ICQoIFwiW29mZmNhbnZhcy10YXJnZXRdXCIgKTtcclxuICB2YXIgYWxsT2ZmQ2FudmFzV3JhcHBlciA9ICQoIFwiW29mZmNhbnZhcy13cmFwcGVyXVwiICk7XHJcbiAgdmFyICR3aW5kb3cgPSAkKCB3aW5kb3cgKTtcclxuICB2YXIgJGRvY3VtZW50ID0gJCggZG9jdW1lbnQgKTtcclxuXHJcbiAgYWxsT2ZmQ2FudmFzV3JhcHBlci5kZXRhY2goKS5hZGRDbGFzcyggXCJvZmZjYW52YXMtaGlkZGVuXCIgKS5hcHBlbmRUbyggXCJodG1sXCIgKTtcclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlT2ZmQ2FudmFzKCkge1xyXG4gICAgYWxsT2ZmQ2FudmFzV3JhcHBlci5yZW1vdmVDbGFzcyggXCJvZmZjYW52YXMtYWN0aXZlXCIgKS5hZGRDbGFzcyggXCJvZmZjYW52YXMtaGlkZGVuXCIgKTtcclxuICAgICR3aW5kb3cub2ZmKFwic2Nyb2xsXCIpO1xyXG4gIH1cclxuXHJcbiAgYWxsT2ZmQ2FudmFzVGFyZ2V0LmVhY2goZnVuY3Rpb24oIGluZGV4LCBlbGVtZW50ICkge1xyXG4gICAgdmFyIHRhcmdldCA9ICQoIGVsZW1lbnQgKTtcclxuICAgIHZhciB0YXJnZXRJbmRleCA9IHRhcmdldC5hdHRyKCBcIm9mZmNhbnZhcy10YXJnZXRcIiApO1xyXG4gICAgdmFyIHdyYXBwZXIgPSAkKCBcIltvZmZjYW52YXMtd3JhcHBlcj1cIiArIHRhcmdldEluZGV4ICsgXCJdXCIgKTtcclxuICAgIHZhciBjb250ZW50ID0gd3JhcHBlci5maW5kKCBcIltvZmZjYW52YXMtY29udGVudF1cIiApO1xyXG5cclxuICAgIHRhcmdldC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAkZG9jdW1lbnQuc2Nyb2xsVG9wKCk7XHJcbiAgICAgIHdyYXBwZXIudG9nZ2xlQ2xhc3MoIFwib2ZmY2FudmFzLWhpZGRlbiBvZmZjYW52YXMtYWN0aXZlXCIgKTtcclxuXHJcbiAgICAgICR3aW5kb3cub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCggdGhpcyApLnNjcm9sbFRvcCggc2Nyb2xsUG9zaXRpb24gKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250ZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdyYXBwZXIub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgcmVtb3ZlT2ZmQ2FudmFzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkd2luZG93Lm9uKFwia2V5ZG93blwiLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgIGlmICggZXZlbnQua2V5Q29kZSA9PSAyNyApIHtcclxuICAgICAgICByZW1vdmVPZmZDYW52YXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvZmZjYW52YXM7XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnktc2xpbVwiO1xyXG5cclxuZnVuY3Rpb24gdGFicygpIHtcclxuICB2YXIgYWxsVGFicyA9ICQoIFwiW3RhYnNdXCIgKTtcclxuICB2YXIgYWN0aXZlVGl0bGVDbGFzcyA9IFwidGFiLXRpdGxlLWFjdGl2ZVwiO1xyXG5cclxuICBhbGxUYWJzLmVhY2goZnVuY3Rpb24oIGluZGV4LCBlbGVtZW50ICkge1xyXG4gICAgdmFyIHRhYldyYXBwZXIgPSAkKCBlbGVtZW50ICk7XHJcbiAgICB2YXIgdGFiVGl0bGUgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbdGFiLXRpdGxlXVwiICk7XHJcbiAgICB2YXIgdGFiQ29udGVudCA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIlt0YWItY29udGVudF1cIiApO1xyXG4gICAgdmFyIGZpcnN0SW5kZXggPSB0YWJUaXRsZS5maXJzdCgpLmF0dHIoIFwidGFiLXRpdGxlXCIgKTtcclxuXHJcbiAgICB0YWJUaXRsZS5maXJzdCgpLmFkZENsYXNzKCBhY3RpdmVUaXRsZUNsYXNzICk7XHJcbiAgICB0YWJDb250ZW50LmhpZGUoKTtcclxuICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLWNvbnRlbnQ9XCIgKyBmaXJzdEluZGV4ICsgXCJdXCIgKS5zaG93KCk7XHJcblxyXG4gICAgdGFiVGl0bGUub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0YWJJbmRleCA9ICQoIHRoaXMgKS5hdHRyKCBcInRhYi10aXRsZVwiICk7XHJcblxyXG4gICAgICB0YWJXcmFwcGVyLmZpbmQoIFwiW3RhYi1jb250ZW50XVwiICkuaGlkZSgpO1xyXG4gICAgICB0YWJXcmFwcGVyLmZpbmQoIFwiW3RhYi1jb250ZW50PVwiICsgdGFiSW5kZXggKyBcIl1cIiApLnNob3coKTtcclxuICAgICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItdGl0bGVdXCIgKS5yZW1vdmVDbGFzcyggYWN0aXZlVGl0bGVDbGFzcyApO1xyXG4gICAgICB0YWJXcmFwcGVyLmZpbmQoIFwiW3RhYi10aXRsZT1cIiArIHRhYkluZGV4ICsgXCJdXCIgKS5hZGRDbGFzcyggYWN0aXZlVGl0bGVDbGFzcyApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhYnM7XHJcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnktc2xpbVwiO1xyXG5cclxuaW1wb3J0IGV4cGFuZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZXhwYW5kZXIuanNcIjtcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWwuanNcIjtcclxuaW1wb3J0IHRhYnMgZnJvbSBcIi4vY29tcG9uZW50cy90YWJzLmpzXCI7XHJcbmltcG9ydCBkcm9wZG93biBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duLmpzXCI7XHJcbmltcG9ydCBvZmZjYW52YXMgZnJvbSBcIi4vY29tcG9uZW50cy9vZmZjYW52YXMuanNcIjtcclxuaW1wb3J0IGFsZXJ0IGZyb20gXCIuL2NvbXBvbmVudHMvYWxlcnQuanNcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuJCgoKSA9PiB7XHJcblx0ZXhwYW5kZXIoKTtcclxuXHRkcm9wZG93bigpO1xyXG5cdG1vZGFsKCk7XHJcblx0dGFicygpO1xyXG5cdG9mZmNhbnZhcygpO1xyXG5cdGFsZXJ0KCk7XHJcbn0pO1xyXG5cclxuLy8gTW9iaWxlIG1lbnVcclxuJCgnLm9wZW4tbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCgnLnNpZGViYXInKS50b2dnbGVDbGFzcygndG9nZ2xlLXNpZGViYXInKTtcclxufSk7Il19
