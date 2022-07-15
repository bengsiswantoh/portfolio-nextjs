import NextLink from "next/link";
import Image from "next/image";
import {
  Container,
  Box,
  Heading,
  List,
  ListItem,
  Link,
  Button,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Article from "../components/layouts/article";
import { BioSection, BioYear } from "../components/bio";

import contacts from "../data/contacts";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default function Home() {
  return (
    <Article>
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          mb={6}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Bengsiswanto Hendrawan
            </Heading>
            <p>Software Engineer</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              {/* <ProfileImage
              src="/images/"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            /> */}
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Contacts
          </Heading>

          <List>
            {contacts.map((contact, index) => {
              return (
                <ListItem key={index}>
                  <Link href={contact.url} target="_blank">
                    <Button
                      variant="ghost"
                      colorScheme="teal"
                      leftIcon={contact.icon}
                    >
                      {contact.title}
                    </Button>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>

          <Paragraph>Paragraph</Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>

          <BioSection>
            <BioYear>Aug 2019 - Present</BioYear>
            PT. Padi Internet, Software Engineer
          </BioSection>

          <BioSection>
            <BioYear>Nov 2009 - Jul 2019</BioYear>
            PT. Dutakom Wibawa Putra, IT-Application Supervisor
          </BioSection>
        </Section>
      </Container>
    </Article>
  );
}
