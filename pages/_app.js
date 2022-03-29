import '../styles/globals.css'
import Layout from '../src/components/layouts/Layout'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/global-style'
import { theme } from '../src/styles/theme'
import { StyledEngineProvider } from '@mui/material/styles'
import { RecoilRoot } from 'recoil'

function MyApp ( { Component, pageProps } ) {
  return (
      <StyledEngineProvider injectFirst>
        <GlobalStyle/>
        <RecoilRoot>
          <Layout>
            <Component { ...pageProps } />
          </Layout>
        </RecoilRoot>
      </StyledEngineProvider>
  )
}

export default MyApp
