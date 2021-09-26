import { render, screen } from 'utils/test-utils'

import NavBar from '.'

describe('<NavBar />', () => {
  it('should render frwk logo', () => {
    render(<NavBar />)

    expect(screen.getByRole('img', { name: /frwk/i })).toBeInTheDocument()
  })
})
