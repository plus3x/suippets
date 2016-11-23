require('dotenv').config({ silent: true })

const sauce = require('../sauce')

module.exports = {
  'Offcanvas: Offcanvas page': client => {
    client
      .url(process.env.SAUCE_HOST)
      .waitForElementVisible('body', 1000)
      .resizeWindow(1000, 1000)
      .assert.title('Suippets')
      .pause(300)
      .click("a[href*='/pages/offcanvas.html']")
      .pause(300)
      .assert.containsText('.page-title', 'Offcanvas')
  },

  'Offcanvas: Initial state of wrappers': client => {
    client
      .pause(300)
      .assert.hidden("[offcanvas-wrapper='1']")
      .assert.hidden("[offcanvas-wrapper='2']")
  },

  'Offcanvas: open first of canvas': client => {
    client
      .click("[offcanvas-target='1']")
      .assert.visible("[offcanvas-wrapper='1']")
      .assert.cssClassPresent("[offcanvas-wrapper='1']", 'offcanvas-activated')
      .pause(300)
  },

  'Offcanvas: close first offcanvas': client => {
    client
      .click("[offcanvas-wrapper='1']")
      .pause(300)
      .assert.hidden("[offcanvas-wrapper='1']")
      .assert.cssClassNotPresent("[offcanvas-wrapper='1']", 'offcanvas-activated')
  },

  'Offcanvas: close first offcanvas with ESCAPE key': client => {
    client
      .click("[offcanvas-target='1']")
      .pause(300)
      .assert.visible("[offcanvas-wrapper='1']")
      .keys([ client.Keys.ESCAPE ])
      .pause(300)
      .assert.hidden("[offcanvas-wrapper='1']")
      .end()
  },

  tearDown: sauce
}
