require('dotenv').config({ silent: true })

const sauce = require('../sauce')

module.exports = {
  'Dropdown: Dropdown page': client => {
    client
      .url(process.env.SAUCE_HOST)
      .waitForElementVisible('body', 1000)
      .resizeWindow(1000, 1000)
      .assert.title('Suippets')
      .pause(300)
      .click("a[href*='/pages/dropdown.html']")
      .pause(300)
      .assert.containsText('.page-title', 'Dropdown')
  },

  'Dropdown: show first dropdown': client => {
    client
      .pause(300)
      .click('.dropdown:nth-of-type(1) button.btn')
      .assert.hidden('.dropdown:nth-of-type(2) .dropdown-content')
      .assert.visible('.dropdown:nth-of-type(1) .dropdown-content')
      .assert.cssClassPresent('.dropdown:nth-of-type(1) .dropdown-content', 'dropdown-activated')
  },

  'Dropdown: show the second dropdown and hide the first dropdown': client => {
    client
      .click('.dropdown:nth-of-type(2) button.btn')
      .pause(100)
      .assert.hidden('.dropdown:nth-of-type(1) .dropdown-content')
      .assert.visible('.dropdown:nth-of-type(2) .dropdown-content')
      .assert.cssClassPresent('.dropdown:nth-of-type(2) .dropdown-content', 'dropdown-activated')
      .end()
  },

  tearDown: sauce
}
