import $ from "jquery-slim";
import offcanvas from "../app/js/components/offcanvas.js";

describe( "Offcanvas Spec", () => {

  const offcanvasTargetMarkupt = $(
    `
      <button offcanvas-target="1"> </button>
    `
  );

  const offcanvasWrapperMarkup = $(
    `
      <div offcanvas-wrapper="1" class="offcanvas">
        <div offcanvas-content class="offcanvas-content">
        </div>
      </div><div offcanvas-wrapper="2" class="offcanvas">
        <div offcanvas-content class="offcanvas-content">
        </div>
      </div>
    `
  );

  offcanvas.targets = offcanvasTargetMarkupt;
  offcanvas.wrappers = offcanvasWrapperMarkup;

  it( "initial state, add {offcanvas-hidden} class in wrapper", () => {
    expect( offcanvas.wrappers ).not.toHaveClass( "offcanvas-hidden" );

    offcanvas.init();

    expect( offcanvas.wrappers ).toHaveClass( "offcanvas-hidden" );
  });

  it( "Show offcanvas, add class {offcanvas-activated} and remove {offcanvas-hidden}", () => {
    expect( offcanvas.wrappers ).not.toHaveClass( "offcanvas-activated" );
    expect( offcanvas.wrappers ).toHaveClass( "offcanvas-hidden" );

    offcanvas.show( offcanvas.wrappers );

    expect( offcanvas.wrappers ).not.toHaveClass( "offcanvas-hidden" );
    expect( offcanvas.wrappers ).toHaveClass( "offcanvas-activated" );
  });

  it( "Hide offcanvas, remove class {offcanvas-activated} and add {offcanvas-hidden}", () => {
    expect( offcanvas.wrappers ).not.toHaveClass( "offcanvas-hidden" );
    expect( offcanvas.wrappers ).toHaveClass( "offcanvas-activated" );

    offcanvas.hide( offcanvas.wrappers );

    expect( offcanvas.wrappers ).not.toHaveClass( "offcanvas-activated" );
    expect( offcanvas.wrappers ).toHaveClass( "offcanvas-hidden" );
  });

  it( "Click on target(#1) and open the corresponding wrapper(#1)", () => {
    offcanvas.targets.click();

    expect( offcanvas.wrappers[ 0 ] ).toHaveClass( "offcanvas-activated" );
    expect( offcanvas.wrappers[ 0 ] ).not.toHaveClass( "offcanvas-hidden" );

    expect( offcanvas.wrappers[ 1 ] ).not.toHaveClass( "offcanvas-activated" );
    expect( offcanvas.wrappers[ 1 ] ).toHaveClass( "offcanvas-hidden" );
  });

});