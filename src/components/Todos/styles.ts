import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    width: 100%;
    max-width: 42.5rem;
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.border};
    background: ${theme.colors.backgroundSecondary};
    margin: 0 auto;
    margin-bottom: 10rem;

    padding: ${theme.spacings.medium} ${theme.spacings.small};
  `};
`

export const Header = styled.header`
  text-align: center;
`

export const Name = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.heading.xsmall};
    line-height: 2.8rem;
    color: ${theme.colors.white};

    b {
      font-weight: ${theme.font.weight.bold};
      background-image: ${theme.colors.gradients.primary};
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  `}
`

export const NumberOfTodos = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.content.small};
    line-height: 1.7rem;
    color: ${theme.colors.white};
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const Todos = styled.ul`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    list-style: none;
  `}
`
