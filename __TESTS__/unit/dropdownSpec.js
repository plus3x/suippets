import $ from 'jquery-slim'
import dropdown from '../../app/js/components/dropdown.js'

describe('Dropdown Spec', () => {
  beforeEach(() => {
    const dropdownMarkup = $(
      `
        <div dropdown class="dropdown">
          <button dropdown-target class="btn" > </button>
          <div dropdown-content class="dropdown-content"> </div>
        </div><div dropdown class="dropdown">
          <button dropdown-target class="btn" > </button>
          <div dropdown-content class="dropdown-content"> </div>
        </div>
      `
    )

    dropdown.all = dropdownMarkup
    dropdown.contents = dropdownMarkup.find('[dropdown-content]')
    dropdown.targets = dropdownMarkup.find('[dropdown-target]')

    dropdown.init()
  })

  it('should add .dropdown-activated', () => {
    expect(dropdown.contents).not.toHaveClass('dropdown-activated')

    dropdown.activePanel(dropdown.contents)

    expect(dropdown.contents).toHaveClass('dropdown-activated')
  })

  it('should remove .dropdown-activated', () => {
    dropdown.activePanel(dropdown.contents)

    expect(dropdown.contents).toHaveClass('dropdown-activated')

    dropdown.removePanels(dropdown.contents)

    expect(dropdown.contents).not.toHaveClass('dropdown-activated')
  })

  it('when i click on #1 dropdown-title must activate the #1 dropdown-content, and deactivate the others', () => {
    dropdown.targets[ 0 ].click()
    expect(dropdown.contents[ 0 ]).toHaveClass('dropdown-activated')
    expect(dropdown.contents[ 1 ]).not.toHaveClass('dropdown-activated')
  })

  it('when i click on #2 dropdown-title must activate the #2 dropdown-content, and deactivate the others', () => {
    dropdown.targets[ 1 ].click()
    expect(dropdown.contents[ 1 ]).toHaveClass('dropdown-activated')
    expect(dropdown.contents[ 0 ]).not.toHaveClass('dropdown-activated')
  })
})
