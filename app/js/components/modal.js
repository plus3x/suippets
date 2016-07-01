import $ from "jquery-slim";

function modal() {
  var body = $( "body" );
  var $window = $( window );
  var $document = $( document  );
  var modalTargets = $( "[modal-target]" );
  var modalWrappers = $( "[modal-wrapper]" );
  var modalContent = $( "[modal-content]" );

  modalWrappers.detach().addClass( "modal-hidden" ).appendTo( "html" );

  function openModal( modalWrapper ) {
    modalWrapper.removeClass( "modal-hidden" ).addClass( "modal-actived" );
  }

  function hideModal( modalWrapper ) {
    modalWrapper.addClass( "modal-hidden" ).removeClass( "modal-actived" );
    $window.off( "scroll" );
  }

  modalTargets.each(function( index, element ) {
    var target = $( element );
    var targetIndex = $( element ).attr( "modal-target" );
    var modalWrapper = $( "[modal-wrapper=" + targetIndex + "]" );
    var modalClose = modalWrapper.find( "[modal-close]" );
    var modalContent = modalWrapper.find( "[modal-content]" );

    target.on( "click", function() {
      openModal( modalWrapper );
      var scrollPosition = $document.scrollTop();

      $window.on( "scroll", function() {
        $( this ).scrollTop( scrollPosition );
      });
    });

    modalContent.on( "click", function( event ) {
      event.stopPropagation();
    });

    modalWrapper.on( "click", function() {
      hideModal( modalWrapper );
    });

    modalClose.on( "click", function() {
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
