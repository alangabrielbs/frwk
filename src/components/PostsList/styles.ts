import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { InputWrapper } from 'components/TextField/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${InputWrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
      max-width: 72.8rem;
    `}
  `}
`

export const SubTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.content.small};
    line-height: 1.7rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: ${theme.font.weight.regular};
    background-image: ${theme.colors.gradients.primary};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: ${theme.spacings.xsmall};

    span {
      color: initial;
    }
  `}
`
