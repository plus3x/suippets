import $ from "jquery";

function dropdown() {
  var allDropdown = $( "[dropdown]" ).not( "pre [dropdown]" );
  var allDropdownContent = allDropdown.find( "[dropdown-content]" );
  var $document = $( document );
  var eventType = "click";

  allDropdown.each(function( index, element ) {
    var dropdownContent = $( element ).find( "[dropdown-content]" );
    var dropdownTarget = $( element ).find( "[dropdown-target]" );

    dropdownContent.addClass("dropdown-hidden");

    dropdownTarget.on( eventType, function( event ) {
      event.stopPropagation();
      allDropdownContent.not( dropdownContent ).removeClass( "dropdown-activated" ).addClass( "dropdown-hidden" );
      dropdownContent.toggleClass( "dropdown-activated" ).toggleClass( "dropdown-hidden" );
    });
  });

  allDropdownContent.on( eventType, function( event ) {
    event.stopPropagation();
  });

  $document.on( eventType, function() {
    allDropdownContent.removeClass( "dropdown-activated" ).addClass( "dropdown-hidden" );
  });
}

export default dropdown;
