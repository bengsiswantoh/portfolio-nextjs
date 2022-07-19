import { List, ListItem, Link, Button } from "@chakra-ui/react";

const ItemList = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={index}>
        <Link href={item.url} target="_blank">
          <Button variant="ghost" colorScheme="teal">
            {item.name}
          </Button>
        </Link>
      </ListItem>
    ))}
  </List>
);

export default ItemList;
