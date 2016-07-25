import $ from "jquery-slim";

function tabs() {
  var allTabs = $( "[tabs]" );
  var activeTitleClass = "tab-title-active";

  function initialTab( firstTabTitle, firstTabContent ){
    firstTabTitle.addClass( activeTitleClass );
    firstTabContent.show();
  }

  function changeTab( tabTitle, tabWrapper, tabContent ){
    tabTitle.on( "click", function() {
      var tabIndex = $( this ).attr( "tab-title" );
      var thisTabContent = tabWrapper.find( "[tab-content=" + tabIndex + "]" )
      var thisTabTitle = tabWrapper.find( "[tab-title=" + tabIndex + "]" )

      tabTitle.removeClass( activeTitleClass );
      tabContent.hide();
                 
      thisTabTitle.addClass( activeTitleClass );
      thisTabContent.show();
    });
  }

  allTabs.each(function( index, element ) {
    var tabWrapper = $( element );
    var tabTitle = $( element ).find( "[tab-title]" );
    var tabContent = $( element ).find( "[tab-content]" );
    var firstIndex = tabTitle.first().attr( "tab-title" );
    var firstTabTitle = $( element ).find( "[tab-title]" ).first();
    var firstTabContent = tabWrapper.find( "[tab-content=" + firstIndex + "]" )

    tabContent.hide();
    
    initialTab(firstTabTitle, firstTabContent);

    changeTab(tabTitle, tabWrapper, tabContent);
  });
}

export default tabs;
