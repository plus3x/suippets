import $ from "jquery-slim";

// ES5 support

var alertmsg = {
  "buttons": $( "[alert-close]" ),
};

alertmsg.hideAlert = function( button ) {
  button
    .parent()
    .hide();
};

alertmsg.removeAlert = function( button ) {
  button
    .parent()
    .addClass( "alert-remove" );

  setTimeout( function() {
    alertmsg.hideAlert( button );
  }, 200 );
};

alertmsg.init = function() {
  this.buttons.each( function( index, button ) {
    $( button ).on( "click", function() {
      alertmsg.removeAlert( $( button ) );
    });
  });
};

// Usage - alertmsg.init();

export default alertmsg;
