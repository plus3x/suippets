import $ from 'jquery-slim'
import notification from '../../app/js/components/notification.js'

describe('Notification spec', () => {
  notification.wrapper = $('<div notification-wrapper></div>')

  it('should add {.notification-wrapper} class', () => {
    expect(notification.wrapper).not.toHaveClass('notification-wrapper')

    notification.init()

    expect(notification.wrapper).toHaveClass('notification-wrapper')
  })

  it('should create new element', () => {
    const notifyer = notification.create('New notifyer', 'style-class')

    expect(notifyer).toHaveClass('notification')
    expect(notifyer).toHaveClass('style-class')
    expect(notifyer).toContainText('New notifyer')
    expect(notifyer).toBeVisible()

    expect(notification.wrapper).toContainElement('.notification')

    notifyer.click()
  })

  it('When i click on notification it should be removed', () => {
    const notifyer = notification.create('New notifyer', 'style-class')
    expect(notification.wrapper).toContainElement('.notification')
    notifyer.click()

    expect(notification.wrapper).not.toContainElement('.notification')
  })
})
