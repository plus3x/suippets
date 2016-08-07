import $ from "jquery-slim";

// ES5 support

var dropdown = {
  all: $( "[dropdown]" ),
  contents: $( "[dropdown]" ).find( "[dropdown-content]" ),
};

dropdown.activePanel = function( content ) {
  dropdown
    .contents
      .not( content )
      .removeClass( "dropdown-activated" )
      .on( "click", function( event ) {
          event.stopPropagation();
      });

  content.toggleClass( "dropdown-activated" );
}

dropdown.removePanels = function( contents ) {
  contents.removeClass( "dropdown-activated" )
}

dropdown.clear = function( ) {
  $( document ).on( "click", function() {
    dropdown.removePanels( dropdown.contents );
  });
}

dropdown.init = function() {
  dropdown.all.each(function( index, element ) {
    var content = $( element ).find( "[dropdown-content]" );
    var target = $( element ).find( "[dropdown-target]" );

    target.on( "click", function( event ) {
      event.stopPropagation();

      dropdown.activePanel( content );
    });
  })

  dropdown.clear();
}

export default dropdown;
