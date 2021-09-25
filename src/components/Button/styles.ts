import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = {
  disabled?: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

const wrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    height: 4.5rem;
    font-size: ${theme.font.content.regular};
    font-weight: ${theme.font.weights.medium};
    line-height: ${theme.font.content.xxlarge};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  disabled: (theme: DefaultTheme) => css`
    &:disabled {
      cursor: not-allowed;
      background: ${theme.colors.neutral3};
      border: 0.1rem solid ${theme.colors.neutral5};
      color: ${theme.colors.disabled};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: ${theme.colors.main};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    transition: background ${theme.transition.default},
      opacity ${theme.transition.default};
    text-decoration: none;

    :focus:not(:focus-visible) {
      outline: none;
    }

    &:focus {
      outline-color: ${theme.colors.white};
      box-shadow: 0px 0px 25px ${theme.colors.mainDark};
    }

    &:hover {
      background: ${theme.colors.mainDark};
    }

    span {
      display: flex;
      align-items: center;
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${fullWidth && wrapperModifiers.fullWidth()};
    ${disabled && wrapperModifiers.disabled(theme)};
  `}
`
