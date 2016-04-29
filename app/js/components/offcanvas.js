import $ from "jquery";

function offcanvas() {
  var allOffCanvasTarget = $( "[offcanvas-target]" ).not("pre [offcanvas-target]");
  var allOffCanvasWrapper = $( "[offcanvas-wrapper]" ).not("pre [offcanvas-wrapper]");
  var $window = $( window );
  var removeWheel = false;

  allOffCanvasWrapper.detach().addClass("offcanvas-hidden").appendTo("html");

  function remove() {
    allOffCanvasWrapper.removeClass("offcanvas-active").addClass("offcanvas-hidden");
  }

  allOffCanvasTarget.each(function( index, element ) {
    var target = $( element );
    var targetIndex = target.attr("offcanvas-target");
    var wrapper = $("[offcanvas-wrapper=" + targetIndex + "]");
    var content = wrapper.find("[offcanvas-content]");

    target.on("click", function() {
      wrapper.toggleClass("offcanvas-hidden offcanvas-active");
    });

    content.on("click mouseover mousemove", function( event ) {
      event.stopPropagation();
      $window.on("wheel", removeWheel );
    });

    wrapper.on("click", remove );
    $window.on("scroll", remove );

    wrapper.on("click mouseover mousemove", function() {
      $window.off("wheel", removeWheel );
      $window.on("scroll", remove );
    });
  });
};

export default offcanvas;
