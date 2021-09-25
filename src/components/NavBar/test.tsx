import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import NavBar from '.'

describe('<NavBar />', () => {
  it('should render frwk logo', () => {
    render(<NavBar />)

    expect(screen.getByRole('img', { name: /frwk/i })).toBeInTheDocument()
  })

  describe('should handle the open/close mobile menu', () => {
    let mobileMenu: HTMLElement
    beforeEach(() => {
      render(<NavBar />)
      mobileMenu = screen.getByLabelText(/mobile-navigation/i)
    })

    it('should open/close the mobile menu with click', () => {
      expect(mobileMenu.getAttribute('aria-hidden')).toBe('true')
      expect(mobileMenu).toHaveStyle({ opacity: 0 })

      // clicar no botão de abrir o menu e verificar se ele abriu
      userEvent.click(screen.getByLabelText(/open menu/i))
      expect(mobileMenu.getAttribute('aria-hidden')).toBe('false')
      expect(mobileMenu).toHaveStyle({ opacity: 1 })

      // clicar no botão de fechar o menu e verificar se ele fechou
      userEvent.click(screen.getByLabelText(/close menu/i))
      expect(mobileMenu.getAttribute('aria-hidden')).toBe('true')
      expect(mobileMenu).toHaveStyle({ opacity: 0 })
    })
  })
})
