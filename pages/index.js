import NextLink from "next/link";
import Image from "next/image";
import {
  Container,
  Box,
  Heading,
  List,
  ListItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Link,
  Button,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";

import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Article from "../components/Article";
import { BioSection, BioYear } from "../components/Bio";

import about from "../data/about";
import contacts from "../data/contacts";
import experiences from "../data/experiences";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default function Home() {
  return (
    <Article>
      <Container pt={12}>
        {/* <Box
          borderRadius="lg"
          p={3}
          mb={6}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello
        </Box> */}

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
            About
          </Heading>

          <Paragraph>{about}</Paragraph>

          {/* <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box> */}
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>

          <List>
            {experiences.map((experience, index) => {
              return (
                <ListItem key={index}>
                  <Stat>
                    <StatLabel>
                      {experience.start} - {experience.end}
                    </StatLabel>
                    <StatNumber>{experience.company}</StatNumber>
                    <StatHelpText>{experience.title}</StatHelpText>
                  </Stat>
                </ListItem>
              );
            })}
          </List>

          {/* <BioSection>
            <BioYear>2020</BioYear>
            A
          </BioSection>

          <BioSection>
            <BioYear>2000</BioYear>
            b
          </BioSection> */}
        </Section>

        <Section delay={0.3}>
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
      </Container>
    </Article>
  );
}
