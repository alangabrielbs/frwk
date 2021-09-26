import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    padding-bottom: ${theme.spacings.xxxlarge};
  `}
`

export const LinkBack = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.neutral8};
    margin-bottom: ${theme.spacings.small};

    svg {
      margin-right: 0.5rem;
    }
  `}
`

export const Header = styled.header``

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.heading.regular};
    line-height: 4rem;
    background-image: ${theme.colors.gradients.primary};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  `}
`

export const Divider = styled.hr`
  ${({ theme }) => css`
    border: 0;
    border-bottom: 1px solid ${theme.colors.divider};
  `}
`

export const WrapperInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const Author = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.content.small};
    line-height: 1.7rem;
    color: ${theme.colors.neutral8};
  `}
`

export const Time = styled.time`
  ${({ theme }) => css`
    font-size: ${theme.font.content.small};
    line-height: 1.7rem;
    color: ${theme.colors.neutral8};
  `}
`

export const Content = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.content.xlarge};
    line-height: 3rem;
    color: rgba(255, 255, 255, 0.9);
    margin-top: ${theme.spacings.xlarge};
  `}
`
