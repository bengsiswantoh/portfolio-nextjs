import { List, ListItem, Link, Button } from "@chakra-ui/react";

const ContactList = ({ contacts }) => (
  <List>
    {contacts.map((contact, index) => (
      <ListItem key={index}>
        <Link href={contact.url} target="_blank">
          <Button variant="ghost" colorScheme="teal" leftIcon={contact.icon}>
            {contact.title}
          </Button>
        </Link>
      </ListItem>
    ))}
  </List>
);
export default ContactList;
