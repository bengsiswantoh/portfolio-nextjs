import Head from "next/head";

import Header from "../components/Header";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Bengsiswanto Hendrawan</title>
      </Head>

      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
