import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import '@/styles/globals.css';

import Layout from '../components/Layout';
import Fonts from '../components/Fonts';
import theme from '../theme';

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
