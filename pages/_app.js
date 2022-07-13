// import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
