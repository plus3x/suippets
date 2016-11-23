import $ from 'jquery-slim'
import expander from '../../app/js/components/expander.js'

describe('Expander spec', () => {
  beforeEach(() => {
    const expandersMarkup = $(
      `
        <div expander>
          <p expander-title > </p>
          <div expander-content > </div>
        </div>
      `
    )

    expander.expanders = expandersMarkup

    expander.init()
  })

  it('Should add .expander-title-activated when i click on [expander-title]', () => {
    let expanderTitle = expander.expanders.find('[expander-title]')

    expect(expanderTitle).not.toHaveClass('expander-title-activated')

    expanderTitle.click()

    expect(expanderTitle).toHaveClass('expander-title-activated')

    expanderTitle.click()

    expect(expanderTitle).not.toHaveClass('expander-title-activated')
  })
})
