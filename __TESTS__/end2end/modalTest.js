require( 'dotenv' ).config( { silent: true } );

const sauce = require( '../sauce' );

module.exports = {
  "Modal: Modal page" : client => {
    client
      .resizeWindow( 1000, 1000 )
      .url( process.env.SAUCE_HOST )
      .waitForElementVisible( "body", 1000 )
      .pause( 300 )
      .assert.title( "Suippets" )
      .click( "a[href*='/pages/modal.html']" )
      .pause( 300 )
      .assert.containsText( ".page-title", "Modal" )
  },

  "Modal: Initial state of wrappers": client => {
    client
      .assert.hidden( "[modal-wrapper='1']" )
      .assert.cssClassPresent( "[modal-wrapper='1']", "modal-hidden" )
      .assert.hidden( "[modal-wrapper='2']" )
      .assert.cssClassPresent( "[modal-wrapper='2']", "modal-hidden" )
      .pause( 300 )
  },

  "Modal: Open first modal": client => {
    client
      .click( "[modal-target='1']" )
      .assert.visible( "[modal-wrapper='1']" )
      .assert.cssClassPresent( "[modal-wrapper='1']", "modal-activated" )
      .pause( 300 )
  },

  "Modal: Close first modal with [modal-close]": client => {
    client
      .click( ".modal-activated [modal-close]" )
      .pause( 300 )
      .assert.hidden( "[modal-wrapper='1']" )
  },

  "Modal: Close first modal with ESCAPE key": client => {
    client
      .click( "[modal-target='1']" )
      .pause( 300 )
      .assert.visible( "[modal-wrapper='1']" )
      .keys( [ client.Keys.ESCAPE ] )
      .pause( 300 )
      .assert.hidden( "[modal-wrapper='1']" )
      .end()
  },

  tearDown: sauce
};