import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    top: ${theme.navBarHeight};
    color: ${theme.colors.white};
  `}
`
