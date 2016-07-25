import $ from "jquery-slim";

function alert() {
  var AlertCloses = $( "[alert-close]" );

  function closeAlert(button){
    button.on( "click", function() {
      button.parent().addClass( "alert-remove" );

      setTimeout(function() {
        button.parent().hide();
      }, 200 );
    });
  }

  AlertCloses.each(function( index, element ) {
    var closeButton = $( element );

    closeAlert(closeButton);
  });
}

export default alert;
