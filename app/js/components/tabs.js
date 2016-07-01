import $ from "jquery-slim";

function tabs() {
  var allTabs = $( "[tabs]" );
  var activeTitleClass = "tab-title-active";

  allTabs.each(function( index, element ) {
    var tabWrapper = $( element );
    var tabTitle = $( element ).find( "[tab-title]" );
    var tabContent = $( element ).find( "[tab-content]" );
    var firstIndex = tabTitle.first().attr( "tab-title" );

    tabTitle.first().addClass( activeTitleClass );
    tabContent.hide();
    tabWrapper.find( "[tab-content=" + firstIndex + "]" ).show();

    tabTitle.on( "click", function() {
      var tabIndex = $( this ).attr( "tab-title" );

      tabWrapper.find( "[tab-content]" ).hide();
      tabWrapper.find( "[tab-content=" + tabIndex + "]" ).show();
      tabWrapper.find( "[tab-title]" ).removeClass( activeTitleClass );
      tabWrapper.find( "[tab-title=" + tabIndex + "]" ).addClass( activeTitleClass );
    });
  });
}

export default tabs;
