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
        <title>Albert-Andrei Moldovanu</title>
        <meta charset="UTF-8" />
        <meta name="description" content="This website is Albert's portfolio" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Albert-Andrei Moldovanu" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
