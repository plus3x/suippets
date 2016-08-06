import $ from "jquery-slim";
import dropdown from "../app/js/components/dropdown.js";

describe( "Dropdown Spec", () => {

  beforeEach(() => {
    spyOn( dropdown, "clear" );
    spyOn( dropdown, "init" );
  });

  const dropdownMarkup = $(`
    <div dropdown class="dropdown">
      <button dropdown-target class="btn" > </button>
      <div dropdown-content class="dropdown-content"> </div>
    </div>
  `);

  let target = dropdownMarkup.find( "[dropdown-target]" );
  let content = dropdownMarkup.find( "[dropdown-content]" );

  it( "Add {dropdown-activated} class", () => {
    expect( content ).not.toHaveClass( "dropdown-activated" );

    dropdown.activePanel( content );

    expect( content ).toHaveClass( "dropdown-activated" );
  });

  it( "Remove {dropdown-activated} class", () => {
    expect( content ).toHaveClass( "dropdown-activated" );

    dropdown.removePanels( content );

    expect( content ).not.toHaveClass( "dropdown-activated" );
  });

  it( "Call clear method", function(){
    dropdown.clear();

    expect( dropdown.clear ).toHaveBeenCalled();
  });

  it( "Call init method", function(){
    dropdown.init();

    expect( dropdown.init ).toHaveBeenCalled();
  });

});