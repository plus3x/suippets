import $ from "jquery-slim";

// support ES5

var notification = {
  wrapper: $( "[notification-wrapper]" ),
  delay: 5000,
};

notification.detach = function( wrapper ) {
  wrapper
    .detach()
    .addClass( "notification-wrapper" )
    .prependTo( "html" );
};

notification.removeByTime = function( notifier ) {
  setTimeout( function() {
    notifier.remove();
  }, notification.delay );
};

notification.removeByClick = function( notifier ) {
  notifier.on( "click", function() {
    notifier.remove();
  });
};

notification.create = function( message, classes ) {
  var notifier = $( "<div> </div>" );
  notifier.addClass( "notification " + classes );
  notifier.text( message );
  notifier.appendTo( notification.wrapper );

  notification.removeByTime( notifier );
  notification.removeByClick( notifier );

  return notifier;
};

notification.init = function() {
  notification.detach( notification.wrapper );
};

// Usage
// notification.init()
// notification.create( "messages", "class1 class2 class3" );

export default notification;
