import $ from "jquery-slim";

function alert() {
  var AlertCloses = $( "[alert-close]" );

  function closeAlert( closeButton ) {
    closeButton.on( "click", function() {
      closeButton.parent().addClass( "alert-remove" );

      setTimeout(function() {
        closeButton.parent().hide();
      }, 200 );
    });
  }

  AlertCloses.each(function( index, element ) {
    var closeButton = $( element );

    closeAlert( closeButton );
  });
}

export default alert;
