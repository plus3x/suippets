require( 'dotenv' ).config( { silent: true } );

const sauce = require( '../sauce' );

module.exports = {
  "Responsive: initial state": client => {
    client
      .url( process.env.SAUCE_HOST )
      .waitForElementVisible( "body", 1000 )
      .resizeWindow( 1000, 1000 )
      .assert.cssProperty( ".header", "display", "none" )
  },

  "Responsive: resize window's with to 320px": client => {
    client
      .resizeWindow( 320, 1000 )
      .assert.cssProperty( ".header", "display", "block" )
      .assert.elementPresent( ".open-menu" )
  },

  "Responsive: open menu": client => {
    client
      .click( ".open-menu" )
      .assert.cssClassPresent( "section.sidebar", "toggle-sidebar" )
  },

  "Responsive: close menu": client => {
    client
      .click( ".open-menu" )
      .assert.cssClassNotPresent( "section.sidebar", "toggle-sidebar" )
      .end()
  },

  tearDown: sauce
};