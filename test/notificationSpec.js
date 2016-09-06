import $ from "jquery-slim";
import notification from "../app/js/components/notification.js";

describe( "Notification spec", () => {

  notification.wrapper = $( "<div notification-wrapper></div>" );

  it( "Add wrapper state adding {notification-wrapper} class", () => {
    expect( notification.wrapper ).not.toHaveClass( "notification-wrapper" );

    notification.init();

    expect( notification.wrapper ).toHaveClass( "notification-wrapper" );
  });

  it( "Create new element", () => {
    const notifyer = notification.create( "New notifyer", "style-class" );

    expect( notifyer ).toHaveClass( "notification" );
    expect( notifyer ).toHaveClass( "style-class" );
    expect( notifyer ).toContainText( "New notifyer" );
    expect( notifyer ).toBeVisible();

    expect( notification.wrapper ).toContainElement( ".notification" );

    notifyer.click();
  });

  it( "Remove element by click", () => {
    const notifyer = notification.create( "New notifyer", "style-class" );
    expect( notification.wrapper ).toContainElement( ".notification" );
    notifyer.click();

    expect( notification.wrapper ).not.toContainElement( ".notification" );
  });

  it( "Remome notifyer by time", () => {
    const notifyer = notification.create( "New notifyer", "style-class" );
    expect( notification.wrapper ).toContainElement( ".notification" );

    notification.removeByTime( notifyer );

    setTimeout( () => {
      expect( notification.wrapper ).not.toContainElement( ".notification" );
    }, 5000 );
  });

});

