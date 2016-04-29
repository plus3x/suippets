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
  var modalClose = (0, _jquery2.default)("[modal-close]").not("pre [modal-close]");
  var modalWrappers = (0, _jquery2.default)("[modal-wrapper]").not("pre [modal-wrapper]");
  var modalContent = (0, _jquery2.default)("[modal-content]").not("pre [modal-content]");

  modalWrappers.detach().hide().appendTo("html");

  function styleOfWrapper(scrollPosition) {
    modalWrappers.css({
      "position": "absolute",
      "background": "rgba(0, 0, 0, 0.7)",
      "top": scrollPosition + "px",
      "left": "0px",
      "width": "100%",
      "overflow-y": "auto",
      "height": "100%",
      "z-index": "99999999999"
    });
  }

  function openModal(scrollPosition, wrapper) {
    wrapper.fadeIn(100);
    body.css({ "overflow-y": "hidden" });
    styleOfWrapper(scrollPosition, wrapper);
  }

  function closeModal(wrapper) {
    wrapper.fadeOut(100);
    body.css({ "overflow-y": "scroll" });
  }

  modalTargets.each(function (index, element) {
    var targetIndex = (0, _jquery2.default)(element).attr("modal-target");
    var modalWrapper = (0, _jquery2.default)("[modal-wrapper=" + targetIndex + "]");
    var modalContent = modalWrapper.find("[modal-content]");

    modalContent.on("click", function (event) {
      event.stopPropagation();
    });

    (0, _jquery2.default)(element).on("click", function () {
      openModal($window.scrollTop(), modalWrapper);
    });

    modalWrapper.on("click", function () {
      closeModal(modalWrapper);
    });

    modalClose.on("click", function () {
      closeModal(modalWrapper);
    });

    $window.on("keydown", function (event) {
      if (event.keyCode == 27) {
        closeModal(modalWrapper);
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
  var removeWheel = false;

  allOffCanvasWrapper.detach().addClass("offcanvas-hidden").appendTo("html");

  function remove() {
    allOffCanvasWrapper.removeClass("offcanvas-active").addClass("offcanvas-hidden");
  }

  allOffCanvasTarget.each(function (index, element) {
    var target = (0, _jquery2.default)(element);
    var targetIndex = target.attr("offcanvas-target");
    var wrapper = (0, _jquery2.default)("[offcanvas-wrapper=" + targetIndex + "]");
    var content = wrapper.find("[offcanvas-content]");

    target.on("click", function () {
      wrapper.toggleClass("offcanvas-hidden offcanvas-active");
    });

    content.on("click mouseover mousemove", function (event) {
      event.stopPropagation();
      $window.on("wheel", removeWheel);
    });

    wrapper.on("click", remove);
    $window.on("scroll", remove);

    wrapper.on("click mouseover mousemove", function () {
      $window.off("wheel", removeWheel);
      $window.on("scroll", remove);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJhcHAvanMvY29tcG9uZW50cy9kcm9wZG93bi5qcyIsImFwcC9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvb2ZmY2FudmFzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFicy5qcyIsImFwcC9qcy9pbXBvcnRWaWV3LmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvdGFyZ2V0Vmlldy5qcyIsImFwcC9qcy91cmxWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7OztBQUVBLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixNQUFJLG1CQUFtQixzQkFBRyxhQUFILEVBQW1CLEdBQW5CLENBQXdCLGlCQUF4QixDQUF2QjtBQUNBLE1BQUksbUJBQW1CLHdCQUF2Qjs7QUFFQSxtQkFBaUIsSUFBakIsQ0FBc0IsVUFBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTJCO0FBQy9DLFFBQUksbUJBQW1CLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLHFCQUFuQixFQUEyQyxLQUEzQyxHQUFtRCxJQUFuRCxFQUF2QjtBQUNBLFFBQUksaUJBQWlCLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLG1CQUFuQixFQUF5QyxLQUF6QyxFQUFyQjs7QUFFQSxtQkFBZSxFQUFmLENBQW1CLE9BQW5CLEVBQTRCLFVBQVUsS0FBVixFQUFrQjtBQUM1QyxxQkFBZSxXQUFmLENBQTRCLGdCQUE1QjtBQUNBLHVCQUFpQixXQUFqQixDQUE4QixHQUE5QjtBQUNBLFlBQU0sZUFBTjtBQUNELEtBSkQ7QUFLRCxHQVREO0FBVUQ7O2tCQUVjLFM7Ozs7Ozs7OztBQ2xCZjs7Ozs7O0FBRUEsU0FBUyxRQUFULEdBQW9CO0FBQ2xCLE1BQUksY0FBYyxzQkFBRyxZQUFILEVBQWtCLEdBQWxCLENBQXVC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QUNBO0FBQ0E7QUFDRCxDQVhEOzs7Ozs7Ozs7QUNEQTs7Ozs7O0FBRUEsSUFBTSxhQUFhLFNBQWIsVUFBYSxHQUFXO0FBQzVCLE1BQUksVUFBVSxzQkFBRSxlQUFGLENBQWQ7O0FBRUEsVUFBUSxJQUFSLENBQWMsVUFBRSxLQUFGLEVBQVMsT0FBVCxFQUFzQjtBQUNsQyxRQUFJLFdBQVcsc0JBQUcsT0FBSCxDQUFmO0FBQ0EsUUFBSSxPQUFPLFNBQVMsSUFBVCxDQUFlLGFBQWYsQ0FBWDtBQUNBLFFBQUksWUFBWSxTQUFTLElBQVQsQ0FBZSxjQUFmLENBQWhCOztBQUVBLGFBQVMsRUFBVCxDQUFhLE9BQWIsRUFBc0IsWUFBTTtBQUMxQiw0QkFBRyxTQUFILEVBQWUsSUFBZixDQUFxQixJQUFyQjtBQUNELEtBRkQ7QUFHRCxHQVJEO0FBU0QsQ0FaRCxDOzs7Ozs7Ozs7O2tCQWNlLFU7Ozs7Ozs7OztBQzFCZjs7Ozs7O0FBRUEsSUFBTSxVQUFVLFNBQVYsT0FBVSxHQUFXO0FBQ3pCLE1BQUksVUFBVSxPQUFPLFFBQVAsQ0FBZ0IsSUFBOUI7O0FBRUEsTUFBSSxVQUFVLHNCQUFFLGVBQUYsQ0FBZDs7QUFFQSxVQUFRLElBQVIsQ0FBYyxVQUFFLEtBQUYsRUFBUyxPQUFULEVBQXNCO0FBQ2xDLFFBQUksT0FBTyxzQkFBRyxPQUFILEVBQWEsSUFBYixDQUFtQixNQUFuQixDQUFYO0FBQ0EsUUFBSSxPQUFPLHNCQUFHLE9BQUgsRUFBYSxJQUFiLENBQW1CLGFBQW5CLENBQVg7O0FBRUEsUUFBSyxTQUFTLE9BQWQsRUFBd0I7QUFDdEIsNEJBQUcsWUFBSCxFQUFrQixJQUFsQixDQUF3QixJQUF4QjtBQUNEO0FBQ0YsR0FQRDtBQVNELENBZEQ7O2tCQWdCZSxPIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZnVuY3Rpb24gYWNjb3JkaW9uKCkge1xuICB2YXIgYWNjb3JkaW9uRWxlbWVudCA9ICQoIFwiW2FjY29yZGlvbl1cIiApLm5vdCggXCJwcmUgW2FjY29yZGlvbl1cIiApO1xuICB2YXIgYWN0aXZlVGl0bGVDbGFzcyA9IFwiYWNjb3JkaW9uLXRpdGxlLWFjdGl2ZVwiO1xuXG4gIGFjY29yZGlvbkVsZW1lbnQuZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XG4gICAgdmFyIGFjY29yZGlvbkNvbnRlbnQgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbYWNjb3JkaW9uLWNvbnRlbnRdXCIgKS5maXJzdCgpLmhpZGUoKTtcbiAgICB2YXIgYWNjb3JkaW9uVGl0bGUgPSAkKCBlbGVtZW50ICkuZmluZCggXCJbYWNjb3JkaW9uLXRpdGxlXVwiICkuZmlyc3QoKTtcblxuICAgIGFjY29yZGlvblRpdGxlLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGFjY29yZGlvblRpdGxlLnRvZ2dsZUNsYXNzKCBhY3RpdmVUaXRsZUNsYXNzICk7XG4gICAgICBhY2NvcmRpb25Db250ZW50LnNsaWRlVG9nZ2xlKCAyMDAgKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFjY29yZGlvbjtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZnVuY3Rpb24gZHJvcGRvd24oKSB7XG4gIHZhciBhbGxEcm9wZG93biA9ICQoIFwiW2Ryb3Bkb3duXVwiICkubm90KCBcInByZSBbZHJvcGRvd25dXCIgKTtcbiAgdmFyIGFsbERyb3Bkb3duQ29udGVudCA9IGFsbERyb3Bkb3duLmZpbmQoIFwiW2Ryb3Bkb3duLWNvbnRlbnRdXCIgKTtcbiAgdmFyICRkb2N1bWVudCA9ICQoIGRvY3VtZW50ICk7XG4gIHZhciBldmVudFR5cGUgPSBcImNsaWNrXCI7XG5cbiAgYWxsRHJvcGRvd24uZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XG4gICAgdmFyIGRyb3Bkb3duQ29udGVudCA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIltkcm9wZG93bi1jb250ZW50XVwiICk7XG4gICAgdmFyIGRyb3Bkb3duVGFyZ2V0ID0gJCggZWxlbWVudCApLmZpbmQoIFwiW2Ryb3Bkb3duLXRhcmdldF1cIiApO1xuXG4gICAgZHJvcGRvd25Db250ZW50LmhpZGUoKTtcblxuICAgIGRyb3Bkb3duVGFyZ2V0Lm9uKCBldmVudFR5cGUsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgYWxsRHJvcGRvd25Db250ZW50Lm5vdCggZHJvcGRvd25Db250ZW50ICkuaGlkZSgpO1xuICAgICAgZHJvcGRvd25Db250ZW50LmZhZGVUb2dnbGUoIDUwLCBcImxpbmVhclwiICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGFsbERyb3Bkb3duQ29udGVudC5vbiggZXZlbnRUeXBlLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gICRkb2N1bWVudC5vbiggZXZlbnRUeXBlLCBmdW5jdGlvbigpIHtcbiAgICBhbGxEcm9wZG93bkNvbnRlbnQuZmFkZU91dCggMjAwLCBcImxpbmVhclwiICk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkcm9wZG93bjtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuZnVuY3Rpb24gbW9kYWwoKSB7XG4gIHZhciBib2R5ID0gJCggXCJib2R5XCIgKTtcbiAgdmFyICR3aW5kb3cgPSAkKCB3aW5kb3cgKTtcbiAgdmFyIG1vZGFsVGFyZ2V0cyA9ICQoIFwiW21vZGFsLXRhcmdldF1cIiApLm5vdCggXCJwcmUgW21vZGFsLXRhcmdldF1cIiApO1xuICB2YXIgbW9kYWxDbG9zZSA9ICQoIFwiW21vZGFsLWNsb3NlXVwiICkubm90KCBcInByZSBbbW9kYWwtY2xvc2VdXCIgKTtcbiAgdmFyIG1vZGFsV3JhcHBlcnMgPSAkKCBcIlttb2RhbC13cmFwcGVyXVwiICkubm90KCBcInByZSBbbW9kYWwtd3JhcHBlcl1cIiApO1xuICB2YXIgbW9kYWxDb250ZW50ID0gJCggXCJbbW9kYWwtY29udGVudF1cIiApLm5vdCggXCJwcmUgW21vZGFsLWNvbnRlbnRdXCIgKTtcblxuICBtb2RhbFdyYXBwZXJzLmRldGFjaCgpLmhpZGUoKS5hcHBlbmRUbyggXCJodG1sXCIgKTtcblxuICBmdW5jdGlvbiBzdHlsZU9mV3JhcHBlciggc2Nyb2xsUG9zaXRpb24gKSB7XG4gICAgbW9kYWxXcmFwcGVycy5jc3Moe1xuICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICBcImJhY2tncm91bmRcIjogXCJyZ2JhKDAsIDAsIDAsIDAuNylcIixcbiAgICAgIFwidG9wXCI6IHNjcm9sbFBvc2l0aW9uICsgXCJweFwiLFxuICAgICAgXCJsZWZ0XCI6IFwiMHB4XCIsXG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiLFxuICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgICBcInotaW5kZXhcIjogXCI5OTk5OTk5OTk5OVwiXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoIHNjcm9sbFBvc2l0aW9uLCB3cmFwcGVyICkge1xuICAgIHdyYXBwZXIuZmFkZUluKCAxMDAgKTtcbiAgICBib2R5LmNzcyh7IFwib3ZlcmZsb3cteVwiOiBcImhpZGRlblwiIH0pO1xuICAgIHN0eWxlT2ZXcmFwcGVyKCBzY3JvbGxQb3NpdGlvbiwgd3JhcHBlciApO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCggd3JhcHBlciApIHtcbiAgICB3cmFwcGVyLmZhZGVPdXQoIDEwMCApO1xuICAgIGJvZHkuY3NzKHsgXCJvdmVyZmxvdy15XCI6IFwic2Nyb2xsXCIgfSk7XG4gIH1cblxuICBtb2RhbFRhcmdldHMuZWFjaChmdW5jdGlvbiggaW5kZXgsIGVsZW1lbnQgKSB7XG4gICAgdmFyIHRhcmdldEluZGV4ID0gJCggZWxlbWVudCApLmF0dHIoXCJtb2RhbC10YXJnZXRcIik7XG4gICAgdmFyIG1vZGFsV3JhcHBlciA9ICQoIFwiW21vZGFsLXdyYXBwZXI9XCIgKyB0YXJnZXRJbmRleCArIFwiXVwiICk7XG4gICAgdmFyXHRtb2RhbENvbnRlbnQgPSBtb2RhbFdyYXBwZXIuZmluZCggXCJbbW9kYWwtY29udGVudF1cIiApO1xuXG4gICAgbW9kYWxDb250ZW50Lm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgJCggZWxlbWVudCApLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgb3Blbk1vZGFsKCAkd2luZG93LnNjcm9sbFRvcCgpLCBtb2RhbFdyYXBwZXIgKTtcbiAgICB9KTtcblxuICAgIG1vZGFsV3JhcHBlci5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGNsb3NlTW9kYWwoIG1vZGFsV3JhcHBlciApO1xuICAgIH0pO1xuXG4gICAgbW9kYWxDbG9zZS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGNsb3NlTW9kYWwoIG1vZGFsV3JhcHBlciApO1xuICAgIH0pO1xuXG4gICAgJHdpbmRvdy5vbiggXCJrZXlkb3duXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGlmICggZXZlbnQua2V5Q29kZSA9PSAyNyApIHtcbiAgICAgICAgY2xvc2VNb2RhbCggbW9kYWxXcmFwcGVyICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWw7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmZ1bmN0aW9uIG9mZmNhbnZhcygpIHtcbiAgdmFyIGFsbE9mZkNhbnZhc1RhcmdldCA9ICQoIFwiW29mZmNhbnZhcy10YXJnZXRdXCIgKS5ub3QoXCJwcmUgW29mZmNhbnZhcy10YXJnZXRdXCIpO1xuICB2YXIgYWxsT2ZmQ2FudmFzV3JhcHBlciA9ICQoIFwiW29mZmNhbnZhcy13cmFwcGVyXVwiICkubm90KFwicHJlIFtvZmZjYW52YXMtd3JhcHBlcl1cIik7XG4gIHZhciAkd2luZG93ID0gJCggd2luZG93ICk7XG4gIHZhciByZW1vdmVXaGVlbCA9IGZhbHNlO1xuXG4gIGFsbE9mZkNhbnZhc1dyYXBwZXIuZGV0YWNoKCkuYWRkQ2xhc3MoXCJvZmZjYW52YXMtaGlkZGVuXCIpLmFwcGVuZFRvKFwiaHRtbFwiKTtcblxuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgYWxsT2ZmQ2FudmFzV3JhcHBlci5yZW1vdmVDbGFzcyhcIm9mZmNhbnZhcy1hY3RpdmVcIikuYWRkQ2xhc3MoXCJvZmZjYW52YXMtaGlkZGVuXCIpO1xuICB9XG5cbiAgYWxsT2ZmQ2FudmFzVGFyZ2V0LmVhY2goZnVuY3Rpb24oIGluZGV4LCBlbGVtZW50ICkge1xuICAgIHZhciB0YXJnZXQgPSAkKCBlbGVtZW50ICk7XG4gICAgdmFyIHRhcmdldEluZGV4ID0gdGFyZ2V0LmF0dHIoXCJvZmZjYW52YXMtdGFyZ2V0XCIpO1xuICAgIHZhciB3cmFwcGVyID0gJChcIltvZmZjYW52YXMtd3JhcHBlcj1cIiArIHRhcmdldEluZGV4ICsgXCJdXCIpO1xuICAgIHZhciBjb250ZW50ID0gd3JhcHBlci5maW5kKFwiW29mZmNhbnZhcy1jb250ZW50XVwiKTtcblxuICAgIHRhcmdldC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgd3JhcHBlci50b2dnbGVDbGFzcyhcIm9mZmNhbnZhcy1oaWRkZW4gb2ZmY2FudmFzLWFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnQub24oXCJjbGljayBtb3VzZW92ZXIgbW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgJHdpbmRvdy5vbihcIndoZWVsXCIsIHJlbW92ZVdoZWVsICk7XG4gICAgfSk7XG5cbiAgICB3cmFwcGVyLm9uKFwiY2xpY2tcIiwgcmVtb3ZlICk7XG4gICAgJHdpbmRvdy5vbihcInNjcm9sbFwiLCByZW1vdmUgKTtcblxuICAgIHdyYXBwZXIub24oXCJjbGljayBtb3VzZW92ZXIgbW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgJHdpbmRvdy5vZmYoXCJ3aGVlbFwiLCByZW1vdmVXaGVlbCApO1xuICAgICAgJHdpbmRvdy5vbihcInNjcm9sbFwiLCByZW1vdmUgKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvZmZjYW52YXM7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmZ1bmN0aW9uIHRhYnMoKSB7XG4gIHZhciBhbGxUYWJzID0gJCggXCJbdGFic11cIiApLm5vdCggXCJwcmUgW3RhYnNdXCIgKTtcbiAgdmFyIGFjdGl2ZVRpdGxlQ2xhc3MgPSBcInRhYi10aXRsZS1hY3RpdmVcIjtcblxuICBhbGxUYWJzLmVhY2goZnVuY3Rpb24oIGluZGV4LCBlbGVtZW50ICkge1xuICAgIHZhciB0YWJXcmFwcGVyID0gJCggZWxlbWVudCApO1xuICAgIHZhciB0YWJUaXRsZSA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIlt0YWItdGl0bGVdXCIgKTtcbiAgICB2YXIgdGFiQ29udGVudCA9ICQoIGVsZW1lbnQgKS5maW5kKCBcIlt0YWItY29udGVudF1cIiApO1xuICAgIHZhciBmaXJzdEluZGV4ID0gdGFiVGl0bGUuZmlyc3QoKS5hdHRyKCBcInRhYi10aXRsZVwiICk7XG5cbiAgICB0YWJUaXRsZS5maXJzdCgpLmFkZENsYXNzKCBhY3RpdmVUaXRsZUNsYXNzICk7XG4gICAgdGFiQ29udGVudC5oaWRlKCk7XG4gICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItY29udGVudD1cIiArIGZpcnN0SW5kZXggKyBcIl1cIiApLnNob3coKTtcblxuICAgIHRhYlRpdGxlLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRhYkluZGV4ID0gJCggdGhpcyApLmF0dHIoIFwidGFiLXRpdGxlXCIgKTtcblxuICAgICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItY29udGVudF1cIiApLmhpZGUoKTtcbiAgICAgIHRhYldyYXBwZXIuZmluZCggXCJbdGFiLWNvbnRlbnQ9XCIgKyB0YWJJbmRleCArIFwiXVwiICkuc2hvdygpO1xuICAgICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItdGl0bGVdXCIgKS5yZW1vdmVDbGFzcyggYWN0aXZlVGl0bGVDbGFzcyApO1xuICAgICAgdGFiV3JhcHBlci5maW5kKCBcIlt0YWItdGl0bGU9XCIgKyB0YWJJbmRleCArIFwiXVwiICkuYWRkQ2xhc3MoIGFjdGl2ZVRpdGxlQ2xhc3MgKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhYnM7XG4iLCIvKiBJbnNlcnQgVmlld1xuXG5AVmlldyAtIGZpbGUgcGF0aFxuLi4uXG48ZGl2IHZpZXc9XCJwYXRoL3RvL2ZpbGUuaHRtbFwiPiA8L2Rpdj5cbiovXG5cbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuY29uc3QgaW1wb3J0VmlldyAgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHZpZXdFbGVtZW50cyA9ICQoIFwiW3ZpZXddXCIgKTtcblxuICB2aWV3RWxlbWVudHMuZWFjaCggKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgbGV0ICRlbGVtZW50ID0gJCggZWxlbWVudCApO1xuICAgIGxldCBwYXRoID0gJGVsZW1lbnQuYXR0ciggXCJ2aWV3XCIgKTtcblxuICAgICRlbGVtZW50LmxvYWQoIHBhdGgsIChkYXRhLCBsb2cpID0+IHtcbiAgICAgIGlmICggbG9nID09PSBcImVycm9yXCIgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciggXCJTVS1FcnJvcjogXCIgKyBwYXRoICsgXCIgLSBOb3QgZm91bmRcIiApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGltcG9ydFZpZXc7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgaW1wb3J0VmlldyBmcm9tIFwiLi9pbXBvcnRWaWV3LmpzXCI7XG5pbXBvcnQgdGFyZ2V0VmlldyBmcm9tIFwiLi90YXJnZXRWaWV3LmpzXCI7XG5pbXBvcnQgdXJsVmlldyBmcm9tIFwiLi91cmxWaWV3LmpzXCI7XG5cbmltcG9ydCBhY2NvcmRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb24uanNcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsLmpzXCI7XG5pbXBvcnQgdGFicyBmcm9tIFwiLi9jb21wb25lbnRzL3RhYnMuanNcIjtcbmltcG9ydCBkcm9wZG93biBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duLmpzXCI7XG5pbXBvcnQgb2ZmY2FudmFzIGZyb20gXCIuL2NvbXBvbmVudHMvb2ZmY2FudmFzLmpzXCI7XG5cbiQoICgpID0+IHtcbiAgaW1wb3J0VmlldygpO1xuICB0YXJnZXRWaWV3KCk7XG4gIHVybFZpZXcoKTtcblxuICAvLyBDb21wb25lbnRzXG4gIGFjY29yZGlvbigpO1xuICBkcm9wZG93bigpO1xuICBtb2RhbCgpO1xuICB0YWJzKCk7XG4gIG9mZmNhbnZhcygpO1xufSk7XG4iLCIvKiBUYXJnZXQgdmlld1xuXG5AaW5zZXQtdmlldyAtIGZpbGUgcGF0aCB0byBpbmNsdWRlXG5AaW4tY29udGFpbmVyIC0gaHRtbCBjb250YWluZXJcbi4uLlxuPGJ1dHRvbiBpbnNlcnQtdmlldz1cInBhdGgvdG8vZmlsZS5odG1sXCIgaW4tY29udGFpbmVyPVwiLmNvbnRhaW5lclwiPlxuICBDbGljay1tZSFcbjwvYnV0dG9uPlxuKi9cblxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5jb25zdCB0YXJnZXRWaWV3ID0gZnVuY3Rpb24oKSB7XG4gIGxldCB0YXJnZXRzID0gJChcIltpbnNlcnQtdmlld11cIik7XG5cbiAgdGFyZ2V0cy5lYWNoKCAoIGluZGV4LCBlbGVtZW50ICkgPT4ge1xuICAgIGxldCAkZWxlbWVudCA9ICQoIGVsZW1lbnQgKTtcbiAgICBsZXQgdmlldyA9ICRlbGVtZW50LmF0dHIoIFwiaW5zZXJ0LXZpZXdcIiApO1xuICAgIGxldCBjb250YWluZXIgPSAkZWxlbWVudC5hdHRyKCBcImluLWNvbnRhaW5lclwiICk7XG5cbiAgICAkZWxlbWVudC5vbiggXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAkKCBjb250YWluZXIgKS5sb2FkKCB2aWV3ICk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFyZ2V0VmlldztcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuY29uc3QgdXJsVmlldyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgdXJsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gIGxldCB0YXJnZXRzID0gJChcIltpbnNlcnQtdmlld11cIik7XG5cbiAgdGFyZ2V0cy5lYWNoKCAoIGluZGV4LCBlbGVtZW50ICkgPT4ge1xuICAgIGxldCBocmVmID0gJCggZWxlbWVudCApLmF0dHIoIFwiaHJlZlwiICk7XG4gICAgbGV0IHZpZXcgPSAkKCBlbGVtZW50ICkuYXR0ciggXCJpbnNlcnQtdmlld1wiICk7XG5cbiAgICBpZiAoIGhyZWYgPT09IHVybEhhc2ggKSB7XG4gICAgICAkKCBcIi5jb250YWluZXJcIiApLmxvYWQoIHZpZXcgKTtcbiAgICB9XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmxWaWV3O1xuIl19
