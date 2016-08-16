import $ from "jquery-slim";
import alertmsg from "../app/js/components/alertmsg.js";

describe( "Alert spec", () => {

  beforeEach( ()=> {
    const alertStructure = $(
      `
        <div>
          <span alert-close> </span>
        </div>
      `
    );

    let button = alertStructure.find( "[alert-close]" );

    alertmsg.buttons = button;

    alertmsg.init();
  });

  it( "Add 'alert-remove' class in alert structure", () => {
    expect( alertmsg.buttons.parent() ).not.toHaveClass( "alert-remove" );

    alertmsg.removeAlert( alertmsg.buttons );

    expect( alertmsg.buttons.parent() ).toHaveClass( "alert-remove" );
  });

  it( "Hidden element", () => {
    expect( alertmsg.buttons.parent() ).not.toHaveCss({ "display": "none" });

    alertmsg.hideAlert( alertmsg.buttons );

    expect( alertmsg.buttons.parent() ).toHaveCss({ "display": "none" });
  });

  it( "Remove alerts on click", () => {
    expect( alertmsg.buttons.parent() ).not.toHaveClass( "alert-remove" );

    let spyEvent = spyOnEvent( alertmsg.buttons, "click" );

    alertmsg.buttons.click();

    expect( "click" ).toHaveBeenTriggeredOn( alertmsg.buttons );
    expect( alertmsg.buttons.parent() ).toHaveClass( "alert-remove" );
  });

});
