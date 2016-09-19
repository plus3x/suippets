const testTemplate = ( name ) => `
import $ from "jquery-slim";

describe( "${name} spec", () => {

  it( "First test", () => {
    console.log( Hello! );
  });

});
`
module.exports = testTemplate;