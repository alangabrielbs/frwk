import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { SEO } from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color={theme.colors.gradients.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={1}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
