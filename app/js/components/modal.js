import $ from "jquery-slim";

// ES5 support

var modal = {
  targets: $( "[modal-target]" ),
  wrappers: $( "[modal-wrapper]" ),
  closeButtons: $( "[modal-wrapper]" ).find( "[modal-close]" ),
  scrollPosition: $( document ).scrollTop(),
  ESC: 27
};

modal.detach = function() {
  modal
    .wrappers
      .detach()
      .addClass( "modal-hidden" )
      .appendTo( "html" );
};

modal.show = function( wrapper ) {
  wrapper
    .removeClass( "modal-hidden" )
    .addClass( "modal-activated" );
};

modal.hide = function( wrapper ) {
  wrapper
    .addClass( "modal-hidden" )
    .removeClass( "modal-activated" );

  modal.startScroll();
};

modal.stopScroll = function() {
  var scrollPosition = $( document ).scrollTop();

  $( window ).on( "scroll", function() {
    $( this ).scrollTop( scrollPosition );
  });
};

modal.startScroll = function() {
  $( window ).off( "scroll" );
};

modal.hideByKey = function() {
  $( window ).on( "keydown", function( event ) {
    if ( event.keyCode == modal.ESC ) {
      modal.hide( modal.wrappers );
    }
  });
};

modal.init = function() {
  modal.detach();

  modal.hideByKey();

  modal.targets.each( function( index, element ) {
    var target = $( element );
    var targetIndex = $( element ).attr( "modal-target" );
    var wrapper = $( "[modal-wrapper=" + targetIndex + "]" );
    var content = wrapper.find( "[modal-content]" );
    var closeButton = wrapper.find( "[modal-close]" );

    target.on( "click", function() {
      modal.show( wrapper );
      modal.stopScroll();
    });

    content.on( "click", function( event ) {
      event.stopPropagation();
    });

    wrapper.on( "click", function() {
      modal.hide( wrapper );
    });

    closeButton.on( "click", function() {
      modal.hide( wrapper );
    });
  });
};

// Usage - modal.init();

export default modal;
