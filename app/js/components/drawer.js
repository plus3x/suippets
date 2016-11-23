import $ from 'jquery-slim'

// ES5 support

var drawer = {
  targets: $('[drawer-target]'),
  wrappers: $('[drawer-wrapper]'),
  ESC: 27
}

drawer.deatch = function () {
  drawer
    .wrappers
      .detach()
      .addClass('drawer-hidden')
      .appendTo('html')
}

drawer.show = function (wrapper) {
  wrapper.toggleClass('drawer-hidden drawer-activated')
  drawer.stopScroll()
}

drawer.hide = function () {
  drawer
    .wrappers
      .removeClass('drawer-activated')
      .addClass('drawer-hidden')

  drawer.startScroll()
}

drawer.hideByKey = function () {
  $(window).on('keydown', function (event) {
    if (event.keyCode === drawer.ESC) {
      drawer.hide()
    }
  })
}

drawer.stopScroll = function () {
  var scrollPosition = $(document).scrollTop()

  $(window).on('scroll', function () {
    $(this).scrollTop(scrollPosition)
  })
}

drawer.startScroll = function () {
  $(window).off('scroll')
}

drawer.init = function () {
  drawer.deatch()

  drawer.hideByKey()

  drawer.targets.each(function (index, element) {
    var target = $(element)
    var targetIndex = target.attr('drawer-target')
    var wrapper = $('[drawer-wrapper=' + targetIndex + ']')
    var content = wrapper.find('[drawer-content]')

    target.on('click', function () {
      drawer.show(wrapper)
    })

    content.on('click', function (event) {
      event.stopPropagation()
    })

    wrapper.on('click', function () {
      drawer.hide()
    })
  })
}

// Usage - drawer.init();

export default drawer
