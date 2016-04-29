import $ from "jquery";

function modal() {
  var body = $( "body" );
  var $window = $( window );
  var modalTargets = $( "[modal-target]" ).not( "pre [modal-target]" );
  var modalClose = $( "[modal-close]" ).not( "pre [modal-close]" );
  var modalWrappers = $( "[modal-wrapper]" ).not( "pre [modal-wrapper]" );
  var modalContent = $( "[modal-content]" ).not( "pre [modal-content]" );

  modalWrappers.detach().hide().appendTo( "html" );

  function styleOfWrapper( scrollPosition ) {
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

  function openModal( scrollPosition, wrapper ) {
    wrapper.fadeIn( 100 );
    body.css({ "overflow-y": "hidden" });
    styleOfWrapper( scrollPosition, wrapper );
  }

  function closeModal( wrapper ) {
    wrapper.fadeOut( 100 );
    body.css({ "overflow-y": "scroll" });
  }

  modalTargets.each(function( index, element ) {
    var targetIndex = $( element ).attr("modal-target");
    var modalWrapper = $( "[modal-wrapper=" + targetIndex + "]" );
    var	modalContent = modalWrapper.find( "[modal-content]" );

    modalContent.on( "click", function( event ) {
      event.stopPropagation();
    });

    $( element ).on( "click", function() {
      openModal( $window.scrollTop(), modalWrapper );
    });

    modalWrapper.on( "click", function() {
      closeModal( modalWrapper );
    });

    modalClose.on( "click", function() {
      closeModal( modalWrapper );
    });

    $window.on( "keydown", function( event ) {
      if ( event.keyCode == 27 ) {
        closeModal( modalWrapper );
      }
    });
  });
};

export default modal;
