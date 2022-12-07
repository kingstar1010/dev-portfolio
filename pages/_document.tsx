import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GTM_ID } from '@lib/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(
              <>
                <App {...props} />
              </>,
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { styles } = this.props;
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="HTML, CSS, JavaScript" />
          <meta name="author" content="Albert-Andrei Moldovanu" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="author" content="AAMoldovanu®" />
          <meta name="copyright" content="© 2021 Albert-Anderi Moldovanu" />

          {/* <!-- Primary Meta Tags --> */}
          <title>Albert-Andrei Moldovanu</title>
          <meta name="title" content="Albert-Andrei Moldovanu" />
          <meta
            name="description"
            content="This website is my portfolio, here I share my projects, skills, contact information, and a lot of useful stuff. Feel free to take a look :D"
          />
          <meta name="image" content="https://aamoldovanu.com/preview.jpg" />

          {/* <!-- Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aamoldovanu.com/" />
          <meta property="og:title" content="Albert-Andrei Moldovanu" />
          <meta
            property="og:description"
            content="This website is my portfolio, here I share my projects, skills, contact information, and a lot of useful stuff. Feel free to take a look :D"
          />
          <meta
            property="og:image"
            content="https://aamoldovanu.com/preview.jpg"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:domain" content="aamoldovanu.com" />
          <meta property="twitter:title" content="Albert-Andrei Moldovanu" />
          <meta
            property="twitter:description"
            content="This website is my portfolio, here I share my projects, skills, contact information, and a lot of useful stuff. Feel free to take a look :D"
          />
          <meta
            property="twitter:image"
            content="https://aamoldovanu.com/preview.jpg"
          />

          {styles}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="preload"
            as="font"
          ></link>
        </Head>
        <body>
          {/* Google Tag Manager */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
