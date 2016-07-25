import $ from "jquery-slim";
import hljs from "highlight.js";
import superagent from "superagent";

function syntax() {
  let codeWrapper = $( "[code]" );

  hljs.configure({
    "languages": [ "js", "html", "css", "scss", "xml" ],
    "useBR": "true"
  });

  hljs.initHighlightingOnLoad();

  codeWrapper.each( ( index, obj ) => {
    let element = $( obj );
    let path = element.attr( "code" );

    superagent.get( path ).end( ( err, res ) => {
      element.html( hljs.highlightAuto( res.text ).value );
    });
  });
}

export default syntax;
