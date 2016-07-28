import $ from "jquery-slim";

function modal() {
  var body = $( "body" );
  var $window = $( window );
  var $document = $( document  );
  var modalTargets = $( "[modal-target]" );
  var modalWrappers = $( "[modal-wrapper]" );
  var ESC = 27;

  modalWrappers.detach().addClass( "modal-hidden" ).appendTo( "html" );

  function openModal( modalWrapper ) {
    modalWrapper.removeClass( "modal-hidden" ).addClass( "modal-actived" );
  }

  function hideModal( modalWrapper ) {
    modalWrapper.addClass( "modal-hidden" ).removeClass( "modal-actived" );

    $window.off( "scroll" );
  }

  function stopScroll() {
    var scrollPosition = $document.scrollTop();

    $window.on( "scroll", function() {
      $( this ).scrollTop( scrollPosition );
    });
  }

  function closeModalBykey() {
    $window.on( "keydown", function( event ) {
      if ( event.keyCode == ESC ) {
        hideModal( modalWrapper );
      }
    });
  }

  modalTargets.each(function( index, element ) {
    var target = $( element );
    var targetIndex = $( element ).attr( "modal-target" );
    var modalWrapper = $( "[modal-wrapper=" + targetIndex + "]" );
    var modalClose = modalWrapper.find( "[modal-close]" );
    var modalContent = modalWrapper.find( "[modal-content]" );

    target.on( "click", function() {
      openModal( modalWrapper );
      stopScroll();
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
  });

  closeModalBykey();
};

export default modal;
