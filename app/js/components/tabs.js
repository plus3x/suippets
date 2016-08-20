import $ from "jquery-slim";

// ES5 support

var tabs = {
  all: $( "[tabs]" ),
  activatedTitleClass: "tab-title-activated"
};

tabs.initialTab = function( firstTabTitle, firstTabContent ) {
  firstTabTitle.addClass( tabs.activatedTitleClass );
  firstTabContent.show();
};

tabs.changeTab = function( tabTitle, tabWrapper, tabContent ) {
  tabTitle.on( "click", function() {
    var tabIndex = $( this ).attr( "tab-title" );
    var thisTabContent = tabWrapper.find( "[tab-content=" + tabIndex + "]" );
    var thisTabTitle = tabWrapper.find( "[tab-title=" + tabIndex + "]" );

    tabTitle.removeClass( tabs.activatedTitleClass );
    tabContent.hide();

    thisTabTitle.addClass( tabs.activatedTitleClass );
    thisTabContent.show();
  });
};

tabs.init = function() {
  tabs.all.each( function( index, element ) {
    var tabWrapper = $( element );
    var tabTitle = $( element ).find( "[tab-title]" );
    var tabContent = $( element ).find( "[tab-content]" );
    var firstIndex = tabTitle.first().attr( "tab-title" );
    var firstTabTitle = $( element ).find( "[tab-title]" ).first();
    var firstTabContent = tabWrapper.find( "[tab-content=" + firstIndex + "]" );

    tabContent.hide();

    tabs.initialTab( firstTabTitle, firstTabContent );

    tabs.changeTab( tabTitle, tabWrapper, tabContent );
  });
};

export default tabs;
