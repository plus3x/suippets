import $ from "jquery-slim";

// ES5 support

var expander = {
  expanders: $( "[expander]" ),
  activatedTitleClass: "expander-title-activated"
};

expander.toggle = function( expanderTitle, expanderContent ) {
  expanderTitle.on( "click", function( event ) {
    expanderTitle.toggleClass( expander.activatedTitleClass );

    expanderContent.toggle();

    event.stopPropagation();
  });
};

expander.init = function() {
  expander.expanders.each( function( index, element ) {
    var expanderContent = $( element ).find( "[expander-content]" ).first().hide();
    var expanderTitle = $( element ).find( "[expander-title]" ).first();

    expander.toggle( expanderTitle, expanderContent );
  });
};

// Usage - expander.init();

export default expander;
