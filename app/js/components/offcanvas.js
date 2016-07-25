import $ from "jquery-slim";

function offcanvas() {
  var allOffCanvasTarget = $( "[offcanvas-target]" );
  var allOffCanvasWrapper = $( "[offcanvas-wrapper]" );
  var $window = $( window );
  var $document = $( document );
  var ESC = 27;

  allOffCanvasWrapper.detach()
    .addClass( "offcanvas-hidden" )
    .appendTo( "html" );

  function openOffCanvas(target, wrapper){
    target.on("click", function() {
      wrapper.toggleClass( "offcanvas-hidden offcanvas-active" );

      stopScroll();
    });
  }

  function closeOffCanvas() {
    allOffCanvasWrapper.removeClass( "offcanvas-active" ).addClass( "offcanvas-hidden" );
  
    $window.off("scroll");
  }

  function stopScroll(){
    var scrollPosition = $document.scrollTop();

    $window.on("scroll", function() {
      $( this ).scrollTop( scrollPosition );
    });
  }

  function closeOffCanvasByKey(){
    $window.on("keydown", function( event ) {
      if ( event.keyCode == ESC ) {
        closeOffCanvas();
      }
    });
  }

  allOffCanvasTarget.each(function( index, element ) {
    var target = $( element );
    var targetIndex = target.attr( "offcanvas-target" );
    var wrapper = $( "[offcanvas-wrapper=" + targetIndex + "]" );
    var content = wrapper.find( "[offcanvas-content]" );

    openOffCanvas(target, wrapper);
    
    closeOffCanvasByKey();

    content.on("click", function( event ) {
      event.stopPropagation();
    });

    wrapper.on("click", function() {
      closeOffCanvas();
    });
  });
};

export default offcanvas;
