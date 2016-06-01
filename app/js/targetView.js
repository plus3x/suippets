/* Target view

@inset-view - file path to include
@in-container - html container
...
<button insert-view="path/to/file.html" in-container=".container">
  Click-me!
</button>
*/

import $ from "jquery";

const targetView = function() {
  let targets = $("[insert-view]");

  targets.each( ( index, element ) => {
    let $element = $( element );
    let view = $element.attr( "insert-view" );
    let container = $element.attr( "in-container" );

    $element.on( "click", () => {
      $( container ).load( view );
    });
  });
};

export default targetView;
