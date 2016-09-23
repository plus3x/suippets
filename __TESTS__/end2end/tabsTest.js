require( 'dotenv' ).config( { silent: true } );

const sauce = require( '../sauce' );

module.exports = {
  "Tabs: Verify elements at initial state": client => {
    client
      .url( process.env.SAUCE_HOST )
      .waitForElementVisible( "body", 1000 )
      .resizeWindow( 1000, 1000 )
      .assert.title( "Suippets" )

      .pause( 300 )

      .click( "a[href*='/pages/tabs.html']" )

      .pause( 300 )

      .assert.containsText( ".page-title", "Tabs" )

      .assert.cssClassPresent( "[tab-title='1']", "tab-title-activated" )
      .assert.cssClassNotPresent( "[tab-title='2']", "tab-title-activated" )
      .assert.cssClassNotPresent( "[tab-title='2']", "tab-title-activated" )

      .assert.visible( "[tab-content='1']" )
      .assert.hidden( "[tab-content='2']" )
      .assert.hidden( "[tab-content='3']" )
  },

  "Tabs: Active tab #2" : client => {
    client
      .pause( 300 )

      .click( "[tab-title='2']" )
      .assert.cssClassPresent( "[tab-title='2']", "tab-title-activated" )
      .assert.cssClassNotPresent( "[tab-title='1']", "tab-title-activated" )
      .assert.cssClassNotPresent( "[tab-title='3']", "tab-title-activated" )

      .assert.visible( "[tab-content='2']" )
      .assert.hidden( "[tab-content='1']" )
      .assert.hidden( "[tab-content='3']" )
 },

  "Tabs: Active tab #3" : client => {
    client
      .pause( 300 )

      .click( "[tab-title='3']" )
      .assert.cssClassPresent( "[tab-title='3']", "tab-title-activated" )
      .assert.cssClassNotPresent( "[tab-title='1']", "tab-title-activated" )
      .assert.cssClassNotPresent( "[tab-title='2']", "tab-title-activated" )

      .assert.visible( "[tab-content='3']" )
      .assert.hidden( "[tab-content='1']" )
      .assert.hidden( "[tab-content='2']" )
  },

  "Tabs: Active tab #1" : client => {
    client
      .pause( 300 )

      .click( "[tab-title='1']" )
      .assert.cssClassPresent( "[tab-title='1']", "tab-title-activated" )
      .assert.cssClassNotPresent( "[tab-title='2']", "tab-title-activated" )
      .assert.cssClassNotPresent( "[tab-title='3']", "tab-title-activated" )

      .assert.visible( "[tab-content='1']" )
      .assert.hidden( "[tab-content='2']" )
      .assert.hidden( "[tab-content='3']" )

      .end()
  },

  tearDown: sauce
};