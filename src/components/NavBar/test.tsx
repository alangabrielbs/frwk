import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent } from 'utils/test-utils'

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

    it('should open/close the mobile menu with keyboard', () => {
      expect(mobileMenu.getAttribute('aria-hidden')).toBe('true')
      expect(mobileMenu).toHaveStyle({ opacity: 0 })

      fireEvent.keyPress(screen.getByLabelText(/open menu/i), {
        key: 'Enter',
        code: 'Enter',
        charCode: 13
      })
      expect(mobileMenu.getAttribute('aria-hidden')).toBe('false')
      expect(mobileMenu).toHaveStyle({ opacity: 1 })

      fireEvent.keyPress(screen.getByLabelText(/close menu/i), {
        key: '',
        code: 'Space',
        charCode: 32
      })
      expect(mobileMenu.getAttribute('aria-hidden')).toBe('true')
      expect(mobileMenu).toHaveStyle({ opacity: 0 })
    })

    it('should do nothing if different key is pressed', () => {
      expect(mobileMenu.getAttribute('aria-hidden')).toBe('true')
      expect(mobileMenu).toHaveStyle({ opacity: 0 })

      fireEvent.keyPress(screen.getByLabelText(/open menu/i), {
        key: 'Tab',
        code: 'Tab',
        charCode: 9
      })

      expect(mobileMenu.getAttribute('aria-hidden')).toBe('true')
      expect(mobileMenu).toHaveStyle({ opacity: 0 })
    })
  })
})
