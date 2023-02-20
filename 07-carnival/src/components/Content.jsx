import {
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  Text,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { ListView } from "./ListView";
import { MapView } from "./MapView";

function Content() {
  return (
    <Flex width={960} marginX="auto" paddingY={20} as="section">
      <Tabs variant="solid-rounded" width="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="md">
            Blocos recomendados
          </Heading>

          <TabList>
            <Tab>
              <Text textTransform="uppercase" fontSize="xs">
                Lista
              </Text>
            </Tab>
            <Tab>
              <Text textTransform="uppercase" fontSize="xs">
                Mapa
              </Text>
            </Tab>
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel padding={0}>
            <ListView />
          </TabPanel>
          <TabPanel padding={0}>
            <MapView />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export { Content };
