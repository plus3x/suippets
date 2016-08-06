import $ from "jquery-slim";

// ES5 support

var alertmsg = {
  "buttons": $( "[alert-close]" ),
}

alertmsg.hiddenAlert = function( button ) {
  button.parent().hide();
}

alertmsg.closeAlert = function( button ) {
  button
    .parent()
    .addClass( "alert-remove" );

  setTimeout(function() {
    alertmsg.hiddenAlert( button );
  }, 200 );
}

alertmsg.init = function() {
  this.buttons.each( function( index, button ) {
    $( button ).on( 'click', function(){
      alertmsg.closeAlert( $( button ) );
    });
  });
}

export default alertmsg;
