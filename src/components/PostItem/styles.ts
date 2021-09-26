import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.divider};

    a {
      text-decoration: none;
    }

    & + & {
      margin-top: ${theme.spacings.medium};
    }

    :hover {
      ${Title} {
        background-image: ${theme.colors.gradients.primary};
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.heading.small};
    line-height: 3.3rem;

    color: ${theme.colors.white};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.content.large};
    line-height: 2rem;
    margin-top: ${theme.spacings.xxsmall};

    color: ${theme.colors.secondaryText};
  `}
`
