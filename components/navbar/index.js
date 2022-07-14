import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Stack,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Logo from "../logo";
import ThemeToggleButton from "../theme-toggle-button";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "linkBgActive" : undefined}
        color={active ? "linkColorActive" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  const items = [
    { title: "Works", path: "/works" },
    { title: "Posts", path: "/posts" },
  ];

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("navLight", "navDark")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {items.map((item, index) => {
            return (
              <LinkItem href={item.path} path={path} key={index}>
                {item.title}
              </LinkItem>
            );
          })}
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {items.map((item, index) => {
                  return (
                    <NextLink href={item.path} passHref key={index}>
                      <MenuItem as={Link}>{item.title}</MenuItem>
                    </NextLink>
                  );
                })}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
