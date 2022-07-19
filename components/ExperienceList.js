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
      <ListItem key={index}>
        <Stat>
          <StatLabel>
            {experience.start} - {experience.end}
          </StatLabel>
          <StatNumber>{experience.company}</StatNumber>
          <StatHelpText>{experience.title}</StatHelpText>
        </Stat>

        <ProjectList projects={experience.projects} />
      </ListItem>
    ))}
  </UnorderedList>
);
export default ExperienceList;
