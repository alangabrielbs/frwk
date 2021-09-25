import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 67rem;
    padding: ${theme.spacings.xxxlarge} 0;
    background: ${theme.colors.backgroundDark};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.heading.large};
    line-height: 5.2rem;
    background-image: ${theme.colors.gradients.primary};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.heading.xxxlarge};
      line-height: 8.5rem;
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.content.large};
    line-height: 2.1rem;
    margin-top: ${theme.spacings.xsmall};

    color: ${theme.colors.secondaryText};

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.small};
    `}
  `}
`
