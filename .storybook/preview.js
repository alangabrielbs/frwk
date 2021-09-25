import '../.jest/next-image.mock'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/styles/global'
import theme from 'styles/theme'

import { replaceImgPath } from './replace-img'

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      height: '844px',
      width: '375px'
    },
    type: 'mobile'
  },
  desktopHD: {
    name: 'HD Desktop',
    styles: {
      width: '1024px',
      height: '768px'
    }
  },
  desktopFullHD: {
    name: 'Full HD Desktop',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...customViewports
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  replaceImgPath,
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
