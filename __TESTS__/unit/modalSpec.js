import $ from 'jquery-slim'
import modal from '../../app/js/components/modal.js'

describe('Modal spec', () => {
  const modalTargetMarkup = $(
    `
      <button modal-target="1"> </button>
    `
  )

  const modalWrapperMarkup = $(
    `
      <div modal-wrapper="1" class="modal-wrapper">
        <div modal-content class="modal-content">
          <button modal-close type="button"> </button>
        </div>
      </div><div modal-wrapper="2" class="modal-wrapper">
        <div modal-content class="modal-content">
          <button modal-close type="button"> </button>
        </div>
      </div>
    `
  )

  modal.wrappers = modalWrapperMarkup
  modal.targets = modalTargetMarkup

  it('At Initial state, should add {modal-hidden} class', () => {
    expect(modal.wrappers).not.toHaveClass('modal-hidden')

    modal.init()

    expect(modal.wrappers).toHaveClass('modal-hidden')
  })

  it('When modal is opened, should add {.modal-active} class and remove {.modal-hidden} class', () => {
    expect(modal.wrappers).not.toHaveClass('modal-activated')
    expect(modal.wrappers).toHaveClass('modal-hidden')

    modal.show(modal.wrappers)

    expect(modal.wrappers).toHaveClass('modal-activated')
    expect(modal.wrappers).not.toHaveClass('modal-hidden')
  })

  it('When modal is Hidden, should remove {.modal-actived} class and add {.modal-hidden} class', () => {
    expect(modal.wrappers).toHaveClass('modal-activated')
    expect(modal.wrappers).not.toHaveClass('modal-hidden')

    modal.hide(modal.wrappers)

    expect(modal.wrappers).not.toHaveClass('modal-activated')
    expect(modal.wrappers).toHaveClass('modal-hidden')
  })

  it('When i click on target(#1) shoud to open the corresponding wrapper(#1)', () => {
    modal.targets.click()

    expect(modal.wrappers[ 0 ]).toHaveClass('modal-activated')
    expect(modal.wrappers[ 0 ]).not.toHaveClass('modal-hidden')

    expect(modal.wrappers[ 1 ]).toHaveClass('modal-hidden')
    expect(modal.wrappers[ 1 ]).not.toHaveClass('modal-activated')
  })
})
