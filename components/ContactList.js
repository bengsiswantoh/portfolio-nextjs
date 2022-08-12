import { List, ListItem, Link, Button } from "@chakra-ui/react";

import { IoMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const icons = {
  email: <IoMail />,
  github: <IoLogoGithub />,
  linkedin: <IoLogoLinkedin />,
};

const ContactList = ({ contacts }) => (
  <List>
    {contacts.map((contact, index) => (
      <ListItem key={index}>
        <Link href={contact.url} target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={icons[contact.type]}
          >
            {contact.name}
          </Button>
        </Link>
      </ListItem>
    ))}
  </List>
);
export default ContactList;
