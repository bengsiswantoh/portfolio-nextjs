import NextLink from "next/link";
import Image from "next/image";
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";

import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Article from "../components/Article";
import ExperienceList from "../components/ExperienceList";
import ContactList from "../components/ContactList";
import ItemList from "../components/ItemList";
import { BioSection, BioYear } from "../components/Bio";

import about from "../data/about";
import contacts from "../data/contacts";
import experiences from "../data/experiences";
import personalProjects from "../data/personalProjects";
import certifications from "../data/certifications";

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
            Experiences
          </Heading>

          <ExperienceList experiences={experiences} />

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
            Personal Projects
          </Heading>

          <ItemList items={personalProjects} />
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Certifications
          </Heading>

          <ItemList items={certifications} />
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Contacts
          </Heading>

          <ContactList contacts={contacts} />
        </Section>
      </Container>
    </Article>
  );
}
