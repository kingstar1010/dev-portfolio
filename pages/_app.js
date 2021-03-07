import '../styles/globals.css'
import '../styles/landing.css';
import '../styles/navbar.css';
import '../styles/sidebar.css';
import '../styles/contact.css';
import '../styles/about.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
