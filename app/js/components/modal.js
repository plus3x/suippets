import $ from "jquery";

function modal() {
  var body = $( "body" );
  var $window = $( window );
  var modalTargets = $( "[modal-target]" ).not( "pre [modal-target]" );
  var modalWrappers = $( "[modal-wrapper]" ).not( "pre [modal-wrapper]" );
  var modalContent = $( "[modal-content]" ).not( "pre [modal-content]" );

  modalWrappers.detach().addClass( "modal-hidden" ).appendTo( "html" );

  function openModal( modalWrapper ) {
    modalWrapper.removeClass("modal-hidden").addClass("modal-actived");
    body.css({ "overflow-y": "hidden" });
  }

  function hideModal( modalWrapper ) {
    modalWrapper.addClass("modal-hidden").removeClass("modal-actived");
    body.css({ "overflow-y": "scroll" });
  }

  modalTargets.each(function( index, element ) {
    var target = $( element );
    var targetIndex = $( element ).attr("modal-target");
    var modalWrapper = $( "[modal-wrapper=" + targetIndex + "]" );
    var modalClose = modalWrapper.find("[modal-close]");
    var modalContent = modalWrapper.find( "[modal-content]" );

    target.on("click", function() {
      openModal( modalWrapper );
    });

    modalContent.on( "click", function( event ) {
      event.stopPropagation();
    });

    modalWrapper.on("click", function() {
      hideModal( modalWrapper );
    });

    modalClose.on("click", function() {
      hideModal( modalWrapper );
    });

    $window.on( "keydown", function( event ) {
      if ( event.keyCode == 27 ) {
        hideModal( modalWrapper );
      }
    });
  });
};

export default modal;
