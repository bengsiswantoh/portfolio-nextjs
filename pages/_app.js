// import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/layouts";
import Fonts from "../components/fonts";
import theme from "../theme";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
