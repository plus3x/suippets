import $ from "jquery-slim";
import tabs from "../app/js/components/tabs.js";

describe( "Tabs specs", () => {

  let tabsMarkup = $(
    `
      <div tabs>
        <div class="tab-titles">
          <p tab-title="1" class="tab-title"> </p>
          <p tab-title="2" class="tab-title"> </p>
          <p tab-title="3" class="tab-title"> </p>
        </div>

        <div tab-content="1" class="tab-content"></div>
        <div tab-content="2" class="tab-content"></div>
        <div tab-content="3" class="tab-content"></div>
      </div>
    `
  );

  tabs.all = tabsMarkup;

  tabs.init();

  let first = {
    title: tabs.all.find( "[tab-title=1]" ),
    content: tabs.all.find( "[tab-content=1]" )
  };

  let second = {
    title: tabs.all.find( "[tab-title=2]" ),
    content: tabs.all.find( "[tab-content=2]" )
  };

  let third = {
    title: tabs.all.find( "[tab-title=3]" ),
    content: tabs.all.find( "[tab-content=3]" )
  };

  const isTabActivated = ( tab ) => {
    expect( tab.title ).toHaveClass( "tab-title-activated" );
    expect( tab.content ).not.toHaveCss( { "display": "none" } );
  };

  const isTabHidden = ( tab ) => {
    expect( tab.title ).not.toHaveClass( "tab-title-activated" );
    expect( tab.content ).toHaveCss( { "display": "none" } );
  };

  it( "Initial tab is selected", () => {
    isTabActivated( first );

    isTabHidden( second );
    isTabHidden( third );
  } );

  it( "Click on second tab, show the second content and hide others contents", () => {
    second.title.click();
    isTabActivated( second );

    isTabHidden( first );
    isTabHidden( third );
  } );

} );
