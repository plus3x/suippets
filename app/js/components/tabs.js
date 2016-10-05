import $ from "jquery-slim";

// ES5 support

var tabs = {
  all: $( "[tabs]" ),
  activatedTitleClass: "tab-title-activated"
};

tabs.initialTab = function( firstTitle, firstContent ) {
  firstTitle.addClass( tabs.activatedTitleClass );
  firstContent.show();
};

tabs.changeTab = function( title, wrapper, content ) {
  title.on( "click", function() {
    var tabIndex = $( this ).attr( "tab-title" );
    var thiscontent = wrapper.find( "[tab-content=" + tabIndex + "]" );
    var thistitle = wrapper.find( "[tab-title=" + tabIndex + "]" );

    title.removeClass( tabs.activatedTitleClass );
    content.hide();

    thistitle.addClass( tabs.activatedTitleClass );
    thiscontent.show();
  });
};

tabs.init = function() {
  tabs.all.each( function( index, element ) {
    var wrapper = $( element );
    var title = $( element ).find( "[tab-title]" );
    var content = $( element ).find( "[tab-content]" );
    var firstIndex = title.first().attr( "tab-title" );
    var firstTitle = $( element ).find( "[tab-title]" ).first();
    var firstContent = wrapper.find( "[tab-content=" + firstIndex + "]" );

    content.hide();

    tabs.initialTab( firstTitle, firstContent );

    tabs.changeTab( title, wrapper, content );
  });
};

// Usage - tabs.init();

export default tabs;
