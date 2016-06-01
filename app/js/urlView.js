import $ from "jquery";

const urlView = function() {
  let urlHash = window.location.hash;

  let targets = $("[insert-view]");

  targets.each( ( index, element ) => {
    let href = $( element ).attr( "href" );
    let view = $( element ).attr( "insert-view" );

    if ( href === urlHash ) {
      $( ".container" ).load( view );
    }
  });

};

export default urlView;
