import '../styles/globals.css';
import Layout from '../src/components/layouts/Layout';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '../src/styles/global-style';
import {theme} from '../src/styles/theme';
import {StyledEngineProvider} from '@mui/material/styles';

function MyApp({Component, pageProps}) {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>
  );
}

export default MyApp;
