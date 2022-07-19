import {
  UnorderedList,
  ListItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";

import ProjectList from "./ProjectList";

const ExperienceList = ({ experiences }) => (
  <UnorderedList>
    {experiences.map((experience, index) => (
      <ListItem key={index} my={5}>
        <Stat>
          <StatLabel>
            {experience.start} - {experience.end} ({experience.company})
          </StatLabel>
          <StatNumber>{experience.title}</StatNumber>
        </Stat>

        <ProjectList projects={experience.projects} />
      </ListItem>
    ))}
  </UnorderedList>
);
export default ExperienceList;
