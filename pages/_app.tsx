import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as gtag from '@lib/gtag';
import NavBar from '@components/Navigation/NavBar';
import { lightTheme, darkTheme } from '../theme';
import '../styles/sidebar.css';
import { DarkMode } from '@lib/dark-mode';
import Switch from '@components/Switch';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from '@components/Navigation/Footer';

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  // Hooks
  const router = useRouter();

  // States
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Consts
  const theme = darkMode ? darkTheme : lightTheme;
  const path = router.asPath.toString().toLowerCase();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
      <DarkMode.Provider value={{ darkMode, setDarkMode }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* Google analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GTM_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GTM_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <Head>
            <link rel="icon" href="favicon.svg" />
            <link rel="shortcut icon" href="favicon.png" />
            <link rel="mask-icon" href="favicon.svg" />
            <link rel="apple-touch-icon" href="favicon.png" />
            <title>Albert-Andrei Moldovanu</title>
          </Head>

          <ParallaxProvider>
            <NavBar />
            <Component {...pageProps} />
            {!path.includes('contact') && <Footer />}
            <Switch checked={darkMode} onChange={setDarkMode} />
          </ParallaxProvider>
        </ThemeProvider>
      </DarkMode.Provider>
  );
}

export default MyApp;
