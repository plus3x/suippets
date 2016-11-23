import $ from 'jquery-slim'
import alertmsg from '../../app/js/components/alertmsg.js'

describe('Alert spec', () => {
  beforeEach(() => {
    const alertStructure = $(
      `
        <div>
          <span alert-close> </span>
        </div>
      `
    )

    let button = alertStructure.find('[alert-close]')

    alertmsg.buttons = button

    alertmsg.init()
  })

  it('should add ".alert-remove" in alert structure', () => {
    expect(alertmsg.buttons.parent()).not.toHaveClass('alert-remove')

    alertmsg.removeAlert(alertmsg.buttons)

    expect(alertmsg.buttons.parent()).toHaveClass('alert-remove')
  })

  it('should hide the alert', () => {
    expect(alertmsg.buttons.parent()).not.toHaveCss({ 'display': 'none' })

    alertmsg.hideAlert(alertmsg.buttons)

    expect(alertmsg.buttons.parent()).toHaveCss({ 'display': 'none' })
  })

  it('should remove alerts when i click on .alert-remove', () => {
    expect(alertmsg.buttons.parent()).not.toHaveClass('alert-remove')

    alertmsg.buttons.click()

    expect(alertmsg.buttons.parent()).toHaveClass('alert-remove')
  })
})
