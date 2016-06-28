import $ from "jquery";

function accordion() {
  var accordionElement = $( "[accordion]" ).not( "pre [accordion]" );
  var activeTitleClass = "accordion-title-active";

  accordionElement.each(function( index, element ) {
    var accordionContent = $( element ).find( "[accordion-content]" ).first().hide();
    var accordionTitle = $( element ).find( "[accordion-title]" ).first();

    accordionTitle.on( "click", function( event ) {
      accordionTitle.toggleClass( activeTitleClass );
      accordionContent.slideToggle( 100, "linear" );
      event.stopPropagation();
    });
  });
};

export default accordion;
