import $ from "jquery-slim";

function dropdown() {
  var allDropdown = $( "[dropdown]" );
  var allDropdownContent = allDropdown.find( "[dropdown-content]" );
  var $document = $( document );
  var eventType = "click";

  function activePanel(){
    dropdownTarget.on( eventType, function( event ) {
      event.stopPropagation();

      allDropdownContent.not( dropdownContent ).removeClass( "dropdown-activated" ).addClass( "dropdown-hidden" );
      
      dropdownContent.toggleClass( "dropdown-activated" ).toggleClass( "dropdown-hidden" );
    });
  }

  allDropdown.each(function( index, element ) {
    var dropdownContent = $( element ).find( "[dropdown-content]" );
    var dropdownTarget = $( element ).find( "[dropdown-target]" );

    dropdownContent.addClass( "dropdown-hidden" );
    activePanel( dropdownTarget );
  });

  allDropdownContent.on( eventType, function( event ) {
    event.stopPropagation();
  });

  $document.on( eventType, function() {
    allDropdownContent.removeClass( "dropdown-activated" ).addClass( "dropdown-hidden" );
  });
}

export default dropdown;
