import $ from "jquery-slim";
import dropdown from "../app/js/components/dropdown.js";

describe( "Dropdown Spec", () => {

  beforeEach( () => {
    const dropdownMarkup = $(
      `
        <div dropdown class="dropdown">
          <button dropdown-target class="btn" > </button>
          <div dropdown-content class="dropdown-content"> </div>
        </div>
      `
    );

    dropdown.all = dropdownMarkup;
    dropdown.contents = dropdownMarkup.find( "[dropdown-content]" );

    dropdown.init();
  });

  it( "Add {dropdown-activated} class", () => {
    expect( dropdown.contents ).not.toHaveClass( "dropdown-activated" );

    dropdown.activePanel( dropdown.contents );

    expect( dropdown.contents ).toHaveClass( "dropdown-activated" );
  });

  it( "Remove {dropdown-activated} class", () => {
    dropdown.activePanel( dropdown.contents );

    expect( dropdown.contents ).toHaveClass( "dropdown-activated" );

    dropdown.removePanels();

    expect( dropdown.contents ).not.toHaveClass( "dropdown-activated" );
  });
});
