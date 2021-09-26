import mock from 'components/Todos/mock'
import { render, screen } from 'utils/test-utils'

import TodoTemplate from '.'

jest.mock('components/NavBar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock NavBar"></div>
    }
  }
})

jest.mock('components/Todos', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Todos"></div>
    }
  }
})

describe('<Post />', () => {
  it('should render post', () => {
    render(<TodoTemplate {...mock} />)

    expect(screen.getByTestId('Mock NavBar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Todos')).toBeInTheDocument()
  })
})
