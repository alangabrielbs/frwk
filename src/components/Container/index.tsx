import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${theme.grid.gutter};

    /* ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} ${theme.grid.gutter};
    `} */
  `}
`
