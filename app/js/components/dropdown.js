import $ from "jquery";

function dropdown() {
  var allDropdown = $( "[dropdown]" ).not( "pre [dropdown]" );
  var allDropdownContent = allDropdown.find( "[dropdown-content]" );
  var $document = $( document );
  var eventType = "click";

  allDropdown.each(function( index, element ) {
    var dropdownContent = $( element ).find( "[dropdown-content]" );
    var dropdownTarget = $( element ).find( "[dropdown-target]" );

    dropdownContent.hide();

    dropdownTarget.on( eventType, function( event ) {
      event.stopPropagation();
      allDropdownContent.not( dropdownContent ).hide();
      dropdownContent.fadeToggle( 50, "linear" );
    });
  });

  allDropdownContent.on( eventType, function( event ) {
    event.stopPropagation();
  });

  $document.on( eventType, function() {
    allDropdownContent.fadeOut( 200, "linear" );
  });
}

export default dropdown;
