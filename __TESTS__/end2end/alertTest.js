require('dotenv').config({ silent: true })

const sauce = require('../sauce')

module.exports = {
  'Alert: Alert page': client => {
    client
      .url(process.env.SAUCE_HOST)
      .waitForElementVisible('body', 1000)
      .resizeWindow(1100, 1000)
      .assert.title('Suippets')
      .pause(300)
      .click("a[href*='/pages/alert.html']")
      .pause(300)
      .assert.containsText('.page-title', 'Alert')
  },

  'Alert: close': client => {
    client
      .click('.alert-danger [alert-close]').pause(300)
      .click('.alert-info [alert-close]').pause(300)
      .click('.alert-success [alert-close]').pause(300)
      .click('.alert-warnning [alert-close]').pause(300)
      .assert.hidden('.alert-danger')
      .assert.hidden('.alert-info')
      .assert.hidden('.alert-success')
      .assert.hidden('.alert-warnning')
      .pause(300)
      .end()
  },

  tearDown: sauce
}
