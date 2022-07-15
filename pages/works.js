import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";

import Section from "../components/section";
import Article from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";

const Works = () => (
  <Article title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="work1" title="Work 1">
            Work 1
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="work2" title="Work 2">
            Work 2
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="work3" title="Work 3">
            Work 3
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="work4" title="Work 4">
            Work 4
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Article>
);

export default Works;
