import styled, { css } from 'styled-components'

import { Label } from 'components/Checkbox/styles'

type TodoProps = {
  isChecked: boolean
}

export const Todo = styled.li<TodoProps>`
  ${({ theme, isChecked }) => css`
    & + & {
      margin-top: ${theme.spacings.xsmall};
    }

    ${isChecked &&
    css`
      ${Label} {
        text-decoration: line-through;
        opacity: 0.5;
      }
    `}
  `}
`
