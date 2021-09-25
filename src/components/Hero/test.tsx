import { render, screen } from 'utils/test-utils'

import Hero from '.'

const props = {
  title: 'Thoughts, Notes & Tutorials',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta.'
}

describe('<Hero />', () => {
  it('should render the heading', () => {
    const { container } = render(<Hero {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByText(props.description, { selector: 'p' })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
