require('dotenv').config({ silent: true })

const sauce = require('../sauce')

module.exports = {
  'Drawer: drawer page': client => {
    client
      .url(process.env.SAUCE_HOST)
      .waitForElementVisible('body', 1000)
      .resizeWindow(1000, 1000)
      .assert.title('Suippets')
      .pause(300)
      .click("a[href*='/pages/drawer.html']")
      .pause(300)
      .assert.containsText('.page-title', 'drawer')
  },

  'Drawer: Initial state of wrappers': client => {
    client
      .pause(300)
      .assert.hidden("[drawer-wrapper='1']")
      .assert.hidden("[drawer-wrapper='2']")
  },

  'Drawer: open first of canvas': client => {
    client
      .click("[drawer-target='1']")
      .assert.visible("[drawer-wrapper='1']")
      .assert.cssClassPresent("[drawer-wrapper='1']", 'drawer-activated')
      .pause(300)
  },

  'Drawer: close first drawer': client => {
    client
      .click("[drawer-wrapper='1']")
      .pause(300)
      .assert.hidden("[drawer-wrapper='1']")
      .assert.cssClassNotPresent("[drawer-wrapper='1']", 'drawer-activated')
  },

  'Drawer: close first drawer with ESCAPE key': client => {
    client
      .click("[drawer-target='1']")
      .pause(300)
      .assert.visible("[drawer-wrapper='1']")
      .keys([ client.Keys.ESCAPE ])
      .pause(300)
      .assert.hidden("[drawer-wrapper='1']")
      .end()
  },

  tearDown: sauce
}
