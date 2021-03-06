import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { render, screen } from 'utils/test-utils'

import PostsList from '.'
import mock from './mock'

describe('<PostsList />', () => {
  it('should render the heading', () => {
    render(<PostsList posts={mock} />)

    mockAllIsIntersecting(false)

    expect(
      screen.getByRole('heading', { name: /qui est esse/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
