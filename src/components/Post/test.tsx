import mock from 'components/PostItem/mock'
import { render, screen } from 'utils/test-utils'

import Post from '.'

describe('<Post />', () => {
  it('should render correctly', () => {
    render(<Post {...mock} />)

    expect(
      screen.getByRole('heading', { name: mock.title })
    ).toBeInTheDocument()
    expect(
      screen.getAllByText(
        /lorem in reprehenderit in voluptate velit esse quam nihil molestiae consequatur/i
      )
    ).toHaveLength(3)
  })
})
