require( 'dotenv' ).config( { silent: true } );

const sauce = require( '../sauce' );

module.exports = {
  "Modal: open and close with [modal-close]" : client => {
    client
      .url( process.env.SAUCE_HOST )
      .waitForElementVisible( "body", 1000 )

      .pause(300)

      .assert.title( "Suippets" )
      .click( "a[href*='/pages/modal.html']" )

      .click( "button[modal-target='1']" )
      .assert.elementPresent( "[modal-wrapper='1']")
      .assert.containsText( ".modal-activated .modal-content h1", "Modal 1" )
      .click( "[modal-wrapper='1'] button[modal-close]" )

      .pause(300)

      .click( "button[modal-target='2']" )
      .assert.elementPresent( "[modal-wrapper='2']")
      .assert.containsText( ".modal-activated .modal-content h1", "Modal 2" )
      .click( "[modal-wrapper='2'] button[modal-close]" )

      .end();
  },

  tearDown: sauce
};