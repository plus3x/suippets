import $ from 'jquery-slim'
import expander from './components/expander.js'
import modal from './components/modal.js'
import tabs from './components/tabs.js'
import dropdown from './components/dropdown.js'
import drawer from './components/drawer.js'
import alertmsg from './components/alertmsg.js'
import syntax from './syntax.js'
import notification from './components/notification.js'
import uploadButton from './components/upload-button.js'

$(() => {
  expander.init()
  dropdown.init()
  modal.init()
  tabs.init()
  drawer.init()
  alertmsg.init()
  notification.init()
  uploadButton.init()
})

// Mobile menu
$('.open-menu').on('click', () => {
  $('.sidebar').toggleClass('toggle-sidebar')
})

// Usage notification
$('[notification-info]').on('click', () => {
  notification.create('Info message...', 'notification-info')
})

$('[notification-error]').on('click', () => {
  notification.create('Error message...', 'notification-error')
})

$('[notification-warnning]').on('click', () => {
  notification.create('Warnning message...', 'notification-warnning')
})

$('[notification-success]').on('click', () => {
  notification.create('Success message...', 'notification-success')
})

$('[notification-normal]').on('click', () => {
  notification.create('Normal message...', 'notification-normal')
})

syntax()
