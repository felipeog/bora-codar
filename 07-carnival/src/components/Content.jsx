import {
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  Text,
  TabPanels,
  TabPanel,
  HStack,
} from "@chakra-ui/react";

import { ListView } from "./ListView";
import { MapView } from "./MapView";

function Content() {
  return (
    <Flex width={960} marginX="auto" paddingY={20} as="section">
      <Tabs variant="soft-rounded" width="100%">
        <HStack justifyContent="space-between">
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
        </HStack>

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
