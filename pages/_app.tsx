import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
      <meta property='og:locale' content='en_EN' />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
