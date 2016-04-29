/* Insert View

@View - file path
...
<div view="path/to/file.html"> </div>
*/

import $ from "jquery";

const importView  = function() {
  let viewElements = $( "[view]" );

  viewElements.each( (index, element) => {
    let $element = $( element );
    let path = $element.attr( "view" );

    $element.load( path, (data, log) => {
      if ( log === "error" ) {
        throw new Error( "SU-Error: " + path + " - Not found" );
      }
    });
  });
};

export default importView;
