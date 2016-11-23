import $ from 'jquery-slim'
import drawer from '../../app/js/components/drawer.js'

describe('Drawer Spec', () => {
  const drawerTargetMarkupt = $(
    `
      <button drawer-target="1"> </button>
    `
  )

  const drawerWrapperMarkup = $(
    `
      <div drawer-wrapper="1" class="drawer">
        <div drawer-content class="drawer-content">
        </div>
      </div><div drawer-wrapper="2" class="drawer">
        <div drawer-content class="drawer-content">
        </div>
      </div>
    `
  )

  drawer.targets = drawerTargetMarkupt
  drawer.wrappers = drawerWrapperMarkup

  it('at initial state, should add {drawer-hidden} class in wrapper', () => {
    expect(drawer.wrappers).not.toHaveClass('drawer-hidden')

    drawer.init()

    expect(drawer.wrappers).toHaveClass('drawer-hidden')
  })

  it('when show drawer, should add class {.drawer-activated} and remove {.drawer-hidden}', () => {
    expect(drawer.wrappers).not.toHaveClass('drawer-activated')
    expect(drawer.wrappers).toHaveClass('drawer-hidden')

    drawer.show(drawer.wrappers)

    expect(drawer.wrappers).not.toHaveClass('drawer-hidden')
    expect(drawer.wrappers).toHaveClass('drawer-activated')
  })

  it('when hide drawer, should remove class {.drawer-activated} and add {.drawer-hidden}', () => {
    expect(drawer.wrappers).not.toHaveClass('drawer-hidden')
    expect(drawer.wrappers).toHaveClass('drawer-activated')

    drawer.hide(drawer.wrappers)

    expect(drawer.wrappers).not.toHaveClass('drawer-activated')
    expect(drawer.wrappers).toHaveClass('drawer-hidden')
  })

  it('when i click on target(#1) should open the corresponding wrapper(#1)', () => {
    drawer.targets.click()

    expect(drawer.wrappers[ 0 ]).toHaveClass('drawer-activated')
    expect(drawer.wrappers[ 0 ]).not.toHaveClass('drawer-hidden')

    expect(drawer.wrappers[ 1 ]).not.toHaveClass('drawer-activated')
    expect(drawer.wrappers[ 1 ]).toHaveClass('drawer-hidden')
  })
})
