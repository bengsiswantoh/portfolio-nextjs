import { Badge } from "@chakra-ui/react";

const Tools = ({ tools }) => (
  <>
    {tools.map((tool, index) => (
      <Badge key={index} mx={1}>
        {tool}
      </Badge>
    ))}
  </>
);

export default Tools;
