import { render, screen } from 'utils/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    render(<Button>Subscribe</Button>)

    expect(screen.getByRole('button', { name: /Subscribe/i })).toHaveStyle({
      height: '4.5rem',
      padding: '0.8rem 2.4rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Subscribe</Button>)

    expect(screen.getByRole('button', { name: /Subscribe/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Participar agora
      </Button>
    )

    expect(
      screen.getByRole('link', { name: /participar agora/i })
    ).toHaveAttribute('href', '/link')
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Subscribe</Button>)

    expect(screen.getByRole('button', { name: /subscribe/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
