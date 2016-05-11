import $ from "jquery";

function offcanvas() {
  var allOffCanvasTarget = $( "[offcanvas-target]" ).not("pre [offcanvas-target]");
  var allOffCanvasWrapper = $( "[offcanvas-wrapper]" ).not("pre [offcanvas-wrapper]");
  var $window = $( window );
  var $document = $( document );

  allOffCanvasWrapper.detach().addClass("offcanvas-hidden").appendTo("html");

  function removeOffCanvas() {
    allOffCanvasWrapper.removeClass("offcanvas-active").addClass("offcanvas-hidden");
    $window.off("scroll");
  }

  allOffCanvasTarget.each(function( index, element ) {
    var target = $( element );
    var targetIndex = target.attr("offcanvas-target");
    var wrapper = $("[offcanvas-wrapper=" + targetIndex + "]");
    var content = wrapper.find("[offcanvas-content]");


    target.on("click", function() {
      var scrollPosition = $document.scrollTop();
      wrapper.toggleClass("offcanvas-hidden offcanvas-active");

      $window.on( "scroll", function() {
        $( this ).scrollTop( scrollPosition );
      });
    });

    content.on("click", function( event ) {
      event.stopPropagation();
    });

    wrapper.on("click", function() {
      removeOffCanvas();
    });

    $window.on( "keydown", function( event ) {
      if ( event.keyCode == 27 ) {
        removeOffCanvas();
      }
    });
  });
};

export default offcanvas;
