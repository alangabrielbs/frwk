import mock from 'components/PostsList/mock'
import { render, screen } from 'utils/test-utils'
import HomeTemplate from '.'

jest.mock('components/NavBar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock NavBar"></div>
    }
  }
})

jest.mock('components/Hero', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Hero"></div>
    }
  }
})

jest.mock('components/PostsList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PostsList"></div>
    }
  }
})

const props = {
  posts: mock,
  hero: {
    title: 'Thoughts, Notes & Tutorials',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta.'
  }
}

describe('<Home />', () => {
  it('should render navbar, hero and postlist', () => {
    render(<HomeTemplate {...props} />)

    expect(screen.getByTestId('Mock NavBar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Hero')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PostsList')).toBeInTheDocument()
  })
})
