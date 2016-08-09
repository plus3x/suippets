import $ from "jquery-slim";

// ES5 support

var offcanvas = {
  targets: $( "[offcanvas-target]" ),
  wrappers: $( "[offcanvas-wrapper]" ),
  ESC: 27
}

offcanvas.deatch = function() {
  offcanvas
    .wrappers
      .detach()
      .addClass( "offcanvas-hidden" )
      .appendTo( "html" );
}

offcanvas.show = function( wrapper ) {
  wrapper.toggleClass( "offcanvas-hidden offcanvas-activated" );
  offcanvas.stopScroll();
}

offcanvas.hide = function() {
  offcanvas
    .wrappers
      .removeClass( "offcanvas-activated" )
      .addClass( "offcanvas-hidden" );

  offcanvas.startScroll();
}

offcanvas.hideByKey = function() {
  $( window ).on( "keydown", function( event ) {
    if ( event.keyCode == offcanvas.ESC ) {
      offcanvas.hide();
    }
  });
}

offcanvas.stopScroll = function() {
  var scrollPosition = $( document ).scrollTop();

  $( window ).on( "scroll", function() {
    $( this ).scrollTop( scrollPosition );
  });
}

offcanvas.startScroll = function () {
  $( window ).off( "scroll" );
}

offcanvas.init = function() {
  offcanvas.deatch();

  offcanvas.hideByKey();

  offcanvas.targets.each(function( index, element ) {
    var target = $( element );
    var targetIndex = target.attr( "offcanvas-target" );
    var wrapper = $( "[offcanvas-wrapper=" + targetIndex + "]" );
    var content = wrapper.find( "[offcanvas-content]" );

    target.on( "click", function(){
      offcanvas.show( wrapper );
    })

    content.on( "click", function( event ) {
      event.stopPropagation();
    });

    wrapper.on( "click", function() {
      offcanvas.hide();
    });
  });
}

export default offcanvas;
