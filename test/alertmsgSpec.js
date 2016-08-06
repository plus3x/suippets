import $ from "jquery-slim";
import alertmsg from "../app/js/components/alertmsg.js";

describe( "Alert spec" , () => {

  beforeEach(() => {
    spyOn( alertmsg, "init" );
  });

  const alertStructure = $(`
    <div class="alert alert-danger">
      <span alert-close class="alert-close"> </span>
    </div>
  `);

  let button = alertStructure.find( "[alert-close]" );

  it( "Add 'alert-remove' class in alert structure", () => {
    expect( alertStructure ).not.toHaveClass( "alert-remove" );

    alertmsg.closeAlert( button );

    expect( alertStructure ).toHaveClass( "alert-remove" );
  });

  it( "Hidden element", () => {
    expect( alertStructure ).not.toHaveCss( {"display": "none"} );

    alertmsg.hiddenAlert( button );

    expect( alertStructure ).toHaveCss( {"display": "none"} );
  });

  it( "Call init", () => {
    alertmsg.init();

    expect( alertmsg.init ).toHaveBeenCalled();
  });

});