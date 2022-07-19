import { UnorderedList, ListItem, Badge } from "@chakra-ui/react";

const Tools = ({ tools }) => (
  <>
    {tools.map((tool, index) => (
      <Badge key={index} mx={1}>
        {tool}
      </Badge>
    ))}
  </>
);

const ProjectList = ({ projects }) => (
  <UnorderedList>
    {projects.map((project, index) => (
      <ListItem key={index}>
        <p>{project.name}</p>
        <p>
          <Tools tools={project.tools} />
        </p>
      </ListItem>
    ))}
  </UnorderedList>
);

export default ProjectList;
