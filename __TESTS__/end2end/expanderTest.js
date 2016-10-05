require( 'dotenv' ).config( { silent: true } );

const sauce = require( '../sauce' );

module.exports = {
  "Expander: Expander pager": client => {
    client
      .url( process.env.SAUCE_HOST )
      .waitForElementVisible( "body", 1000 )
      .resizeWindow( 1000, 1000 )
      .assert.title( "Suippets" )
      .pause( 300 )
      .click( "a[href*='/pages/expander.html']" )
      .pause( 300 )
      .assert.containsText( ".page-title", "Expander" )
  },

  "Expander: open": client => {
    client
      .assert.hidden( ".expander-content" )
      .click( "[expander-title]" )
      .assert.visible( ".expander-content" )
      .assert.cssClassPresent(".expander-title", "expander-title-activated")
  },

  "Exapander: close": client => {
    client
      .click( "[expander-title]" )
      .assert.hidden( ".expander-content" )
      .assert.cssClassNotPresent(".expander-title", "expander-title-activated")
      .end();
  },

  tearDown: sauce
};