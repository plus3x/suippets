import $ from "jquery-slim";

// ES5 support

var expander = {
  expanders: $( "[expander]" ),
  activatedTitleClass: "expander-title-activated"
};

expander.toggle = function( title, content ) {
  title.on( "click", function( event ) {
    title.toggleClass( expander.activatedTitleClass );

    content.toggle();

    event.stopPropagation();
  });
};

expander.init = function() {
  expander.expanders.each( function( index, element ) {
    var content = $( element ).find( "[expander-content]" ).first().hide();
    var title = $( element ).find( "[expander-title]" ).first();

    expander.toggle( title, content );
  });
};

// Usage - expander.init();

export default expander;
