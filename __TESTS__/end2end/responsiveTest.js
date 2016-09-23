require( 'dotenv' ).config( { silent: true } );

const sauce = require( '../sauce' );

module.exports = {
  "Responsive design": client => {
    client
      .url( process.env.SAUCE_HOST )
      .waitForElementVisible( "body", 1000 )

      .resizeWindow( 1000, 1000 )
      .assert.cssProperty( ".header", "display", "none" )

      .resizeWindow( 320, 1000 )
      .assert.cssProperty( ".header", "display", "block" )
      .assert.elementPresent( ".open-menu" )

      .click( ".open-menu" )
      .assert.cssClassPresent( "section.sidebar", "toggle-sidebar" )

      .click( ".open-menu" )
      .assert.cssClassNotPresent( "section.sidebar", "toggle-sidebar" )

      .end()
  },

  tearDown: sauce
};