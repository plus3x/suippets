import $ from "jquery-slim";
import expander from "../../app/js/components/expander.js";

describe( "expander spec", () => {

  beforeEach( () => {
    const expandersMarkup = $(
      `
        <div expander>
          <p expander-title > </p>
          <div expander-content > </div>
        </div>
      `
    );

    expander.expanders = expandersMarkup;

    expander.init();
  });

  it( "this is my first test", () => {
    let expanderTitle = expander.expanders.find( "[expander-title]" );

    expect( expanderTitle ).not.toHaveClass( "expander-title-activated" );

    expanderTitle.click();

    expect( expanderTitle ).toHaveClass( "expander-title-activated" );

    expanderTitle.click();

    expect( expanderTitle ).not.toHaveClass( "expander-title-activated" );
  });

});
