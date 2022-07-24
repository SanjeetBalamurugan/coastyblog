import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy='lazyOnload' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7587426308752562"
        crossorigin="anonymous"></Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
