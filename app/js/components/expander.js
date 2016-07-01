import $ from "jquery-slim";

function expander() {
  var expanderElement = $( "[expander]" );
  var activeTitleClass = "expander-title-active";

  expanderElement.each(function( index, element ) {
    var expanderContent = $( element ).find( "[expander-content]" ).first().hide();
    var expanderTitle = $( element ).find( "[expander-title]" ).first();

    expanderTitle.on( "click", function( event ) {
      expanderTitle.toggleClass( activeTitleClass );
      expanderContent.toggle();
      event.stopPropagation();
    });
  });
};

export default expander;
