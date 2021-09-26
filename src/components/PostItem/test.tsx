import { render, screen } from 'utils/test-utils'

import PostItem from '.'
import mock from './mock'

describe('<PostItem />', () => {
  it('should render correctly', () => {
    const { container } = render(<PostItem {...mock} />)

    expect(
      screen.getByRole('heading', { name: mock.title })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
