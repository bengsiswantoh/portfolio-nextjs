import { Container, Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello
      </Box>

      <Box display="flex">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Bengsiswanto Hendrawan
          </Heading>
        </Box>
      </Box>
    </Container>
  );
}
