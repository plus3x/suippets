import $ from "jquery-slim";

function expander() {
  var expanderElement = $( "[expander]" );
  var activeTitleClass = "expander-title-active";

  function toggleExpander( expanderTitle, expanderContent ) {
    expanderTitle.on( "click", function( event ) {
      $( this ).toggleClass( activeTitleClass );

      expanderContent.toggle();

      event.stopPropagation();
    });
  }

  expanderElement.each(function( index, element ) {
    var expanderContent = $( element ).find( "[expander-content]" ).first().hide();
    var expanderTitle = $( element ).find( "[expander-title]" ).first();

    toggleExpander( expanderTitle, expanderContent );
  });
};

export default expander;
