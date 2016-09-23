require( 'dotenv' ).config( { silent: true } );

const sauce = require( '../sauce' );

module.exports = {
  "Expander: open and close": client => {
    client
      .url( process.env.SAUCE_HOST )
      .waitForElementVisible( "body", 1000 )
      .resizeWindow( 1000, 1000 )
      .assert.title( "Suippets" )

      .pause( 300 )

      .click( "a[href*='/pages/expander.html']" )
      .assert.containsText( ".page-title", "Expander" )
      .assert.hidden( ".expander-content" )

      .click( "[expander-title]" )
      .assert.cssClassPresent(".expander-title", "expander-title-activated")
      .assert.visible( ".expander-content" )

      .click( "[expander-title]" )
      .assert.cssClassNotPresent(".expander-title", "expander-title-activated")
      .assert.hidden( ".expander-content" )

      .end();
  },

  tearDown: sauce
};