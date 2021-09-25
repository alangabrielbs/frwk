import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-height: calc(100vh - ${theme.navBarHeight});
    position: relative;
    top: ${theme.navBarHeight};
  `}
`
