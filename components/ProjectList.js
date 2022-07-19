import { OrderedList, ListItem } from "@chakra-ui/react";

import Tools from "./Tools";

const ProjectList = ({ projects }) => (
  <OrderedList>
    {projects.map((project, index) => (
      <ListItem key={index}>
        <p>{project.name}</p>
        <p>
          <Tools tools={project.tools} />
        </p>
      </ListItem>
    ))}
  </OrderedList>
);

export default ProjectList;
