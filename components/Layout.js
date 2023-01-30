import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Box, Container } from '@chakra-ui/react';

import Navbar from './Navbar';
// import VoxelLoader from "../voxel-loader";

// const LazyVoxel = dynamic(() => import("../voxel-dog"), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />,
// });

const Layout = ({ children, router }) => (
  <Box as="main" pb={8}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Bengsiswanto's homepage" />
      <meta name="author" content="Bengsiswanto Hendrawan" />
      <title>Bengsiswanto Hendrawan</title>
    </Head>

    <Navbar path={router.asPath} />

    <Container maxW="container.md" pt={14}>
      {/* <LazyVoxelDog /> */}

      {children}
    </Container>
  </Box>
);

export default Layout;
