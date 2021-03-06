import styled, { css } from 'styled-components'

import { Wrapper as WrapperPostsList } from 'components/PostsList/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    top: ${theme.navBarHeight};

    ${WrapperPostsList} {
      padding-bottom: ${theme.spacings.xxxlarge};
    }
  `}
`
