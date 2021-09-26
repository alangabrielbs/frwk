import styled, { css } from 'styled-components'
import { Menu, X } from 'react-feather'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2rem);
    -webkit-backdrop-filter: blur(2rem);
    border-bottom: 1px solid ${theme.colors.neutral13};
  `}
`

export const MenuDesktop = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.navBarHeight};
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 ${theme.spacings.small};

    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    height: 2.4rem;
    width: 2.4rem;
    color: ${theme.colors.white};
    cursor: pointer;
    transition: opacity ${theme.transition.default};

    &:hover {
      opacity: 0.5;
    }

    &:focus {
      outline-color: ${theme.colors.white};
    }
  `}
`

export const MenuIcon = styled(Menu)``

export const CloseIcon = styled(X)``

type MobileMenuProps = {
  isOpen?: boolean
}

export const MenuMobile = styled.nav<MobileMenuProps>`
  ${({ theme, isOpen }) => css`
    height: calc(100vh - ${theme.navBarHeight});
    position: fixed;
    top: ${theme.navBarHeight};
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${theme.layers.menu};
    transition: opacity ${theme.transition.default};
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    background: ${theme.colors.backgroundDark};
  `}
`

export const MenuMobileContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} ${theme.spacings.small};
    height: 100%;
  `}
`

export const Label = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.content.large};
    line-height: 2%.1rem;
    color: ${theme.colors.secondaryText};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    display: inline-flex;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.heading.xsmall};
    line-height: 2.8rem;
    text-decoration: none;
    margin-bottom: ${theme.spacings.medium};

    color: ${theme.colors.white};

    span {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
