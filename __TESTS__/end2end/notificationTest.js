require( 'dotenv' ).config( { silent: true } );

const sauce = require( '../sauce' );

module.exports = {
  "Notification: Notification page": client => {
    client
      .resizeWindow( 1000, 1000 )
      .url( process.env.SAUCE_HOST )
      .waitForElementVisible( "body", 1000 )
      .pause( 300 )
      .assert.title( "Suippets" )
      .click( "a[href*='/pages/notification.html']" )
      .pause( 300 )
      .assert.containsText( ".page-title", "Notification" )
  },

  "Notification: initial state": client => {
    client
      .assert.visible( "[notification-wrapper]" )
  },

  "Notification: push new notification": client => {
    client
      .click( "[notification-info]" )
      .pause( 300 )
      .assert.elementPresent( ".notification" )
      .assert.visible( ".notification" )
      .pause( 5100 )
      .assert.elementNotPresent( ".notification" )
  },

  "Notification: remove notification with a click": client => {
    client
      .click( "[notification-info]" )
      .pause( 300 )
      .assert.elementPresent( ".notification" )
      .click( ".notification" )
      .assert.elementNotPresent( ".notification" )
      .pause( 300 )
      .end()
  },

  tearDown: sauce
};