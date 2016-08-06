import $ from "jquery-slim";

// ES5 support

var modal = {
  targets: $( "[modal-target]" ),
  wrappers: $( "[modal-wrapper]" ),
  closeButtons: $( "[modal-wrapper]" ).find( "[modal-close]" ),
  scrollPosition: $( document ).scrollTop(),
  ESC: 27
}

modal.detach = function() {
  modal
    .wrappers
    .detach()
    .addClass( "modal-hidden" )
    .appendTo( "html" );
}

modal.open = function( wrapper ) {
  wrapper
    .removeClass( "modal-hidden" )
    .addClass( "modal-actived" );
}

modal.hide = function( wrapper ) {
  wrapper
    .addClass( "modal-hidden" )
    .removeClass( "modal-actived" );

  modal.startScroll();
}

modal.stopScroll = function() {
  $( window ).on( "scroll", function() {
    $( this ).scrollTop( modal.scrollPosition );
  });
}

modal.startScroll = function(){
  $( window ).off( "scroll" );
}

modal.closeModalBykey = function( event ) {
  if ( event.keyCode == modal.ESC ) {
    modal.hide( modal.wrappers );
  }
}

modal.init = function() {
  modal.detach();

  $( window ).on( "keydown", function( event ){
    modal.closeModalBykey( event );
  });

  modal.targets.each(function( index, element ) {
    var target = $( element );
    var targetIndex = $( element ).attr( "modal-target" );
    var wrapper = $( "[modal-wrapper=" + targetIndex + "]" );
    var content = wrapper.find( "[modal-content]" );
    var closeButton = wrapper.find( "[modal-close]" );

    target.on( "click", function() {
      modal.open( wrapper )
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
}

export default modal;
