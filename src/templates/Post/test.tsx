import { render, screen } from 'utils/test-utils'

import mock from 'components/PostItem/mock'
import PostTemplate from '.'

jest.mock('components/NavBar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock NavBar"></div>
    }
  }
})

jest.mock('components/Post', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Post"></div>
    }
  }
})

describe('<Post />', () => {
  it('should render post', () => {
    render(<PostTemplate post={mock} />)

    expect(screen.getByTestId('Mock NavBar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Post')).toBeInTheDocument()
  })
})
