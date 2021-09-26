import { render, screen } from 'utils/test-utils'

import mock from 'components/PostItem/mock'
import PostTemplate from '.'

jest.mock('components/Post', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Post"></div>
    }
  }
})

describe('<PostTemplate />', () => {
  it('should render post', () => {
    render(<PostTemplate {...mock} />)

    expect(screen.getByTestId('Mock Post')).toBeInTheDocument()
  })
})
